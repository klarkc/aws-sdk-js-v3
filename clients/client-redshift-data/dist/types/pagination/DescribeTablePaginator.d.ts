import { DescribeTableCommandInput, DescribeTableCommandOutput } from "../commands/DescribeTableCommand";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeTable(config: RedshiftDataPaginationConfiguration, input: DescribeTableCommandInput, ...additionalArguments: any): Paginator<DescribeTableCommandOutput>;
