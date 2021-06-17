import { DescribeEngineDefaultParametersCommandInput, DescribeEngineDefaultParametersCommandOutput } from "../commands/DescribeEngineDefaultParametersCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEngineDefaultParameters(config: NeptunePaginationConfiguration, input: DescribeEngineDefaultParametersCommandInput, ...additionalArguments: any): Paginator<DescribeEngineDefaultParametersCommandOutput>;
