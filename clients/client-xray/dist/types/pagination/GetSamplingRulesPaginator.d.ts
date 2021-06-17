import { GetSamplingRulesCommandInput, GetSamplingRulesCommandOutput } from "../commands/GetSamplingRulesCommand";
import { XRayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetSamplingRules(config: XRayPaginationConfiguration, input: GetSamplingRulesCommandInput, ...additionalArguments: any): Paginator<GetSamplingRulesCommandOutput>;
