import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "../commands/DescribeJobsCommand";
import { MgnPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeJobs(config: MgnPaginationConfiguration, input: DescribeJobsCommandInput, ...additionalArguments: any): Paginator<DescribeJobsCommandOutput>;
