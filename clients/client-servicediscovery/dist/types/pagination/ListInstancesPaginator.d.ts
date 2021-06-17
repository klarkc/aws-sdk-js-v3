import { ListInstancesCommandInput, ListInstancesCommandOutput } from "../commands/ListInstancesCommand";
import { ServiceDiscoveryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInstances(config: ServiceDiscoveryPaginationConfiguration, input: ListInstancesCommandInput, ...additionalArguments: any): Paginator<ListInstancesCommandOutput>;
