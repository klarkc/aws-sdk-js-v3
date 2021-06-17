import { DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput } from "../commands/DescribeLoadBalancersCommand";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeLoadBalancers(config: ElasticLoadBalancingV2PaginationConfiguration, input: DescribeLoadBalancersCommandInput, ...additionalArguments: any): Paginator<DescribeLoadBalancersCommandOutput>;
