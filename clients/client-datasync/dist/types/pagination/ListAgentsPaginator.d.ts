import { ListAgentsCommandInput, ListAgentsCommandOutput } from "../commands/ListAgentsCommand";
import { DataSyncPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAgents(config: DataSyncPaginationConfiguration, input: ListAgentsCommandInput, ...additionalArguments: any): Paginator<ListAgentsCommandOutput>;
