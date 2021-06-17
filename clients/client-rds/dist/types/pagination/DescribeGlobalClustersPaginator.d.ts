import { DescribeGlobalClustersCommandInput, DescribeGlobalClustersCommandOutput } from "../commands/DescribeGlobalClustersCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeGlobalClusters(config: RDSPaginationConfiguration, input: DescribeGlobalClustersCommandInput, ...additionalArguments: any): Paginator<DescribeGlobalClustersCommandOutput>;
