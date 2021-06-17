import { DescribeFleetUtilizationCommandInput, DescribeFleetUtilizationCommandOutput } from "../commands/DescribeFleetUtilizationCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeFleetUtilization(config: GameLiftPaginationConfiguration, input: DescribeFleetUtilizationCommandInput, ...additionalArguments: any): Paginator<DescribeFleetUtilizationCommandOutput>;
