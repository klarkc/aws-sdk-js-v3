import { ListRolesCommandInput, ListRolesCommandOutput } from "../commands/ListRolesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRoles(config: IAMPaginationConfiguration, input: ListRolesCommandInput, ...additionalArguments: any): Paginator<ListRolesCommandOutput>;
