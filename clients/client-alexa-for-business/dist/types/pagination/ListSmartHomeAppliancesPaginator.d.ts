import {
  ListSmartHomeAppliancesCommandInput,
  ListSmartHomeAppliancesCommandOutput,
} from "../commands/ListSmartHomeAppliancesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSmartHomeAppliances(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListSmartHomeAppliancesCommandInput,
  ...additionalArguments: any
): Paginator<ListSmartHomeAppliancesCommandOutput>;
