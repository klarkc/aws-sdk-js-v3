import { GetBotsCommandInput, GetBotsCommandOutput } from "../commands/GetBotsCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetBots(config: LexModelBuildingServicePaginationConfiguration, input: GetBotsCommandInput, ...additionalArguments: any): Paginator<GetBotsCommandOutput>;
