import { ListServicesCommandInput, ListServicesCommandOutput } from "../commands/ListServicesCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListServices(
  config: AppRunnerPaginationConfiguration,
  input: ListServicesCommandInput,
  ...additionalArguments: any
): Paginator<ListServicesCommandOutput>;
