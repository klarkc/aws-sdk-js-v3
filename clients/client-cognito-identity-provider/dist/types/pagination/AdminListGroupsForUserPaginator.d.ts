import { AdminListGroupsForUserCommandInput, AdminListGroupsForUserCommandOutput } from "../commands/AdminListGroupsForUserCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateAdminListGroupsForUser(config: CognitoIdentityProviderPaginationConfiguration, input: AdminListGroupsForUserCommandInput, ...additionalArguments: any): Paginator<AdminListGroupsForUserCommandOutput>;
