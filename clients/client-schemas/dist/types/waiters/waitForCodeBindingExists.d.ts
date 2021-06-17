import { SchemasClient } from "../SchemasClient";
import { DescribeCodeBindingCommandInput } from "../commands/DescribeCodeBindingCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until code binding is generated
 *  @deprecated Use waitUntilCodeBindingExists instead. waitForCodeBindingExists does not throw error in non-success cases.
 */
export declare const waitForCodeBindingExists: (params: WaiterConfiguration<SchemasClient>, input: DescribeCodeBindingCommandInput) => Promise<WaiterResult>;
/**
 * Wait until code binding is generated
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeCodeBindingCommand for polling.
 */
export declare const waitUntilCodeBindingExists: (params: WaiterConfiguration<SchemasClient>, input: DescribeCodeBindingCommandInput) => Promise<WaiterResult>;
