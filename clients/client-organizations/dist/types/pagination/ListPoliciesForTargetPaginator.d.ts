import { ListPoliciesForTargetCommandInput, ListPoliciesForTargetCommandOutput } from "../commands/ListPoliciesForTargetCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPoliciesForTarget(config: OrganizationsPaginationConfiguration, input: ListPoliciesForTargetCommandInput, ...additionalArguments: any): Paginator<ListPoliciesForTargetCommandOutput>;
