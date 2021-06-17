import { DescribeFleetLocationAttributesCommandInput, DescribeFleetLocationAttributesCommandOutput } from "../commands/DescribeFleetLocationAttributesCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeFleetLocationAttributes(config: GameLiftPaginationConfiguration, input: DescribeFleetLocationAttributesCommandInput, ...additionalArguments: any): Paginator<DescribeFleetLocationAttributesCommandOutput>;
