import { ListSecurityKeysCommandInput, ListSecurityKeysCommandOutput } from "../commands/ListSecurityKeysCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSecurityKeys(config: ConnectPaginationConfiguration, input: ListSecurityKeysCommandInput, ...additionalArguments: any): Paginator<ListSecurityKeysCommandOutput>;
