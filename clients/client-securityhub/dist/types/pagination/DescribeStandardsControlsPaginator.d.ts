import { DescribeStandardsControlsCommandInput, DescribeStandardsControlsCommandOutput } from "../commands/DescribeStandardsControlsCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeStandardsControls(config: SecurityHubPaginationConfiguration, input: DescribeStandardsControlsCommandInput, ...additionalArguments: any): Paginator<DescribeStandardsControlsCommandOutput>;
