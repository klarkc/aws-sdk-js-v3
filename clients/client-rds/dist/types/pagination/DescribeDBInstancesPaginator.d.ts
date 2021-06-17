import { DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput } from "../commands/DescribeDBInstancesCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBInstances(config: RDSPaginationConfiguration, input: DescribeDBInstancesCommandInput, ...additionalArguments: any): Paginator<DescribeDBInstancesCommandOutput>;
