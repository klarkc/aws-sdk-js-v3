import { ListCoreDevicesCommandInput, ListCoreDevicesCommandOutput } from "../commands/ListCoreDevicesCommand";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCoreDevices(config: GreengrassV2PaginationConfiguration, input: ListCoreDevicesCommandInput, ...additionalArguments: any): Paginator<ListCoreDevicesCommandOutput>;
