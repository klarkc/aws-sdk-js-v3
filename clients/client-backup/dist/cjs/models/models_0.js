"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeGlobalSettingsInput =
  exports.DescribeCopyJobOutput =
  exports.DescribeCopyJobInput =
  exports.DescribeBackupVaultOutput =
  exports.DescribeBackupVaultInput =
  exports.DescribeBackupJobOutput =
  exports.DescribeBackupJobInput =
  exports.DependencyFailureException =
  exports.InvalidResourceStateException =
  exports.DeleteRecoveryPointInput =
  exports.DeleteBackupVaultNotificationsInput =
  exports.DeleteBackupVaultAccessPolicyInput =
  exports.DeleteBackupVaultInput =
  exports.DeleteBackupSelectionInput =
  exports.ResourceNotFoundException =
  exports.InvalidRequestException =
  exports.DeleteBackupPlanOutput =
  exports.DeleteBackupPlanInput =
  exports.CreateBackupVaultOutput =
  exports.CreateBackupVaultInput =
  exports.CreateBackupSelectionOutput =
  exports.CreateBackupSelectionInput =
  exports.ServiceUnavailableException =
  exports.MissingParameterValueException =
  exports.LimitExceededException =
  exports.InvalidParameterValueException =
  exports.CreateBackupPlanOutput =
  exports.CreateBackupPlanInput =
  exports.CopyJob =
  exports.CopyJobState =
  exports.CalculatedLifecycle =
  exports.BackupVaultListMember =
  exports.BackupVaultEvent =
  exports.BackupSelectionsListMember =
  exports.BackupSelection =
  exports.Condition =
  exports.ConditionType =
  exports.BackupPlanTemplatesListMember =
  exports.BackupPlansListMember =
  exports.BackupPlanInput =
  exports.BackupRuleInput =
  exports.BackupPlan =
  exports.BackupRule =
  exports.CopyAction =
  exports.Lifecycle =
  exports.BackupJob =
  exports.BackupJobState =
  exports.RecoveryPointCreator =
  exports.AlreadyExistsException =
  exports.AdvancedBackupSetting =
    void 0;
exports.ListRecoveryPointsByBackupVaultOutput =
  exports.RecoveryPointByBackupVault =
  exports.ListRecoveryPointsByBackupVaultInput =
  exports.ListProtectedResourcesOutput =
  exports.ProtectedResource =
  exports.ListProtectedResourcesInput =
  exports.ListCopyJobsOutput =
  exports.ListCopyJobsInput =
  exports.ListBackupVaultsOutput =
  exports.ListBackupVaultsInput =
  exports.ListBackupSelectionsOutput =
  exports.ListBackupSelectionsInput =
  exports.ListBackupPlanVersionsOutput =
  exports.ListBackupPlanVersionsInput =
  exports.ListBackupPlanTemplatesOutput =
  exports.ListBackupPlanTemplatesInput =
  exports.ListBackupPlansOutput =
  exports.ListBackupPlansInput =
  exports.ListBackupJobsOutput =
  exports.ListBackupJobsInput =
  exports.GetSupportedResourceTypesOutput =
  exports.GetRecoveryPointRestoreMetadataOutput =
  exports.GetRecoveryPointRestoreMetadataInput =
  exports.GetBackupVaultNotificationsOutput =
  exports.GetBackupVaultNotificationsInput =
  exports.GetBackupVaultAccessPolicyOutput =
  exports.GetBackupVaultAccessPolicyInput =
  exports.GetBackupSelectionOutput =
  exports.GetBackupSelectionInput =
  exports.GetBackupPlanFromTemplateOutput =
  exports.GetBackupPlanFromTemplateInput =
  exports.GetBackupPlanFromJSONOutput =
  exports.GetBackupPlanFromJSONInput =
  exports.GetBackupPlanOutput =
  exports.GetBackupPlanInput =
  exports.ExportBackupPlanTemplateOutput =
  exports.ExportBackupPlanTemplateInput =
  exports.DisassociateRecoveryPointInput =
  exports.DescribeRestoreJobOutput =
  exports.RestoreJobStatus =
  exports.DescribeRestoreJobInput =
  exports.DescribeRegionSettingsOutput =
  exports.DescribeRegionSettingsInput =
  exports.DescribeRecoveryPointOutput =
  exports.StorageClass =
  exports.RecoveryPointStatus =
  exports.DescribeRecoveryPointInput =
  exports.DescribeProtectedResourceOutput =
  exports.DescribeProtectedResourceInput =
  exports.DescribeGlobalSettingsOutput =
    void 0;
exports.UpdateRegionSettingsInput =
  exports.UpdateRecoveryPointLifecycleOutput =
  exports.UpdateRecoveryPointLifecycleInput =
  exports.UpdateGlobalSettingsInput =
  exports.UpdateBackupPlanOutput =
  exports.UpdateBackupPlanInput =
  exports.UntagResourceInput =
  exports.TagResourceInput =
  exports.StopBackupJobInput =
  exports.StartRestoreJobOutput =
  exports.StartRestoreJobInput =
  exports.StartCopyJobOutput =
  exports.StartCopyJobInput =
  exports.StartBackupJobOutput =
  exports.StartBackupJobInput =
  exports.PutBackupVaultNotificationsInput =
  exports.PutBackupVaultAccessPolicyInput =
  exports.ListTagsOutput =
  exports.ListTagsInput =
  exports.ListRestoreJobsOutput =
  exports.RestoreJobsListMember =
  exports.ListRestoreJobsInput =
  exports.ListRecoveryPointsByResourceOutput =
  exports.RecoveryPointByResource =
  exports.ListRecoveryPointsByResourceInput =
    void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AdvancedBackupSetting;
