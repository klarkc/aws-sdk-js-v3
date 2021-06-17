import { ListTasksCommandInput, ListTasksCommandOutput } from "../commands/ListTasksCommand";
import { ECSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTasks(config: ECSPaginationConfiguration, input: ListTasksCommandInput, ...additionalArguments: any): Paginator<ListTasksCommandOutput>;
