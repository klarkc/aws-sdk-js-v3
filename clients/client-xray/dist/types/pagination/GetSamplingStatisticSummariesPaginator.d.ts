import { GetSamplingStatisticSummariesCommandInput, GetSamplingStatisticSummariesCommandOutput } from "../commands/GetSamplingStatisticSummariesCommand";
import { XRayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetSamplingStatisticSummaries(config: XRayPaginationConfiguration, input: GetSamplingStatisticSummariesCommandInput, ...additionalArguments: any): Paginator<GetSamplingStatisticSummariesCommandOutput>;
