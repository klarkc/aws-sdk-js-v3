import { ListGroundStationsCommandInput, ListGroundStationsCommandOutput } from "../commands/ListGroundStationsCommand";
import { GroundStationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGroundStations(config: GroundStationPaginationConfiguration, input: ListGroundStationsCommandInput, ...additionalArguments: any): Paginator<ListGroundStationsCommandOutput>;
