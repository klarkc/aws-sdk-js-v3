import { GetInsightEventsCommandInput, GetInsightEventsCommandOutput } from "../commands/GetInsightEventsCommand";
import { XRayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetInsightEvents(config: XRayPaginationConfiguration, input: GetInsightEventsCommandInput, ...additionalArguments: any): Paginator<GetInsightEventsCommandOutput>;
