import { ListOperationsCommandInput, ListOperationsCommandOutput } from "../commands/ListOperationsCommand";
import { ServiceDiscoveryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOperations(config: ServiceDiscoveryPaginationConfiguration, input: ListOperationsCommandInput, ...additionalArguments: any): Paginator<ListOperationsCommandOutput>;
