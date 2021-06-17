import { DescribeOptionGroupOptionsCommandInput, DescribeOptionGroupOptionsCommandOutput } from "../commands/DescribeOptionGroupOptionsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeOptionGroupOptions(config: RDSPaginationConfiguration, input: DescribeOptionGroupOptionsCommandInput, ...additionalArguments: any): Paginator<DescribeOptionGroupOptionsCommandOutput>;
