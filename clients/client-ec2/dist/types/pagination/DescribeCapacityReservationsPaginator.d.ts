import { DescribeCapacityReservationsCommandInput, DescribeCapacityReservationsCommandOutput } from "../commands/DescribeCapacityReservationsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCapacityReservations(config: EC2PaginationConfiguration, input: DescribeCapacityReservationsCommandInput, ...additionalArguments: any): Paginator<DescribeCapacityReservationsCommandOutput>;
