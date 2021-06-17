import { ListServiceProfilesCommandInput, ListServiceProfilesCommandOutput } from "../commands/ListServiceProfilesCommand";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListServiceProfiles(config: IoTWirelessPaginationConfiguration, input: ListServiceProfilesCommandInput, ...additionalArguments: any): Paginator<ListServiceProfilesCommandOutput>;
