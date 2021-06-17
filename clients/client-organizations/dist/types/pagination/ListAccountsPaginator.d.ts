import { ListAccountsCommandInput, ListAccountsCommandOutput } from "../commands/ListAccountsCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccounts(config: OrganizationsPaginationConfiguration, input: ListAccountsCommandInput, ...additionalArguments: any): Paginator<ListAccountsCommandOutput>;
