import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "../commands/DescribeSnapshotsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeSnapshots(config: ElastiCachePaginationConfiguration, input: DescribeSnapshotsCommandInput, ...additionalArguments: any): Paginator<DescribeSnapshotsCommandOutput>;
