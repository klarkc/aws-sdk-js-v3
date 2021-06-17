import { DescribeRemediationExecutionStatusCommandInput, DescribeRemediationExecutionStatusCommandOutput } from "../commands/DescribeRemediationExecutionStatusCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeRemediationExecutionStatus(config: ConfigServicePaginationConfiguration, input: DescribeRemediationExecutionStatusCommandInput, ...additionalArguments: any): Paginator<DescribeRemediationExecutionStatusCommandOutput>;
