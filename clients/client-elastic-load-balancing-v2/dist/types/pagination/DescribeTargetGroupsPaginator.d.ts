import { DescribeTargetGroupsCommandInput, DescribeTargetGroupsCommandOutput } from "../commands/DescribeTargetGroupsCommand";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeTargetGroups(config: ElasticLoadBalancingV2PaginationConfiguration, input: DescribeTargetGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeTargetGroupsCommandOutput>;
