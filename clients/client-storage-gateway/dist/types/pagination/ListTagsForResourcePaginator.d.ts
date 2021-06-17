import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTagsForResource(config: StorageGatewayPaginationConfiguration, input: ListTagsForResourceCommandInput, ...additionalArguments: any): Paginator<ListTagsForResourceCommandOutput>;
