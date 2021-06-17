import { DescribeFleetAttributesCommandInput, DescribeFleetAttributesCommandOutput } from "../commands/DescribeFleetAttributesCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeFleetAttributes(config: GameLiftPaginationConfiguration, input: DescribeFleetAttributesCommandInput, ...additionalArguments: any): Paginator<DescribeFleetAttributesCommandOutput>;
