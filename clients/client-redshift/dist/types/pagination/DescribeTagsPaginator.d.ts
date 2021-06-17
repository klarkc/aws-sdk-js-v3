import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeTags(config: RedshiftPaginationConfiguration, input: DescribeTagsCommandInput, ...additionalArguments: any): Paginator<DescribeTagsCommandOutput>;
