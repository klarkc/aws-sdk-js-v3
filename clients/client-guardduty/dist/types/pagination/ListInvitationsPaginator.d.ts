import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "../commands/ListInvitationsCommand";
import { GuardDutyPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInvitations(config: GuardDutyPaginationConfiguration, input: ListInvitationsCommandInput, ...additionalArguments: any): Paginator<ListInvitationsCommandOutput>;
