import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import { IoT1ClickProjectsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProjects(config: IoT1ClickProjectsPaginationConfiguration, input: ListProjectsCommandInput, ...additionalArguments: any): Paginator<ListProjectsCommandOutput>;
