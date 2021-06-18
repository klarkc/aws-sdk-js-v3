"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backup = void 0;
const BackupClient_1 = require("./BackupClient");
const CreateBackupPlanCommand_1 = require("./commands/CreateBackupPlanCommand");
const CreateBackupSelectionCommand_1 = require("./commands/CreateBackupSelectionCommand");
const CreateBackupVaultCommand_1 = require("./commands/CreateBackupVaultCommand");
const DeleteBackupPlanCommand_1 = require("./commands/DeleteBackupPlanCommand");
const DeleteBackupSelectionCommand_1 = require("./commands/DeleteBackupSelectionCommand");
const DeleteBackupVaultAccessPolicyCommand_1 = require("./commands/DeleteBackupVaultAccessPolicyCommand");
const DeleteBackupVaultCommand_1 = require("./commands/DeleteBackupVaultCommand");
const DeleteBackupVaultNotificationsCommand_1 = require("./commands/DeleteBackupVaultNotificationsCommand");
const DeleteRecoveryPointCommand_1 = require("./commands/DeleteRecoveryPointCommand");
const DescribeBackupJobCommand_1 = require("./commands/DescribeBackupJobCommand");
const DescribeBackupVaultCommand_1 = require("./commands/DescribeBackupVaultCommand");
const DescribeCopyJobCommand_1 = require("./commands/DescribeCopyJobCommand");
const DescribeGlobalSettingsCommand_1 = require("./commands/DescribeGlobalSettingsCommand");
const DescribeProtectedResourceCommand_1 = require("./commands/DescribeProtectedResourceCommand");
const DescribeRecoveryPointCommand_1 = require("./commands/DescribeRecoveryPointCommand");
const DescribeRegionSettingsCommand_1 = require("./commands/DescribeRegionSettingsCommand");
const DescribeRestoreJobCommand_1 = require("./commands/DescribeRestoreJobCommand");
const DisassociateRecoveryPointCommand_1 = require("./commands/DisassociateRecoveryPointCommand");
const ExportBackupPlanTemplateCommand_1 = require("./commands/ExportBackupPlanTemplateCommand");
const GetBackupPlanCommand_1 = require("./commands/GetBackupPlanCommand");
const GetBackupPlanFromJSONCommand_1 = require("./commands/GetBackupPlanFromJSONCommand");
const GetBackupPlanFromTemplateCommand_1 = require("./commands/GetBackupPlanFromTemplateCommand");
const GetBackupSelectionCommand_1 = require("./commands/GetBackupSelectionCommand");
const GetBackupVaultAccessPolicyCommand_1 = require("./commands/GetBackupVaultAccessPolicyCommand");
const GetBackupVaultNotificationsCommand_1 = require("./commands/GetBackupVaultNotificationsCommand");
const GetRecoveryPointRestoreMetadataCommand_1 = require("./commands/GetRecoveryPointRestoreMetadataCommand");
const GetSupportedResourceTypesCommand_1 = require("./commands/GetSupportedResourceTypesCommand");
const ListBackupJobsCommand_1 = require("./commands/ListBackupJobsCommand");
const ListBackupPlanTemplatesCommand_1 = require("./commands/ListBackupPlanTemplatesCommand");
const ListBackupPlanVersionsCommand_1 = require("./commands/ListBackupPlanVersionsCommand");
const ListBackupPlansCommand_1 = require("./commands/ListBackupPlansCommand");
const ListBackupSelectionsCommand_1 = require("./commands/ListBackupSelectionsCommand");
const ListBackupVaultsCommand_1 = require("./commands/ListBackupVaultsCommand");
const ListCopyJobsCommand_1 = require("./commands/ListCopyJobsCommand");
const ListProtectedResourcesCommand_1 = require("./commands/ListProtectedResourcesCommand");
const ListRecoveryPointsByBackupVaultCommand_1 = require("./commands/ListRecoveryPointsByBackupVaultCommand");
const ListRecoveryPointsByResourceCommand_1 = require("./commands/ListRecoveryPointsByResourceCommand");
const ListRestoreJobsCommand_1 = require("./commands/ListRestoreJobsCommand");
const ListTagsCommand_1 = require("./commands/ListTagsCommand");
const PutBackupVaultAccessPolicyCommand_1 = require("./commands/PutBackupVaultAccessPolicyCommand");
const PutBackupVaultNotificationsCommand_1 = require("./commands/PutBackupVaultNotificationsCommand");
const StartBackupJobCommand_1 = require("./commands/StartBackupJobCommand");
const StartCopyJobCommand_1 = require("./commands/StartCopyJobCommand");
const StartRestoreJobCommand_1 = require("./commands/StartRestoreJobCommand");
const StopBackupJobCommand_1 = require("./commands/StopBackupJobCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateBackupPlanCommand_1 = require("./commands/UpdateBackupPlanCommand");
const UpdateGlobalSettingsCommand_1 = require("./commands/UpdateGlobalSettingsCommand");
const UpdateRecoveryPointLifecycleCommand_1 = require("./commands/UpdateRecoveryPointLifecycleCommand");
const UpdateRegionSettingsCommand_1 = require("./commands/UpdateRegionSettingsCommand");
/**
 * <fullname>AWS Backup</fullname>
 *          <p>AWS Backup is a unified backup service designed to protect AWS services and their
 *          associated data. AWS Backup simplifies the creation, migration, restoration, and deletion
 *          of backups, while also providing reporting and auditing.</p>
 */
class Backup extends BackupClient_1.BackupClient {
  createBackupPlan(args, optionsOrCb, cb) {
    const command = new CreateBackupPlanCommand_1.CreateBackupPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createBackupSelection(args, optionsOrCb, cb) {
    const command = new CreateBackupSelectionCommand_1.CreateBackupSelectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createBackupVault(args, optionsOrCb, cb) {
    const command = new CreateBackupVaultCommand_1.CreateBackupVaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteBackupPlan(args, optionsOrCb, cb) {
    const command = new DeleteBackupPlanCommand_1.DeleteBackupPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteBackupSelection(args, optionsOrCb, cb) {
    const command = new DeleteBackupSelectionCommand_1.DeleteBackupSelectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteBackupVault(args, optionsOrCb, cb) {
    const command = new DeleteBackupVaultCommand_1.DeleteBackupVaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteBackupVaultAccessPolicy(args, optionsOrCb, cb) {
    const command = new DeleteBackupVaultAccessPolicyCommand_1.DeleteBackupVaultAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteBackupVaultNotifications(args, optionsOrCb, cb) {
    const command = new DeleteBackupVaultNotificationsCommand_1.DeleteBackupVaultNotificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteRecoveryPoint(args, optionsOrCb, cb) {
    const command = new DeleteRecoveryPointCommand_1.DeleteRecoveryPointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeBackupJob(args, optionsOrCb, cb) {
    const command = new DescribeBackupJobCommand_1.DescribeBackupJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeBackupVault(args, optionsOrCb, cb) {
    const command = new DescribeBackupVaultCommand_1.DescribeBackupVaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeCopyJob(args, optionsOrCb, cb) {
    const command = new DescribeCopyJobCommand_1.DescribeCopyJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeGlobalSettings(args, optionsOrCb, cb) {
    const command = new DescribeGlobalSettingsCommand_1.DescribeGlobalSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeProtectedResource(args, optionsOrCb, cb) {
    const command = new DescribeProtectedResourceCommand_1.DescribeProtectedResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeRecoveryPoint(args, optionsOrCb, cb) {
    const command = new DescribeRecoveryPointCommand_1.DescribeRecoveryPointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeRegionSettings(args, optionsOrCb, cb) {
    const command = new DescribeRegionSettingsCommand_1.DescribeRegionSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeRestoreJob(args, optionsOrCb, cb) {
    const command = new DescribeRestoreJobCommand_1.DescribeRestoreJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  disassociateRecoveryPoint(args, optionsOrCb, cb) {
    const command = new DisassociateRecoveryPointCommand_1.DisassociateRecoveryPointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  exportBackupPlanTemplate(args, optionsOrCb, cb) {
    const command = new ExportBackupPlanTemplateCommand_1.ExportBackupPlanTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBackupPlan(args, optionsOrCb, cb) {
    const command = new GetBackupPlanCommand_1.GetBackupPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBackupPlanFromJSON(args, optionsOrCb, cb) {
    const command = new GetBackupPlanFromJSONCommand_1.GetBackupPlanFromJSONCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBackupPlanFromTemplate(args, optionsOrCb, cb) {
    const command = new GetBackupPlanFromTemplateCommand_1.GetBackupPlanFromTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBackupSelection(args, optionsOrCb, cb) {
    const command = new GetBackupSelectionCommand_1.GetBackupSelectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBackupVaultAccessPolicy(args, optionsOrCb, cb) {
    const command = new GetBackupVaultAccessPolicyCommand_1.GetBackupVaultAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBackupVaultNotifications(args, optionsOrCb, cb) {
    const command = new GetBackupVaultNotificationsCommand_1.GetBackupVaultNotificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getRecoveryPointRestoreMetadata(args, optionsOrCb, cb) {
    const command = new GetRecoveryPointRestoreMetadataCommand_1.GetRecoveryPointRestoreMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getSupportedResourceTypes(args, optionsOrCb, cb) {
    const command = new GetSupportedResourceTypesCommand_1.GetSupportedResourceTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listBackupJobs(args, optionsOrCb, cb) {
    const command = new ListBackupJobsCommand_1.ListBackupJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listBackupPlans(args, optionsOrCb, cb) {
    const command = new ListBackupPlansCommand_1.ListBackupPlansCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listBackupPlanTemplates(args, optionsOrCb, cb) {
    const command = new ListBackupPlanTemplatesCommand_1.ListBackupPlanTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listBackupPlanVersions(args, optionsOrCb, cb) {
    const command = new ListBackupPlanVersionsCommand_1.ListBackupPlanVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listBackupSelections(args, optionsOrCb, cb) {
    const command = new ListBackupSelectionsCommand_1.ListBackupSelectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listBackupVaults(args, optionsOrCb, cb) {
    const command = new ListBackupVaultsCommand_1.ListBackupVaultsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listCopyJobs(args, optionsOrCb, cb) {
    const command = new ListCopyJobsCommand_1.ListCopyJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listProtectedResources(args, optionsOrCb, cb) {
    const command = new ListProtectedResourcesCommand_1.ListProtectedResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listRecoveryPointsByBackupVault(args, optionsOrCb, cb) {
    const command = new ListRecoveryPointsByBackupVaultCommand_1.ListRecoveryPointsByBackupVaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listRecoveryPointsByResource(args, optionsOrCb, cb) {
    const command = new ListRecoveryPointsByResourceCommand_1.ListRecoveryPointsByResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listRestoreJobs(args, optionsOrCb, cb) {
    const command = new ListRestoreJobsCommand_1.ListRestoreJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listTags(args, optionsOrCb, cb) {
    const command = new ListTagsCommand_1.ListTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putBackupVaultAccessPolicy(args, optionsOrCb, cb) {
    const command = new PutBackupVaultAccessPolicyCommand_1.PutBackupVaultAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putBackupVaultNotifications(args, optionsOrCb, cb) {
    const command = new PutBackupVaultNotificationsCommand_1.PutBackupVaultNotificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  startBackupJob(args, optionsOrCb, cb) {
    const command = new StartBackupJobCommand_1.StartBackupJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  startCopyJob(args, optionsOrCb, cb) {
    const command = new StartCopyJobCommand_1.StartCopyJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  startRestoreJob(args, optionsOrCb, cb) {
    const command = new StartRestoreJobCommand_1.StartRestoreJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  stopBackupJob(args, optionsOrCb, cb) {
    const command = new StopBackupJobCommand_1.StopBackupJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  tagResource(args, optionsOrCb, cb) {
    const command = new TagResourceCommand_1.TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  untagResource(args, optionsOrCb, cb) {
    const command = new UntagResourceCommand_1.UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateBackupPlan(args, optionsOrCb, cb) {
    const command = new UpdateBackupPlanCommand_1.UpdateBackupPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateGlobalSettings(args, optionsOrCb, cb) {
    const command = new UpdateGlobalSettingsCommand_1.UpdateGlobalSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateRecoveryPointLifecycle(args, optionsOrCb, cb) {
    const command = new UpdateRecoveryPointLifecycleCommand_1.UpdateRecoveryPointLifecycleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateRegionSettings(args, optionsOrCb, cb) {
    const command = new UpdateRegionSettingsCommand_1.UpdateRegionSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
exports.Backup = Backup;
//# sourceMappingURL=Backup.js.map
