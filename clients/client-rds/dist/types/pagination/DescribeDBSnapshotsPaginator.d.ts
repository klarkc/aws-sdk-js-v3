import { DescribeDBSnapshotsCommandInput, DescribeDBSnapshotsCommandOutput } from "../commands/DescribeDBSnapshotsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBSnapshots(config: RDSPaginationConfiguration, input: DescribeDBSnapshotsCommandInput, ...additionalArguments: any): Paginator<DescribeDBSnapshotsCommandOutput>;