(function (AdvancedBackupSetting) {
  /**
   * @internal
   */
  AdvancedBackupSetting.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AdvancedBackupSetting = exports.AdvancedBackupSetting || (exports.AdvancedBackupSetting = {})));
var AlreadyExistsException;
(function (AlreadyExistsException) {
  /**
   * @internal
   */
  AlreadyExistsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AlreadyExistsException = exports.AlreadyExistsException || (exports.AlreadyExistsException = {})));
var RecoveryPointCreator;
(function (RecoveryPointCreator) {
  /**
   * @internal
   */
  RecoveryPointCreator.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RecoveryPointCreator = exports.RecoveryPointCreator || (exports.RecoveryPointCreator = {})));
var BackupJobState;
(function (BackupJobState) {
  BackupJobState["ABORTED"] = "ABORTED";
  BackupJobState["ABORTING"] = "ABORTING";
  BackupJobState["COMPLETED"] = "COMPLETED";
  BackupJobState["CREATED"] = "CREATED";
  BackupJobState["EXPIRED"] = "EXPIRED";
  BackupJobState["FAILED"] = "FAILED";
  BackupJobState["PENDING"] = "PENDING";
  BackupJobState["RUNNING"] = "RUNNING";
})((BackupJobState = exports.BackupJobState || (exports.BackupJobState = {})));
var BackupJob;
(function (BackupJob) {
  /**
   * @internal
   */
  BackupJob.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BackupJob = exports.BackupJob || (exports.BackupJob = {})));
var Lifecycle;
(function (Lifecycle) {
  /**
   * @internal
   */
  Lifecycle.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Lifecycle = exports.Lifecycle || (exports.Lifecycle = {})));
var CopyAction;
(function (CopyAction) {
  /**
   * @internal
   */
  CopyAction.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CopyAction = exports.CopyAction || (exports.CopyAction = {})));
var BackupRule;
(function (BackupRule) {
  /**
   * @internal
   */
  BackupRule.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RecoveryPointTags && { RecoveryPointTags: smithy_client_1.SENSITIVE_STRING }),
  });
})((BackupRule = exports.BackupRule || (exports.BackupRule = {})));
var BackupPlan;
(function (BackupPlan) {
  /**
   * @internal
   */
  BackupPlan.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => BackupRule.filterSensitiveLog(item)) }),
  });
})((BackupPlan = exports.BackupPlan || (exports.BackupPlan = {})));
var BackupRuleInput;
(function (BackupRuleInput) {
  /**
   * @internal
   */
  BackupRuleInput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RecoveryPointTags && { RecoveryPointTags: smithy_client_1.SENSITIVE_STRING }),
  });
})((BackupRuleInput = exports.BackupRuleInput || (exports.BackupRuleInput = {})));
var BackupPlanInput;
(function (BackupPlanInput) {
  /**
   * @internal
   */
  BackupPlanInput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => BackupRuleInput.filterSensitiveLog(item)) }),
  });
})((BackupPlanInput = exports.BackupPlanInput || (exports.BackupPlanInput = {})));
var BackupPlansListMember;
(function (BackupPlansListMember) {
  /**
   * @internal
   */
  BackupPlansListMember.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BackupPlansListMember = exports.BackupPlansListMember || (exports.BackupPlansListMember = {})));
var BackupPlanTemplatesListMember;
(function (BackupPlanTemplatesListMember) {
  /**
   * @internal
   */
  BackupPlanTemplatesListMember.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BackupPlanTemplatesListMember =
    exports.BackupPlanTemplatesListMember || (exports.BackupPlanTemplatesListMember = {}))
);
var ConditionType;
(function (ConditionType) {
  ConditionType["STRINGEQUALS"] = "STRINGEQUALS";
})((ConditionType = exports.ConditionType || (exports.ConditionType = {})));
var Condition;
(function (Condition) {
  /**
   * @internal
   */
  Condition.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Condition = exports.Condition || (exports.Condition = {})));
var BackupSelection;
(function (BackupSelection) {
  /**
   * @internal
   */
  BackupSelection.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BackupSelection = exports.BackupSelection || (exports.BackupSelection = {})));
var BackupSelectionsListMember;
(function (BackupSelectionsListMember) {
  /**
   * @internal
   */
  BackupSelectionsListMember.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BackupSelectionsListMember = exports.BackupSelectionsListMember || (exports.BackupSelectionsListMember = {})));
var BackupVaultEvent;
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
})((BackupVaultEvent = exports.BackupVaultEvent || (exports.BackupVaultEvent = {})));
var BackupVaultListMember;
(function (BackupVaultListMember) {
  /**
   * @internal
   */
  BackupVaultListMember.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BackupVaultListMember = exports.BackupVaultListMember || (exports.BackupVaultListMember = {})));
