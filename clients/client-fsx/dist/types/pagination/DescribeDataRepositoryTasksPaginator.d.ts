import { DescribeDataRepositoryTasksCommandInput, DescribeDataRepositoryTasksCommandOutput } from "../commands/DescribeDataRepositoryTasksCommand";
import { FSxPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDataRepositoryTasks(config: FSxPaginationConfiguration, input: DescribeDataRepositoryTasksCommandInput, ...additionalArguments: any): Paginator<DescribeDataRepositoryTasksCommandOutput>;
