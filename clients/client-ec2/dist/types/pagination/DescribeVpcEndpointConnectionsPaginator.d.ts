import { DescribeVpcEndpointConnectionsCommandInput, DescribeVpcEndpointConnectionsCommandOutput } from "../commands/DescribeVpcEndpointConnectionsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeVpcEndpointConnections(config: EC2PaginationConfiguration, input: DescribeVpcEndpointConnectionsCommandInput, ...additionalArguments: any): Paginator<DescribeVpcEndpointConnectionsCommandOutput>;
