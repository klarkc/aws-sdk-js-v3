import { ListLexBotsCommandInput, ListLexBotsCommandOutput } from "../commands/ListLexBotsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListLexBots(config: ConnectPaginationConfiguration, input: ListLexBotsCommandInput, ...additionalArguments: any): Paginator<ListLexBotsCommandOutput>;
