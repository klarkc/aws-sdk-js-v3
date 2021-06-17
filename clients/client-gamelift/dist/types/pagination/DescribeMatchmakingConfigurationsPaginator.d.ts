import { DescribeMatchmakingConfigurationsCommandInput, DescribeMatchmakingConfigurationsCommandOutput } from "../commands/DescribeMatchmakingConfigurationsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeMatchmakingConfigurations(config: GameLiftPaginationConfiguration, input: DescribeMatchmakingConfigurationsCommandInput, ...additionalArguments: any): Paginator<DescribeMatchmakingConfigurationsCommandOutput>;
