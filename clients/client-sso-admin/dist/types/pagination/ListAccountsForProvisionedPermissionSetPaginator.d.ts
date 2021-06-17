import { ListAccountsForProvisionedPermissionSetCommandInput, ListAccountsForProvisionedPermissionSetCommandOutput } from "../commands/ListAccountsForProvisionedPermissionSetCommand";
import { SSOAdminPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccountsForProvisionedPermissionSet(config: SSOAdminPaginationConfiguration, input: ListAccountsForProvisionedPermissionSetCommandInput, ...additionalArguments: any): Paginator<ListAccountsForProvisionedPermissionSetCommandOutput>;
