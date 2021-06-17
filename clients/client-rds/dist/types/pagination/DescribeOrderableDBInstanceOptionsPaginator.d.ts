import { DescribeOrderableDBInstanceOptionsCommandInput, DescribeOrderableDBInstanceOptionsCommandOutput } from "../commands/DescribeOrderableDBInstanceOptionsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeOrderableDBInstanceOptions(config: RDSPaginationConfiguration, input: DescribeOrderableDBInstanceOptionsCommandInput, ...additionalArguments: any): Paginator<DescribeOrderableDBInstanceOptionsCommandOutput>;
