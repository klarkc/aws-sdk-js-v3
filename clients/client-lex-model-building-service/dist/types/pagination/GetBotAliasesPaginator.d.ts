import { GetBotAliasesCommandInput, GetBotAliasesCommandOutput } from "../commands/GetBotAliasesCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetBotAliases(config: LexModelBuildingServicePaginationConfiguration, input: GetBotAliasesCommandInput, ...additionalArguments: any): Paginator<GetBotAliasesCommandOutput>;
