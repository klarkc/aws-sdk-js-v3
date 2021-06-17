import { DescribeSourceServersCommandInput, DescribeSourceServersCommandOutput } from "../commands/DescribeSourceServersCommand";
import { MgnPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeSourceServers(config: MgnPaginationConfiguration, input: DescribeSourceServersCommandInput, ...additionalArguments: any): Paginator<DescribeSourceServersCommandOutput>;
