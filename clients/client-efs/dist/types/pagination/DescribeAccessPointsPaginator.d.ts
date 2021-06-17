import { DescribeAccessPointsCommandInput, DescribeAccessPointsCommandOutput } from "../commands/DescribeAccessPointsCommand";
import { EFSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAccessPoints(config: EFSPaginationConfiguration, input: DescribeAccessPointsCommandInput, ...additionalArguments: any): Paginator<DescribeAccessPointsCommandOutput>;
