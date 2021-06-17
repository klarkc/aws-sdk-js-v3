import { ListServicesCommandInput, ListServicesCommandOutput } from "../commands/ListServicesCommand";
import { ECSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListServices(config: ECSPaginationConfiguration, input: ListServicesCommandInput, ...additionalArguments: any): Paginator<ListServicesCommandOutput>;
