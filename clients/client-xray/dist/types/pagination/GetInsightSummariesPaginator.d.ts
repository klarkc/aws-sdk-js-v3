import { GetInsightSummariesCommandInput, GetInsightSummariesCommandOutput } from "../commands/GetInsightSummariesCommand";
import { XRayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetInsightSummaries(config: XRayPaginationConfiguration, input: GetInsightSummariesCommandInput, ...additionalArguments: any): Paginator<GetInsightSummariesCommandOutput>;
