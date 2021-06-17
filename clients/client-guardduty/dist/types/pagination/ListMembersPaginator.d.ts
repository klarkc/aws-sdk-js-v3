import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { GuardDutyPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMembers(config: GuardDutyPaginationConfiguration, input: ListMembersCommandInput, ...additionalArguments: any): Paginator<ListMembersCommandOutput>;
