import { DescribeDBLogFilesCommandInput, DescribeDBLogFilesCommandOutput } from "../commands/DescribeDBLogFilesCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBLogFiles(config: RDSPaginationConfiguration, input: DescribeDBLogFilesCommandInput, ...additionalArguments: any): Paginator<DescribeDBLogFilesCommandOutput>;
