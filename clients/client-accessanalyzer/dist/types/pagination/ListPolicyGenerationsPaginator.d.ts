import {
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
} from "../commands/ListPolicyGenerationsCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPolicyGenerations(
  config: AccessAnalyzerPaginationConfiguration,
  input: ListPolicyGenerationsCommandInput,
  ...additionalArguments: any
): Paginator<ListPolicyGenerationsCommandOutput>;
