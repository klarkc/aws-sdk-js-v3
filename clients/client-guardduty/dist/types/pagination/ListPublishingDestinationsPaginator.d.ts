import { ListPublishingDestinationsCommandInput, ListPublishingDestinationsCommandOutput } from "../commands/ListPublishingDestinationsCommand";
import { GuardDutyPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPublishingDestinations(config: GuardDutyPaginationConfiguration, input: ListPublishingDestinationsCommandInput, ...additionalArguments: any): Paginator<ListPublishingDestinationsCommandOutput>;
