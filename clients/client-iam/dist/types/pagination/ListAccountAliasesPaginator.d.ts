import { ListAccountAliasesCommandInput, ListAccountAliasesCommandOutput } from "../commands/ListAccountAliasesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccountAliases(config: IAMPaginationConfiguration, input: ListAccountAliasesCommandInput, ...additionalArguments: any): Paginator<ListAccountAliasesCommandOutput>;
