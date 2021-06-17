import { ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDevices(config: SageMakerPaginationConfiguration, input: ListDevicesCommandInput, ...additionalArguments: any): Paginator<ListDevicesCommandOutput>;
