import { ListDeploymentJobsCommandInput, ListDeploymentJobsCommandOutput } from "../commands/ListDeploymentJobsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDeploymentJobs(config: RoboMakerPaginationConfiguration, input: ListDeploymentJobsCommandInput, ...additionalArguments: any): Paginator<ListDeploymentJobsCommandOutput>;
