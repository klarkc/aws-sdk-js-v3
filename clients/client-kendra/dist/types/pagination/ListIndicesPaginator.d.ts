import { ListIndicesCommandInput, ListIndicesCommandOutput } from "../commands/ListIndicesCommand";
import { KendraPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListIndices(config: KendraPaginationConfiguration, input: ListIndicesCommandInput, ...additionalArguments: any): Paginator<ListIndicesCommandOutput>;
