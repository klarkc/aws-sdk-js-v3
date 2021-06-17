import { ElasticLoadBalancingClient } from "../ElasticLoadBalancingClient";
import { DescribeInstanceHealthCommandInput } from "../commands/DescribeInstanceHealthCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilAnyInstanceInService instead. waitForAnyInstanceInService does not throw error in non-success cases.
 */
export declare const waitForAnyInstanceInService: (params: WaiterConfiguration<ElasticLoadBalancingClient>, input: DescribeInstanceHealthCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstanceHealthCommand for polling.
 */
export declare const waitUntilAnyInstanceInService: (params: WaiterConfiguration<ElasticLoadBalancingClient>, input: DescribeInstanceHealthCommandInput) => Promise<WaiterResult>;
