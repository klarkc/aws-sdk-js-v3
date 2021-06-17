import { DescribeServiceUpdatesCommandInput, DescribeServiceUpdatesCommandOutput } from "../commands/DescribeServiceUpdatesCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeServiceUpdates(config: ElastiCachePaginationConfiguration, input: DescribeServiceUpdatesCommandInput, ...additionalArguments: any): Paginator<DescribeServiceUpdatesCommandOutput>;
