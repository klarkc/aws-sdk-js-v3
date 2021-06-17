import { ListPermissionSetProvisioningStatusCommandInput, ListPermissionSetProvisioningStatusCommandOutput } from "../commands/ListPermissionSetProvisioningStatusCommand";
import { SSOAdminPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPermissionSetProvisioningStatus(config: SSOAdminPaginationConfiguration, input: ListPermissionSetProvisioningStatusCommandInput, ...additionalArguments: any): Paginator<ListPermissionSetProvisioningStatusCommandOutput>;
