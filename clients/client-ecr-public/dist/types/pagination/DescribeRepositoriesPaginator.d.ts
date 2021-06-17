import { DescribeRepositoriesCommandInput, DescribeRepositoriesCommandOutput } from "../commands/DescribeRepositoriesCommand";
import { ECRPUBLICPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeRepositories(config: ECRPUBLICPaginationConfiguration, input: DescribeRepositoriesCommandInput, ...additionalArguments: any): Paginator<DescribeRepositoriesCommandOutput>;
