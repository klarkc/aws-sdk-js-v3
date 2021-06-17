import { DescribeMaintenanceWindowExecutionTasksCommandInput, DescribeMaintenanceWindowExecutionTasksCommandOutput } from "../commands/DescribeMaintenanceWindowExecutionTasksCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeMaintenanceWindowExecutionTasks(config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowExecutionTasksCommandInput, ...additionalArguments: any): Paginator<DescribeMaintenanceWindowExecutionTasksCommandOutput>;
