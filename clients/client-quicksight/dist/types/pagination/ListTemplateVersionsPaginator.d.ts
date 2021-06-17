import { ListTemplateVersionsCommandInput, ListTemplateVersionsCommandOutput } from "../commands/ListTemplateVersionsCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTemplateVersions(config: QuickSightPaginationConfiguration, input: ListTemplateVersionsCommandInput, ...additionalArguments: any): Paginator<ListTemplateVersionsCommandOutput>;
