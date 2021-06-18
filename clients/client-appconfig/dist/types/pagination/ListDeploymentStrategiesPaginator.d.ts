import {
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
} from "../commands/ListDeploymentStrategiesCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDeploymentStrategies(
  config: AppConfigPaginationConfiguration,
  input: ListDeploymentStrategiesCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentStrategiesCommandOutput>;
