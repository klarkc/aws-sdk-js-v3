import { GetIntentVersionsCommandInput, GetIntentVersionsCommandOutput } from "../commands/GetIntentVersionsCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetIntentVersions(config: LexModelBuildingServicePaginationConfiguration, input: GetIntentVersionsCommandInput, ...additionalArguments: any): Paginator<GetIntentVersionsCommandOutput>;
