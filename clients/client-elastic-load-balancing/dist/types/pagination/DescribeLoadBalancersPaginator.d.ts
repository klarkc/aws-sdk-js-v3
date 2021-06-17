import { DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput } from "../commands/DescribeLoadBalancersCommand";
import { ElasticLoadBalancingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeLoadBalancers(config: ElasticLoadBalancingPaginationConfiguration, input: DescribeLoadBalancersCommandInput, ...additionalArguments: any): Paginator<DescribeLoadBalancersCommandOutput>;
