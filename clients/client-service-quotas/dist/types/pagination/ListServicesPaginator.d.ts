import { ListServicesCommandInput, ListServicesCommandOutput } from "../commands/ListServicesCommand";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListServices(config: ServiceQuotasPaginationConfiguration, input: ListServicesCommandInput, ...additionalArguments: any): Paginator<ListServicesCommandOutput>;
