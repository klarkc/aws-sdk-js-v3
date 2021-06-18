import {
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput,
} from "../commands/ListBackupSelectionsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBackupSelections(
  config: BackupPaginationConfiguration,
  input: ListBackupSelectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListBackupSelectionsCommandOutput>;
