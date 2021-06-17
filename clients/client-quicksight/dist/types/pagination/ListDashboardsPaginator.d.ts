import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "../commands/ListDashboardsCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDashboards(config: QuickSightPaginationConfiguration, input: ListDashboardsCommandInput, ...additionalArguments: any): Paginator<ListDashboardsCommandOutput>;
