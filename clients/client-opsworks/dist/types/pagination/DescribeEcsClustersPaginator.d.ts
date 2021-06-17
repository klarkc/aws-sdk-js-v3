import { DescribeEcsClustersCommandInput, DescribeEcsClustersCommandOutput } from "../commands/DescribeEcsClustersCommand";
import { OpsWorksPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEcsClusters(config: OpsWorksPaginationConfiguration, input: DescribeEcsClustersCommandInput, ...additionalArguments: any): Paginator<DescribeEcsClustersCommandOutput>;
