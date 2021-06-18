import { ListDataCatalogsCommandInput, ListDataCatalogsCommandOutput } from "../commands/ListDataCatalogsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDataCatalogs(
  config: AthenaPaginationConfiguration,
  input: ListDataCatalogsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataCatalogsCommandOutput>;
