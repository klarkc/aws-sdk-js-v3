import { DescribeFleetCapacityCommandInput, DescribeFleetCapacityCommandOutput } from "../commands/DescribeFleetCapacityCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeFleetCapacity(config: GameLiftPaginationConfiguration, input: DescribeFleetCapacityCommandInput, ...additionalArguments: any): Paginator<DescribeFleetCapacityCommandOutput>;
