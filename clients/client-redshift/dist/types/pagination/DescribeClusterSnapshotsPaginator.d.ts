import { DescribeClusterSnapshotsCommandInput, DescribeClusterSnapshotsCommandOutput } from "../commands/DescribeClusterSnapshotsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeClusterSnapshots(config: RedshiftPaginationConfiguration, input: DescribeClusterSnapshotsCommandInput, ...additionalArguments: any): Paginator<DescribeClusterSnapshotsCommandOutput>;
