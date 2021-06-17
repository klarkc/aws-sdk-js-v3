import { ListContactsCommandInput, ListContactsCommandOutput } from "../commands/ListContactsCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListContacts(config: SESv2PaginationConfiguration, input: ListContactsCommandInput, ...additionalArguments: any): Paginator<ListContactsCommandOutput>;
