import { ListCustomMetricsCommandInput, ListCustomMetricsCommandOutput } from "../commands/ListCustomMetricsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCustomMetrics(config: IoTPaginationConfiguration, input: ListCustomMetricsCommandInput, ...additionalArguments: any): Paginator<ListCustomMetricsCommandOutput>;
