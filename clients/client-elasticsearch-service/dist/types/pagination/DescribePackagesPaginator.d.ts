import { DescribePackagesCommandInput, DescribePackagesCommandOutput } from "../commands/DescribePackagesCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribePackages(config: ElasticsearchServicePaginationConfiguration, input: DescribePackagesCommandInput, ...additionalArguments: any): Paginator<DescribePackagesCommandOutput>;
