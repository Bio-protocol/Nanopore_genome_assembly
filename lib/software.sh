##  check  Nanopore Community page for latest version of Guppy Basecaller
wget https://mirror.oxfordnanoportal.com/software/analysis/ont-guppy-cpu_6.0.6_linux64.tar.gz
tar -xvzf ont-guppy-cpu_6.0.6_linux64.tar.gz
rm ont-guppy-cpu_6.0.6_linux64.tar.gz
#macos
curl -L -o ont-guppy-cpu_6.0.6_osx64.zip https://mirror.oxfordnanoportal.com/software/analysis/ont-guppy-cpu_6.0.6_osx64.zip





## Install Canu
git clone https://github.com/marbl/canu.git
pushd  canu/src
make
popd

## Install Nanopolish
### Loman, N., Quick, J. & Simpson, J. A complete bacterial genome assembled de novo using only nanopore sequencing data. Nat Methods 12, 733–735 (2015). https://doi.org/10.1038/nmeth.3444
git clone --recursive https://github.com/jts/nanopolish.git
pushd nanopolish
make
popd

#git clone https://github.com/lh3/minimap2
#pushd minimap2
#make
#popd

#
wget https://github.com/broadinstitute/pilon/releases/download/v1.24/pilon-1.24.jar

conda create -n npasm -c bioconda
conda activate npasm
conda install samtools -c bioconda
conda install -c conda-forge openjdk
conda install -c bioconda seqtk
conda install -c bioconda minimap2
conda install -c bioconda perl
conda install -c bioconda bwa
conda deactivate

