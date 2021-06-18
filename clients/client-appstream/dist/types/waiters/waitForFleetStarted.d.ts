import { AppStreamClient } from "../AppStreamClient";
import { DescribeFleetsCommandInput } from "../commands/DescribeFleetsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilFleetStarted instead. waitForFleetStarted does not throw error in non-success cases.
 */
export declare const waitForFleetStarted: (
  params: WaiterConfiguration<AppStreamClient>,
  input: DescribeFleetsCommandInput
) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFleetsCommand for polling.
 */
export declare const waitUntilFleetStarted: (
  params: WaiterConfiguration<AppStreamClient>,
  input: DescribeFleetsCommandInput
) => Promise<WaiterResult>;
