import {
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput,
} from "../commands/ListAutoScalingConfigurationsCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAutoScalingConfigurations(
  config: AppRunnerPaginationConfiguration,
  input: ListAutoScalingConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListAutoScalingConfigurationsCommandOutput>;
