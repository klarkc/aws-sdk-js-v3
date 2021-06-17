import { GetInsightsCommandInput, GetInsightsCommandOutput } from "../commands/GetInsightsCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetInsights(config: SecurityHubPaginationConfiguration, input: GetInsightsCommandInput, ...additionalArguments: any): Paginator<GetInsightsCommandOutput>;
