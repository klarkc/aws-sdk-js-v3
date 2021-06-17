import { GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput } from "../commands/GetResourcePoliciesCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetResourcePolicies(config: GluePaginationConfiguration, input: GetResourcePoliciesCommandInput, ...additionalArguments: any): Paginator<GetResourcePoliciesCommandOutput>;
