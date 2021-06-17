import { ListTranscriptionJobsCommandInput, ListTranscriptionJobsCommandOutput } from "../commands/ListTranscriptionJobsCommand";
import { TranscribePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTranscriptionJobs(config: TranscribePaginationConfiguration, input: ListTranscriptionJobsCommandInput, ...additionalArguments: any): Paginator<ListTranscriptionJobsCommandOutput>;
