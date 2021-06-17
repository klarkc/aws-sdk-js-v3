import { ListServiceQuotasCommandInput, ListServiceQuotasCommandOutput } from "../commands/ListServiceQuotasCommand";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListServiceQuotas(config: ServiceQuotasPaginationConfiguration, input: ListServiceQuotasCommandInput, ...additionalArguments: any): Paginator<ListServiceQuotasCommandOutput>;
