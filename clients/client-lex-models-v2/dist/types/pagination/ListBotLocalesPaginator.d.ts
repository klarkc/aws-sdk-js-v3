import { ListBotLocalesCommandInput, ListBotLocalesCommandOutput } from "../commands/ListBotLocalesCommand";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBotLocales(config: LexModelsV2PaginationConfiguration, input: ListBotLocalesCommandInput, ...additionalArguments: any): Paginator<ListBotLocalesCommandOutput>;
