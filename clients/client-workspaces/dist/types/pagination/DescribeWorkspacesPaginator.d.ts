import { DescribeWorkspacesCommandInput, DescribeWorkspacesCommandOutput } from "../commands/DescribeWorkspacesCommand";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeWorkspaces(config: WorkSpacesPaginationConfiguration, input: DescribeWorkspacesCommandInput, ...additionalArguments: any): Paginator<DescribeWorkspacesCommandOutput>;
