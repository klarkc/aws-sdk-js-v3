import { SearchDashboardsCommandInput, SearchDashboardsCommandOutput } from "../commands/SearchDashboardsCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchDashboards(config: QuickSightPaginationConfiguration, input: SearchDashboardsCommandInput, ...additionalArguments: any): Paginator<SearchDashboardsCommandOutput>;
