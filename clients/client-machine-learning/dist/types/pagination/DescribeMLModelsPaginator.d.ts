import { DescribeMLModelsCommandInput, DescribeMLModelsCommandOutput } from "../commands/DescribeMLModelsCommand";
import { MachineLearningPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeMLModels(config: MachineLearningPaginationConfiguration, input: DescribeMLModelsCommandInput, ...additionalArguments: any): Paginator<DescribeMLModelsCommandOutput>;
