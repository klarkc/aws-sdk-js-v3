import { DescribeDBClusterParametersCommandInput, DescribeDBClusterParametersCommandOutput } from "../commands/DescribeDBClusterParametersCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBClusterParameters(config: RDSPaginationConfiguration, input: DescribeDBClusterParametersCommandInput, ...additionalArguments: any): Paginator<DescribeDBClusterParametersCommandOutput>;
