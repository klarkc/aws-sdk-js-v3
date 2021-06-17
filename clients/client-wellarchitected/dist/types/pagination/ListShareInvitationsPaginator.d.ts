import { ListShareInvitationsCommandInput, ListShareInvitationsCommandOutput } from "../commands/ListShareInvitationsCommand";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListShareInvitations(config: WellArchitectedPaginationConfiguration, input: ListShareInvitationsCommandInput, ...additionalArguments: any): Paginator<ListShareInvitationsCommandOutput>;
