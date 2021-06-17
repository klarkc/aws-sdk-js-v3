import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "../commands/ListTemplatesCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTemplates(config: QuickSightPaginationConfiguration, input: ListTemplatesCommandInput, ...additionalArguments: any): Paginator<ListTemplatesCommandOutput>;
