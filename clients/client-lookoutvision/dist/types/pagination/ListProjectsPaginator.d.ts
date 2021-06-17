import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import { LookoutVisionPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProjects(config: LookoutVisionPaginationConfiguration, input: ListProjectsCommandInput, ...additionalArguments: any): Paginator<ListProjectsCommandOutput>;
