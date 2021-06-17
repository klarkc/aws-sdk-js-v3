import { GetCurrentMetricDataCommandInput, GetCurrentMetricDataCommandOutput } from "../commands/GetCurrentMetricDataCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetCurrentMetricData(config: ConnectPaginationConfiguration, input: GetCurrentMetricDataCommandInput, ...additionalArguments: any): Paginator<GetCurrentMetricDataCommandOutput>;
