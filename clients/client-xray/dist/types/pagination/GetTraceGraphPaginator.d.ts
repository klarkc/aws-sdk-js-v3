import { GetTraceGraphCommandInput, GetTraceGraphCommandOutput } from "../commands/GetTraceGraphCommand";
import { XRayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetTraceGraph(config: XRayPaginationConfiguration, input: GetTraceGraphCommandInput, ...additionalArguments: any): Paginator<GetTraceGraphCommandOutput>;
