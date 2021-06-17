import { DescribeHomeRegionControlsCommandInput, DescribeHomeRegionControlsCommandOutput } from "../commands/DescribeHomeRegionControlsCommand";
import { MigrationHubConfigPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeHomeRegionControls(config: MigrationHubConfigPaginationConfiguration, input: DescribeHomeRegionControlsCommandInput, ...additionalArguments: any): Paginator<DescribeHomeRegionControlsCommandOutput>;
