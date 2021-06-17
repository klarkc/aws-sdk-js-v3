import { DescribeClusterTracksCommandInput, DescribeClusterTracksCommandOutput } from "../commands/DescribeClusterTracksCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeClusterTracks(config: RedshiftPaginationConfiguration, input: DescribeClusterTracksCommandInput, ...additionalArguments: any): Paginator<DescribeClusterTracksCommandOutput>;
