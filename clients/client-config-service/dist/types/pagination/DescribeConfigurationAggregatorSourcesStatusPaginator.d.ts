import { DescribeConfigurationAggregatorSourcesStatusCommandInput, DescribeConfigurationAggregatorSourcesStatusCommandOutput } from "../commands/DescribeConfigurationAggregatorSourcesStatusCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeConfigurationAggregatorSourcesStatus(config: ConfigServicePaginationConfiguration, input: DescribeConfigurationAggregatorSourcesStatusCommandInput, ...additionalArguments: any): Paginator<DescribeConfigurationAggregatorSourcesStatusCommandOutput>;
