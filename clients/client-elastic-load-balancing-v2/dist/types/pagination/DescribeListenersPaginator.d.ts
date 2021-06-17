import { DescribeListenersCommandInput, DescribeListenersCommandOutput } from "../commands/DescribeListenersCommand";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeListeners(config: ElasticLoadBalancingV2PaginationConfiguration, input: DescribeListenersCommandInput, ...additionalArguments: any): Paginator<DescribeListenersCommandOutput>;
