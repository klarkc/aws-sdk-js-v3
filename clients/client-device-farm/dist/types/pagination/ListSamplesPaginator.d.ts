import { ListSamplesCommandInput, ListSamplesCommandOutput } from "../commands/ListSamplesCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSamples(config: DeviceFarmPaginationConfiguration, input: ListSamplesCommandInput, ...additionalArguments: any): Paginator<ListSamplesCommandOutput>;
