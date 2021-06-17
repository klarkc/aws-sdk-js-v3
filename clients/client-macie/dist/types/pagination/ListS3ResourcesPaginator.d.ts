import { ListS3ResourcesCommandInput, ListS3ResourcesCommandOutput } from "../commands/ListS3ResourcesCommand";
import { MaciePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListS3Resources(config: MaciePaginationConfiguration, input: ListS3ResourcesCommandInput, ...additionalArguments: any): Paginator<ListS3ResourcesCommandOutput>;
