import { ListSimulationJobsCommandInput, ListSimulationJobsCommandOutput } from "../commands/ListSimulationJobsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSimulationJobs(config: RoboMakerPaginationConfiguration, input: ListSimulationJobsCommandInput, ...additionalArguments: any): Paginator<ListSimulationJobsCommandOutput>;
