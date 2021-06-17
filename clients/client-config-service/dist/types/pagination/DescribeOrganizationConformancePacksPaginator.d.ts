import { DescribeOrganizationConformancePacksCommandInput, DescribeOrganizationConformancePacksCommandOutput } from "../commands/DescribeOrganizationConformancePacksCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeOrganizationConformancePacks(config: ConfigServicePaginationConfiguration, input: DescribeOrganizationConformancePacksCommandInput, ...additionalArguments: any): Paginator<DescribeOrganizationConformancePacksCommandOutput>;
