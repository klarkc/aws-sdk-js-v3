import { DescribeOrganizationConformancePackStatusesCommandInput, DescribeOrganizationConformancePackStatusesCommandOutput } from "../commands/DescribeOrganizationConformancePackStatusesCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeOrganizationConformancePackStatuses(config: ConfigServicePaginationConfiguration, input: DescribeOrganizationConformancePackStatusesCommandInput, ...additionalArguments: any): Paginator<DescribeOrganizationConformancePackStatusesCommandOutput>;
