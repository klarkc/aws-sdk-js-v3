import { DescribeEngineDefaultParametersCommandInput, DescribeEngineDefaultParametersCommandOutput } from "../commands/DescribeEngineDefaultParametersCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEngineDefaultParameters(config: ElastiCachePaginationConfiguration, input: DescribeEngineDefaultParametersCommandInput, ...additionalArguments: any): Paginator<DescribeEngineDefaultParametersCommandOutput>;
