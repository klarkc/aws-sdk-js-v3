import { ListModelsCommandInput, ListModelsCommandOutput } from "../commands/ListModelsCommand";
import { LookoutVisionPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListModels(config: LookoutVisionPaginationConfiguration, input: ListModelsCommandInput, ...additionalArguments: any): Paginator<ListModelsCommandOutput>;
