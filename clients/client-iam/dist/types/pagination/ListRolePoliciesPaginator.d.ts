import { ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput } from "../commands/ListRolePoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRolePolicies(config: IAMPaginationConfiguration, input: ListRolePoliciesCommandInput, ...additionalArguments: any): Paginator<ListRolePoliciesCommandOutput>;
