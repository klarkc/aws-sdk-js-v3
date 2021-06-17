import { ListNotebookInstancesCommandInput, ListNotebookInstancesCommandOutput } from "../commands/ListNotebookInstancesCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListNotebookInstances(config: SageMakerPaginationConfiguration, input: ListNotebookInstancesCommandInput, ...additionalArguments: any): Paginator<ListNotebookInstancesCommandOutput>;
