import { GetCostEstimationCommandInput, GetCostEstimationCommandOutput } from "../commands/GetCostEstimationCommand";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetCostEstimation(config: DevOpsGuruPaginationConfiguration, input: GetCostEstimationCommandInput, ...additionalArguments: any): Paginator<GetCostEstimationCommandOutput>;
