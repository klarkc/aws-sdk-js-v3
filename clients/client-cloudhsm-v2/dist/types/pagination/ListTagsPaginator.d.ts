import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { CloudHSMV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTags(config: CloudHSMV2PaginationConfiguration, input: ListTagsCommandInput, ...additionalArguments: any): Paginator<ListTagsCommandOutput>;
