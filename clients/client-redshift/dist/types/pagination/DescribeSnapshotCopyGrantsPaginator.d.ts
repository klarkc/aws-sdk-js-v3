import { DescribeSnapshotCopyGrantsCommandInput, DescribeSnapshotCopyGrantsCommandOutput } from "../commands/DescribeSnapshotCopyGrantsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeSnapshotCopyGrants(config: RedshiftPaginationConfiguration, input: DescribeSnapshotCopyGrantsCommandInput, ...additionalArguments: any): Paginator<DescribeSnapshotCopyGrantsCommandOutput>;
