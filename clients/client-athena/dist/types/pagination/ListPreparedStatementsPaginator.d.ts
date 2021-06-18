import {
  ListPreparedStatementsCommandInput,
  ListPreparedStatementsCommandOutput,
} from "../commands/ListPreparedStatementsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPreparedStatements(
  config: AthenaPaginationConfiguration,
  input: ListPreparedStatementsCommandInput,
  ...additionalArguments: any
): Paginator<ListPreparedStatementsCommandOutput>;
