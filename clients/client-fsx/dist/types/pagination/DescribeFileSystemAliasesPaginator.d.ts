import { DescribeFileSystemAliasesCommandInput, DescribeFileSystemAliasesCommandOutput } from "../commands/DescribeFileSystemAliasesCommand";
import { FSxPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeFileSystemAliases(config: FSxPaginationConfiguration, input: DescribeFileSystemAliasesCommandInput, ...additionalArguments: any): Paginator<DescribeFileSystemAliasesCommandOutput>;
