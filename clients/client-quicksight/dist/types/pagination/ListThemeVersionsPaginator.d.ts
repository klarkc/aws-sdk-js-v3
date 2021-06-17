import { ListThemeVersionsCommandInput, ListThemeVersionsCommandOutput } from "../commands/ListThemeVersionsCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListThemeVersions(config: QuickSightPaginationConfiguration, input: ListThemeVersionsCommandInput, ...additionalArguments: any): Paginator<ListThemeVersionsCommandOutput>;
