import { ListHyperParameterTuningJobsCommandInput, ListHyperParameterTuningJobsCommandOutput } from "../commands/ListHyperParameterTuningJobsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListHyperParameterTuningJobs(config: SageMakerPaginationConfiguration, input: ListHyperParameterTuningJobsCommandInput, ...additionalArguments: any): Paginator<ListHyperParameterTuningJobsCommandOutput>;
