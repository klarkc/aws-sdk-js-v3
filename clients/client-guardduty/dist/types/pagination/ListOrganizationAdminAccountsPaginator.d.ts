import { ListOrganizationAdminAccountsCommandInput, ListOrganizationAdminAccountsCommandOutput } from "../commands/ListOrganizationAdminAccountsCommand";
import { GuardDutyPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOrganizationAdminAccounts(config: GuardDutyPaginationConfiguration, input: ListOrganizationAdminAccountsCommandInput, ...additionalArguments: any): Paginator<ListOrganizationAdminAccountsCommandOutput>;
