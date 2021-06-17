import { DescribeFleetEventsCommandInput, DescribeFleetEventsCommandOutput } from "../commands/DescribeFleetEventsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeFleetEvents(config: GameLiftPaginationConfiguration, input: DescribeFleetEventsCommandInput, ...additionalArguments: any): Paginator<DescribeFleetEventsCommandOutput>;
