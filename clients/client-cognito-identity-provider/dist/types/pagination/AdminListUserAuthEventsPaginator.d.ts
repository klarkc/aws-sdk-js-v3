import { AdminListUserAuthEventsCommandInput, AdminListUserAuthEventsCommandOutput } from "../commands/AdminListUserAuthEventsCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateAdminListUserAuthEvents(config: CognitoIdentityProviderPaginationConfiguration, input: AdminListUserAuthEventsCommandInput, ...additionalArguments: any): Paginator<AdminListUserAuthEventsCommandOutput>;
