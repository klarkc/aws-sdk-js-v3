import { DescribeDBEngineVersionsCommandInput, DescribeDBEngineVersionsCommandOutput } from "../commands/DescribeDBEngineVersionsCommand";
import { DocDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBEngineVersions(config: DocDBPaginationConfiguration, input: DescribeDBEngineVersionsCommandInput, ...additionalArguments: any): Paginator<DescribeDBEngineVersionsCommandOutput>;
