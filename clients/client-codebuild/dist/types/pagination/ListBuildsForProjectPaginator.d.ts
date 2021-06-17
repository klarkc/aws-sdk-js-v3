import { ListBuildsForProjectCommandInput, ListBuildsForProjectCommandOutput } from "../commands/ListBuildsForProjectCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBuildsForProject(config: CodeBuildPaginationConfiguration, input: ListBuildsForProjectCommandInput, ...additionalArguments: any): Paginator<ListBuildsForProjectCommandOutput>;
