import { ListMonitoringSchedulesCommandInput, ListMonitoringSchedulesCommandOutput } from "../commands/ListMonitoringSchedulesCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMonitoringSchedules(config: SageMakerPaginationConfiguration, input: ListMonitoringSchedulesCommandInput, ...additionalArguments: any): Paginator<ListMonitoringSchedulesCommandOutput>;
