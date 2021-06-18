import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AdvancedBackupSetting;
(function (AdvancedBackupSetting) {
  /**
   * @internal
   */
  AdvancedBackupSetting.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AdvancedBackupSetting || (AdvancedBackupSetting = {}));
export var AlreadyExistsException;
(function (AlreadyExistsException) {
  /**
   * @internal
   */
  AlreadyExistsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AlreadyExistsException || (AlreadyExistsException = {}));
export var RecoveryPointCreator;
(function (RecoveryPointCreator) {
  /**
   * @internal
   */
  RecoveryPointCreator.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RecoveryPointCreator || (RecoveryPointCreator = {}));
export var BackupJobState;
(function (BackupJobState) {
  BackupJobState["ABORTED"] = "ABORTED";
  BackupJobState["ABORTING"] = "ABORTING";
  BackupJobState["COMPLETED"] = "COMPLETED";
  BackupJobState["CREATED"] = "CREATED";
  BackupJobState["EXPIRED"] = "EXPIRED";
  BackupJobState["FAILED"] = "FAILED";
  BackupJobState["PENDING"] = "PENDING";
  BackupJobState["RUNNING"] = "RUNNING";
})(BackupJobState || (BackupJobState = {}));
export var BackupJob;
(function (BackupJob) {
  /**
   * @internal
   */
  BackupJob.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BackupJob || (BackupJob = {}));
export var Lifecycle;
(function (Lifecycle) {
  /**
   * @internal
   */
  Lifecycle.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Lifecycle || (Lifecycle = {}));
export var CopyAction;
(function (CopyAction) {
  /**
   * @internal
   */
  CopyAction.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CopyAction || (CopyAction = {}));
export var BackupRule;
(function (BackupRule) {
  /**
   * @internal
   */
  BackupRule.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.RecoveryPointTags && { RecoveryPointTags: SENSITIVE_STRING });
  };
})(BackupRule || (BackupRule = {}));
export var BackupPlan;
(function (BackupPlan) {
  /**
   * @internal
   */
  BackupPlan.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Rules && {
        Rules: obj.Rules.map(function (item) {
          return BackupRule.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BackupPlan || (BackupPlan = {}));
export var BackupRuleInput;
(function (BackupRuleInput) {
  /**
   * @internal
   */
  BackupRuleInput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.RecoveryPointTags && { RecoveryPointTags: SENSITIVE_STRING });
  };
})(BackupRuleInput || (BackupRuleInput = {}));
export var BackupPlanInput;
(function (BackupPlanInput) {
  /**
   * @internal
   */
  BackupPlanInput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Rules && {
        Rules: obj.Rules.map(function (item) {
          return BackupRuleInput.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BackupPlanInput || (BackupPlanInput = {}));
export var BackupPlansListMember;
(function (BackupPlansListMember) {
  /**
   * @internal
   */
  BackupPlansListMember.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BackupPlansListMember || (BackupPlansListMember = {}));
export var BackupPlanTemplatesListMember;
(function (BackupPlanTemplatesListMember) {
  /**
   * @internal
   */
  BackupPlanTemplatesListMember.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BackupPlanTemplatesListMember || (BackupPlanTemplatesListMember = {}));
export var ConditionType;
(function (ConditionType) {
  ConditionType["STRINGEQUALS"] = "STRINGEQUALS";
})(ConditionType || (ConditionType = {}));
export var Condition;
(function (Condition) {
  /**
   * @internal
   */
  Condition.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Condition || (Condition = {}));
export var BackupSelection;
(function (BackupSelection) {
  /**
   * @internal
   */
  BackupSelection.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BackupSelection || (BackupSelection = {}));
export var BackupSelectionsListMember;
(function (BackupSelectionsListMember) {
  /**
   * @internal
   */
  BackupSelectionsListMember.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BackupSelectionsListMember || (BackupSelectionsListMember = {}));
export var BackupVaultEvent;
(function (BackupVaultEvent) {
  BackupVaultEvent["BACKUP_JOB_COMPLETED"] = "BACKUP_JOB_COMPLETED";
  BackupVaultEvent["BACKUP_JOB_EXPIRED"] = "BACKUP_JOB_EXPIRED";
  BackupVaultEvent["BACKUP_JOB_FAILED"] = "BACKUP_JOB_FAILED";
  BackupVaultEvent["BACKUP_JOB_STARTED"] = "BACKUP_JOB_STARTED";
  BackupVaultEvent["BACKUP_JOB_SUCCESSFUL"] = "BACKUP_JOB_SUCCESSFUL";
  BackupVaultEvent["BACKUP_PLAN_CREATED"] = "BACKUP_PLAN_CREATED";
  BackupVaultEvent["BACKUP_PLAN_MODIFIED"] = "BACKUP_PLAN_MODIFIED";
  BackupVaultEvent["COPY_JOB_FAILED"] = "COPY_JOB_FAILED";
  BackupVaultEvent["COPY_JOB_STARTED"] = "COPY_JOB_STARTED";
  BackupVaultEvent["COPY_JOB_SUCCESSFUL"] = "COPY_JOB_SUCCESSFUL";
  BackupVaultEvent["RECOVERY_POINT_MODIFIED"] = "RECOVERY_POINT_MODIFIED";
  BackupVaultEvent["RESTORE_JOB_COMPLETED"] = "RESTORE_JOB_COMPLETED";
  BackupVaultEvent["RESTORE_JOB_FAILED"] = "RESTORE_JOB_FAILED";
  BackupVaultEvent["RESTORE_JOB_STARTED"] = "RESTORE_JOB_STARTED";
  BackupVaultEvent["RESTORE_JOB_SUCCESSFUL"] = "RESTORE_JOB_SUCCESSFUL";
})(BackupVaultEvent || (BackupVaultEvent = {}));
export var BackupVaultListMember;
(function (BackupVaultListMember) {
  /**
   * @internal
   */
  BackupVaultListMember.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BackupVaultListMember || (BackupVaultListMember = {}));
export var CalculatedLifecycle;
(function (CalculatedLifecycle) {
  /**
   * @internal
   */
  CalculatedLifecycle.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CalculatedLifecycle || (CalculatedLifecycle = {}));
export var CopyJobState;
(function (CopyJobState) {
  CopyJobState["COMPLETED"] = "COMPLETED";
  CopyJobState["CREATED"] = "CREATED";
  CopyJobState["FAILED"] = "FAILED";
  CopyJobState["RUNNING"] = "RUNNING";
})(CopyJobState || (CopyJobState = {}));
export var CopyJob;
(function (CopyJob) {
  /**
   * @internal
   */
  CopyJob.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CopyJob || (CopyJob = {}));
export var CreateBackupPlanInput;
(function (CreateBackupPlanInput) {
  /**
   * @internal
   */
  CreateBackupPlanInput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.BackupPlan && { BackupPlan: BackupPlanInput.filterSensitiveLog(obj.BackupPlan) }),
      obj.BackupPlanTags && { BackupPlanTags: SENSITIVE_STRING }
    );
  };
})(CreateBackupPlanInput || (CreateBackupPlanInput = {}));
export var CreateBackupPlanOutput;
(function (CreateBackupPlanOutput) {
  /**
   * @internal
   */
  CreateBackupPlanOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackupPlanOutput || (CreateBackupPlanOutput = {}));
export var InvalidParameterValueException;
(function (InvalidParameterValueException) {
  /**
   * @internal
   */
  InvalidParameterValueException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidParameterValueException || (InvalidParameterValueException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));
export var MissingParameterValueException;
(function (MissingParameterValueException) {
  /**
   * @internal
   */
  MissingParameterValueException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MissingParameterValueException || (MissingParameterValueException = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
  /**
   * @internal
   */
  ServiceUnavailableException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var CreateBackupSelectionInput;
(function (CreateBackupSelectionInput) {
  /**
   * @internal
   */
  CreateBackupSelectionInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackupSelectionInput || (CreateBackupSelectionInput = {}));
export var CreateBackupSelectionOutput;
(function (CreateBackupSelectionOutput) {
  /**
   * @internal
   */
  CreateBackupSelectionOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackupSelectionOutput || (CreateBackupSelectionOutput = {}));
export var CreateBackupVaultInput;
(function (CreateBackupVaultInput) {
  /**
   * @internal
   */
  CreateBackupVaultInput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.BackupVaultTags && { BackupVaultTags: SENSITIVE_STRING });
  };
})(CreateBackupVaultInput || (CreateBackupVaultInput = {}));
export var CreateBackupVaultOutput;
(function (CreateBackupVaultOutput) {
  /**
   * @internal
   */
  CreateBackupVaultOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackupVaultOutput || (CreateBackupVaultOutput = {}));
export var DeleteBackupPlanInput;
(function (DeleteBackupPlanInput) {
  /**
   * @internal
   */
  DeleteBackupPlanInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackupPlanInput || (DeleteBackupPlanInput = {}));
export var DeleteBackupPlanOutput;
(function (DeleteBackupPlanOutput) {
  /**
   * @internal
   */
  DeleteBackupPlanOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackupPlanOutput || (DeleteBackupPlanOutput = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
  /**
   * @internal
   */
  InvalidRequestException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidRequestException || (InvalidRequestException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var DeleteBackupSelectionInput;
(function (DeleteBackupSelectionInput) {
  /**
   * @internal
   */
  DeleteBackupSelectionInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackupSelectionInput || (DeleteBackupSelectionInput = {}));
export var DeleteBackupVaultInput;
(function (DeleteBackupVaultInput) {
  /**
   * @internal
   */
  DeleteBackupVaultInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackupVaultInput || (DeleteBackupVaultInput = {}));
export var DeleteBackupVaultAccessPolicyInput;
(function (DeleteBackupVaultAccessPolicyInput) {
  /**
   * @internal
   */
  DeleteBackupVaultAccessPolicyInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackupVaultAccessPolicyInput || (DeleteBackupVaultAccessPolicyInput = {}));
export var DeleteBackupVaultNotificationsInput;
(function (DeleteBackupVaultNotificationsInput) {
  /**
   * @internal
   */
  DeleteBackupVaultNotificationsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackupVaultNotificationsInput || (DeleteBackupVaultNotificationsInput = {}));
export var DeleteRecoveryPointInput;
(function (DeleteRecoveryPointInput) {
  /**
   * @internal
   */
  DeleteRecoveryPointInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteRecoveryPointInput || (DeleteRecoveryPointInput = {}));
export var InvalidResourceStateException;
(function (InvalidResourceStateException) {
  /**
   * @internal
   */
  InvalidResourceStateException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidResourceStateException || (InvalidResourceStateException = {}));
export var DependencyFailureException;
(function (DependencyFailureException) {
  /**
   * @internal
   */
  DependencyFailureException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DependencyFailureException || (DependencyFailureException = {}));
export var DescribeBackupJobInput;
(function (DescribeBackupJobInput) {
  /**
   * @internal
   */
  DescribeBackupJobInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBackupJobInput || (DescribeBackupJobInput = {}));
export var DescribeBackupJobOutput;
(function (DescribeBackupJobOutput) {
  /**
   * @internal
   */
  DescribeBackupJobOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBackupJobOutput || (DescribeBackupJobOutput = {}));
export var DescribeBackupVaultInput;
(function (DescribeBackupVaultInput) {
  /**
   * @internal
   */
  DescribeBackupVaultInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBackupVaultInput || (DescribeBackupVaultInput = {}));
export var DescribeBackupVaultOutput;
(function (DescribeBackupVaultOutput) {
  /**
   * @internal
   */
  DescribeBackupVaultOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBackupVaultOutput || (DescribeBackupVaultOutput = {}));
export var DescribeCopyJobInput;
(function (DescribeCopyJobInput) {
  /**
   * @internal
   */
  DescribeCopyJobInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeCopyJobInput || (DescribeCopyJobInput = {}));
export var DescribeCopyJobOutput;
(function (DescribeCopyJobOutput) {
  /**
   * @internal
   */
  DescribeCopyJobOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeCopyJobOutput || (DescribeCopyJobOutput = {}));
export var DescribeGlobalSettingsInput;
(function (DescribeGlobalSettingsInput) {
  /**
   * @internal
   */
  DescribeGlobalSettingsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeGlobalSettingsInput || (DescribeGlobalSettingsInput = {}));
export var DescribeGlobalSettingsOutput;
(function (DescribeGlobalSettingsOutput) {
  /**
   * @internal
   */
  DescribeGlobalSettingsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeGlobalSettingsOutput || (DescribeGlobalSettingsOutput = {}));
export var DescribeProtectedResourceInput;
(function (DescribeProtectedResourceInput) {
  /**
   * @internal
   */
  DescribeProtectedResourceInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeProtectedResourceInput || (DescribeProtectedResourceInput = {}));
export var DescribeProtectedResourceOutput;
(function (DescribeProtectedResourceOutput) {
  /**
   * @internal
   */
  DescribeProtectedResourceOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeProtectedResourceOutput || (DescribeProtectedResourceOutput = {}));
export var DescribeRecoveryPointInput;
(function (DescribeRecoveryPointInput) {
  /**
   * @internal
   */
  DescribeRecoveryPointInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeRecoveryPointInput || (DescribeRecoveryPointInput = {}));
export var RecoveryPointStatus;
(function (RecoveryPointStatus) {
  RecoveryPointStatus["COMPLETED"] = "COMPLETED";
  RecoveryPointStatus["DELETING"] = "DELETING";
  RecoveryPointStatus["EXPIRED"] = "EXPIRED";
  RecoveryPointStatus["PARTIAL"] = "PARTIAL";
})(RecoveryPointStatus || (RecoveryPointStatus = {}));
export var StorageClass;
(function (StorageClass) {
  StorageClass["COLD"] = "COLD";
  StorageClass["DELETED"] = "DELETED";
  StorageClass["WARM"] = "WARM";
})(StorageClass || (StorageClass = {}));
export var DescribeRecoveryPointOutput;
(function (DescribeRecoveryPointOutput) {
  /**
   * @internal
   */
  DescribeRecoveryPointOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeRecoveryPointOutput || (DescribeRecoveryPointOutput = {}));
export var DescribeRegionSettingsInput;
(function (DescribeRegionSettingsInput) {
  /**
   * @internal
   */
  DescribeRegionSettingsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeRegionSettingsInput || (DescribeRegionSettingsInput = {}));
export var DescribeRegionSettingsOutput;
(function (DescribeRegionSettingsOutput) {
  /**
   * @internal
   */
  DescribeRegionSettingsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeRegionSettingsOutput || (DescribeRegionSettingsOutput = {}));
export var DescribeRestoreJobInput;
(function (DescribeRestoreJobInput) {
  /**
   * @internal
   */
  DescribeRestoreJobInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeRestoreJobInput || (DescribeRestoreJobInput = {}));
export var RestoreJobStatus;
(function (RestoreJobStatus) {
  RestoreJobStatus["ABORTED"] = "ABORTED";
  RestoreJobStatus["COMPLETED"] = "COMPLETED";
  RestoreJobStatus["FAILED"] = "FAILED";
  RestoreJobStatus["PENDING"] = "PENDING";
  RestoreJobStatus["RUNNING"] = "RUNNING";
})(RestoreJobStatus || (RestoreJobStatus = {}));
export var DescribeRestoreJobOutput;
(function (DescribeRestoreJobOutput) {
  /**
   * @internal
   */
  DescribeRestoreJobOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeRestoreJobOutput || (DescribeRestoreJobOutput = {}));
export var DisassociateRecoveryPointInput;
(function (DisassociateRecoveryPointInput) {
  /**
   * @internal
   */
  DisassociateRecoveryPointInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DisassociateRecoveryPointInput || (DisassociateRecoveryPointInput = {}));
export var ExportBackupPlanTemplateInput;
(function (ExportBackupPlanTemplateInput) {
  /**
   * @internal
   */
  ExportBackupPlanTemplateInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExportBackupPlanTemplateInput || (ExportBackupPlanTemplateInput = {}));
export var ExportBackupPlanTemplateOutput;
(function (ExportBackupPlanTemplateOutput) {
  /**
   * @internal
   */
  ExportBackupPlanTemplateOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExportBackupPlanTemplateOutput || (ExportBackupPlanTemplateOutput = {}));
export var GetBackupPlanInput;
(function (GetBackupPlanInput) {
  /**
   * @internal
   */
  GetBackupPlanInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackupPlanInput || (GetBackupPlanInput = {}));
export var GetBackupPlanOutput;
(function (GetBackupPlanOutput) {
  /**
   * @internal
   */
  GetBackupPlanOutput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.BackupPlan && { BackupPlan: BackupPlan.filterSensitiveLog(obj.BackupPlan) });
  };
})(GetBackupPlanOutput || (GetBackupPlanOutput = {}));
export var GetBackupPlanFromJSONInput;
(function (GetBackupPlanFromJSONInput) {
  /**
   * @internal
   */
  GetBackupPlanFromJSONInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackupPlanFromJSONInput || (GetBackupPlanFromJSONInput = {}));
export var GetBackupPlanFromJSONOutput;
(function (GetBackupPlanFromJSONOutput) {
  /**
   * @internal
   */
  GetBackupPlanFromJSONOutput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.BackupPlan && { BackupPlan: BackupPlan.filterSensitiveLog(obj.BackupPlan) });
  };
})(GetBackupPlanFromJSONOutput || (GetBackupPlanFromJSONOutput = {}));
export var GetBackupPlanFromTemplateInput;
(function (GetBackupPlanFromTemplateInput) {
  /**
   * @internal
   */
  GetBackupPlanFromTemplateInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackupPlanFromTemplateInput || (GetBackupPlanFromTemplateInput = {}));
export var GetBackupPlanFromTemplateOutput;
(function (GetBackupPlanFromTemplateOutput) {
  /**
   * @internal
   */
  GetBackupPlanFromTemplateOutput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.BackupPlanDocument && { BackupPlanDocument: BackupPlan.filterSensitiveLog(obj.BackupPlanDocument) }
    );
  };
})(GetBackupPlanFromTemplateOutput || (GetBackupPlanFromTemplateOutput = {}));
export var GetBackupSelectionInput;
(function (GetBackupSelectionInput) {
  /**
   * @internal
   */
  GetBackupSelectionInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackupSelectionInput || (GetBackupSelectionInput = {}));
export var GetBackupSelectionOutput;
(function (GetBackupSelectionOutput) {
  /**
   * @internal
   */
  GetBackupSelectionOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackupSelectionOutput || (GetBackupSelectionOutput = {}));
export var GetBackupVaultAccessPolicyInput;
(function (GetBackupVaultAccessPolicyInput) {
  /**
   * @internal
   */
  GetBackupVaultAccessPolicyInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackupVaultAccessPolicyInput || (GetBackupVaultAccessPolicyInput = {}));
export var GetBackupVaultAccessPolicyOutput;
(function (GetBackupVaultAccessPolicyOutput) {
  /**
   * @internal
   */
  GetBackupVaultAccessPolicyOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackupVaultAccessPolicyOutput || (GetBackupVaultAccessPolicyOutput = {}));
export var GetBackupVaultNotificationsInput;
(function (GetBackupVaultNotificationsInput) {
  /**
   * @internal
   */
  GetBackupVaultNotificationsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackupVaultNotificationsInput || (GetBackupVaultNotificationsInput = {}));
export var GetBackupVaultNotificationsOutput;
(function (GetBackupVaultNotificationsOutput) {
  /**
   * @internal
   */
  GetBackupVaultNotificationsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackupVaultNotificationsOutput || (GetBackupVaultNotificationsOutput = {}));
export var GetRecoveryPointRestoreMetadataInput;
(function (GetRecoveryPointRestoreMetadataInput) {
  /**
   * @internal
   */
  GetRecoveryPointRestoreMetadataInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetRecoveryPointRestoreMetadataInput || (GetRecoveryPointRestoreMetadataInput = {}));
export var GetRecoveryPointRestoreMetadataOutput;
(function (GetRecoveryPointRestoreMetadataOutput) {
  /**
   * @internal
   */
  GetRecoveryPointRestoreMetadataOutput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.RestoreMetadata && { RestoreMetadata: SENSITIVE_STRING });
  };
})(GetRecoveryPointRestoreMetadataOutput || (GetRecoveryPointRestoreMetadataOutput = {}));
export var GetSupportedResourceTypesOutput;
(function (GetSupportedResourceTypesOutput) {
  /**
   * @internal
   */
  GetSupportedResourceTypesOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetSupportedResourceTypesOutput || (GetSupportedResourceTypesOutput = {}));
export var ListBackupJobsInput;
(function (ListBackupJobsInput) {
  /**
   * @internal
   */
  ListBackupJobsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackupJobsInput || (ListBackupJobsInput = {}));
export var ListBackupJobsOutput;
(function (ListBackupJobsOutput) {
  /**
   * @internal
   */
  ListBackupJobsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackupJobsOutput || (ListBackupJobsOutput = {}));
export var ListBackupPlansInput;
(function (ListBackupPlansInput) {
  /**
   * @internal
   */
  ListBackupPlansInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackupPlansInput || (ListBackupPlansInput = {}));
export var ListBackupPlansOutput;
(function (ListBackupPlansOutput) {
  /**
   * @internal
   */
  ListBackupPlansOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackupPlansOutput || (ListBackupPlansOutput = {}));
export var ListBackupPlanTemplatesInput;
(function (ListBackupPlanTemplatesInput) {
  /**
   * @internal
   */
  ListBackupPlanTemplatesInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackupPlanTemplatesInput || (ListBackupPlanTemplatesInput = {}));
export var ListBackupPlanTemplatesOutput;
(function (ListBackupPlanTemplatesOutput) {
  /**
   * @internal
   */
  ListBackupPlanTemplatesOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackupPlanTemplatesOutput || (ListBackupPlanTemplatesOutput = {}));
export var ListBackupPlanVersionsInput;
(function (ListBackupPlanVersionsInput) {
  /**
   * @internal
   */
  ListBackupPlanVersionsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackupPlanVersionsInput || (ListBackupPlanVersionsInput = {}));
export var ListBackupPlanVersionsOutput;
(function (ListBackupPlanVersionsOutput) {
  /**
   * @internal
   */
  ListBackupPlanVersionsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackupPlanVersionsOutput || (ListBackupPlanVersionsOutput = {}));
export var ListBackupSelectionsInput;
(function (ListBackupSelectionsInput) {
  /**
   * @internal
   */
  ListBackupSelectionsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackupSelectionsInput || (ListBackupSelectionsInput = {}));
export var ListBackupSelectionsOutput;
(function (ListBackupSelectionsOutput) {
  /**
   * @internal
   */
  ListBackupSelectionsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackupSelectionsOutput || (ListBackupSelectionsOutput = {}));
export var ListBackupVaultsInput;
(function (ListBackupVaultsInput) {
  /**
   * @internal
   */
  ListBackupVaultsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackupVaultsInput || (ListBackupVaultsInput = {}));
export var ListBackupVaultsOutput;
(function (ListBackupVaultsOutput) {
  /**
   * @internal
   */
  ListBackupVaultsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackupVaultsOutput || (ListBackupVaultsOutput = {}));
export var ListCopyJobsInput;
(function (ListCopyJobsInput) {
  /**
   * @internal
   */
  ListCopyJobsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListCopyJobsInput || (ListCopyJobsInput = {}));
export var ListCopyJobsOutput;
(function (ListCopyJobsOutput) {
  /**
   * @internal
   */
  ListCopyJobsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListCopyJobsOutput || (ListCopyJobsOutput = {}));
export var ListProtectedResourcesInput;
(function (ListProtectedResourcesInput) {
  /**
   * @internal
   */
  ListProtectedResourcesInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListProtectedResourcesInput || (ListProtectedResourcesInput = {}));
export var ProtectedResource;
(function (ProtectedResource) {
  /**
   * @internal
   */
  ProtectedResource.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ProtectedResource || (ProtectedResource = {}));
export var ListProtectedResourcesOutput;
(function (ListProtectedResourcesOutput) {
  /**
   * @internal
   */
  ListProtectedResourcesOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListProtectedResourcesOutput || (ListProtectedResourcesOutput = {}));
export var ListRecoveryPointsByBackupVaultInput;
(function (ListRecoveryPointsByBackupVaultInput) {
  /**
   * @internal
   */
  ListRecoveryPointsByBackupVaultInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListRecoveryPointsByBackupVaultInput || (ListRecoveryPointsByBackupVaultInput = {}));
export var RecoveryPointByBackupVault;
(function (RecoveryPointByBackupVault) {
  /**
   * @internal
   */
  RecoveryPointByBackupVault.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RecoveryPointByBackupVault || (RecoveryPointByBackupVault = {}));
export var ListRecoveryPointsByBackupVaultOutput;
(function (ListRecoveryPointsByBackupVaultOutput) {
  /**
   * @internal
   */
  ListRecoveryPointsByBackupVaultOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListRecoveryPointsByBackupVaultOutput || (ListRecoveryPointsByBackupVaultOutput = {}));
export var ListRecoveryPointsByResourceInput;
(function (ListRecoveryPointsByResourceInput) {
  /**
   * @internal
   */
  ListRecoveryPointsByResourceInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListRecoveryPointsByResourceInput || (ListRecoveryPointsByResourceInput = {}));
export var RecoveryPointByResource;
(function (RecoveryPointByResource) {
  /**
   * @internal
   */
  RecoveryPointByResource.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RecoveryPointByResource || (RecoveryPointByResource = {}));
export var ListRecoveryPointsByResourceOutput;
(function (ListRecoveryPointsByResourceOutput) {
  /**
   * @internal
   */
  ListRecoveryPointsByResourceOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListRecoveryPointsByResourceOutput || (ListRecoveryPointsByResourceOutput = {}));
export var ListRestoreJobsInput;
(function (ListRestoreJobsInput) {
  /**
   * @internal
   */
  ListRestoreJobsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListRestoreJobsInput || (ListRestoreJobsInput = {}));
export var RestoreJobsListMember;
(function (RestoreJobsListMember) {
  /**
   * @internal
   */
  RestoreJobsListMember.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RestoreJobsListMember || (RestoreJobsListMember = {}));
export var ListRestoreJobsOutput;
(function (ListRestoreJobsOutput) {
  /**
   * @internal
   */
  ListRestoreJobsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListRestoreJobsOutput || (ListRestoreJobsOutput = {}));
export var ListTagsInput;
(function (ListTagsInput) {
  /**
   * @internal
   */
  ListTagsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsInput || (ListTagsInput = {}));
export var ListTagsOutput;
(function (ListTagsOutput) {
  /**
   * @internal
   */
  ListTagsOutput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Tags && { Tags: SENSITIVE_STRING });
  };
})(ListTagsOutput || (ListTagsOutput = {}));
export var PutBackupVaultAccessPolicyInput;
(function (PutBackupVaultAccessPolicyInput) {
  /**
   * @internal
   */
  PutBackupVaultAccessPolicyInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutBackupVaultAccessPolicyInput || (PutBackupVaultAccessPolicyInput = {}));
export var PutBackupVaultNotificationsInput;
(function (PutBackupVaultNotificationsInput) {
  /**
   * @internal
   */
  PutBackupVaultNotificationsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutBackupVaultNotificationsInput || (PutBackupVaultNotificationsInput = {}));
export var StartBackupJobInput;
(function (StartBackupJobInput) {
  /**
   * @internal
   */
  StartBackupJobInput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.RecoveryPointTags && { RecoveryPointTags: SENSITIVE_STRING });
  };
})(StartBackupJobInput || (StartBackupJobInput = {}));
export var StartBackupJobOutput;
(function (StartBackupJobOutput) {
  /**
   * @internal
   */
  StartBackupJobOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartBackupJobOutput || (StartBackupJobOutput = {}));
export var StartCopyJobInput;
(function (StartCopyJobInput) {
  /**
   * @internal
   */
  StartCopyJobInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartCopyJobInput || (StartCopyJobInput = {}));
export var StartCopyJobOutput;
(function (StartCopyJobOutput) {
  /**
   * @internal
   */
  StartCopyJobOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartCopyJobOutput || (StartCopyJobOutput = {}));
export var StartRestoreJobInput;
(function (StartRestoreJobInput) {
  /**
   * @internal
   */
  StartRestoreJobInput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Metadata && { Metadata: SENSITIVE_STRING });
  };
})(StartRestoreJobInput || (StartRestoreJobInput = {}));
export var StartRestoreJobOutput;
(function (StartRestoreJobOutput) {
  /**
   * @internal
   */
  StartRestoreJobOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartRestoreJobOutput || (StartRestoreJobOutput = {}));
export var StopBackupJobInput;
(function (StopBackupJobInput) {
  /**
   * @internal
   */
  StopBackupJobInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StopBackupJobInput || (StopBackupJobInput = {}));
export var TagResourceInput;
(function (TagResourceInput) {
  /**
   * @internal
   */
  TagResourceInput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Tags && { Tags: SENSITIVE_STRING });
  };
})(TagResourceInput || (TagResourceInput = {}));
export var UntagResourceInput;
(function (UntagResourceInput) {
  /**
   * @internal
   */
  UntagResourceInput.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.TagKeyList && { TagKeyList: SENSITIVE_STRING });
  };
})(UntagResourceInput || (UntagResourceInput = {}));
export var UpdateBackupPlanInput;
(function (UpdateBackupPlanInput) {
  /**
   * @internal
   */
  UpdateBackupPlanInput.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.BackupPlan && { BackupPlan: BackupPlanInput.filterSensitiveLog(obj.BackupPlan) }
    );
  };
})(UpdateBackupPlanInput || (UpdateBackupPlanInput = {}));
export var UpdateBackupPlanOutput;
(function (UpdateBackupPlanOutput) {
  /**
   * @internal
   */
  UpdateBackupPlanOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackupPlanOutput || (UpdateBackupPlanOutput = {}));
export var UpdateGlobalSettingsInput;
(function (UpdateGlobalSettingsInput) {
  /**
   * @internal
   */
  UpdateGlobalSettingsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateGlobalSettingsInput || (UpdateGlobalSettingsInput = {}));
export var UpdateRecoveryPointLifecycleInput;
(function (UpdateRecoveryPointLifecycleInput) {
  /**
   * @internal
   */
  UpdateRecoveryPointLifecycleInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateRecoveryPointLifecycleInput || (UpdateRecoveryPointLifecycleInput = {}));
export var UpdateRecoveryPointLifecycleOutput;
(function (UpdateRecoveryPointLifecycleOutput) {
  /**
   * @internal
   */
  UpdateRecoveryPointLifecycleOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateRecoveryPointLifecycleOutput || (UpdateRecoveryPointLifecycleOutput = {}));
export var UpdateRegionSettingsInput;
(function (UpdateRegionSettingsInput) {
  /**
   * @internal
   */
  UpdateRegionSettingsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateRegionSettingsInput || (UpdateRegionSettingsInput = {}));
//# sourceMappingURL=models_0.js.map
