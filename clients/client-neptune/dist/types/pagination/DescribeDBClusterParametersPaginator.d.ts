import { DescribeDBClusterParametersCommandInput, DescribeDBClusterParametersCommandOutput } from "../commands/DescribeDBClusterParametersCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBClusterParameters(config: NeptunePaginationConfiguration, input: DescribeDBClusterParametersCommandInput, ...additionalArguments: any): Paginator<DescribeDBClusterParametersCommandOutput>;
