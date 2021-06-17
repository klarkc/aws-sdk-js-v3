import { GetExternalModelsCommandInput, GetExternalModelsCommandOutput } from "../commands/GetExternalModelsCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetExternalModels(config: FraudDetectorPaginationConfiguration, input: GetExternalModelsCommandInput, ...additionalArguments: any): Paginator<GetExternalModelsCommandOutput>;
