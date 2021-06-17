import { DescribeClusterParametersCommandInput, DescribeClusterParametersCommandOutput } from "../commands/DescribeClusterParametersCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeClusterParameters(config: RedshiftPaginationConfiguration, input: DescribeClusterParametersCommandInput, ...additionalArguments: any): Paginator<DescribeClusterParametersCommandOutput>;
