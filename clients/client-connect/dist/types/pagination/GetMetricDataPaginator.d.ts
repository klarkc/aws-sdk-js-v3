import { GetMetricDataCommandInput, GetMetricDataCommandOutput } from "../commands/GetMetricDataCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetMetricData(config: ConnectPaginationConfiguration, input: GetMetricDataCommandInput, ...additionalArguments: any): Paginator<GetMetricDataCommandOutput>;
