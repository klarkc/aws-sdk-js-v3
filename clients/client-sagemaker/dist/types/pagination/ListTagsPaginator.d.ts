import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTags(config: SageMakerPaginationConfiguration, input: ListTagsCommandInput, ...additionalArguments: any): Paginator<ListTagsCommandOutput>;
