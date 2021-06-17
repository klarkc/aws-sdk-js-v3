import { ListExperimentsCommandInput, ListExperimentsCommandOutput } from "../commands/ListExperimentsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListExperiments(config: SageMakerPaginationConfiguration, input: ListExperimentsCommandInput, ...additionalArguments: any): Paginator<ListExperimentsCommandOutput>;
