import { ListContactsCommandInput, ListContactsCommandOutput } from "../commands/ListContactsCommand";
import { SSMContactsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListContacts(config: SSMContactsPaginationConfiguration, input: ListContactsCommandInput, ...additionalArguments: any): Paginator<ListContactsCommandOutput>;
