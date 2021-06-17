import { DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput } from "../commands/DescribeDBClustersCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBClusters(config: RDSPaginationConfiguration, input: DescribeDBClustersCommandInput, ...additionalArguments: any): Paginator<DescribeDBClustersCommandOutput>;
