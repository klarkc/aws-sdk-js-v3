import { DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput } from "../commands/DescribeDBInstancesCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBInstances(config: NeptunePaginationConfiguration, input: DescribeDBInstancesCommandInput, ...additionalArguments: any): Paginator<DescribeDBInstancesCommandOutput>;
