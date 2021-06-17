import { DescribeAcceleratorsCommandInput, DescribeAcceleratorsCommandOutput } from "../commands/DescribeAcceleratorsCommand";
import { ElasticInferencePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAccelerators(config: ElasticInferencePaginationConfiguration, input: DescribeAcceleratorsCommandInput, ...additionalArguments: any): Paginator<DescribeAcceleratorsCommandOutput>;
