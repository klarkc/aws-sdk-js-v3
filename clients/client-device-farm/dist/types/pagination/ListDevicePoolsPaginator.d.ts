import { ListDevicePoolsCommandInput, ListDevicePoolsCommandOutput } from "../commands/ListDevicePoolsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDevicePools(config: DeviceFarmPaginationConfiguration, input: ListDevicePoolsCommandInput, ...additionalArguments: any): Paginator<ListDevicePoolsCommandOutput>;
