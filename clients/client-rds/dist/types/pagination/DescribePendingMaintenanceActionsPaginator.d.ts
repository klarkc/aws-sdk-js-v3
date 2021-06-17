import { DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput } from "../commands/DescribePendingMaintenanceActionsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribePendingMaintenanceActions(config: RDSPaginationConfiguration, input: DescribePendingMaintenanceActionsCommandInput, ...additionalArguments: any): Paginator<DescribePendingMaintenanceActionsCommandOutput>;
