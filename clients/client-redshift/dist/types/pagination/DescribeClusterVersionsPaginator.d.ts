import { DescribeClusterVersionsCommandInput, DescribeClusterVersionsCommandOutput } from "../commands/DescribeClusterVersionsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeClusterVersions(config: RedshiftPaginationConfiguration, input: DescribeClusterVersionsCommandInput, ...additionalArguments: any): Paginator<DescribeClusterVersionsCommandOutput>;
