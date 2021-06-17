import { ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { WorkLinkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDevices(config: WorkLinkPaginationConfiguration, input: ListDevicesCommandInput, ...additionalArguments: any): Paginator<ListDevicesCommandOutput>;
