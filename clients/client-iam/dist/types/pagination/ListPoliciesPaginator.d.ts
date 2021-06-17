import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "../commands/ListPoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPolicies(config: IAMPaginationConfiguration, input: ListPoliciesCommandInput, ...additionalArguments: any): Paginator<ListPoliciesCommandOutput>;
