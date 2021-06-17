import { DescribeConformancePackComplianceCommandInput, DescribeConformancePackComplianceCommandOutput } from "../commands/DescribeConformancePackComplianceCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeConformancePackCompliance(config: ConfigServicePaginationConfiguration, input: DescribeConformancePackComplianceCommandInput, ...additionalArguments: any): Paginator<DescribeConformancePackComplianceCommandOutput>;
