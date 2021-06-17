import { ListSMSSandboxPhoneNumbersCommandInput, ListSMSSandboxPhoneNumbersCommandOutput } from "../commands/ListSMSSandboxPhoneNumbersCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSMSSandboxPhoneNumbers(config: SNSPaginationConfiguration, input: ListSMSSandboxPhoneNumbersCommandInput, ...additionalArguments: any): Paginator<ListSMSSandboxPhoneNumbersCommandOutput>;
