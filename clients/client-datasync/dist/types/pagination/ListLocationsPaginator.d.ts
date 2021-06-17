import { ListLocationsCommandInput, ListLocationsCommandOutput } from "../commands/ListLocationsCommand";
import { DataSyncPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListLocations(config: DataSyncPaginationConfiguration, input: ListLocationsCommandInput, ...additionalArguments: any): Paginator<ListLocationsCommandOutput>;
