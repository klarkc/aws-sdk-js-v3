import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "../commands/DescribeClustersCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeClusters(config: RedshiftPaginationConfiguration, input: DescribeClustersCommandInput, ...additionalArguments: any): Paginator<DescribeClustersCommandOutput>;
