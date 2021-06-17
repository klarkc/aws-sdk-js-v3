import { ListVirtualMFADevicesCommandInput, ListVirtualMFADevicesCommandOutput } from "../commands/ListVirtualMFADevicesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListVirtualMFADevices(config: IAMPaginationConfiguration, input: ListVirtualMFADevicesCommandInput, ...additionalArguments: any): Paginator<ListVirtualMFADevicesCommandOutput>;
