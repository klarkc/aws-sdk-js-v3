import { DescribeReservedElasticsearchInstanceOfferingsCommandInput, DescribeReservedElasticsearchInstanceOfferingsCommandOutput } from "../commands/DescribeReservedElasticsearchInstanceOfferingsCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReservedElasticsearchInstanceOfferings(config: ElasticsearchServicePaginationConfiguration, input: DescribeReservedElasticsearchInstanceOfferingsCommandInput, ...additionalArguments: any): Paginator<DescribeReservedElasticsearchInstanceOfferingsCommandOutput>;
