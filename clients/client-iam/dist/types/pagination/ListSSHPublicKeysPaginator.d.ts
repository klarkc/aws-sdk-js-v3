import { ListSSHPublicKeysCommandInput, ListSSHPublicKeysCommandOutput } from "../commands/ListSSHPublicKeysCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSSHPublicKeys(config: IAMPaginationConfiguration, input: ListSSHPublicKeysCommandInput, ...additionalArguments: any): Paginator<ListSSHPublicKeysCommandOutput>;
