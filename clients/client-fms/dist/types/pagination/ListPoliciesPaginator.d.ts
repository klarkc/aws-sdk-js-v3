import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "../commands/ListPoliciesCommand";
import { FMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPolicies(config: FMSPaginationConfiguration, input: ListPoliciesCommandInput, ...additionalArguments: any): Paginator<ListPoliciesCommandOutput>;
