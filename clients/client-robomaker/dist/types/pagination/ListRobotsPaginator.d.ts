import { ListRobotsCommandInput, ListRobotsCommandOutput } from "../commands/ListRobotsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRobots(config: RoboMakerPaginationConfiguration, input: ListRobotsCommandInput, ...additionalArguments: any): Paginator<ListRobotsCommandOutput>;
