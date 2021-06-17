import { GetSavingsPlansUtilizationDetailsCommandInput, GetSavingsPlansUtilizationDetailsCommandOutput } from "../commands/GetSavingsPlansUtilizationDetailsCommand";
import { CostExplorerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetSavingsPlansUtilizationDetails(config: CostExplorerPaginationConfiguration, input: GetSavingsPlansUtilizationDetailsCommandInput, ...additionalArguments: any): Paginator<GetSavingsPlansUtilizationDetailsCommandOutput>;
