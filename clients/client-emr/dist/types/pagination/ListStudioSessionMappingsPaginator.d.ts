import { ListStudioSessionMappingsCommandInput, ListStudioSessionMappingsCommandOutput } from "../commands/ListStudioSessionMappingsCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListStudioSessionMappings(config: EMRPaginationConfiguration, input: ListStudioSessionMappingsCommandInput, ...additionalArguments: any): Paginator<ListStudioSessionMappingsCommandOutput>;
