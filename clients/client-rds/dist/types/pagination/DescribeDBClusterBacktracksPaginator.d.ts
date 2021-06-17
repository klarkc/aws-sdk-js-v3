import { DescribeDBClusterBacktracksCommandInput, DescribeDBClusterBacktracksCommandOutput } from "../commands/DescribeDBClusterBacktracksCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBClusterBacktracks(config: RDSPaginationConfiguration, input: DescribeDBClusterBacktracksCommandInput, ...additionalArguments: any): Paginator<DescribeDBClusterBacktracksCommandOutput>;
