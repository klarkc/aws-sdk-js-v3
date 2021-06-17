import { ListQueryLoggingConfigsCommandInput, ListQueryLoggingConfigsCommandOutput } from "../commands/ListQueryLoggingConfigsCommand";
import { Route53PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListQueryLoggingConfigs(config: Route53PaginationConfiguration, input: ListQueryLoggingConfigsCommandInput, ...additionalArguments: any): Paginator<ListQueryLoggingConfigsCommandOutput>;
