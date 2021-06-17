import { ListMultiplexProgramsCommandInput, ListMultiplexProgramsCommandOutput } from "../commands/ListMultiplexProgramsCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMultiplexPrograms(config: MediaLivePaginationConfiguration, input: ListMultiplexProgramsCommandInput, ...additionalArguments: any): Paginator<ListMultiplexProgramsCommandOutput>;
