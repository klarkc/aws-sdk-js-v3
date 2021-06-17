import { GetConnectionsCommandInput, GetConnectionsCommandOutput } from "../commands/GetConnectionsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetConnections(config: GluePaginationConfiguration, input: GetConnectionsCommandInput, ...additionalArguments: any): Paginator<GetConnectionsCommandOutput>;
