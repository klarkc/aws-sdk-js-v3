import { ListAlertsCommandInput, ListAlertsCommandOutput } from "../commands/ListAlertsCommand";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAlerts(config: LookoutMetricsPaginationConfiguration, input: ListAlertsCommandInput, ...additionalArguments: any): Paginator<ListAlertsCommandOutput>;
