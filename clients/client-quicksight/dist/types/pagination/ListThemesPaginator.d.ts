import { ListThemesCommandInput, ListThemesCommandOutput } from "../commands/ListThemesCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListThemes(config: QuickSightPaginationConfiguration, input: ListThemesCommandInput, ...additionalArguments: any): Paginator<ListThemesCommandOutput>;
