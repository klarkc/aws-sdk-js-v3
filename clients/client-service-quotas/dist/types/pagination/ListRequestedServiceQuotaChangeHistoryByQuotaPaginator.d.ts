import { ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput, ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput } from "../commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRequestedServiceQuotaChangeHistoryByQuota(config: ServiceQuotasPaginationConfiguration, input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput, ...additionalArguments: any): Paginator<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput>;
