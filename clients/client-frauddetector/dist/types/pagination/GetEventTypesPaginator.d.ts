import { GetEventTypesCommandInput, GetEventTypesCommandOutput } from "../commands/GetEventTypesCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetEventTypes(config: FraudDetectorPaginationConfiguration, input: GetEventTypesCommandInput, ...additionalArguments: any): Paginator<GetEventTypesCommandOutput>;
