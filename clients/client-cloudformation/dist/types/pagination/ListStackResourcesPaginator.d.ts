import { ListStackResourcesCommandInput, ListStackResourcesCommandOutput } from "../commands/ListStackResourcesCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListStackResources(
  config: CloudFormationPaginationConfiguration,
  input: ListStackResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListStackResourcesCommandOutput>;
