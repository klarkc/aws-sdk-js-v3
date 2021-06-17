import { DescribeResourceCollectionHealthCommandInput, DescribeResourceCollectionHealthCommandOutput } from "../commands/DescribeResourceCollectionHealthCommand";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeResourceCollectionHealth(config: DevOpsGuruPaginationConfiguration, input: DescribeResourceCollectionHealthCommandInput, ...additionalArguments: any): Paginator<DescribeResourceCollectionHealthCommandOutput>;
