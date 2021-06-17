import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "../commands/DescribeSnapshotsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeSnapshots(config: EC2PaginationConfiguration, input: DescribeSnapshotsCommandInput, ...additionalArguments: any): Paginator<DescribeSnapshotsCommandOutput>;
