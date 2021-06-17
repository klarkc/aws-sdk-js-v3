import { DescribeDBEngineVersionsCommandInput, DescribeDBEngineVersionsCommandOutput } from "../commands/DescribeDBEngineVersionsCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBEngineVersions(config: NeptunePaginationConfiguration, input: DescribeDBEngineVersionsCommandInput, ...additionalArguments: any): Paginator<DescribeDBEngineVersionsCommandOutput>;
