import { DescribeReservedNodeOfferingsCommandInput, DescribeReservedNodeOfferingsCommandOutput } from "../commands/DescribeReservedNodeOfferingsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReservedNodeOfferings(config: RedshiftPaginationConfiguration, input: DescribeReservedNodeOfferingsCommandInput, ...additionalArguments: any): Paginator<DescribeReservedNodeOfferingsCommandOutput>;
