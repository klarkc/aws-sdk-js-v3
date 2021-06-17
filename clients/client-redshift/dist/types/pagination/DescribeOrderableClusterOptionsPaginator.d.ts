import { DescribeOrderableClusterOptionsCommandInput, DescribeOrderableClusterOptionsCommandOutput } from "../commands/DescribeOrderableClusterOptionsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeOrderableClusterOptions(config: RedshiftPaginationConfiguration, input: DescribeOrderableClusterOptionsCommandInput, ...additionalArguments: any): Paginator<DescribeOrderableClusterOptionsCommandOutput>;
