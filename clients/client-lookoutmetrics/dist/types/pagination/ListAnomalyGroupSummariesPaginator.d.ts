import { ListAnomalyGroupSummariesCommandInput, ListAnomalyGroupSummariesCommandOutput } from "../commands/ListAnomalyGroupSummariesCommand";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAnomalyGroupSummaries(config: LookoutMetricsPaginationConfiguration, input: ListAnomalyGroupSummariesCommandInput, ...additionalArguments: any): Paginator<ListAnomalyGroupSummariesCommandOutput>;
