import { ListInstanceProfilesForRoleCommandInput, ListInstanceProfilesForRoleCommandOutput } from "../commands/ListInstanceProfilesForRoleCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInstanceProfilesForRole(config: IAMPaginationConfiguration, input: ListInstanceProfilesForRoleCommandInput, ...additionalArguments: any): Paginator<ListInstanceProfilesForRoleCommandOutput>;
