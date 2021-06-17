import { ListOfferingTransactionsCommandInput, ListOfferingTransactionsCommandOutput } from "../commands/ListOfferingTransactionsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOfferingTransactions(config: DeviceFarmPaginationConfiguration, input: ListOfferingTransactionsCommandInput, ...additionalArguments: any): Paginator<ListOfferingTransactionsCommandOutput>;
