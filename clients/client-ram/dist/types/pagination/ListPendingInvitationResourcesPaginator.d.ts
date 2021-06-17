import { ListPendingInvitationResourcesCommandInput, ListPendingInvitationResourcesCommandOutput } from "../commands/ListPendingInvitationResourcesCommand";
import { RAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPendingInvitationResources(config: RAMPaginationConfiguration, input: ListPendingInvitationResourcesCommandInput, ...additionalArguments: any): Paginator<ListPendingInvitationResourcesCommandOutput>;
