import { DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput } from "../commands/DescribePendingMaintenanceActionsCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribePendingMaintenanceActions(config: NeptunePaginationConfiguration, input: DescribePendingMaintenanceActionsCommandInput, ...additionalArguments: any): Paginator<DescribePendingMaintenanceActionsCommandOutput>;
