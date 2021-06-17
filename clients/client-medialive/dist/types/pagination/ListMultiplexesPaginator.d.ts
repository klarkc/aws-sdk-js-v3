import { ListMultiplexesCommandInput, ListMultiplexesCommandOutput } from "../commands/ListMultiplexesCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMultiplexes(config: MediaLivePaginationConfiguration, input: ListMultiplexesCommandInput, ...additionalArguments: any): Paginator<ListMultiplexesCommandOutput>;
