import { DescribeVpcEndpointConnectionNotificationsCommandInput, DescribeVpcEndpointConnectionNotificationsCommandOutput } from "../commands/DescribeVpcEndpointConnectionNotificationsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeVpcEndpointConnectionNotifications(config: EC2PaginationConfiguration, input: DescribeVpcEndpointConnectionNotificationsCommandInput, ...additionalArguments: any): Paginator<DescribeVpcEndpointConnectionNotificationsCommandOutput>;
