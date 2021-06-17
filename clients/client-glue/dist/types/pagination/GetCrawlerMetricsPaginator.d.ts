import { GetCrawlerMetricsCommandInput, GetCrawlerMetricsCommandOutput } from "../commands/GetCrawlerMetricsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetCrawlerMetrics(config: GluePaginationConfiguration, input: GetCrawlerMetricsCommandInput, ...additionalArguments: any): Paginator<GetCrawlerMetricsCommandOutput>;
