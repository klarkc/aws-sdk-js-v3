import { ListDeviceProfilesCommandInput, ListDeviceProfilesCommandOutput } from "../commands/ListDeviceProfilesCommand";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDeviceProfiles(config: IoTWirelessPaginationConfiguration, input: ListDeviceProfilesCommandInput, ...additionalArguments: any): Paginator<ListDeviceProfilesCommandOutput>;
