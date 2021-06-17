import { DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput } from "../commands/DescribePendingMaintenanceActionsCommand";
import { DocDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribePendingMaintenanceActions(config: DocDBPaginationConfiguration, input: DescribePendingMaintenanceActionsCommandInput, ...additionalArguments: any): Paginator<DescribePendingMaintenanceActionsCommandOutput>;
