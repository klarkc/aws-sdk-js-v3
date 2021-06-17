import { ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBots(config: LexModelsV2PaginationConfiguration, input: ListBotsCommandInput, ...additionalArguments: any): Paginator<ListBotsCommandOutput>;
