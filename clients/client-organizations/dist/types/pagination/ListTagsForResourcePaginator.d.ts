import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTagsForResource(config: OrganizationsPaginationConfiguration, input: ListTagsForResourceCommandInput, ...additionalArguments: any): Paginator<ListTagsForResourceCommandOutput>;
