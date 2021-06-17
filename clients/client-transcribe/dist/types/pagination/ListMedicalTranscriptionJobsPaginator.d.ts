import { ListMedicalTranscriptionJobsCommandInput, ListMedicalTranscriptionJobsCommandOutput } from "../commands/ListMedicalTranscriptionJobsCommand";
import { TranscribePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMedicalTranscriptionJobs(config: TranscribePaginationConfiguration, input: ListMedicalTranscriptionJobsCommandInput, ...additionalArguments: any): Paginator<ListMedicalTranscriptionJobsCommandOutput>;
