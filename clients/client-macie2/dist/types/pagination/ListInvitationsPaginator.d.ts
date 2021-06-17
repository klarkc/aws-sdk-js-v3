import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "../commands/ListInvitationsCommand";
import { Macie2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInvitations(config: Macie2PaginationConfiguration, input: ListInvitationsCommandInput, ...additionalArguments: any): Paginator<ListInvitationsCommandOutput>;
