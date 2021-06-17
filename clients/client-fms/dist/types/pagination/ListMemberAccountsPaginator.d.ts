import { ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput } from "../commands/ListMemberAccountsCommand";
import { FMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMemberAccounts(config: FMSPaginationConfiguration, input: ListMemberAccountsCommandInput, ...additionalArguments: any): Paginator<ListMemberAccountsCommandOutput>;
