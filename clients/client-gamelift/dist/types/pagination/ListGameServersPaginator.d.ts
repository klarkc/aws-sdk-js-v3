import { ListGameServersCommandInput, ListGameServersCommandOutput } from "../commands/ListGameServersCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGameServers(config: GameLiftPaginationConfiguration, input: ListGameServersCommandInput, ...additionalArguments: any): Paginator<ListGameServersCommandOutput>;
