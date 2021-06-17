import { ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListExports(config: LexModelsV2PaginationConfiguration, input: ListExportsCommandInput, ...additionalArguments: any): Paginator<ListExportsCommandOutput>;
