import { ListStackSetsCommandInput, ListStackSetsCommandOutput } from "../commands/ListStackSetsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListStackSets(
  config: CloudFormationPaginationConfiguration,
  input: ListStackSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListStackSetsCommandOutput>;
