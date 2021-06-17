import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "../commands/ListPoliciesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPolicies(config: IoTPaginationConfiguration, input: ListPoliciesCommandInput, ...additionalArguments: any): Paginator<ListPoliciesCommandOutput>;
