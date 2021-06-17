import { EC2Client } from "../EC2Client";
import { DescribeCustomerGatewaysCommandInput } from "../commands/DescribeCustomerGatewaysCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilCustomerGatewayAvailable instead. waitForCustomerGatewayAvailable does not throw error in non-success cases.
 */
export declare const waitForCustomerGatewayAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeCustomerGatewaysCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeCustomerGatewaysCommand for polling.
 */
export declare const waitUntilCustomerGatewayAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeCustomerGatewaysCommandInput) => Promise<WaiterResult>;
