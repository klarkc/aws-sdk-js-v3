import { DescribeGlobalNetworksCommandInput, DescribeGlobalNetworksCommandOutput } from "../commands/DescribeGlobalNetworksCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeGlobalNetworks(config: NetworkManagerPaginationConfiguration, input: DescribeGlobalNetworksCommandInput, ...additionalArguments: any): Paginator<DescribeGlobalNetworksCommandOutput>;
