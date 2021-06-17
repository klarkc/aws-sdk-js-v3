import { DescribeDefaultClusterParametersCommandInput, DescribeDefaultClusterParametersCommandOutput } from "../commands/DescribeDefaultClusterParametersCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDefaultClusterParameters(config: RedshiftPaginationConfiguration, input: DescribeDefaultClusterParametersCommandInput, ...additionalArguments: any): Paginator<DescribeDefaultClusterParametersCommandOutput>;
