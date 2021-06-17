import { ListVolumesCommandInput, ListVolumesCommandOutput } from "../commands/ListVolumesCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListVolumes(config: StorageGatewayPaginationConfiguration, input: ListVolumesCommandInput, ...additionalArguments: any): Paginator<ListVolumesCommandOutput>;
