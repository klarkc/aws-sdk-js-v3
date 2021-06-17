import { ListBotAliasesCommandInput, ListBotAliasesCommandOutput } from "../commands/ListBotAliasesCommand";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBotAliases(config: LexModelsV2PaginationConfiguration, input: ListBotAliasesCommandInput, ...additionalArguments: any): Paginator<ListBotAliasesCommandOutput>;
