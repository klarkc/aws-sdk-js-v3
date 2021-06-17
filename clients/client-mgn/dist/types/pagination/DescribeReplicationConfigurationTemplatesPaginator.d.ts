import { DescribeReplicationConfigurationTemplatesCommandInput, DescribeReplicationConfigurationTemplatesCommandOutput } from "../commands/DescribeReplicationConfigurationTemplatesCommand";
import { MgnPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReplicationConfigurationTemplates(config: MgnPaginationConfiguration, input: DescribeReplicationConfigurationTemplatesCommandInput, ...additionalArguments: any): Paginator<DescribeReplicationConfigurationTemplatesCommandOutput>;
