import { DescribeEventTypesCommandInput, DescribeEventTypesCommandOutput } from "../commands/DescribeEventTypesCommand";
import { HealthPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEventTypes(config: HealthPaginationConfiguration, input: DescribeEventTypesCommandInput, ...additionalArguments: any): Paginator<DescribeEventTypesCommandOutput>;
