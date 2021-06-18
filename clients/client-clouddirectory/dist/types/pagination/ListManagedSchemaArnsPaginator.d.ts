import {
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput,
} from "../commands/ListManagedSchemaArnsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListManagedSchemaArns(
  config: CloudDirectoryPaginationConfiguration,
  input: ListManagedSchemaArnsCommandInput,
  ...additionalArguments: any
): Paginator<ListManagedSchemaArnsCommandOutput>;
