import { DescribeDBClusterParametersCommandInput, DescribeDBClusterParametersCommandOutput } from "../commands/DescribeDBClusterParametersCommand";
import { DocDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBClusterParameters(config: DocDBPaginationConfiguration, input: DescribeDBClusterParametersCommandInput, ...additionalArguments: any): Paginator<DescribeDBClusterParametersCommandOutput>;
