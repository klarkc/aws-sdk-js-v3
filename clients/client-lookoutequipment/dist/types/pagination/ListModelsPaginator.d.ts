import { ListModelsCommandInput, ListModelsCommandOutput } from "../commands/ListModelsCommand";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListModels(config: LookoutEquipmentPaginationConfiguration, input: ListModelsCommandInput, ...additionalArguments: any): Paginator<ListModelsCommandOutput>;
