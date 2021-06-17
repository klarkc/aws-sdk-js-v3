import { GetConformancePackComplianceDetailsCommandInput, GetConformancePackComplianceDetailsCommandOutput } from "../commands/GetConformancePackComplianceDetailsCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetConformancePackComplianceDetails(config: ConfigServicePaginationConfiguration, input: GetConformancePackComplianceDetailsCommandInput, ...additionalArguments: any): Paginator<GetConformancePackComplianceDetailsCommandOutput>;
