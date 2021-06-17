import { GetMLTransformsCommandInput, GetMLTransformsCommandOutput } from "../commands/GetMLTransformsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetMLTransforms(config: GluePaginationConfiguration, input: GetMLTransformsCommandInput, ...additionalArguments: any): Paginator<GetMLTransformsCommandOutput>;
