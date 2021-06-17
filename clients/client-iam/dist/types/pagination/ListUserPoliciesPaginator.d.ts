import { ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput } from "../commands/ListUserPoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListUserPolicies(config: IAMPaginationConfiguration, input: ListUserPoliciesCommandInput, ...additionalArguments: any): Paginator<ListUserPoliciesCommandOutput>;
