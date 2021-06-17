import { DescribeWorkspaceDirectoriesCommandInput, DescribeWorkspaceDirectoriesCommandOutput } from "../commands/DescribeWorkspaceDirectoriesCommand";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeWorkspaceDirectories(config: WorkSpacesPaginationConfiguration, input: DescribeWorkspaceDirectoriesCommandInput, ...additionalArguments: any): Paginator<DescribeWorkspaceDirectoriesCommandOutput>;
