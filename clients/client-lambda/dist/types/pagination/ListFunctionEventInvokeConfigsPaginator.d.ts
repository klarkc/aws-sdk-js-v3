import { ListFunctionEventInvokeConfigsCommandInput, ListFunctionEventInvokeConfigsCommandOutput } from "../commands/ListFunctionEventInvokeConfigsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFunctionEventInvokeConfigs(config: LambdaPaginationConfiguration, input: ListFunctionEventInvokeConfigsCommandInput, ...additionalArguments: any): Paginator<ListFunctionEventInvokeConfigsCommandOutput>;
