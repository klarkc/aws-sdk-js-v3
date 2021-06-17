import { ListBuildsCommandInput, ListBuildsCommandOutput } from "../commands/ListBuildsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBuilds(config: GameLiftPaginationConfiguration, input: ListBuildsCommandInput, ...additionalArguments: any): Paginator<ListBuildsCommandOutput>;
