import { DescribeFileSystemsCommandInput, DescribeFileSystemsCommandOutput } from "../commands/DescribeFileSystemsCommand";
import { EFSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeFileSystems(config: EFSPaginationConfiguration, input: DescribeFileSystemsCommandInput, ...additionalArguments: any): Paginator<DescribeFileSystemsCommandOutput>;
