import { ListGraphsCommandInput, ListGraphsCommandOutput } from "../commands/ListGraphsCommand";
import { DetectivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGraphs(config: DetectivePaginationConfiguration, input: ListGraphsCommandInput, ...additionalArguments: any): Paginator<ListGraphsCommandOutput>;
