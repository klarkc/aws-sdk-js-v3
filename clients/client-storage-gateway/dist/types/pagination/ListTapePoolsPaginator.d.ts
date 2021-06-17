import { ListTapePoolsCommandInput, ListTapePoolsCommandOutput } from "../commands/ListTapePoolsCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTapePools(config: StorageGatewayPaginationConfiguration, input: ListTapePoolsCommandInput, ...additionalArguments: any): Paginator<ListTapePoolsCommandOutput>;
