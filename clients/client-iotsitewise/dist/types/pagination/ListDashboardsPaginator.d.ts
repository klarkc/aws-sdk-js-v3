import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "../commands/ListDashboardsCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDashboards(config: IoTSiteWisePaginationConfiguration, input: ListDashboardsCommandInput, ...additionalArguments: any): Paginator<ListDashboardsCommandOutput>;
