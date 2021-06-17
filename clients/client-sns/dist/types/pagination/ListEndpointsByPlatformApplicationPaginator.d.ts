import { ListEndpointsByPlatformApplicationCommandInput, ListEndpointsByPlatformApplicationCommandOutput } from "../commands/ListEndpointsByPlatformApplicationCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEndpointsByPlatformApplication(config: SNSPaginationConfiguration, input: ListEndpointsByPlatformApplicationCommandInput, ...additionalArguments: any): Paginator<ListEndpointsByPlatformApplicationCommandOutput>;
