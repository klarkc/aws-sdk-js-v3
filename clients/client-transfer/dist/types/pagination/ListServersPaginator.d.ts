import { ListServersCommandInput, ListServersCommandOutput } from "../commands/ListServersCommand";
import { TransferPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListServers(config: TransferPaginationConfiguration, input: ListServersCommandInput, ...additionalArguments: any): Paginator<ListServersCommandOutput>;
