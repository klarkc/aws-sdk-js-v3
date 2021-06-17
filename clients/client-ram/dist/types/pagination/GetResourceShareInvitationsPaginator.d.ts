import { GetResourceShareInvitationsCommandInput, GetResourceShareInvitationsCommandOutput } from "../commands/GetResourceShareInvitationsCommand";
import { RAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetResourceShareInvitations(config: RAMPaginationConfiguration, input: GetResourceShareInvitationsCommandInput, ...additionalArguments: any): Paginator<GetResourceShareInvitationsCommandOutput>;
