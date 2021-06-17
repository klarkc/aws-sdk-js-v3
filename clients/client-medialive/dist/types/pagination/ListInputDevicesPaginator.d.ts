import { ListInputDevicesCommandInput, ListInputDevicesCommandOutput } from "../commands/ListInputDevicesCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInputDevices(config: MediaLivePaginationConfiguration, input: ListInputDevicesCommandInput, ...additionalArguments: any): Paginator<ListInputDevicesCommandOutput>;
