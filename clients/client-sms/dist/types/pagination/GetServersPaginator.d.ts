import { GetServersCommandInput, GetServersCommandOutput } from "../commands/GetServersCommand";
import { SMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetServers(config: SMSPaginationConfiguration, input: GetServersCommandInput, ...additionalArguments: any): Paginator<GetServersCommandOutput>;
