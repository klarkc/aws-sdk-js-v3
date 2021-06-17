import { BatchGetTracesCommandInput, BatchGetTracesCommandOutput } from "../commands/BatchGetTracesCommand";
import { XRayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateBatchGetTraces(config: XRayPaginationConfiguration, input: BatchGetTracesCommandInput, ...additionalArguments: any): Paginator<BatchGetTracesCommandOutput>;
