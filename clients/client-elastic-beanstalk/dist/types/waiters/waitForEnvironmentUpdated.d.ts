import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient";
import { DescribeEnvironmentsCommandInput } from "../commands/DescribeEnvironmentsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilEnvironmentUpdated instead. waitForEnvironmentUpdated does not throw error in non-success cases.
 */
export declare const waitForEnvironmentUpdated: (params: WaiterConfiguration<ElasticBeanstalkClient>, input: DescribeEnvironmentsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeEnvironmentsCommand for polling.
 */
export declare const waitUntilEnvironmentUpdated: (params: WaiterConfiguration<ElasticBeanstalkClient>, input: DescribeEnvironmentsCommandInput) => Promise<WaiterResult>;
