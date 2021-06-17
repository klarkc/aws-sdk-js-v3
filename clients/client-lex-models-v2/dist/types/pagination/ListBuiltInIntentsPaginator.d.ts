import { ListBuiltInIntentsCommandInput, ListBuiltInIntentsCommandOutput } from "../commands/ListBuiltInIntentsCommand";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBuiltInIntents(config: LexModelsV2PaginationConfiguration, input: ListBuiltInIntentsCommandInput, ...additionalArguments: any): Paginator<ListBuiltInIntentsCommandOutput>;
