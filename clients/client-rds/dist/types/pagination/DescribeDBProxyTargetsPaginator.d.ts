import { DescribeDBProxyTargetsCommandInput, DescribeDBProxyTargetsCommandOutput } from "../commands/DescribeDBProxyTargetsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBProxyTargets(config: RDSPaginationConfiguration, input: DescribeDBProxyTargetsCommandInput, ...additionalArguments: any): Paginator<DescribeDBProxyTargetsCommandOutput>;
