import { ListPrincipalPoliciesCommandInput, ListPrincipalPoliciesCommandOutput } from "../commands/ListPrincipalPoliciesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPrincipalPolicies(config: IoTPaginationConfiguration, input: ListPrincipalPoliciesCommandInput, ...additionalArguments: any): Paginator<ListPrincipalPoliciesCommandOutput>;
