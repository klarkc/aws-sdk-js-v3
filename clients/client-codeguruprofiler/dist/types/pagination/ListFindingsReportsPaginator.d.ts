import { ListFindingsReportsCommandInput, ListFindingsReportsCommandOutput } from "../commands/ListFindingsReportsCommand";
import { CodeGuruProfilerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFindingsReports(config: CodeGuruProfilerPaginationConfiguration, input: ListFindingsReportsCommandInput, ...additionalArguments: any): Paginator<ListFindingsReportsCommandOutput>;
