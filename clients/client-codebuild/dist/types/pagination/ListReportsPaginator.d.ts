import { ListReportsCommandInput, ListReportsCommandOutput } from "../commands/ListReportsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListReports(config: CodeBuildPaginationConfiguration, input: ListReportsCommandInput, ...additionalArguments: any): Paginator<ListReportsCommandOutput>;
