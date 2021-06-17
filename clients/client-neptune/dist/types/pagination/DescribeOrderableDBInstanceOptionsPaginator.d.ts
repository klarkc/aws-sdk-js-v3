import { DescribeOrderableDBInstanceOptionsCommandInput, DescribeOrderableDBInstanceOptionsCommandOutput } from "../commands/DescribeOrderableDBInstanceOptionsCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeOrderableDBInstanceOptions(config: NeptunePaginationConfiguration, input: DescribeOrderableDBInstanceOptionsCommandInput, ...additionalArguments: any): Paginator<DescribeOrderableDBInstanceOptionsCommandOutput>;
