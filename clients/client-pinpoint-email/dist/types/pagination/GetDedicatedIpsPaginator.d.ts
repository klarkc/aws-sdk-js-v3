import { GetDedicatedIpsCommandInput, GetDedicatedIpsCommandOutput } from "../commands/GetDedicatedIpsCommand";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetDedicatedIps(config: PinpointEmailPaginationConfiguration, input: GetDedicatedIpsCommandInput, ...additionalArguments: any): Paginator<GetDedicatedIpsCommandOutput>;
