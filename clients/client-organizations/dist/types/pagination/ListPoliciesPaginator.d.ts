import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "../commands/ListPoliciesCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPolicies(config: OrganizationsPaginationConfiguration, input: ListPoliciesCommandInput, ...additionalArguments: any): Paginator<ListPoliciesCommandOutput>;
