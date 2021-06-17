import { GetBotVersionsCommandInput, GetBotVersionsCommandOutput } from "../commands/GetBotVersionsCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetBotVersions(config: LexModelBuildingServicePaginationConfiguration, input: GetBotVersionsCommandInput, ...additionalArguments: any): Paginator<GetBotVersionsCommandOutput>;
