import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { ACMPCAPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTags(
  config: ACMPCAPaginationConfiguration,
  input: ListTagsCommandInput,
  ...additionalArguments: any
): Paginator<ListTagsCommandOutput>;
