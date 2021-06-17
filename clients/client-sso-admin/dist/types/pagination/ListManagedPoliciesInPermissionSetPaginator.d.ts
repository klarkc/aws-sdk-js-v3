import { ListManagedPoliciesInPermissionSetCommandInput, ListManagedPoliciesInPermissionSetCommandOutput } from "../commands/ListManagedPoliciesInPermissionSetCommand";
import { SSOAdminPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListManagedPoliciesInPermissionSet(config: SSOAdminPaginationConfiguration, input: ListManagedPoliciesInPermissionSetCommandInput, ...additionalArguments: any): Paginator<ListManagedPoliciesInPermissionSetCommandOutput>;
