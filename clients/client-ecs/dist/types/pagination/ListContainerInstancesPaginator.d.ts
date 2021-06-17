import { ListContainerInstancesCommandInput, ListContainerInstancesCommandOutput } from "../commands/ListContainerInstancesCommand";
import { ECSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListContainerInstances(config: ECSPaginationConfiguration, input: ListContainerInstancesCommandInput, ...additionalArguments: any): Paginator<ListContainerInstancesCommandOutput>;
