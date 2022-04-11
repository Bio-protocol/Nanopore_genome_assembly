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

# output directory
outdir=output/final_genome_qc
mkdir $outdir
outprefix=polished2ref

########################################
 dnadiff -p $outdir/$outprefix input/ref.fasta output/demo.v0.1.np.pilon.fasta
 show-coords $outdir/${outprefix}.delta > $outdir/${outprefix}.aligned.txt
 show-snps $outdir/${outprefix}.delta > $outdir/${outprefix}.variants.txt
