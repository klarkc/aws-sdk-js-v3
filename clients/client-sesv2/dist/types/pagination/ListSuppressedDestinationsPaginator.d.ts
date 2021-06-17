import { ListSuppressedDestinationsCommandInput, ListSuppressedDestinationsCommandOutput } from "../commands/ListSuppressedDestinationsCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSuppressedDestinations(config: SESv2PaginationConfiguration, input: ListSuppressedDestinationsCommandInput, ...additionalArguments: any): Paginator<ListSuppressedDestinationsCommandOutput>;
