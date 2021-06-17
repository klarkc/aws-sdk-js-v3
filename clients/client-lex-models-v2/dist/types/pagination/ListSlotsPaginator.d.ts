import { ListSlotsCommandInput, ListSlotsCommandOutput } from "../commands/ListSlotsCommand";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSlots(config: LexModelsV2PaginationConfiguration, input: ListSlotsCommandInput, ...additionalArguments: any): Paginator<ListSlotsCommandOutput>;
