import { ListTimelineEventsCommandInput, ListTimelineEventsCommandOutput } from "../commands/ListTimelineEventsCommand";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTimelineEvents(config: SSMIncidentsPaginationConfiguration, input: ListTimelineEventsCommandInput, ...additionalArguments: any): Paginator<ListTimelineEventsCommandOutput>;
