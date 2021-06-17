import { DescribeStandardsCommandInput, DescribeStandardsCommandOutput } from "../commands/DescribeStandardsCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeStandards(config: SecurityHubPaginationConfiguration, input: DescribeStandardsCommandInput, ...additionalArguments: any): Paginator<DescribeStandardsCommandOutput>;
