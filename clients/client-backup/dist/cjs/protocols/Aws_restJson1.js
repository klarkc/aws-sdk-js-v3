"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1UpdateRecoveryPointLifecycleCommand =
  exports.serializeAws_restJson1UpdateGlobalSettingsCommand =
  exports.serializeAws_restJson1UpdateBackupPlanCommand =
  exports.serializeAws_restJson1UntagResourceCommand =
  exports.serializeAws_restJson1TagResourceCommand =
  exports.serializeAws_restJson1StopBackupJobCommand =
  exports.serializeAws_restJson1StartRestoreJobCommand =
  exports.serializeAws_restJson1StartCopyJobCommand =
  exports.serializeAws_restJson1StartBackupJobCommand =
  exports.serializeAws_restJson1PutBackupVaultNotificationsCommand =
  exports.serializeAws_restJson1PutBackupVaultAccessPolicyCommand =
  exports.serializeAws_restJson1ListTagsCommand =
  exports.serializeAws_restJson1ListRestoreJobsCommand =
  exports.serializeAws_restJson1ListRecoveryPointsByResourceCommand =
  exports.serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand =
  exports.serializeAws_restJson1ListProtectedResourcesCommand =
  exports.serializeAws_restJson1ListCopyJobsCommand =
  exports.serializeAws_restJson1ListBackupVaultsCommand =
  exports.serializeAws_restJson1ListBackupSelectionsCommand =
  exports.serializeAws_restJson1ListBackupPlanVersionsCommand =
  exports.serializeAws_restJson1ListBackupPlanTemplatesCommand =
  exports.serializeAws_restJson1ListBackupPlansCommand =
  exports.serializeAws_restJson1ListBackupJobsCommand =
  exports.serializeAws_restJson1GetSupportedResourceTypesCommand =
  exports.serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand =
  exports.serializeAws_restJson1GetBackupVaultNotificationsCommand =
  exports.serializeAws_restJson1GetBackupVaultAccessPolicyCommand =
  exports.serializeAws_restJson1GetBackupSelectionCommand =
  exports.serializeAws_restJson1GetBackupPlanFromTemplateCommand =
  exports.serializeAws_restJson1GetBackupPlanFromJSONCommand =
  exports.serializeAws_restJson1GetBackupPlanCommand =
  exports.serializeAws_restJson1ExportBackupPlanTemplateCommand =
  exports.serializeAws_restJson1DisassociateRecoveryPointCommand =
  exports.serializeAws_restJson1DescribeRestoreJobCommand =
  exports.serializeAws_restJson1DescribeRegionSettingsCommand =
  exports.serializeAws_restJson1DescribeRecoveryPointCommand =
  exports.serializeAws_restJson1DescribeProtectedResourceCommand =
  exports.serializeAws_restJson1DescribeGlobalSettingsCommand =
  exports.serializeAws_restJson1DescribeCopyJobCommand =
  exports.serializeAws_restJson1DescribeBackupVaultCommand =
  exports.serializeAws_restJson1DescribeBackupJobCommand =
  exports.serializeAws_restJson1DeleteRecoveryPointCommand =
  exports.serializeAws_restJson1DeleteBackupVaultNotificationsCommand =
  exports.serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand =
  exports.serializeAws_restJson1DeleteBackupVaultCommand =
  exports.serializeAws_restJson1DeleteBackupSelectionCommand =
  exports.serializeAws_restJson1DeleteBackupPlanCommand =
  exports.serializeAws_restJson1CreateBackupVaultCommand =
  exports.serializeAws_restJson1CreateBackupSelectionCommand =
  exports.serializeAws_restJson1CreateBackupPlanCommand =
    void 0;
exports.deserializeAws_restJson1UpdateGlobalSettingsCommand =
  exports.deserializeAws_restJson1UpdateBackupPlanCommand =
  exports.deserializeAws_restJson1UntagResourceCommand =
  exports.deserializeAws_restJson1TagResourceCommand =
  exports.deserializeAws_restJson1StopBackupJobCommand =
  exports.deserializeAws_restJson1StartRestoreJobCommand =
  exports.deserializeAws_restJson1StartCopyJobCommand =
  exports.deserializeAws_restJson1StartBackupJobCommand =
  exports.deserializeAws_restJson1PutBackupVaultNotificationsCommand =
  exports.deserializeAws_restJson1PutBackupVaultAccessPolicyCommand =
  exports.deserializeAws_restJson1ListTagsCommand =
  exports.deserializeAws_restJson1ListRestoreJobsCommand =
  exports.deserializeAws_restJson1ListRecoveryPointsByResourceCommand =
  exports.deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand =
  exports.deserializeAws_restJson1ListProtectedResourcesCommand =
  exports.deserializeAws_restJson1ListCopyJobsCommand =
  exports.deserializeAws_restJson1ListBackupVaultsCommand =
  exports.deserializeAws_restJson1ListBackupSelectionsCommand =
  exports.deserializeAws_restJson1ListBackupPlanVersionsCommand =
  exports.deserializeAws_restJson1ListBackupPlanTemplatesCommand =
  exports.deserializeAws_restJson1ListBackupPlansCommand =
  exports.deserializeAws_restJson1ListBackupJobsCommand =
  exports.deserializeAws_restJson1GetSupportedResourceTypesCommand =
  exports.deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand =
  exports.deserializeAws_restJson1GetBackupVaultNotificationsCommand =
  exports.deserializeAws_restJson1GetBackupVaultAccessPolicyCommand =
  exports.deserializeAws_restJson1GetBackupSelectionCommand =
  exports.deserializeAws_restJson1GetBackupPlanFromTemplateCommand =
  exports.deserializeAws_restJson1GetBackupPlanFromJSONCommand =
  exports.deserializeAws_restJson1GetBackupPlanCommand =
  exports.deserializeAws_restJson1ExportBackupPlanTemplateCommand =
  exports.deserializeAws_restJson1DisassociateRecoveryPointCommand =
  exports.deserializeAws_restJson1DescribeRestoreJobCommand =
  exports.deserializeAws_restJson1DescribeRegionSettingsCommand =
  exports.deserializeAws_restJson1DescribeRecoveryPointCommand =
  exports.deserializeAws_restJson1DescribeProtectedResourceCommand =
  exports.deserializeAws_restJson1DescribeGlobalSettingsCommand =
  exports.deserializeAws_restJson1DescribeCopyJobCommand =
  exports.deserializeAws_restJson1DescribeBackupVaultCommand =
  exports.deserializeAws_restJson1DescribeBackupJobCommand =
  exports.deserializeAws_restJson1DeleteRecoveryPointCommand =
  exports.deserializeAws_restJson1DeleteBackupVaultNotificationsCommand =
  exports.deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand =
  exports.deserializeAws_restJson1DeleteBackupVaultCommand =
  exports.deserializeAws_restJson1DeleteBackupSelectionCommand =
  exports.deserializeAws_restJson1DeleteBackupPlanCommand =
  exports.deserializeAws_restJson1CreateBackupVaultCommand =
  exports.deserializeAws_restJson1CreateBackupSelectionCommand =
  exports.deserializeAws_restJson1CreateBackupPlanCommand =
  exports.serializeAws_restJson1UpdateRegionSettingsCommand =
    void 0;
