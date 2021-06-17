import { ListScriptsCommandInput, ListScriptsCommandOutput } from "../commands/ListScriptsCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListScripts(config: GameLiftPaginationConfiguration, input: ListScriptsCommandInput, ...additionalArguments: any): Paginator<ListScriptsCommandOutput>;
