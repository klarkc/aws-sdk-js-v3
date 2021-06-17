import { DescribeVpcPeeringConnectionsCommandInput, DescribeVpcPeeringConnectionsCommandOutput } from "../commands/DescribeVpcPeeringConnectionsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeVpcPeeringConnections(config: EC2PaginationConfiguration, input: DescribeVpcPeeringConnectionsCommandInput, ...additionalArguments: any): Paginator<DescribeVpcPeeringConnectionsCommandOutput>;
