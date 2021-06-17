import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "../commands/ListInvitationsCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInvitations(config: SecurityHubPaginationConfiguration, input: ListInvitationsCommandInput, ...additionalArguments: any): Paginator<ListInvitationsCommandOutput>;
