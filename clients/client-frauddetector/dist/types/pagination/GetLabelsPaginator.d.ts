import { GetLabelsCommandInput, GetLabelsCommandOutput } from "../commands/GetLabelsCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetLabels(config: FraudDetectorPaginationConfiguration, input: GetLabelsCommandInput, ...additionalArguments: any): Paginator<GetLabelsCommandOutput>;
