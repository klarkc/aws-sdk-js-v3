import { ListSharedProjectsCommandInput, ListSharedProjectsCommandOutput } from "../commands/ListSharedProjectsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSharedProjects(config: CodeBuildPaginationConfiguration, input: ListSharedProjectsCommandInput, ...additionalArguments: any): Paginator<ListSharedProjectsCommandOutput>;
