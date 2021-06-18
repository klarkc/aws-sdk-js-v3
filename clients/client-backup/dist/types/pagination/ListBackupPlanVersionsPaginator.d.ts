import {
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
} from "../commands/ListBackupPlanVersionsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBackupPlanVersions(
  config: BackupPaginationConfiguration,
  input: ListBackupPlanVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListBackupPlanVersionsCommandOutput>;
