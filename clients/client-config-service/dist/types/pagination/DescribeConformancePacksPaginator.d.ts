import { DescribeConformancePacksCommandInput, DescribeConformancePacksCommandOutput } from "../commands/DescribeConformancePacksCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeConformancePacks(config: ConfigServicePaginationConfiguration, input: DescribeConformancePacksCommandInput, ...additionalArguments: any): Paginator<DescribeConformancePacksCommandOutput>;
