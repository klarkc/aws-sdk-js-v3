import { GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput } from "../commands/GetResourcePoliciesCommand";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetResourcePolicies(config: SSMIncidentsPaginationConfiguration, input: GetResourcePoliciesCommandInput, ...additionalArguments: any): Paginator<GetResourcePoliciesCommandOutput>;
