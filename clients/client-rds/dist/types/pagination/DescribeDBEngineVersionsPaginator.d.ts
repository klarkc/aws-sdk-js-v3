import { DescribeDBEngineVersionsCommandInput, DescribeDBEngineVersionsCommandOutput } from "../commands/DescribeDBEngineVersionsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBEngineVersions(config: RDSPaginationConfiguration, input: DescribeDBEngineVersionsCommandInput, ...additionalArguments: any): Paginator<DescribeDBEngineVersionsCommandOutput>;
