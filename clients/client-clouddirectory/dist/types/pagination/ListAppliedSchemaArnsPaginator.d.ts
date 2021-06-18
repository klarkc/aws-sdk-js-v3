import {
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput,
} from "../commands/ListAppliedSchemaArnsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAppliedSchemaArns(
  config: CloudDirectoryPaginationConfiguration,
  input: ListAppliedSchemaArnsCommandInput,
  ...additionalArguments: any
): Paginator<ListAppliedSchemaArnsCommandOutput>;
