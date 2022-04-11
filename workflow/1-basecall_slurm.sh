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

####################################
# input folder 
infolder=input/ont_fast5
# flowcell and kit
flowcell=FLO-MIN106
kit=SQK-LSK109
# trimming strategy
trim=dna
# number of array jobs
nj=6
# cpu per array job
cpj=10
# create a output folder
outdir=cache/1o-basecall
mkdir $outdir
####################################



# base call using cpu with maximum 100 of array jobs, and each job requires 10 cpus.

lib/cpuGuppy -d $infolder -o $outdir\
                -s lib/ont-guppy-cpu/bin \
                -k $kit \
                -c $flowcell \
                -t $trim \
                -n $nj \
                -u $cpj

popd