var CalculatedLifecycle;
(function (CalculatedLifecycle) {
  /**
   * @internal
   */
  CalculatedLifecycle.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CalculatedLifecycle = exports.CalculatedLifecycle || (exports.CalculatedLifecycle = {})));
var CopyJobState;
(function (CopyJobState) {
  CopyJobState["COMPLETED"] = "COMPLETED";
  CopyJobState["CREATED"] = "CREATED";
  CopyJobState["FAILED"] = "FAILED";
  CopyJobState["RUNNING"] = "RUNNING";
})((CopyJobState = exports.CopyJobState || (exports.CopyJobState = {})));
var CopyJob;
(function (CopyJob) {
  /**
   * @internal
   */
  CopyJob.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CopyJob = exports.CopyJob || (exports.CopyJob = {})));
var CreateBackupPlanInput;
(function (CreateBackupPlanInput) {
  /**
   * @internal
   */
  CreateBackupPlanInput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.BackupPlan && { BackupPlan: BackupPlanInput.filterSensitiveLog(obj.BackupPlan) }),
    ...(obj.BackupPlanTags && { BackupPlanTags: smithy_client_1.SENSITIVE_STRING }),
  });
})((CreateBackupPlanInput = exports.CreateBackupPlanInput || (exports.CreateBackupPlanInput = {})));
var CreateBackupPlanOutput;
(function (CreateBackupPlanOutput) {
  /**
   * @internal
   */
  CreateBackupPlanOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBackupPlanOutput = exports.CreateBackupPlanOutput || (exports.CreateBackupPlanOutput = {})));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
  /**
   * @internal
   */
  InvalidParameterValueException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidParameterValueException =
    exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}))
);
var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {})));
var MissingParameterValueException;
(function (MissingParameterValueException) {
  /**
   * @internal
   */
  MissingParameterValueException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (MissingParameterValueException =
    exports.MissingParameterValueException || (exports.MissingParameterValueException = {}))
);
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
  /**
   * @internal
   */
  ServiceUnavailableException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {})));
var CreateBackupSelectionInput;
(function (CreateBackupSelectionInput) {
  /**
   * @internal
   */
  CreateBackupSelectionInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBackupSelectionInput = exports.CreateBackupSelectionInput || (exports.CreateBackupSelectionInput = {})));
var CreateBackupSelectionOutput;
(function (CreateBackupSelectionOutput) {
  /**
   * @internal
   */
  CreateBackupSelectionOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBackupSelectionOutput = exports.CreateBackupSelectionOutput || (exports.CreateBackupSelectionOutput = {})));
var CreateBackupVaultInput;
(function (CreateBackupVaultInput) {
  /**
   * @internal
   */
  CreateBackupVaultInput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.BackupVaultTags && { BackupVaultTags: smithy_client_1.SENSITIVE_STRING }),
  });
})((CreateBackupVaultInput = exports.CreateBackupVaultInput || (exports.CreateBackupVaultInput = {})));
var CreateBackupVaultOutput;
(function (CreateBackupVaultOutput) {
  /**
   * @internal
   */
  CreateBackupVaultOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBackupVaultOutput = exports.CreateBackupVaultOutput || (exports.CreateBackupVaultOutput = {})));
var DeleteBackupPlanInput;
(function (DeleteBackupPlanInput) {
  /**
   * @internal
   */
  DeleteBackupPlanInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBackupPlanInput = exports.DeleteBackupPlanInput || (exports.DeleteBackupPlanInput = {})));
var DeleteBackupPlanOutput;
(function (DeleteBackupPlanOutput) {
  /**
   * @internal
   */
  DeleteBackupPlanOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBackupPlanOutput = exports.DeleteBackupPlanOutput || (exports.DeleteBackupPlanOutput = {})));
var InvalidRequestException;
(function (InvalidRequestException) {
  /**
   * @internal
   */
  InvalidRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {})));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var DeleteBackupSelectionInput;
(function (DeleteBackupSelectionInput) {
  /**
   * @internal
   */
  DeleteBackupSelectionInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBackupSelectionInput = exports.DeleteBackupSelectionInput || (exports.DeleteBackupSelectionInput = {})));
var DeleteBackupVaultInput;
(function (DeleteBackupVaultInput) {
  /**
   * @internal
   */
  DeleteBackupVaultInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBackupVaultInput = exports.DeleteBackupVaultInput || (exports.DeleteBackupVaultInput = {})));
var DeleteBackupVaultAccessPolicyInput;
(function (DeleteBackupVaultAccessPolicyInput) {
  /**
   * @internal
   */
  DeleteBackupVaultAccessPolicyInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteBackupVaultAccessPolicyInput =
    exports.DeleteBackupVaultAccessPolicyInput || (exports.DeleteBackupVaultAccessPolicyInput = {}))
);
var DeleteBackupVaultNotificationsInput;
(function (DeleteBackupVaultNotificationsInput) {
  /**
   * @internal
   */
  DeleteBackupVaultNotificationsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteBackupVaultNotificationsInput =
    exports.DeleteBackupVaultNotificationsInput || (exports.DeleteBackupVaultNotificationsInput = {}))
);
var DeleteRecoveryPointInput;
(function (DeleteRecoveryPointInput) {
  /**
   * @internal
   */
  DeleteRecoveryPointInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteRecoveryPointInput = exports.DeleteRecoveryPointInput || (exports.DeleteRecoveryPointInput = {})));
