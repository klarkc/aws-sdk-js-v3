import { DescribeObjectsCommandInput, DescribeObjectsCommandOutput } from "../commands/DescribeObjectsCommand";
import { DataPipelinePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeObjects(config: DataPipelinePaginationConfiguration, input: DescribeObjectsCommandInput, ...additionalArguments: any): Paginator<DescribeObjectsCommandOutput>;
