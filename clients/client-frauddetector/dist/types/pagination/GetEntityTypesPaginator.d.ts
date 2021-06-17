import { GetEntityTypesCommandInput, GetEntityTypesCommandOutput } from "../commands/GetEntityTypesCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetEntityTypes(config: FraudDetectorPaginationConfiguration, input: GetEntityTypesCommandInput, ...additionalArguments: any): Paginator<GetEntityTypesCommandOutput>;
