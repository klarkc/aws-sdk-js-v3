import { ListContactListsCommandInput, ListContactListsCommandOutput } from "../commands/ListContactListsCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListContactLists(config: SESv2PaginationConfiguration, input: ListContactListsCommandInput, ...additionalArguments: any): Paginator<ListContactListsCommandOutput>;
