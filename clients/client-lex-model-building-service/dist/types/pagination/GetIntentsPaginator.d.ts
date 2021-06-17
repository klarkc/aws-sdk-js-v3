import { GetIntentsCommandInput, GetIntentsCommandOutput } from "../commands/GetIntentsCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetIntents(config: LexModelBuildingServicePaginationConfiguration, input: GetIntentsCommandInput, ...additionalArguments: any): Paginator<GetIntentsCommandOutput>;
