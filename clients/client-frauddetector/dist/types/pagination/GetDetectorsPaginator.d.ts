import { GetDetectorsCommandInput, GetDetectorsCommandOutput } from "../commands/GetDetectorsCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetDetectors(config: FraudDetectorPaginationConfiguration, input: GetDetectorsCommandInput, ...additionalArguments: any): Paginator<GetDetectorsCommandOutput>;
