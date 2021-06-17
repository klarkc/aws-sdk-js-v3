import { DescribeDBParametersCommandInput, DescribeDBParametersCommandOutput } from "../commands/DescribeDBParametersCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBParameters(config: RDSPaginationConfiguration, input: DescribeDBParametersCommandInput, ...additionalArguments: any): Paginator<DescribeDBParametersCommandOutput>;
