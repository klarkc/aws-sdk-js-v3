import { DescribeAnomalyDetectionExecutionsCommandInput, DescribeAnomalyDetectionExecutionsCommandOutput } from "../commands/DescribeAnomalyDetectionExecutionsCommand";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAnomalyDetectionExecutions(config: LookoutMetricsPaginationConfiguration, input: DescribeAnomalyDetectionExecutionsCommandInput, ...additionalArguments: any): Paginator<DescribeAnomalyDetectionExecutionsCommandOutput>;
