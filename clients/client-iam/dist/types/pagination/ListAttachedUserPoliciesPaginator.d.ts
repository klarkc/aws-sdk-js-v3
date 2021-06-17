import { ListAttachedUserPoliciesCommandInput, ListAttachedUserPoliciesCommandOutput } from "../commands/ListAttachedUserPoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAttachedUserPolicies(config: IAMPaginationConfiguration, input: ListAttachedUserPoliciesCommandInput, ...additionalArguments: any): Paginator<ListAttachedUserPoliciesCommandOutput>;
