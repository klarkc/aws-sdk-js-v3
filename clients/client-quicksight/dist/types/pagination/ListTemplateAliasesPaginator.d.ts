import { ListTemplateAliasesCommandInput, ListTemplateAliasesCommandOutput } from "../commands/ListTemplateAliasesCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTemplateAliases(config: QuickSightPaginationConfiguration, input: ListTemplateAliasesCommandInput, ...additionalArguments: any): Paginator<ListTemplateAliasesCommandOutput>;
