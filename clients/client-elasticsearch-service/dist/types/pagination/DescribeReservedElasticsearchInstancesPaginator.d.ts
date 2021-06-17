import { DescribeReservedElasticsearchInstancesCommandInput, DescribeReservedElasticsearchInstancesCommandOutput } from "../commands/DescribeReservedElasticsearchInstancesCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReservedElasticsearchInstances(config: ElasticsearchServicePaginationConfiguration, input: DescribeReservedElasticsearchInstancesCommandInput, ...additionalArguments: any): Paginator<DescribeReservedElasticsearchInstancesCommandOutput>;
