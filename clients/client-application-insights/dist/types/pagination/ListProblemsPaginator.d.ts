import { ListProblemsCommandInput, ListProblemsCommandOutput } from "../commands/ListProblemsCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProblems(
  config: ApplicationInsightsPaginationConfiguration,
  input: ListProblemsCommandInput,
  ...additionalArguments: any
): Paginator<ListProblemsCommandOutput>;
