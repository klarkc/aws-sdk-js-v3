import { ListTypeVersionsCommandInput, ListTypeVersionsCommandOutput } from "../commands/ListTypeVersionsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTypeVersions(
  config: CloudFormationPaginationConfiguration,
  input: ListTypeVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListTypeVersionsCommandOutput>;
