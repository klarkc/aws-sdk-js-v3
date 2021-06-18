import { ValidatePolicyCommandInput, ValidatePolicyCommandOutput } from "../commands/ValidatePolicyCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateValidatePolicy(
  config: AccessAnalyzerPaginationConfiguration,
  input: ValidatePolicyCommandInput,
  ...additionalArguments: any
): Paginator<ValidatePolicyCommandOutput>;
