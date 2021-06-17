import { GetVariablesCommandInput, GetVariablesCommandOutput } from "../commands/GetVariablesCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetVariables(config: FraudDetectorPaginationConfiguration, input: GetVariablesCommandInput, ...additionalArguments: any): Paginator<GetVariablesCommandOutput>;
