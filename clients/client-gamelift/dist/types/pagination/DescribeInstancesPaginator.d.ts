import { DescribeInstancesCommandInput, DescribeInstancesCommandOutput } from "../commands/DescribeInstancesCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeInstances(config: GameLiftPaginationConfiguration, input: DescribeInstancesCommandInput, ...additionalArguments: any): Paginator<DescribeInstancesCommandOutput>;
