import { ListAccountAssignmentDeletionStatusCommandInput, ListAccountAssignmentDeletionStatusCommandOutput } from "../commands/ListAccountAssignmentDeletionStatusCommand";
import { SSOAdminPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccountAssignmentDeletionStatus(config: SSOAdminPaginationConfiguration, input: ListAccountAssignmentDeletionStatusCommandInput, ...additionalArguments: any): Paginator<ListAccountAssignmentDeletionStatusCommandOutput>;
