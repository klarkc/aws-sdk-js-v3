import { DescribeConnectorsCommandInput, DescribeConnectorsCommandOutput } from "../commands/DescribeConnectorsCommand";
import { AppflowPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeConnectors(
  config: AppflowPaginationConfiguration,
  input: DescribeConnectorsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeConnectorsCommandOutput>;
