import { ListInstanceStorageConfigsCommandInput, ListInstanceStorageConfigsCommandOutput } from "../commands/ListInstanceStorageConfigsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInstanceStorageConfigs(config: ConnectPaginationConfiguration, input: ListInstanceStorageConfigsCommandInput, ...additionalArguments: any): Paginator<ListInstanceStorageConfigsCommandOutput>;
