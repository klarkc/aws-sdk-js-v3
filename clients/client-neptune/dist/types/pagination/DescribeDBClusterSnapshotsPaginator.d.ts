import { DescribeDBClusterSnapshotsCommandInput, DescribeDBClusterSnapshotsCommandOutput } from "../commands/DescribeDBClusterSnapshotsCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBClusterSnapshots(config: NeptunePaginationConfiguration, input: DescribeDBClusterSnapshotsCommandInput, ...additionalArguments: any): Paginator<DescribeDBClusterSnapshotsCommandOutput>;
