import { ListPhoneNumbersCommandInput, ListPhoneNumbersCommandOutput } from "../commands/ListPhoneNumbersCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPhoneNumbers(config: ConnectPaginationConfiguration, input: ListPhoneNumbersCommandInput, ...additionalArguments: any): Paginator<ListPhoneNumbersCommandOutput>;
