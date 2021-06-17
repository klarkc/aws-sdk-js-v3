import { DescribeServersCommandInput, DescribeServersCommandOutput } from "../commands/DescribeServersCommand";
import { OpsWorksCMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeServers(config: OpsWorksCMPaginationConfiguration, input: DescribeServersCommandInput, ...additionalArguments: any): Paginator<DescribeServersCommandOutput>;
