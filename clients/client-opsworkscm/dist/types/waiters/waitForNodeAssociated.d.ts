import { OpsWorksCMClient } from "../OpsWorksCMClient";
import { DescribeNodeAssociationStatusCommandInput } from "../commands/DescribeNodeAssociationStatusCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until node is associated or disassociated.
 *  @deprecated Use waitUntilNodeAssociated instead. waitForNodeAssociated does not throw error in non-success cases.
 */
export declare const waitForNodeAssociated: (params: WaiterConfiguration<OpsWorksCMClient>, input: DescribeNodeAssociationStatusCommandInput) => Promise<WaiterResult>;
/**
 * Wait until node is associated or disassociated.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeNodeAssociationStatusCommand for polling.
 */
export declare const waitUntilNodeAssociated: (params: WaiterConfiguration<OpsWorksCMClient>, input: DescribeNodeAssociationStatusCommandInput) => Promise<WaiterResult>;
