import { AppStreamClient } from "../AppStreamClient";
import { DescribeFleetsCommandInput } from "../commands/DescribeFleetsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilFleetStopped instead. waitForFleetStopped does not throw error in non-success cases.
 */
export declare const waitForFleetStopped: (
  params: WaiterConfiguration<AppStreamClient>,
  input: DescribeFleetsCommandInput
) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFleetsCommand for polling.
 */
export declare const waitUntilFleetStopped: (
  params: WaiterConfiguration<AppStreamClient>,
  input: DescribeFleetsCommandInput
) => Promise<WaiterResult>;
