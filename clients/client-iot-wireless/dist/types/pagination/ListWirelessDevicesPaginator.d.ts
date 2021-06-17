import { ListWirelessDevicesCommandInput, ListWirelessDevicesCommandOutput } from "../commands/ListWirelessDevicesCommand";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWirelessDevices(config: IoTWirelessPaginationConfiguration, input: ListWirelessDevicesCommandInput, ...additionalArguments: any): Paginator<ListWirelessDevicesCommandOutput>;
