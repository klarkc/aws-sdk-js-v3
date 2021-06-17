import { ListRelatedItemsCommandInput, ListRelatedItemsCommandOutput } from "../commands/ListRelatedItemsCommand";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRelatedItems(config: SSMIncidentsPaginationConfiguration, input: ListRelatedItemsCommandInput, ...additionalArguments: any): Paginator<ListRelatedItemsCommandOutput>;
