#!/bin/bash -l
module load Java/1.8.0_192

if [ -f $partitionOut ]; then
	vcflist=3-vcf.list
	# check the completeness of vcf files:
	completed=1
	npartition=`wc -l $partitionOut | sed 's/ .*//g'`
	for row in `seq 1 $npartition`; do
		if [ ! -s $wd/vcf/$prefix.$row.vcf ]; then
			echo "$prefix.$row.vcf was not generated."
			completed=0;
		fi
	done

	# if completed:
	if [ $completed -eq 1 ]; then
		# merge
		mergevcf=4-merged.vcf
		ls $wd/vcf/*vcf -1 > $vcflist
		/homes/guifanglin/bin/GATK/gatk-4.2.0.0/gatk CreateSequenceDictionary -R $seq
		seqdict=`echo $seq | sed 's/fasta$/dict/g'`
		/homes/guifanglin/bin/GATK/gatk-4.2.0.0/gatk MergeVcfs -O $mergevcf -I $vcflist -D $seqdict

		# generate fasta
		$np/nanopolish vcf2fasta --skip-checks -g $seq $mergevcf > $wd/polished/polished.$prefix
	else
		echo "Not all vcf were generated"
		exit 1
	fi
else
	# TF05-1ONTv011conig1.tig00000149:1-42502.vcf
	outvcf=`ls $wd/vcf/*vcf -1`
	$np/nanopolish vcf2fasta --skip-checks -g $seq $outvcf > $wd/polished/polished.$prefix
fi
