import { DescribeDataSourcesCommandInput, DescribeDataSourcesCommandOutput } from "../commands/DescribeDataSourcesCommand";
import { MachineLearningPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDataSources(config: MachineLearningPaginationConfiguration, input: DescribeDataSourcesCommandInput, ...additionalArguments: any): Paginator<DescribeDataSourcesCommandOutput>;
