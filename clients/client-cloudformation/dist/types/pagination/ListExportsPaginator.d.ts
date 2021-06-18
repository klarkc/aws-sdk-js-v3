import { ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListExports(
  config: CloudFormationPaginationConfiguration,
  input: ListExportsCommandInput,
  ...additionalArguments: any
): Paginator<ListExportsCommandOutput>;
