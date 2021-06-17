import { DescribeOrderableDBInstanceOptionsCommandInput, DescribeOrderableDBInstanceOptionsCommandOutput } from "../commands/DescribeOrderableDBInstanceOptionsCommand";
import { DocDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeOrderableDBInstanceOptions(config: DocDBPaginationConfiguration, input: DescribeOrderableDBInstanceOptionsCommandInput, ...additionalArguments: any): Paginator<DescribeOrderableDBInstanceOptionsCommandOutput>;
