import { GetDevicesCommandInput, GetDevicesCommandOutput } from "../commands/GetDevicesCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetDevices(config: NetworkManagerPaginationConfiguration, input: GetDevicesCommandInput, ...additionalArguments: any): Paginator<GetDevicesCommandOutput>;
