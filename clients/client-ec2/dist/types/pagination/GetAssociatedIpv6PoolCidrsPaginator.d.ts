import { GetAssociatedIpv6PoolCidrsCommandInput, GetAssociatedIpv6PoolCidrsCommandOutput } from "../commands/GetAssociatedIpv6PoolCidrsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetAssociatedIpv6PoolCidrs(config: EC2PaginationConfiguration, input: GetAssociatedIpv6PoolCidrsCommandInput, ...additionalArguments: any): Paginator<GetAssociatedIpv6PoolCidrsCommandOutput>;
