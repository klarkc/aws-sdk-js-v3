import { DescribeEvaluationsCommandInput, DescribeEvaluationsCommandOutput } from "../commands/DescribeEvaluationsCommand";
import { MachineLearningPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEvaluations(config: MachineLearningPaginationConfiguration, input: DescribeEvaluationsCommandInput, ...additionalArguments: any): Paginator<DescribeEvaluationsCommandOutput>;
