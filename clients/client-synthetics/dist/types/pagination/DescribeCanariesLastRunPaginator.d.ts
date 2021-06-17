import { DescribeCanariesLastRunCommandInput, DescribeCanariesLastRunCommandOutput } from "../commands/DescribeCanariesLastRunCommand";
import { SyntheticsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCanariesLastRun(config: SyntheticsPaginationConfiguration, input: DescribeCanariesLastRunCommandInput, ...additionalArguments: any): Paginator<DescribeCanariesLastRunCommandOutput>;
