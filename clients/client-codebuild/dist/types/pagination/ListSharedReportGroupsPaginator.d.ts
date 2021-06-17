import { ListSharedReportGroupsCommandInput, ListSharedReportGroupsCommandOutput } from "../commands/ListSharedReportGroupsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSharedReportGroups(config: CodeBuildPaginationConfiguration, input: ListSharedReportGroupsCommandInput, ...additionalArguments: any): Paginator<ListSharedReportGroupsCommandOutput>;
