import { ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { GameLiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAliases(config: GameLiftPaginationConfiguration, input: ListAliasesCommandInput, ...additionalArguments: any): Paginator<ListAliasesCommandOutput>;
