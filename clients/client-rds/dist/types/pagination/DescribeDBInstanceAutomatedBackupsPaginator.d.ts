import { DescribeDBInstanceAutomatedBackupsCommandInput, DescribeDBInstanceAutomatedBackupsCommandOutput } from "../commands/DescribeDBInstanceAutomatedBackupsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBInstanceAutomatedBackups(config: RDSPaginationConfiguration, input: DescribeDBInstanceAutomatedBackupsCommandInput, ...additionalArguments: any): Paginator<DescribeDBInstanceAutomatedBackupsCommandOutput>;
