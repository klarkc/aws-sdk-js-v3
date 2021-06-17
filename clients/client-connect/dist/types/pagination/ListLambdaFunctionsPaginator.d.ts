import { ListLambdaFunctionsCommandInput, ListLambdaFunctionsCommandOutput } from "../commands/ListLambdaFunctionsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListLambdaFunctions(config: ConnectPaginationConfiguration, input: ListLambdaFunctionsCommandInput, ...additionalArguments: any): Paginator<ListLambdaFunctionsCommandOutput>;
