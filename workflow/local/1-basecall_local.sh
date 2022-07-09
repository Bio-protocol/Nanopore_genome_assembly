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
pushd $mycanonicalpath

####################################
# define variables
infolder=input/ont_fast5/fast5 # input folder 
flowcell=FLO-MIN106 # Flow cell
kit=SQK-LSK109 # Ligation kit
trim=dna # trimming strategy
nbc=4 # number of basecallers
cpb=4 # cpus per basecaller
outdir=cache/1o-basecall # create a output folder
mkdir $outdir # create a output folder
infastq=cache/1o-basecall/pass/*fastq # the input data
out=demo # the prefix of output genome assembly. please change this variable for your real data
mergefastq=cache/1o-basecall/$out.fastq # the merged input data
############################################################


# Merge the multiple fastq files
cat $infastq >  $mergefastq
####################################


# base call using cpu  4 cpu threads per caller and 4 callers in total. Please adjust the number callers based on the computation resource.

lib/ont-guppy-cpu/bin/guppy_basecaller	-i $infolder \
					--save_path $outdir \
					--trim_strategy	$trim \
					--flowcell $flowcell \
					--kit $kit \
					--cpu_threads_per_caller $cpb \
					--num_callers $nbc
#  --resume   Resume a previous basecall run using the same output folder.						
# if GPU available, please download the gpu version guppy from Oxford Nanopore website and modify the code.						


popd
