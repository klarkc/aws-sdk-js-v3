import { ListObjectPoliciesCommandInput, ListObjectPoliciesCommandOutput } from "../commands/ListObjectPoliciesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListObjectPolicies(
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListObjectPoliciesCommandOutput>;
