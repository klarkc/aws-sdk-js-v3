import { GetOfferingStatusCommandInput, GetOfferingStatusCommandOutput } from "../commands/GetOfferingStatusCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetOfferingStatus(config: DeviceFarmPaginationConfiguration, input: GetOfferingStatusCommandInput, ...additionalArguments: any): Paginator<GetOfferingStatusCommandOutput>;
