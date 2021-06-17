import { DescribeTestCasesCommandInput, DescribeTestCasesCommandOutput } from "../commands/DescribeTestCasesCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeTestCases(config: CodeBuildPaginationConfiguration, input: DescribeTestCasesCommandInput, ...additionalArguments: any): Paginator<DescribeTestCasesCommandOutput>;
