import { ListSatellitesCommandInput, ListSatellitesCommandOutput } from "../commands/ListSatellitesCommand";
import { GroundStationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSatellites(config: GroundStationPaginationConfiguration, input: ListSatellitesCommandInput, ...additionalArguments: any): Paginator<ListSatellitesCommandOutput>;
