import { DescribeConfigurationAggregatorsCommandInput, DescribeConfigurationAggregatorsCommandOutput } from "../commands/DescribeConfigurationAggregatorsCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeConfigurationAggregators(config: ConfigServicePaginationConfiguration, input: DescribeConfigurationAggregatorsCommandInput, ...additionalArguments: any): Paginator<DescribeConfigurationAggregatorsCommandOutput>;
