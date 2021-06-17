import { ListIndicesCommandInput, ListIndicesCommandOutput } from "../commands/ListIndicesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListIndices(config: IoTPaginationConfiguration, input: ListIndicesCommandInput, ...additionalArguments: any): Paginator<ListIndicesCommandOutput>;
