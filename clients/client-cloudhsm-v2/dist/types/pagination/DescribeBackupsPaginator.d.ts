import { DescribeBackupsCommandInput, DescribeBackupsCommandOutput } from "../commands/DescribeBackupsCommand";
import { CloudHSMV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeBackups(config: CloudHSMV2PaginationConfiguration, input: DescribeBackupsCommandInput, ...additionalArguments: any): Paginator<DescribeBackupsCommandOutput>;
