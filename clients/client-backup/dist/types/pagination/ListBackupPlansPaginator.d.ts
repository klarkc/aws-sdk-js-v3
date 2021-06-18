import { ListBackupPlansCommandInput, ListBackupPlansCommandOutput } from "../commands/ListBackupPlansCommand";
import { BackupPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBackupPlans(
  config: BackupPaginationConfiguration,
  input: ListBackupPlansCommandInput,
  ...additionalArguments: any
): Paginator<ListBackupPlansCommandOutput>;
