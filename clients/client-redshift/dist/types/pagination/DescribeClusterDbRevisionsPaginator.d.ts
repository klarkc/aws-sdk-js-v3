import { DescribeClusterDbRevisionsCommandInput, DescribeClusterDbRevisionsCommandOutput } from "../commands/DescribeClusterDbRevisionsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeClusterDbRevisions(config: RedshiftPaginationConfiguration, input: DescribeClusterDbRevisionsCommandInput, ...additionalArguments: any): Paginator<DescribeClusterDbRevisionsCommandOutput>;
