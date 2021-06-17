import { ListSimulationApplicationsCommandInput, ListSimulationApplicationsCommandOutput } from "../commands/ListSimulationApplicationsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSimulationApplications(config: RoboMakerPaginationConfiguration, input: ListSimulationApplicationsCommandInput, ...additionalArguments: any): Paginator<ListSimulationApplicationsCommandOutput>;
