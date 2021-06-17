import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import { IoTAnalyticsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDatasets(config: IoTAnalyticsPaginationConfiguration, input: ListDatasetsCommandInput, ...additionalArguments: any): Paginator<ListDatasetsCommandOutput>;