var InvalidResourceStateException;
(function (InvalidResourceStateException) {
  /**
   * @internal
   */
  InvalidResourceStateException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidResourceStateException =
    exports.InvalidResourceStateException || (exports.InvalidResourceStateException = {}))
);
var DependencyFailureException;
(function (DependencyFailureException) {
  /**
   * @internal
   */
  DependencyFailureException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DependencyFailureException = exports.DependencyFailureException || (exports.DependencyFailureException = {})));
var DescribeBackupJobInput;
(function (DescribeBackupJobInput) {
  /**
   * @internal
   */
  DescribeBackupJobInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeBackupJobInput = exports.DescribeBackupJobInput || (exports.DescribeBackupJobInput = {})));
var DescribeBackupJobOutput;
(function (DescribeBackupJobOutput) {
  /**
   * @internal
   */
  DescribeBackupJobOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeBackupJobOutput = exports.DescribeBackupJobOutput || (exports.DescribeBackupJobOutput = {})));
var DescribeBackupVaultInput;
(function (DescribeBackupVaultInput) {
  /**
   * @internal
   */
  DescribeBackupVaultInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeBackupVaultInput = exports.DescribeBackupVaultInput || (exports.DescribeBackupVaultInput = {})));
var DescribeBackupVaultOutput;
(function (DescribeBackupVaultOutput) {
  /**
   * @internal
   */
  DescribeBackupVaultOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeBackupVaultOutput = exports.DescribeBackupVaultOutput || (exports.DescribeBackupVaultOutput = {})));
var DescribeCopyJobInput;
(function (DescribeCopyJobInput) {
  /**
   * @internal
   */
  DescribeCopyJobInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeCopyJobInput = exports.DescribeCopyJobInput || (exports.DescribeCopyJobInput = {})));
var DescribeCopyJobOutput;
(function (DescribeCopyJobOutput) {
  /**
   * @internal
   */
  DescribeCopyJobOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeCopyJobOutput = exports.DescribeCopyJobOutput || (exports.DescribeCopyJobOutput = {})));
var DescribeGlobalSettingsInput;
(function (DescribeGlobalSettingsInput) {
  /**
   * @internal
   */
  DescribeGlobalSettingsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeGlobalSettingsInput = exports.DescribeGlobalSettingsInput || (exports.DescribeGlobalSettingsInput = {})));
var DescribeGlobalSettingsOutput;
(function (DescribeGlobalSettingsOutput) {
  /**
   * @internal
   */
  DescribeGlobalSettingsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeGlobalSettingsOutput = exports.DescribeGlobalSettingsOutput || (exports.DescribeGlobalSettingsOutput = {}))
);
var DescribeProtectedResourceInput;
(function (DescribeProtectedResourceInput) {
  /**
   * @internal
   */
  DescribeProtectedResourceInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeProtectedResourceInput =
    exports.DescribeProtectedResourceInput || (exports.DescribeProtectedResourceInput = {}))
);
var DescribeProtectedResourceOutput;
(function (DescribeProtectedResourceOutput) {
  /**
   * @internal
   */
  DescribeProtectedResourceOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeProtectedResourceOutput =
    exports.DescribeProtectedResourceOutput || (exports.DescribeProtectedResourceOutput = {}))
);
var DescribeRecoveryPointInput;
(function (DescribeRecoveryPointInput) {
  /**
   * @internal
   */
  DescribeRecoveryPointInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeRecoveryPointInput = exports.DescribeRecoveryPointInput || (exports.DescribeRecoveryPointInput = {})));
var RecoveryPointStatus;
(function (RecoveryPointStatus) {
  RecoveryPointStatus["COMPLETED"] = "COMPLETED";
  RecoveryPointStatus["DELETING"] = "DELETING";
  RecoveryPointStatus["EXPIRED"] = "EXPIRED";
  RecoveryPointStatus["PARTIAL"] = "PARTIAL";
})((RecoveryPointStatus = exports.RecoveryPointStatus || (exports.RecoveryPointStatus = {})));
var StorageClass;
(function (StorageClass) {
  StorageClass["COLD"] = "COLD";
  StorageClass["DELETED"] = "DELETED";
  StorageClass["WARM"] = "WARM";
})((StorageClass = exports.StorageClass || (exports.StorageClass = {})));
var DescribeRecoveryPointOutput;
(function (DescribeRecoveryPointOutput) {
  /**
   * @internal
   */
  DescribeRecoveryPointOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeRecoveryPointOutput = exports.DescribeRecoveryPointOutput || (exports.DescribeRecoveryPointOutput = {})));
var DescribeRegionSettingsInput;
(function (DescribeRegionSettingsInput) {
  /**
   * @internal
   */
  DescribeRegionSettingsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeRegionSettingsInput = exports.DescribeRegionSettingsInput || (exports.DescribeRegionSettingsInput = {})));
