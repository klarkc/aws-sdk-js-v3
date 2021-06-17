import { DescribeDBParametersCommandInput, DescribeDBParametersCommandOutput } from "../commands/DescribeDBParametersCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBParameters(config: NeptunePaginationConfiguration, input: DescribeDBParametersCommandInput, ...additionalArguments: any): Paginator<DescribeDBParametersCommandOutput>;
