import { ListViolationEventsCommandInput, ListViolationEventsCommandOutput } from "../commands/ListViolationEventsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListViolationEvents(config: IoTPaginationConfiguration, input: ListViolationEventsCommandInput, ...additionalArguments: any): Paginator<ListViolationEventsCommandOutput>;
