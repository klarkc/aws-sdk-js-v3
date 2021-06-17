import { DescribeClientVpnConnectionsCommandInput, DescribeClientVpnConnectionsCommandOutput } from "../commands/DescribeClientVpnConnectionsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeClientVpnConnections(config: EC2PaginationConfiguration, input: DescribeClientVpnConnectionsCommandInput, ...additionalArguments: any): Paginator<DescribeClientVpnConnectionsCommandOutput>;
