import { ListInstancesCommandInput, ListInstancesCommandOutput } from "../commands/ListInstancesCommand";
import { SSOAdminPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInstances(config: SSOAdminPaginationConfiguration, input: ListInstancesCommandInput, ...additionalArguments: any): Paginator<ListInstancesCommandOutput>;
