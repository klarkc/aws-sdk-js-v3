import { GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput } from "../commands/GetResourcePoliciesCommand";
import { RAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetResourcePolicies(config: RAMPaginationConfiguration, input: GetResourcePoliciesCommandInput, ...additionalArguments: any): Paginator<GetResourcePoliciesCommandOutput>;
