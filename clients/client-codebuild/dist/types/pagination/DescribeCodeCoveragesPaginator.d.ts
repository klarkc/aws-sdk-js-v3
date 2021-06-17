import { DescribeCodeCoveragesCommandInput, DescribeCodeCoveragesCommandOutput } from "../commands/DescribeCodeCoveragesCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCodeCoverages(config: CodeBuildPaginationConfiguration, input: DescribeCodeCoveragesCommandInput, ...additionalArguments: any): Paginator<DescribeCodeCoveragesCommandOutput>;
