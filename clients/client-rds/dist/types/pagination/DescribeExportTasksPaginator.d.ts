import { DescribeExportTasksCommandInput, DescribeExportTasksCommandOutput } from "../commands/DescribeExportTasksCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeExportTasks(config: RDSPaginationConfiguration, input: DescribeExportTasksCommandInput, ...additionalArguments: any): Paginator<DescribeExportTasksCommandOutput>;
