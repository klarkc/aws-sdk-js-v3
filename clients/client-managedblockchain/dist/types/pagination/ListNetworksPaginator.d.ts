import { ListNetworksCommandInput, ListNetworksCommandOutput } from "../commands/ListNetworksCommand";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListNetworks(config: ManagedBlockchainPaginationConfiguration, input: ListNetworksCommandInput, ...additionalArguments: any): Paginator<ListNetworksCommandOutput>;
