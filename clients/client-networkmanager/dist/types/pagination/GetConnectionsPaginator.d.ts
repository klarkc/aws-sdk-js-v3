import { GetConnectionsCommandInput, GetConnectionsCommandOutput } from "../commands/GetConnectionsCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetConnections(config: NetworkManagerPaginationConfiguration, input: GetConnectionsCommandInput, ...additionalArguments: any): Paginator<GetConnectionsCommandOutput>;
