import { ListPublicKeysCommandInput, ListPublicKeysCommandOutput } from "../commands/ListPublicKeysCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPublicKeys(config: CloudTrailPaginationConfiguration, input: ListPublicKeysCommandInput, ...additionalArguments: any): Paginator<ListPublicKeysCommandOutput>;
