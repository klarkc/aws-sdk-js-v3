import { ListGameServerGroupsCommandInput, ListGameServerGroupsCommandOutput } from "../commands/ListGameServerGroupsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGameServerGroups(config: GameLiftPaginationConfiguration, input: ListGameServerGroupsCommandInput, ...additionalArguments: any): Paginator<ListGameServerGroupsCommandOutput>;
