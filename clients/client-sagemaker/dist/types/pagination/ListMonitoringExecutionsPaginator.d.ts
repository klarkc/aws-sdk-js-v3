import { ListMonitoringExecutionsCommandInput, ListMonitoringExecutionsCommandOutput } from "../commands/ListMonitoringExecutionsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMonitoringExecutions(config: SageMakerPaginationConfiguration, input: ListMonitoringExecutionsCommandInput, ...additionalArguments: any): Paginator<ListMonitoringExecutionsCommandOutput>;
