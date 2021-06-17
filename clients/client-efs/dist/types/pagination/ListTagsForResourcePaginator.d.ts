import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { EFSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTagsForResource(config: EFSPaginationConfiguration, input: ListTagsForResourceCommandInput, ...additionalArguments: any): Paginator<ListTagsForResourceCommandOutput>;
