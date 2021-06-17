import { DescribeComplianceByResourceCommandInput, DescribeComplianceByResourceCommandOutput } from "../commands/DescribeComplianceByResourceCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeComplianceByResource(config: ConfigServicePaginationConfiguration, input: DescribeComplianceByResourceCommandInput, ...additionalArguments: any): Paginator<DescribeComplianceByResourceCommandOutput>;
