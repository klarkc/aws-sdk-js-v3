import { DescribeAggregateComplianceByConformancePacksCommandInput, DescribeAggregateComplianceByConformancePacksCommandOutput } from "../commands/DescribeAggregateComplianceByConformancePacksCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAggregateComplianceByConformancePacks(config: ConfigServicePaginationConfiguration, input: DescribeAggregateComplianceByConformancePacksCommandInput, ...additionalArguments: any): Paginator<DescribeAggregateComplianceByConformancePacksCommandOutput>;
