import { ListBackupVaultsCommandInput, ListBackupVaultsCommandOutput } from "../commands/ListBackupVaultsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBackupVaults(
  config: BackupPaginationConfiguration,
  input: ListBackupVaultsCommandInput,
  ...additionalArguments: any
): Paginator<ListBackupVaultsCommandOutput>;
