import { ListTaskExecutionsCommandInput, ListTaskExecutionsCommandOutput } from "../commands/ListTaskExecutionsCommand";
import { DataSyncPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTaskExecutions(config: DataSyncPaginationConfiguration, input: ListTaskExecutionsCommandInput, ...additionalArguments: any): Paginator<ListTaskExecutionsCommandOutput>;
