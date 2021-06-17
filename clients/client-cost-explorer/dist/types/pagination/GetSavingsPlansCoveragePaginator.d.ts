import { GetSavingsPlansCoverageCommandInput, GetSavingsPlansCoverageCommandOutput } from "../commands/GetSavingsPlansCoverageCommand";
import { CostExplorerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetSavingsPlansCoverage(config: CostExplorerPaginationConfiguration, input: GetSavingsPlansCoverageCommandInput, ...additionalArguments: any): Paginator<GetSavingsPlansCoverageCommandOutput>;
