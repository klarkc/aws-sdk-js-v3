import { GetTraceSummariesCommandInput, GetTraceSummariesCommandOutput } from "../commands/GetTraceSummariesCommand";
import { XRayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetTraceSummaries(config: XRayPaginationConfiguration, input: GetTraceSummariesCommandInput, ...additionalArguments: any): Paginator<GetTraceSummariesCommandOutput>;
