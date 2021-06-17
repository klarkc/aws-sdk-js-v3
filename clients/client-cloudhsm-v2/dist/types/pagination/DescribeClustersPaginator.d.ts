import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "../commands/DescribeClustersCommand";
import { CloudHSMV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeClusters(config: CloudHSMV2PaginationConfiguration, input: DescribeClustersCommandInput, ...additionalArguments: any): Paginator<DescribeClustersCommandOutput>;
