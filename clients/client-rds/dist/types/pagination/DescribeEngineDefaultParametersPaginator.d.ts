import { DescribeEngineDefaultParametersCommandInput, DescribeEngineDefaultParametersCommandOutput } from "../commands/DescribeEngineDefaultParametersCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEngineDefaultParameters(config: RDSPaginationConfiguration, input: DescribeEngineDefaultParametersCommandInput, ...additionalArguments: any): Paginator<DescribeEngineDefaultParametersCommandOutput>;
