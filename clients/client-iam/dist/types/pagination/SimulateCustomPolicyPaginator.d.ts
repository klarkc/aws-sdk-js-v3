import { SimulateCustomPolicyCommandInput, SimulateCustomPolicyCommandOutput } from "../commands/SimulateCustomPolicyCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSimulateCustomPolicy(config: IAMPaginationConfiguration, input: SimulateCustomPolicyCommandInput, ...additionalArguments: any): Paginator<SimulateCustomPolicyCommandOutput>;
