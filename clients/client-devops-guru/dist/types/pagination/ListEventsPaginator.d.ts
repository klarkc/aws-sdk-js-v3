import { ListEventsCommandInput, ListEventsCommandOutput } from "../commands/ListEventsCommand";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEvents(config: DevOpsGuruPaginationConfiguration, input: ListEventsCommandInput, ...additionalArguments: any): Paginator<ListEventsCommandOutput>;
