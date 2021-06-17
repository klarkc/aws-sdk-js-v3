import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { Macie2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMembers(config: Macie2PaginationConfiguration, input: ListMembersCommandInput, ...additionalArguments: any): Paginator<ListMembersCommandOutput>;
