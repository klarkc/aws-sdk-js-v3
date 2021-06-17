import { DescribeRuntimeVersionsCommandInput, DescribeRuntimeVersionsCommandOutput } from "../commands/DescribeRuntimeVersionsCommand";
import { SyntheticsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeRuntimeVersions(config: SyntheticsPaginationConfiguration, input: DescribeRuntimeVersionsCommandInput, ...additionalArguments: any): Paginator<DescribeRuntimeVersionsCommandOutput>;
