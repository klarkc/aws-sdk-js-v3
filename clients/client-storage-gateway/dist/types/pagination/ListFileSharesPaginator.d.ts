import { ListFileSharesCommandInput, ListFileSharesCommandOutput } from "../commands/ListFileSharesCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFileShares(config: StorageGatewayPaginationConfiguration, input: ListFileSharesCommandInput, ...additionalArguments: any): Paginator<ListFileSharesCommandOutput>;
