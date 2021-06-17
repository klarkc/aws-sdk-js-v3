import { GetComplianceDetailsByResourceCommandInput, GetComplianceDetailsByResourceCommandOutput } from "../commands/GetComplianceDetailsByResourceCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetComplianceDetailsByResource(config: ConfigServicePaginationConfiguration, input: GetComplianceDetailsByResourceCommandInput, ...additionalArguments: any): Paginator<GetComplianceDetailsByResourceCommandOutput>;
