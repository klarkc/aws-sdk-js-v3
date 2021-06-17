import { DescribeGameSessionDetailsCommandInput, DescribeGameSessionDetailsCommandOutput } from "../commands/DescribeGameSessionDetailsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeGameSessionDetails(config: GameLiftPaginationConfiguration, input: DescribeGameSessionDetailsCommandInput, ...additionalArguments: any): Paginator<DescribeGameSessionDetailsCommandOutput>;
