import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMembers(config: SecurityHubPaginationConfiguration, input: ListMembersCommandInput, ...additionalArguments: any): Paginator<ListMembersCommandOutput>;
