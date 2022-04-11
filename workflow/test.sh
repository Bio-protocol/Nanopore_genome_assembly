source activate base
conda activate npasm

#######################################################################

########################################
# out directory
nanopolish -h
npDir=$(`which nanopolish`| sed 's/nanopolish//')
echo $npDir


