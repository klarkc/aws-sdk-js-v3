import { ListMedicalVocabulariesCommandInput, ListMedicalVocabulariesCommandOutput } from "../commands/ListMedicalVocabulariesCommand";
import { TranscribePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMedicalVocabularies(config: TranscribePaginationConfiguration, input: ListMedicalVocabulariesCommandInput, ...additionalArguments: any): Paginator<ListMedicalVocabulariesCommandOutput>;
