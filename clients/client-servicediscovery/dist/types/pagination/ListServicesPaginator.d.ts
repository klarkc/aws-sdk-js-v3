import { ListServicesCommandInput, ListServicesCommandOutput } from "../commands/ListServicesCommand";
import { ServiceDiscoveryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListServices(config: ServiceDiscoveryPaginationConfiguration, input: ListServicesCommandInput, ...additionalArguments: any): Paginator<ListServicesCommandOutput>;
