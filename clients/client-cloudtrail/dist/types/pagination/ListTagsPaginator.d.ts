import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTags(config: CloudTrailPaginationConfiguration, input: ListTagsCommandInput, ...additionalArguments: any): Paginator<ListTagsCommandOutput>;
