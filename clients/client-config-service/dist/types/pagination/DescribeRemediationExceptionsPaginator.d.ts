import { DescribeRemediationExceptionsCommandInput, DescribeRemediationExceptionsCommandOutput } from "../commands/DescribeRemediationExceptionsCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeRemediationExceptions(config: ConfigServicePaginationConfiguration, input: DescribeRemediationExceptionsCommandInput, ...additionalArguments: any): Paginator<DescribeRemediationExceptionsCommandOutput>;
