import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccessDeniedException || (AccessDeniedException = {}));
export var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConflictException || (ConflictException = {}));
export var CreateWorkspaceRequest;
(function (CreateWorkspaceRequest) {
  /**
   * @internal
   */
  CreateWorkspaceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateWorkspaceRequest || (CreateWorkspaceRequest = {}));
export var WorkspaceStatusCode;
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
})(WorkspaceStatusCode || (WorkspaceStatusCode = {}));
export var WorkspaceStatus;
(function (WorkspaceStatus) {
  /**
   * @internal
   */
  WorkspaceStatus.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(WorkspaceStatus || (WorkspaceStatus = {}));
export var CreateWorkspaceResponse;
(function (CreateWorkspaceResponse) {
  /**
   * @internal
   */
  CreateWorkspaceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateWorkspaceResponse || (CreateWorkspaceResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
  /**
   * @internal
   */
  InternalServerException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InternalServerException || (InternalServerException = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
  /**
   * @internal
   */
  ServiceQuotaExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
  /**
   * @internal
   */
  ThrottlingException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationExceptionField;
(function (ValidationExceptionField) {
  /**
   * @internal
   */
  ValidationExceptionField.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ValidationExceptionField || (ValidationExceptionField = {}));
export var ValidationExceptionReason;
(function (ValidationExceptionReason) {
  ValidationExceptionReason["CANNOT_PARSE"] = "CANNOT_PARSE";
  ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "FIELD_VALIDATION_FAILED";
  ValidationExceptionReason["OTHER"] = "OTHER";
  ValidationExceptionReason["UNKNOWN_OPERATION"] = "UNKNOWN_OPERATION";
})(ValidationExceptionReason || (ValidationExceptionReason = {}));
export var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ValidationException || (ValidationException = {}));
export var DeleteWorkspaceRequest;
(function (DeleteWorkspaceRequest) {
  /**
   * @internal
   */
  DeleteWorkspaceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteWorkspaceRequest || (DeleteWorkspaceRequest = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var DescribeWorkspaceRequest;
(function (DescribeWorkspaceRequest) {
  /**
   * @internal
   */
  DescribeWorkspaceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeWorkspaceRequest || (DescribeWorkspaceRequest = {}));
export var WorkspaceDescription;
(function (WorkspaceDescription) {
  /**
   * @internal
   */
  WorkspaceDescription.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(WorkspaceDescription || (WorkspaceDescription = {}));
export var DescribeWorkspaceResponse;
(function (DescribeWorkspaceResponse) {
  /**
   * @internal
   */
  DescribeWorkspaceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeWorkspaceResponse || (DescribeWorkspaceResponse = {}));
export var ListWorkspacesRequest;
(function (ListWorkspacesRequest) {
  /**
   * @internal
   */
  ListWorkspacesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListWorkspacesRequest || (ListWorkspacesRequest = {}));
export var WorkspaceSummary;
(function (WorkspaceSummary) {
  /**
   * @internal
   */
  WorkspaceSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(WorkspaceSummary || (WorkspaceSummary = {}));
export var ListWorkspacesResponse;
(function (ListWorkspacesResponse) {
  /**
   * @internal
   */
  ListWorkspacesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListWorkspacesResponse || (ListWorkspacesResponse = {}));
export var UpdateWorkspaceAliasRequest;
(function (UpdateWorkspaceAliasRequest) {
  /**
   * @internal
   */
  UpdateWorkspaceAliasRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateWorkspaceAliasRequest || (UpdateWorkspaceAliasRequest = {}));
//# sourceMappingURL=models_0.js.map
