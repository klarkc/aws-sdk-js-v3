import { DescribeFileSystemsCommandInput, DescribeFileSystemsCommandOutput } from "../commands/DescribeFileSystemsCommand";
import { FSxPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeFileSystems(config: FSxPaginationConfiguration, input: DescribeFileSystemsCommandInput, ...additionalArguments: any): Paginator<DescribeFileSystemsCommandOutput>;
