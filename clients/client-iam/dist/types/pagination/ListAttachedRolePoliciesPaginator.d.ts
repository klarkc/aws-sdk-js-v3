import { ListAttachedRolePoliciesCommandInput, ListAttachedRolePoliciesCommandOutput } from "../commands/ListAttachedRolePoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAttachedRolePolicies(config: IAMPaginationConfiguration, input: ListAttachedRolePoliciesCommandInput, ...additionalArguments: any): Paginator<ListAttachedRolePoliciesCommandOutput>;
