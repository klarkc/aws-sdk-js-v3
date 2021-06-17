import { ListLabelingJobsForWorkteamCommandInput, ListLabelingJobsForWorkteamCommandOutput } from "../commands/ListLabelingJobsForWorkteamCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListLabelingJobsForWorkteam(config: SageMakerPaginationConfiguration, input: ListLabelingJobsForWorkteamCommandInput, ...additionalArguments: any): Paginator<ListLabelingJobsForWorkteamCommandOutput>;