var DescribeRegionSettingsOutput;
(function (DescribeRegionSettingsOutput) {
  /**
   * @internal
   */
  DescribeRegionSettingsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeRegionSettingsOutput = exports.DescribeRegionSettingsOutput || (exports.DescribeRegionSettingsOutput = {}))
);
var DescribeRestoreJobInput;
(function (DescribeRestoreJobInput) {
  /**
   * @internal
   */
  DescribeRestoreJobInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeRestoreJobInput = exports.DescribeRestoreJobInput || (exports.DescribeRestoreJobInput = {})));
var RestoreJobStatus;
(function (RestoreJobStatus) {
  RestoreJobStatus["ABORTED"] = "ABORTED";
  RestoreJobStatus["COMPLETED"] = "COMPLETED";
  RestoreJobStatus["FAILED"] = "FAILED";
  RestoreJobStatus["PENDING"] = "PENDING";
  RestoreJobStatus["RUNNING"] = "RUNNING";
})((RestoreJobStatus = exports.RestoreJobStatus || (exports.RestoreJobStatus = {})));
var DescribeRestoreJobOutput;
(function (DescribeRestoreJobOutput) {
  /**
   * @internal
   */
  DescribeRestoreJobOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeRestoreJobOutput = exports.DescribeRestoreJobOutput || (exports.DescribeRestoreJobOutput = {})));
var DisassociateRecoveryPointInput;
(function (DisassociateRecoveryPointInput) {
  /**
   * @internal
   */
  DisassociateRecoveryPointInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateRecoveryPointInput =
    exports.DisassociateRecoveryPointInput || (exports.DisassociateRecoveryPointInput = {}))
);
var ExportBackupPlanTemplateInput;
(function (ExportBackupPlanTemplateInput) {
  /**
   * @internal
   */
  ExportBackupPlanTemplateInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ExportBackupPlanTemplateInput =
    exports.ExportBackupPlanTemplateInput || (exports.ExportBackupPlanTemplateInput = {}))
);
var ExportBackupPlanTemplateOutput;
(function (ExportBackupPlanTemplateOutput) {
  /**
   * @internal
   */
  ExportBackupPlanTemplateOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ExportBackupPlanTemplateOutput =
    exports.ExportBackupPlanTemplateOutput || (exports.ExportBackupPlanTemplateOutput = {}))
);
var GetBackupPlanInput;
(function (GetBackupPlanInput) {
  /**
   * @internal
   */
  GetBackupPlanInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBackupPlanInput = exports.GetBackupPlanInput || (exports.GetBackupPlanInput = {})));
var GetBackupPlanOutput;
(function (GetBackupPlanOutput) {
  /**
   * @internal
   */
  GetBackupPlanOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.BackupPlan && { BackupPlan: BackupPlan.filterSensitiveLog(obj.BackupPlan) }),
  });
})((GetBackupPlanOutput = exports.GetBackupPlanOutput || (exports.GetBackupPlanOutput = {})));
var GetBackupPlanFromJSONInput;
(function (GetBackupPlanFromJSONInput) {
  /**
   * @internal
   */
  GetBackupPlanFromJSONInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBackupPlanFromJSONInput = exports.GetBackupPlanFromJSONInput || (exports.GetBackupPlanFromJSONInput = {})));
var GetBackupPlanFromJSONOutput;
(function (GetBackupPlanFromJSONOutput) {
  /**
   * @internal
   */
  GetBackupPlanFromJSONOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.BackupPlan && { BackupPlan: BackupPlan.filterSensitiveLog(obj.BackupPlan) }),
  });
})((GetBackupPlanFromJSONOutput = exports.GetBackupPlanFromJSONOutput || (exports.GetBackupPlanFromJSONOutput = {})));
var GetBackupPlanFromTemplateInput;
(function (GetBackupPlanFromTemplateInput) {
  /**
   * @internal
   */
  GetBackupPlanFromTemplateInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetBackupPlanFromTemplateInput =
    exports.GetBackupPlanFromTemplateInput || (exports.GetBackupPlanFromTemplateInput = {}))
);
var GetBackupPlanFromTemplateOutput;
(function (GetBackupPlanFromTemplateOutput) {
  /**
   * @internal
   */
  GetBackupPlanFromTemplateOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.BackupPlanDocument && { BackupPlanDocument: BackupPlan.filterSensitiveLog(obj.BackupPlanDocument) }),
  });
})(
  (GetBackupPlanFromTemplateOutput =
    exports.GetBackupPlanFromTemplateOutput || (exports.GetBackupPlanFromTemplateOutput = {}))
);
var GetBackupSelectionInput;
(function (GetBackupSelectionInput) {
  /**
   * @internal
   */
  GetBackupSelectionInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBackupSelectionInput = exports.GetBackupSelectionInput || (exports.GetBackupSelectionInput = {})));
var GetBackupSelectionOutput;
(function (GetBackupSelectionOutput) {
  /**
   * @internal
   */
  GetBackupSelectionOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBackupSelectionOutput = exports.GetBackupSelectionOutput || (exports.GetBackupSelectionOutput = {})));
