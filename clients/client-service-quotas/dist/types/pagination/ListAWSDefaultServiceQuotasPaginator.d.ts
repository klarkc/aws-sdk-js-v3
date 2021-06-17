import { ListAWSDefaultServiceQuotasCommandInput, ListAWSDefaultServiceQuotasCommandOutput } from "../commands/ListAWSDefaultServiceQuotasCommand";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAWSDefaultServiceQuotas(config: ServiceQuotasPaginationConfiguration, input: ListAWSDefaultServiceQuotasCommandInput, ...additionalArguments: any): Paginator<ListAWSDefaultServiceQuotasCommandOutput>;
