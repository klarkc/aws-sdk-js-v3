import { ListOrganizationAdminAccountsCommandInput, ListOrganizationAdminAccountsCommandOutput } from "../commands/ListOrganizationAdminAccountsCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOrganizationAdminAccounts(config: SecurityHubPaginationConfiguration, input: ListOrganizationAdminAccountsCommandInput, ...additionalArguments: any): Paginator<ListOrganizationAdminAccountsCommandOutput>;
