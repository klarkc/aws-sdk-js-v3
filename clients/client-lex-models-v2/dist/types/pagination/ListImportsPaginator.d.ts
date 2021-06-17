import { ListImportsCommandInput, ListImportsCommandOutput } from "../commands/ListImportsCommand";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListImports(config: LexModelsV2PaginationConfiguration, input: ListImportsCommandInput, ...additionalArguments: any): Paginator<ListImportsCommandOutput>;
