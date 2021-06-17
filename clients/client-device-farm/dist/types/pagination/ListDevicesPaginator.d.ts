import { ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDevices(config: DeviceFarmPaginationConfiguration, input: ListDevicesCommandInput, ...additionalArguments: any): Paginator<ListDevicesCommandOutput>;
