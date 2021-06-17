import { ListGroupMembersCommandInput, ListGroupMembersCommandOutput } from "../commands/ListGroupMembersCommand";
import { WorkMailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGroupMembers(config: WorkMailPaginationConfiguration, input: ListGroupMembersCommandInput, ...additionalArguments: any): Paginator<ListGroupMembersCommandOutput>;
