import { DescribeScheduleCommandInput, DescribeScheduleCommandOutput } from "../commands/DescribeScheduleCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeSchedule(config: MediaLivePaginationConfiguration, input: DescribeScheduleCommandInput, ...additionalArguments: any): Paginator<DescribeScheduleCommandOutput>;
