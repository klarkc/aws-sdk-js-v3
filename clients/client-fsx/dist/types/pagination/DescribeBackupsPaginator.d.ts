import { DescribeBackupsCommandInput, DescribeBackupsCommandOutput } from "../commands/DescribeBackupsCommand";
import { FSxPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeBackups(config: FSxPaginationConfiguration, input: DescribeBackupsCommandInput, ...additionalArguments: any): Paginator<DescribeBackupsCommandOutput>;
