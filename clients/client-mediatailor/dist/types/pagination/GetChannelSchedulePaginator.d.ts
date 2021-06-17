import { GetChannelScheduleCommandInput, GetChannelScheduleCommandOutput } from "../commands/GetChannelScheduleCommand";
import { MediaTailorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetChannelSchedule(config: MediaTailorPaginationConfiguration, input: GetChannelScheduleCommandInput, ...additionalArguments: any): Paginator<GetChannelScheduleCommandOutput>;
