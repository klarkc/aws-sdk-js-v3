import { ListStacksCommandInput, ListStacksCommandOutput } from "../commands/ListStacksCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListStacks(
  config: CloudFormationPaginationConfiguration,
  input: ListStacksCommandInput,
  ...additionalArguments: any
): Paginator<ListStacksCommandOutput>;
