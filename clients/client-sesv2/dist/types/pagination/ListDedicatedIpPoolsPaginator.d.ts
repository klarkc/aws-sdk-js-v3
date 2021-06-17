import { ListDedicatedIpPoolsCommandInput, ListDedicatedIpPoolsCommandOutput } from "../commands/ListDedicatedIpPoolsCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDedicatedIpPools(config: SESv2PaginationConfiguration, input: ListDedicatedIpPoolsCommandInput, ...additionalArguments: any): Paginator<ListDedicatedIpPoolsCommandOutput>;
