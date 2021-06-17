import { ListWorldGenerationJobsCommandInput, ListWorldGenerationJobsCommandOutput } from "../commands/ListWorldGenerationJobsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWorldGenerationJobs(config: RoboMakerPaginationConfiguration, input: ListWorldGenerationJobsCommandInput, ...additionalArguments: any): Paginator<ListWorldGenerationJobsCommandOutput>;
