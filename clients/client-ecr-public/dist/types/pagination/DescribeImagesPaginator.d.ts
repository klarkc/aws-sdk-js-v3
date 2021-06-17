import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "../commands/DescribeImagesCommand";
import { ECRPUBLICPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeImages(config: ECRPUBLICPaginationConfiguration, input: DescribeImagesCommandInput, ...additionalArguments: any): Paginator<DescribeImagesCommandOutput>;
