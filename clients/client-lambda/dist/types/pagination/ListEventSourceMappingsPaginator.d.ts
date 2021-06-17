import { ListEventSourceMappingsCommandInput, ListEventSourceMappingsCommandOutput } from "../commands/ListEventSourceMappingsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEventSourceMappings(config: LambdaPaginationConfiguration, input: ListEventSourceMappingsCommandInput, ...additionalArguments: any): Paginator<ListEventSourceMappingsCommandOutput>;
