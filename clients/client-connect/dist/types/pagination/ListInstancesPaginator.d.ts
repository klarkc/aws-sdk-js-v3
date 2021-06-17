import { ListInstancesCommandInput, ListInstancesCommandOutput } from "../commands/ListInstancesCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInstances(config: ConnectPaginationConfiguration, input: ListInstancesCommandInput, ...additionalArguments: any): Paginator<ListInstancesCommandOutput>;
