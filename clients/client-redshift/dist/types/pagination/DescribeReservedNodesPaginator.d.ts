import { DescribeReservedNodesCommandInput, DescribeReservedNodesCommandOutput } from "../commands/DescribeReservedNodesCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReservedNodes(config: RedshiftPaginationConfiguration, input: DescribeReservedNodesCommandInput, ...additionalArguments: any): Paginator<DescribeReservedNodesCommandOutput>;
