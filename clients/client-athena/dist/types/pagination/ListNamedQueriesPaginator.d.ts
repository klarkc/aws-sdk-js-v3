import { ListNamedQueriesCommandInput, ListNamedQueriesCommandOutput } from "../commands/ListNamedQueriesCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListNamedQueries(
  config: AthenaPaginationConfiguration,
  input: ListNamedQueriesCommandInput,
  ...additionalArguments: any
): Paginator<ListNamedQueriesCommandOutput>;
