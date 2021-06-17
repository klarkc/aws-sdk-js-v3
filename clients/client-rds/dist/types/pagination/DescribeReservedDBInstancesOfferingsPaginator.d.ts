import { DescribeReservedDBInstancesOfferingsCommandInput, DescribeReservedDBInstancesOfferingsCommandOutput } from "../commands/DescribeReservedDBInstancesOfferingsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReservedDBInstancesOfferings(config: RDSPaginationConfiguration, input: DescribeReservedDBInstancesOfferingsCommandInput, ...additionalArguments: any): Paginator<DescribeReservedDBInstancesOfferingsCommandOutput>;