exports.deserializeAws_restJson1UpdateRegionSettingsCommand =
  exports.deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateBackupPlanCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backup/plans";
  let body;
  body = JSON.stringify({
    ...(input.BackupPlan !== undefined &&
      input.BackupPlan !== null && { BackupPlan: serializeAws_restJson1BackupPlanInput(input.BackupPlan, context) }),
    ...(input.BackupPlanTags !== undefined &&
      input.BackupPlanTags !== null && { BackupPlanTags: serializeAws_restJson1Tags(input.BackupPlanTags, context) }),
    ...(input.CreatorRequestId !== undefined &&
      input.CreatorRequestId !== null && { CreatorRequestId: input.CreatorRequestId }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1CreateBackupPlanCommand = serializeAws_restJson1CreateBackupPlanCommand;
const serializeAws_restJson1CreateBackupSelectionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backup/plans/{BackupPlanId}/selections";
  if (input.BackupPlanId !== undefined) {
    const labelValue = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.BackupSelection !== undefined &&
      input.BackupSelection !== null && {
        BackupSelection: serializeAws_restJson1BackupSelection(input.BackupSelection, context),
      }),
    ...(input.CreatorRequestId !== undefined &&
      input.CreatorRequestId !== null && { CreatorRequestId: input.CreatorRequestId }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1CreateBackupSelectionCommand = serializeAws_restJson1CreateBackupSelectionCommand;
const serializeAws_restJson1CreateBackupVaultCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backup-vaults/{BackupVaultName}";
  if (input.BackupVaultName !== undefined) {
    const labelValue = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.BackupVaultTags !== undefined &&
      input.BackupVaultTags !== null && {
        BackupVaultTags: serializeAws_restJson1Tags(input.BackupVaultTags, context),
      }),
    ...(input.CreatorRequestId !== undefined &&
      input.CreatorRequestId !== null && { CreatorRequestId: input.CreatorRequestId }),
    ...(input.EncryptionKeyArn !== undefined &&
      input.EncryptionKeyArn !== null && { EncryptionKeyArn: input.EncryptionKeyArn }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1CreateBackupVaultCommand = serializeAws_restJson1CreateBackupVaultCommand;
const serializeAws_restJson1DeleteBackupPlanCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup/plans/{BackupPlanId}";
  if (input.BackupPlanId !== undefined) {
    const labelValue = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DeleteBackupPlanCommand = serializeAws_restJson1DeleteBackupPlanCommand;
const serializeAws_restJson1DeleteBackupSelectionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup/plans/{BackupPlanId}/selections/{SelectionId}";
  if (input.BackupPlanId !== undefined) {
    const labelValue = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  if (input.SelectionId !== undefined) {
    const labelValue = input.SelectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SelectionId.");
    }
    resolvedPath = resolvedPath.replace("{SelectionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SelectionId.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DeleteBackupSelectionCommand = serializeAws_restJson1DeleteBackupSelectionCommand;
const serializeAws_restJson1DeleteBackupVaultCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup-vaults/{BackupVaultName}";
  if (input.BackupVaultName !== undefined) {
    const labelValue = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DeleteBackupVaultCommand = serializeAws_restJson1DeleteBackupVaultCommand;
const serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup-vaults/{BackupVaultName}/access-policy";
  if (input.BackupVaultName !== undefined) {
    const labelValue = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand =
  serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand;
const serializeAws_restJson1DeleteBackupVaultNotificationsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup-vaults/{BackupVaultName}/notification-configuration";
  if (input.BackupVaultName !== undefined) {
    const labelValue = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DeleteBackupVaultNotificationsCommand =
  serializeAws_restJson1DeleteBackupVaultNotificationsCommand;
const serializeAws_restJson1DeleteRecoveryPointCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}";
  if (input.BackupVaultName !== undefined) {
    const labelValue = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  if (input.RecoveryPointArn !== undefined) {
    const labelValue = input.RecoveryPointArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecoveryPointArn.");
    }
    resolvedPath = resolvedPath.replace("{RecoveryPointArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecoveryPointArn.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DeleteRecoveryPointCommand = serializeAws_restJson1DeleteRecoveryPointCommand;
const serializeAws_restJson1DescribeBackupJobCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup-jobs/{BackupJobId}";
  if (input.BackupJobId !== undefined) {
    const labelValue = input.BackupJobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupJobId.");
    }
    resolvedPath = resolvedPath.replace("{BackupJobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupJobId.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DescribeBackupJobCommand = serializeAws_restJson1DescribeBackupJobCommand;
const serializeAws_restJson1DescribeBackupVaultCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup-vaults/{BackupVaultName}";
  if (input.BackupVaultName !== undefined) {
    const labelValue = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DescribeBackupVaultCommand = serializeAws_restJson1DescribeBackupVaultCommand;
const serializeAws_restJson1DescribeCopyJobCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/copy-jobs/{CopyJobId}";
  if (input.CopyJobId !== undefined) {
    const labelValue = input.CopyJobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CopyJobId.");
    }
    resolvedPath = resolvedPath.replace("{CopyJobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CopyJobId.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DescribeCopyJobCommand = serializeAws_restJson1DescribeCopyJobCommand;
const serializeAws_restJson1DescribeGlobalSettingsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/global-settings";
  let body;
  body = "";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DescribeGlobalSettingsCommand = serializeAws_restJson1DescribeGlobalSettingsCommand;
const serializeAws_restJson1DescribeProtectedResourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/resources/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DescribeProtectedResourceCommand = serializeAws_restJson1DescribeProtectedResourceCommand;
const serializeAws_restJson1DescribeRecoveryPointCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}";
  if (input.BackupVaultName !== undefined) {
    const labelValue = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  if (input.RecoveryPointArn !== undefined) {
    const labelValue = input.RecoveryPointArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecoveryPointArn.");
    }
    resolvedPath = resolvedPath.replace("{RecoveryPointArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecoveryPointArn.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DescribeRecoveryPointCommand = serializeAws_restJson1DescribeRecoveryPointCommand;
const serializeAws_restJson1DescribeRegionSettingsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/account-settings";
  let body;
  body = "";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DescribeRegionSettingsCommand = serializeAws_restJson1DescribeRegionSettingsCommand;
const serializeAws_restJson1DescribeRestoreJobCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restore-jobs/{RestoreJobId}";
  if (input.RestoreJobId !== undefined) {
    const labelValue = input.RestoreJobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RestoreJobId.");
    }
    resolvedPath = resolvedPath.replace("{RestoreJobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RestoreJobId.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DescribeRestoreJobCommand = serializeAws_restJson1DescribeRestoreJobCommand;
const serializeAws_restJson1DisassociateRecoveryPointCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/disassociate";
  if (input.BackupVaultName !== undefined) {
    const labelValue = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  if (input.RecoveryPointArn !== undefined) {
    const labelValue = input.RecoveryPointArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecoveryPointArn.");
    }
    resolvedPath = resolvedPath.replace("{RecoveryPointArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecoveryPointArn.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1DisassociateRecoveryPointCommand = serializeAws_restJson1DisassociateRecoveryPointCommand;
const serializeAws_restJson1ExportBackupPlanTemplateCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup/plans/{BackupPlanId}/toTemplate";
  if (input.BackupPlanId !== undefined) {
    const labelValue = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1ExportBackupPlanTemplateCommand = serializeAws_restJson1ExportBackupPlanTemplateCommand;
const serializeAws_restJson1GetBackupPlanCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup/plans/{BackupPlanId}";
  if (input.BackupPlanId !== undefined) {
    const labelValue = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  const query = {
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1GetBackupPlanCommand = serializeAws_restJson1GetBackupPlanCommand;
const serializeAws_restJson1GetBackupPlanFromJSONCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backup/template/json/toPlan";
  let body;
  body = JSON.stringify({
    ...(input.BackupPlanTemplateJson !== undefined &&
      input.BackupPlanTemplateJson !== null && { BackupPlanTemplateJson: input.BackupPlanTemplateJson }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1GetBackupPlanFromJSONCommand = serializeAws_restJson1GetBackupPlanFromJSONCommand;
const serializeAws_restJson1GetBackupPlanFromTemplateCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup/template/plans/{BackupPlanTemplateId}/toPlan";
  if (input.BackupPlanTemplateId !== undefined) {
    const labelValue = input.BackupPlanTemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanTemplateId.");
    }
    resolvedPath = resolvedPath.replace(
      "{BackupPlanTemplateId}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanTemplateId.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1GetBackupPlanFromTemplateCommand = serializeAws_restJson1GetBackupPlanFromTemplateCommand;
const serializeAws_restJson1GetBackupSelectionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup/plans/{BackupPlanId}/selections/{SelectionId}";
  if (input.BackupPlanId !== undefined) {
    const labelValue = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  if (input.SelectionId !== undefined) {
    const labelValue = input.SelectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SelectionId.");
    }
    resolvedPath = resolvedPath.replace("{SelectionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SelectionId.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1GetBackupSelectionCommand = serializeAws_restJson1GetBackupSelectionCommand;
const serializeAws_restJson1GetBackupVaultAccessPolicyCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup-vaults/{BackupVaultName}/access-policy";
  if (input.BackupVaultName !== undefined) {
    const labelValue = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1GetBackupVaultAccessPolicyCommand =
  serializeAws_restJson1GetBackupVaultAccessPolicyCommand;
const serializeAws_restJson1GetBackupVaultNotificationsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup-vaults/{BackupVaultName}/notification-configuration";
  if (input.BackupVaultName !== undefined) {
    const labelValue = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1GetBackupVaultNotificationsCommand =
  serializeAws_restJson1GetBackupVaultNotificationsCommand;
const serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/restore-metadata";
  if (input.BackupVaultName !== undefined) {
    const labelValue = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  if (input.RecoveryPointArn !== undefined) {
    const labelValue = input.RecoveryPointArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecoveryPointArn.");
    }
    resolvedPath = resolvedPath.replace("{RecoveryPointArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecoveryPointArn.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand =
  serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand;
const serializeAws_restJson1GetSupportedResourceTypesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/supported-resource-types";
  let body;
  body = "";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1GetSupportedResourceTypesCommand = serializeAws_restJson1GetSupportedResourceTypesCommand;
const serializeAws_restJson1ListBackupJobsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup-jobs";
  const query = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.ByResourceArn !== undefined && { resourceArn: input.ByResourceArn }),
    ...(input.ByState !== undefined && { state: input.ByState }),
    ...(input.ByBackupVaultName !== undefined && { backupVaultName: input.ByBackupVaultName }),
    ...(input.ByCreatedBefore !== undefined && {
      createdBefore: (input.ByCreatedBefore.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.ByCreatedAfter !== undefined && {
      createdAfter: (input.ByCreatedAfter.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.ByResourceType !== undefined && { resourceType: input.ByResourceType }),
    ...(input.ByAccountId !== undefined && { accountId: input.ByAccountId }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListBackupJobsCommand = serializeAws_restJson1ListBackupJobsCommand;
const serializeAws_restJson1ListBackupPlansCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup/plans";
  const query = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.IncludeDeleted !== undefined && { includeDeleted: input.IncludeDeleted.toString() }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListBackupPlansCommand = serializeAws_restJson1ListBackupPlansCommand;
const serializeAws_restJson1ListBackupPlanTemplatesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup/template/plans";
  const query = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListBackupPlanTemplatesCommand = serializeAws_restJson1ListBackupPlanTemplatesCommand;
const serializeAws_restJson1ListBackupPlanVersionsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup/plans/{BackupPlanId}/versions";
  if (input.BackupPlanId !== undefined) {
    const labelValue = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  const query = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListBackupPlanVersionsCommand = serializeAws_restJson1ListBackupPlanVersionsCommand;
const serializeAws_restJson1ListBackupSelectionsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup/plans/{BackupPlanId}/selections";
  if (input.BackupPlanId !== undefined) {
    const labelValue = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  const query = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListBackupSelectionsCommand = serializeAws_restJson1ListBackupSelectionsCommand;
const serializeAws_restJson1ListBackupVaultsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup-vaults";
  const query = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListBackupVaultsCommand = serializeAws_restJson1ListBackupVaultsCommand;
const serializeAws_restJson1ListCopyJobsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/copy-jobs";
  const query = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.ByResourceArn !== undefined && { resourceArn: input.ByResourceArn }),
    ...(input.ByState !== undefined && { state: input.ByState }),
    ...(input.ByCreatedBefore !== undefined && {
      createdBefore: (input.ByCreatedBefore.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.ByCreatedAfter !== undefined && {
      createdAfter: (input.ByCreatedAfter.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.ByResourceType !== undefined && { resourceType: input.ByResourceType }),
    ...(input.ByDestinationVaultArn !== undefined && { destinationVaultArn: input.ByDestinationVaultArn }),
    ...(input.ByAccountId !== undefined && { accountId: input.ByAccountId }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListCopyJobsCommand = serializeAws_restJson1ListCopyJobsCommand;
const serializeAws_restJson1ListProtectedResourcesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/resources";
  const query = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListProtectedResourcesCommand = serializeAws_restJson1ListProtectedResourcesCommand;
const serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup-vaults/{BackupVaultName}/recovery-points";
  if (input.BackupVaultName !== undefined) {
    const labelValue = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  const query = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.ByResourceArn !== undefined && { resourceArn: input.ByResourceArn }),
    ...(input.ByResourceType !== undefined && { resourceType: input.ByResourceType }),
    ...(input.ByBackupPlanId !== undefined && { backupPlanId: input.ByBackupPlanId }),
    ...(input.ByCreatedBefore !== undefined && {
      createdBefore: (input.ByCreatedBefore.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.ByCreatedAfter !== undefined && {
      createdAfter: (input.ByCreatedAfter.toISOString().split(".")[0] + "Z").toString(),
    }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand =
  serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand;
const serializeAws_restJson1ListRecoveryPointsByResourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/resources/{ResourceArn}/recovery-points";
  if (input.ResourceArn !== undefined) {
    const labelValue = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListRecoveryPointsByResourceCommand =
  serializeAws_restJson1ListRecoveryPointsByResourceCommand;
const serializeAws_restJson1ListRestoreJobsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restore-jobs";
  const query = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.ByAccountId !== undefined && { accountId: input.ByAccountId }),
    ...(input.ByCreatedBefore !== undefined && {
      createdBefore: (input.ByCreatedBefore.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.ByCreatedAfter !== undefined && {
      createdAfter: (input.ByCreatedAfter.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.ByStatus !== undefined && { status: input.ByStatus }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListRestoreJobsCommand = serializeAws_restJson1ListRestoreJobsCommand;
const serializeAws_restJson1ListTagsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1ListTagsCommand = serializeAws_restJson1ListTagsCommand;
const serializeAws_restJson1PutBackupVaultAccessPolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backup-vaults/{BackupVaultName}/access-policy";
  if (input.BackupVaultName !== undefined) {
    const labelValue = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1PutBackupVaultAccessPolicyCommand =
  serializeAws_restJson1PutBackupVaultAccessPolicyCommand;
const serializeAws_restJson1PutBackupVaultNotificationsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backup-vaults/{BackupVaultName}/notification-configuration";
  if (input.BackupVaultName !== undefined) {
    const labelValue = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.BackupVaultEvents !== undefined &&
      input.BackupVaultEvents !== null && {
        BackupVaultEvents: serializeAws_restJson1BackupVaultEvents(input.BackupVaultEvents, context),
      }),
    ...(input.SNSTopicArn !== undefined && input.SNSTopicArn !== null && { SNSTopicArn: input.SNSTopicArn }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1PutBackupVaultNotificationsCommand =
  serializeAws_restJson1PutBackupVaultNotificationsCommand;
const serializeAws_restJson1StartBackupJobCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backup-jobs";
  let body;
  body = JSON.stringify({
    ...(input.BackupOptions !== undefined &&
      input.BackupOptions !== null && {
        BackupOptions: serializeAws_restJson1BackupOptions(input.BackupOptions, context),
      }),
    ...(input.BackupVaultName !== undefined &&
      input.BackupVaultName !== null && { BackupVaultName: input.BackupVaultName }),
    ...(input.CompleteWindowMinutes !== undefined &&
      input.CompleteWindowMinutes !== null && { CompleteWindowMinutes: input.CompleteWindowMinutes }),
    ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdempotencyToken !== undefined &&
      input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.Lifecycle !== undefined &&
      input.Lifecycle !== null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }),
    ...(input.RecoveryPointTags !== undefined &&
      input.RecoveryPointTags !== null && {
        RecoveryPointTags: serializeAws_restJson1Tags(input.RecoveryPointTags, context),
      }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.StartWindowMinutes !== undefined &&
      input.StartWindowMinutes !== null && { StartWindowMinutes: input.StartWindowMinutes }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1StartBackupJobCommand = serializeAws_restJson1StartBackupJobCommand;
const serializeAws_restJson1StartCopyJobCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/copy-jobs";
  let body;
  body = JSON.stringify({
    ...(input.DestinationBackupVaultArn !== undefined &&
      input.DestinationBackupVaultArn !== null && { DestinationBackupVaultArn: input.DestinationBackupVaultArn }),
    ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdempotencyToken !== undefined &&
      input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.Lifecycle !== undefined &&
      input.Lifecycle !== null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }),
    ...(input.RecoveryPointArn !== undefined &&
      input.RecoveryPointArn !== null && { RecoveryPointArn: input.RecoveryPointArn }),
    ...(input.SourceBackupVaultName !== undefined &&
      input.SourceBackupVaultName !== null && { SourceBackupVaultName: input.SourceBackupVaultName }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1StartCopyJobCommand = serializeAws_restJson1StartCopyJobCommand;
const serializeAws_restJson1StartRestoreJobCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restore-jobs";
  let body;
  body = JSON.stringify({
    ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdempotencyToken !== undefined &&
      input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.Metadata !== undefined &&
      input.Metadata !== null && { Metadata: serializeAws_restJson1Metadata(input.Metadata, context) }),
    ...(input.RecoveryPointArn !== undefined &&
      input.RecoveryPointArn !== null && { RecoveryPointArn: input.RecoveryPointArn }),
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1StartRestoreJobCommand = serializeAws_restJson1StartRestoreJobCommand;
const serializeAws_restJson1StopBackupJobCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backup-jobs/{BackupJobId}";
  if (input.BackupJobId !== undefined) {
    const labelValue = input.BackupJobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupJobId.");
    }
    resolvedPath = resolvedPath.replace("{BackupJobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupJobId.");
  }
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1StopBackupJobCommand = serializeAws_restJson1StopBackupJobCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/untag/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body;
  body = JSON.stringify({
    ...(input.TagKeyList !== undefined &&
      input.TagKeyList !== null && { TagKeyList: serializeAws_restJson1TagKeyList(input.TagKeyList, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateBackupPlanCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backup/plans/{BackupPlanId}";
  if (input.BackupPlanId !== undefined) {
    const labelValue = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.BackupPlan !== undefined &&
      input.BackupPlan !== null && { BackupPlan: serializeAws_restJson1BackupPlanInput(input.BackupPlan, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1UpdateBackupPlanCommand = serializeAws_restJson1UpdateBackupPlanCommand;
const serializeAws_restJson1UpdateGlobalSettingsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/global-settings";
  let body;
  body = JSON.stringify({
    ...(input.GlobalSettings !== undefined &&
      input.GlobalSettings !== null && {
        GlobalSettings: serializeAws_restJson1GlobalSettings(input.GlobalSettings, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1UpdateGlobalSettingsCommand = serializeAws_restJson1UpdateGlobalSettingsCommand;
const serializeAws_restJson1UpdateRecoveryPointLifecycleCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}";
  if (input.BackupVaultName !== undefined) {
    const labelValue = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  if (input.RecoveryPointArn !== undefined) {
    const labelValue = input.RecoveryPointArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecoveryPointArn.");
    }
    resolvedPath = resolvedPath.replace("{RecoveryPointArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecoveryPointArn.");
  }
  let body;
  body = JSON.stringify({
    ...(input.Lifecycle !== undefined &&
      input.Lifecycle !== null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1UpdateRecoveryPointLifecycleCommand =
  serializeAws_restJson1UpdateRecoveryPointLifecycleCommand;
const serializeAws_restJson1UpdateRegionSettingsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/account-settings";
  let body;
  body = JSON.stringify({
    ...(input.ResourceTypeOptInPreference !== undefined &&
      input.ResourceTypeOptInPreference !== null && {
        ResourceTypeOptInPreference: serializeAws_restJson1ResourceTypeOptInPreference(
          input.ResourceTypeOptInPreference,
          context
        ),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1UpdateRegionSettingsCommand = serializeAws_restJson1UpdateRegionSettingsCommand;
const deserializeAws_restJson1CreateBackupPlanCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackupPlanCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AdvancedBackupSettings: undefined,
    BackupPlanArn: undefined,
    BackupPlanId: undefined,
    CreationDate: undefined,
    VersionId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.AdvancedBackupSettings !== undefined && data.AdvancedBackupSettings !== null) {
    contents.AdvancedBackupSettings = deserializeAws_restJson1AdvancedBackupSettings(
      data.AdvancedBackupSettings,
      context
    );
  }
  if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
    contents.BackupPlanArn = data.BackupPlanArn;
  }
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = data.BackupPlanId;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.VersionId !== undefined && data.VersionId !== null) {
    contents.VersionId = data.VersionId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateBackupPlanCommand = deserializeAws_restJson1CreateBackupPlanCommand;
const deserializeAws_restJson1CreateBackupPlanCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.backup#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateBackupSelectionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackupSelectionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupPlanId: undefined,
    CreationDate: undefined,
    SelectionId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = data.BackupPlanId;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.SelectionId !== undefined && data.SelectionId !== null) {
    contents.SelectionId = data.SelectionId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateBackupSelectionCommand = deserializeAws_restJson1CreateBackupSelectionCommand;
const deserializeAws_restJson1CreateBackupSelectionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.backup#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateBackupVaultCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackupVaultCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupVaultArn: undefined,
    BackupVaultName: undefined,
    CreationDate: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = data.BackupVaultName;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateBackupVaultCommand = deserializeAws_restJson1CreateBackupVaultCommand;
const deserializeAws_restJson1CreateBackupVaultCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.backup#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteBackupPlanCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupPlanCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupPlanArn: undefined,
    BackupPlanId: undefined,
    DeletionDate: undefined,
    VersionId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
    contents.BackupPlanArn = data.BackupPlanArn;
  }
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = data.BackupPlanId;
  }
  if (data.DeletionDate !== undefined && data.DeletionDate !== null) {
    contents.DeletionDate = new Date(Math.round(data.DeletionDate * 1000));
  }
  if (data.VersionId !== undefined && data.VersionId !== null) {
    contents.VersionId = data.VersionId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBackupPlanCommand = deserializeAws_restJson1DeleteBackupPlanCommand;
const deserializeAws_restJson1DeleteBackupPlanCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteBackupSelectionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupSelectionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBackupSelectionCommand = deserializeAws_restJson1DeleteBackupSelectionCommand;
const deserializeAws_restJson1DeleteBackupSelectionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteBackupVaultCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupVaultCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBackupVaultCommand = deserializeAws_restJson1DeleteBackupVaultCommand;
const deserializeAws_restJson1DeleteBackupVaultCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand =
  deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand;
const deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteBackupVaultNotificationsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupVaultNotificationsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBackupVaultNotificationsCommand =
  deserializeAws_restJson1DeleteBackupVaultNotificationsCommand;
const deserializeAws_restJson1DeleteBackupVaultNotificationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteRecoveryPointCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRecoveryPointCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRecoveryPointCommand = deserializeAws_restJson1DeleteRecoveryPointCommand;
const deserializeAws_restJson1DeleteRecoveryPointCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.backup#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_restJson1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeBackupJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBackupJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AccountId: undefined,
    BackupJobId: undefined,
    BackupOptions: undefined,
    BackupSizeInBytes: undefined,
    BackupType: undefined,
    BackupVaultArn: undefined,
    BackupVaultName: undefined,
    BytesTransferred: undefined,
    CompletionDate: undefined,
    CreatedBy: undefined,
    CreationDate: undefined,
    ExpectedCompletionDate: undefined,
    IamRoleArn: undefined,
    PercentDone: undefined,
    RecoveryPointArn: undefined,
    ResourceArn: undefined,
    ResourceType: undefined,
    StartBy: undefined,
    State: undefined,
    StatusMessage: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.AccountId !== undefined && data.AccountId !== null) {
    contents.AccountId = data.AccountId;
  }
  if (data.BackupJobId !== undefined && data.BackupJobId !== null) {
    contents.BackupJobId = data.BackupJobId;
  }
  if (data.BackupOptions !== undefined && data.BackupOptions !== null) {
    contents.BackupOptions = deserializeAws_restJson1BackupOptions(data.BackupOptions, context);
  }
  if (data.BackupSizeInBytes !== undefined && data.BackupSizeInBytes !== null) {
    contents.BackupSizeInBytes = data.BackupSizeInBytes;
  }
  if (data.BackupType !== undefined && data.BackupType !== null) {
    contents.BackupType = data.BackupType;
  }
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = data.BackupVaultName;
  }
  if (data.BytesTransferred !== undefined && data.BytesTransferred !== null) {
    contents.BytesTransferred = data.BytesTransferred;
  }
  if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
    contents.CompletionDate = new Date(Math.round(data.CompletionDate * 1000));
  }
  if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
    contents.CreatedBy = deserializeAws_restJson1RecoveryPointCreator(data.CreatedBy, context);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.ExpectedCompletionDate !== undefined && data.ExpectedCompletionDate !== null) {
    contents.ExpectedCompletionDate = new Date(Math.round(data.ExpectedCompletionDate * 1000));
  }
  if (data.IamRoleArn !== undefined && data.IamRoleArn !== null) {
    contents.IamRoleArn = data.IamRoleArn;
  }
  if (data.PercentDone !== undefined && data.PercentDone !== null) {
    contents.PercentDone = data.PercentDone;
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = data.RecoveryPointArn;
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = data.ResourceArn;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  if (data.StartBy !== undefined && data.StartBy !== null) {
    contents.StartBy = new Date(Math.round(data.StartBy * 1000));
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (data.StatusMessage !== undefined && data.StatusMessage !== null) {
    contents.StatusMessage = data.StatusMessage;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeBackupJobCommand = deserializeAws_restJson1DescribeBackupJobCommand;
const deserializeAws_restJson1DescribeBackupJobCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyFailureException":
    case "com.amazonaws.backup#DependencyFailureException":
      response = {
        ...(await deserializeAws_restJson1DependencyFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeBackupVaultCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBackupVaultCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupVaultArn: undefined,
    BackupVaultName: undefined,
    CreationDate: undefined,
    CreatorRequestId: undefined,
    EncryptionKeyArn: undefined,
    NumberOfRecoveryPoints: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = data.BackupVaultName;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
    contents.CreatorRequestId = data.CreatorRequestId;
  }
  if (data.EncryptionKeyArn !== undefined && data.EncryptionKeyArn !== null) {
    contents.EncryptionKeyArn = data.EncryptionKeyArn;
  }
  if (data.NumberOfRecoveryPoints !== undefined && data.NumberOfRecoveryPoints !== null) {
    contents.NumberOfRecoveryPoints = data.NumberOfRecoveryPoints;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeBackupVaultCommand = deserializeAws_restJson1DescribeBackupVaultCommand;
const deserializeAws_restJson1DescribeBackupVaultCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeCopyJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeCopyJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    CopyJob: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.CopyJob !== undefined && data.CopyJob !== null) {
    contents.CopyJob = deserializeAws_restJson1CopyJob(data.CopyJob, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeCopyJobCommand = deserializeAws_restJson1DescribeCopyJobCommand;
const deserializeAws_restJson1DescribeCopyJobCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeGlobalSettingsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGlobalSettingsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    GlobalSettings: undefined,
    LastUpdateTime: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.GlobalSettings !== undefined && data.GlobalSettings !== null) {
    contents.GlobalSettings = deserializeAws_restJson1GlobalSettings(data.GlobalSettings, context);
  }
  if (data.LastUpdateTime !== undefined && data.LastUpdateTime !== null) {
    contents.LastUpdateTime = new Date(Math.round(data.LastUpdateTime * 1000));
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeGlobalSettingsCommand = deserializeAws_restJson1DescribeGlobalSettingsCommand;
const deserializeAws_restJson1DescribeGlobalSettingsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeProtectedResourceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeProtectedResourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    LastBackupTime: undefined,
    ResourceArn: undefined,
    ResourceType: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.LastBackupTime !== undefined && data.LastBackupTime !== null) {
    contents.LastBackupTime = new Date(Math.round(data.LastBackupTime * 1000));
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = data.ResourceArn;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeProtectedResourceCommand =
  deserializeAws_restJson1DescribeProtectedResourceCommand;
const deserializeAws_restJson1DescribeProtectedResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeRecoveryPointCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRecoveryPointCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupSizeInBytes: undefined,
    BackupVaultArn: undefined,
    BackupVaultName: undefined,
    CalculatedLifecycle: undefined,
    CompletionDate: undefined,
    CreatedBy: undefined,
    CreationDate: undefined,
    EncryptionKeyArn: undefined,
    IamRoleArn: undefined,
    IsEncrypted: undefined,
    LastRestoreTime: undefined,
    Lifecycle: undefined,
    RecoveryPointArn: undefined,
    ResourceArn: undefined,
    ResourceType: undefined,
    SourceBackupVaultArn: undefined,
    Status: undefined,
    StorageClass: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupSizeInBytes !== undefined && data.BackupSizeInBytes !== null) {
    contents.BackupSizeInBytes = data.BackupSizeInBytes;
  }
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = data.BackupVaultName;
  }
  if (data.CalculatedLifecycle !== undefined && data.CalculatedLifecycle !== null) {
    contents.CalculatedLifecycle = deserializeAws_restJson1CalculatedLifecycle(data.CalculatedLifecycle, context);
  }
  if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
    contents.CompletionDate = new Date(Math.round(data.CompletionDate * 1000));
  }
  if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
    contents.CreatedBy = deserializeAws_restJson1RecoveryPointCreator(data.CreatedBy, context);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.EncryptionKeyArn !== undefined && data.EncryptionKeyArn !== null) {
    contents.EncryptionKeyArn = data.EncryptionKeyArn;
  }
  if (data.IamRoleArn !== undefined && data.IamRoleArn !== null) {
    contents.IamRoleArn = data.IamRoleArn;
  }
  if (data.IsEncrypted !== undefined && data.IsEncrypted !== null) {
    contents.IsEncrypted = data.IsEncrypted;
  }
  if (data.LastRestoreTime !== undefined && data.LastRestoreTime !== null) {
    contents.LastRestoreTime = new Date(Math.round(data.LastRestoreTime * 1000));
  }
  if (data.Lifecycle !== undefined && data.Lifecycle !== null) {
    contents.Lifecycle = deserializeAws_restJson1Lifecycle(data.Lifecycle, context);
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = data.RecoveryPointArn;
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = data.ResourceArn;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  if (data.SourceBackupVaultArn !== undefined && data.SourceBackupVaultArn !== null) {
    contents.SourceBackupVaultArn = data.SourceBackupVaultArn;
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = data.Status;
  }
  if (data.StorageClass !== undefined && data.StorageClass !== null) {
    contents.StorageClass = data.StorageClass;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeRecoveryPointCommand = deserializeAws_restJson1DescribeRecoveryPointCommand;
const deserializeAws_restJson1DescribeRecoveryPointCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeRegionSettingsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRegionSettingsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ResourceTypeOptInPreference: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.ResourceTypeOptInPreference !== undefined && data.ResourceTypeOptInPreference !== null) {
    contents.ResourceTypeOptInPreference = deserializeAws_restJson1ResourceTypeOptInPreference(
      data.ResourceTypeOptInPreference,
      context
    );
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeRegionSettingsCommand = deserializeAws_restJson1DescribeRegionSettingsCommand;
const deserializeAws_restJson1DescribeRegionSettingsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeRestoreJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRestoreJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AccountId: undefined,
    BackupSizeInBytes: undefined,
    CompletionDate: undefined,
    CreatedResourceArn: undefined,
    CreationDate: undefined,
    ExpectedCompletionTimeMinutes: undefined,
    IamRoleArn: undefined,
    PercentDone: undefined,
    RecoveryPointArn: undefined,
    ResourceType: undefined,
    RestoreJobId: undefined,
    Status: undefined,
    StatusMessage: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.AccountId !== undefined && data.AccountId !== null) {
    contents.AccountId = data.AccountId;
  }
  if (data.BackupSizeInBytes !== undefined && data.BackupSizeInBytes !== null) {
    contents.BackupSizeInBytes = data.BackupSizeInBytes;
  }
  if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
    contents.CompletionDate = new Date(Math.round(data.CompletionDate * 1000));
  }
  if (data.CreatedResourceArn !== undefined && data.CreatedResourceArn !== null) {
    contents.CreatedResourceArn = data.CreatedResourceArn;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.ExpectedCompletionTimeMinutes !== undefined && data.ExpectedCompletionTimeMinutes !== null) {
    contents.ExpectedCompletionTimeMinutes = data.ExpectedCompletionTimeMinutes;
  }
  if (data.IamRoleArn !== undefined && data.IamRoleArn !== null) {
    contents.IamRoleArn = data.IamRoleArn;
  }
  if (data.PercentDone !== undefined && data.PercentDone !== null) {
    contents.PercentDone = data.PercentDone;
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = data.RecoveryPointArn;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  if (data.RestoreJobId !== undefined && data.RestoreJobId !== null) {
    contents.RestoreJobId = data.RestoreJobId;
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = data.Status;
  }
  if (data.StatusMessage !== undefined && data.StatusMessage !== null) {
    contents.StatusMessage = data.StatusMessage;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeRestoreJobCommand = deserializeAws_restJson1DescribeRestoreJobCommand;
const deserializeAws_restJson1DescribeRestoreJobCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyFailureException":
    case "com.amazonaws.backup#DependencyFailureException":
      response = {
        ...(await deserializeAws_restJson1DependencyFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DisassociateRecoveryPointCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateRecoveryPointCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateRecoveryPointCommand =
  deserializeAws_restJson1DisassociateRecoveryPointCommand;
const deserializeAws_restJson1DisassociateRecoveryPointCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.backup#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_restJson1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ExportBackupPlanTemplateCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExportBackupPlanTemplateCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupPlanTemplateJson: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupPlanTemplateJson !== undefined && data.BackupPlanTemplateJson !== null) {
    contents.BackupPlanTemplateJson = data.BackupPlanTemplateJson;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ExportBackupPlanTemplateCommand =
  deserializeAws_restJson1ExportBackupPlanTemplateCommand;
const deserializeAws_restJson1ExportBackupPlanTemplateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetBackupPlanCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupPlanCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AdvancedBackupSettings: undefined,
    BackupPlan: undefined,
    BackupPlanArn: undefined,
    BackupPlanId: undefined,
    CreationDate: undefined,
    CreatorRequestId: undefined,
    DeletionDate: undefined,
    LastExecutionDate: undefined,
    VersionId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.AdvancedBackupSettings !== undefined && data.AdvancedBackupSettings !== null) {
    contents.AdvancedBackupSettings = deserializeAws_restJson1AdvancedBackupSettings(
      data.AdvancedBackupSettings,
      context
    );
  }
  if (data.BackupPlan !== undefined && data.BackupPlan !== null) {
    contents.BackupPlan = deserializeAws_restJson1BackupPlan(data.BackupPlan, context);
  }
  if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
    contents.BackupPlanArn = data.BackupPlanArn;
  }
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = data.BackupPlanId;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
    contents.CreatorRequestId = data.CreatorRequestId;
  }
  if (data.DeletionDate !== undefined && data.DeletionDate !== null) {
    contents.DeletionDate = new Date(Math.round(data.DeletionDate * 1000));
  }
  if (data.LastExecutionDate !== undefined && data.LastExecutionDate !== null) {
    contents.LastExecutionDate = new Date(Math.round(data.LastExecutionDate * 1000));
  }
  if (data.VersionId !== undefined && data.VersionId !== null) {
    contents.VersionId = data.VersionId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBackupPlanCommand = deserializeAws_restJson1GetBackupPlanCommand;
const deserializeAws_restJson1GetBackupPlanCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetBackupPlanFromJSONCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupPlanFromJSONCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupPlan: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupPlan !== undefined && data.BackupPlan !== null) {
    contents.BackupPlan = deserializeAws_restJson1BackupPlan(data.BackupPlan, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBackupPlanFromJSONCommand = deserializeAws_restJson1GetBackupPlanFromJSONCommand;
const deserializeAws_restJson1GetBackupPlanFromJSONCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetBackupPlanFromTemplateCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupPlanFromTemplateCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupPlanDocument: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupPlanDocument !== undefined && data.BackupPlanDocument !== null) {
    contents.BackupPlanDocument = deserializeAws_restJson1BackupPlan(data.BackupPlanDocument, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBackupPlanFromTemplateCommand =
  deserializeAws_restJson1GetBackupPlanFromTemplateCommand;
const deserializeAws_restJson1GetBackupPlanFromTemplateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetBackupSelectionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupSelectionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupPlanId: undefined,
    BackupSelection: undefined,
    CreationDate: undefined,
    CreatorRequestId: undefined,
    SelectionId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = data.BackupPlanId;
  }
  if (data.BackupSelection !== undefined && data.BackupSelection !== null) {
    contents.BackupSelection = deserializeAws_restJson1BackupSelection(data.BackupSelection, context);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
    contents.CreatorRequestId = data.CreatorRequestId;
  }
  if (data.SelectionId !== undefined && data.SelectionId !== null) {
    contents.SelectionId = data.SelectionId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBackupSelectionCommand = deserializeAws_restJson1GetBackupSelectionCommand;
const deserializeAws_restJson1GetBackupSelectionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetBackupVaultAccessPolicyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupVaultAccessPolicyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupVaultArn: undefined,
    BackupVaultName: undefined,
    Policy: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = data.BackupVaultName;
  }
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = data.Policy;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBackupVaultAccessPolicyCommand =
  deserializeAws_restJson1GetBackupVaultAccessPolicyCommand;
const deserializeAws_restJson1GetBackupVaultAccessPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetBackupVaultNotificationsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupVaultNotificationsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupVaultArn: undefined,
    BackupVaultEvents: undefined,
    BackupVaultName: undefined,
    SNSTopicArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (data.BackupVaultEvents !== undefined && data.BackupVaultEvents !== null) {
    contents.BackupVaultEvents = deserializeAws_restJson1BackupVaultEvents(data.BackupVaultEvents, context);
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = data.BackupVaultName;
  }
  if (data.SNSTopicArn !== undefined && data.SNSTopicArn !== null) {
    contents.SNSTopicArn = data.SNSTopicArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBackupVaultNotificationsCommand =
  deserializeAws_restJson1GetBackupVaultNotificationsCommand;
const deserializeAws_restJson1GetBackupVaultNotificationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupVaultArn: undefined,
    RecoveryPointArn: undefined,
    RestoreMetadata: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = data.RecoveryPointArn;
  }
  if (data.RestoreMetadata !== undefined && data.RestoreMetadata !== null) {
    contents.RestoreMetadata = deserializeAws_restJson1Metadata(data.RestoreMetadata, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand =
  deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand;
const deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetSupportedResourceTypesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSupportedResourceTypesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ResourceTypes: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.ResourceTypes !== undefined && data.ResourceTypes !== null) {
    contents.ResourceTypes = deserializeAws_restJson1ResourceTypes(data.ResourceTypes, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSupportedResourceTypesCommand =
  deserializeAws_restJson1GetSupportedResourceTypesCommand;
const deserializeAws_restJson1GetSupportedResourceTypesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListBackupJobsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupJobsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupJobs: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupJobs !== undefined && data.BackupJobs !== null) {
    contents.BackupJobs = deserializeAws_restJson1BackupJobsList(data.BackupJobs, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBackupJobsCommand = deserializeAws_restJson1ListBackupJobsCommand;
const deserializeAws_restJson1ListBackupJobsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListBackupPlansCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupPlansCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupPlansList: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupPlansList !== undefined && data.BackupPlansList !== null) {
    contents.BackupPlansList = deserializeAws_restJson1BackupPlansList(data.BackupPlansList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBackupPlansCommand = deserializeAws_restJson1ListBackupPlansCommand;
const deserializeAws_restJson1ListBackupPlansCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListBackupPlanTemplatesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupPlanTemplatesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupPlanTemplatesList: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupPlanTemplatesList !== undefined && data.BackupPlanTemplatesList !== null) {
    contents.BackupPlanTemplatesList = deserializeAws_restJson1BackupPlanTemplatesList(
      data.BackupPlanTemplatesList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBackupPlanTemplatesCommand = deserializeAws_restJson1ListBackupPlanTemplatesCommand;
const deserializeAws_restJson1ListBackupPlanTemplatesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListBackupPlanVersionsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupPlanVersionsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupPlanVersionsList: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupPlanVersionsList !== undefined && data.BackupPlanVersionsList !== null) {
    contents.BackupPlanVersionsList = deserializeAws_restJson1BackupPlanVersionsList(
      data.BackupPlanVersionsList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBackupPlanVersionsCommand = deserializeAws_restJson1ListBackupPlanVersionsCommand;
const deserializeAws_restJson1ListBackupPlanVersionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListBackupSelectionsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupSelectionsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupSelectionsList: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupSelectionsList !== undefined && data.BackupSelectionsList !== null) {
    contents.BackupSelectionsList = deserializeAws_restJson1BackupSelectionsList(data.BackupSelectionsList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBackupSelectionsCommand = deserializeAws_restJson1ListBackupSelectionsCommand;
const deserializeAws_restJson1ListBackupSelectionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListBackupVaultsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupVaultsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupVaultList: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupVaultList !== undefined && data.BackupVaultList !== null) {
    contents.BackupVaultList = deserializeAws_restJson1BackupVaultList(data.BackupVaultList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBackupVaultsCommand = deserializeAws_restJson1ListBackupVaultsCommand;
const deserializeAws_restJson1ListBackupVaultsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListCopyJobsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCopyJobsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    CopyJobs: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.CopyJobs !== undefined && data.CopyJobs !== null) {
    contents.CopyJobs = deserializeAws_restJson1CopyJobsList(data.CopyJobs, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListCopyJobsCommand = deserializeAws_restJson1ListCopyJobsCommand;
const deserializeAws_restJson1ListCopyJobsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListProtectedResourcesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProtectedResourcesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Results: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Results !== undefined && data.Results !== null) {
    contents.Results = deserializeAws_restJson1ProtectedResourcesList(data.Results, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListProtectedResourcesCommand = deserializeAws_restJson1ListProtectedResourcesCommand;
const deserializeAws_restJson1ListProtectedResourcesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RecoveryPoints: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RecoveryPoints !== undefined && data.RecoveryPoints !== null) {
    contents.RecoveryPoints = deserializeAws_restJson1RecoveryPointByBackupVaultList(data.RecoveryPoints, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand =
  deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand;
const deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListRecoveryPointsByResourceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecoveryPointsByResourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RecoveryPoints: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RecoveryPoints !== undefined && data.RecoveryPoints !== null) {
    contents.RecoveryPoints = deserializeAws_restJson1RecoveryPointByResourceList(data.RecoveryPoints, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRecoveryPointsByResourceCommand =
  deserializeAws_restJson1ListRecoveryPointsByResourceCommand;
const deserializeAws_restJson1ListRecoveryPointsByResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListRestoreJobsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRestoreJobsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RestoreJobs: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RestoreJobs !== undefined && data.RestoreJobs !== null) {
    contents.RestoreJobs = deserializeAws_restJson1RestoreJobsList(data.RestoreJobs, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRestoreJobsCommand = deserializeAws_restJson1ListRestoreJobsCommand;
const deserializeAws_restJson1ListRestoreJobsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListTagsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsCommand = deserializeAws_restJson1ListTagsCommand;
const deserializeAws_restJson1ListTagsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutBackupVaultAccessPolicyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutBackupVaultAccessPolicyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutBackupVaultAccessPolicyCommand =
  deserializeAws_restJson1PutBackupVaultAccessPolicyCommand;
const deserializeAws_restJson1PutBackupVaultAccessPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutBackupVaultNotificationsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutBackupVaultNotificationsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutBackupVaultNotificationsCommand =
  deserializeAws_restJson1PutBackupVaultNotificationsCommand;
const deserializeAws_restJson1PutBackupVaultNotificationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1StartBackupJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartBackupJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupJobId: undefined,
    CreationDate: undefined,
    RecoveryPointArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupJobId !== undefined && data.BackupJobId !== null) {
    contents.BackupJobId = data.BackupJobId;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = data.RecoveryPointArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartBackupJobCommand = deserializeAws_restJson1StartBackupJobCommand;
const deserializeAws_restJson1StartBackupJobCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1StartCopyJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartCopyJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    CopyJobId: undefined,
    CreationDate: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.CopyJobId !== undefined && data.CopyJobId !== null) {
    contents.CopyJobId = data.CopyJobId;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartCopyJobCommand = deserializeAws_restJson1StartCopyJobCommand;
const deserializeAws_restJson1StartCopyJobCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1StartRestoreJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartRestoreJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    RestoreJobId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.RestoreJobId !== undefined && data.RestoreJobId !== null) {
    contents.RestoreJobId = data.RestoreJobId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartRestoreJobCommand = deserializeAws_restJson1StartRestoreJobCommand;
const deserializeAws_restJson1StartRestoreJobCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1StopBackupJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopBackupJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopBackupJobCommand = deserializeAws_restJson1StopBackupJobCommand;
const deserializeAws_restJson1StopBackupJobCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1TagResourceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TagResourceCommand = deserializeAws_restJson1TagResourceCommand;
const deserializeAws_restJson1TagResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UntagResourceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UntagResourceCommand = deserializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1UntagResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateBackupPlanCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBackupPlanCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AdvancedBackupSettings: undefined,
    BackupPlanArn: undefined,
    BackupPlanId: undefined,
    CreationDate: undefined,
    VersionId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.AdvancedBackupSettings !== undefined && data.AdvancedBackupSettings !== null) {
    contents.AdvancedBackupSettings = deserializeAws_restJson1AdvancedBackupSettings(
      data.AdvancedBackupSettings,
      context
    );
  }
  if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
    contents.BackupPlanArn = data.BackupPlanArn;
  }
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = data.BackupPlanId;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.VersionId !== undefined && data.VersionId !== null) {
    contents.VersionId = data.VersionId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateBackupPlanCommand = deserializeAws_restJson1UpdateBackupPlanCommand;
const deserializeAws_restJson1UpdateBackupPlanCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateGlobalSettingsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGlobalSettingsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateGlobalSettingsCommand = deserializeAws_restJson1UpdateGlobalSettingsCommand;
const deserializeAws_restJson1UpdateGlobalSettingsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRecoveryPointLifecycleCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    BackupVaultArn: undefined,
    CalculatedLifecycle: undefined,
    Lifecycle: undefined,
    RecoveryPointArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (data.CalculatedLifecycle !== undefined && data.CalculatedLifecycle !== null) {
    contents.CalculatedLifecycle = deserializeAws_restJson1CalculatedLifecycle(data.CalculatedLifecycle, context);
  }
  if (data.Lifecycle !== undefined && data.Lifecycle !== null) {
    contents.Lifecycle = deserializeAws_restJson1Lifecycle(data.Lifecycle, context);
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = data.RecoveryPointArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand =
  deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand;
const deserializeAws_restJson1UpdateRecoveryPointLifecycleCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateRegionSettingsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRegionSettingsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRegionSettingsCommand = deserializeAws_restJson1UpdateRegionSettingsCommand;
const deserializeAws_restJson1UpdateRegionSettingsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1AlreadyExistsExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Arn: undefined,
    Code: undefined,
    Context: undefined,
    CreatorRequestId: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data = parsedOutput.body;
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
    contents.CreatorRequestId = data.CreatorRequestId;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};
const deserializeAws_restJson1DependencyFailureExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "DependencyFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};
const deserializeAws_restJson1InvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};
const deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};
const deserializeAws_restJson1InvalidResourceStateExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidResourceStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};
const deserializeAws_restJson1MissingParameterValueExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "MissingParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};
const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};
const serializeAws_restJson1AdvancedBackupSetting = (input, context) => {
  return {
    ...(input.BackupOptions !== undefined &&
      input.BackupOptions !== null && {
        BackupOptions: serializeAws_restJson1BackupOptions(input.BackupOptions, context),
      }),
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
  };
};
const serializeAws_restJson1AdvancedBackupSettings = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1AdvancedBackupSetting(entry, context);
    });
};
const serializeAws_restJson1BackupOptions = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const serializeAws_restJson1BackupPlanInput = (input, context) => {
  return {
    ...(input.AdvancedBackupSettings !== undefined &&
      input.AdvancedBackupSettings !== null && {
        AdvancedBackupSettings: serializeAws_restJson1AdvancedBackupSettings(input.AdvancedBackupSettings, context),
      }),
    ...(input.BackupPlanName !== undefined &&
      input.BackupPlanName !== null && { BackupPlanName: input.BackupPlanName }),
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_restJson1BackupRulesInput(input.Rules, context) }),
  };
};
const serializeAws_restJson1BackupRuleInput = (input, context) => {
  return {
    ...(input.CompletionWindowMinutes !== undefined &&
      input.CompletionWindowMinutes !== null && { CompletionWindowMinutes: input.CompletionWindowMinutes }),
    ...(input.CopyActions !== undefined &&
      input.CopyActions !== null && { CopyActions: serializeAws_restJson1CopyActions(input.CopyActions, context) }),
    ...(input.EnableContinuousBackup !== undefined &&
      input.EnableContinuousBackup !== null && { EnableContinuousBackup: input.EnableContinuousBackup }),
    ...(input.Lifecycle !== undefined &&
      input.Lifecycle !== null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }),
    ...(input.RecoveryPointTags !== undefined &&
      input.RecoveryPointTags !== null && {
        RecoveryPointTags: serializeAws_restJson1Tags(input.RecoveryPointTags, context),
      }),
    ...(input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName }),
    ...(input.ScheduleExpression !== undefined &&
      input.ScheduleExpression !== null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.StartWindowMinutes !== undefined &&
      input.StartWindowMinutes !== null && { StartWindowMinutes: input.StartWindowMinutes }),
    ...(input.TargetBackupVaultName !== undefined &&
      input.TargetBackupVaultName !== null && { TargetBackupVaultName: input.TargetBackupVaultName }),
  };
};
const serializeAws_restJson1BackupRulesInput = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1BackupRuleInput(entry, context);
    });
};
const serializeAws_restJson1BackupSelection = (input, context) => {
  return {
    ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
    ...(input.ListOfTags !== undefined &&
      input.ListOfTags !== null && { ListOfTags: serializeAws_restJson1ListOfTags(input.ListOfTags, context) }),
    ...(input.Resources !== undefined &&
      input.Resources !== null && { Resources: serializeAws_restJson1ResourceArns(input.Resources, context) }),
    ...(input.SelectionName !== undefined && input.SelectionName !== null && { SelectionName: input.SelectionName }),
  };
};
const serializeAws_restJson1BackupVaultEvents = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1Condition = (input, context) => {
  return {
    ...(input.ConditionKey !== undefined && input.ConditionKey !== null && { ConditionKey: input.ConditionKey }),
    ...(input.ConditionType !== undefined && input.ConditionType !== null && { ConditionType: input.ConditionType }),
    ...(input.ConditionValue !== undefined &&
      input.ConditionValue !== null && { ConditionValue: input.ConditionValue }),
  };
};
const serializeAws_restJson1CopyAction = (input, context) => {
  return {
    ...(input.DestinationBackupVaultArn !== undefined &&
      input.DestinationBackupVaultArn !== null && { DestinationBackupVaultArn: input.DestinationBackupVaultArn }),
    ...(input.Lifecycle !== undefined &&
      input.Lifecycle !== null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }),
  };
};
const serializeAws_restJson1CopyActions = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1CopyAction(entry, context);
    });
};
const serializeAws_restJson1GlobalSettings = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const serializeAws_restJson1Lifecycle = (input, context) => {
  return {
    ...(input.DeleteAfterDays !== undefined &&
      input.DeleteAfterDays !== null && { DeleteAfterDays: input.DeleteAfterDays }),
    ...(input.MoveToColdStorageAfterDays !== undefined &&
      input.MoveToColdStorageAfterDays !== null && { MoveToColdStorageAfterDays: input.MoveToColdStorageAfterDays }),
  };
};
const serializeAws_restJson1ListOfTags = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Condition(entry, context);
    });
};
const serializeAws_restJson1Metadata = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const serializeAws_restJson1ResourceArns = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1ResourceTypeOptInPreference = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const serializeAws_restJson1TagKeyList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1Tags = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const deserializeAws_restJson1AdvancedBackupSetting = (output, context) => {
  return {
    BackupOptions:
      output.BackupOptions !== undefined && output.BackupOptions !== null
        ? deserializeAws_restJson1BackupOptions(output.BackupOptions, context)
        : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
  };
};
const deserializeAws_restJson1AdvancedBackupSettings = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AdvancedBackupSetting(entry, context);
    });
};
const deserializeAws_restJson1BackupJob = (output, context) => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    BackupJobId: output.BackupJobId !== undefined && output.BackupJobId !== null ? output.BackupJobId : undefined,
    BackupOptions:
      output.BackupOptions !== undefined && output.BackupOptions !== null
        ? deserializeAws_restJson1BackupOptions(output.BackupOptions, context)
        : undefined,
    BackupSizeInBytes:
      output.BackupSizeInBytes !== undefined && output.BackupSizeInBytes !== null
        ? output.BackupSizeInBytes
        : undefined,
    BackupType: output.BackupType !== undefined && output.BackupType !== null ? output.BackupType : undefined,
    BackupVaultArn:
      output.BackupVaultArn !== undefined && output.BackupVaultArn !== null ? output.BackupVaultArn : undefined,
    BackupVaultName:
      output.BackupVaultName !== undefined && output.BackupVaultName !== null ? output.BackupVaultName : undefined,
    BytesTransferred:
      output.BytesTransferred !== undefined && output.BytesTransferred !== null ? output.BytesTransferred : undefined,
    CompletionDate:
      output.CompletionDate !== undefined && output.CompletionDate !== null
        ? new Date(Math.round(output.CompletionDate * 1000))
        : undefined,
    CreatedBy:
      output.CreatedBy !== undefined && output.CreatedBy !== null
        ? deserializeAws_restJson1RecoveryPointCreator(output.CreatedBy, context)
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    ExpectedCompletionDate:
      output.ExpectedCompletionDate !== undefined && output.ExpectedCompletionDate !== null
        ? new Date(Math.round(output.ExpectedCompletionDate * 1000))
        : undefined,
    IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    PercentDone: output.PercentDone !== undefined && output.PercentDone !== null ? output.PercentDone : undefined,
    RecoveryPointArn:
      output.RecoveryPointArn !== undefined && output.RecoveryPointArn !== null ? output.RecoveryPointArn : undefined,
    ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    StartBy:
      output.StartBy !== undefined && output.StartBy !== null ? new Date(Math.round(output.StartBy * 1000)) : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
  };
};
const deserializeAws_restJson1BackupJobsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackupJob(entry, context);
    });
};
const deserializeAws_restJson1BackupOptions = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const deserializeAws_restJson1BackupPlan = (output, context) => {
  return {
    AdvancedBackupSettings:
      output.AdvancedBackupSettings !== undefined && output.AdvancedBackupSettings !== null
        ? deserializeAws_restJson1AdvancedBackupSettings(output.AdvancedBackupSettings, context)
        : undefined,
    BackupPlanName:
      output.BackupPlanName !== undefined && output.BackupPlanName !== null ? output.BackupPlanName : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1BackupRules(output.Rules, context)
        : undefined,
  };
};
const deserializeAws_restJson1BackupPlansList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackupPlansListMember(entry, context);
    });
};
const deserializeAws_restJson1BackupPlansListMember = (output, context) => {
  return {
    AdvancedBackupSettings:
      output.AdvancedBackupSettings !== undefined && output.AdvancedBackupSettings !== null
        ? deserializeAws_restJson1AdvancedBackupSettings(output.AdvancedBackupSettings, context)
        : undefined,
    BackupPlanArn:
      output.BackupPlanArn !== undefined && output.BackupPlanArn !== null ? output.BackupPlanArn : undefined,
    BackupPlanId: output.BackupPlanId !== undefined && output.BackupPlanId !== null ? output.BackupPlanId : undefined,
    BackupPlanName:
      output.BackupPlanName !== undefined && output.BackupPlanName !== null ? output.BackupPlanName : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    CreatorRequestId:
      output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
    DeletionDate:
      output.DeletionDate !== undefined && output.DeletionDate !== null
        ? new Date(Math.round(output.DeletionDate * 1000))
        : undefined,
    LastExecutionDate:
      output.LastExecutionDate !== undefined && output.LastExecutionDate !== null
        ? new Date(Math.round(output.LastExecutionDate * 1000))
        : undefined,
    VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
  };
};
const deserializeAws_restJson1BackupPlanTemplatesList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackupPlanTemplatesListMember(entry, context);
    });
};
const deserializeAws_restJson1BackupPlanTemplatesListMember = (output, context) => {
  return {
    BackupPlanTemplateId:
      output.BackupPlanTemplateId !== undefined && output.BackupPlanTemplateId !== null
        ? output.BackupPlanTemplateId
        : undefined,
    BackupPlanTemplateName:
      output.BackupPlanTemplateName !== undefined && output.BackupPlanTemplateName !== null
        ? output.BackupPlanTemplateName
        : undefined,
  };
};
const deserializeAws_restJson1BackupPlanVersionsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackupPlansListMember(entry, context);
    });
};
const deserializeAws_restJson1BackupRule = (output, context) => {
  return {
    CompletionWindowMinutes:
      output.CompletionWindowMinutes !== undefined && output.CompletionWindowMinutes !== null
        ? output.CompletionWindowMinutes
        : undefined,
    CopyActions:
      output.CopyActions !== undefined && output.CopyActions !== null
        ? deserializeAws_restJson1CopyActions(output.CopyActions, context)
        : undefined,
    EnableContinuousBackup:
      output.EnableContinuousBackup !== undefined && output.EnableContinuousBackup !== null
        ? output.EnableContinuousBackup
        : undefined,
    Lifecycle:
      output.Lifecycle !== undefined && output.Lifecycle !== null
        ? deserializeAws_restJson1Lifecycle(output.Lifecycle, context)
        : undefined,
    RecoveryPointTags:
      output.RecoveryPointTags !== undefined && output.RecoveryPointTags !== null
        ? deserializeAws_restJson1Tags(output.RecoveryPointTags, context)
        : undefined,
    RuleId: output.RuleId !== undefined && output.RuleId !== null ? output.RuleId : undefined,
    RuleName: output.RuleName !== undefined && output.RuleName !== null ? output.RuleName : undefined,
    ScheduleExpression:
      output.ScheduleExpression !== undefined && output.ScheduleExpression !== null
        ? output.ScheduleExpression
        : undefined,
    StartWindowMinutes:
      output.StartWindowMinutes !== undefined && output.StartWindowMinutes !== null
        ? output.StartWindowMinutes
        : undefined,
    TargetBackupVaultName:
      output.TargetBackupVaultName !== undefined && output.TargetBackupVaultName !== null
        ? output.TargetBackupVaultName
        : undefined,
  };
};
const deserializeAws_restJson1BackupRules = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackupRule(entry, context);
    });
};
const deserializeAws_restJson1BackupSelection = (output, context) => {
  return {
    IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    ListOfTags:
      output.ListOfTags !== undefined && output.ListOfTags !== null
        ? deserializeAws_restJson1ListOfTags(output.ListOfTags, context)
        : undefined,
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_restJson1ResourceArns(output.Resources, context)
        : undefined,
    SelectionName:
      output.SelectionName !== undefined && output.SelectionName !== null ? output.SelectionName : undefined,
  };
};
const deserializeAws_restJson1BackupSelectionsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackupSelectionsListMember(entry, context);
    });
};
const deserializeAws_restJson1BackupSelectionsListMember = (output, context) => {
  return {
    BackupPlanId: output.BackupPlanId !== undefined && output.BackupPlanId !== null ? output.BackupPlanId : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    CreatorRequestId:
      output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
    IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    SelectionId: output.SelectionId !== undefined && output.SelectionId !== null ? output.SelectionId : undefined,
    SelectionName:
      output.SelectionName !== undefined && output.SelectionName !== null ? output.SelectionName : undefined,
  };
};
const deserializeAws_restJson1BackupVaultEvents = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1BackupVaultList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackupVaultListMember(entry, context);
    });
};
const deserializeAws_restJson1BackupVaultListMember = (output, context) => {
  return {
    BackupVaultArn:
      output.BackupVaultArn !== undefined && output.BackupVaultArn !== null ? output.BackupVaultArn : undefined,
    BackupVaultName:
      output.BackupVaultName !== undefined && output.BackupVaultName !== null ? output.BackupVaultName : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    CreatorRequestId:
      output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
    EncryptionKeyArn:
      output.EncryptionKeyArn !== undefined && output.EncryptionKeyArn !== null ? output.EncryptionKeyArn : undefined,
    NumberOfRecoveryPoints:
      output.NumberOfRecoveryPoints !== undefined && output.NumberOfRecoveryPoints !== null
        ? output.NumberOfRecoveryPoints
        : undefined,
  };
};
const deserializeAws_restJson1CalculatedLifecycle = (output, context) => {
  return {
    DeleteAt:
      output.DeleteAt !== undefined && output.DeleteAt !== null
        ? new Date(Math.round(output.DeleteAt * 1000))
        : undefined,
    MoveToColdStorageAt:
      output.MoveToColdStorageAt !== undefined && output.MoveToColdStorageAt !== null
        ? new Date(Math.round(output.MoveToColdStorageAt * 1000))
        : undefined,
  };
};
const deserializeAws_restJson1Condition = (output, context) => {
  return {
    ConditionKey: output.ConditionKey !== undefined && output.ConditionKey !== null ? output.ConditionKey : undefined,
    ConditionType:
      output.ConditionType !== undefined && output.ConditionType !== null ? output.ConditionType : undefined,
    ConditionValue:
      output.ConditionValue !== undefined && output.ConditionValue !== null ? output.ConditionValue : undefined,
  };
};
const deserializeAws_restJson1CopyAction = (output, context) => {
  return {
    DestinationBackupVaultArn:
      output.DestinationBackupVaultArn !== undefined && output.DestinationBackupVaultArn !== null
        ? output.DestinationBackupVaultArn
        : undefined,
    Lifecycle:
      output.Lifecycle !== undefined && output.Lifecycle !== null
        ? deserializeAws_restJson1Lifecycle(output.Lifecycle, context)
        : undefined,
  };
};
const deserializeAws_restJson1CopyActions = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1CopyAction(entry, context);
    });
};
const deserializeAws_restJson1CopyJob = (output, context) => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    BackupSizeInBytes:
      output.BackupSizeInBytes !== undefined && output.BackupSizeInBytes !== null
        ? output.BackupSizeInBytes
        : undefined,
    CompletionDate:
      output.CompletionDate !== undefined && output.CompletionDate !== null
        ? new Date(Math.round(output.CompletionDate * 1000))
        : undefined,
    CopyJobId: output.CopyJobId !== undefined && output.CopyJobId !== null ? output.CopyJobId : undefined,
    CreatedBy:
      output.CreatedBy !== undefined && output.CreatedBy !== null
        ? deserializeAws_restJson1RecoveryPointCreator(output.CreatedBy, context)
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    DestinationBackupVaultArn:
      output.DestinationBackupVaultArn !== undefined && output.DestinationBackupVaultArn !== null
        ? output.DestinationBackupVaultArn
        : undefined,
    DestinationRecoveryPointArn:
      output.DestinationRecoveryPointArn !== undefined && output.DestinationRecoveryPointArn !== null
        ? output.DestinationRecoveryPointArn
        : undefined,
    IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    SourceBackupVaultArn:
      output.SourceBackupVaultArn !== undefined && output.SourceBackupVaultArn !== null
        ? output.SourceBackupVaultArn
        : undefined,
    SourceRecoveryPointArn:
      output.SourceRecoveryPointArn !== undefined && output.SourceRecoveryPointArn !== null
        ? output.SourceRecoveryPointArn
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
  };
};
const deserializeAws_restJson1CopyJobsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1CopyJob(entry, context);
    });
};
const deserializeAws_restJson1GlobalSettings = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const deserializeAws_restJson1Lifecycle = (output, context) => {
  return {
    DeleteAfterDays:
      output.DeleteAfterDays !== undefined && output.DeleteAfterDays !== null ? output.DeleteAfterDays : undefined,
    MoveToColdStorageAfterDays:
      output.MoveToColdStorageAfterDays !== undefined && output.MoveToColdStorageAfterDays !== null
        ? output.MoveToColdStorageAfterDays
        : undefined,
  };
};
const deserializeAws_restJson1ListOfTags = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Condition(entry, context);
    });
};
const deserializeAws_restJson1Metadata = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const deserializeAws_restJson1ProtectedResource = (output, context) => {
  return {
    LastBackupTime:
      output.LastBackupTime !== undefined && output.LastBackupTime !== null
        ? new Date(Math.round(output.LastBackupTime * 1000))
        : undefined,
    ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
  };
};
const deserializeAws_restJson1ProtectedResourcesList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ProtectedResource(entry, context);
    });
};
const deserializeAws_restJson1RecoveryPointByBackupVault = (output, context) => {
  return {
    BackupSizeInBytes:
      output.BackupSizeInBytes !== undefined && output.BackupSizeInBytes !== null
        ? output.BackupSizeInBytes
        : undefined,
    BackupVaultArn:
      output.BackupVaultArn !== undefined && output.BackupVaultArn !== null ? output.BackupVaultArn : undefined,
    BackupVaultName:
      output.BackupVaultName !== undefined && output.BackupVaultName !== null ? output.BackupVaultName : undefined,
    CalculatedLifecycle:
      output.CalculatedLifecycle !== undefined && output.CalculatedLifecycle !== null
        ? deserializeAws_restJson1CalculatedLifecycle(output.CalculatedLifecycle, context)
        : undefined,
    CompletionDate:
      output.CompletionDate !== undefined && output.CompletionDate !== null
        ? new Date(Math.round(output.CompletionDate * 1000))
        : undefined,
    CreatedBy:
      output.CreatedBy !== undefined && output.CreatedBy !== null
        ? deserializeAws_restJson1RecoveryPointCreator(output.CreatedBy, context)
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    EncryptionKeyArn:
      output.EncryptionKeyArn !== undefined && output.EncryptionKeyArn !== null ? output.EncryptionKeyArn : undefined,
    IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    IsEncrypted: output.IsEncrypted !== undefined && output.IsEncrypted !== null ? output.IsEncrypted : undefined,
    LastRestoreTime:
      output.LastRestoreTime !== undefined && output.LastRestoreTime !== null
        ? new Date(Math.round(output.LastRestoreTime * 1000))
        : undefined,
    Lifecycle:
      output.Lifecycle !== undefined && output.Lifecycle !== null
        ? deserializeAws_restJson1Lifecycle(output.Lifecycle, context)
        : undefined,
    RecoveryPointArn:
      output.RecoveryPointArn !== undefined && output.RecoveryPointArn !== null ? output.RecoveryPointArn : undefined,
    ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    SourceBackupVaultArn:
      output.SourceBackupVaultArn !== undefined && output.SourceBackupVaultArn !== null
        ? output.SourceBackupVaultArn
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  };
};
const deserializeAws_restJson1RecoveryPointByBackupVaultList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1RecoveryPointByBackupVault(entry, context);
    });
};
const deserializeAws_restJson1RecoveryPointByResource = (output, context) => {
  return {
    BackupSizeBytes:
      output.BackupSizeBytes !== undefined && output.BackupSizeBytes !== null ? output.BackupSizeBytes : undefined,
    BackupVaultName:
      output.BackupVaultName !== undefined && output.BackupVaultName !== null ? output.BackupVaultName : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    EncryptionKeyArn:
      output.EncryptionKeyArn !== undefined && output.EncryptionKeyArn !== null ? output.EncryptionKeyArn : undefined,
    RecoveryPointArn:
      output.RecoveryPointArn !== undefined && output.RecoveryPointArn !== null ? output.RecoveryPointArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  };
};
const deserializeAws_restJson1RecoveryPointByResourceList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1RecoveryPointByResource(entry, context);
    });
};
const deserializeAws_restJson1RecoveryPointCreator = (output, context) => {
  return {
    BackupPlanArn:
      output.BackupPlanArn !== undefined && output.BackupPlanArn !== null ? output.BackupPlanArn : undefined,
    BackupPlanId: output.BackupPlanId !== undefined && output.BackupPlanId !== null ? output.BackupPlanId : undefined,
    BackupPlanVersion:
      output.BackupPlanVersion !== undefined && output.BackupPlanVersion !== null
        ? output.BackupPlanVersion
        : undefined,
    BackupRuleId: output.BackupRuleId !== undefined && output.BackupRuleId !== null ? output.BackupRuleId : undefined,
  };
};
const deserializeAws_restJson1ResourceArns = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ResourceTypeOptInPreference = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const deserializeAws_restJson1ResourceTypes = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1RestoreJobsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1RestoreJobsListMember(entry, context);
    });
};
const deserializeAws_restJson1RestoreJobsListMember = (output, context) => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    BackupSizeInBytes:
      output.BackupSizeInBytes !== undefined && output.BackupSizeInBytes !== null
        ? output.BackupSizeInBytes
        : undefined,
    CompletionDate:
      output.CompletionDate !== undefined && output.CompletionDate !== null
        ? new Date(Math.round(output.CompletionDate * 1000))
        : undefined,
    CreatedResourceArn:
      output.CreatedResourceArn !== undefined && output.CreatedResourceArn !== null
        ? output.CreatedResourceArn
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    ExpectedCompletionTimeMinutes:
      output.ExpectedCompletionTimeMinutes !== undefined && output.ExpectedCompletionTimeMinutes !== null
        ? output.ExpectedCompletionTimeMinutes
        : undefined,
    IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    PercentDone: output.PercentDone !== undefined && output.PercentDone !== null ? output.PercentDone : undefined,
    RecoveryPointArn:
      output.RecoveryPointArn !== undefined && output.RecoveryPointArn !== null ? output.RecoveryPointArn : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    RestoreJobId: output.RestoreJobId !== undefined && output.RestoreJobId !== null ? output.RestoreJobId : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
  };
};
const deserializeAws_restJson1Tags = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};
const deserializeMetadata = (output) => {
  var _a;
  return {
    httpStatusCode: output.statusCode,
    requestId:
      (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
  };
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
  const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
  const sanitizeErrorCode = (rawValue) => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };
  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }
  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
  return "";
};
//# sourceMappingURL=Aws_restJson1.js.map
