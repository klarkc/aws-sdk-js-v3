import { DescribeHostsCommandInput, DescribeHostsCommandOutput } from "../commands/DescribeHostsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeHosts(config: EC2PaginationConfiguration, input: DescribeHostsCommandInput, ...additionalArguments: any): Paginator<DescribeHostsCommandOutput>;
