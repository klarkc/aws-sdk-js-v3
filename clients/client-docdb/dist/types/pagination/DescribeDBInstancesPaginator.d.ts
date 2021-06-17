import { DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput } from "../commands/DescribeDBInstancesCommand";
import { DocDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBInstances(config: DocDBPaginationConfiguration, input: DescribeDBInstancesCommandInput, ...additionalArguments: any): Paginator<DescribeDBInstancesCommandOutput>;
