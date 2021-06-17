import { ListTunnelsCommandInput, ListTunnelsCommandOutput } from "../commands/ListTunnelsCommand";
import { IoTSecureTunnelingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTunnels(config: IoTSecureTunnelingPaginationConfiguration, input: ListTunnelsCommandInput, ...additionalArguments: any): Paginator<ListTunnelsCommandOutput>;
