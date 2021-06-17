import { ListAccountAssignmentsCommandInput, ListAccountAssignmentsCommandOutput } from "../commands/ListAccountAssignmentsCommand";
import { SSOAdminPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccountAssignments(config: SSOAdminPaginationConfiguration, input: ListAccountAssignmentsCommandInput, ...additionalArguments: any): Paginator<ListAccountAssignmentsCommandOutput>;
