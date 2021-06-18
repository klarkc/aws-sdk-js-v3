import { CreateBackupPlanCommandInput, CreateBackupPlanCommandOutput } from "../commands/CreateBackupPlanCommand";
import {
  CreateBackupSelectionCommandInput,
  CreateBackupSelectionCommandOutput,
} from "../commands/CreateBackupSelectionCommand";
import { CreateBackupVaultCommandInput, CreateBackupVaultCommandOutput } from "../commands/CreateBackupVaultCommand";
import { DeleteBackupPlanCommandInput, DeleteBackupPlanCommandOutput } from "../commands/DeleteBackupPlanCommand";
import {
  DeleteBackupSelectionCommandInput,
  DeleteBackupSelectionCommandOutput,
} from "../commands/DeleteBackupSelectionCommand";
import {
  DeleteBackupVaultAccessPolicyCommandInput,
  DeleteBackupVaultAccessPolicyCommandOutput,
} from "../commands/DeleteBackupVaultAccessPolicyCommand";
import { DeleteBackupVaultCommandInput, DeleteBackupVaultCommandOutput } from "../commands/DeleteBackupVaultCommand";
import {
  DeleteBackupVaultNotificationsCommandInput,
  DeleteBackupVaultNotificationsCommandOutput,
} from "../commands/DeleteBackupVaultNotificationsCommand";
import {
  DeleteRecoveryPointCommandInput,
  DeleteRecoveryPointCommandOutput,
} from "../commands/DeleteRecoveryPointCommand";
import { DescribeBackupJobCommandInput, DescribeBackupJobCommandOutput } from "../commands/DescribeBackupJobCommand";
import {
  DescribeBackupVaultCommandInput,
  DescribeBackupVaultCommandOutput,
} from "../commands/DescribeBackupVaultCommand";
import { DescribeCopyJobCommandInput, DescribeCopyJobCommandOutput } from "../commands/DescribeCopyJobCommand";
import {
  DescribeGlobalSettingsCommandInput,
  DescribeGlobalSettingsCommandOutput,
} from "../commands/DescribeGlobalSettingsCommand";
import {
  DescribeProtectedResourceCommandInput,
  DescribeProtectedResourceCommandOutput,
} from "../commands/DescribeProtectedResourceCommand";
import {
  DescribeRecoveryPointCommandInput,
  DescribeRecoveryPointCommandOutput,
} from "../commands/DescribeRecoveryPointCommand";
import {
  DescribeRegionSettingsCommandInput,
  DescribeRegionSettingsCommandOutput,
} from "../commands/DescribeRegionSettingsCommand";
import { DescribeRestoreJobCommandInput, DescribeRestoreJobCommandOutput } from "../commands/DescribeRestoreJobCommand";
import {
  DisassociateRecoveryPointCommandInput,
  DisassociateRecoveryPointCommandOutput,
} from "../commands/DisassociateRecoveryPointCommand";
import {
  ExportBackupPlanTemplateCommandInput,
  ExportBackupPlanTemplateCommandOutput,
} from "../commands/ExportBackupPlanTemplateCommand";
import { GetBackupPlanCommandInput, GetBackupPlanCommandOutput } from "../commands/GetBackupPlanCommand";
import {
  GetBackupPlanFromJSONCommandInput,
  GetBackupPlanFromJSONCommandOutput,
} from "../commands/GetBackupPlanFromJSONCommand";
import {
  GetBackupPlanFromTemplateCommandInput,
  GetBackupPlanFromTemplateCommandOutput,
} from "../commands/GetBackupPlanFromTemplateCommand";
import { GetBackupSelectionCommandInput, GetBackupSelectionCommandOutput } from "../commands/GetBackupSelectionCommand";
import {
  GetBackupVaultAccessPolicyCommandInput,
  GetBackupVaultAccessPolicyCommandOutput,
} from "../commands/GetBackupVaultAccessPolicyCommand";
import {
  GetBackupVaultNotificationsCommandInput,
  GetBackupVaultNotificationsCommandOutput,
} from "../commands/GetBackupVaultNotificationsCommand";
import {
  GetRecoveryPointRestoreMetadataCommandInput,
  GetRecoveryPointRestoreMetadataCommandOutput,
} from "../commands/GetRecoveryPointRestoreMetadataCommand";
import {
  GetSupportedResourceTypesCommandInput,
  GetSupportedResourceTypesCommandOutput,
} from "../commands/GetSupportedResourceTypesCommand";
import { ListBackupJobsCommandInput, ListBackupJobsCommandOutput } from "../commands/ListBackupJobsCommand";
import {
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput,
} from "../commands/ListBackupPlanTemplatesCommand";
import {
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
} from "../commands/ListBackupPlanVersionsCommand";
import { ListBackupPlansCommandInput, ListBackupPlansCommandOutput } from "../commands/ListBackupPlansCommand";
import {
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput,
} from "../commands/ListBackupSelectionsCommand";
import { ListBackupVaultsCommandInput, ListBackupVaultsCommandOutput } from "../commands/ListBackupVaultsCommand";
import { ListCopyJobsCommandInput, ListCopyJobsCommandOutput } from "../commands/ListCopyJobsCommand";
import {
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput,
} from "../commands/ListProtectedResourcesCommand";
import {
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput,
} from "../commands/ListRecoveryPointsByBackupVaultCommand";
import {
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput,
} from "../commands/ListRecoveryPointsByResourceCommand";
import { ListRestoreJobsCommandInput, ListRestoreJobsCommandOutput } from "../commands/ListRestoreJobsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import {
  PutBackupVaultAccessPolicyCommandInput,
  PutBackupVaultAccessPolicyCommandOutput,
} from "../commands/PutBackupVaultAccessPolicyCommand";
import {
  PutBackupVaultNotificationsCommandInput,
  PutBackupVaultNotificationsCommandOutput,
} from "../commands/PutBackupVaultNotificationsCommand";
import { StartBackupJobCommandInput, StartBackupJobCommandOutput } from "../commands/StartBackupJobCommand";
import { StartCopyJobCommandInput, StartCopyJobCommandOutput } from "../commands/StartCopyJobCommand";
import { StartRestoreJobCommandInput, StartRestoreJobCommandOutput } from "../commands/StartRestoreJobCommand";
import { StopBackupJobCommandInput, StopBackupJobCommandOutput } from "../commands/StopBackupJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBackupPlanCommandInput, UpdateBackupPlanCommandOutput } from "../commands/UpdateBackupPlanCommand";
import {
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "../commands/UpdateGlobalSettingsCommand";
import {
  UpdateRecoveryPointLifecycleCommandInput,
  UpdateRecoveryPointLifecycleCommandOutput,
} from "../commands/UpdateRecoveryPointLifecycleCommand";
import {
  UpdateRegionSettingsCommandInput,
  UpdateRegionSettingsCommandOutput,
} from "../commands/UpdateRegionSettingsCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1CreateBackupPlanCommand: (
  input: CreateBackupPlanCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateBackupSelectionCommand: (
  input: CreateBackupSelectionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateBackupVaultCommand: (
  input: CreateBackupVaultCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteBackupPlanCommand: (
  input: DeleteBackupPlanCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteBackupSelectionCommand: (
  input: DeleteBackupSelectionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteBackupVaultCommand: (
  input: DeleteBackupVaultCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand: (
  input: DeleteBackupVaultAccessPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteBackupVaultNotificationsCommand: (
  input: DeleteBackupVaultNotificationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteRecoveryPointCommand: (
  input: DeleteRecoveryPointCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeBackupJobCommand: (
  input: DescribeBackupJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeBackupVaultCommand: (
  input: DescribeBackupVaultCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeCopyJobCommand: (
  input: DescribeCopyJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeGlobalSettingsCommand: (
  input: DescribeGlobalSettingsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeProtectedResourceCommand: (
  input: DescribeProtectedResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeRecoveryPointCommand: (
  input: DescribeRecoveryPointCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeRegionSettingsCommand: (
  input: DescribeRegionSettingsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeRestoreJobCommand: (
  input: DescribeRestoreJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DisassociateRecoveryPointCommand: (
  input: DisassociateRecoveryPointCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ExportBackupPlanTemplateCommand: (
  input: ExportBackupPlanTemplateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetBackupPlanCommand: (
  input: GetBackupPlanCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetBackupPlanFromJSONCommand: (
  input: GetBackupPlanFromJSONCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetBackupPlanFromTemplateCommand: (
  input: GetBackupPlanFromTemplateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetBackupSelectionCommand: (
  input: GetBackupSelectionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetBackupVaultAccessPolicyCommand: (
  input: GetBackupVaultAccessPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetBackupVaultNotificationsCommand: (
  input: GetBackupVaultNotificationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand: (
  input: GetRecoveryPointRestoreMetadataCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetSupportedResourceTypesCommand: (
  input: GetSupportedResourceTypesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListBackupJobsCommand: (
  input: ListBackupJobsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListBackupPlansCommand: (
  input: ListBackupPlansCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListBackupPlanTemplatesCommand: (
  input: ListBackupPlanTemplatesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListBackupPlanVersionsCommand: (
  input: ListBackupPlanVersionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListBackupSelectionsCommand: (
  input: ListBackupSelectionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListBackupVaultsCommand: (
  input: ListBackupVaultsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListCopyJobsCommand: (
  input: ListCopyJobsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListProtectedResourcesCommand: (
  input: ListProtectedResourcesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand: (
  input: ListRecoveryPointsByBackupVaultCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListRecoveryPointsByResourceCommand: (
  input: ListRecoveryPointsByResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListRestoreJobsCommand: (
  input: ListRestoreJobsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsCommand: (
  input: ListTagsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1PutBackupVaultAccessPolicyCommand: (
  input: PutBackupVaultAccessPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1PutBackupVaultNotificationsCommand: (
  input: PutBackupVaultNotificationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartBackupJobCommand: (
  input: StartBackupJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartCopyJobCommand: (
  input: StartCopyJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartRestoreJobCommand: (
  input: StartRestoreJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StopBackupJobCommand: (
  input: StopBackupJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateBackupPlanCommand: (
  input: UpdateBackupPlanCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateGlobalSettingsCommand: (
  input: UpdateGlobalSettingsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateRecoveryPointLifecycleCommand: (
  input: UpdateRecoveryPointLifecycleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateRegionSettingsCommand: (
  input: UpdateRegionSettingsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1CreateBackupPlanCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateBackupPlanCommandOutput>;
export declare const deserializeAws_restJson1CreateBackupSelectionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateBackupSelectionCommandOutput>;
export declare const deserializeAws_restJson1CreateBackupVaultCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateBackupVaultCommandOutput>;
export declare const deserializeAws_restJson1DeleteBackupPlanCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBackupPlanCommandOutput>;
export declare const deserializeAws_restJson1DeleteBackupSelectionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBackupSelectionCommandOutput>;
export declare const deserializeAws_restJson1DeleteBackupVaultCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBackupVaultCommandOutput>;
export declare const deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBackupVaultAccessPolicyCommandOutput>;
export declare const deserializeAws_restJson1DeleteBackupVaultNotificationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBackupVaultNotificationsCommandOutput>;
export declare const deserializeAws_restJson1DeleteRecoveryPointCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteRecoveryPointCommandOutput>;
export declare const deserializeAws_restJson1DescribeBackupJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeBackupJobCommandOutput>;
export declare const deserializeAws_restJson1DescribeBackupVaultCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeBackupVaultCommandOutput>;
export declare const deserializeAws_restJson1DescribeCopyJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeCopyJobCommandOutput>;
export declare const deserializeAws_restJson1DescribeGlobalSettingsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeGlobalSettingsCommandOutput>;
export declare const deserializeAws_restJson1DescribeProtectedResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeProtectedResourceCommandOutput>;
export declare const deserializeAws_restJson1DescribeRecoveryPointCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeRecoveryPointCommandOutput>;
export declare const deserializeAws_restJson1DescribeRegionSettingsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeRegionSettingsCommandOutput>;
export declare const deserializeAws_restJson1DescribeRestoreJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeRestoreJobCommandOutput>;
export declare const deserializeAws_restJson1DisassociateRecoveryPointCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisassociateRecoveryPointCommandOutput>;
export declare const deserializeAws_restJson1ExportBackupPlanTemplateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ExportBackupPlanTemplateCommandOutput>;
export declare const deserializeAws_restJson1GetBackupPlanCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBackupPlanCommandOutput>;
export declare const deserializeAws_restJson1GetBackupPlanFromJSONCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBackupPlanFromJSONCommandOutput>;
export declare const deserializeAws_restJson1GetBackupPlanFromTemplateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBackupPlanFromTemplateCommandOutput>;
export declare const deserializeAws_restJson1GetBackupSelectionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBackupSelectionCommandOutput>;
export declare const deserializeAws_restJson1GetBackupVaultAccessPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBackupVaultAccessPolicyCommandOutput>;
export declare const deserializeAws_restJson1GetBackupVaultNotificationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBackupVaultNotificationsCommandOutput>;
export declare const deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetRecoveryPointRestoreMetadataCommandOutput>;
export declare const deserializeAws_restJson1GetSupportedResourceTypesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetSupportedResourceTypesCommandOutput>;
export declare const deserializeAws_restJson1ListBackupJobsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListBackupJobsCommandOutput>;
export declare const deserializeAws_restJson1ListBackupPlansCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListBackupPlansCommandOutput>;
export declare const deserializeAws_restJson1ListBackupPlanTemplatesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListBackupPlanTemplatesCommandOutput>;
export declare const deserializeAws_restJson1ListBackupPlanVersionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListBackupPlanVersionsCommandOutput>;
export declare const deserializeAws_restJson1ListBackupSelectionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListBackupSelectionsCommandOutput>;
export declare const deserializeAws_restJson1ListBackupVaultsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListBackupVaultsCommandOutput>;
export declare const deserializeAws_restJson1ListCopyJobsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListCopyJobsCommandOutput>;
export declare const deserializeAws_restJson1ListProtectedResourcesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListProtectedResourcesCommandOutput>;
export declare const deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListRecoveryPointsByBackupVaultCommandOutput>;
export declare const deserializeAws_restJson1ListRecoveryPointsByResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListRecoveryPointsByResourceCommandOutput>;
export declare const deserializeAws_restJson1ListRestoreJobsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListRestoreJobsCommandOutput>;
export declare const deserializeAws_restJson1ListTagsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsCommandOutput>;
export declare const deserializeAws_restJson1PutBackupVaultAccessPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBackupVaultAccessPolicyCommandOutput>;
export declare const deserializeAws_restJson1PutBackupVaultNotificationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBackupVaultNotificationsCommandOutput>;
export declare const deserializeAws_restJson1StartBackupJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartBackupJobCommandOutput>;
export declare const deserializeAws_restJson1StartCopyJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartCopyJobCommandOutput>;
export declare const deserializeAws_restJson1StartRestoreJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartRestoreJobCommandOutput>;
export declare const deserializeAws_restJson1StopBackupJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StopBackupJobCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateBackupPlanCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateBackupPlanCommandOutput>;
export declare const deserializeAws_restJson1UpdateGlobalSettingsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateGlobalSettingsCommandOutput>;
export declare const deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateRecoveryPointLifecycleCommandOutput>;
export declare const deserializeAws_restJson1UpdateRegionSettingsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateRegionSettingsCommandOutput>;
