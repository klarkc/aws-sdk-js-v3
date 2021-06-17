import { ListAttachedPoliciesCommandInput, ListAttachedPoliciesCommandOutput } from "../commands/ListAttachedPoliciesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAttachedPolicies(config: IoTPaginationConfiguration, input: ListAttachedPoliciesCommandInput, ...additionalArguments: any): Paginator<ListAttachedPoliciesCommandOutput>;
