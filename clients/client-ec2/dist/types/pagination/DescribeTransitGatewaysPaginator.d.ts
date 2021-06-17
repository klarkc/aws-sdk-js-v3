import { DescribeTransitGatewaysCommandInput, DescribeTransitGatewaysCommandOutput } from "../commands/DescribeTransitGatewaysCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeTransitGateways(config: EC2PaginationConfiguration, input: DescribeTransitGatewaysCommandInput, ...additionalArguments: any): Paginator<DescribeTransitGatewaysCommandOutput>;
