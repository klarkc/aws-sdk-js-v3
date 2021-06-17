import { ListItemsCommandInput, ListItemsCommandOutput } from "../commands/ListItemsCommand";
import { MediaStoreDataPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListItems(config: MediaStoreDataPaginationConfiguration, input: ListItemsCommandInput, ...additionalArguments: any): Paginator<ListItemsCommandOutput>;
