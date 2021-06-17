import { GetCanaryRunsCommandInput, GetCanaryRunsCommandOutput } from "../commands/GetCanaryRunsCommand";
import { SyntheticsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetCanaryRuns(config: SyntheticsPaginationConfiguration, input: GetCanaryRunsCommandInput, ...additionalArguments: any): Paginator<GetCanaryRunsCommandOutput>;
