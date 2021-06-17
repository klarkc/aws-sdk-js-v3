import { DescribeAggregationAuthorizationsCommandInput, DescribeAggregationAuthorizationsCommandOutput } from "../commands/DescribeAggregationAuthorizationsCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAggregationAuthorizations(config: ConfigServicePaginationConfiguration, input: DescribeAggregationAuthorizationsCommandInput, ...additionalArguments: any): Paginator<DescribeAggregationAuthorizationsCommandOutput>;
