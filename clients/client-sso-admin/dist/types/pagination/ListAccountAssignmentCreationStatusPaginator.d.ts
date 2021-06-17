import { ListAccountAssignmentCreationStatusCommandInput, ListAccountAssignmentCreationStatusCommandOutput } from "../commands/ListAccountAssignmentCreationStatusCommand";
import { SSOAdminPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccountAssignmentCreationStatus(config: SSOAdminPaginationConfiguration, input: ListAccountAssignmentCreationStatusCommandInput, ...additionalArguments: any): Paginator<ListAccountAssignmentCreationStatusCommandOutput>;
