import { ListContactFlowsCommandInput, ListContactFlowsCommandOutput } from "../commands/ListContactFlowsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListContactFlows(config: ConnectPaginationConfiguration, input: ListContactFlowsCommandInput, ...additionalArguments: any): Paginator<ListContactFlowsCommandOutput>;
