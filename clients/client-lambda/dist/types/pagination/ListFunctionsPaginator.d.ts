import { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "../commands/ListFunctionsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFunctions(config: LambdaPaginationConfiguration, input: ListFunctionsCommandInput, ...additionalArguments: any): Paginator<ListFunctionsCommandOutput>;
