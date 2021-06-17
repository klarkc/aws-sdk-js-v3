import { ListAccessKeysCommandInput, ListAccessKeysCommandOutput } from "../commands/ListAccessKeysCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccessKeys(config: IAMPaginationConfiguration, input: ListAccessKeysCommandInput, ...additionalArguments: any): Paginator<ListAccessKeysCommandOutput>;
