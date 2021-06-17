import { ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { WorkMailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAliases(config: WorkMailPaginationConfiguration, input: ListAliasesCommandInput, ...additionalArguments: any): Paginator<ListAliasesCommandOutput>;
