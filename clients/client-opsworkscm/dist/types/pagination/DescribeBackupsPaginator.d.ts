import { DescribeBackupsCommandInput, DescribeBackupsCommandOutput } from "../commands/DescribeBackupsCommand";
import { OpsWorksCMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeBackups(config: OpsWorksCMPaginationConfiguration, input: DescribeBackupsCommandInput, ...additionalArguments: any): Paginator<DescribeBackupsCommandOutput>;
