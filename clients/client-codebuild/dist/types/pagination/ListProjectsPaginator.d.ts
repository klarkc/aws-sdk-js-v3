import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProjects(config: CodeBuildPaginationConfiguration, input: ListProjectsCommandInput, ...additionalArguments: any): Paginator<ListProjectsCommandOutput>;
