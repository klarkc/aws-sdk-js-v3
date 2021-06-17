import { SearchGameSessionsCommandInput, SearchGameSessionsCommandOutput } from "../commands/SearchGameSessionsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchGameSessions(config: GameLiftPaginationConfiguration, input: SearchGameSessionsCommandInput, ...additionalArguments: any): Paginator<SearchGameSessionsCommandOutput>;
