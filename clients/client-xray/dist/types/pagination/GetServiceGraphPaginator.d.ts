import { GetServiceGraphCommandInput, GetServiceGraphCommandOutput } from "../commands/GetServiceGraphCommand";
import { XRayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetServiceGraph(config: XRayPaginationConfiguration, input: GetServiceGraphCommandInput, ...additionalArguments: any): Paginator<GetServiceGraphCommandOutput>;
