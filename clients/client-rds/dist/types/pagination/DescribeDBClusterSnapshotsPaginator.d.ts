import { DescribeDBClusterSnapshotsCommandInput, DescribeDBClusterSnapshotsCommandOutput } from "../commands/DescribeDBClusterSnapshotsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBClusterSnapshots(config: RDSPaginationConfiguration, input: DescribeDBClusterSnapshotsCommandInput, ...additionalArguments: any): Paginator<DescribeDBClusterSnapshotsCommandOutput>;
