import { ListInputDeviceTransfersCommandInput, ListInputDeviceTransfersCommandOutput } from "../commands/ListInputDeviceTransfersCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInputDeviceTransfers(config: MediaLivePaginationConfiguration, input: ListInputDeviceTransfersCommandInput, ...additionalArguments: any): Paginator<ListInputDeviceTransfersCommandOutput>;
