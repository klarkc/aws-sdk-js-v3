import { ListAttachedGroupPoliciesCommandInput, ListAttachedGroupPoliciesCommandOutput } from "../commands/ListAttachedGroupPoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAttachedGroupPolicies(config: IAMPaginationConfiguration, input: ListAttachedGroupPoliciesCommandInput, ...additionalArguments: any): Paginator<ListAttachedGroupPoliciesCommandOutput>;
