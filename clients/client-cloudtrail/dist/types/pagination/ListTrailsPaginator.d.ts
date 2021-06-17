import { ListTrailsCommandInput, ListTrailsCommandOutput } from "../commands/ListTrailsCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTrails(config: CloudTrailPaginationConfiguration, input: ListTrailsCommandInput, ...additionalArguments: any): Paginator<ListTrailsCommandOutput>;
