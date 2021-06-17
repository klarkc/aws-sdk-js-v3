import { ListPermissionSetsProvisionedToAccountCommandInput, ListPermissionSetsProvisionedToAccountCommandOutput } from "../commands/ListPermissionSetsProvisionedToAccountCommand";
import { SSOAdminPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPermissionSetsProvisionedToAccount(config: SSOAdminPaginationConfiguration, input: ListPermissionSetsProvisionedToAccountCommandInput, ...additionalArguments: any): Paginator<ListPermissionSetsProvisionedToAccountCommandOutput>;
