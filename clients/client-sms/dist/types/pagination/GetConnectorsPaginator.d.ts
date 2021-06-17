import { GetConnectorsCommandInput, GetConnectorsCommandOutput } from "../commands/GetConnectorsCommand";
import { SMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetConnectors(config: SMSPaginationConfiguration, input: GetConnectorsCommandInput, ...additionalArguments: any): Paginator<GetConnectorsCommandOutput>;
