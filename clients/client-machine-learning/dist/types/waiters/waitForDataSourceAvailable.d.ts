import { MachineLearningClient } from "../MachineLearningClient";
import { DescribeDataSourcesCommandInput } from "../commands/DescribeDataSourcesCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilDataSourceAvailable instead. waitForDataSourceAvailable does not throw error in non-success cases.
 */
export declare const waitForDataSourceAvailable: (params: WaiterConfiguration<MachineLearningClient>, input: DescribeDataSourcesCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDataSourcesCommand for polling.
 */
export declare const waitUntilDataSourceAvailable: (params: WaiterConfiguration<MachineLearningClient>, input: DescribeDataSourcesCommandInput) => Promise<WaiterResult>;
