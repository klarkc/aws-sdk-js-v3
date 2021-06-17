import { DescribeHsmConfigurationsCommandInput, DescribeHsmConfigurationsCommandOutput } from "../commands/DescribeHsmConfigurationsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeHsmConfigurations(config: RedshiftPaginationConfiguration, input: DescribeHsmConfigurationsCommandInput, ...additionalArguments: any): Paginator<DescribeHsmConfigurationsCommandOutput>;
