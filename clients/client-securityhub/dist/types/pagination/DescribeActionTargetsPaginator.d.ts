import { DescribeActionTargetsCommandInput, DescribeActionTargetsCommandOutput } from "../commands/DescribeActionTargetsCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeActionTargets(config: SecurityHubPaginationConfiguration, input: DescribeActionTargetsCommandInput, ...additionalArguments: any): Paginator<DescribeActionTargetsCommandOutput>;
