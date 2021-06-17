import { ListBonusPaymentsCommandInput, ListBonusPaymentsCommandOutput } from "../commands/ListBonusPaymentsCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBonusPayments(config: MTurkPaginationConfiguration, input: ListBonusPaymentsCommandInput, ...additionalArguments: any): Paginator<ListBonusPaymentsCommandOutput>;
