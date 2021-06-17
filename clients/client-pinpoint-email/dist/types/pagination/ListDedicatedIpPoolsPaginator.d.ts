import { ListDedicatedIpPoolsCommandInput, ListDedicatedIpPoolsCommandOutput } from "../commands/ListDedicatedIpPoolsCommand";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDedicatedIpPools(config: PinpointEmailPaginationConfiguration, input: ListDedicatedIpPoolsCommandInput, ...additionalArguments: any): Paginator<ListDedicatedIpPoolsCommandOutput>;
