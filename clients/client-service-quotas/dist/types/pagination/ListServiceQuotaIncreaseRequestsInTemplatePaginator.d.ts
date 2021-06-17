import { ListServiceQuotaIncreaseRequestsInTemplateCommandInput, ListServiceQuotaIncreaseRequestsInTemplateCommandOutput } from "../commands/ListServiceQuotaIncreaseRequestsInTemplateCommand";
import { ServiceQuotasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListServiceQuotaIncreaseRequestsInTemplate(config: ServiceQuotasPaginationConfiguration, input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput, ...additionalArguments: any): Paginator<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput>;
