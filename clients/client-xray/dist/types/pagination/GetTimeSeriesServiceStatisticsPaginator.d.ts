import { GetTimeSeriesServiceStatisticsCommandInput, GetTimeSeriesServiceStatisticsCommandOutput } from "../commands/GetTimeSeriesServiceStatisticsCommand";
import { XRayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetTimeSeriesServiceStatistics(config: XRayPaginationConfiguration, input: GetTimeSeriesServiceStatisticsCommandInput, ...additionalArguments: any): Paginator<GetTimeSeriesServiceStatisticsCommandOutput>;
