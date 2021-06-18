"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkspaceAliasRequest =
  exports.ListWorkspacesResponse =
  exports.WorkspaceSummary =
  exports.ListWorkspacesRequest =
  exports.DescribeWorkspaceResponse =
  exports.WorkspaceDescription =
  exports.DescribeWorkspaceRequest =
  exports.ResourceNotFoundException =
  exports.DeleteWorkspaceRequest =
  exports.ValidationException =
  exports.ValidationExceptionReason =
  exports.ValidationExceptionField =
  exports.ThrottlingException =
  exports.ServiceQuotaExceededException =
  exports.InternalServerException =
  exports.CreateWorkspaceResponse =
  exports.WorkspaceStatus =
  exports.WorkspaceStatusCode =
  exports.CreateWorkspaceRequest =
  exports.ConflictException =
  exports.AccessDeniedException =
    void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {})));
var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConflictException = exports.ConflictException || (exports.ConflictException = {})));
var CreateWorkspaceRequest;
(function (CreateWorkspaceRequest) {
  /**
   * @internal
   */
  CreateWorkspaceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateWorkspaceRequest = exports.CreateWorkspaceRequest || (exports.CreateWorkspaceRequest = {})));
var WorkspaceStatusCode;
(function (WorkspaceStatusCode) {
  /**
   * Workspace has been created and is usable.
   */
  WorkspaceStatusCode["ACTIVE"] = "ACTIVE";
  /**
   * Workspace is being created. Deletion is disallowed until status is ACTIVE.
   */
  WorkspaceStatusCode["CREATING"] = "CREATING";
  /**
   * Workspace creation failed. Refer to WorkspaceStatus.failureReason for more details.
   */
  WorkspaceStatusCode["CREATION_FAILED"] = "CREATION_FAILED";
  /**
   * Workspace is being deleted. Deletions are allowed only when status is ACTIVE.
   */
  WorkspaceStatusCode["DELETING"] = "DELETING";
  /**
   * Workspace is being updated. Updates are allowed only when status is ACTIVE.
   */
  WorkspaceStatusCode["UPDATING"] = "UPDATING";
})((WorkspaceStatusCode = exports.WorkspaceStatusCode || (exports.WorkspaceStatusCode = {})));
var WorkspaceStatus;
(function (WorkspaceStatus) {
  /**
   * @internal
   */
  WorkspaceStatus.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((WorkspaceStatus = exports.WorkspaceStatus || (exports.WorkspaceStatus = {})));
var CreateWorkspaceResponse;
(function (CreateWorkspaceResponse) {
  /**
   * @internal
   */
  CreateWorkspaceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateWorkspaceResponse = exports.CreateWorkspaceResponse || (exports.CreateWorkspaceResponse = {})));
var InternalServerException;
(function (InternalServerException) {
  /**
   * @internal
   */
  InternalServerException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternalServerException = exports.InternalServerException || (exports.InternalServerException = {})));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
  /**
   * @internal
   */
  ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ServiceQuotaExceededException =
    exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}))
);
var ThrottlingException;
(function (ThrottlingException) {
  /**
   * @internal
   */
  ThrottlingException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {})));
var ValidationExceptionField;
(function (ValidationExceptionField) {
  /**
   * @internal
   */
  ValidationExceptionField.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidationExceptionField = exports.ValidationExceptionField || (exports.ValidationExceptionField = {})));
var ValidationExceptionReason;
(function (ValidationExceptionReason) {
  ValidationExceptionReason["CANNOT_PARSE"] = "CANNOT_PARSE";
  ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "FIELD_VALIDATION_FAILED";
  ValidationExceptionReason["OTHER"] = "OTHER";
  ValidationExceptionReason["UNKNOWN_OPERATION"] = "UNKNOWN_OPERATION";
})((ValidationExceptionReason = exports.ValidationExceptionReason || (exports.ValidationExceptionReason = {})));
var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidationException = exports.ValidationException || (exports.ValidationException = {})));
var DeleteWorkspaceRequest;
(function (DeleteWorkspaceRequest) {
  /**
   * @internal
   */
  DeleteWorkspaceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteWorkspaceRequest = exports.DeleteWorkspaceRequest || (exports.DeleteWorkspaceRequest = {})));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var DescribeWorkspaceRequest;
(function (DescribeWorkspaceRequest) {
  /**
   * @internal
   */
  DescribeWorkspaceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeWorkspaceRequest = exports.DescribeWorkspaceRequest || (exports.DescribeWorkspaceRequest = {})));
var WorkspaceDescription;
(function (WorkspaceDescription) {
  /**
   * @internal
   */
  WorkspaceDescription.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((WorkspaceDescription = exports.WorkspaceDescription || (exports.WorkspaceDescription = {})));
var DescribeWorkspaceResponse;
(function (DescribeWorkspaceResponse) {
  /**
   * @internal
   */
  DescribeWorkspaceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeWorkspaceResponse = exports.DescribeWorkspaceResponse || (exports.DescribeWorkspaceResponse = {})));
var ListWorkspacesRequest;
(function (ListWorkspacesRequest) {
  /**
   * @internal
   */
  ListWorkspacesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListWorkspacesRequest = exports.ListWorkspacesRequest || (exports.ListWorkspacesRequest = {})));
var WorkspaceSummary;
(function (WorkspaceSummary) {
  /**
   * @internal
   */
  WorkspaceSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((WorkspaceSummary = exports.WorkspaceSummary || (exports.WorkspaceSummary = {})));
var ListWorkspacesResponse;
(function (ListWorkspacesResponse) {
  /**
   * @internal
   */
  ListWorkspacesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListWorkspacesResponse = exports.ListWorkspacesResponse || (exports.ListWorkspacesResponse = {})));
var UpdateWorkspaceAliasRequest;
(function (UpdateWorkspaceAliasRequest) {
  /**
   * @internal
   */
  UpdateWorkspaceAliasRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateWorkspaceAliasRequest = exports.UpdateWorkspaceAliasRequest || (exports.UpdateWorkspaceAliasRequest = {})));
//# sourceMappingURL=models_0.js.map
