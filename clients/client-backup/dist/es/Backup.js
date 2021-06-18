import { __extends } from "tslib";
import { BackupClient } from "./BackupClient";
import { CreateBackupPlanCommand } from "./commands/CreateBackupPlanCommand";
import { CreateBackupSelectionCommand } from "./commands/CreateBackupSelectionCommand";
import { CreateBackupVaultCommand } from "./commands/CreateBackupVaultCommand";
import { DeleteBackupPlanCommand } from "./commands/DeleteBackupPlanCommand";
import { DeleteBackupSelectionCommand } from "./commands/DeleteBackupSelectionCommand";
import { DeleteBackupVaultAccessPolicyCommand } from "./commands/DeleteBackupVaultAccessPolicyCommand";
import { DeleteBackupVaultCommand } from "./commands/DeleteBackupVaultCommand";
import { DeleteBackupVaultNotificationsCommand } from "./commands/DeleteBackupVaultNotificationsCommand";
import { DeleteRecoveryPointCommand } from "./commands/DeleteRecoveryPointCommand";
import { DescribeBackupJobCommand } from "./commands/DescribeBackupJobCommand";
import { DescribeBackupVaultCommand } from "./commands/DescribeBackupVaultCommand";
import { DescribeCopyJobCommand } from "./commands/DescribeCopyJobCommand";
import { DescribeGlobalSettingsCommand } from "./commands/DescribeGlobalSettingsCommand";
import { DescribeProtectedResourceCommand } from "./commands/DescribeProtectedResourceCommand";
import { DescribeRecoveryPointCommand } from "./commands/DescribeRecoveryPointCommand";
import { DescribeRegionSettingsCommand } from "./commands/DescribeRegionSettingsCommand";
import { DescribeRestoreJobCommand } from "./commands/DescribeRestoreJobCommand";
import { DisassociateRecoveryPointCommand } from "./commands/DisassociateRecoveryPointCommand";
import { ExportBackupPlanTemplateCommand } from "./commands/ExportBackupPlanTemplateCommand";
import { GetBackupPlanCommand } from "./commands/GetBackupPlanCommand";
import { GetBackupPlanFromJSONCommand } from "./commands/GetBackupPlanFromJSONCommand";
import { GetBackupPlanFromTemplateCommand } from "./commands/GetBackupPlanFromTemplateCommand";
import { GetBackupSelectionCommand } from "./commands/GetBackupSelectionCommand";
import { GetBackupVaultAccessPolicyCommand } from "./commands/GetBackupVaultAccessPolicyCommand";
import { GetBackupVaultNotificationsCommand } from "./commands/GetBackupVaultNotificationsCommand";
import { GetRecoveryPointRestoreMetadataCommand } from "./commands/GetRecoveryPointRestoreMetadataCommand";
import { GetSupportedResourceTypesCommand } from "./commands/GetSupportedResourceTypesCommand";
import { ListBackupJobsCommand } from "./commands/ListBackupJobsCommand";
import { ListBackupPlanTemplatesCommand } from "./commands/ListBackupPlanTemplatesCommand";
import { ListBackupPlanVersionsCommand } from "./commands/ListBackupPlanVersionsCommand";
import { ListBackupPlansCommand } from "./commands/ListBackupPlansCommand";
import { ListBackupSelectionsCommand } from "./commands/ListBackupSelectionsCommand";
import { ListBackupVaultsCommand } from "./commands/ListBackupVaultsCommand";
import { ListCopyJobsCommand } from "./commands/ListCopyJobsCommand";
import { ListProtectedResourcesCommand } from "./commands/ListProtectedResourcesCommand";
import { ListRecoveryPointsByBackupVaultCommand } from "./commands/ListRecoveryPointsByBackupVaultCommand";
import { ListRecoveryPointsByResourceCommand } from "./commands/ListRecoveryPointsByResourceCommand";
import { ListRestoreJobsCommand } from "./commands/ListRestoreJobsCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { PutBackupVaultAccessPolicyCommand } from "./commands/PutBackupVaultAccessPolicyCommand";
import { PutBackupVaultNotificationsCommand } from "./commands/PutBackupVaultNotificationsCommand";
import { StartBackupJobCommand } from "./commands/StartBackupJobCommand";
import { StartCopyJobCommand } from "./commands/StartCopyJobCommand";
import { StartRestoreJobCommand } from "./commands/StartRestoreJobCommand";
import { StopBackupJobCommand } from "./commands/StopBackupJobCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateBackupPlanCommand } from "./commands/UpdateBackupPlanCommand";
import { UpdateGlobalSettingsCommand } from "./commands/UpdateGlobalSettingsCommand";
import { UpdateRecoveryPointLifecycleCommand } from "./commands/UpdateRecoveryPointLifecycleCommand";
import { UpdateRegionSettingsCommand } from "./commands/UpdateRegionSettingsCommand";
/**
 * <fullname>AWS Backup</fullname>
 *          <p>AWS Backup is a unified backup service designed to protect AWS services and their
 *          associated data. AWS Backup simplifies the creation, migration, restoration, and deletion
 *          of backups, while also providing reporting and auditing.</p>
 */
