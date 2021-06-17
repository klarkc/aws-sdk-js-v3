import { ListNodesCommandInput, ListNodesCommandOutput } from "../commands/ListNodesCommand";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListNodes(config: ManagedBlockchainPaginationConfiguration, input: ListNodesCommandInput, ...additionalArguments: any): Paginator<ListNodesCommandOutput>;
