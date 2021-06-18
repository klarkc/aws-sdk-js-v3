import { ListArchiveRulesCommandInput, ListArchiveRulesCommandOutput } from "../commands/ListArchiveRulesCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListArchiveRules(
  config: AccessAnalyzerPaginationConfiguration,
  input: ListArchiveRulesCommandInput,
  ...additionalArguments: any
): Paginator<ListArchiveRulesCommandOutput>;
