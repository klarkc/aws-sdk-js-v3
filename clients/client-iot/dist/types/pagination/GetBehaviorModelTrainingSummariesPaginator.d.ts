import { GetBehaviorModelTrainingSummariesCommandInput, GetBehaviorModelTrainingSummariesCommandOutput } from "../commands/GetBehaviorModelTrainingSummariesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetBehaviorModelTrainingSummaries(config: IoTPaginationConfiguration, input: GetBehaviorModelTrainingSummariesCommandInput, ...additionalArguments: any): Paginator<GetBehaviorModelTrainingSummariesCommandOutput>;
