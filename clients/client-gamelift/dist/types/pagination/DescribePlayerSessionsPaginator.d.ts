import { DescribePlayerSessionsCommandInput, DescribePlayerSessionsCommandOutput } from "../commands/DescribePlayerSessionsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribePlayerSessions(config: GameLiftPaginationConfiguration, input: DescribePlayerSessionsCommandInput, ...additionalArguments: any): Paginator<DescribePlayerSessionsCommandOutput>;
