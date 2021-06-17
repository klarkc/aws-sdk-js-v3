import { EC2Client } from "../EC2Client";
import { DescribeVolumesCommandInput } from "../commands/DescribeVolumesCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilVolumeAvailable instead. waitForVolumeAvailable does not throw error in non-success cases.
 */
export declare const waitForVolumeAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeVolumesCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeVolumesCommand for polling.
 */
export declare const waitUntilVolumeAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeVolumesCommandInput) => Promise<WaiterResult>;
