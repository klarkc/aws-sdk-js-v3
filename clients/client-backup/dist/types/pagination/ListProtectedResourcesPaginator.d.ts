import {
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput,
} from "../commands/ListProtectedResourcesCommand";
import { BackupPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProtectedResources(
  config: BackupPaginationConfiguration,
  input: ListProtectedResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListProtectedResourcesCommandOutput>;
