import { ListLanguageModelsCommandInput, ListLanguageModelsCommandOutput } from "../commands/ListLanguageModelsCommand";
import { TranscribePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListLanguageModels(config: TranscribePaginationConfiguration, input: ListLanguageModelsCommandInput, ...additionalArguments: any): Paginator<ListLanguageModelsCommandOutput>;
