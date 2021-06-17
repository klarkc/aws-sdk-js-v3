import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDatasets(config: LookoutEquipmentPaginationConfiguration, input: ListDatasetsCommandInput, ...additionalArguments: any): Paginator<ListDatasetsCommandOutput>;
