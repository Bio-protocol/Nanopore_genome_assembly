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

#define variables
# out directory
outdir=cache/4o-pilon
mkdir $outdir
out=demo
mypath=`pwd`
########################################
pilonJar=$mypath/lib/pilon-1.24.jar
ref=$mypath/cache/3o-nanopolish/${out}.v0.1.np.fasta
refname=$(echo $ref |sed 's/.*\///g')
newasm=$mypath/$outdir/${out}.v0.1.np.pilon.fasta
log=$mypath/$outdir/4o-pilon.log
pe1=$mypath/input/illumina_fastq/B71_example.illumina.R1.pair.fq.gz
pe2=$mypath/input/illumina_fastq/B71_example.illumina.R2.pair.fq.gz
#########################################
# tmp directory
tmpdir=1otmp
mkdir $outdir/$tmpdir

# aln
pushd $outdir/$tmpdir
ln -s $ref .
bwa index $refname
out=1o-read2asm
# alignment
bwa mem $refname $pe1 $pe2 > ${out}.sam

# sam2bam
samtools view -b $out.sam -o ${out}.bam
samtools sort ${out}.bam -o ${out}.sort.bam
samtools index ${out}.sort.bam

cd ..

# pilon
java -Xmx96g -jar $pilonJar \
        --genome $tmpdir/$refname \
        --frags $tmpdir/${out}.sort.bam \
        --output 4o-pilon \
        --outdir . \
        --minmq 40 \
        --minqual 15 \
        --changes --vcf &>$log

# cleanup
rm -rf $tmpdir


sed 's/_pilon//g' 4o-pilon.fasta >$newasm
rm 4o-pilon.fasta

popd
cp $newasm output 
popd
conda deactivate
