import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDatasets(config: PersonalizePaginationConfiguration, input: ListDatasetsCommandInput, ...additionalArguments: any): Paginator<ListDatasetsCommandOutput>;
