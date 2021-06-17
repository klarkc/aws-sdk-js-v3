import { DescribeMatchmakingRuleSetsCommandInput, DescribeMatchmakingRuleSetsCommandOutput } from "../commands/DescribeMatchmakingRuleSetsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeMatchmakingRuleSets(config: GameLiftPaginationConfiguration, input: DescribeMatchmakingRuleSetsCommandInput, ...additionalArguments: any): Paginator<DescribeMatchmakingRuleSetsCommandOutput>;
