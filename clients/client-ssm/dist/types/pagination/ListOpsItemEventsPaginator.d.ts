import { ListOpsItemEventsCommandInput, ListOpsItemEventsCommandOutput } from "../commands/ListOpsItemEventsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOpsItemEvents(config: SSMPaginationConfiguration, input: ListOpsItemEventsCommandInput, ...additionalArguments: any): Paginator<ListOpsItemEventsCommandOutput>;
