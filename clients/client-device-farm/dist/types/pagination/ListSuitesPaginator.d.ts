import { ListSuitesCommandInput, ListSuitesCommandOutput } from "../commands/ListSuitesCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSuites(config: DeviceFarmPaginationConfiguration, input: ListSuitesCommandInput, ...additionalArguments: any): Paginator<ListSuitesCommandOutput>;