var Backup = /** @class */ (function (_super) {
  __extends(Backup, _super);
  function Backup() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Backup.prototype.createBackupPlan = function (args, optionsOrCb, cb) {
    var command = new CreateBackupPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.createBackupSelection = function (args, optionsOrCb, cb) {
    var command = new CreateBackupSelectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.createBackupVault = function (args, optionsOrCb, cb) {
    var command = new CreateBackupVaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.deleteBackupPlan = function (args, optionsOrCb, cb) {
    var command = new DeleteBackupPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.deleteBackupSelection = function (args, optionsOrCb, cb) {
    var command = new DeleteBackupSelectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.deleteBackupVault = function (args, optionsOrCb, cb) {
    var command = new DeleteBackupVaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.deleteBackupVaultAccessPolicy = function (args, optionsOrCb, cb) {
    var command = new DeleteBackupVaultAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.deleteBackupVaultNotifications = function (args, optionsOrCb, cb) {
    var command = new DeleteBackupVaultNotificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.deleteRecoveryPoint = function (args, optionsOrCb, cb) {
    var command = new DeleteRecoveryPointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.describeBackupJob = function (args, optionsOrCb, cb) {
    var command = new DescribeBackupJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.describeBackupVault = function (args, optionsOrCb, cb) {
    var command = new DescribeBackupVaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.describeCopyJob = function (args, optionsOrCb, cb) {
    var command = new DescribeCopyJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.describeGlobalSettings = function (args, optionsOrCb, cb) {
    var command = new DescribeGlobalSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.describeProtectedResource = function (args, optionsOrCb, cb) {
    var command = new DescribeProtectedResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.describeRecoveryPoint = function (args, optionsOrCb, cb) {
    var command = new DescribeRecoveryPointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.describeRegionSettings = function (args, optionsOrCb, cb) {
    var command = new DescribeRegionSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.describeRestoreJob = function (args, optionsOrCb, cb) {
    var command = new DescribeRestoreJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.disassociateRecoveryPoint = function (args, optionsOrCb, cb) {
    var command = new DisassociateRecoveryPointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.exportBackupPlanTemplate = function (args, optionsOrCb, cb) {
    var command = new ExportBackupPlanTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.getBackupPlan = function (args, optionsOrCb, cb) {
    var command = new GetBackupPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.getBackupPlanFromJSON = function (args, optionsOrCb, cb) {
    var command = new GetBackupPlanFromJSONCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.getBackupPlanFromTemplate = function (args, optionsOrCb, cb) {
    var command = new GetBackupPlanFromTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.getBackupSelection = function (args, optionsOrCb, cb) {
    var command = new GetBackupSelectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.getBackupVaultAccessPolicy = function (args, optionsOrCb, cb) {
    var command = new GetBackupVaultAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.getBackupVaultNotifications = function (args, optionsOrCb, cb) {
    var command = new GetBackupVaultNotificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.getRecoveryPointRestoreMetadata = function (args, optionsOrCb, cb) {
    var command = new GetRecoveryPointRestoreMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.getSupportedResourceTypes = function (args, optionsOrCb, cb) {
    var command = new GetSupportedResourceTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.listBackupJobs = function (args, optionsOrCb, cb) {
    var command = new ListBackupJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.listBackupPlans = function (args, optionsOrCb, cb) {
    var command = new ListBackupPlansCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.listBackupPlanTemplates = function (args, optionsOrCb, cb) {
    var command = new ListBackupPlanTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.listBackupPlanVersions = function (args, optionsOrCb, cb) {
    var command = new ListBackupPlanVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.listBackupSelections = function (args, optionsOrCb, cb) {
    var command = new ListBackupSelectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.listBackupVaults = function (args, optionsOrCb, cb) {
    var command = new ListBackupVaultsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.listCopyJobs = function (args, optionsOrCb, cb) {
    var command = new ListCopyJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.listProtectedResources = function (args, optionsOrCb, cb) {
    var command = new ListProtectedResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.listRecoveryPointsByBackupVault = function (args, optionsOrCb, cb) {
    var command = new ListRecoveryPointsByBackupVaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.listRecoveryPointsByResource = function (args, optionsOrCb, cb) {
    var command = new ListRecoveryPointsByResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.listRestoreJobs = function (args, optionsOrCb, cb) {
    var command = new ListRestoreJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.listTags = function (args, optionsOrCb, cb) {
    var command = new ListTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.putBackupVaultAccessPolicy = function (args, optionsOrCb, cb) {
    var command = new PutBackupVaultAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.putBackupVaultNotifications = function (args, optionsOrCb, cb) {
    var command = new PutBackupVaultNotificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.startBackupJob = function (args, optionsOrCb, cb) {
    var command = new StartBackupJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.startCopyJob = function (args, optionsOrCb, cb) {
    var command = new StartCopyJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.startRestoreJob = function (args, optionsOrCb, cb) {
    var command = new StartRestoreJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.stopBackupJob = function (args, optionsOrCb, cb) {
    var command = new StopBackupJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.tagResource = function (args, optionsOrCb, cb) {
    var command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.untagResource = function (args, optionsOrCb, cb) {
    var command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.updateBackupPlan = function (args, optionsOrCb, cb) {
    var command = new UpdateBackupPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.updateGlobalSettings = function (args, optionsOrCb, cb) {
    var command = new UpdateGlobalSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.updateRecoveryPointLifecycle = function (args, optionsOrCb, cb) {
    var command = new UpdateRecoveryPointLifecycleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Backup.prototype.updateRegionSettings = function (args, optionsOrCb, cb) {
    var command = new UpdateRegionSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return Backup;
})(BackupClient);
export { Backup };
//# sourceMappingURL=Backup.js.map
