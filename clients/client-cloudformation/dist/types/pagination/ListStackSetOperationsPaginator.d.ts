import {
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput,
} from "../commands/ListStackSetOperationsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListStackSetOperations(
  config: CloudFormationPaginationConfiguration,
  input: ListStackSetOperationsCommandInput,
  ...additionalArguments: any
): Paginator<ListStackSetOperationsCommandOutput>;
