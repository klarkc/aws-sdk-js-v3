import { ListNotebookExecutionsCommandInput, ListNotebookExecutionsCommandOutput } from "../commands/ListNotebookExecutionsCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListNotebookExecutions(config: EMRPaginationConfiguration, input: ListNotebookExecutionsCommandInput, ...additionalArguments: any): Paginator<ListNotebookExecutionsCommandOutput>;
