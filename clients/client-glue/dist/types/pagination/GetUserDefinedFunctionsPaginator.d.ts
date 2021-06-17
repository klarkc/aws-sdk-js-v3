import { GetUserDefinedFunctionsCommandInput, GetUserDefinedFunctionsCommandOutput } from "../commands/GetUserDefinedFunctionsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetUserDefinedFunctions(config: GluePaginationConfiguration, input: GetUserDefinedFunctionsCommandInput, ...additionalArguments: any): Paginator<GetUserDefinedFunctionsCommandOutput>;
