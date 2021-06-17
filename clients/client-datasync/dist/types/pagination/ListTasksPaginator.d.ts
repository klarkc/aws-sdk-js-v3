import { ListTasksCommandInput, ListTasksCommandOutput } from "../commands/ListTasksCommand";
import { DataSyncPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTasks(config: DataSyncPaginationConfiguration, input: ListTasksCommandInput, ...additionalArguments: any): Paginator<ListTasksCommandOutput>;
