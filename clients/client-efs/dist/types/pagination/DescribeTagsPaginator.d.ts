import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
import { EFSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeTags(config: EFSPaginationConfiguration, input: DescribeTagsCommandInput, ...additionalArguments: any): Paginator<DescribeTagsCommandOutput>;
