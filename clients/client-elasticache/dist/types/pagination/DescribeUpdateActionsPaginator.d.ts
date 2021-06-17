import { DescribeUpdateActionsCommandInput, DescribeUpdateActionsCommandOutput } from "../commands/DescribeUpdateActionsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeUpdateActions(config: ElastiCachePaginationConfiguration, input: DescribeUpdateActionsCommandInput, ...additionalArguments: any): Paginator<DescribeUpdateActionsCommandOutput>;
