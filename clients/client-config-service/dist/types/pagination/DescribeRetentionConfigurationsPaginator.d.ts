import { DescribeRetentionConfigurationsCommandInput, DescribeRetentionConfigurationsCommandOutput } from "../commands/DescribeRetentionConfigurationsCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeRetentionConfigurations(config: ConfigServicePaginationConfiguration, input: DescribeRetentionConfigurationsCommandInput, ...additionalArguments: any): Paginator<DescribeRetentionConfigurationsCommandOutput>;
