import { GetBotChannelAssociationsCommandInput, GetBotChannelAssociationsCommandOutput } from "../commands/GetBotChannelAssociationsCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetBotChannelAssociations(config: LexModelBuildingServicePaginationConfiguration, input: GetBotChannelAssociationsCommandInput, ...additionalArguments: any): Paginator<GetBotChannelAssociationsCommandOutput>;
