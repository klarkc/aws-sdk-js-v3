import { ListInstancesCommandInput, ListInstancesCommandOutput } from "../commands/ListInstancesCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInstances(config: EMRPaginationConfiguration, input: ListInstancesCommandInput, ...additionalArguments: any): Paginator<ListInstancesCommandOutput>;
