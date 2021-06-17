import { ListOriginationNumbersCommandInput, ListOriginationNumbersCommandOutput } from "../commands/ListOriginationNumbersCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOriginationNumbers(config: SNSPaginationConfiguration, input: ListOriginationNumbersCommandInput, ...additionalArguments: any): Paginator<ListOriginationNumbersCommandOutput>;
