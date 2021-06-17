import { ListBotVersionsCommandInput, ListBotVersionsCommandOutput } from "../commands/ListBotVersionsCommand";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBotVersions(config: LexModelsV2PaginationConfiguration, input: ListBotVersionsCommandInput, ...additionalArguments: any): Paginator<ListBotVersionsCommandOutput>;
