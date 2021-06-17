import { EC2Client } from "../EC2Client";
import { DescribeVpnConnectionsCommandInput } from "../commands/DescribeVpnConnectionsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilVpnConnectionDeleted instead. waitForVpnConnectionDeleted does not throw error in non-success cases.
 */
export declare const waitForVpnConnectionDeleted: (params: WaiterConfiguration<EC2Client>, input: DescribeVpnConnectionsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeVpnConnectionsCommand for polling.
 */
export declare const waitUntilVpnConnectionDeleted: (params: WaiterConfiguration<EC2Client>, input: DescribeVpnConnectionsCommandInput) => Promise<WaiterResult>;
