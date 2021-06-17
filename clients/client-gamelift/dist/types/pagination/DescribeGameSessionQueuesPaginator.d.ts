import { DescribeGameSessionQueuesCommandInput, DescribeGameSessionQueuesCommandOutput } from "../commands/DescribeGameSessionQueuesCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeGameSessionQueues(config: GameLiftPaginationConfiguration, input: DescribeGameSessionQueuesCommandInput, ...additionalArguments: any): Paginator<DescribeGameSessionQueuesCommandOutput>;
