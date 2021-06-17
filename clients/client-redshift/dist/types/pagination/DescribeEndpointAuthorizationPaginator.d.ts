import { DescribeEndpointAuthorizationCommandInput, DescribeEndpointAuthorizationCommandOutput } from "../commands/DescribeEndpointAuthorizationCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEndpointAuthorization(config: RedshiftPaginationConfiguration, input: DescribeEndpointAuthorizationCommandInput, ...additionalArguments: any): Paginator<DescribeEndpointAuthorizationCommandOutput>;
