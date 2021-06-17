import { DescribeImageTagsCommandInput, DescribeImageTagsCommandOutput } from "../commands/DescribeImageTagsCommand";
import { ECRPUBLICPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeImageTags(config: ECRPUBLICPaginationConfiguration, input: DescribeImageTagsCommandInput, ...additionalArguments: any): Paginator<DescribeImageTagsCommandOutput>;
