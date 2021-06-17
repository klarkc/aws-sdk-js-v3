import { DescribeTransitGatewayConnectsCommandInput, DescribeTransitGatewayConnectsCommandOutput } from "../commands/DescribeTransitGatewayConnectsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeTransitGatewayConnects(config: EC2PaginationConfiguration, input: DescribeTransitGatewayConnectsCommandInput, ...additionalArguments: any): Paginator<DescribeTransitGatewayConnectsCommandOutput>;
