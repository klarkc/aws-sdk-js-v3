import { ListRoutingProfilesCommandInput, ListRoutingProfilesCommandOutput } from "../commands/ListRoutingProfilesCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRoutingProfiles(config: ConnectPaginationConfiguration, input: ListRoutingProfilesCommandInput, ...additionalArguments: any): Paginator<ListRoutingProfilesCommandOutput>;
