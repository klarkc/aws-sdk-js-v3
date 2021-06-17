import { ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFleets(config: RoboMakerPaginationConfiguration, input: ListFleetsCommandInput, ...additionalArguments: any): Paginator<ListFleetsCommandOutput>;
