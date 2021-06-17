import { DescribeJobLogItemsCommandInput, DescribeJobLogItemsCommandOutput } from "../commands/DescribeJobLogItemsCommand";
import { MgnPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeJobLogItems(config: MgnPaginationConfiguration, input: DescribeJobLogItemsCommandInput, ...additionalArguments: any): Paginator<DescribeJobLogItemsCommandOutput>;
