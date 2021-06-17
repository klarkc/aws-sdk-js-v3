import { ListExperimentsCommandInput, ListExperimentsCommandOutput } from "../commands/ListExperimentsCommand";
import { FisPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListExperiments(config: FisPaginationConfiguration, input: ListExperimentsCommandInput, ...additionalArguments: any): Paginator<ListExperimentsCommandOutput>;
