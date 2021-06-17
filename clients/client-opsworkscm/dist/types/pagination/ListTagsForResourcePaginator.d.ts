import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { OpsWorksCMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTagsForResource(config: OpsWorksCMPaginationConfiguration, input: ListTagsForResourceCommandInput, ...additionalArguments: any): Paginator<ListTagsForResourceCommandOutput>;
