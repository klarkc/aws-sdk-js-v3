import { ListFunctionsByCodeSigningConfigCommandInput, ListFunctionsByCodeSigningConfigCommandOutput } from "../commands/ListFunctionsByCodeSigningConfigCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFunctionsByCodeSigningConfig(config: LambdaPaginationConfiguration, input: ListFunctionsByCodeSigningConfigCommandInput, ...additionalArguments: any): Paginator<ListFunctionsByCodeSigningConfigCommandOutput>;
