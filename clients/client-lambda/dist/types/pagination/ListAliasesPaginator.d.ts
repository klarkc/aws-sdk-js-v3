import { ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAliases(config: LambdaPaginationConfiguration, input: ListAliasesCommandInput, ...additionalArguments: any): Paginator<ListAliasesCommandOutput>;
