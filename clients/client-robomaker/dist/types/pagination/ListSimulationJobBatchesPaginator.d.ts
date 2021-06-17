import { ListSimulationJobBatchesCommandInput, ListSimulationJobBatchesCommandOutput } from "../commands/ListSimulationJobBatchesCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSimulationJobBatches(config: RoboMakerPaginationConfiguration, input: ListSimulationJobBatchesCommandInput, ...additionalArguments: any): Paginator<ListSimulationJobBatchesCommandOutput>;
