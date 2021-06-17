import { ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFleets(config: GameLiftPaginationConfiguration, input: ListFleetsCommandInput, ...additionalArguments: any): Paginator<ListFleetsCommandOutput>;
