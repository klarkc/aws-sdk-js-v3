import { ListIntentsCommandInput, ListIntentsCommandOutput } from "../commands/ListIntentsCommand";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListIntents(config: LexModelsV2PaginationConfiguration, input: ListIntentsCommandInput, ...additionalArguments: any): Paginator<ListIntentsCommandOutput>;
