import { DescribeNodeConfigurationOptionsCommandInput, DescribeNodeConfigurationOptionsCommandOutput } from "../commands/DescribeNodeConfigurationOptionsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeNodeConfigurationOptions(config: RedshiftPaginationConfiguration, input: DescribeNodeConfigurationOptionsCommandInput, ...additionalArguments: any): Paginator<DescribeNodeConfigurationOptionsCommandOutput>;
