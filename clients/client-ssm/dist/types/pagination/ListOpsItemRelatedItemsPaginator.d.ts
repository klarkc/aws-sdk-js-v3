import { ListOpsItemRelatedItemsCommandInput, ListOpsItemRelatedItemsCommandOutput } from "../commands/ListOpsItemRelatedItemsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOpsItemRelatedItems(config: SSMPaginationConfiguration, input: ListOpsItemRelatedItemsCommandInput, ...additionalArguments: any): Paginator<ListOpsItemRelatedItemsCommandOutput>;
