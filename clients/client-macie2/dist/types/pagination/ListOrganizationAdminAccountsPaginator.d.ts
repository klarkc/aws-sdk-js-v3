import { ListOrganizationAdminAccountsCommandInput, ListOrganizationAdminAccountsCommandOutput } from "../commands/ListOrganizationAdminAccountsCommand";
import { Macie2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOrganizationAdminAccounts(config: Macie2PaginationConfiguration, input: ListOrganizationAdminAccountsCommandInput, ...additionalArguments: any): Paginator<ListOrganizationAdminAccountsCommandOutput>;
