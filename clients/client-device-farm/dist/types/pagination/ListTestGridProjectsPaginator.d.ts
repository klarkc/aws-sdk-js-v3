import { ListTestGridProjectsCommandInput, ListTestGridProjectsCommandOutput } from "../commands/ListTestGridProjectsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTestGridProjects(config: DeviceFarmPaginationConfiguration, input: ListTestGridProjectsCommandInput, ...additionalArguments: any): Paginator<ListTestGridProjectsCommandOutput>;
