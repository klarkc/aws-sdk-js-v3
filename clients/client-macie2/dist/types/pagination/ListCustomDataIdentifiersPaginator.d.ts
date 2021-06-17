import { ListCustomDataIdentifiersCommandInput, ListCustomDataIdentifiersCommandOutput } from "../commands/ListCustomDataIdentifiersCommand";
import { Macie2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCustomDataIdentifiers(config: Macie2PaginationConfiguration, input: ListCustomDataIdentifiersCommandInput, ...additionalArguments: any): Paginator<ListCustomDataIdentifiersCommandOutput>;
