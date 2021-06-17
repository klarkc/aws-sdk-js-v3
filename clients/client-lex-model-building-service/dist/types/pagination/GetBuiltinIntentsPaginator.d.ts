import { GetBuiltinIntentsCommandInput, GetBuiltinIntentsCommandOutput } from "../commands/GetBuiltinIntentsCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetBuiltinIntents(config: LexModelBuildingServicePaginationConfiguration, input: GetBuiltinIntentsCommandInput, ...additionalArguments: any): Paginator<GetBuiltinIntentsCommandOutput>;
