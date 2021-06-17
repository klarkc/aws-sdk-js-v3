import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProjects(config: IoTSiteWisePaginationConfiguration, input: ListProjectsCommandInput, ...additionalArguments: any): Paginator<ListProjectsCommandOutput>;
