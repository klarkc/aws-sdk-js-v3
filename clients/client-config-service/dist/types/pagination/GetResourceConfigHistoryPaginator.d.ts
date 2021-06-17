import { GetResourceConfigHistoryCommandInput, GetResourceConfigHistoryCommandOutput } from "../commands/GetResourceConfigHistoryCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetResourceConfigHistory(config: ConfigServicePaginationConfiguration, input: GetResourceConfigHistoryCommandInput, ...additionalArguments: any): Paginator<GetResourceConfigHistoryCommandOutput>;
