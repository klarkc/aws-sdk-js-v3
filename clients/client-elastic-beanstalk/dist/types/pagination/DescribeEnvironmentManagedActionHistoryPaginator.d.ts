import { DescribeEnvironmentManagedActionHistoryCommandInput, DescribeEnvironmentManagedActionHistoryCommandOutput } from "../commands/DescribeEnvironmentManagedActionHistoryCommand";
import { ElasticBeanstalkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEnvironmentManagedActionHistory(config: ElasticBeanstalkPaginationConfiguration, input: DescribeEnvironmentManagedActionHistoryCommandInput, ...additionalArguments: any): Paginator<DescribeEnvironmentManagedActionHistoryCommandOutput>;
