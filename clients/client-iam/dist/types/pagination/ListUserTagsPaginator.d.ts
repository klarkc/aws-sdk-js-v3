import { ListUserTagsCommandInput, ListUserTagsCommandOutput } from "../commands/ListUserTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListUserTags(config: IAMPaginationConfiguration, input: ListUserTagsCommandInput, ...additionalArguments: any): Paginator<ListUserTagsCommandOutput>;
