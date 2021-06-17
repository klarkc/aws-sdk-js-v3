import { ListDeviceFleetsCommandInput, ListDeviceFleetsCommandOutput } from "../commands/ListDeviceFleetsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDeviceFleets(config: SageMakerPaginationConfiguration, input: ListDeviceFleetsCommandInput, ...additionalArguments: any): Paginator<ListDeviceFleetsCommandOutput>;
