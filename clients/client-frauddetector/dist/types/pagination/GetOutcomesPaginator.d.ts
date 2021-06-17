import { GetOutcomesCommandInput, GetOutcomesCommandOutput } from "../commands/GetOutcomesCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetOutcomes(config: FraudDetectorPaginationConfiguration, input: GetOutcomesCommandInput, ...additionalArguments: any): Paginator<GetOutcomesCommandOutput>;
