import { LookupEventsCommandInput, LookupEventsCommandOutput } from "../commands/LookupEventsCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateLookupEvents(config: CloudTrailPaginationConfiguration, input: LookupEventsCommandInput, ...additionalArguments: any): Paginator<LookupEventsCommandOutput>;
