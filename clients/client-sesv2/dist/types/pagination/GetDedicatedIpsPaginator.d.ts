import { GetDedicatedIpsCommandInput, GetDedicatedIpsCommandOutput } from "../commands/GetDedicatedIpsCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetDedicatedIps(config: SESv2PaginationConfiguration, input: GetDedicatedIpsCommandInput, ...additionalArguments: any): Paginator<GetDedicatedIpsCommandOutput>;
