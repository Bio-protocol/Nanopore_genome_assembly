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

infastq=cache/1o-basecall/*/*/pass/*fastq
out=demo
mergefastq=cache/1o-basecall/${out}.fastq
cat $infastq >  $mergefastq
# run can
	canu -d cache/2o-$out.asmv0.1 -p ${out}.v0.1 \
        genomeSize=50k \
        minReadLength=5000 \
        minOverlapLength=1000 \
        -nanopore $mergefastq \
        corOutCoverage=60 \
	&> cache/2o-${out}.asmv0.1.log 
conda deactivate
