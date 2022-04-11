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
out=demo # changing this variable for your real data
infastq=cache/1o-basecall/${out}.fastq

# out directory
outdir=cache/3o-nanopolish
mkdir $outdir
mypath=`pwd`
seqsumList=$mypath/$outdir/1o-seqsum_list
log=$mypath/$outdir/1o-run.log
reads=$mypath/$outdir/ont.fastq
f5Dir=$mypath/input/ont_fast5/fast5
fqsum_dir=$mypath/cache/1o-basecall/sequencing_summary.txt
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
bam=$mypath/$outdir/$outaln.bam
log=$mypath/$outdir/np.log
##########################################################

# nanopolish
# nanopolish
# https://nanopolish.readthedocs.io/en/latest/quickstart_consensus.html
date > $log

nanopolish variants --consensus -o $outdir/polished.vcf \
    -r $reads \
    -b $bam \
    -g $ref \
    >> $log

nanopolish vcf2fasta --skip-checks -g $ref $outdir/polished.vcf 1> $outdir/${out}.v0.1.$prefix.fasta 2>>$log
date >> $log

popd

conda deactivate
