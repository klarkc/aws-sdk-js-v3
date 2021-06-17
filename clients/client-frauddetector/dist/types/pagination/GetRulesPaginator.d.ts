import { GetRulesCommandInput, GetRulesCommandOutput } from "../commands/GetRulesCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetRules(config: FraudDetectorPaginationConfiguration, input: GetRulesCommandInput, ...additionalArguments: any): Paginator<GetRulesCommandOutput>;
