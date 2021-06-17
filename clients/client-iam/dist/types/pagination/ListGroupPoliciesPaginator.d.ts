import { ListGroupPoliciesCommandInput, ListGroupPoliciesCommandOutput } from "../commands/ListGroupPoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGroupPolicies(config: IAMPaginationConfiguration, input: ListGroupPoliciesCommandInput, ...additionalArguments: any): Paginator<ListGroupPoliciesCommandOutput>;
