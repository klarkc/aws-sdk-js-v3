import { ListNotebookInstanceLifecycleConfigsCommandInput, ListNotebookInstanceLifecycleConfigsCommandOutput } from "../commands/ListNotebookInstanceLifecycleConfigsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListNotebookInstanceLifecycleConfigs(config: SageMakerPaginationConfiguration, input: ListNotebookInstanceLifecycleConfigsCommandInput, ...additionalArguments: any): Paginator<ListNotebookInstanceLifecycleConfigsCommandOutput>;
