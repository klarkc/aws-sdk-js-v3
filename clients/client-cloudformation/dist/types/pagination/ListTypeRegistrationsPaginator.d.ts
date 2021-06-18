import {
  ListTypeRegistrationsCommandInput,
  ListTypeRegistrationsCommandOutput,
} from "../commands/ListTypeRegistrationsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTypeRegistrations(
  config: CloudFormationPaginationConfiguration,
  input: ListTypeRegistrationsCommandInput,
  ...additionalArguments: any
): Paginator<ListTypeRegistrationsCommandOutput>;
