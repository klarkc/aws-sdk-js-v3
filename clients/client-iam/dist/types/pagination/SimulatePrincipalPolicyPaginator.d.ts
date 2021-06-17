import { SimulatePrincipalPolicyCommandInput, SimulatePrincipalPolicyCommandOutput } from "../commands/SimulatePrincipalPolicyCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSimulatePrincipalPolicy(config: IAMPaginationConfiguration, input: SimulatePrincipalPolicyCommandInput, ...additionalArguments: any): Paginator<SimulatePrincipalPolicyCommandOutput>;
