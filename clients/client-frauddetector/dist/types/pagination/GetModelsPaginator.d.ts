import { GetModelsCommandInput, GetModelsCommandOutput } from "../commands/GetModelsCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetModels(config: FraudDetectorPaginationConfiguration, input: GetModelsCommandInput, ...additionalArguments: any): Paginator<GetModelsCommandOutput>;
