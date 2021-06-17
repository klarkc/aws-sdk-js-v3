import { DescribeDBClusterSnapshotsCommandInput, DescribeDBClusterSnapshotsCommandOutput } from "../commands/DescribeDBClusterSnapshotsCommand";
import { DocDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBClusterSnapshots(config: DocDBPaginationConfiguration, input: DescribeDBClusterSnapshotsCommandInput, ...additionalArguments: any): Paginator<DescribeDBClusterSnapshotsCommandOutput>;
