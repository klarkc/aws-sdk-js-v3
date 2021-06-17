import { DescribeCustomAvailabilityZonesCommandInput, DescribeCustomAvailabilityZonesCommandOutput } from "../commands/DescribeCustomAvailabilityZonesCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCustomAvailabilityZones(config: RDSPaginationConfiguration, input: DescribeCustomAvailabilityZonesCommandInput, ...additionalArguments: any): Paginator<DescribeCustomAvailabilityZonesCommandOutput>;
