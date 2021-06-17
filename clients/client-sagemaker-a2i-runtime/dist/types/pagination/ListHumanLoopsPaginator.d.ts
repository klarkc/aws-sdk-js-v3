import { ListHumanLoopsCommandInput, ListHumanLoopsCommandOutput } from "../commands/ListHumanLoopsCommand";
import { SageMakerA2IRuntimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListHumanLoops(config: SageMakerA2IRuntimePaginationConfiguration, input: ListHumanLoopsCommandInput, ...additionalArguments: any): Paginator<ListHumanLoopsCommandOutput>;
