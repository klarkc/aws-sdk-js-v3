import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "../commands/ListInvitationsCommand";
import { DetectivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInvitations(config: DetectivePaginationConfiguration, input: ListInvitationsCommandInput, ...additionalArguments: any): Paginator<ListInvitationsCommandOutput>;
