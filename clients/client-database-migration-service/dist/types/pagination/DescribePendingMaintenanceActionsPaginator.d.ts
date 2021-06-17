import { DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput } from "../commands/DescribePendingMaintenanceActionsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribePendingMaintenanceActions(config: DatabaseMigrationServicePaginationConfiguration, input: DescribePendingMaintenanceActionsCommandInput, ...additionalArguments: any): Paginator<DescribePendingMaintenanceActionsCommandOutput>;
