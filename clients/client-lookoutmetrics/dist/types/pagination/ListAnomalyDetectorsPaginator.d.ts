import { ListAnomalyDetectorsCommandInput, ListAnomalyDetectorsCommandOutput } from "../commands/ListAnomalyDetectorsCommand";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAnomalyDetectors(config: LookoutMetricsPaginationConfiguration, input: ListAnomalyDetectorsCommandInput, ...additionalArguments: any): Paginator<ListAnomalyDetectorsCommandOutput>;
