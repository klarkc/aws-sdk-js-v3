import { ListReportsForReportGroupCommandInput, ListReportsForReportGroupCommandOutput } from "../commands/ListReportsForReportGroupCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListReportsForReportGroup(config: CodeBuildPaginationConfiguration, input: ListReportsForReportGroupCommandInput, ...additionalArguments: any): Paginator<ListReportsForReportGroupCommandOutput>;
