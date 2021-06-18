"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1UpdateSettingsCommand =
  exports.serializeAws_restJson1UpdateControlCommand =
  exports.serializeAws_restJson1UpdateAssessmentStatusCommand =
  exports.serializeAws_restJson1UpdateAssessmentFrameworkCommand =
  exports.serializeAws_restJson1UpdateAssessmentControlSetStatusCommand =
  exports.serializeAws_restJson1UpdateAssessmentControlCommand =
  exports.serializeAws_restJson1UpdateAssessmentCommand =
  exports.serializeAws_restJson1UntagResourceCommand =
  exports.serializeAws_restJson1TagResourceCommand =
  exports.serializeAws_restJson1RegisterOrganizationAdminAccountCommand =
  exports.serializeAws_restJson1RegisterAccountCommand =
  exports.serializeAws_restJson1ListTagsForResourceCommand =
  exports.serializeAws_restJson1ListNotificationsCommand =
  exports.serializeAws_restJson1ListKeywordsForDataSourceCommand =
  exports.serializeAws_restJson1ListControlsCommand =
  exports.serializeAws_restJson1ListAssessmentsCommand =
  exports.serializeAws_restJson1ListAssessmentReportsCommand =
  exports.serializeAws_restJson1ListAssessmentFrameworksCommand =
  exports.serializeAws_restJson1GetSettingsCommand =
  exports.serializeAws_restJson1GetServicesInScopeCommand =
  exports.serializeAws_restJson1GetOrganizationAdminAccountCommand =
  exports.serializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand =
  exports.serializeAws_restJson1GetEvidenceFoldersByAssessmentCommand =
  exports.serializeAws_restJson1GetEvidenceFolderCommand =
  exports.serializeAws_restJson1GetEvidenceByEvidenceFolderCommand =
  exports.serializeAws_restJson1GetEvidenceCommand =
  exports.serializeAws_restJson1GetDelegationsCommand =
  exports.serializeAws_restJson1GetControlCommand =
  exports.serializeAws_restJson1GetChangeLogsCommand =
  exports.serializeAws_restJson1GetAssessmentReportUrlCommand =
  exports.serializeAws_restJson1GetAssessmentFrameworkCommand =
  exports.serializeAws_restJson1GetAssessmentCommand =
  exports.serializeAws_restJson1GetAccountStatusCommand =
  exports.serializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand =
  exports.serializeAws_restJson1DeregisterOrganizationAdminAccountCommand =
  exports.serializeAws_restJson1DeregisterAccountCommand =
  exports.serializeAws_restJson1DeleteControlCommand =
  exports.serializeAws_restJson1DeleteAssessmentReportCommand =
  exports.serializeAws_restJson1DeleteAssessmentFrameworkCommand =
  exports.serializeAws_restJson1DeleteAssessmentCommand =
  exports.serializeAws_restJson1CreateControlCommand =
  exports.serializeAws_restJson1CreateAssessmentReportCommand =
  exports.serializeAws_restJson1CreateAssessmentFrameworkCommand =
  exports.serializeAws_restJson1CreateAssessmentCommand =
  exports.serializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand =
  exports.serializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand =
  exports.serializeAws_restJson1BatchDeleteDelegationByAssessmentCommand =
  exports.serializeAws_restJson1BatchCreateDelegationByAssessmentCommand =
  exports.serializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand =
  exports.serializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand =
    void 0;
exports.deserializeAws_restJson1UpdateControlCommand =
  exports.deserializeAws_restJson1UpdateAssessmentStatusCommand =
  exports.deserializeAws_restJson1UpdateAssessmentFrameworkCommand =
  exports.deserializeAws_restJson1UpdateAssessmentControlSetStatusCommand =
  exports.deserializeAws_restJson1UpdateAssessmentControlCommand =
  exports.deserializeAws_restJson1UpdateAssessmentCommand =
  exports.deserializeAws_restJson1UntagResourceCommand =
  exports.deserializeAws_restJson1TagResourceCommand =
  exports.deserializeAws_restJson1RegisterOrganizationAdminAccountCommand =
  exports.deserializeAws_restJson1RegisterAccountCommand =
  exports.deserializeAws_restJson1ListTagsForResourceCommand =
  exports.deserializeAws_restJson1ListNotificationsCommand =
  exports.deserializeAws_restJson1ListKeywordsForDataSourceCommand =
  exports.deserializeAws_restJson1ListControlsCommand =
  exports.deserializeAws_restJson1ListAssessmentsCommand =
  exports.deserializeAws_restJson1ListAssessmentReportsCommand =
  exports.deserializeAws_restJson1ListAssessmentFrameworksCommand =
  exports.deserializeAws_restJson1GetSettingsCommand =
  exports.deserializeAws_restJson1GetServicesInScopeCommand =
  exports.deserializeAws_restJson1GetOrganizationAdminAccountCommand =
  exports.deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand =
  exports.deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommand =
  exports.deserializeAws_restJson1GetEvidenceFolderCommand =
  exports.deserializeAws_restJson1GetEvidenceByEvidenceFolderCommand =
  exports.deserializeAws_restJson1GetEvidenceCommand =
  exports.deserializeAws_restJson1GetDelegationsCommand =
  exports.deserializeAws_restJson1GetControlCommand =
  exports.deserializeAws_restJson1GetChangeLogsCommand =
  exports.deserializeAws_restJson1GetAssessmentReportUrlCommand =
  exports.deserializeAws_restJson1GetAssessmentFrameworkCommand =
  exports.deserializeAws_restJson1GetAssessmentCommand =
  exports.deserializeAws_restJson1GetAccountStatusCommand =
  exports.deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand =
  exports.deserializeAws_restJson1DeregisterOrganizationAdminAccountCommand =
  exports.deserializeAws_restJson1DeregisterAccountCommand =
  exports.deserializeAws_restJson1DeleteControlCommand =
  exports.deserializeAws_restJson1DeleteAssessmentReportCommand =
  exports.deserializeAws_restJson1DeleteAssessmentFrameworkCommand =
  exports.deserializeAws_restJson1DeleteAssessmentCommand =
  exports.deserializeAws_restJson1CreateControlCommand =
  exports.deserializeAws_restJson1CreateAssessmentReportCommand =
  exports.deserializeAws_restJson1CreateAssessmentFrameworkCommand =
  exports.deserializeAws_restJson1CreateAssessmentCommand =
  exports.deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand =
  exports.deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand =
  exports.deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommand =
  exports.deserializeAws_restJson1BatchCreateDelegationByAssessmentCommand =
  exports.deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand =
  exports.deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand =
  exports.serializeAws_restJson1ValidateAssessmentReportIntegrityCommand =
    void 0;
exports.deserializeAws_restJson1ValidateAssessmentReportIntegrityCommand =
  exports.deserializeAws_restJson1UpdateSettingsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessments/{assessmentId}/associateToAssessmentReport";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.evidenceFolderId !== undefined &&
      input.evidenceFolderId !== null && { evidenceFolderId: input.evidenceFolderId }),
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
exports.serializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand =
  serializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand;
const serializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessments/{assessmentId}/batchAssociateToAssessmentReport";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.evidenceFolderId !== undefined &&
      input.evidenceFolderId !== null && { evidenceFolderId: input.evidenceFolderId }),
    ...(input.evidenceIds !== undefined &&
      input.evidenceIds !== null && { evidenceIds: serializeAws_restJson1EvidenceIds(input.evidenceIds, context) }),
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
exports.serializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand =
  serializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand;
const serializeAws_restJson1BatchCreateDelegationByAssessmentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessments/{assessmentId}/delegations";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.createDelegationRequests !== undefined &&
      input.createDelegationRequests !== null && {
        createDelegationRequests: serializeAws_restJson1CreateDelegationRequests(
          input.createDelegationRequests,
          context
        ),
      }),
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
exports.serializeAws_restJson1BatchCreateDelegationByAssessmentCommand =
  serializeAws_restJson1BatchCreateDelegationByAssessmentCommand;
const serializeAws_restJson1BatchDeleteDelegationByAssessmentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessments/{assessmentId}/delegations";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.delegationIds !== undefined &&
      input.delegationIds !== null && {
        delegationIds: serializeAws_restJson1DelegationIds(input.delegationIds, context),
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
exports.serializeAws_restJson1BatchDeleteDelegationByAssessmentCommand =
  serializeAws_restJson1BatchDeleteDelegationByAssessmentCommand;
const serializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessments/{assessmentId}/batchDisassociateFromAssessmentReport";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.evidenceFolderId !== undefined &&
      input.evidenceFolderId !== null && { evidenceFolderId: input.evidenceFolderId }),
    ...(input.evidenceIds !== undefined &&
      input.evidenceIds !== null && { evidenceIds: serializeAws_restJson1EvidenceIds(input.evidenceIds, context) }),
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
exports.serializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand =
  serializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand;
const serializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}/evidence";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.controlSetId !== undefined) {
    const labelValue = input.controlSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlSetId.");
    }
    resolvedPath = resolvedPath.replace("{controlSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlSetId.");
  }
  if (input.controlId !== undefined) {
    const labelValue = input.controlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlId.");
    }
    resolvedPath = resolvedPath.replace("{controlId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.manualEvidence !== undefined &&
      input.manualEvidence !== null && {
        manualEvidence: serializeAws_restJson1ManualEvidenceList(input.manualEvidence, context),
      }),
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
exports.serializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand =
  serializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand;
