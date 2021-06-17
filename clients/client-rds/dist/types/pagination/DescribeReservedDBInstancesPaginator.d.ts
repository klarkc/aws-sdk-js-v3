import { DescribeReservedDBInstancesCommandInput, DescribeReservedDBInstancesCommandOutput } from "../commands/DescribeReservedDBInstancesCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReservedDBInstances(config: RDSPaginationConfiguration, input: DescribeReservedDBInstancesCommandInput, ...additionalArguments: any): Paginator<DescribeReservedDBInstancesCommandOutput>;
