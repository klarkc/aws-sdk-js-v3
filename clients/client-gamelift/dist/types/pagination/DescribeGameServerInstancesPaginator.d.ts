import { DescribeGameServerInstancesCommandInput, DescribeGameServerInstancesCommandOutput } from "../commands/DescribeGameServerInstancesCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeGameServerInstances(config: GameLiftPaginationConfiguration, input: DescribeGameServerInstancesCommandInput, ...additionalArguments: any): Paginator<DescribeGameServerInstancesCommandOutput>;
