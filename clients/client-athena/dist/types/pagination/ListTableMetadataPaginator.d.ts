import { ListTableMetadataCommandInput, ListTableMetadataCommandOutput } from "../commands/ListTableMetadataCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTableMetadata(
  config: AthenaPaginationConfiguration,
  input: ListTableMetadataCommandInput,
  ...additionalArguments: any
): Paginator<ListTableMetadataCommandOutput>;