var GetBackupVaultAccessPolicyInput;
(function (GetBackupVaultAccessPolicyInput) {
  /**
   * @internal
   */
  GetBackupVaultAccessPolicyInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetBackupVaultAccessPolicyInput =
    exports.GetBackupVaultAccessPolicyInput || (exports.GetBackupVaultAccessPolicyInput = {}))
);
var GetBackupVaultAccessPolicyOutput;
(function (GetBackupVaultAccessPolicyOutput) {
  /**
   * @internal
   */
  GetBackupVaultAccessPolicyOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetBackupVaultAccessPolicyOutput =
    exports.GetBackupVaultAccessPolicyOutput || (exports.GetBackupVaultAccessPolicyOutput = {}))
);
var GetBackupVaultNotificationsInput;
(function (GetBackupVaultNotificationsInput) {
  /**
   * @internal
   */
  GetBackupVaultNotificationsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetBackupVaultNotificationsInput =
    exports.GetBackupVaultNotificationsInput || (exports.GetBackupVaultNotificationsInput = {}))
);
var GetBackupVaultNotificationsOutput;
(function (GetBackupVaultNotificationsOutput) {
  /**
   * @internal
   */
  GetBackupVaultNotificationsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetBackupVaultNotificationsOutput =
    exports.GetBackupVaultNotificationsOutput || (exports.GetBackupVaultNotificationsOutput = {}))
);
var GetRecoveryPointRestoreMetadataInput;
(function (GetRecoveryPointRestoreMetadataInput) {
  /**
   * @internal
   */
  GetRecoveryPointRestoreMetadataInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetRecoveryPointRestoreMetadataInput =
    exports.GetRecoveryPointRestoreMetadataInput || (exports.GetRecoveryPointRestoreMetadataInput = {}))
);
var GetRecoveryPointRestoreMetadataOutput;
(function (GetRecoveryPointRestoreMetadataOutput) {
  /**
   * @internal
   */
  GetRecoveryPointRestoreMetadataOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RestoreMetadata && { RestoreMetadata: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (GetRecoveryPointRestoreMetadataOutput =
    exports.GetRecoveryPointRestoreMetadataOutput || (exports.GetRecoveryPointRestoreMetadataOutput = {}))
);
var GetSupportedResourceTypesOutput;
(function (GetSupportedResourceTypesOutput) {
  /**
   * @internal
   */
  GetSupportedResourceTypesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetSupportedResourceTypesOutput =
    exports.GetSupportedResourceTypesOutput || (exports.GetSupportedResourceTypesOutput = {}))
);
var ListBackupJobsInput;
(function (ListBackupJobsInput) {
  /**
   * @internal
   */
  ListBackupJobsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListBackupJobsInput = exports.ListBackupJobsInput || (exports.ListBackupJobsInput = {})));
var ListBackupJobsOutput;
(function (ListBackupJobsOutput) {
  /**
   * @internal
   */
  ListBackupJobsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListBackupJobsOutput = exports.ListBackupJobsOutput || (exports.ListBackupJobsOutput = {})));
var ListBackupPlansInput;
(function (ListBackupPlansInput) {
  /**
   * @internal
   */
  ListBackupPlansInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListBackupPlansInput = exports.ListBackupPlansInput || (exports.ListBackupPlansInput = {})));
var ListBackupPlansOutput;
(function (ListBackupPlansOutput) {
  /**
   * @internal
   */
  ListBackupPlansOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListBackupPlansOutput = exports.ListBackupPlansOutput || (exports.ListBackupPlansOutput = {})));
var ListBackupPlanTemplatesInput;
(function (ListBackupPlanTemplatesInput) {
  /**
   * @internal
   */
  ListBackupPlanTemplatesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListBackupPlanTemplatesInput = exports.ListBackupPlanTemplatesInput || (exports.ListBackupPlanTemplatesInput = {}))
);
var ListBackupPlanTemplatesOutput;
(function (ListBackupPlanTemplatesOutput) {
  /**
   * @internal
   */
  ListBackupPlanTemplatesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListBackupPlanTemplatesOutput =
    exports.ListBackupPlanTemplatesOutput || (exports.ListBackupPlanTemplatesOutput = {}))
);
var ListBackupPlanVersionsInput;
(function (ListBackupPlanVersionsInput) {
  /**
   * @internal
   */
  ListBackupPlanVersionsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListBackupPlanVersionsInput = exports.ListBackupPlanVersionsInput || (exports.ListBackupPlanVersionsInput = {})));
var ListBackupPlanVersionsOutput;
(function (ListBackupPlanVersionsOutput) {
  /**
   * @internal
   */
  ListBackupPlanVersionsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListBackupPlanVersionsOutput = exports.ListBackupPlanVersionsOutput || (exports.ListBackupPlanVersionsOutput = {}))
);
var ListBackupSelectionsInput;
(function (ListBackupSelectionsInput) {
  /**
   * @internal
   */
  ListBackupSelectionsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListBackupSelectionsInput = exports.ListBackupSelectionsInput || (exports.ListBackupSelectionsInput = {})));
var ListBackupSelectionsOutput;
(function (ListBackupSelectionsOutput) {
  /**
   * @internal
   */
  ListBackupSelectionsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListBackupSelectionsOutput = exports.ListBackupSelectionsOutput || (exports.ListBackupSelectionsOutput = {})));
var ListBackupVaultsInput;
(function (ListBackupVaultsInput) {
  /**
   * @internal
   */
  ListBackupVaultsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListBackupVaultsInput = exports.ListBackupVaultsInput || (exports.ListBackupVaultsInput = {})));
var ListBackupVaultsOutput;
(function (ListBackupVaultsOutput) {
  /**
   * @internal
   */
  ListBackupVaultsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListBackupVaultsOutput = exports.ListBackupVaultsOutput || (exports.ListBackupVaultsOutput = {})));
var ListCopyJobsInput;
(function (ListCopyJobsInput) {
  /**
   * @internal
   */
  ListCopyJobsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListCopyJobsInput = exports.ListCopyJobsInput || (exports.ListCopyJobsInput = {})));
var ListCopyJobsOutput;
(function (ListCopyJobsOutput) {
  /**
   * @internal
   */
  ListCopyJobsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListCopyJobsOutput = exports.ListCopyJobsOutput || (exports.ListCopyJobsOutput = {})));
var ListProtectedResourcesInput;
(function (ListProtectedResourcesInput) {
  /**
   * @internal
   */
  ListProtectedResourcesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListProtectedResourcesInput = exports.ListProtectedResourcesInput || (exports.ListProtectedResourcesInput = {})));
var ProtectedResource;
(function (ProtectedResource) {
  /**
   * @internal
   */
  ProtectedResource.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ProtectedResource = exports.ProtectedResource || (exports.ProtectedResource = {})));
var ListProtectedResourcesOutput;
(function (ListProtectedResourcesOutput) {
  /**
   * @internal
   */
  ListProtectedResourcesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListProtectedResourcesOutput = exports.ListProtectedResourcesOutput || (exports.ListProtectedResourcesOutput = {}))
);
var ListRecoveryPointsByBackupVaultInput;
(function (ListRecoveryPointsByBackupVaultInput) {
  /**
   * @internal
   */
  ListRecoveryPointsByBackupVaultInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListRecoveryPointsByBackupVaultInput =
    exports.ListRecoveryPointsByBackupVaultInput || (exports.ListRecoveryPointsByBackupVaultInput = {}))
);
var RecoveryPointByBackupVault;
(function (RecoveryPointByBackupVault) {
  /**
   * @internal
   */
  RecoveryPointByBackupVault.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RecoveryPointByBackupVault = exports.RecoveryPointByBackupVault || (exports.RecoveryPointByBackupVault = {})));
var ListRecoveryPointsByBackupVaultOutput;
(function (ListRecoveryPointsByBackupVaultOutput) {
  /**
   * @internal
   */
  ListRecoveryPointsByBackupVaultOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListRecoveryPointsByBackupVaultOutput =
    exports.ListRecoveryPointsByBackupVaultOutput || (exports.ListRecoveryPointsByBackupVaultOutput = {}))
);
var ListRecoveryPointsByResourceInput;
(function (ListRecoveryPointsByResourceInput) {
  /**
   * @internal
   */
  ListRecoveryPointsByResourceInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListRecoveryPointsByResourceInput =
    exports.ListRecoveryPointsByResourceInput || (exports.ListRecoveryPointsByResourceInput = {}))
);
var RecoveryPointByResource;
(function (RecoveryPointByResource) {
  /**
   * @internal
   */
  RecoveryPointByResource.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RecoveryPointByResource = exports.RecoveryPointByResource || (exports.RecoveryPointByResource = {})));
var ListRecoveryPointsByResourceOutput;
(function (ListRecoveryPointsByResourceOutput) {
  /**
   * @internal
   */
  ListRecoveryPointsByResourceOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListRecoveryPointsByResourceOutput =
    exports.ListRecoveryPointsByResourceOutput || (exports.ListRecoveryPointsByResourceOutput = {}))
);
var ListRestoreJobsInput;
(function (ListRestoreJobsInput) {
  /**
   * @internal
   */
  ListRestoreJobsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListRestoreJobsInput = exports.ListRestoreJobsInput || (exports.ListRestoreJobsInput = {})));
var RestoreJobsListMember;
(function (RestoreJobsListMember) {
  /**
   * @internal
   */
  RestoreJobsListMember.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RestoreJobsListMember = exports.RestoreJobsListMember || (exports.RestoreJobsListMember = {})));
var ListRestoreJobsOutput;
(function (ListRestoreJobsOutput) {
  /**
   * @internal
   */
  ListRestoreJobsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListRestoreJobsOutput = exports.ListRestoreJobsOutput || (exports.ListRestoreJobsOutput = {})));
var ListTagsInput;
(function (ListTagsInput) {
  /**
   * @internal
   */
  ListTagsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsInput = exports.ListTagsInput || (exports.ListTagsInput = {})));
var ListTagsOutput;
(function (ListTagsOutput) {
  /**
   * @internal
   */
  ListTagsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Tags && { Tags: smithy_client_1.SENSITIVE_STRING }),
  });
})((ListTagsOutput = exports.ListTagsOutput || (exports.ListTagsOutput = {})));
var PutBackupVaultAccessPolicyInput;
(function (PutBackupVaultAccessPolicyInput) {
  /**
   * @internal
   */
  PutBackupVaultAccessPolicyInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutBackupVaultAccessPolicyInput =
    exports.PutBackupVaultAccessPolicyInput || (exports.PutBackupVaultAccessPolicyInput = {}))
);
var PutBackupVaultNotificationsInput;
(function (PutBackupVaultNotificationsInput) {
  /**
   * @internal
   */
  PutBackupVaultNotificationsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutBackupVaultNotificationsInput =
    exports.PutBackupVaultNotificationsInput || (exports.PutBackupVaultNotificationsInput = {}))
);
var StartBackupJobInput;
(function (StartBackupJobInput) {
  /**
   * @internal
   */
  StartBackupJobInput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RecoveryPointTags && { RecoveryPointTags: smithy_client_1.SENSITIVE_STRING }),
  });
})((StartBackupJobInput = exports.StartBackupJobInput || (exports.StartBackupJobInput = {})));
var StartBackupJobOutput;
(function (StartBackupJobOutput) {
  /**
   * @internal
   */
  StartBackupJobOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartBackupJobOutput = exports.StartBackupJobOutput || (exports.StartBackupJobOutput = {})));
var StartCopyJobInput;
(function (StartCopyJobInput) {
  /**
   * @internal
   */
  StartCopyJobInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartCopyJobInput = exports.StartCopyJobInput || (exports.StartCopyJobInput = {})));
var StartCopyJobOutput;
(function (StartCopyJobOutput) {
  /**
   * @internal
   */
  StartCopyJobOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartCopyJobOutput = exports.StartCopyJobOutput || (exports.StartCopyJobOutput = {})));
var StartRestoreJobInput;
(function (StartRestoreJobInput) {
  /**
   * @internal
   */
  StartRestoreJobInput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
  });
})((StartRestoreJobInput = exports.StartRestoreJobInput || (exports.StartRestoreJobInput = {})));
var StartRestoreJobOutput;
(function (StartRestoreJobOutput) {
  /**
   * @internal
   */
  StartRestoreJobOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartRestoreJobOutput = exports.StartRestoreJobOutput || (exports.StartRestoreJobOutput = {})));
var StopBackupJobInput;
(function (StopBackupJobInput) {
  /**
   * @internal
   */
  StopBackupJobInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StopBackupJobInput = exports.StopBackupJobInput || (exports.StopBackupJobInput = {})));
var TagResourceInput;
(function (TagResourceInput) {
  /**
   * @internal
   */
  TagResourceInput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Tags && { Tags: smithy_client_1.SENSITIVE_STRING }),
  });
})((TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {})));
var UntagResourceInput;
(function (UntagResourceInput) {
  /**
   * @internal
   */
  UntagResourceInput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TagKeyList && { TagKeyList: smithy_client_1.SENSITIVE_STRING }),
  });
})((UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {})));
var UpdateBackupPlanInput;
(function (UpdateBackupPlanInput) {
  /**
   * @internal
   */
  UpdateBackupPlanInput.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.BackupPlan && { BackupPlan: BackupPlanInput.filterSensitiveLog(obj.BackupPlan) }),
  });
})((UpdateBackupPlanInput = exports.UpdateBackupPlanInput || (exports.UpdateBackupPlanInput = {})));
var UpdateBackupPlanOutput;
(function (UpdateBackupPlanOutput) {
  /**
   * @internal
   */
  UpdateBackupPlanOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateBackupPlanOutput = exports.UpdateBackupPlanOutput || (exports.UpdateBackupPlanOutput = {})));
