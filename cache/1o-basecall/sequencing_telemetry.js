[
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 11
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 17.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 11, 
                "mean": 14.167466163635254, 
                "sum": 155.84213256835938
            }, 
            "read_len_events_sum_temp": 527717, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 11, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 11, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 14000.0
                }, 
                {
                    "count": 1, 
                    "length": 16000.0
                }, 
                {
                    "count": 1, 
                    "length": 23000.0
                }, 
                {
                    "count": 1, 
                    "length": 37000.0
                }, 
                {
                    "count": 1, 
                    "length": 53000.0
                }, 
                {
                    "count": 1, 
                    "length": 56000.0
                }, 
                {
                    "count": 1, 
                    "length": 70000.0
                }, 
                {
                    "count": 1, 
                    "length": 78000.0
                }, 
                {
                    "count": 1, 
                    "length": 80000.0
                }, 
                {
                    "count": 1, 
                    "length": 91000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 11, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 11, 
                "mean": 78.558624267578125, 
                "sum": 864.1448974609375
            }, 
            "strand_sd_pa": {
                "count": 11, 
                "mean": 9.831818580627441, 
                "sum": 108.1500015258789
            }
        }, 
        "channel_count": 11, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 2997.74951171875, 
        "levels_sums": {
            "count": 11, 
            "mean": 212.7685089111328, 
            "open_pore_level_sum": 2340.45361328125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 11, 
        "reads_per_channel_dist": [
            {
                "channel": 24, 
                "count": 1
            }, 
            {
                "channel": 132, 
                "count": 1
            }, 
            {
                "channel": 159, 
                "count": 1
            }, 
            {
                "channel": 168, 
                "count": 1
            }, 
            {
                "channel": 182, 
                "count": 1
            }, 
            {
                "channel": 198, 
                "count": 1
            }, 
            {
                "channel": 263, 
                "count": 1
            }, 
            {
                "channel": 265, 
                "count": 1
            }, 
            {
                "channel": 299, 
                "count": 1
            }, 
            {
                "channel": 339, 
                "count": 1
            }, 
            {
                "channel": 477, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "b30c808a-64cb-4ed1-82b1-bbe160ee632a", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 8
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 15.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 8, 
                "mean": 14.471199035644531, 
                "sum": 115.76959228515625
            }, 
            "read_len_events_sum_temp": 573665, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 8, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 8, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 47000.0
                }, 
                {
                    "count": 1, 
                    "length": 48000.0
                }, 
                {
                    "count": 1, 
                    "length": 49000.0
                }, 
                {
                    "count": 1, 
                    "length": 55000.0
                }, 
                {
                    "count": 1, 
                    "length": 56000.0
                }, 
                {
                    "count": 1, 
                    "length": 85000.0
                }, 
                {
                    "count": 1, 
                    "length": 104000.0
                }, 
                {
                    "count": 1, 
                    "length": 125000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 8, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 8, 
                "mean": 76.95796203613281, 
                "sum": 615.6636962890625
            }, 
            "strand_sd_pa": {
                "count": 8, 
                "mean": 9.84780502319336, 
                "sum": 78.782440185546875
            }
        }, 
        "channel_count": 8, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 7078.732421875, 
        "levels_sums": {
            "count": 8, 
            "mean": 209.90103149414062, 
            "open_pore_level_sum": 1679.208251953125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 8, 
        "reads_per_channel_dist": [
            {
                "channel": 28, 
                "count": 1
            }, 
            {
                "channel": 149, 
                "count": 1
            }, 
            {
                "channel": 190, 
                "count": 1
            }, 
            {
                "channel": 301, 
                "count": 1
            }, 
            {
                "channel": 350, 
                "count": 1
            }, 
            {
                "channel": 352, 
                "count": 1
            }, 
            {
                "channel": 407, 
                "count": 1
            }, 
            {
                "channel": 466, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 2, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "9e7973c2-aa1a-4f6c-88eb-d7c7e2260b25", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 11
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 16.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 16.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 11, 
                "mean": 14.958786964416504, 
                "sum": 164.54666137695312
            }, 
            "read_len_events_sum_temp": 774645, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 11, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 11, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 14000.0
                }, 
                {
                    "count": 1, 
                    "length": 19000.0
                }, 
                {
                    "count": 1, 
                    "length": 26000.0
                }, 
                {
                    "count": 1, 
                    "length": 66000.0
                }, 
                {
                    "count": 1, 
                    "length": 67000.0
                }, 
                {
                    "count": 2, 
                    "length": 75000.0
                }, 
                {
                    "count": 1, 
                    "length": 102000.0
                }, 
                {
                    "count": 1, 
                    "length": 105000.0
                }, 
                {
                    "count": 1, 
                    "length": 107000.0
                }, 
                {
                    "count": 1, 
                    "length": 113000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 11, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 11, 
                "mean": 75.71299743652344, 
                "sum": 832.84295654296875
            }, 
            "strand_sd_pa": {
                "count": 11, 
                "mean": 9.671952247619629, 
                "sum": 106.39147186279297
            }
        }, 
        "channel_count": 11, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 10576.7822265625, 
        "levels_sums": {
            "count": 11, 
            "mean": 211.0303192138672, 
            "open_pore_level_sum": 2321.33349609375
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 11, 
        "reads_per_channel_dist": [
            {
                "channel": 37, 
                "count": 1
            }, 
            {
                "channel": 76, 
                "count": 1
            }, 
            {
                "channel": 94, 
                "count": 1
            }, 
            {
                "channel": 99, 
                "count": 1
            }, 
            {
                "channel": 121, 
                "count": 1
            }, 
            {
                "channel": 270, 
                "count": 1
            }, 
            {
                "channel": 368, 
                "count": 1
            }, 
            {
                "channel": 382, 
                "count": 1
            }, 
            {
                "channel": 400, 
                "count": 1
            }, 
            {
                "channel": 410, 
                "count": 1
            }, 
            {
                "channel": 420, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 3, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "8ba6b31d-ae2c-41e7-9e90-7bb6f2467a16", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 14
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 16.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 17.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 17.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 14, 
                "mean": 15.036423683166504, 
                "sum": 210.5099334716797
            }, 
            "read_len_events_sum_temp": 978792, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 14, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 14, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 29000.0
                }, 
                {
                    "count": 1, 
                    "length": 37000.0
                }, 
                {
                    "count": 1, 
                    "length": 46000.0
                }, 
                {
                    "count": 1, 
                    "length": 67000.0
                }, 
                {
                    "count": 1, 
                    "length": 73000.0
                }, 
                {
                    "count": 1, 
                    "length": 79000.0
                }, 
                {
                    "count": 1, 
                    "length": 99000.0
                }, 
                {
                    "count": 1, 
                    "length": 110000.0
                }, 
                {
                    "count": 1, 
                    "length": 111000.0
                }, 
                {
                    "count": 1, 
                    "length": 142000.0
                }, 
                {
                    "count": 1, 
                    "length": 157000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 14, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 14, 
                "mean": 76.74756622314453, 
                "sum": 1074.4659423828125
            }, 
            "strand_sd_pa": {
                "count": 14, 
                "mean": 9.709634780883789, 
                "sum": 135.9348907470703
            }
        }, 
        "channel_count": 14, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 14337.056640625, 
        "levels_sums": {
            "count": 14, 
            "mean": 214.82449340820312, 
            "open_pore_level_sum": 3007.54296875
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 14, 
        "reads_per_channel_dist": [
            {
                "channel": 130, 
                "count": 1
            }, 
            {
                "channel": 163, 
                "count": 1
            }, 
            {
                "channel": 167, 
                "count": 1
            }, 
            {
                "channel": 170, 
                "count": 1
            }, 
            {
                "channel": 173, 
                "count": 1
            }, 
            {
                "channel": 188, 
                "count": 1
            }, 
            {
                "channel": 297, 
                "count": 1
            }, 
            {
                "channel": 308, 
                "count": 1
            }, 
            {
                "channel": 374, 
                "count": 1
            }, 
            {
                "channel": 381, 
                "count": 1
            }, 
            {
                "channel": 385, 
                "count": 1
            }, 
            {
                "channel": 405, 
                "count": 1
            }, 
            {
                "channel": 420, 
                "count": 1
            }, 
            {
                "channel": 461, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 4, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "4f59bae7-076d-4304-b1d2-0854f50c588f", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 14
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 16.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 14, 
                "mean": 13.88570499420166, 
                "sum": 194.39987182617188
            }, 
            "read_len_events_sum_temp": 715702, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 14, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 14, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 25000.0
                }, 
                {
                    "count": 1, 
                    "length": 26000.0
                }, 
                {
                    "count": 1, 
                    "length": 28000.0
                }, 
                {
                    "count": 1, 
                    "length": 36000.0
                }, 
                {
                    "count": 1, 
                    "length": 41000.0
                }, 
                {
                    "count": 1, 
                    "length": 50000.0
                }, 
                {
                    "count": 2, 
                    "length": 52000.0
                }, 
                {
                    "count": 1, 
                    "length": 58000.0
                }, 
                {
                    "count": 1, 
                    "length": 61000.0
                }, 
                {
                    "count": 1, 
                    "length": 62000.0
                }, 
                {
                    "count": 1, 
                    "length": 103000.0
                }, 
                {
                    "count": 1, 
                    "length": 107000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 14, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 14, 
                "mean": 75.61708068847656, 
                "sum": 1058.63916015625
            }, 
            "strand_sd_pa": {
                "count": 14, 
                "mean": 9.759879112243652, 
                "sum": 136.6383056640625
            }
        }, 
        "channel_count": 14, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 17899.30859375, 
        "levels_sums": {
            "count": 14, 
            "mean": 209.69839477539062, 
            "open_pore_level_sum": 2935.777587890625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 14, 
        "reads_per_channel_dist": [
            {
                "channel": 14, 
                "count": 1
            }, 
            {
                "channel": 31, 
                "count": 1
            }, 
            {
                "channel": 41, 
                "count": 1
            }, 
            {
                "channel": 80, 
                "count": 1
            }, 
            {
                "channel": 260, 
                "count": 1
            }, 
            {
                "channel": 262, 
                "count": 1
            }, 
            {
                "channel": 304, 
                "count": 1
            }, 
            {
                "channel": 308, 
                "count": 1
            }, 
            {
                "channel": 374, 
                "count": 1
            }, 
            {
                "channel": 390, 
                "count": 1
            }, 
            {
                "channel": 416, 
                "count": 1
            }, 
            {
                "channel": 483, 
                "count": 1
            }, 
            {
                "channel": 486, 
                "count": 1
            }, 
            {
                "channel": 496, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 5, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "18a5f518-ddad-4d9a-b3dc-45cb9414dcb0", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 11
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 11, 
                "mean": 13.266643524169922, 
                "sum": 145.93307495117188
            }, 
            "read_len_events_sum_temp": 789032, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 11, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 11, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 2000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 45000.0
                }, 
                {
                    "count": 1, 
                    "length": 61000.0
                }, 
                {
                    "count": 1, 
                    "length": 62000.0
                }, 
                {
                    "count": 1, 
                    "length": 79000.0
                }, 
                {
                    "count": 1, 
                    "length": 94000.0
                }, 
                {
                    "count": 1, 
                    "length": 106000.0
                }, 
                {
                    "count": 2, 
                    "length": 107000.0
                }, 
                {
                    "count": 1, 
                    "length": 112000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 11, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 11, 
                "mean": 76.1126708984375, 
                "sum": 837.2393798828125
            }, 
            "strand_sd_pa": {
                "count": 11, 
                "mean": 9.703925132751465, 
                "sum": 106.74317932128906
            }
        }, 
        "channel_count": 10, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 21561.908203125, 
        "levels_sums": {
            "count": 11, 
            "mean": 210.500732421875, 
            "open_pore_level_sum": 2315.508056640625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 11, 
        "reads_per_channel_dist": [
            {
                "channel": 13, 
                "count": 2
            }, 
            {
                "channel": 97, 
                "count": 1
            }, 
            {
                "channel": 136, 
                "count": 1
            }, 
            {
                "channel": 158, 
                "count": 1
            }, 
            {
                "channel": 292, 
                "count": 1
            }, 
            {
                "channel": 422, 
                "count": 1
            }, 
            {
                "channel": 423, 
                "count": 1
            }, 
            {
                "channel": 452, 
                "count": 1
            }, 
            {
                "channel": 490, 
                "count": 1
            }, 
            {
                "channel": 507, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 6, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "2d5cfd70-9937-40ff-a514-b2e6629ab2a5", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2, 
                "pass": 11
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 16.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 16.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 13, 
                "mean": 13.765018463134766, 
                "sum": 178.9452362060547
            }, 
            "read_len_events_sum_temp": 536727, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 13, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 13, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 23000.0
                }, 
                {
                    "count": 1, 
                    "length": 30000.0
                }, 
                {
                    "count": 1, 
                    "length": 38000.0
                }, 
                {
                    "count": 1, 
                    "length": 39000.0
                }, 
                {
                    "count": 1, 
                    "length": 41000.0
                }, 
                {
                    "count": 1, 
                    "length": 50000.0
                }, 
                {
                    "count": 1, 
                    "length": 53000.0
                }, 
                {
                    "count": 1, 
                    "length": 55000.0
                }, 
                {
                    "count": 1, 
                    "length": 59000.0
                }, 
                {
                    "count": 1, 
                    "length": 61000.0
                }, 
                {
                    "count": 1, 
                    "length": 68000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 13, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 13, 
                "mean": 78.49837493896484, 
                "sum": 1020.4788818359375
            }, 
            "strand_sd_pa": {
                "count": 13, 
                "mean": 10.064240455627441, 
                "sum": 130.8351287841797
            }
        }, 
        "channel_count": 13, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 24940.787109375, 
        "levels_sums": {
            "count": 13, 
            "mean": 216.31382751464844, 
            "open_pore_level_sum": 2812.079833984375
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 13, 
        "reads_per_channel_dist": [
            {
                "channel": 64, 
                "count": 1
            }, 
            {
                "channel": 90, 
                "count": 1
            }, 
            {
                "channel": 114, 
                "count": 1
            }, 
            {
                "channel": 157, 
                "count": 1
            }, 
            {
                "channel": 179, 
                "count": 1
            }, 
            {
                "channel": 260, 
                "count": 1
            }, 
            {
                "channel": 364, 
                "count": 1
            }, 
            {
                "channel": 374, 
                "count": 1
            }, 
            {
                "channel": 433, 
                "count": 1
            }, 
            {
                "channel": 441, 
                "count": 1
            }, 
            {
                "channel": 480, 
                "count": 1
            }, 
            {
                "channel": 484, 
                "count": 1
            }, 
            {
                "channel": 509, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 7, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "8bd6934b-a835-4ab0-b03d-f6251d9e5552", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 14
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 15.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 14, 
                "mean": 13.616147994995117, 
                "sum": 190.62606811523438
            }, 
            "read_len_events_sum_temp": 681006, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 14, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 14, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 16000.0
                }, 
                {
                    "count": 1, 
                    "length": 17000.0
                }, 
                {
                    "count": 1, 
                    "length": 32000.0
                }, 
                {
                    "count": 1, 
                    "length": 34000.0
                }, 
                {
                    "count": 1, 
                    "length": 36000.0
                }, 
                {
                    "count": 1, 
                    "length": 40000.0
                }, 
                {
                    "count": 1, 
                    "length": 52000.0
                }, 
                {
                    "count": 1, 
                    "length": 54000.0
                }, 
                {
                    "count": 1, 
                    "length": 58000.0
                }, 
                {
                    "count": 2, 
                    "length": 70000.0
                }, 
                {
                    "count": 1, 
                    "length": 75000.0
                }, 
                {
                    "count": 1, 
                    "length": 117000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 14, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 14, 
                "mean": 77.81524658203125, 
                "sum": 1089.4134521484375
            }, 
            "strand_sd_pa": {
                "count": 14, 
                "mean": 9.6719512939453125, 
                "sum": 135.40731811523438
            }
        }, 
        "channel_count": 13, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 27997.560546875, 
        "levels_sums": {
            "count": 14, 
            "mean": 213.9732208251953, 
            "open_pore_level_sum": 2995.625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 14, 
        "reads_per_channel_dist": [
            {
                "channel": 8, 
                "count": 1
            }, 
            {
                "channel": 13, 
                "count": 1
            }, 
            {
                "channel": 21, 
                "count": 1
            }, 
            {
                "channel": 46, 
                "count": 1
            }, 
            {
                "channel": 47, 
                "count": 1
            }, 
            {
                "channel": 164, 
                "count": 1
            }, 
            {
                "channel": 169, 
                "count": 1
            }, 
            {
                "channel": 214, 
                "count": 1
            }, 
            {
                "channel": 221, 
                "count": 1
            }, 
            {
                "channel": 294, 
                "count": 1
            }, 
            {
                "channel": 318, 
                "count": 2
            }, 
            {
                "channel": 331, 
                "count": 1
            }, 
            {
                "channel": 475, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 8, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "db3febd1-c80f-4b14-b259-2e8d5cb04d84", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 14
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 15.5
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 16.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 16.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 14, 
                "mean": 14.860974311828613, 
                "sum": 208.0536346435547
            }, 
            "read_len_events_sum_temp": 839561, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 14, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 14, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 23000.0
                }, 
                {
                    "count": 1, 
                    "length": 30000.0
                }, 
                {
                    "count": 1, 
                    "length": 35000.0
                }, 
                {
                    "count": 1, 
                    "length": 45000.0
                }, 
                {
                    "count": 1, 
                    "length": 49000.0
                }, 
                {
                    "count": 1, 
                    "length": 51000.0
                }, 
                {
                    "count": 1, 
                    "length": 52000.0
                }, 
                {
                    "count": 1, 
                    "length": 65000.0
                }, 
                {
                    "count": 1, 
                    "length": 68000.0
                }, 
                {
                    "count": 2, 
                    "length": 93000.0
                }, 
                {
                    "count": 1, 
                    "length": 102000.0
                }, 
                {
                    "count": 1, 
                    "length": 123000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 14, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 14, 
                "mean": 77.46354675292969, 
                "sum": 1084.4896240234375
            }, 
            "strand_sd_pa": {
                "count": 14, 
                "mean": 9.923171043395996, 
                "sum": 138.9243927001953
            }
        }, 
        "channel_count": 14, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 32338.69140625, 
        "levels_sums": {
            "count": 14, 
            "mean": 204.1640625, 
            "open_pore_level_sum": 2858.296875
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 14, 
        "reads_per_channel_dist": [
            {
                "channel": 17, 
                "count": 1
            }, 
            {
                "channel": 72, 
                "count": 1
            }, 
            {
                "channel": 111, 
                "count": 1
            }, 
            {
                "channel": 157, 
                "count": 1
            }, 
            {
                "channel": 199, 
                "count": 1
            }, 
            {
                "channel": 270, 
                "count": 1
            }, 
            {
                "channel": 279, 
                "count": 1
            }, 
            {
                "channel": 315, 
                "count": 1
            }, 
            {
                "channel": 326, 
                "count": 1
            }, 
            {
                "channel": 352, 
                "count": 1
            }, 
            {
                "channel": 354, 
                "count": 1
            }, 
            {
                "channel": 365, 
                "count": 1
            }, 
            {
                "channel": 374, 
                "count": 1
            }, 
            {
                "channel": 493, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 9, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "fc865378-d18c-456b-bcf1-0e8b317dce82", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 20
            }, 
            "qscore_dist_temp": [
                {
                    "count": 3, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 15.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 16.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 16.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 20, 
                "mean": 14.316625595092773, 
                "sum": 286.33251953125
            }, 
            "read_len_events_sum_temp": 1233519, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 20, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 20, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 19000.0
                }, 
                {
                    "count": 1, 
                    "length": 23000.0
                }, 
                {
                    "count": 1, 
                    "length": 40000.0
                }, 
                {
                    "count": 1, 
                    "length": 45000.0
                }, 
                {
                    "count": 1, 
                    "length": 46000.0
                }, 
                {
                    "count": 1, 
                    "length": 57000.0
                }, 
                {
                    "count": 2, 
                    "length": 58000.0
                }, 
                {
                    "count": 1, 
                    "length": 61000.0
                }, 
                {
                    "count": 1, 
                    "length": 64000.0
                }, 
                {
                    "count": 1, 
                    "length": 66000.0
                }, 
                {
                    "count": 1, 
                    "length": 68000.0
                }, 
                {
                    "count": 1, 
                    "length": 76000.0
                }, 
                {
                    "count": 1, 
                    "length": 79000.0
                }, 
                {
                    "count": 1, 
                    "length": 101000.0
                }, 
                {
                    "count": 1, 
                    "length": 112000.0
                }, 
                {
                    "count": 2, 
                    "length": 119000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 20, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 20, 
                "mean": 76.19739532470703, 
                "sum": 1523.9478759765625
            }, 
            "strand_sd_pa": {
                "count": 20, 
                "mean": 9.78625774383545, 
                "sum": 195.72515869140625
            }
        }, 
        "channel_count": 20, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 35799.5546875, 
        "levels_sums": {
            "count": 20, 
            "mean": 210.1389617919922, 
            "open_pore_level_sum": 4202.779296875
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 20, 
        "reads_per_channel_dist": [
            {
                "channel": 13, 
                "count": 1
            }, 
            {
                "channel": 27, 
                "count": 1
            }, 
            {
                "channel": 55, 
                "count": 1
            }, 
            {
                "channel": 112, 
                "count": 1
            }, 
            {
                "channel": 151, 
                "count": 1
            }, 
            {
                "channel": 166, 
                "count": 1
            }, 
            {
                "channel": 167, 
                "count": 1
            }, 
            {
                "channel": 176, 
                "count": 1
            }, 
            {
                "channel": 183, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 1
            }, 
            {
                "channel": 239, 
                "count": 1
            }, 
            {
                "channel": 263, 
                "count": 1
            }, 
            {
                "channel": 306, 
                "count": 1
            }, 
            {
                "channel": 356, 
                "count": 1
            }, 
            {
                "channel": 389, 
                "count": 1
            }, 
            {
                "channel": 392, 
                "count": 1
            }, 
            {
                "channel": 399, 
                "count": 1
            }, 
            {
                "channel": 416, 
                "count": 1
            }, 
            {
                "channel": 432, 
                "count": 1
            }, 
            {
                "channel": 462, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 10, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "d2a0310b-3cd7-4574-8101-03819086f684", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 10
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 16.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 10, 
                "mean": 13.164205551147461, 
                "sum": 131.64205932617188
            }, 
            "read_len_events_sum_temp": 465417, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 10, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 10, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 41000.0
                }, 
                {
                    "count": 1, 
                    "length": 49000.0
                }, 
                {
                    "count": 1, 
                    "length": 53000.0
                }, 
                {
                    "count": 1, 
                    "length": 57000.0
                }, 
                {
                    "count": 1, 
                    "length": 60000.0
                }, 
                {
                    "count": 1, 
                    "length": 66000.0
                }, 
                {
                    "count": 1, 
                    "length": 115000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 10, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 10, 
                "mean": 77.07666778564453, 
                "sum": 770.76666259765625
            }, 
            "strand_sd_pa": {
                "count": 10, 
                "mean": 9.707122802734375, 
                "sum": 97.07122802734375
            }
        }, 
        "channel_count": 10, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 39202.85546875, 
        "levels_sums": {
            "count": 10, 
            "mean": 211.4168701171875, 
            "open_pore_level_sum": 2114.168701171875
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 10, 
        "reads_per_channel_dist": [
            {
                "channel": 99, 
                "count": 1
            }, 
            {
                "channel": 176, 
                "count": 1
            }, 
            {
                "channel": 192, 
                "count": 1
            }, 
            {
                "channel": 232, 
                "count": 1
            }, 
            {
                "channel": 244, 
                "count": 1
            }, 
            {
                "channel": 316, 
                "count": 1
            }, 
            {
                "channel": 349, 
                "count": 1
            }, 
            {
                "channel": 408, 
                "count": 1
            }, 
            {
                "channel": 448, 
                "count": 1
            }, 
            {
                "channel": 479, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 11, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "625acb60-8772-47f3-9a99-3b48909ceae7", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 9
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 15.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 9, 
                "mean": 14.473051071166992, 
                "sum": 130.25746154785156
            }, 
            "read_len_events_sum_temp": 512325, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 9, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 9, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 23000.0
                }, 
                {
                    "count": 1, 
                    "length": 25000.0
                }, 
                {
                    "count": 1, 
                    "length": 43000.0
                }, 
                {
                    "count": 1, 
                    "length": 49000.0
                }, 
                {
                    "count": 1, 
                    "length": 51000.0
                }, 
                {
                    "count": 1, 
                    "length": 65000.0
                }, 
                {
                    "count": 1, 
                    "length": 75000.0
                }, 
                {
                    "count": 1, 
                    "length": 81000.0
                }, 
                {
                    "count": 1, 
                    "length": 94000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 9, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 9, 
                "mean": 76.20326232910156, 
                "sum": 685.829345703125
            }, 
            "strand_sd_pa": {
                "count": 9, 
                "mean": 9.78918743133545, 
                "sum": 88.1026840209961
            }
        }, 
        "channel_count": 8, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 41700.2265625, 
        "levels_sums": {
            "count": 9, 
            "mean": 211.536376953125, 
            "open_pore_level_sum": 1903.827392578125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 9, 
        "reads_per_channel_dist": [
            {
                "channel": 79, 
                "count": 1
            }, 
            {
                "channel": 109, 
                "count": 1
            }, 
            {
                "channel": 172, 
                "count": 1
            }, 
            {
                "channel": 251, 
                "count": 1
            }, 
            {
                "channel": 343, 
                "count": 1
            }, 
            {
                "channel": 361, 
                "count": 1
            }, 
            {
                "channel": 404, 
                "count": 1
            }, 
            {
                "channel": 498, 
                "count": 2
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 12, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "7b6dadfc-91b0-406d-82dc-202e56bf66ab", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 19
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 15.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 16.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 19, 
                "mean": 13.75354290008545, 
                "sum": 261.31732177734375
            }, 
            "read_len_events_sum_temp": 958755, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 19, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 19, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 4000.0
                }, 
                {
                    "count": 2, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 13000.0
                }, 
                {
                    "count": 1, 
                    "length": 27000.0
                }, 
                {
                    "count": 1, 
                    "length": 40000.0
                }, 
                {
                    "count": 1, 
                    "length": 50000.0
                }, 
                {
                    "count": 1, 
                    "length": 54000.0
                }, 
                {
                    "count": 1, 
                    "length": 65000.0
                }, 
                {
                    "count": 1, 
                    "length": 70000.0
                }, 
                {
                    "count": 1, 
                    "length": 72000.0
                }, 
                {
                    "count": 1, 
                    "length": 73000.0
                }, 
                {
                    "count": 2, 
                    "length": 84000.0
                }, 
                {
                    "count": 1, 
                    "length": 90000.0
                }, 
                {
                    "count": 1, 
                    "length": 92000.0
                }, 
                {
                    "count": 1, 
                    "length": 98000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 19, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 19, 
                "mean": 78.7639389038086, 
                "sum": 1496.5147705078125
            }, 
            "strand_sd_pa": {
                "count": 19, 
                "mean": 9.958870887756348, 
                "sum": 189.2185516357422
            }
        }, 
        "channel_count": 18, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 46662.88671875, 
        "levels_sums": {
            "count": 19, 
            "mean": 216.9184112548828, 
            "open_pore_level_sum": 4121.44970703125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 19, 
        "reads_per_channel_dist": [
            {
                "channel": 27, 
                "count": 1
            }, 
            {
                "channel": 30, 
                "count": 2
            }, 
            {
                "channel": 40, 
                "count": 1
            }, 
            {
                "channel": 110, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 1
            }, 
            {
                "channel": 230, 
                "count": 1
            }, 
            {
                "channel": 323, 
                "count": 1
            }, 
            {
                "channel": 360, 
                "count": 1
            }, 
            {
                "channel": 362, 
                "count": 1
            }, 
            {
                "channel": 371, 
                "count": 1
            }, 
            {
                "channel": 374, 
                "count": 1
            }, 
            {
                "channel": 435, 
                "count": 1
            }, 
            {
                "channel": 441, 
                "count": 1
            }, 
            {
                "channel": 446, 
                "count": 1
            }, 
            {
                "channel": 454, 
                "count": 1
            }, 
            {
                "channel": 495, 
                "count": 1
            }, 
            {
                "channel": 505, 
                "count": 1
            }, 
            {
                "channel": 509, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 13, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "e42da0b4-40a0-42c1-bf46-fedcf55bb85c", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 7
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 7, 
                "mean": 13.550300598144531, 
                "sum": 94.85210418701172
            }, 
            "read_len_events_sum_temp": 212232, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 7, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 7, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 12000.0
                }, 
                {
                    "count": 2, 
                    "length": 15000.0
                }, 
                {
                    "count": 1, 
                    "length": 27000.0
                }, 
                {
                    "count": 1, 
                    "length": 41000.0
                }, 
                {
                    "count": 1, 
                    "length": 43000.0
                }, 
                {
                    "count": 1, 
                    "length": 56000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 7, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 7, 
                "mean": 78.90804290771484, 
                "sum": 552.3563232421875
            }, 
            "strand_sd_pa": {
                "count": 7, 
                "mean": 9.923171043395996, 
                "sum": 69.46219635009766
            }
        }, 
        "channel_count": 6, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 49809.40625, 
        "levels_sums": {
            "count": 7, 
            "mean": 195.73867797851562, 
            "open_pore_level_sum": 1370.1707763671875
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 7, 
        "reads_per_channel_dist": [
            {
                "channel": 19, 
                "count": 1
            }, 
            {
                "channel": 72, 
                "count": 1
            }, 
            {
                "channel": 89, 
                "count": 1
            }, 
            {
                "channel": 190, 
                "count": 1
            }, 
            {
                "channel": 242, 
                "count": 1
            }, 
            {
                "channel": 499, 
                "count": 2
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 14, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "f208c90f-22d1-4734-8fdd-0e8b4c33ed08", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 7
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 16.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 7, 
                "mean": 14.63489055633545, 
                "sum": 102.4442367553711
            }, 
            "read_len_events_sum_temp": 414315, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 7, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 7, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 34000.0
                }, 
                {
                    "count": 1, 
                    "length": 40000.0
                }, 
                {
                    "count": 1, 
                    "length": 41000.0
                }, 
                {
                    "count": 1, 
                    "length": 48000.0
                }, 
                {
                    "count": 1, 
                    "length": 56000.0
                }, 
                {
                    "count": 1, 
                    "length": 85000.0
                }, 
                {
                    "count": 1, 
                    "length": 107000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 7, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 7, 
                "mean": 78.2548828125, 
                "sum": 547.7841796875
            }, 
            "strand_sd_pa": {
                "count": 7, 
                "mean": 9.872926712036133, 
                "sum": 69.11048889160156
            }
        }, 
        "channel_count": 7, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 53376.28515625, 
        "levels_sums": {
            "count": 7, 
            "mean": 214.97169494628906, 
            "open_pore_level_sum": 1504.8018798828125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 7, 
        "reads_per_channel_dist": [
            {
                "channel": 77, 
                "count": 1
            }, 
            {
                "channel": 97, 
                "count": 1
            }, 
            {
                "channel": 144, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 1
            }, 
            {
                "channel": 319, 
                "count": 1
            }, 
            {
                "channel": 340, 
                "count": 1
            }, 
            {
                "channel": 495, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 15, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "85e375fc-9ad1-4a1a-be19-d692f3b507fb", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 9
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 15.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 9, 
                "mean": 13.955399513244629, 
                "sum": 125.59859466552734
            }, 
            "read_len_events_sum_temp": 583467, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 9, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 9, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 14000.0
                }, 
                {
                    "count": 1, 
                    "length": 18000.0
                }, 
                {
                    "count": 1, 
                    "length": 26000.0
                }, 
                {
                    "count": 1, 
                    "length": 46000.0
                }, 
                {
                    "count": 1, 
                    "length": 70000.0
                }, 
                {
                    "count": 1, 
                    "length": 72000.0
                }, 
                {
                    "count": 1, 
                    "length": 89000.0
                }, 
                {
                    "count": 1, 
                    "length": 101000.0
                }, 
                {
                    "count": 1, 
                    "length": 144000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 9, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 9, 
                "mean": 79.212310791015625, 
                "sum": 712.9107666015625
            }, 
            "strand_sd_pa": {
                "count": 9, 
                "mean": 10.3753662109375, 
                "sum": 93.3782958984375
            }
        }, 
        "channel_count": 9, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 57370.82421875, 
        "levels_sums": {
            "count": 9, 
            "mean": 213.2164764404297, 
            "open_pore_level_sum": 1918.9482421875
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 9, 
        "reads_per_channel_dist": [
            {
                "channel": 1, 
                "count": 1
            }, 
            {
                "channel": 95, 
                "count": 1
            }, 
            {
                "channel": 188, 
                "count": 1
            }, 
            {
                "channel": 198, 
                "count": 1
            }, 
            {
                "channel": 201, 
                "count": 1
            }, 
            {
                "channel": 265, 
                "count": 1
            }, 
            {
                "channel": 408, 
                "count": 1
            }, 
            {
                "channel": 493, 
                "count": 1
            }, 
            {
                "channel": 509, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 16, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "4f55eb8b-bd14-4c43-9f22-a7f0476b4841", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 12
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 16.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 12, 
                "mean": 13.777682304382324, 
                "sum": 165.33218383789062
            }, 
            "read_len_events_sum_temp": 633592, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 12, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 12, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 2000.0
                }, 
                {
                    "count": 1, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 19000.0
                }, 
                {
                    "count": 1, 
                    "length": 45000.0
                }, 
                {
                    "count": 1, 
                    "length": 52000.0
                }, 
                {
                    "count": 1, 
                    "length": 55000.0
                }, 
                {
                    "count": 1, 
                    "length": 56000.0
                }, 
                {
                    "count": 1, 
                    "length": 60000.0
                }, 
                {
                    "count": 1, 
                    "length": 68000.0
                }, 
                {
                    "count": 1, 
                    "length": 78000.0
                }, 
                {
                    "count": 1, 
                    "length": 82000.0
                }, 
                {
                    "count": 1, 
                    "length": 103000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 12, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 12, 
                "mean": 77.34630584716797, 
                "sum": 928.15570068359375
            }, 
            "strand_sd_pa": {
                "count": 12, 
                "mean": 9.642642974853516, 
                "sum": 115.71171569824219
            }
        }, 
        "channel_count": 12, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 60927.46484375, 
        "levels_sums": {
            "count": 12, 
            "mean": 207.4210662841797, 
            "open_pore_level_sum": 2489.052734375
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 12, 
        "reads_per_channel_dist": [
            {
                "channel": 64, 
                "count": 1
            }, 
            {
                "channel": 75, 
                "count": 1
            }, 
            {
                "channel": 118, 
                "count": 1
            }, 
            {
                "channel": 133, 
                "count": 1
            }, 
            {
                "channel": 144, 
                "count": 1
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 184, 
                "count": 1
            }, 
            {
                "channel": 239, 
                "count": 1
            }, 
            {
                "channel": 299, 
                "count": 1
            }, 
            {
                "channel": 365, 
                "count": 1
            }, 
            {
                "channel": 402, 
                "count": 1
            }, 
            {
                "channel": 493, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 17, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "db52db67-f2ea-423a-ad86-f047cb7b247e", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 17
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 16.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 16.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 17, 
                "mean": 13.923680305480957, 
                "sum": 236.7025604248047
            }, 
            "read_len_events_sum_temp": 1435003, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 17, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 17, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 15000.0
                }, 
                {
                    "count": 1, 
                    "length": 26000.0
                }, 
                {
                    "count": 1, 
                    "length": 38000.0
                }, 
                {
                    "count": 1, 
                    "length": 47000.0
                }, 
                {
                    "count": 1, 
                    "length": 51000.0
                }, 
                {
                    "count": 1, 
                    "length": 73000.0
                }, 
                {
                    "count": 1, 
                    "length": 74000.0
                }, 
                {
                    "count": 1, 
                    "length": 75000.0
                }, 
                {
                    "count": 1, 
                    "length": 77000.0
                }, 
                {
                    "count": 1, 
                    "length": 80000.0
                }, 
                {
                    "count": 1, 
                    "length": 81000.0
                }, 
                {
                    "count": 1, 
                    "length": 83000.0
                }, 
                {
                    "count": 1, 
                    "length": 86000.0
                }, 
                {
                    "count": 1, 
                    "length": 88000.0
                }, 
                {
                    "count": 1, 
                    "length": 102000.0
                }, 
                {
                    "count": 1, 
                    "length": 203000.0
                }, 
                {
                    "count": 1, 
                    "length": 229000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 17, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 17, 
                "mean": 75.04814147949219, 
                "sum": 1275.818359375
            }, 
            "strand_sd_pa": {
                "count": 17, 
                "mean": 9.682297706604004, 
                "sum": 164.59906005859375
            }
        }, 
        "channel_count": 16, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 64630.9609375, 
        "levels_sums": {
            "count": 17, 
            "mean": 209.8682861328125, 
            "open_pore_level_sum": 3567.760986328125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 17, 
        "reads_per_channel_dist": [
            {
                "channel": 23, 
                "count": 1
            }, 
            {
                "channel": 42, 
                "count": 1
            }, 
            {
                "channel": 57, 
                "count": 1
            }, 
            {
                "channel": 108, 
                "count": 1
            }, 
            {
                "channel": 143, 
                "count": 1
            }, 
            {
                "channel": 159, 
                "count": 1
            }, 
            {
                "channel": 237, 
                "count": 1
            }, 
            {
                "channel": 240, 
                "count": 1
            }, 
            {
                "channel": 247, 
                "count": 1
            }, 
            {
                "channel": 291, 
                "count": 2
            }, 
            {
                "channel": 318, 
                "count": 1
            }, 
            {
                "channel": 354, 
                "count": 1
            }, 
            {
                "channel": 357, 
                "count": 1
            }, 
            {
                "channel": 417, 
                "count": 1
            }, 
            {
                "channel": 471, 
                "count": 1
            }, 
            {
                "channel": 496, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 18, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "65a851c6-70dc-49a6-a305-db2ca3516df8", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 13
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 13, 
                "mean": 13.445988655090332, 
                "sum": 174.7978515625
            }, 
            "read_len_events_sum_temp": 842621, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 13, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 13, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 13000.0
                }, 
                {
                    "count": 1, 
                    "length": 26000.0
                }, 
                {
                    "count": 1, 
                    "length": 28000.0
                }, 
                {
                    "count": 1, 
                    "length": 34000.0
                }, 
                {
                    "count": 1, 
                    "length": 41000.0
                }, 
                {
                    "count": 1, 
                    "length": 51000.0
                }, 
                {
                    "count": 1, 
                    "length": 55000.0
                }, 
                {
                    "count": 2, 
                    "length": 57000.0
                }, 
                {
                    "count": 1, 
                    "length": 79000.0
                }, 
                {
                    "count": 1, 
                    "length": 127000.0
                }, 
                {
                    "count": 1, 
                    "length": 132000.0
                }, 
                {
                    "count": 1, 
                    "length": 135000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 13, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 13, 
                "mean": 76.48282623291016, 
                "sum": 994.2767333984375
            }, 
            "strand_sd_pa": {
                "count": 13, 
                "mean": 9.699005126953125, 
                "sum": 126.08706665039062
            }
        }, 
        "channel_count": 13, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 68197.921875, 
        "levels_sums": {
            "count": 13, 
            "mean": 212.28131103515625, 
            "open_pore_level_sum": 2759.656982421875
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 13, 
        "reads_per_channel_dist": [
            {
                "channel": 25, 
                "count": 1
            }, 
            {
                "channel": 42, 
                "count": 1
            }, 
            {
                "channel": 76, 
                "count": 1
            }, 
            {
                "channel": 121, 
                "count": 1
            }, 
            {
                "channel": 177, 
                "count": 1
            }, 
            {
                "channel": 234, 
                "count": 1
            }, 
            {
                "channel": 253, 
                "count": 1
            }, 
            {
                "channel": 272, 
                "count": 1
            }, 
            {
                "channel": 304, 
                "count": 1
            }, 
            {
                "channel": 327, 
                "count": 1
            }, 
            {
                "channel": 336, 
                "count": 1
            }, 
            {
                "channel": 404, 
                "count": 1
            }, 
            {
                "channel": 436, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 19, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "fb8b90a6-616a-462f-8cd1-7c5494f8c235", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 17
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 15.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 17, 
                "mean": 13.707764625549316, 
                "sum": 233.03199768066406
            }, 
            "read_len_events_sum_temp": 993447, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 17, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 17, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
                }, 
                {
                    "count": 1, 
                    "length": 26000.0
                }, 
                {
                    "count": 1, 
                    "length": 29000.0
                }, 
                {
                    "count": 1, 
                    "length": 38000.0
                }, 
                {
                    "count": 1, 
                    "length": 44000.0
                }, 
                {
                    "count": 1, 
                    "length": 51000.0
                }, 
                {
                    "count": 1, 
                    "length": 61000.0
                }, 
                {
                    "count": 1, 
                    "length": 63000.0
                }, 
                {
                    "count": 1, 
                    "length": 67000.0
                }, 
                {
                    "count": 1, 
                    "length": 72000.0
                }, 
                {
                    "count": 2, 
                    "length": 81000.0
                }, 
                {
                    "count": 1, 
                    "length": 83000.0
                }, 
                {
                    "count": 1, 
                    "length": 84000.0
                }, 
                {
                    "count": 1, 
                    "length": 90000.0
                }, 
                {
                    "count": 1, 
                    "length": 98000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 17, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 17, 
                "mean": 76.32049560546875, 
                "sum": 1297.448486328125
            }, 
            "strand_sd_pa": {
                "count": 17, 
                "mean": 9.754707336425781, 
                "sum": 165.83001708984375
            }
        }, 
        "channel_count": 16, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 71872.6875, 
        "levels_sums": {
            "count": 17, 
            "mean": 191.47450256347656, 
            "open_pore_level_sum": 3255.066650390625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 17, 
        "reads_per_channel_dist": [
            {
                "channel": 7, 
                "count": 1
            }, 
            {
                "channel": 110, 
                "count": 1
            }, 
            {
                "channel": 130, 
                "count": 2
            }, 
            {
                "channel": 166, 
                "count": 1
            }, 
            {
                "channel": 179, 
                "count": 1
            }, 
            {
                "channel": 182, 
                "count": 1
            }, 
            {
                "channel": 239, 
                "count": 1
            }, 
            {
                "channel": 262, 
                "count": 1
            }, 
            {
                "channel": 274, 
                "count": 1
            }, 
            {
                "channel": 296, 
                "count": 1
            }, 
            {
                "channel": 373, 
                "count": 1
            }, 
            {
                "channel": 435, 
                "count": 1
            }, 
            {
                "channel": 436, 
                "count": 1
            }, 
            {
                "channel": 463, 
                "count": 1
            }, 
            {
                "channel": 479, 
                "count": 1
            }, 
            {
                "channel": 491, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 20, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "fbafa580-ca9e-4a25-b263-3ec44237b31d", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 16
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 15.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 16.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 16.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 16, 
                "mean": 13.97341537475586, 
                "sum": 223.57464599609375
            }, 
            "read_len_events_sum_temp": 1089214, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 16, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 16, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 21000.0
                }, 
                {
                    "count": 1, 
                    "length": 22000.0
                }, 
                {
                    "count": 1, 
                    "length": 29000.0
                }, 
                {
                    "count": 1, 
                    "length": 39000.0
                }, 
                {
                    "count": 1, 
                    "length": 42000.0
                }, 
                {
                    "count": 1, 
                    "length": 48000.0
                }, 
                {
                    "count": 2, 
                    "length": 57000.0
                }, 
                {
                    "count": 1, 
                    "length": 58000.0
                }, 
                {
                    "count": 1, 
                    "length": 65000.0
                }, 
                {
                    "count": 1, 
                    "length": 74000.0
                }, 
                {
                    "count": 1, 
                    "length": 77000.0
                }, 
                {
                    "count": 1, 
                    "length": 87000.0
                }, 
                {
                    "count": 1, 
                    "length": 121000.0
                }, 
                {
                    "count": 1, 
                    "length": 137000.0
                }, 
                {
                    "count": 1, 
                    "length": 145000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 16, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 16, 
                "mean": 76.562286376953125, 
                "sum": 1224.99658203125
            }, 
            "strand_sd_pa": {
                "count": 16, 
                "mean": 9.770868301391602, 
                "sum": 156.33389282226562
            }
        }, 
        "channel_count": 15, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 75296.5546875, 
        "levels_sums": {
            "count": 16, 
            "mean": 212.81015014648438, 
            "open_pore_level_sum": 3404.96240234375
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 16, 
        "reads_per_channel_dist": [
            {
                "channel": 41, 
                "count": 1
            }, 
            {
                "channel": 62, 
                "count": 1
            }, 
            {
                "channel": 119, 
                "count": 1
            }, 
            {
                "channel": 125, 
                "count": 1
            }, 
            {
                "channel": 165, 
                "count": 1
            }, 
            {
                "channel": 199, 
                "count": 1
            }, 
            {
                "channel": 203, 
                "count": 1
            }, 
            {
                "channel": 247, 
                "count": 1
            }, 
            {
                "channel": 291, 
                "count": 1
            }, 
            {
                "channel": 355, 
                "count": 1
            }, 
            {
                "channel": 360, 
                "count": 2
            }, 
            {
                "channel": 370, 
                "count": 1
            }, 
            {
                "channel": 388, 
                "count": 1
            }, 
            {
                "channel": 392, 
                "count": 1
            }, 
            {
                "channel": 400, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 21, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "d0f58eeb-6881-461c-881b-34c0d9d1e5ad", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 8
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 15.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 8, 
                "mean": 14.589634895324707, 
                "sum": 116.71707916259766
            }, 
            "read_len_events_sum_temp": 567291, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 8, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 8, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 40000.0
                }, 
                {
                    "count": 1, 
                    "length": 41000.0
                }, 
                {
                    "count": 1, 
                    "length": 58000.0
                }, 
                {
                    "count": 1, 
                    "length": 65000.0
                }, 
                {
                    "count": 1, 
                    "length": 66000.0
                }, 
                {
                    "count": 1, 
                    "length": 85000.0
                }, 
                {
                    "count": 1, 
                    "length": 101000.0
                }, 
                {
                    "count": 1, 
                    "length": 109000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 8, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 8, 
                "mean": 76.540313720703125, 
                "sum": 612.322509765625
            }, 
            "strand_sd_pa": {
                "count": 8, 
                "mean": 9.84780502319336, 
                "sum": 78.782440185546875
            }
        }, 
        "channel_count": 8, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 79151.3984375, 
        "levels_sums": {
            "count": 8, 
            "mean": 213.34591674804688, 
            "open_pore_level_sum": 1706.767333984375
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 8, 
        "reads_per_channel_dist": [
            {
                "channel": 5, 
                "count": 1
            }, 
            {
                "channel": 49, 
                "count": 1
            }, 
            {
                "channel": 100, 
                "count": 1
            }, 
            {
                "channel": 117, 
                "count": 1
            }, 
            {
                "channel": 191, 
                "count": 1
            }, 
            {
                "channel": 224, 
                "count": 1
            }, 
            {
                "channel": 247, 
                "count": 1
            }, 
            {
                "channel": 356, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 22, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "efeebaca-fbb7-4add-83db-b96938997549", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 12
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 13, 
                "mean": 13.294722557067871, 
                "sum": 172.83139038085938
            }, 
            "read_len_events_sum_temp": 772203, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 13, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 13, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 3000.0
                }, 
                {
                    "count": 1, 
                    "length": 42000.0
                }, 
                {
                    "count": 3, 
                    "length": 46000.0
                }, 
                {
                    "count": 1, 
                    "length": 49000.0
                }, 
                {
                    "count": 1, 
                    "length": 59000.0
                }, 
                {
                    "count": 1, 
                    "length": 61000.0
                }, 
                {
                    "count": 1, 
                    "length": 69000.0
                }, 
                {
                    "count": 1, 
                    "length": 71000.0
                }, 
                {
                    "count": 1, 
                    "length": 84000.0
                }, 
                {
                    "count": 1, 
                    "length": 88000.0
                }, 
                {
                    "count": 1, 
                    "length": 102000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 13, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 13, 
                "mean": 73.31745147705078, 
                "sum": 953.12689208984375
            }, 
            "strand_sd_pa": {
                "count": 13, 
                "mean": 9.414935111999512, 
                "sum": 122.39415740966797
            }
        }, 
        "channel_count": 12, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 82540.78125, 
        "levels_sums": {
            "count": 13, 
            "mean": 207.27976989746094, 
            "open_pore_level_sum": 2694.636962890625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 13, 
        "reads_per_channel_dist": [
            {
                "channel": 93, 
                "count": 1
            }, 
            {
                "channel": 178, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 1
            }, 
            {
                "channel": 247, 
                "count": 1
            }, 
            {
                "channel": 262, 
                "count": 1
            }, 
            {
                "channel": 270, 
                "count": 1
            }, 
            {
                "channel": 354, 
                "count": 1
            }, 
            {
                "channel": 366, 
                "count": 2
            }, 
            {
                "channel": 370, 
                "count": 1
            }, 
            {
                "channel": 383, 
                "count": 1
            }, 
            {
                "channel": 470, 
                "count": 1
            }, 
            {
                "channel": 509, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 23, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "2b960c27-505c-4699-8e35-d04f3dd56812", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 8
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 8, 
                "mean": 13.115452766418457, 
                "sum": 104.92362213134766
            }, 
            "read_len_events_sum_temp": 394997, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 8, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 8, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 12000.0
                }, 
                {
                    "count": 1, 
                    "length": 32000.0
                }, 
                {
                    "count": 1, 
                    "length": 38000.0
                }, 
                {
                    "count": 1, 
                    "length": 52000.0
                }, 
                {
                    "count": 1, 
                    "length": 54000.0
                }, 
                {
                    "count": 1, 
                    "length": 58000.0
                }, 
                {
                    "count": 1, 
                    "length": 60000.0
                }, 
                {
                    "count": 1, 
                    "length": 85000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 8, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 8, 
                "mean": 74.60591888427734, 
                "sum": 596.84735107421875
            }, 
            "strand_sd_pa": {
                "count": 8, 
                "mean": 9.51807975769043, 
                "sum": 76.14463806152344
            }
        }, 
        "channel_count": 8, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 86090.5703125, 
        "levels_sums": {
            "count": 8, 
            "mean": 208.6258544921875, 
            "open_pore_level_sum": 1669.0068359375
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 8, 
        "reads_per_channel_dist": [
            {
                "channel": 33, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 1
            }, 
            {
                "channel": 249, 
                "count": 1
            }, 
            {
                "channel": 290, 
                "count": 1
            }, 
            {
                "channel": 378, 
                "count": 1
            }, 
            {
                "channel": 436, 
                "count": 1
            }, 
            {
                "channel": 473, 
                "count": 1
            }, 
            {
                "channel": 479, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 24, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "cd20b020-3448-4283-9be6-e73dcb3b171b", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 11
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 15.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 12, 
                "mean": 13.072691917419434, 
                "sum": 156.87229919433594
            }, 
            "read_len_events_sum_temp": 710026, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 12, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 12, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 12000.0
                }, 
                {
                    "count": 1, 
                    "length": 32000.0
                }, 
                {
                    "count": 1, 
                    "length": 36000.0
                }, 
                {
                    "count": 1, 
                    "length": 47000.0
                }, 
                {
                    "count": 1, 
                    "length": 48000.0
                }, 
                {
                    "count": 1, 
                    "length": 49000.0
                }, 
                {
                    "count": 1, 
                    "length": 56000.0
                }, 
                {
                    "count": 1, 
                    "length": 60000.0
                }, 
                {
                    "count": 1, 
                    "length": 71000.0
                }, 
                {
                    "count": 1, 
                    "length": 79000.0
                }, 
                {
                    "count": 1, 
                    "length": 106000.0
                }, 
                {
                    "count": 1, 
                    "length": 108000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 12, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 12, 
                "mean": 78.72383880615234, 
                "sum": 944.68603515625
            }, 
            "strand_sd_pa": {
                "count": 12, 
                "mean": 9.891768455505371, 
                "sum": 118.70122528076172
            }
        }, 
        "channel_count": 11, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 89993.1484375, 
        "levels_sums": {
            "count": 12, 
            "mean": 217.88389587402344, 
            "open_pore_level_sum": 2614.606689453125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 12, 
        "reads_per_channel_dist": [
            {
                "channel": 56, 
                "count": 1
            }, 
            {
                "channel": 72, 
                "count": 1
            }, 
            {
                "channel": 157, 
                "count": 1
            }, 
            {
                "channel": 297, 
                "count": 1
            }, 
            {
                "channel": 303, 
                "count": 1
            }, 
            {
                "channel": 315, 
                "count": 2
            }, 
            {
                "channel": 388, 
                "count": 1
            }, 
            {
                "channel": 470, 
                "count": 1
            }, 
            {
                "channel": 471, 
                "count": 1
            }, 
            {
                "channel": 476, 
                "count": 1
            }, 
            {
                "channel": 507, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 25, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "6eb8cbbf-dfd5-45b1-9498-cb0862e8889e", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 7
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 7, 
                "mean": 13.274304389953613, 
                "sum": 92.92012786865234
            }, 
            "read_len_events_sum_temp": 398933, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 7, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 7, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 20000.0
                }, 
                {
                    "count": 1, 
                    "length": 24000.0
                }, 
                {
                    "count": 2, 
                    "length": 43000.0
                }, 
                {
                    "count": 1, 
                    "length": 69000.0
                }, 
                {
                    "count": 1, 
                    "length": 77000.0
                }, 
                {
                    "count": 1, 
                    "length": 118000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 7, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 7, 
                "mean": 75.76780700683594, 
                "sum": 530.3746337890625
            }, 
            "strand_sd_pa": {
                "count": 7, 
                "mean": 9.62170696258545, 
                "sum": 67.3519515991211
            }
        }, 
        "channel_count": 6, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 93573.4453125, 
        "levels_sums": {
            "count": 7, 
            "mean": 209.16114807128906, 
            "open_pore_level_sum": 1464.1280517578125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 7, 
        "reads_per_channel_dist": [
            {
                "channel": 66, 
                "count": 1
            }, 
            {
                "channel": 351, 
                "count": 1
            }, 
            {
                "channel": 364, 
                "count": 1
            }, 
            {
                "channel": 421, 
                "count": 1
            }, 
            {
                "channel": 503, 
                "count": 2
            }, 
            {
                "channel": 507, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 26, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "7f69f42f-6009-4c08-8310-783cc7b7850d", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 11
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 11, 
                "mean": 13.202709197998047, 
                "sum": 145.22979736328125
            }, 
            "read_len_events_sum_temp": 513324, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 11, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 11, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 16000.0
                }, 
                {
                    "count": 1, 
                    "length": 19000.0
                }, 
                {
                    "count": 1, 
                    "length": 25000.0
                }, 
                {
                    "count": 1, 
                    "length": 31000.0
                }, 
                {
                    "count": 1, 
                    "length": 36000.0
                }, 
                {
                    "count": 1, 
                    "length": 47000.0
                }, 
                {
                    "count": 2, 
                    "length": 52000.0
                }, 
                {
                    "count": 1, 
                    "length": 56000.0
                }, 
                {
                    "count": 1, 
                    "length": 67000.0
                }, 
                {
                    "count": 1, 
                    "length": 107000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 11, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 11, 
                "mean": 82.2355728149414, 
                "sum": 904.59130859375
            }, 
            "strand_sd_pa": {
                "count": 11, 
                "mean": 9.99168586730957, 
                "sum": 109.9085464477539
            }
        }, 
        "channel_count": 10, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 97182.046875, 
        "levels_sums": {
            "count": 11, 
            "mean": 182.711669921875, 
            "open_pore_level_sum": 2009.828369140625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 11, 
        "reads_per_channel_dist": [
            {
                "channel": 52, 
                "count": 1
            }, 
            {
                "channel": 64, 
                "count": 1
            }, 
            {
                "channel": 184, 
                "count": 1
            }, 
            {
                "channel": 198, 
                "count": 1
            }, 
            {
                "channel": 221, 
                "count": 1
            }, 
            {
                "channel": 300, 
                "count": 2
            }, 
            {
                "channel": 319, 
                "count": 1
            }, 
            {
                "channel": 360, 
                "count": 1
            }, 
            {
                "channel": 416, 
                "count": 1
            }, 
            {
                "channel": 499, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 27, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "8072f273-0f75-485c-b94f-d3abe03bc4c7", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 17.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 16.007427215576172, 
                "sum": 48.022281646728516
            }, 
            "read_len_events_sum_temp": 157044, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 3, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 24000.0
                }, 
                {
                    "count": 1, 
                    "length": 25000.0
                }, 
                {
                    "count": 1, 
                    "length": 107000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 3, 
                "mean": 80.95130157470703, 
                "sum": 242.85391235351562
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 10.140894889831543, 
                "sum": 30.422683715820312
            }
        }, 
        "channel_count": 3, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 100331.0546875, 
        "levels_sums": {
            "count": 3, 
            "mean": 148.02566528320312, 
            "open_pore_level_sum": 444.0769958496094
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 3, 
        "reads_per_channel_dist": [
            {
                "channel": 327, 
                "count": 1
            }, 
            {
                "channel": 427, 
                "count": 1
            }, 
            {
                "channel": 481, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 28, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "9b9d5eb5-f6c0-4a00-be52-63bd1cad65eb", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 16.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 4, 
                "mean": 12.813222885131836, 
                "sum": 51.252891540527344
            }, 
            "read_len_events_sum_temp": 312719, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 4, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 4, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 31000.0
                }, 
                {
                    "count": 1, 
                    "length": 81000.0
                }, 
                {
                    "count": 1, 
                    "length": 85000.0
                }, 
                {
                    "count": 1, 
                    "length": 114000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 4, 
                "mean": 76.01274871826172, 
                "sum": 304.0509948730469
            }, 
            "strand_sd_pa": {
                "count": 4, 
                "mean": 9.71591567993164, 
                "sum": 38.86366271972656
            }
        }, 
        "channel_count": 4, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 104175.15625, 
        "levels_sums": {
            "count": 4, 
            "mean": 217.51809692382812, 
            "open_pore_level_sum": 870.0723876953125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 4, 
        "reads_per_channel_dist": [
            {
                "channel": 93, 
                "count": 1
            }, 
            {
                "channel": 99, 
                "count": 1
            }, 
            {
                "channel": 102, 
                "count": 1
            }, 
            {
                "channel": 308, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 29, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "b7c730b6-0db2-4479-a79d-e94b4f412437", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 13.424025535583496, 
                "sum": 40.27207565307617
            }, 
            "read_len_events_sum_temp": 150758, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 3, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 26000.0
                }, 
                {
                    "count": 1, 
                    "length": 50000.0
                }, 
                {
                    "count": 1, 
                    "length": 73000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 3, 
                "mean": 72.6861801147461, 
                "sum": 218.0585479736328
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 9.847805976867676, 
                "sum": 29.54341697692871
            }
        }, 
        "channel_count": 3, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 107661.03125, 
        "levels_sums": {
            "count": 3, 
            "mean": 204.7942352294922, 
            "open_pore_level_sum": 614.3826904296875
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 3, 
        "reads_per_channel_dist": [
            {
                "channel": 44, 
                "count": 1
            }, 
            {
                "channel": 123, 
                "count": 1
            }, 
            {
                "channel": 271, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 30, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "fa1e4661-7709-4a82-88eb-72a057a9f96d", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 7
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 16.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 7, 
                "mean": 14.107048988342285, 
                "sum": 98.74934387207031
            }, 
            "read_len_events_sum_temp": 365120, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 7, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 7, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 28000.0
                }, 
                {
                    "count": 1, 
                    "length": 43000.0
                }, 
                {
                    "count": 1, 
                    "length": 46000.0
                }, 
                {
                    "count": 1, 
                    "length": 51000.0
                }, 
                {
                    "count": 1, 
                    "length": 57000.0
                }, 
                {
                    "count": 1, 
                    "length": 60000.0
                }, 
                {
                    "count": 1, 
                    "length": 76000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 7, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 7, 
                "mean": 77.8529281616211, 
                "sum": 544.97052001953125
            }, 
            "strand_sd_pa": {
                "count": 7, 
                "mean": 9.747316360473633, 
                "sum": 68.23121643066406
            }
        }, 
        "channel_count": 7, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 111242.03125, 
        "levels_sums": {
            "count": 7, 
            "mean": 213.60215759277344, 
            "open_pore_level_sum": 1495.215087890625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 7, 
        "reads_per_channel_dist": [
            {
                "channel": 148, 
                "count": 1
            }, 
            {
                "channel": 174, 
                "count": 1
            }, 
            {
                "channel": 349, 
                "count": 1
            }, 
            {
                "channel": 363, 
                "count": 1
            }, 
            {
                "channel": 375, 
                "count": 1
            }, 
            {
                "channel": 444, 
                "count": 1
            }, 
            {
                "channel": 491, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 31, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "d6a39621-b515-44e3-be23-5a8ae480e24a", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 4
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 4, 
                "mean": 12.495402336120605, 
                "sum": 49.98160934448242
            }, 
            "read_len_events_sum_temp": 324085, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 4, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 4, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 71000.0
                }, 
                {
                    "count": 1, 
                    "length": 75000.0
                }, 
                {
                    "count": 1, 
                    "length": 85000.0
                }, 
                {
                    "count": 1, 
                    "length": 92000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 4, 
                "mean": 75.44122314453125, 
                "sum": 301.764892578125
            }, 
            "strand_sd_pa": {
                "count": 4, 
                "mean": 9.584024429321289, 
                "sum": 38.336097717285156
            }
        }, 
        "channel_count": 4, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 115137.140625, 
        "levels_sums": {
            "count": 4, 
            "mean": 209.11871337890625, 
            "open_pore_level_sum": 836.474853515625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 4, 
        "reads_per_channel_dist": [
            {
                "channel": 49, 
                "count": 1
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 300, 
                "count": 1
            }, 
            {
                "channel": 392, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 32, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "690c95a6-3205-4270-af2d-1c401b7e5123", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 5
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 5, 
                "mean": 13.701135635375977, 
                "sum": 68.50567626953125
            }, 
            "read_len_events_sum_temp": 408189, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 5, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 5, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 60000.0
                }, 
                {
                    "count": 1, 
                    "length": 75000.0
                }, 
                {
                    "count": 1, 
                    "length": 85000.0
                }, 
                {
                    "count": 1, 
                    "length": 91000.0
                }, 
                {
                    "count": 1, 
                    "length": 94000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 5, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 5, 
                "mean": 74.59712219238281, 
                "sum": 372.9856262207031
            }, 
            "strand_sd_pa": {
                "count": 5, 
                "mean": 9.531268119812012, 
                "sum": 47.656341552734375
            }
        }, 
        "channel_count": 5, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 117885.46875, 
        "levels_sums": {
            "count": 5, 
            "mean": 207.8806610107422, 
            "open_pore_level_sum": 1039.4033203125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 5, 
        "reads_per_channel_dist": [
            {
                "channel": 82, 
                "count": 1
            }, 
            {
                "channel": 161, 
                "count": 1
            }, 
            {
                "channel": 177, 
                "count": 1
            }, 
            {
                "channel": 196, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 33, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "66ed731a-9d6a-4a1b-b45e-2f99a107daf3", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 4
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 4, 
                "mean": 13.24170207977295, 
                "sum": 52.9668083190918
            }, 
            "read_len_events_sum_temp": 179081, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 4, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 4, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 13000.0
                }, 
                {
                    "count": 1, 
                    "length": 23000.0
                }, 
                {
                    "count": 1, 
                    "length": 64000.0
                }, 
                {
                    "count": 1, 
                    "length": 76000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 4, 
                "mean": 84.93732452392578, 
                "sum": 339.7492980957031
            }, 
            "strand_sd_pa": {
                "count": 4, 
                "mean": 9.935731887817383, 
                "sum": 39.74292755126953
            }
        }, 
        "channel_count": 4, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 121660.4921875, 
        "levels_sums": {
            "count": 4, 
            "mean": 230.47317504882812, 
            "open_pore_level_sum": 921.8927001953125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 4, 
        "reads_per_channel_dist": [
            {
                "channel": 159, 
                "count": 1
            }, 
            {
                "channel": 198, 
                "count": 1
            }, 
            {
                "channel": 362, 
                "count": 1
            }, 
            {
                "channel": 481, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 34, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "71bf0cc3-edba-4e20-8650-f5baa224086f", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 14.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 4, 
                "mean": 12.454707145690918, 
                "sum": 49.81882858276367
            }, 
            "read_len_events_sum_temp": 415501, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 4, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 4, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 18000.0
                }, 
                {
                    "count": 1, 
                    "length": 85000.0
                }, 
                {
                    "count": 1, 
                    "length": 134000.0
                }, 
                {
                    "count": 1, 
                    "length": 176000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 4, 
                "mean": 73.24305725097656, 
                "sum": 292.97222900390625
            }, 
            "strand_sd_pa": {
                "count": 4, 
                "mean": 9.144390106201172, 
                "sum": 36.57756042480469
            }
        }, 
        "channel_count": 4, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 125706.5703125, 
        "levels_sums": {
            "count": 4, 
            "mean": 203.08456420898438, 
            "open_pore_level_sum": 812.3382568359375
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 4, 
        "reads_per_channel_dist": [
            {
                "channel": 39, 
                "count": 1
            }, 
            {
                "channel": 179, 
                "count": 1
            }, 
            {
                "channel": 184, 
                "count": 1
            }, 
            {
                "channel": 247, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 35, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "362f40b5-be03-4751-a2ac-dd84262f22d0", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2, 
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 5, 
                "mean": 11.570667266845703, 
                "sum": 57.853336334228516
            }, 
            "read_len_events_sum_temp": 263409, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 5, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 5, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 11000.0
                }, 
                {
                    "count": 1, 
                    "length": 58000.0
                }, 
                {
                    "count": 1, 
                    "length": 68000.0
                }, 
                {
                    "count": 1, 
                    "length": 118000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 5, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 5, 
                "mean": 78.88795471191406, 
                "sum": 394.43975830078125
            }, 
            "strand_sd_pa": {
                "count": 5, 
                "mean": 9.60161018371582, 
                "sum": 48.008052825927734
            }
        }, 
        "channel_count": 5, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 127448.25, 
        "levels_sums": {
            "count": 5, 
            "mean": 216.21923828125, 
            "open_pore_level_sum": 1081.09619140625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 5, 
        "reads_per_channel_dist": [
            {
                "channel": 76, 
                "count": 1
            }, 
            {
                "channel": 245, 
                "count": 1
            }, 
            {
                "channel": 397, 
                "count": 1
            }, 
            {
                "channel": 433, 
                "count": 1
            }, 
            {
                "channel": 442, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 36, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "215db711-a4d1-4cf5-9afc-6592ed3ec56e", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 4
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 15.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 4, 
                "mean": 14.03484058380127, 
                "sum": 56.13936233520508
            }, 
            "read_len_events_sum_temp": 184154, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 4, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 4, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 20000.0
                }, 
                {
                    "count": 1, 
                    "length": 48000.0
                }, 
                {
                    "count": 1, 
                    "length": 56000.0
                }, 
                {
                    "count": 1, 
                    "length": 58000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 4, 
                "mean": 80.62890625, 
                "sum": 322.515625
            }, 
            "strand_sd_pa": {
                "count": 4, 
                "mean": 10.155549049377441, 
                "sum": 40.622196197509766
            }
        }, 
        "channel_count": 4, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 132438.109375, 
        "levels_sums": {
            "count": 4, 
            "mean": 220.68536376953125, 
            "open_pore_level_sum": 882.741455078125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 4, 
        "reads_per_channel_dist": [
            {
                "channel": 98, 
                "count": 1
            }, 
            {
                "channel": 112, 
                "count": 1
            }, 
            {
                "channel": 200, 
                "count": 1
            }, 
            {
                "channel": 429, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 37, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "0ce16b3e-f0c5-4048-8dbd-d0d5c78811a6", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 8.941856384277344, 
                "sum": 8.941856384277344
            }, 
            "read_len_events_sum_temp": 18480, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 18000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 79.48585510253906, 
                "sum": 79.48585510253906
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 9.671952247619629, 
                "sum": 9.671952247619629
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 134569.515625, 
        "levels_sums": {
            "count": 1, 
            "mean": 215.74261474609375, 
            "open_pore_level_sum": 215.74261474609375
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 148, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 38, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "d0302a55-d244-4260-9793-4012ac0618e0", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 16.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 16.671817779541016, 
                "sum": 16.671817779541016
            }, 
            "read_len_events_sum_temp": 53973, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 53000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 73.8585433959961, 
                "sum": 73.8585433959961
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 10.023658752441406, 
                "sum": 10.023658752441406
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 138414.265625, 
        "levels_sums": {
            "count": 1, 
            "mean": 211.25112915039062, 
            "open_pore_level_sum": 211.25112915039062
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 170, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 39, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "a10cc434-1444-4677-8b36-466ed7d417ed", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 11.230621337890625, 
                "sum": 22.46124267578125
            }, 
            "read_len_events_sum_temp": 106238, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 52000.0
                }, 
                {
                    "count": 1, 
                    "length": 54000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 72.89134216308594, 
                "sum": 145.78268432617188
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 9.144390106201172, 
                "sum": 18.288780212402344
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 143384.671875, 
        "levels_sums": {
            "count": 2, 
            "mean": 201.97763061523438, 
            "open_pore_level_sum": 403.95526123046875
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 198, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 40, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "2e362ab5-ab2e-4648-8be6-c6fba6e442e4", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 10.019680976867676, 
                "sum": 10.019680976867676
            }, 
            "read_len_events_sum_temp": 65108, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 65000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 62.42805099487305, 
                "sum": 62.42805099487305
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 8.089268684387207, 
                "sum": 8.089268684387207
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 146387.421875, 
        "levels_sums": {
            "count": 1, 
            "mean": 183.36019897460938, 
            "open_pore_level_sum": 183.36019897460938
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 264, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 41, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "b27b3191-3797-4f25-8452-97e99d5c655f", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 12.314739227294922, 
                "sum": 12.314739227294922
            }, 
            "read_len_events_sum_temp": 7139, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 7000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 83.3546371459961, 
                "sum": 83.3546371459961
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 10.199512481689453, 
                "sum": 10.199512481689453
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 148333.90625, 
        "levels_sums": {
            "count": 1, 
            "mean": 227.39816284179688, 
            "open_pore_level_sum": 227.39816284179688
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 444, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 42, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "1ed99eeb-d685-49b1-9461-7133e3c67da9", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 4
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 4, 
                "mean": 12.632487297058105, 
                "sum": 50.52994918823242
            }, 
            "read_len_events_sum_temp": 362672, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 4, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 4, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 75000.0
                }, 
                {
                    "count": 1, 
                    "length": 82000.0
                }, 
                {
                    "count": 1, 
                    "length": 95000.0
                }, 
                {
                    "count": 1, 
                    "length": 108000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 4, 
                "mean": 75.26537322998047, 
                "sum": 301.0614929199219
            }, 
            "strand_sd_pa": {
                "count": 4, 
                "mean": 9.452134132385254, 
                "sum": 37.808536529541016
            }
        }, 
        "channel_count": 4, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 154693.3125, 
        "levels_sums": {
            "count": 4, 
            "mean": 214.29861450195312, 
            "open_pore_level_sum": 857.1944580078125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 4, 
        "reads_per_channel_dist": [
            {
                "channel": 115, 
                "count": 1
            }, 
            {
                "channel": 192, 
                "count": 1
            }, 
            {
                "channel": 264, 
                "count": 1
            }, 
            {
                "channel": 444, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 43, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "362f4721-040f-4267-885b-0d4bf9ec9e08", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 8.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 8.240865707397461, 
                "sum": 16.481731414794922
            }, 
            "read_len_events_sum_temp": 117149, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 43000.0
                }, 
                {
                    "count": 1, 
                    "length": 73000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 82.035736083984375, 
                "sum": 164.07147216796875
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 9.759878158569336, 
                "sum": 19.519756317138672
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 157958.59375, 
        "levels_sums": {
            "count": 2, 
            "mean": 221.76724243164062, 
            "open_pore_level_sum": 443.53448486328125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 171, 
                "count": 2
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 44, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "c3791ece-eeb7-4977-a181-d63ebb5bd367", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 13.39282512664795, 
                "sum": 40.17847442626953
            }, 
            "read_len_events_sum_temp": 241720, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 3, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 52000.0
                }, 
                {
                    "count": 1, 
                    "length": 94000.0
                }, 
                {
                    "count": 1, 
                    "length": 95000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 3, 
                "mean": 84.35114288330078, 
                "sum": 253.05343627929688
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 10.258130073547363, 
                "sum": 30.774391174316406
            }
        }, 
        "channel_count": 3, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 160692.109375, 
        "levels_sums": {
            "count": 3, 
            "mean": 226.8393096923828, 
            "open_pore_level_sum": 680.5179443359375
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 3, 
        "reads_per_channel_dist": [
            {
                "channel": 217, 
                "count": 1
            }, 
            {
                "channel": 343, 
                "count": 1
            }, 
            {
                "channel": 360, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 45, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "372ed6df-5746-41e1-ad35-a3b4719378cf", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 14.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 14.568033218383789, 
                "sum": 14.568033218383789
            }, 
            "read_len_events_sum_temp": 104642, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 104000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 86.87171173095703, 
                "sum": 86.87171173095703
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 10.551219940185547, 
                "sum": 10.551219940185547
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 162419.8125, 
        "levels_sums": {
            "count": 1, 
            "mean": 237.60958862304688, 
            "open_pore_level_sum": 237.60958862304688
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 217, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 46, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "11fbeddc-544b-4017-bda3-cf12f852d76b", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 14.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 4, 
                "mean": 11.267817497253418, 
                "sum": 45.07126998901367
            }, 
            "read_len_events_sum_temp": 206892, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 4, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 4, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 11000.0
                }, 
                {
                    "count": 1, 
                    "length": 16000.0
                }, 
                {
                    "count": 1, 
                    "length": 76000.0
                }, 
                {
                    "count": 1, 
                    "length": 101000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 4, 
                "mean": 81.46421813964844, 
                "sum": 325.85687255859375
            }, 
            "strand_sd_pa": {
                "count": 4, 
                "mean": 9.891768455505371, 
                "sum": 39.567073822021484
            }
        }, 
        "channel_count": 4, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 167323.0625, 
        "levels_sums": {
            "count": 4, 
            "mean": 219.14639282226562, 
            "open_pore_level_sum": 876.5855712890625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 4, 
        "reads_per_channel_dist": [
            {
                "channel": 126, 
                "count": 1
            }, 
            {
                "channel": 184, 
                "count": 1
            }, 
            {
                "channel": 467, 
                "count": 1
            }, 
            {
                "channel": 501, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 47, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "99c0ccdd-dd18-4c57-b3e2-0b9379cc1bfd", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 16.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 13.782608985900879, 
                "sum": 41.34782791137695
            }, 
            "read_len_events_sum_temp": 246307, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 3, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 47000.0
                }, 
                {
                    "count": 1, 
                    "length": 95000.0
                }, 
                {
                    "count": 1, 
                    "length": 103000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 3, 
                "mean": 90.79911041259766, 
                "sum": 272.3973388671875
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 10.785691261291504, 
                "sum": 32.35707473754883
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 172343.28125, 
        "levels_sums": {
            "count": 3, 
            "mean": 245.4044647216797, 
            "open_pore_level_sum": 736.21337890625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 3, 
        "reads_per_channel_dist": [
            {
                "channel": 186, 
                "count": 1
            }, 
            {
                "channel": 388, 
                "count": 2
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 48, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "8d248c13-f8b7-417c-8688-61a32ef2bcdd", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 11.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 11.384170532226562, 
                "sum": 11.384170532226562
            }, 
            "read_len_events_sum_temp": 22545, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 22000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 97.42293548583984, 
                "sum": 97.42293548583984
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 11.254634857177734, 
                "sum": 11.254634857177734
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 175857.34375, 
        "levels_sums": {
            "count": 1, 
            "mean": 253.95655822753906, 
            "open_pore_level_sum": 253.95655822753906
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 89, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 49, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "b011b484-ecd6-4644-862b-50d94ab68e8c", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 12.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 12.96936321258545, 
                "sum": 12.96936321258545
            }, 
            "read_len_events_sum_temp": 59832, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 59000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 77.9031753540039, 
                "sum": 77.9031753540039
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 9.84780502319336, 
                "sum": 9.84780502319336
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 179690.953125, 
        "levels_sums": {
            "count": 1, 
            "mean": 214.13095092773438, 
            "open_pore_level_sum": 214.13095092773438
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 287, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 50, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "8077bece-0177-43f9-a345-54a63af80b05", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 9.376416206359863, 
                "sum": 18.752832412719727
            }, 
            "read_len_events_sum_temp": 179298, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 63000.0
                }, 
                {
                    "count": 1, 
                    "length": 115000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 73.594757080078125, 
                "sum": 147.18951416015625
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 9.144391059875488, 
                "sum": 18.288782119750977
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 187052.765625, 
        "levels_sums": {
            "count": 2, 
            "mean": 211.7674560546875, 
            "open_pore_level_sum": 423.534912109375
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 199, 
                "count": 1
            }, 
            {
                "channel": 316, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 52, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "f40b734f-1dbf-445f-95af-c715d7cbed94", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 10.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 10.502863883972168, 
                "sum": 10.502863883972168
            }, 
            "read_len_events_sum_temp": 6317, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 6000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 102.69853973388672, 
                "sum": 102.69853973388672
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 12.66146469116211, 
                "sum": 12.66146469116211
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 203674.3125, 
        "levels_sums": {
            "count": 1, 
            "mean": 260.97662353515625, 
            "open_pore_level_sum": 260.97662353515625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 468, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 57, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "86a37ae0-c343-4d1b-8b22-22753145fc74", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 10.137749671936035, 
                "sum": 10.137749671936035
            }, 
            "read_len_events_sum_temp": 13094, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 13000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 100.41244506835938, 
                "sum": 100.41244506835938
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 10.90292739868164, 
                "sum": 10.90292739868164
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 208892.921875, 
        "levels_sums": {
            "count": 1, 
            "mean": 254.64732360839844, 
            "open_pore_level_sum": 254.64732360839844
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 184, 
                "count": 1
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 60, 
        "segment_number": 59, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "ad318791-7883-4735-b9e4-bef829f40448", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "700c3938-2f4f-4892-92ba-88478ca57541", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 13, 
                "pass": 384
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 6, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 10, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 9, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 10, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 16, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 27, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 27, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 31, 
                    "mean_qscore": 13.0
                }, 
                {
                    "count": 34, 
                    "mean_qscore": 13.5
                }, 
                {
                    "count": 42, 
                    "mean_qscore": 14.0
                }, 
                {
                    "count": 40, 
                    "mean_qscore": 14.5
                }, 
                {
                    "count": 50, 
                    "mean_qscore": 15.0
                }, 
                {
                    "count": 38, 
                    "mean_qscore": 15.5
                }, 
                {
                    "count": 24, 
                    "mean_qscore": 16.0
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 16.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 17.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 17.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 397, 
                "mean": 13.692439079284668, 
                "sum": 5435.8984375
            }, 
            "read_len_events_sum_temp": 23718994, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 397, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 397, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 2000.0
                }, 
                {
                    "count": 1, 
                    "length": 3000.0
                }, 
                {
                    "count": 5, 
                    "length": 4000.0
                }, 
                {
                    "count": 3, 
                    "length": 5000.0
                }, 
                {
                    "count": 4, 
                    "length": 6000.0
                }, 
                {
                    "count": 6, 
                    "length": 7000.0
                }, 
                {
                    "count": 3, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
                }, 
                {
                    "count": 4, 
                    "length": 10000.0
                }, 
                {
                    "count": 2, 
                    "length": 11000.0
                }, 
                {
                    "count": 3, 
                    "length": 12000.0
                }, 
                {
                    "count": 4, 
                    "length": 13000.0
                }, 
                {
                    "count": 3, 
                    "length": 14000.0
                }, 
                {
                    "count": 3, 
                    "length": 15000.0
                }, 
                {
                    "count": 4, 
                    "length": 16000.0
                }, 
                {
                    "count": 1, 
                    "length": 17000.0
                }, 
                {
                    "count": 3, 
                    "length": 18000.0
                }, 
                {
                    "count": 4, 
                    "length": 19000.0
                }, 
                {
                    "count": 2, 
                    "length": 20000.0
                }, 
                {
                    "count": 1, 
                    "length": 21000.0
                }, 
                {
                    "count": 2, 
                    "length": 22000.0
                }, 
                {
                    "count": 6, 
                    "length": 23000.0
                }, 
                {
                    "count": 2, 
                    "length": 24000.0
                }, 
                {
                    "count": 4, 
                    "length": 25000.0
                }, 
                {
                    "count": 7, 
                    "length": 26000.0
                }, 
                {
                    "count": 2, 
                    "length": 27000.0
                }, 
                {
                    "count": 3, 
                    "length": 28000.0
                }, 
                {
                    "count": 3, 
                    "length": 29000.0
                }, 
                {
                    "count": 2, 
                    "length": 30000.0
                }, 
                {
                    "count": 2, 
                    "length": 31000.0
                }, 
                {
                    "count": 3, 
                    "length": 32000.0
                }, 
                {
                    "count": 3, 
                    "length": 34000.0
                }, 
                {
                    "count": 1, 
                    "length": 35000.0
                }, 
                {
                    "count": 4, 
                    "length": 36000.0
                }, 
                {
                    "count": 2, 
                    "length": 37000.0
                }, 
                {
                    "count": 4, 
                    "length": 38000.0
                }, 
                {
                    "count": 2, 
                    "length": 39000.0
                }, 
                {
                    "count": 5, 
                    "length": 40000.0
                }, 
                {
                    "count": 7, 
                    "length": 41000.0
                }, 
                {
                    "count": 2, 
                    "length": 42000.0
                }, 
                {
                    "count": 6, 
                    "length": 43000.0
                }, 
                {
                    "count": 1, 
                    "length": 44000.0
                }, 
                {
                    "count": 4, 
                    "length": 45000.0
                }, 
                {
                    "count": 7, 
                    "length": 46000.0
                }, 
                {
                    "count": 5, 
                    "length": 47000.0
                }, 
                {
                    "count": 5, 
                    "length": 48000.0
                }, 
                {
                    "count": 6, 
                    "length": 49000.0
                }, 
                {
                    "count": 4, 
                    "length": 50000.0
                }, 
                {
                    "count": 6, 
                    "length": 51000.0
                }, 
                {
                    "count": 10, 
                    "length": 52000.0
                }, 
                {
                    "count": 4, 
                    "length": 53000.0
                }, 
                {
                    "count": 4, 
                    "length": 54000.0
                }, 
                {
                    "count": 4, 
                    "length": 55000.0
                }, 
                {
                    "count": 8, 
                    "length": 56000.0
                }, 
                {
                    "count": 7, 
                    "length": 57000.0
                }, 
                {
                    "count": 9, 
                    "length": 58000.0
                }, 
                {
                    "count": 3, 
                    "length": 59000.0
                }, 
                {
                    "count": 6, 
                    "length": 60000.0
                }, 
                {
                    "count": 6, 
                    "length": 61000.0
                }, 
                {
                    "count": 2, 
                    "length": 62000.0
                }, 
                {
                    "count": 2, 
                    "length": 63000.0
                }, 
                {
                    "count": 2, 
                    "length": 64000.0
                }, 
                {
                    "count": 6, 
                    "length": 65000.0
                }, 
                {
                    "count": 4, 
                    "length": 66000.0
                }, 
                {
                    "count": 4, 
                    "length": 67000.0
                }, 
                {
                    "count": 5, 
                    "length": 68000.0
                }, 
                {
                    "count": 2, 
                    "length": 69000.0
                }, 
                {
                    "count": 5, 
                    "length": 70000.0
                }, 
                {
                    "count": 3, 
                    "length": 71000.0
                }, 
                {
                    "count": 3, 
                    "length": 72000.0
                }, 
                {
                    "count": 5, 
                    "length": 73000.0
                }, 
                {
                    "count": 2, 
                    "length": 74000.0
                }, 
                {
                    "count": 8, 
                    "length": 75000.0
                }, 
                {
                    "count": 4, 
                    "length": 76000.0
                }, 
                {
                    "count": 3, 
                    "length": 77000.0
                }, 
                {
                    "count": 2, 
                    "length": 78000.0
                }, 
                {
                    "count": 5, 
                    "length": 79000.0
                }, 
                {
                    "count": 2, 
                    "length": 80000.0
                }, 
                {
                    "count": 5, 
                    "length": 81000.0
                }, 
                {
                    "count": 2, 
                    "length": 82000.0
                }, 
                {
                    "count": 2, 
                    "length": 83000.0
                }, 
                {
                    "count": 4, 
                    "length": 84000.0
                }, 
                {
                    "count": 8, 
                    "length": 85000.0
                }, 
                {
                    "count": 1, 
                    "length": 86000.0
                }, 
                {
                    "count": 1, 
                    "length": 87000.0
                }, 
                {
                    "count": 2, 
                    "length": 88000.0
                }, 
                {
                    "count": 1, 
                    "length": 89000.0
                }, 
                {
                    "count": 2, 
                    "length": 90000.0
                }, 
                {
                    "count": 2, 
                    "length": 91000.0
                }, 
                {
                    "count": 2, 
                    "length": 92000.0
                }, 
                {
                    "count": 2, 
                    "length": 93000.0
                }, 
                {
                    "count": 4, 
                    "length": 94000.0
                }, 
                {
                    "count": 3, 
                    "length": 95000.0
                }, 
                {
                    "count": 2, 
                    "length": 98000.0
                }, 
                {
                    "count": 1, 
                    "length": 99000.0
                }, 
                {
                    "count": 4, 
                    "length": 101000.0
                }, 
                {
                    "count": 4, 
                    "length": 102000.0
                }, 
                {
                    "count": 3, 
                    "length": 103000.0
                }, 
                {
                    "count": 2, 
                    "length": 104000.0
                }, 
                {
                    "count": 1, 
                    "length": 105000.0
                }, 
                {
                    "count": 2, 
                    "length": 106000.0
                }, 
                {
                    "count": 7, 
                    "length": 107000.0
                }, 
                {
                    "count": 2, 
                    "length": 108000.0
                }, 
                {
                    "count": 1, 
                    "length": 109000.0
                }, 
                {
                    "count": 1, 
                    "length": 110000.0
                }, 
                {
                    "count": 1, 
                    "length": 111000.0
                }, 
                {
                    "count": 2, 
                    "length": 112000.0
                }, 
                {
                    "count": 1, 
                    "length": 113000.0
                }, 
                {
                    "count": 1, 
                    "length": 114000.0
                }, 
                {
                    "count": 2, 
                    "length": 115000.0
                }, 
                {
                    "count": 1, 
                    "length": 117000.0
                }, 
                {
                    "count": 2, 
                    "length": 118000.0
                }, 
                {
                    "count": 2, 
                    "length": 119000.0
                }, 
                {
                    "count": 1, 
                    "length": 121000.0
                }, 
                {
                    "count": 1, 
                    "length": 123000.0
                }, 
                {
                    "count": 1, 
                    "length": 125000.0
                }, 
                {
                    "count": 1, 
                    "length": 127000.0
                }, 
                {
                    "count": 1, 
                    "length": 132000.0
                }, 
                {
                    "count": 1, 
                    "length": 134000.0
                }, 
                {
                    "count": 1, 
                    "length": 135000.0
                }, 
                {
                    "count": 1, 
                    "length": 137000.0
                }, 
                {
                    "count": 1, 
                    "length": 142000.0
                }, 
                {
                    "count": 1, 
                    "length": 144000.0
                }, 
                {
                    "count": 1, 
                    "length": 145000.0
                }, 
                {
                    "count": 1, 
                    "length": 157000.0
                }, 
                {
                    "count": 1, 
                    "length": 176000.0
                }, 
                {
                    "count": 1, 
                    "length": 203000.0
                }, 
                {
                    "count": 1, 
                    "length": 229000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 397, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 397, 
                "mean": 77.42655181884766, 
                "sum": 30738.33984375
            }, 
            "strand_sd_pa": {
                "count": 397, 
                "mean": 9.797306060791016, 
                "sum": 3889.530517578125
            }
        }, 
        "channel_count": 251, 
        "context_tags": {
            "experiment_duration_set": "4320", 
            "experiment_type": "genomic_dna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "pp_4022b_slpt_20190207_fak52864_mn21214_sequencing_run_b7102072019_37339", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "0", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4_450bps_5mer_raw.jsn", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109", 
            "user_filename_input": "b7102072019"
        }, 
        "latest_run_time": 208892.921875, 
        "levels_sums": {
            "count": 397, 
            "mean": 210.36709594726562, 
            "open_pore_level_sum": 83515.734375
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "256", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "do_read_splitting": "0", 
            "duplex_window_size": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "FLO-MIN106", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "SQK-LSK109", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "9.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_r9.4.1_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "8000", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_callers": "4", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "-0.172100", 
            "qscore_scale": "0.935600", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_primers": "0", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 397, 
        "reads_per_channel_dist": [
            {
                "channel": 1, 
                "count": 1
            }, 
            {
                "channel": 5, 
                "count": 1
            }, 
            {
                "channel": 7, 
                "count": 1
            }, 
            {
                "channel": 8, 
                "count": 1
            }, 
            {
                "channel": 13, 
                "count": 4
            }, 
            {
                "channel": 14, 
                "count": 1
            }, 
            {
                "channel": 17, 
                "count": 1
            }, 
            {
                "channel": 19, 
                "count": 1
            }, 
            {
                "channel": 21, 
                "count": 1
            }, 
            {
                "channel": 23, 
                "count": 1
            }, 
            {
                "channel": 24, 
                "count": 1
            }, 
            {
                "channel": 25, 
                "count": 1
            }, 
            {
                "channel": 27, 
                "count": 2
            }, 
            {
                "channel": 28, 
                "count": 1
            }, 
            {
                "channel": 30, 
                "count": 2
            }, 
            {
                "channel": 31, 
                "count": 1
            }, 
            {
                "channel": 33, 
                "count": 1
            }, 
            {
                "channel": 37, 
                "count": 1
            }, 
            {
                "channel": 39, 
                "count": 1
            }, 
            {
                "channel": 40, 
                "count": 1
            }, 
            {
                "channel": 41, 
                "count": 2
            }, 
            {
                "channel": 42, 
                "count": 2
            }, 
            {
                "channel": 44, 
                "count": 1
            }, 
            {
                "channel": 46, 
                "count": 1
            }, 
            {
                "channel": 47, 
                "count": 1
            }, 
            {
                "channel": 49, 
                "count": 2
            }, 
            {
                "channel": 52, 
                "count": 1
            }, 
            {
                "channel": 55, 
                "count": 1
            }, 
            {
                "channel": 56, 
                "count": 1
            }, 
            {
                "channel": 57, 
                "count": 1
            }, 
            {
                "channel": 62, 
                "count": 1
            }, 
            {
                "channel": 64, 
                "count": 3
            }, 
            {
                "channel": 66, 
                "count": 1
            }, 
            {
                "channel": 72, 
                "count": 3
            }, 
            {
                "channel": 75, 
                "count": 1
            }, 
            {
                "channel": 76, 
                "count": 3
            }, 
            {
                "channel": 77, 
                "count": 1
            }, 
            {
                "channel": 79, 
                "count": 1
            }, 
            {
                "channel": 80, 
                "count": 1
            }, 
            {
                "channel": 82, 
                "count": 1
            }, 
            {
                "channel": 89, 
                "count": 2
            }, 
            {
                "channel": 90, 
                "count": 1
            }, 
            {
                "channel": 93, 
                "count": 2
            }, 
            {
                "channel": 94, 
                "count": 1
            }, 
            {
                "channel": 95, 
                "count": 1
            }, 
            {
                "channel": 97, 
                "count": 2
            }, 
            {
                "channel": 98, 
                "count": 1
            }, 
            {
                "channel": 99, 
                "count": 3
            }, 
            {
                "channel": 100, 
                "count": 1
            }, 
            {
                "channel": 102, 
                "count": 1
            }, 
            {
                "channel": 108, 
                "count": 1
            }, 
            {
                "channel": 109, 
                "count": 1
            }, 
            {
                "channel": 110, 
                "count": 2
            }, 
            {
                "channel": 111, 
                "count": 1
            }, 
            {
                "channel": 112, 
                "count": 2
            }, 
            {
                "channel": 114, 
                "count": 1
            }, 
            {
                "channel": 115, 
                "count": 1
            }, 
            {
                "channel": 117, 
                "count": 1
            }, 
            {
                "channel": 118, 
                "count": 1
            }, 
            {
                "channel": 119, 
                "count": 1
            }, 
            {
                "channel": 121, 
                "count": 2
            }, 
            {
                "channel": 123, 
                "count": 1
            }, 
            {
                "channel": 125, 
                "count": 1
            }, 
            {
                "channel": 126, 
                "count": 1
            }, 
            {
                "channel": 130, 
                "count": 3
            }, 
            {
                "channel": 132, 
                "count": 1
            }, 
            {
                "channel": 133, 
                "count": 1
            }, 
            {
                "channel": 136, 
                "count": 1
            }, 
            {
                "channel": 143, 
                "count": 1
            }, 
            {
                "channel": 144, 
                "count": 2
            }, 
            {
                "channel": 148, 
                "count": 2
            }, 
            {
                "channel": 149, 
                "count": 1
            }, 
            {
                "channel": 151, 
                "count": 1
            }, 
            {
                "channel": 157, 
                "count": 3
            }, 
            {
                "channel": 158, 
                "count": 1
            }, 
            {
                "channel": 159, 
                "count": 3
            }, 
            {
                "channel": 161, 
                "count": 1
            }, 
            {
                "channel": 163, 
                "count": 1
            }, 
            {
                "channel": 164, 
                "count": 1
            }, 
            {
                "channel": 165, 
                "count": 1
            }, 
            {
                "channel": 166, 
                "count": 2
            }, 
            {
                "channel": 167, 
                "count": 2
            }, 
            {
                "channel": 168, 
                "count": 1
            }, 
            {
                "channel": 169, 
                "count": 1
            }, 
            {
                "channel": 170, 
                "count": 2
            }, 
            {
                "channel": 171, 
                "count": 2
            }, 
            {
                "channel": 172, 
                "count": 1
            }, 
            {
                "channel": 173, 
                "count": 1
            }, 
            {
                "channel": 174, 
                "count": 1
            }, 
            {
                "channel": 176, 
                "count": 2
            }, 
            {
                "channel": 177, 
                "count": 2
            }, 
            {
                "channel": 178, 
                "count": 1
            }, 
            {
                "channel": 179, 
                "count": 3
            }, 
            {
                "channel": 181, 
                "count": 3
            }, 
            {
                "channel": 182, 
                "count": 2
            }, 
            {
                "channel": 183, 
                "count": 1
            }, 
            {
                "channel": 184, 
                "count": 5
            }, 
            {
                "channel": 186, 
                "count": 1
            }, 
            {
                "channel": 188, 
                "count": 2
            }, 
            {
                "channel": 190, 
                "count": 2
            }, 
            {
                "channel": 191, 
                "count": 1
            }, 
            {
                "channel": 192, 
                "count": 2
            }, 
            {
                "channel": 196, 
                "count": 1
            }, 
            {
                "channel": 198, 
                "count": 5
            }, 
            {
                "channel": 199, 
                "count": 3
            }, 
            {
                "channel": 200, 
                "count": 1
            }, 
            {
                "channel": 201, 
                "count": 1
            }, 
            {
                "channel": 203, 
                "count": 1
            }, 
            {
                "channel": 214, 
                "count": 1
            }, 
            {
                "channel": 217, 
                "count": 2
            }, 
            {
                "channel": 221, 
                "count": 2
            }, 
            {
                "channel": 223, 
                "count": 3
            }, 
            {
                "channel": 224, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 3
            }, 
            {
                "channel": 230, 
                "count": 1
            }, 
            {
                "channel": 232, 
                "count": 1
            }, 
            {
                "channel": 234, 
                "count": 1
            }, 
            {
                "channel": 237, 
                "count": 1
            }, 
            {
                "channel": 239, 
                "count": 3
            }, 
            {
                "channel": 240, 
                "count": 1
            }, 
            {
                "channel": 242, 
                "count": 1
            }, 
            {
                "channel": 244, 
                "count": 1
            }, 
            {
                "channel": 245, 
                "count": 1
            }, 
            {
                "channel": 247, 
                "count": 5
            }, 
            {
                "channel": 249, 
                "count": 1
            }, 
            {
                "channel": 251, 
                "count": 1
            }, 
            {
                "channel": 253, 
                "count": 1
            }, 
            {
                "channel": 260, 
                "count": 2
            }, 
            {
                "channel": 262, 
                "count": 3
            }, 
            {
                "channel": 263, 
                "count": 2
            }, 
            {
                "channel": 264, 
                "count": 2
            }, 
            {
                "channel": 265, 
                "count": 2
            }, 
            {
                "channel": 270, 
                "count": 3
            }, 
            {
                "channel": 271, 
                "count": 1
            }, 
            {
                "channel": 272, 
                "count": 1
            }, 
            {
                "channel": 274, 
                "count": 1
            }, 
            {
                "channel": 279, 
                "count": 1
            }, 
            {
                "channel": 287, 
                "count": 1
            }, 
            {
                "channel": 290, 
                "count": 1
            }, 
            {
                "channel": 291, 
                "count": 3
            }, 
            {
                "channel": 292, 
                "count": 1
            }, 
            {
                "channel": 294, 
                "count": 1
            }, 
            {
                "channel": 296, 
                "count": 1
            }, 
            {
                "channel": 297, 
                "count": 2
            }, 
            {
                "channel": 299, 
                "count": 2
            }, 
            {
                "channel": 300, 
                "count": 3
            }, 
            {
                "channel": 301, 
                "count": 1
            }, 
            {
                "channel": 303, 
                "count": 1
            }, 
            {
                "channel": 304, 
                "count": 2
            }, 
            {
                "channel": 306, 
                "count": 1
            }, 
            {
                "channel": 308, 
                "count": 3
            }, 
            {
                "channel": 315, 
                "count": 3
            }, 
            {
                "channel": 316, 
                "count": 2
            }, 
            {
                "channel": 318, 
                "count": 3
            }, 
            {
                "channel": 319, 
                "count": 2
            }, 
            {
                "channel": 323, 
                "count": 1
            }, 
            {
                "channel": 326, 
                "count": 1
            }, 
            {
                "channel": 327, 
                "count": 2
            }, 
            {
                "channel": 331, 
                "count": 1
            }, 
            {
                "channel": 336, 
                "count": 1
            }, 
            {
                "channel": 339, 
                "count": 1
            }, 
            {
                "channel": 340, 
                "count": 1
            }, 
            {
                "channel": 343, 
                "count": 2
            }, 
            {
                "channel": 349, 
                "count": 2
            }, 
            {
                "channel": 350, 
                "count": 1
            }, 
            {
                "channel": 351, 
                "count": 1
            }, 
            {
                "channel": 352, 
                "count": 2
            }, 
            {
                "channel": 354, 
                "count": 3
            }, 
            {
                "channel": 355, 
                "count": 1
            }, 
            {
                "channel": 356, 
                "count": 2
            }, 
            {
                "channel": 357, 
                "count": 1
            }, 
            {
                "channel": 360, 
                "count": 5
            }, 
            {
                "channel": 361, 
                "count": 1
            }, 
            {
                "channel": 362, 
                "count": 2
            }, 
            {
                "channel": 363, 
                "count": 1
            }, 
            {
                "channel": 364, 
                "count": 2
            }, 
            {
                "channel": 365, 
                "count": 2
            }, 
            {
                "channel": 366, 
                "count": 2
            }, 
            {
                "channel": 368, 
                "count": 1
            }, 
            {
                "channel": 370, 
                "count": 2
            }, 
            {
                "channel": 371, 
                "count": 1
            }, 
            {
                "channel": 373, 
                "count": 1
            }, 
            {
                "channel": 374, 
                "count": 5
            }, 
            {
                "channel": 375, 
                "count": 1
            }, 
            {
                "channel": 378, 
                "count": 1
            }, 
            {
                "channel": 381, 
                "count": 1
            }, 
            {
                "channel": 382, 
                "count": 1
            }, 
            {
                "channel": 383, 
                "count": 1
            }, 
            {
                "channel": 385, 
                "count": 1
            }, 
            {
                "channel": 388, 
                "count": 4
            }, 
            {
                "channel": 389, 
                "count": 1
            }, 
            {
                "channel": 390, 
                "count": 1
            }, 
            {
                "channel": 392, 
                "count": 3
            }, 
            {
                "channel": 397, 
                "count": 1
            }, 
            {
                "channel": 399, 
                "count": 1
            }, 
            {
                "channel": 400, 
                "count": 2
            }, 
            {
                "channel": 402, 
                "count": 1
            }, 
            {
                "channel": 404, 
                "count": 2
            }, 
            {
                "channel": 405, 
                "count": 1
            }, 
            {
                "channel": 407, 
                "count": 1
            }, 
            {
                "channel": 408, 
                "count": 2
            }, 
            {
                "channel": 410, 
                "count": 1
            }, 
            {
                "channel": 416, 
                "count": 3
            }, 
            {
                "channel": 417, 
                "count": 1
            }, 
            {
                "channel": 420, 
                "count": 2
            }, 
            {
                "channel": 421, 
                "count": 1
            }, 
            {
                "channel": 422, 
                "count": 1
            }, 
            {
                "channel": 423, 
                "count": 1
            }, 
            {
                "channel": 427, 
                "count": 1
            }, 
            {
                "channel": 429, 
                "count": 1
            }, 
            {
                "channel": 432, 
                "count": 1
            }, 
            {
                "channel": 433, 
                "count": 2
            }, 
            {
                "channel": 435, 
                "count": 2
            }, 
            {
                "channel": 436, 
                "count": 3
            }, 
            {
                "channel": 441, 
                "count": 2
            }, 
            {
                "channel": 442, 
                "count": 1
            }, 
            {
                "channel": 444, 
                "count": 3
            }, 
            {
                "channel": 446, 
                "count": 1
            }, 
            {
                "channel": 448, 
                "count": 1
            }, 
            {
                "channel": 452, 
                "count": 1
            }, 
            {
                "channel": 454, 
                "count": 1
            }, 
            {
                "channel": 461, 
                "count": 1
            }, 
            {
                "channel": 462, 
                "count": 1
            }, 
            {
                "channel": 463, 
                "count": 1
            }, 
            {
                "channel": 466, 
                "count": 1
            }, 
            {
                "channel": 467, 
                "count": 1
            }, 
            {
                "channel": 468, 
                "count": 1
            }, 
            {
                "channel": 470, 
                "count": 2
            }, 
            {
                "channel": 471, 
                "count": 2
            }, 
            {
                "channel": 473, 
                "count": 1
            }, 
            {
                "channel": 475, 
                "count": 1
            }, 
            {
                "channel": 476, 
                "count": 1
            }, 
            {
                "channel": 477, 
                "count": 1
            }, 
            {
                "channel": 479, 
                "count": 3
            }, 
            {
                "channel": 480, 
                "count": 1
            }, 
            {
                "channel": 481, 
                "count": 2
            }, 
            {
                "channel": 483, 
                "count": 1
            }, 
            {
                "channel": 484, 
                "count": 1
            }, 
            {
                "channel": 486, 
                "count": 1
            }, 
            {
                "channel": 490, 
                "count": 1
            }, 
            {
                "channel": 491, 
                "count": 2
            }, 
            {
                "channel": 493, 
                "count": 3
            }, 
            {
                "channel": 495, 
                "count": 2
            }, 
            {
                "channel": 496, 
                "count": 2
            }, 
            {
                "channel": 498, 
                "count": 2
            }, 
            {
                "channel": 499, 
                "count": 3
            }, 
            {
                "channel": 501, 
                "count": 1
            }, 
            {
                "channel": 503, 
                "count": 2
            }, 
            {
                "channel": 505, 
                "count": 1
            }, 
            {
                "channel": 507, 
                "count": 3
            }, 
            {
                "channel": 509, 
                "count": 4
            }
        ], 
        "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
        "segment_duration": 3540, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.0.6+8a98bbc"
        }, 
        "tracking_id": {
            "asic_id": "349068904", 
            "asic_id_eeprom": "4783696", 
            "asic_temp": "28.793655", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN21214", 
            "device_type": "minion", 
            "exp_script_name": "b17b89a985f80d3f9112f6d5bbeb69403ed3632f-8ef7cc0305493b9257f5f22dda5f302e435dfafa", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-02-07T22:09:34Z", 
            "flow_cell_id": "FAK52864", 
            "heatsink_temp": "33.023438", 
            "hostname": "PP-4022B-SLPT", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "6653afa5-d6ad-42f8-b217-3db868720fe9", 
            "operating_system": "Windows 10.0", 
            "protocol_run_id": "55065e28-39fd-41b7-99d8-beffcd27cbbc", 
            "protocols_version": "1.15.10.20", 
            "run_id": "6c174770bb18c3fe1359860d3aeb87b3e8fc498a", 
            "sample_id": "B7102072019", 
            "time_stamp": "2022-03-25T07:41:00Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.15.6"
        }
    }
]