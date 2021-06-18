import { ListSipRulesCommandInput, ListSipRulesCommandOutput } from "../commands/ListSipRulesCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSipRules(
  config: ChimePaginationConfiguration,
  input: ListSipRulesCommandInput,
  ...additionalArguments: any
): Paginator<ListSipRulesCommandOutput>;
