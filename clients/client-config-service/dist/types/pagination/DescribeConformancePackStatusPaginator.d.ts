import { DescribeConformancePackStatusCommandInput, DescribeConformancePackStatusCommandOutput } from "../commands/DescribeConformancePackStatusCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeConformancePackStatus(config: ConfigServicePaginationConfiguration, input: DescribeConformancePackStatusCommandInput, ...additionalArguments: any): Paginator<DescribeConformancePackStatusCommandOutput>;
