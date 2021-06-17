import { ListFileSystemAssociationsCommandInput, ListFileSystemAssociationsCommandOutput } from "../commands/ListFileSystemAssociationsCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFileSystemAssociations(config: StorageGatewayPaginationConfiguration, input: ListFileSystemAssociationsCommandInput, ...additionalArguments: any): Paginator<ListFileSystemAssociationsCommandOutput>;
