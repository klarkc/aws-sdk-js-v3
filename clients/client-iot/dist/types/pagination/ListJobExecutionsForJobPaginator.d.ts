import { ListJobExecutionsForJobCommandInput, ListJobExecutionsForJobCommandOutput } from "../commands/ListJobExecutionsForJobCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListJobExecutionsForJob(config: IoTPaginationConfiguration, input: ListJobExecutionsForJobCommandInput, ...additionalArguments: any): Paginator<ListJobExecutionsForJobCommandOutput>;
