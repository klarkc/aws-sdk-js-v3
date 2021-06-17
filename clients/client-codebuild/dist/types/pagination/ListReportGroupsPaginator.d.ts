import { ListReportGroupsCommandInput, ListReportGroupsCommandOutput } from "../commands/ListReportGroupsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListReportGroups(config: CodeBuildPaginationConfiguration, input: ListReportGroupsCommandInput, ...additionalArguments: any): Paginator<ListReportGroupsCommandOutput>;
