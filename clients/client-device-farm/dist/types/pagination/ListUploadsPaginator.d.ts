import { ListUploadsCommandInput, ListUploadsCommandOutput } from "../commands/ListUploadsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListUploads(config: DeviceFarmPaginationConfiguration, input: ListUploadsCommandInput, ...additionalArguments: any): Paginator<ListUploadsCommandOutput>;
