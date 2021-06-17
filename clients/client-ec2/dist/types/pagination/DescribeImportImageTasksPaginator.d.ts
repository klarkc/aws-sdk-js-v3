import { DescribeImportImageTasksCommandInput, DescribeImportImageTasksCommandOutput } from "../commands/DescribeImportImageTasksCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeImportImageTasks(config: EC2PaginationConfiguration, input: DescribeImportImageTasksCommandInput, ...additionalArguments: any): Paginator<DescribeImportImageTasksCommandOutput>;
