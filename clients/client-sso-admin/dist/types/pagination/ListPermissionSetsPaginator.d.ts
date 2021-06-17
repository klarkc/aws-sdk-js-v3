import { ListPermissionSetsCommandInput, ListPermissionSetsCommandOutput } from "../commands/ListPermissionSetsCommand";
import { SSOAdminPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPermissionSets(config: SSOAdminPaginationConfiguration, input: ListPermissionSetsCommandInput, ...additionalArguments: any): Paginator<ListPermissionSetsCommandOutput>;
