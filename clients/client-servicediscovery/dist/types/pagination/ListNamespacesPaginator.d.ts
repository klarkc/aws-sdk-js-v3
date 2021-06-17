import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "../commands/ListNamespacesCommand";
import { ServiceDiscoveryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListNamespaces(config: ServiceDiscoveryPaginationConfiguration, input: ListNamespacesCommandInput, ...additionalArguments: any): Paginator<ListNamespacesCommandOutput>;
