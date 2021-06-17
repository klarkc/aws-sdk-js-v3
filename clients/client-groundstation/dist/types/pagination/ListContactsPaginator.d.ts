import { ListContactsCommandInput, ListContactsCommandOutput } from "../commands/ListContactsCommand";
import { GroundStationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListContacts(config: GroundStationPaginationConfiguration, input: ListContactsCommandInput, ...additionalArguments: any): Paginator<ListContactsCommandOutput>;
