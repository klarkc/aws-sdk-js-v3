import { ListStackInstancesCommandInput, ListStackInstancesCommandOutput } from "../commands/ListStackInstancesCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListStackInstances(
  config: CloudFormationPaginationConfiguration,
  input: ListStackInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListStackInstancesCommandOutput>;
