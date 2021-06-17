import { GetFindingsReportAccountSummaryCommandInput, GetFindingsReportAccountSummaryCommandOutput } from "../commands/GetFindingsReportAccountSummaryCommand";
import { CodeGuruProfilerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetFindingsReportAccountSummary(config: CodeGuruProfilerPaginationConfiguration, input: GetFindingsReportAccountSummaryCommandInput, ...additionalArguments: any): Paginator<GetFindingsReportAccountSummaryCommandOutput>;
