import { ListRequestedServiceQuotaChangeHistoryCommandInput, ListRequestedServiceQuotaChangeHistoryCommandOutput } from "../commands/ListRequestedServiceQuotaChangeHistoryCommand";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRequestedServiceQuotaChangeHistory(config: ServiceQuotasPaginationConfiguration, input: ListRequestedServiceQuotaChangeHistoryCommandInput, ...additionalArguments: any): Paginator<ListRequestedServiceQuotaChangeHistoryCommandOutput>;
