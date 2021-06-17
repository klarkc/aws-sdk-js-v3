import { DescribeTableRestoreStatusCommandInput, DescribeTableRestoreStatusCommandOutput } from "../commands/DescribeTableRestoreStatusCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeTableRestoreStatus(config: RedshiftPaginationConfiguration, input: DescribeTableRestoreStatusCommandInput, ...additionalArguments: any): Paginator<DescribeTableRestoreStatusCommandOutput>;