const serializeAws_restJson1CreateAssessmentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessments";
  let body;
  body = JSON.stringify({
    ...(input.assessmentReportsDestination !== undefined &&
      input.assessmentReportsDestination !== null && {
        assessmentReportsDestination: serializeAws_restJson1AssessmentReportsDestination(
          input.assessmentReportsDestination,
          context
        ),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.frameworkId !== undefined && input.frameworkId !== null && { frameworkId: input.frameworkId }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.roles !== undefined &&
      input.roles !== null && { roles: serializeAws_restJson1Roles(input.roles, context) }),
    ...(input.scope !== undefined &&
      input.scope !== null && { scope: serializeAws_restJson1Scope(input.scope, context) }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateAssessmentCommand = serializeAws_restJson1CreateAssessmentCommand;
const serializeAws_restJson1CreateAssessmentFrameworkCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessmentFrameworks";
  let body;
  body = JSON.stringify({
    ...(input.complianceType !== undefined &&
      input.complianceType !== null && { complianceType: input.complianceType }),
    ...(input.controlSets !== undefined &&
      input.controlSets !== null && {
        controlSets: serializeAws_restJson1CreateAssessmentFrameworkControlSets(input.controlSets, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateAssessmentFrameworkCommand = serializeAws_restJson1CreateAssessmentFrameworkCommand;
const serializeAws_restJson1CreateAssessmentReportCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessments/{assessmentId}/reports";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
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
exports.serializeAws_restJson1CreateAssessmentReportCommand = serializeAws_restJson1CreateAssessmentReportCommand;
const serializeAws_restJson1CreateControlCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/controls";
  let body;
  body = JSON.stringify({
    ...(input.actionPlanInstructions !== undefined &&
      input.actionPlanInstructions !== null && { actionPlanInstructions: input.actionPlanInstructions }),
    ...(input.actionPlanTitle !== undefined &&
      input.actionPlanTitle !== null && { actionPlanTitle: input.actionPlanTitle }),
    ...(input.controlMappingSources !== undefined &&
      input.controlMappingSources !== null && {
        controlMappingSources: serializeAws_restJson1CreateControlMappingSources(input.controlMappingSources, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.testingInformation !== undefined &&
      input.testingInformation !== null && { testingInformation: input.testingInformation }),
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
exports.serializeAws_restJson1CreateControlCommand = serializeAws_restJson1CreateControlCommand;
const serializeAws_restJson1DeleteAssessmentCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/assessments/{assessmentId}";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
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
exports.serializeAws_restJson1DeleteAssessmentCommand = serializeAws_restJson1DeleteAssessmentCommand;
const serializeAws_restJson1DeleteAssessmentFrameworkCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/assessmentFrameworks/{frameworkId}";
  if (input.frameworkId !== undefined) {
    const labelValue = input.frameworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: frameworkId.");
    }
    resolvedPath = resolvedPath.replace("{frameworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: frameworkId.");
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
exports.serializeAws_restJson1DeleteAssessmentFrameworkCommand = serializeAws_restJson1DeleteAssessmentFrameworkCommand;
const serializeAws_restJson1DeleteAssessmentReportCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/assessments/{assessmentId}/reports/{assessmentReportId}";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.assessmentReportId !== undefined) {
    const labelValue = input.assessmentReportId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentReportId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentReportId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentReportId.");
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
exports.serializeAws_restJson1DeleteAssessmentReportCommand = serializeAws_restJson1DeleteAssessmentReportCommand;
const serializeAws_restJson1DeleteControlCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/controls/{controlId}";
  if (input.controlId !== undefined) {
    const labelValue = input.controlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlId.");
    }
    resolvedPath = resolvedPath.replace("{controlId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlId.");
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
exports.serializeAws_restJson1DeleteControlCommand = serializeAws_restJson1DeleteControlCommand;
const serializeAws_restJson1DeregisterAccountCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/account/deregisterAccount";
  let body;
  body = "";
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
exports.serializeAws_restJson1DeregisterAccountCommand = serializeAws_restJson1DeregisterAccountCommand;
const serializeAws_restJson1DeregisterOrganizationAdminAccountCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/account/deregisterOrganizationAdminAccount";
  let body;
  body = JSON.stringify({
    ...(input.adminAccountId !== undefined &&
      input.adminAccountId !== null && { adminAccountId: input.adminAccountId }),
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
exports.serializeAws_restJson1DeregisterOrganizationAdminAccountCommand =
  serializeAws_restJson1DeregisterOrganizationAdminAccountCommand;
const serializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessments/{assessmentId}/disassociateFromAssessmentReport";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.evidenceFolderId !== undefined &&
      input.evidenceFolderId !== null && { evidenceFolderId: input.evidenceFolderId }),
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
exports.serializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand =
  serializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand;
const serializeAws_restJson1GetAccountStatusCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/account/status";
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
exports.serializeAws_restJson1GetAccountStatusCommand = serializeAws_restJson1GetAccountStatusCommand;
const serializeAws_restJson1GetAssessmentCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/assessments/{assessmentId}";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
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
exports.serializeAws_restJson1GetAssessmentCommand = serializeAws_restJson1GetAssessmentCommand;
const serializeAws_restJson1GetAssessmentFrameworkCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/assessmentFrameworks/{frameworkId}";
  if (input.frameworkId !== undefined) {
    const labelValue = input.frameworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: frameworkId.");
    }
    resolvedPath = resolvedPath.replace("{frameworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: frameworkId.");
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
exports.serializeAws_restJson1GetAssessmentFrameworkCommand = serializeAws_restJson1GetAssessmentFrameworkCommand;
const serializeAws_restJson1GetAssessmentReportUrlCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/assessments/{assessmentId}/reports/{assessmentReportId}/url";
  if (input.assessmentReportId !== undefined) {
    const labelValue = input.assessmentReportId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentReportId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentReportId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentReportId.");
  }
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
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
exports.serializeAws_restJson1GetAssessmentReportUrlCommand = serializeAws_restJson1GetAssessmentReportUrlCommand;
const serializeAws_restJson1GetChangeLogsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/assessments/{assessmentId}/changelogs";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  const query = {
    ...(input.controlSetId !== undefined && { controlSetId: input.controlSetId }),
    ...(input.controlId !== undefined && { controlId: input.controlId }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1GetChangeLogsCommand = serializeAws_restJson1GetChangeLogsCommand;
const serializeAws_restJson1GetControlCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/controls/{controlId}";
  if (input.controlId !== undefined) {
    const labelValue = input.controlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlId.");
    }
    resolvedPath = resolvedPath.replace("{controlId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlId.");
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
exports.serializeAws_restJson1GetControlCommand = serializeAws_restJson1GetControlCommand;
const serializeAws_restJson1GetDelegationsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/delegations";
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1GetDelegationsCommand = serializeAws_restJson1GetDelegationsCommand;
const serializeAws_restJson1GetEvidenceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath =
    "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence/{evidenceId}";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.controlSetId !== undefined) {
    const labelValue = input.controlSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlSetId.");
    }
    resolvedPath = resolvedPath.replace("{controlSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlSetId.");
  }
  if (input.evidenceFolderId !== undefined) {
    const labelValue = input.evidenceFolderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: evidenceFolderId.");
    }
    resolvedPath = resolvedPath.replace("{evidenceFolderId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: evidenceFolderId.");
  }
  if (input.evidenceId !== undefined) {
    const labelValue = input.evidenceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: evidenceId.");
    }
    resolvedPath = resolvedPath.replace("{evidenceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: evidenceId.");
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
exports.serializeAws_restJson1GetEvidenceCommand = serializeAws_restJson1GetEvidenceCommand;
const serializeAws_restJson1GetEvidenceByEvidenceFolderCommand = async (input, context) => {
  const headers = {};
  let resolvedPath =
    "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.controlSetId !== undefined) {
    const labelValue = input.controlSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlSetId.");
    }
    resolvedPath = resolvedPath.replace("{controlSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlSetId.");
  }
  if (input.evidenceFolderId !== undefined) {
    const labelValue = input.evidenceFolderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: evidenceFolderId.");
    }
    resolvedPath = resolvedPath.replace("{evidenceFolderId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: evidenceFolderId.");
  }
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1GetEvidenceByEvidenceFolderCommand =
  serializeAws_restJson1GetEvidenceByEvidenceFolderCommand;
const serializeAws_restJson1GetEvidenceFolderCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.controlSetId !== undefined) {
    const labelValue = input.controlSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlSetId.");
    }
    resolvedPath = resolvedPath.replace("{controlSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlSetId.");
  }
  if (input.evidenceFolderId !== undefined) {
    const labelValue = input.evidenceFolderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: evidenceFolderId.");
    }
    resolvedPath = resolvedPath.replace("{evidenceFolderId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: evidenceFolderId.");
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
exports.serializeAws_restJson1GetEvidenceFolderCommand = serializeAws_restJson1GetEvidenceFolderCommand;
const serializeAws_restJson1GetEvidenceFoldersByAssessmentCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/assessments/{assessmentId}/evidenceFolders";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1GetEvidenceFoldersByAssessmentCommand =
  serializeAws_restJson1GetEvidenceFoldersByAssessmentCommand;
const serializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/assessments/{assessmentId}/evidenceFolders-by-assessment-control/{controlSetId}/{controlId}";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.controlSetId !== undefined) {
    const labelValue = input.controlSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlSetId.");
    }
    resolvedPath = resolvedPath.replace("{controlSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlSetId.");
  }
  if (input.controlId !== undefined) {
    const labelValue = input.controlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlId.");
    }
    resolvedPath = resolvedPath.replace("{controlId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlId.");
  }
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand =
  serializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand;
const serializeAws_restJson1GetOrganizationAdminAccountCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/account/organizationAdminAccount";
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
exports.serializeAws_restJson1GetOrganizationAdminAccountCommand =
  serializeAws_restJson1GetOrganizationAdminAccountCommand;
const serializeAws_restJson1GetServicesInScopeCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/services";
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
exports.serializeAws_restJson1GetServicesInScopeCommand = serializeAws_restJson1GetServicesInScopeCommand;
const serializeAws_restJson1GetSettingsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/settings/{attribute}";
  if (input.attribute !== undefined) {
    const labelValue = input.attribute;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: attribute.");
    }
    resolvedPath = resolvedPath.replace("{attribute}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: attribute.");
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
exports.serializeAws_restJson1GetSettingsCommand = serializeAws_restJson1GetSettingsCommand;
const serializeAws_restJson1ListAssessmentFrameworksCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/assessmentFrameworks";
  const query = {
    ...(input.frameworkType !== undefined && { frameworkType: input.frameworkType }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListAssessmentFrameworksCommand = serializeAws_restJson1ListAssessmentFrameworksCommand;
const serializeAws_restJson1ListAssessmentReportsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/assessmentReports";
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListAssessmentReportsCommand = serializeAws_restJson1ListAssessmentReportsCommand;
const serializeAws_restJson1ListAssessmentsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/assessments";
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListAssessmentsCommand = serializeAws_restJson1ListAssessmentsCommand;
const serializeAws_restJson1ListControlsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/controls";
  const query = {
    ...(input.controlType !== undefined && { controlType: input.controlType }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListControlsCommand = serializeAws_restJson1ListControlsCommand;
const serializeAws_restJson1ListKeywordsForDataSourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/dataSourceKeywords";
  const query = {
    ...(input.source !== undefined && { source: input.source }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListKeywordsForDataSourceCommand = serializeAws_restJson1ListKeywordsForDataSourceCommand;
const serializeAws_restJson1ListNotificationsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/notifications";
  const query = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListNotificationsCommand = serializeAws_restJson1ListNotificationsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
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
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1RegisterAccountCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/account/registerAccount";
  let body;
  body = JSON.stringify({
    ...(input.delegatedAdminAccount !== undefined &&
      input.delegatedAdminAccount !== null && { delegatedAdminAccount: input.delegatedAdminAccount }),
    ...(input.kmsKey !== undefined && input.kmsKey !== null && { kmsKey: input.kmsKey }),
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
exports.serializeAws_restJson1RegisterAccountCommand = serializeAws_restJson1RegisterAccountCommand;
const serializeAws_restJson1RegisterOrganizationAdminAccountCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/account/registerOrganizationAdminAccount";
  let body;
  body = JSON.stringify({
    ...(input.adminAccountId !== undefined &&
      input.adminAccountId !== null && { adminAccountId: input.adminAccountId }),
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
exports.serializeAws_restJson1RegisterOrganizationAdminAccountCommand =
  serializeAws_restJson1RegisterOrganizationAdminAccountCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body;
  body = JSON.stringify({
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
  const headers = {};
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query = {
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
  };
  let body;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new protocol_http_1.HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateAssessmentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessments/{assessmentId}";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.assessmentDescription !== undefined &&
      input.assessmentDescription !== null && { assessmentDescription: input.assessmentDescription }),
    ...(input.assessmentName !== undefined &&
      input.assessmentName !== null && { assessmentName: input.assessmentName }),
    ...(input.assessmentReportsDestination !== undefined &&
      input.assessmentReportsDestination !== null && {
        assessmentReportsDestination: serializeAws_restJson1AssessmentReportsDestination(
          input.assessmentReportsDestination,
          context
        ),
      }),
    ...(input.roles !== undefined &&
      input.roles !== null && { roles: serializeAws_restJson1Roles(input.roles, context) }),
    ...(input.scope !== undefined &&
      input.scope !== null && { scope: serializeAws_restJson1Scope(input.scope, context) }),
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
exports.serializeAws_restJson1UpdateAssessmentCommand = serializeAws_restJson1UpdateAssessmentCommand;
const serializeAws_restJson1UpdateAssessmentControlCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.controlSetId !== undefined) {
    const labelValue = input.controlSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlSetId.");
    }
    resolvedPath = resolvedPath.replace("{controlSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlSetId.");
  }
  if (input.controlId !== undefined) {
    const labelValue = input.controlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlId.");
    }
    resolvedPath = resolvedPath.replace("{controlId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.commentBody !== undefined && input.commentBody !== null && { commentBody: input.commentBody }),
    ...(input.controlStatus !== undefined && input.controlStatus !== null && { controlStatus: input.controlStatus }),
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
exports.serializeAws_restJson1UpdateAssessmentControlCommand = serializeAws_restJson1UpdateAssessmentControlCommand;
const serializeAws_restJson1UpdateAssessmentControlSetStatusCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessments/{assessmentId}/controlSets/{controlSetId}/status";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.controlSetId !== undefined) {
    const labelValue = input.controlSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlSetId.");
    }
    resolvedPath = resolvedPath.replace("{controlSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlSetId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.comment !== undefined && input.comment !== null && { comment: input.comment }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
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
exports.serializeAws_restJson1UpdateAssessmentControlSetStatusCommand =
  serializeAws_restJson1UpdateAssessmentControlSetStatusCommand;
const serializeAws_restJson1UpdateAssessmentFrameworkCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessmentFrameworks/{frameworkId}";
  if (input.frameworkId !== undefined) {
    const labelValue = input.frameworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: frameworkId.");
    }
    resolvedPath = resolvedPath.replace("{frameworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: frameworkId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.complianceType !== undefined &&
      input.complianceType !== null && { complianceType: input.complianceType }),
    ...(input.controlSets !== undefined &&
      input.controlSets !== null && {
        controlSets: serializeAws_restJson1UpdateAssessmentFrameworkControlSets(input.controlSets, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
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
exports.serializeAws_restJson1UpdateAssessmentFrameworkCommand = serializeAws_restJson1UpdateAssessmentFrameworkCommand;
const serializeAws_restJson1UpdateAssessmentStatusCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessments/{assessmentId}/status";
  if (input.assessmentId !== undefined) {
    const labelValue = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
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
exports.serializeAws_restJson1UpdateAssessmentStatusCommand = serializeAws_restJson1UpdateAssessmentStatusCommand;
const serializeAws_restJson1UpdateControlCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/controls/{controlId}";
  if (input.controlId !== undefined) {
    const labelValue = input.controlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlId.");
    }
    resolvedPath = resolvedPath.replace("{controlId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.actionPlanInstructions !== undefined &&
      input.actionPlanInstructions !== null && { actionPlanInstructions: input.actionPlanInstructions }),
    ...(input.actionPlanTitle !== undefined &&
      input.actionPlanTitle !== null && { actionPlanTitle: input.actionPlanTitle }),
    ...(input.controlMappingSources !== undefined &&
      input.controlMappingSources !== null && {
        controlMappingSources: serializeAws_restJson1ControlMappingSources(input.controlMappingSources, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.testingInformation !== undefined &&
      input.testingInformation !== null && { testingInformation: input.testingInformation }),
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
exports.serializeAws_restJson1UpdateControlCommand = serializeAws_restJson1UpdateControlCommand;
const serializeAws_restJson1UpdateSettingsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/settings";
  let body;
  body = JSON.stringify({
    ...(input.defaultAssessmentReportsDestination !== undefined &&
      input.defaultAssessmentReportsDestination !== null && {
        defaultAssessmentReportsDestination: serializeAws_restJson1AssessmentReportsDestination(
          input.defaultAssessmentReportsDestination,
          context
        ),
      }),
    ...(input.defaultProcessOwners !== undefined &&
      input.defaultProcessOwners !== null && {
        defaultProcessOwners: serializeAws_restJson1Roles(input.defaultProcessOwners, context),
      }),
    ...(input.kmsKey !== undefined && input.kmsKey !== null && { kmsKey: input.kmsKey }),
    ...(input.snsTopic !== undefined && input.snsTopic !== null && { snsTopic: input.snsTopic }),
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
exports.serializeAws_restJson1UpdateSettingsCommand = serializeAws_restJson1UpdateSettingsCommand;
const serializeAws_restJson1ValidateAssessmentReportIntegrityCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/assessmentReports/integrity";
  let body;
  body = JSON.stringify({
    ...(input.s3RelativePath !== undefined &&
      input.s3RelativePath !== null && { s3RelativePath: input.s3RelativePath }),
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
exports.serializeAws_restJson1ValidateAssessmentReportIntegrityCommand =
  serializeAws_restJson1ValidateAssessmentReportIntegrityCommand;
const deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand =
  deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand;
const deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    errors: undefined,
    evidenceIds: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.errors !== undefined && data.errors !== null) {
    contents.errors = deserializeAws_restJson1AssessmentReportEvidenceErrors(data.errors, context);
  }
  if (data.evidenceIds !== undefined && data.evidenceIds !== null) {
    contents.evidenceIds = deserializeAws_restJson1EvidenceIds(data.evidenceIds, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand =
  deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand;
const deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BatchCreateDelegationByAssessmentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchCreateDelegationByAssessmentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    delegations: undefined,
    errors: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.delegations !== undefined && data.delegations !== null) {
    contents.delegations = deserializeAws_restJson1Delegations(data.delegations, context);
  }
  if (data.errors !== undefined && data.errors !== null) {
    contents.errors = deserializeAws_restJson1BatchCreateDelegationByAssessmentErrors(data.errors, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchCreateDelegationByAssessmentCommand =
  deserializeAws_restJson1BatchCreateDelegationByAssessmentCommand;
const deserializeAws_restJson1BatchCreateDelegationByAssessmentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    errors: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.errors !== undefined && data.errors !== null) {
    contents.errors = deserializeAws_restJson1BatchDeleteDelegationByAssessmentErrors(data.errors, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommand =
  deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommand;
const deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    errors: undefined,
    evidenceIds: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.errors !== undefined && data.errors !== null) {
    contents.errors = deserializeAws_restJson1AssessmentReportEvidenceErrors(data.errors, context);
  }
  if (data.evidenceIds !== undefined && data.evidenceIds !== null) {
    contents.evidenceIds = deserializeAws_restJson1EvidenceIds(data.evidenceIds, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand =
  deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand;
const deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    errors: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.errors !== undefined && data.errors !== null) {
    contents.errors = deserializeAws_restJson1BatchImportEvidenceToAssessmentControlErrors(data.errors, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand =
  deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand;
const deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateAssessmentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAssessmentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    assessment: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.assessment !== undefined && data.assessment !== null) {
    contents.assessment = deserializeAws_restJson1Assessment(data.assessment, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAssessmentCommand = deserializeAws_restJson1CreateAssessmentCommand;
const deserializeAws_restJson1CreateAssessmentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateAssessmentFrameworkCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAssessmentFrameworkCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    framework: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.framework !== undefined && data.framework !== null) {
    contents.framework = deserializeAws_restJson1Framework(data.framework, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAssessmentFrameworkCommand =
  deserializeAws_restJson1CreateAssessmentFrameworkCommand;
const deserializeAws_restJson1CreateAssessmentFrameworkCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateAssessmentReportCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAssessmentReportCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    assessmentReport: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.assessmentReport !== undefined && data.assessmentReport !== null) {
    contents.assessmentReport = deserializeAws_restJson1AssessmentReport(data.assessmentReport, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAssessmentReportCommand = deserializeAws_restJson1CreateAssessmentReportCommand;
const deserializeAws_restJson1CreateAssessmentReportCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateControlCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateControlCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    control: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.control !== undefined && data.control !== null) {
    contents.control = deserializeAws_restJson1Control(data.control, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateControlCommand = deserializeAws_restJson1CreateControlCommand;
const deserializeAws_restJson1CreateControlCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteAssessmentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAssessmentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAssessmentCommand = deserializeAws_restJson1DeleteAssessmentCommand;
const deserializeAws_restJson1DeleteAssessmentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteAssessmentFrameworkCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAssessmentFrameworkCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAssessmentFrameworkCommand =
  deserializeAws_restJson1DeleteAssessmentFrameworkCommand;
const deserializeAws_restJson1DeleteAssessmentFrameworkCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteAssessmentReportCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAssessmentReportCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAssessmentReportCommand = deserializeAws_restJson1DeleteAssessmentReportCommand;
const deserializeAws_restJson1DeleteAssessmentReportCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteControlCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteControlCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteControlCommand = deserializeAws_restJson1DeleteControlCommand;
const deserializeAws_restJson1DeleteControlCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeregisterAccountCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterAccountCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeregisterAccountCommand = deserializeAws_restJson1DeregisterAccountCommand;
const deserializeAws_restJson1DeregisterAccountCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeregisterOrganizationAdminAccountCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterOrganizationAdminAccountCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeregisterOrganizationAdminAccountCommand =
  deserializeAws_restJson1DeregisterOrganizationAdminAccountCommand;
const deserializeAws_restJson1DeregisterOrganizationAdminAccountCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand =
  deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand;
const deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetAccountStatusCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAccountStatusCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAccountStatusCommand = deserializeAws_restJson1GetAccountStatusCommand;
const deserializeAws_restJson1GetAccountStatusCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetAssessmentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssessmentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    assessment: undefined,
    userRole: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.assessment !== undefined && data.assessment !== null) {
    contents.assessment = deserializeAws_restJson1Assessment(data.assessment, context);
  }
  if (data.userRole !== undefined && data.userRole !== null) {
    contents.userRole = deserializeAws_restJson1Role(data.userRole, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAssessmentCommand = deserializeAws_restJson1GetAssessmentCommand;
const deserializeAws_restJson1GetAssessmentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetAssessmentFrameworkCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssessmentFrameworkCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    framework: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.framework !== undefined && data.framework !== null) {
    contents.framework = deserializeAws_restJson1Framework(data.framework, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAssessmentFrameworkCommand = deserializeAws_restJson1GetAssessmentFrameworkCommand;
const deserializeAws_restJson1GetAssessmentFrameworkCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetAssessmentReportUrlCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssessmentReportUrlCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    preSignedUrl: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.preSignedUrl !== undefined && data.preSignedUrl !== null) {
    contents.preSignedUrl = deserializeAws_restJson1URL(data.preSignedUrl, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAssessmentReportUrlCommand = deserializeAws_restJson1GetAssessmentReportUrlCommand;
const deserializeAws_restJson1GetAssessmentReportUrlCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetChangeLogsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetChangeLogsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    changeLogs: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.changeLogs !== undefined && data.changeLogs !== null) {
    contents.changeLogs = deserializeAws_restJson1ChangeLogs(data.changeLogs, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetChangeLogsCommand = deserializeAws_restJson1GetChangeLogsCommand;
const deserializeAws_restJson1GetChangeLogsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetControlCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetControlCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    control: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.control !== undefined && data.control !== null) {
    contents.control = deserializeAws_restJson1Control(data.control, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetControlCommand = deserializeAws_restJson1GetControlCommand;
const deserializeAws_restJson1GetControlCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetDelegationsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDelegationsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    delegations: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.delegations !== undefined && data.delegations !== null) {
    contents.delegations = deserializeAws_restJson1DelegationMetadataList(data.delegations, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDelegationsCommand = deserializeAws_restJson1GetDelegationsCommand;
const deserializeAws_restJson1GetDelegationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetEvidenceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEvidenceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    evidence: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.evidence !== undefined && data.evidence !== null) {
    contents.evidence = deserializeAws_restJson1Evidence(data.evidence, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEvidenceCommand = deserializeAws_restJson1GetEvidenceCommand;
const deserializeAws_restJson1GetEvidenceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetEvidenceByEvidenceFolderCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEvidenceByEvidenceFolderCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    evidence: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.evidence !== undefined && data.evidence !== null) {
    contents.evidence = deserializeAws_restJson1EvidenceList(data.evidence, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEvidenceByEvidenceFolderCommand =
  deserializeAws_restJson1GetEvidenceByEvidenceFolderCommand;
const deserializeAws_restJson1GetEvidenceByEvidenceFolderCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetEvidenceFolderCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEvidenceFolderCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    evidenceFolder: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.evidenceFolder !== undefined && data.evidenceFolder !== null) {
    contents.evidenceFolder = deserializeAws_restJson1AssessmentEvidenceFolder(data.evidenceFolder, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEvidenceFolderCommand = deserializeAws_restJson1GetEvidenceFolderCommand;
const deserializeAws_restJson1GetEvidenceFolderCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    evidenceFolders: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.evidenceFolders !== undefined && data.evidenceFolders !== null) {
    contents.evidenceFolders = deserializeAws_restJson1AssessmentEvidenceFolders(data.evidenceFolders, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommand =
  deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommand;
const deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    evidenceFolders: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.evidenceFolders !== undefined && data.evidenceFolders !== null) {
    contents.evidenceFolders = deserializeAws_restJson1AssessmentEvidenceFolders(data.evidenceFolders, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand =
  deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand;
const deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetOrganizationAdminAccountCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetOrganizationAdminAccountCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    adminAccountId: undefined,
    organizationId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.adminAccountId !== undefined && data.adminAccountId !== null) {
    contents.adminAccountId = data.adminAccountId;
  }
  if (data.organizationId !== undefined && data.organizationId !== null) {
    contents.organizationId = data.organizationId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetOrganizationAdminAccountCommand =
  deserializeAws_restJson1GetOrganizationAdminAccountCommand;
const deserializeAws_restJson1GetOrganizationAdminAccountCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetServicesInScopeCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetServicesInScopeCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    serviceMetadata: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.serviceMetadata !== undefined && data.serviceMetadata !== null) {
    contents.serviceMetadata = deserializeAws_restJson1ServiceMetadataList(data.serviceMetadata, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetServicesInScopeCommand = deserializeAws_restJson1GetServicesInScopeCommand;
const deserializeAws_restJson1GetServicesInScopeCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetSettingsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSettingsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    settings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.settings !== undefined && data.settings !== null) {
    contents.settings = deserializeAws_restJson1Settings(data.settings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSettingsCommand = deserializeAws_restJson1GetSettingsCommand;
const deserializeAws_restJson1GetSettingsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListAssessmentFrameworksCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAssessmentFrameworksCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    frameworkMetadataList: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.frameworkMetadataList !== undefined && data.frameworkMetadataList !== null) {
    contents.frameworkMetadataList = deserializeAws_restJson1FrameworkMetadataList(data.frameworkMetadataList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAssessmentFrameworksCommand =
  deserializeAws_restJson1ListAssessmentFrameworksCommand;
const deserializeAws_restJson1ListAssessmentFrameworksCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListAssessmentReportsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAssessmentReportsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    assessmentReports: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.assessmentReports !== undefined && data.assessmentReports !== null) {
    contents.assessmentReports = deserializeAws_restJson1AssessmentReportsMetadata(data.assessmentReports, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAssessmentReportsCommand = deserializeAws_restJson1ListAssessmentReportsCommand;
const deserializeAws_restJson1ListAssessmentReportsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListAssessmentsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAssessmentsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    assessmentMetadata: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.assessmentMetadata !== undefined && data.assessmentMetadata !== null) {
    contents.assessmentMetadata = deserializeAws_restJson1ListAssessmentMetadata(data.assessmentMetadata, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAssessmentsCommand = deserializeAws_restJson1ListAssessmentsCommand;
const deserializeAws_restJson1ListAssessmentsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListControlsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListControlsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    controlMetadataList: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.controlMetadataList !== undefined && data.controlMetadataList !== null) {
    contents.controlMetadataList = deserializeAws_restJson1ControlMetadataList(data.controlMetadataList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListControlsCommand = deserializeAws_restJson1ListControlsCommand;
const deserializeAws_restJson1ListControlsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListKeywordsForDataSourceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListKeywordsForDataSourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    keywords: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.keywords !== undefined && data.keywords !== null) {
    contents.keywords = deserializeAws_restJson1Keywords(data.keywords, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListKeywordsForDataSourceCommand =
  deserializeAws_restJson1ListKeywordsForDataSourceCommand;
const deserializeAws_restJson1ListKeywordsForDataSourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListNotificationsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNotificationsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    notifications: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.notifications !== undefined && data.notifications !== null) {
    contents.notifications = deserializeAws_restJson1Notifications(data.notifications, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListNotificationsCommand = deserializeAws_restJson1ListNotificationsCommand;
const deserializeAws_restJson1ListNotificationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsForResourceCommand = deserializeAws_restJson1ListTagsForResourceCommand;
const deserializeAws_restJson1ListTagsForResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RegisterAccountCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterAccountCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RegisterAccountCommand = deserializeAws_restJson1RegisterAccountCommand;
const deserializeAws_restJson1RegisterAccountCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RegisterOrganizationAdminAccountCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterOrganizationAdminAccountCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    adminAccountId: undefined,
    organizationId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.adminAccountId !== undefined && data.adminAccountId !== null) {
    contents.adminAccountId = data.adminAccountId;
  }
  if (data.organizationId !== undefined && data.organizationId !== null) {
    contents.organizationId = data.organizationId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RegisterOrganizationAdminAccountCommand =
  deserializeAws_restJson1RegisterOrganizationAdminAccountCommand;
const deserializeAws_restJson1RegisterOrganizationAdminAccountCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateAssessmentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssessmentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    assessment: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.assessment !== undefined && data.assessment !== null) {
    contents.assessment = deserializeAws_restJson1Assessment(data.assessment, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAssessmentCommand = deserializeAws_restJson1UpdateAssessmentCommand;
const deserializeAws_restJson1UpdateAssessmentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateAssessmentControlCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssessmentControlCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    control: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.control !== undefined && data.control !== null) {
    contents.control = deserializeAws_restJson1AssessmentControl(data.control, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAssessmentControlCommand = deserializeAws_restJson1UpdateAssessmentControlCommand;
const deserializeAws_restJson1UpdateAssessmentControlCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateAssessmentControlSetStatusCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssessmentControlSetStatusCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    controlSet: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.controlSet !== undefined && data.controlSet !== null) {
    contents.controlSet = deserializeAws_restJson1AssessmentControlSet(data.controlSet, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAssessmentControlSetStatusCommand =
  deserializeAws_restJson1UpdateAssessmentControlSetStatusCommand;
const deserializeAws_restJson1UpdateAssessmentControlSetStatusCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateAssessmentFrameworkCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssessmentFrameworkCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    framework: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.framework !== undefined && data.framework !== null) {
    contents.framework = deserializeAws_restJson1Framework(data.framework, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAssessmentFrameworkCommand =
  deserializeAws_restJson1UpdateAssessmentFrameworkCommand;
const deserializeAws_restJson1UpdateAssessmentFrameworkCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateAssessmentStatusCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssessmentStatusCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    assessment: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.assessment !== undefined && data.assessment !== null) {
    contents.assessment = deserializeAws_restJson1Assessment(data.assessment, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAssessmentStatusCommand = deserializeAws_restJson1UpdateAssessmentStatusCommand;
const deserializeAws_restJson1UpdateAssessmentStatusCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateControlCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateControlCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    control: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.control !== undefined && data.control !== null) {
    contents.control = deserializeAws_restJson1Control(data.control, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateControlCommand = deserializeAws_restJson1UpdateControlCommand;
const deserializeAws_restJson1UpdateControlCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateSettingsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSettingsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    settings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.settings !== undefined && data.settings !== null) {
    contents.settings = deserializeAws_restJson1Settings(data.settings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateSettingsCommand = deserializeAws_restJson1UpdateSettingsCommand;
const deserializeAws_restJson1UpdateSettingsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ValidateAssessmentReportIntegrityCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ValidateAssessmentReportIntegrityCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    signatureAlgorithm: undefined,
    signatureDateTime: undefined,
    signatureKeyId: undefined,
    signatureValid: undefined,
    validationErrors: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.signatureAlgorithm !== undefined && data.signatureAlgorithm !== null) {
    contents.signatureAlgorithm = data.signatureAlgorithm;
  }
  if (data.signatureDateTime !== undefined && data.signatureDateTime !== null) {
    contents.signatureDateTime = data.signatureDateTime;
  }
  if (data.signatureKeyId !== undefined && data.signatureKeyId !== null) {
    contents.signatureKeyId = data.signatureKeyId;
  }
  if (data.signatureValid !== undefined && data.signatureValid !== null) {
    contents.signatureValid = data.signatureValid;
  }
  if (data.validationErrors !== undefined && data.validationErrors !== null) {
    contents.validationErrors = deserializeAws_restJson1ValidationErrors(data.validationErrors, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ValidateAssessmentReportIntegrityCommand =
  deserializeAws_restJson1ValidateAssessmentReportIntegrityCommand;
const deserializeAws_restJson1ValidateAssessmentReportIntegrityCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceId: undefined,
    resourceType: undefined,
  };
  const data = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    fields: undefined,
    message: undefined,
    reason: undefined,
  };
  const data = parsedOutput.body;
  if (data.fields !== undefined && data.fields !== null) {
    contents.fields = deserializeAws_restJson1ValidationExceptionFieldList(data.fields, context);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.reason !== undefined && data.reason !== null) {
    contents.reason = data.reason;
  }
  return contents;
};
const serializeAws_restJson1AssessmentReportsDestination = (input, context) => {
  return {
    ...(input.destination !== undefined && input.destination !== null && { destination: input.destination }),
    ...(input.destinationType !== undefined &&
      input.destinationType !== null && { destinationType: input.destinationType }),
  };
};
const serializeAws_restJson1AWSAccount = (input, context) => {
  return {
    ...(input.emailAddress !== undefined && input.emailAddress !== null && { emailAddress: input.emailAddress }),
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};
const serializeAws_restJson1AWSAccounts = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1AWSAccount(entry, context);
    });
};
const serializeAws_restJson1AWSService = (input, context) => {
  return {
    ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
  };
};
const serializeAws_restJson1AWSServices = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1AWSService(entry, context);
    });
};
const serializeAws_restJson1ControlMappingSource = (input, context) => {
  return {
    ...(input.sourceDescription !== undefined &&
      input.sourceDescription !== null && { sourceDescription: input.sourceDescription }),
    ...(input.sourceFrequency !== undefined &&
      input.sourceFrequency !== null && { sourceFrequency: input.sourceFrequency }),
    ...(input.sourceId !== undefined && input.sourceId !== null && { sourceId: input.sourceId }),
    ...(input.sourceKeyword !== undefined &&
      input.sourceKeyword !== null && {
        sourceKeyword: serializeAws_restJson1SourceKeyword(input.sourceKeyword, context),
      }),
    ...(input.sourceName !== undefined && input.sourceName !== null && { sourceName: input.sourceName }),
    ...(input.sourceSetUpOption !== undefined &&
      input.sourceSetUpOption !== null && { sourceSetUpOption: input.sourceSetUpOption }),
    ...(input.sourceType !== undefined && input.sourceType !== null && { sourceType: input.sourceType }),
    ...(input.troubleshootingText !== undefined &&
      input.troubleshootingText !== null && { troubleshootingText: input.troubleshootingText }),
  };
};
const serializeAws_restJson1ControlMappingSources = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1ControlMappingSource(entry, context);
    });
};
const serializeAws_restJson1CreateAssessmentFrameworkControl = (input, context) => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};
const serializeAws_restJson1CreateAssessmentFrameworkControls = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1CreateAssessmentFrameworkControl(entry, context);
    });
};
const serializeAws_restJson1CreateAssessmentFrameworkControlSet = (input, context) => {
  return {
    ...(input.controls !== undefined &&
      input.controls !== null && {
        controls: serializeAws_restJson1CreateAssessmentFrameworkControls(input.controls, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};
const serializeAws_restJson1CreateAssessmentFrameworkControlSets = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1CreateAssessmentFrameworkControlSet(entry, context);
    });
};
const serializeAws_restJson1CreateControlMappingSource = (input, context) => {
  return {
    ...(input.sourceDescription !== undefined &&
      input.sourceDescription !== null && { sourceDescription: input.sourceDescription }),
    ...(input.sourceFrequency !== undefined &&
      input.sourceFrequency !== null && { sourceFrequency: input.sourceFrequency }),
    ...(input.sourceKeyword !== undefined &&
      input.sourceKeyword !== null && {
        sourceKeyword: serializeAws_restJson1SourceKeyword(input.sourceKeyword, context),
      }),
    ...(input.sourceName !== undefined && input.sourceName !== null && { sourceName: input.sourceName }),
    ...(input.sourceSetUpOption !== undefined &&
      input.sourceSetUpOption !== null && { sourceSetUpOption: input.sourceSetUpOption }),
    ...(input.sourceType !== undefined && input.sourceType !== null && { sourceType: input.sourceType }),
    ...(input.troubleshootingText !== undefined &&
      input.troubleshootingText !== null && { troubleshootingText: input.troubleshootingText }),
  };
};
const serializeAws_restJson1CreateControlMappingSources = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1CreateControlMappingSource(entry, context);
    });
};
const serializeAws_restJson1CreateDelegationRequest = (input, context) => {
  return {
    ...(input.comment !== undefined && input.comment !== null && { comment: input.comment }),
    ...(input.controlSetId !== undefined && input.controlSetId !== null && { controlSetId: input.controlSetId }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    ...(input.roleType !== undefined && input.roleType !== null && { roleType: input.roleType }),
  };
};
const serializeAws_restJson1CreateDelegationRequests = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1CreateDelegationRequest(entry, context);
    });
};
const serializeAws_restJson1DelegationIds = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1EvidenceIds = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1ManualEvidence = (input, context) => {
  return {
    ...(input.s3ResourcePath !== undefined &&
      input.s3ResourcePath !== null && { s3ResourcePath: input.s3ResourcePath }),
  };
};
const serializeAws_restJson1ManualEvidenceList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1ManualEvidence(entry, context);
    });
};
const serializeAws_restJson1Role = (input, context) => {
  return {
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    ...(input.roleType !== undefined && input.roleType !== null && { roleType: input.roleType }),
  };
};
const serializeAws_restJson1Roles = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Role(entry, context);
    });
};
const serializeAws_restJson1Scope = (input, context) => {
  return {
    ...(input.awsAccounts !== undefined &&
      input.awsAccounts !== null && { awsAccounts: serializeAws_restJson1AWSAccounts(input.awsAccounts, context) }),
    ...(input.awsServices !== undefined &&
      input.awsServices !== null && { awsServices: serializeAws_restJson1AWSServices(input.awsServices, context) }),
  };
};
const serializeAws_restJson1SourceKeyword = (input, context) => {
  return {
    ...(input.keywordInputType !== undefined &&
      input.keywordInputType !== null && { keywordInputType: input.keywordInputType }),
    ...(input.keywordValue !== undefined && input.keywordValue !== null && { keywordValue: input.keywordValue }),
  };
};
const serializeAws_restJson1TagMap = (input, context) => {
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
const serializeAws_restJson1UpdateAssessmentFrameworkControlSet = (input, context) => {
  return {
    ...(input.controls !== undefined &&
      input.controls !== null && {
        controls: serializeAws_restJson1CreateAssessmentFrameworkControls(input.controls, context),
      }),
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};
const serializeAws_restJson1UpdateAssessmentFrameworkControlSets = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1UpdateAssessmentFrameworkControlSet(entry, context);
    });
};
const deserializeAws_restJson1Assessment = (output, context) => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    awsAccount:
      output.awsAccount !== undefined && output.awsAccount !== null
        ? deserializeAws_restJson1AWSAccount(output.awsAccount, context)
        : undefined,
    framework:
      output.framework !== undefined && output.framework !== null
        ? deserializeAws_restJson1AssessmentFramework(output.framework, context)
        : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1AssessmentMetadata(output.metadata, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  };
};
const deserializeAws_restJson1AssessmentControl = (output, context) => {
  return {
    assessmentReportEvidenceCount:
      output.assessmentReportEvidenceCount !== undefined && output.assessmentReportEvidenceCount !== null
        ? output.assessmentReportEvidenceCount
        : undefined,
    comments:
      output.comments !== undefined && output.comments !== null
        ? deserializeAws_restJson1ControlComments(output.comments, context)
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    evidenceCount:
      output.evidenceCount !== undefined && output.evidenceCount !== null ? output.evidenceCount : undefined,
    evidenceSources:
      output.evidenceSources !== undefined && output.evidenceSources !== null
        ? deserializeAws_restJson1EvidenceSources(output.evidenceSources, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    response: output.response !== undefined && output.response !== null ? output.response : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1AssessmentControls = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AssessmentControl(entry, context);
    });
};
const deserializeAws_restJson1AssessmentControlSet = (output, context) => {
  return {
    controls:
      output.controls !== undefined && output.controls !== null
        ? deserializeAws_restJson1AssessmentControls(output.controls, context)
        : undefined,
    delegations:
      output.delegations !== undefined && output.delegations !== null
        ? deserializeAws_restJson1Delegations(output.delegations, context)
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    manualEvidenceCount:
      output.manualEvidenceCount !== undefined && output.manualEvidenceCount !== null
        ? output.manualEvidenceCount
        : undefined,
    roles:
      output.roles !== undefined && output.roles !== null
        ? deserializeAws_restJson1Roles(output.roles, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    systemEvidenceCount:
      output.systemEvidenceCount !== undefined && output.systemEvidenceCount !== null
        ? output.systemEvidenceCount
        : undefined,
  };
};
const deserializeAws_restJson1AssessmentControlSets = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AssessmentControlSet(entry, context);
    });
};
const deserializeAws_restJson1AssessmentEvidenceFolder = (output, context) => {
  return {
    assessmentId: output.assessmentId !== undefined && output.assessmentId !== null ? output.assessmentId : undefined,
    assessmentReportSelectionCount:
      output.assessmentReportSelectionCount !== undefined && output.assessmentReportSelectionCount !== null
        ? output.assessmentReportSelectionCount
        : undefined,
    author: output.author !== undefined && output.author !== null ? output.author : undefined,
    controlId: output.controlId !== undefined && output.controlId !== null ? output.controlId : undefined,
    controlName: output.controlName !== undefined && output.controlName !== null ? output.controlName : undefined,
    controlSetId: output.controlSetId !== undefined && output.controlSetId !== null ? output.controlSetId : undefined,
    dataSource: output.dataSource !== undefined && output.dataSource !== null ? output.dataSource : undefined,
    date: output.date !== undefined && output.date !== null ? new Date(Math.round(output.date * 1000)) : undefined,
    evidenceAwsServiceSourceCount:
      output.evidenceAwsServiceSourceCount !== undefined && output.evidenceAwsServiceSourceCount !== null
        ? output.evidenceAwsServiceSourceCount
        : undefined,
    evidenceByTypeComplianceCheckCount:
      output.evidenceByTypeComplianceCheckCount !== undefined && output.evidenceByTypeComplianceCheckCount !== null
        ? output.evidenceByTypeComplianceCheckCount
        : undefined,
    evidenceByTypeComplianceCheckIssuesCount:
      output.evidenceByTypeComplianceCheckIssuesCount !== undefined &&
      output.evidenceByTypeComplianceCheckIssuesCount !== null
        ? output.evidenceByTypeComplianceCheckIssuesCount
        : undefined,
    evidenceByTypeConfigurationDataCount:
      output.evidenceByTypeConfigurationDataCount !== undefined && output.evidenceByTypeConfigurationDataCount !== null
        ? output.evidenceByTypeConfigurationDataCount
        : undefined,
    evidenceByTypeManualCount:
      output.evidenceByTypeManualCount !== undefined && output.evidenceByTypeManualCount !== null
        ? output.evidenceByTypeManualCount
        : undefined,
    evidenceByTypeUserActivityCount:
      output.evidenceByTypeUserActivityCount !== undefined && output.evidenceByTypeUserActivityCount !== null
        ? output.evidenceByTypeUserActivityCount
        : undefined,
    evidenceResourcesIncludedCount:
      output.evidenceResourcesIncludedCount !== undefined && output.evidenceResourcesIncludedCount !== null
        ? output.evidenceResourcesIncludedCount
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    totalEvidence:
      output.totalEvidence !== undefined && output.totalEvidence !== null ? output.totalEvidence : undefined,
  };
};
const deserializeAws_restJson1AssessmentEvidenceFolders = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AssessmentEvidenceFolder(entry, context);
    });
};
const deserializeAws_restJson1AssessmentFramework = (output, context) => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    controlSets:
      output.controlSets !== undefined && output.controlSets !== null
        ? deserializeAws_restJson1AssessmentControlSets(output.controlSets, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1FrameworkMetadata(output.metadata, context)
        : undefined,
  };
};
const deserializeAws_restJson1AssessmentFrameworkMetadata = (output, context) => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    complianceType:
      output.complianceType !== undefined && output.complianceType !== null ? output.complianceType : undefined,
    controlSetsCount:
      output.controlSetsCount !== undefined && output.controlSetsCount !== null ? output.controlSetsCount : undefined,
    controlsCount:
      output.controlsCount !== undefined && output.controlsCount !== null ? output.controlsCount : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    logo: output.logo !== undefined && output.logo !== null ? output.logo : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
const deserializeAws_restJson1AssessmentMetadata = (output, context) => {
  return {
    assessmentReportsDestination:
      output.assessmentReportsDestination !== undefined && output.assessmentReportsDestination !== null
        ? deserializeAws_restJson1AssessmentReportsDestination(output.assessmentReportsDestination, context)
        : undefined,
    complianceType:
      output.complianceType !== undefined && output.complianceType !== null ? output.complianceType : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    delegations:
      output.delegations !== undefined && output.delegations !== null
        ? deserializeAws_restJson1Delegations(output.delegations, context)
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null
        ? new Date(Math.round(output.lastUpdated * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    roles:
      output.roles !== undefined && output.roles !== null
        ? deserializeAws_restJson1Roles(output.roles, context)
        : undefined,
    scope:
      output.scope !== undefined && output.scope !== null
        ? deserializeAws_restJson1Scope(output.scope, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1AssessmentMetadataItem = (output, context) => {
  return {
    complianceType:
      output.complianceType !== undefined && output.complianceType !== null ? output.complianceType : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    delegations:
      output.delegations !== undefined && output.delegations !== null
        ? deserializeAws_restJson1Delegations(output.delegations, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null
        ? new Date(Math.round(output.lastUpdated * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    roles:
      output.roles !== undefined && output.roles !== null
        ? deserializeAws_restJson1Roles(output.roles, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1AssessmentReport = (output, context) => {
  return {
    assessmentId: output.assessmentId !== undefined && output.assessmentId !== null ? output.assessmentId : undefined,
    assessmentName:
      output.assessmentName !== undefined && output.assessmentName !== null ? output.assessmentName : undefined,
    author: output.author !== undefined && output.author !== null ? output.author : undefined,
    awsAccountId: output.awsAccountId !== undefined && output.awsAccountId !== null ? output.awsAccountId : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1AssessmentReportEvidenceError = (output, context) => {
  return {
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
    evidenceId: output.evidenceId !== undefined && output.evidenceId !== null ? output.evidenceId : undefined,
  };
};
const deserializeAws_restJson1AssessmentReportEvidenceErrors = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AssessmentReportEvidenceError(entry, context);
    });
};
const deserializeAws_restJson1AssessmentReportMetadata = (output, context) => {
  return {
    assessmentId: output.assessmentId !== undefined && output.assessmentId !== null ? output.assessmentId : undefined,
    assessmentName:
      output.assessmentName !== undefined && output.assessmentName !== null ? output.assessmentName : undefined,
    author: output.author !== undefined && output.author !== null ? output.author : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1AssessmentReportsDestination = (output, context) => {
  return {
    destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
    destinationType:
      output.destinationType !== undefined && output.destinationType !== null ? output.destinationType : undefined,
  };
};
const deserializeAws_restJson1AssessmentReportsMetadata = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AssessmentReportMetadata(entry, context);
    });
};
const deserializeAws_restJson1AWSAccount = (output, context) => {
  return {
    emailAddress: output.emailAddress !== undefined && output.emailAddress !== null ? output.emailAddress : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
const deserializeAws_restJson1AWSAccounts = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AWSAccount(entry, context);
    });
};
const deserializeAws_restJson1AWSService = (output, context) => {
  return {
    serviceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
  };
};
const deserializeAws_restJson1AWSServices = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AWSService(entry, context);
    });
};
const deserializeAws_restJson1BatchCreateDelegationByAssessmentError = (output, context) => {
  return {
    createDelegationRequest:
      output.createDelegationRequest !== undefined && output.createDelegationRequest !== null
        ? deserializeAws_restJson1CreateDelegationRequest(output.createDelegationRequest, context)
        : undefined,
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
  };
};
const deserializeAws_restJson1BatchCreateDelegationByAssessmentErrors = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BatchCreateDelegationByAssessmentError(entry, context);
    });
};
const deserializeAws_restJson1BatchDeleteDelegationByAssessmentError = (output, context) => {
  return {
    delegationId: output.delegationId !== undefined && output.delegationId !== null ? output.delegationId : undefined,
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
  };
};
const deserializeAws_restJson1BatchDeleteDelegationByAssessmentErrors = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BatchDeleteDelegationByAssessmentError(entry, context);
    });
};
const deserializeAws_restJson1BatchImportEvidenceToAssessmentControlError = (output, context) => {
  return {
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
    manualEvidence:
      output.manualEvidence !== undefined && output.manualEvidence !== null
        ? deserializeAws_restJson1ManualEvidence(output.manualEvidence, context)
        : undefined,
  };
};
const deserializeAws_restJson1BatchImportEvidenceToAssessmentControlErrors = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BatchImportEvidenceToAssessmentControlError(entry, context);
    });
};
const deserializeAws_restJson1ChangeLog = (output, context) => {
  return {
    action: output.action !== undefined && output.action !== null ? output.action : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
    objectName: output.objectName !== undefined && output.objectName !== null ? output.objectName : undefined,
    objectType: output.objectType !== undefined && output.objectType !== null ? output.objectType : undefined,
  };
};
const deserializeAws_restJson1ChangeLogs = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ChangeLog(entry, context);
    });
};
const deserializeAws_restJson1Control = (output, context) => {
  return {
    actionPlanInstructions:
      output.actionPlanInstructions !== undefined && output.actionPlanInstructions !== null
        ? output.actionPlanInstructions
        : undefined,
    actionPlanTitle:
      output.actionPlanTitle !== undefined && output.actionPlanTitle !== null ? output.actionPlanTitle : undefined,
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    controlMappingSources:
      output.controlMappingSources !== undefined && output.controlMappingSources !== null
        ? deserializeAws_restJson1ControlMappingSources(output.controlMappingSources, context)
        : undefined,
    controlSources:
      output.controlSources !== undefined && output.controlSources !== null ? output.controlSources : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    lastUpdatedBy:
      output.lastUpdatedBy !== undefined && output.lastUpdatedBy !== null ? output.lastUpdatedBy : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    testingInformation:
      output.testingInformation !== undefined && output.testingInformation !== null
        ? output.testingInformation
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
const deserializeAws_restJson1ControlComment = (output, context) => {
  return {
    authorName: output.authorName !== undefined && output.authorName !== null ? output.authorName : undefined,
    commentBody: output.commentBody !== undefined && output.commentBody !== null ? output.commentBody : undefined,
    postedDate:
      output.postedDate !== undefined && output.postedDate !== null
        ? new Date(Math.round(output.postedDate * 1000))
        : undefined,
  };
};
const deserializeAws_restJson1ControlComments = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ControlComment(entry, context);
    });
};
const deserializeAws_restJson1ControlMappingSource = (output, context) => {
  return {
    sourceDescription:
      output.sourceDescription !== undefined && output.sourceDescription !== null
        ? output.sourceDescription
        : undefined,
    sourceFrequency:
      output.sourceFrequency !== undefined && output.sourceFrequency !== null ? output.sourceFrequency : undefined,
    sourceId: output.sourceId !== undefined && output.sourceId !== null ? output.sourceId : undefined,
    sourceKeyword:
      output.sourceKeyword !== undefined && output.sourceKeyword !== null
        ? deserializeAws_restJson1SourceKeyword(output.sourceKeyword, context)
        : undefined,
    sourceName: output.sourceName !== undefined && output.sourceName !== null ? output.sourceName : undefined,
    sourceSetUpOption:
      output.sourceSetUpOption !== undefined && output.sourceSetUpOption !== null
        ? output.sourceSetUpOption
        : undefined,
    sourceType: output.sourceType !== undefined && output.sourceType !== null ? output.sourceType : undefined,
    troubleshootingText:
      output.troubleshootingText !== undefined && output.troubleshootingText !== null
        ? output.troubleshootingText
        : undefined,
  };
};
const deserializeAws_restJson1ControlMappingSources = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ControlMappingSource(entry, context);
    });
};
const deserializeAws_restJson1ControlMetadata = (output, context) => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    controlSources:
      output.controlSources !== undefined && output.controlSources !== null ? output.controlSources : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
const deserializeAws_restJson1ControlMetadataList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ControlMetadata(entry, context);
    });
};
const deserializeAws_restJson1Controls = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Control(entry, context);
    });
};
const deserializeAws_restJson1ControlSet = (output, context) => {
  return {
    controls:
      output.controls !== undefined && output.controls !== null
        ? deserializeAws_restJson1Controls(output.controls, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
const deserializeAws_restJson1ControlSets = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ControlSet(entry, context);
    });
};
const deserializeAws_restJson1CreateDelegationRequest = (output, context) => {
  return {
    comment: output.comment !== undefined && output.comment !== null ? output.comment : undefined,
    controlSetId: output.controlSetId !== undefined && output.controlSetId !== null ? output.controlSetId : undefined,
    roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    roleType: output.roleType !== undefined && output.roleType !== null ? output.roleType : undefined,
  };
};
const deserializeAws_restJson1Delegation = (output, context) => {
  return {
    assessmentId: output.assessmentId !== undefined && output.assessmentId !== null ? output.assessmentId : undefined,
    assessmentName:
      output.assessmentName !== undefined && output.assessmentName !== null ? output.assessmentName : undefined,
    comment: output.comment !== undefined && output.comment !== null ? output.comment : undefined,
    controlSetId: output.controlSetId !== undefined && output.controlSetId !== null ? output.controlSetId : undefined,
    createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null
        ? new Date(Math.round(output.lastUpdated * 1000))
        : undefined,
    roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    roleType: output.roleType !== undefined && output.roleType !== null ? output.roleType : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1DelegationMetadata = (output, context) => {
  return {
    assessmentId: output.assessmentId !== undefined && output.assessmentId !== null ? output.assessmentId : undefined,
    assessmentName:
      output.assessmentName !== undefined && output.assessmentName !== null ? output.assessmentName : undefined,
    controlSetName:
      output.controlSetName !== undefined && output.controlSetName !== null ? output.controlSetName : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1DelegationMetadataList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DelegationMetadata(entry, context);
    });
};
const deserializeAws_restJson1Delegations = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Delegation(entry, context);
    });
};
const deserializeAws_restJson1Evidence = (output, context) => {
  return {
    assessmentReportSelection:
      output.assessmentReportSelection !== undefined && output.assessmentReportSelection !== null
        ? output.assessmentReportSelection
        : undefined,
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1EvidenceAttributes(output.attributes, context)
        : undefined,
    awsAccountId: output.awsAccountId !== undefined && output.awsAccountId !== null ? output.awsAccountId : undefined,
    awsOrganization:
      output.awsOrganization !== undefined && output.awsOrganization !== null ? output.awsOrganization : undefined,
    complianceCheck:
      output.complianceCheck !== undefined && output.complianceCheck !== null ? output.complianceCheck : undefined,
    dataSource: output.dataSource !== undefined && output.dataSource !== null ? output.dataSource : undefined,
    eventName: output.eventName !== undefined && output.eventName !== null ? output.eventName : undefined,
    eventSource: output.eventSource !== undefined && output.eventSource !== null ? output.eventSource : undefined,
    evidenceAwsAccountId:
      output.evidenceAwsAccountId !== undefined && output.evidenceAwsAccountId !== null
        ? output.evidenceAwsAccountId
        : undefined,
    evidenceByType:
      output.evidenceByType !== undefined && output.evidenceByType !== null ? output.evidenceByType : undefined,
    evidenceFolderId:
      output.evidenceFolderId !== undefined && output.evidenceFolderId !== null ? output.evidenceFolderId : undefined,
    iamId: output.iamId !== undefined && output.iamId !== null ? output.iamId : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    resourcesIncluded:
      output.resourcesIncluded !== undefined && output.resourcesIncluded !== null
        ? deserializeAws_restJson1Resources(output.resourcesIncluded, context)
        : undefined,
    time: output.time !== undefined && output.time !== null ? new Date(Math.round(output.time * 1000)) : undefined,
  };
};
const deserializeAws_restJson1EvidenceAttributes = (output, context) => {
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
const deserializeAws_restJson1EvidenceIds = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1EvidenceList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Evidence(entry, context);
    });
};
const deserializeAws_restJson1EvidenceSources = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1Framework = (output, context) => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    complianceType:
      output.complianceType !== undefined && output.complianceType !== null ? output.complianceType : undefined,
    controlSets:
      output.controlSets !== undefined && output.controlSets !== null
        ? deserializeAws_restJson1ControlSets(output.controlSets, context)
        : undefined,
    controlSources:
      output.controlSources !== undefined && output.controlSources !== null ? output.controlSources : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    lastUpdatedBy:
      output.lastUpdatedBy !== undefined && output.lastUpdatedBy !== null ? output.lastUpdatedBy : undefined,
    logo: output.logo !== undefined && output.logo !== null ? output.logo : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
const deserializeAws_restJson1FrameworkMetadata = (output, context) => {
  return {
    complianceType:
      output.complianceType !== undefined && output.complianceType !== null ? output.complianceType : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    logo: output.logo !== undefined && output.logo !== null ? output.logo : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
const deserializeAws_restJson1FrameworkMetadataList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AssessmentFrameworkMetadata(entry, context);
    });
};
const deserializeAws_restJson1Keywords = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ListAssessmentMetadata = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AssessmentMetadataItem(entry, context);
    });
};
const deserializeAws_restJson1ManualEvidence = (output, context) => {
  return {
    s3ResourcePath:
      output.s3ResourcePath !== undefined && output.s3ResourcePath !== null ? output.s3ResourcePath : undefined,
  };
};
const deserializeAws_restJson1Notification = (output, context) => {
  return {
    assessmentId: output.assessmentId !== undefined && output.assessmentId !== null ? output.assessmentId : undefined,
    assessmentName:
      output.assessmentName !== undefined && output.assessmentName !== null ? output.assessmentName : undefined,
    controlSetId: output.controlSetId !== undefined && output.controlSetId !== null ? output.controlSetId : undefined,
    controlSetName:
      output.controlSetName !== undefined && output.controlSetName !== null ? output.controlSetName : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    eventTime:
      output.eventTime !== undefined && output.eventTime !== null
        ? new Date(Math.round(output.eventTime * 1000))
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    source: output.source !== undefined && output.source !== null ? output.source : undefined,
  };
};
const deserializeAws_restJson1Notifications = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Notification(entry, context);
    });
};
const deserializeAws_restJson1Resource = (output, context) => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
const deserializeAws_restJson1Resources = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Resource(entry, context);
    });
};
const deserializeAws_restJson1Role = (output, context) => {
  return {
    roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    roleType: output.roleType !== undefined && output.roleType !== null ? output.roleType : undefined,
  };
};
const deserializeAws_restJson1Roles = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Role(entry, context);
    });
};
const deserializeAws_restJson1Scope = (output, context) => {
  return {
    awsAccounts:
      output.awsAccounts !== undefined && output.awsAccounts !== null
        ? deserializeAws_restJson1AWSAccounts(output.awsAccounts, context)
        : undefined,
    awsServices:
      output.awsServices !== undefined && output.awsServices !== null
        ? deserializeAws_restJson1AWSServices(output.awsServices, context)
        : undefined,
  };
};
const deserializeAws_restJson1ServiceMetadata = (output, context) => {
  return {
    category: output.category !== undefined && output.category !== null ? output.category : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
const deserializeAws_restJson1ServiceMetadataList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ServiceMetadata(entry, context);
    });
};
const deserializeAws_restJson1Settings = (output, context) => {
  return {
    defaultAssessmentReportsDestination:
      output.defaultAssessmentReportsDestination !== undefined && output.defaultAssessmentReportsDestination !== null
        ? deserializeAws_restJson1AssessmentReportsDestination(output.defaultAssessmentReportsDestination, context)
        : undefined,
    defaultProcessOwners:
      output.defaultProcessOwners !== undefined && output.defaultProcessOwners !== null
        ? deserializeAws_restJson1Roles(output.defaultProcessOwners, context)
        : undefined,
    isAwsOrgEnabled:
      output.isAwsOrgEnabled !== undefined && output.isAwsOrgEnabled !== null ? output.isAwsOrgEnabled : undefined,
    kmsKey: output.kmsKey !== undefined && output.kmsKey !== null ? output.kmsKey : undefined,
    snsTopic: output.snsTopic !== undefined && output.snsTopic !== null ? output.snsTopic : undefined,
  };
};
const deserializeAws_restJson1SourceKeyword = (output, context) => {
  return {
    keywordInputType:
      output.keywordInputType !== undefined && output.keywordInputType !== null ? output.keywordInputType : undefined,
    keywordValue: output.keywordValue !== undefined && output.keywordValue !== null ? output.keywordValue : undefined,
  };
};
const deserializeAws_restJson1TagMap = (output, context) => {
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
const deserializeAws_restJson1URL = (output, context) => {
  return {
    hyperlinkName:
      output.hyperlinkName !== undefined && output.hyperlinkName !== null ? output.hyperlinkName : undefined,
    link: output.link !== undefined && output.link !== null ? output.link : undefined,
  };
};
const deserializeAws_restJson1ValidationErrors = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ValidationExceptionField = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
const deserializeAws_restJson1ValidationExceptionFieldList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
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
