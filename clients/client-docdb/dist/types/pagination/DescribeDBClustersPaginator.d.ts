import { DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput } from "../commands/DescribeDBClustersCommand";
import { DocDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBClusters(config: DocDBPaginationConfiguration, input: DescribeDBClustersCommandInput, ...additionalArguments: any): Paginator<DescribeDBClustersCommandOutput>;
