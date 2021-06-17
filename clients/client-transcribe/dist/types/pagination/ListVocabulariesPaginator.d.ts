import { ListVocabulariesCommandInput, ListVocabulariesCommandOutput } from "../commands/ListVocabulariesCommand";
import { TranscribePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListVocabularies(config: TranscribePaginationConfiguration, input: ListVocabulariesCommandInput, ...additionalArguments: any): Paginator<ListVocabulariesCommandOutput>;
