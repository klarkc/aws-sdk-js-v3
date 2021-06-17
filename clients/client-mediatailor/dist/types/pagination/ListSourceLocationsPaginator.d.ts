import { ListSourceLocationsCommandInput, ListSourceLocationsCommandOutput } from "../commands/ListSourceLocationsCommand";
import { MediaTailorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSourceLocations(config: MediaTailorPaginationConfiguration, input: ListSourceLocationsCommandInput, ...additionalArguments: any): Paginator<ListSourceLocationsCommandOutput>;
