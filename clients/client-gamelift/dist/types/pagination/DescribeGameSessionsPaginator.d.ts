import { DescribeGameSessionsCommandInput, DescribeGameSessionsCommandOutput } from "../commands/DescribeGameSessionsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeGameSessions(config: GameLiftPaginationConfiguration, input: DescribeGameSessionsCommandInput, ...additionalArguments: any): Paginator<DescribeGameSessionsCommandOutput>;
