import { ListSecurityPoliciesCommandInput, ListSecurityPoliciesCommandOutput } from "../commands/ListSecurityPoliciesCommand";
import { TransferPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSecurityPolicies(config: TransferPaginationConfiguration, input: ListSecurityPoliciesCommandInput, ...additionalArguments: any): Paginator<ListSecurityPoliciesCommandOutput>;
