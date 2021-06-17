import { ListWorldsCommandInput, ListWorldsCommandOutput } from "../commands/ListWorldsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWorlds(config: RoboMakerPaginationConfiguration, input: ListWorldsCommandInput, ...additionalArguments: any): Paginator<ListWorldsCommandOutput>;
