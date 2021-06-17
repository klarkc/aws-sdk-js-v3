import { ListMissionProfilesCommandInput, ListMissionProfilesCommandOutput } from "../commands/ListMissionProfilesCommand";
import { GroundStationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMissionProfiles(config: GroundStationPaginationConfiguration, input: ListMissionProfilesCommandInput, ...additionalArguments: any): Paginator<ListMissionProfilesCommandOutput>;
