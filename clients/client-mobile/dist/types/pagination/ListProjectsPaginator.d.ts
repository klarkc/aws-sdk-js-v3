import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import { MobilePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProjects(config: MobilePaginationConfiguration, input: ListProjectsCommandInput, ...additionalArguments: any): Paginator<ListProjectsCommandOutput>;
