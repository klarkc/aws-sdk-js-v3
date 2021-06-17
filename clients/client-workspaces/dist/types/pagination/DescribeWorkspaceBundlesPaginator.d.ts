import { DescribeWorkspaceBundlesCommandInput, DescribeWorkspaceBundlesCommandOutput } from "../commands/DescribeWorkspaceBundlesCommand";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeWorkspaceBundles(config: WorkSpacesPaginationConfiguration, input: DescribeWorkspaceBundlesCommandInput, ...additionalArguments: any): Paginator<DescribeWorkspaceBundlesCommandOutput>;
