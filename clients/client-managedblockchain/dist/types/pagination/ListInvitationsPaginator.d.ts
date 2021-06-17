import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "../commands/ListInvitationsCommand";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInvitations(config: ManagedBlockchainPaginationConfiguration, input: ListInvitationsCommandInput, ...additionalArguments: any): Paginator<ListInvitationsCommandOutput>;
