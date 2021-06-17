import { ListFlowsCommandInput, ListFlowsCommandOutput } from "../commands/ListFlowsCommand";
import { MediaConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFlows(config: MediaConnectPaginationConfiguration, input: ListFlowsCommandInput, ...additionalArguments: any): Paginator<ListFlowsCommandOutput>;
