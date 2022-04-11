#!/bin/sh
echo "# start basecall" > ../output/np.asm.log
date >> ../output/np.asm.log
bash local/1-basecall_local.sh

echo "# start canu assembling" >> ../output/np.asm.log
date >> ../output/np.asm.log
bash local/2-asm_local.sh

echo "# start nanopolish" >> ../output/np.asm.log
date >> ../output/np.asm.log
bash local/3-nanopolish_local.sh

echo "# start pilon" >> ../output/np.asm.log
date >> ../output/np.asm.log
bash local/4-pilon.sh

echo "# start qc" >> ../output/np.asm.log
date >> ../output/np.asm.log
bash local/5-qc.sh

echo "# finish" >> ../output/np.asm.log
date >> ../output/np.asm.log
