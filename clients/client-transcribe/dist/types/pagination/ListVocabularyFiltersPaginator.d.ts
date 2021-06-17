import { ListVocabularyFiltersCommandInput, ListVocabularyFiltersCommandOutput } from "../commands/ListVocabularyFiltersCommand";
import { TranscribePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListVocabularyFilters(config: TranscribePaginationConfiguration, input: ListVocabularyFiltersCommandInput, ...additionalArguments: any): Paginator<ListVocabularyFiltersCommandOutput>;
