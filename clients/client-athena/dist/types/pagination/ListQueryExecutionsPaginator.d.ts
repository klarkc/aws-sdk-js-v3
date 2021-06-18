import {
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput,
} from "../commands/ListQueryExecutionsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListQueryExecutions(
  config: AthenaPaginationConfiguration,
  input: ListQueryExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListQueryExecutionsCommandOutput>;
