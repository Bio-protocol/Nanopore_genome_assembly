#!/bin/sh

####################################
# normalize your dir to the root level of the repo
function canonicalPath
{
    local path="$1" ; shift
    if [ -d "$path" ]
    then
        echo "$(cd "$path" ; pwd)"
    else
        local b=$(basename "$path")
        local p=$(dirname "$path")
        echo "$(cd "$p" ; pwd)/$b"
    fi
}
####################################
# usage example
mycanonicalpath=$(canonicalPath "../")
echo $mycanonicalpath
pushd $mycanonicalpath
source activate base
conda activate npasm

#######################################################################

out=demo
infastq=cache/1o-basecall/${out}.fastq
########################################
# out directory
outdir=cache/3o-nanopolish
mkdir $outdir
mkdir $outdir/2o-split
mypath=`pwd`
seqsumList=$mypath/$outdir/1o-seqsum_list
log=$mypath/$outdir/1o-run.log
reads=$mypath/$outdir/ont.fastq
f5Dir=$mypath/input/ont_fast5/fast5
fqsum_dir=$mypath/cache/1o-basecall/*/*/sequencing_summary.txt
npDir=$(which nanopolish| sed 's/nanopolish//')
echo $npDir
ref=$mypath/cache/2o-${out}.asmv0.1/${out}.v0.1.contigs.fasta
outaln=2o-example


ncpu=4

########################################################################

# reads index
## filter reads less than 5kb
seqtk seq -L 5000 $infastq > $reads

## generate a list for sequencing_summary.txt, including full paths
ls -1 $fqsum_dir > $seqsumList

## index reads:
nanopolish index -d $f5Dir -f $seqsumList $reads &>$log


# alignment
minimap2 -ax map-ont --secondary=no $ref $reads 1>$outdir/$outaln.sam 2>$outdir/$outaln.log

## bam and sort
samtools view -b $outdir/$outaln.sam | samtools sort -o $outdir/$outaln.bam
samtools index $outdir/$outaln.bam
rm $outdir/$outaln.sam

##########################################################
prefix=np
npcor=$mypath/lib/npcor
scriptDir=$mypath/lib
bam=$mypath/$outdir/$outaln.bam
splitseqDir=$mypath/$outdir/2o-split
log=$mypath/$outdir/np.log
##########################################################

# nanopolish

date > $log

# spliting
echo "1. split fasta" &>>$log

if [ -d $splitseqDir ]; then
        rm -rf $splitseqDir
fi
mkdir $splitseqDir
pushd $splitseqDir
perl $scriptDir/split.fasta.pl --num 1 --prefix $prefix --decrease $ref &>>$log

cd ..

echo "2. run NP correction" &>>$log
# run correction
#conda deactivate
for ctg in $splitseqDir/*[0-9]; do
        echo "np: "$ctg >> $log
        $npcor -n $npDir -f $ctg -r $reads -b $bam \
                -s $scriptDir \
                -c $ncpu \
                -g 8g \
                -y 1 \
                >> $log
done
date >> $log
popd

conda deactivate
