import { ListTrialsCommandInput, ListTrialsCommandOutput } from "../commands/ListTrialsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTrials(config: SageMakerPaginationConfiguration, input: ListTrialsCommandInput, ...additionalArguments: any): Paginator<ListTrialsCommandOutput>;
