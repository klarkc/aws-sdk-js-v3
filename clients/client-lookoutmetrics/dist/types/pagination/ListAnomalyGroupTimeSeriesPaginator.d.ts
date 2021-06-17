import { ListAnomalyGroupTimeSeriesCommandInput, ListAnomalyGroupTimeSeriesCommandOutput } from "../commands/ListAnomalyGroupTimeSeriesCommand";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAnomalyGroupTimeSeries(config: LookoutMetricsPaginationConfiguration, input: ListAnomalyGroupTimeSeriesCommandInput, ...additionalArguments: any): Paginator<ListAnomalyGroupTimeSeriesCommandOutput>;
