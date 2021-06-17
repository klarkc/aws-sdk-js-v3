import { ListBuildBatchesForProjectCommandInput, ListBuildBatchesForProjectCommandOutput } from "../commands/ListBuildBatchesForProjectCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBuildBatchesForProject(config: CodeBuildPaginationConfiguration, input: ListBuildBatchesForProjectCommandInput, ...additionalArguments: any): Paginator<ListBuildBatchesForProjectCommandOutput>;
