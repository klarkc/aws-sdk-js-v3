import { ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput } from "../commands/ListMemberAccountsCommand";
import { MaciePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMemberAccounts(config: MaciePaginationConfiguration, input: ListMemberAccountsCommandInput, ...additionalArguments: any): Paginator<ListMemberAccountsCommandOutput>;
