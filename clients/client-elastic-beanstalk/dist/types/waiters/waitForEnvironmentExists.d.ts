import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient";
import { DescribeEnvironmentsCommandInput } from "../commands/DescribeEnvironmentsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilEnvironmentExists instead. waitForEnvironmentExists does not throw error in non-success cases.
 */
export declare const waitForEnvironmentExists: (params: WaiterConfiguration<ElasticBeanstalkClient>, input: DescribeEnvironmentsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeEnvironmentsCommand for polling.
 */
export declare const waitUntilEnvironmentExists: (params: WaiterConfiguration<ElasticBeanstalkClient>, input: DescribeEnvironmentsCommandInput) => Promise<WaiterResult>;
