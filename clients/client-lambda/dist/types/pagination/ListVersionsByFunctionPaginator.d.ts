import { ListVersionsByFunctionCommandInput, ListVersionsByFunctionCommandOutput } from "../commands/ListVersionsByFunctionCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListVersionsByFunction(config: LambdaPaginationConfiguration, input: ListVersionsByFunctionCommandInput, ...additionalArguments: any): Paginator<ListVersionsByFunctionCommandOutput>;
