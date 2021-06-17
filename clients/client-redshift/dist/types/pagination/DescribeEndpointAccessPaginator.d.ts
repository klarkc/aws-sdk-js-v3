import { DescribeEndpointAccessCommandInput, DescribeEndpointAccessCommandOutput } from "../commands/DescribeEndpointAccessCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEndpointAccess(config: RedshiftPaginationConfiguration, input: DescribeEndpointAccessCommandInput, ...additionalArguments: any): Paginator<DescribeEndpointAccessCommandOutput>;
