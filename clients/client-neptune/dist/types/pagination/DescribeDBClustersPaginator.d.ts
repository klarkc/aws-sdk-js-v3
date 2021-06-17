import { DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput } from "../commands/DescribeDBClustersCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBClusters(config: NeptunePaginationConfiguration, input: DescribeDBClustersCommandInput, ...additionalArguments: any): Paginator<DescribeDBClustersCommandOutput>;
