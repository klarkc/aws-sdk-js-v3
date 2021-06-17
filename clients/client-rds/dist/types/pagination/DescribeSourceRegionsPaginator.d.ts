import { DescribeSourceRegionsCommandInput, DescribeSourceRegionsCommandOutput } from "../commands/DescribeSourceRegionsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeSourceRegions(config: RDSPaginationConfiguration, input: DescribeSourceRegionsCommandInput, ...additionalArguments: any): Paginator<DescribeSourceRegionsCommandOutput>;
