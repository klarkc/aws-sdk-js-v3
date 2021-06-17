import { ListDashboardVersionsCommandInput, ListDashboardVersionsCommandOutput } from "../commands/ListDashboardVersionsCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDashboardVersions(config: QuickSightPaginationConfiguration, input: ListDashboardVersionsCommandInput, ...additionalArguments: any): Paginator<ListDashboardVersionsCommandOutput>;
