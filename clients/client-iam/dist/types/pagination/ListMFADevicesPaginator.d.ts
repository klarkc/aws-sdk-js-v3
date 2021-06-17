import { ListMFADevicesCommandInput, ListMFADevicesCommandOutput } from "../commands/ListMFADevicesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMFADevices(config: IAMPaginationConfiguration, input: ListMFADevicesCommandInput, ...additionalArguments: any): Paginator<ListMFADevicesCommandOutput>;
