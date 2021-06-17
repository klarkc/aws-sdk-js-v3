import { ListCandidatesForAutoMLJobCommandInput, ListCandidatesForAutoMLJobCommandOutput } from "../commands/ListCandidatesForAutoMLJobCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCandidatesForAutoMLJob(config: SageMakerPaginationConfiguration, input: ListCandidatesForAutoMLJobCommandInput, ...additionalArguments: any): Paginator<ListCandidatesForAutoMLJobCommandOutput>;
