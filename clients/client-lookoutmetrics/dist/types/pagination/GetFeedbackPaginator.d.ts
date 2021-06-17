import { GetFeedbackCommandInput, GetFeedbackCommandOutput } from "../commands/GetFeedbackCommand";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetFeedback(config: LookoutMetricsPaginationConfiguration, input: GetFeedbackCommandInput, ...additionalArguments: any): Paginator<GetFeedbackCommandOutput>;
