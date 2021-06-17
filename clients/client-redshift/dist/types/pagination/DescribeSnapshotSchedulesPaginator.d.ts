import { DescribeSnapshotSchedulesCommandInput, DescribeSnapshotSchedulesCommandOutput } from "../commands/DescribeSnapshotSchedulesCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeSnapshotSchedules(config: RedshiftPaginationConfiguration, input: DescribeSnapshotSchedulesCommandInput, ...additionalArguments: any): Paginator<DescribeSnapshotSchedulesCommandOutput>;