var UpdateGlobalSettingsInput;
(function (UpdateGlobalSettingsInput) {
  /**
   * @internal
   */
  UpdateGlobalSettingsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateGlobalSettingsInput = exports.UpdateGlobalSettingsInput || (exports.UpdateGlobalSettingsInput = {})));
var UpdateRecoveryPointLifecycleInput;
(function (UpdateRecoveryPointLifecycleInput) {
  /**
   * @internal
   */
  UpdateRecoveryPointLifecycleInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateRecoveryPointLifecycleInput =
    exports.UpdateRecoveryPointLifecycleInput || (exports.UpdateRecoveryPointLifecycleInput = {}))
);
var UpdateRecoveryPointLifecycleOutput;
(function (UpdateRecoveryPointLifecycleOutput) {
  /**
   * @internal
   */
  UpdateRecoveryPointLifecycleOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateRecoveryPointLifecycleOutput =
    exports.UpdateRecoveryPointLifecycleOutput || (exports.UpdateRecoveryPointLifecycleOutput = {}))
);
var UpdateRegionSettingsInput;
(function (UpdateRegionSettingsInput) {
  /**
   * @internal
   */
  UpdateRegionSettingsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateRegionSettingsInput = exports.UpdateRegionSettingsInput || (exports.UpdateRegionSettingsInput = {})));
//# sourceMappingURL=models_0.js.map
