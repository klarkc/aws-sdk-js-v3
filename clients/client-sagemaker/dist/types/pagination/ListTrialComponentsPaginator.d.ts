import { ListTrialComponentsCommandInput, ListTrialComponentsCommandOutput } from "../commands/ListTrialComponentsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTrialComponents(config: SageMakerPaginationConfiguration, input: ListTrialComponentsCommandInput, ...additionalArguments: any): Paginator<ListTrialComponentsCommandOutput>;
