import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BadRequestException || (BadRequestException = {}));
export var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConflictException || (ConflictException = {}));
export var ConnectionType;
(function (ConnectionType) {
  ConnectionType["CONNECT_SSH"] = "CONNECT_SSH";
  ConnectionType["CONNECT_SSM"] = "CONNECT_SSM";
})(ConnectionType || (ConnectionType = {}));
export var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Key && { Key: SENSITIVE_STRING }),
      obj.Value && { Value: SENSITIVE_STRING }
    );
  };
})(Tag || (Tag = {}));
export var CreateEnvironmentEC2Request;
(function (CreateEnvironmentEC2Request) {
  /**
   * @internal
   */
  CreateEnvironmentEC2Request.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.description && { description: SENSITIVE_STRING }),
      obj.tags && { tags: SENSITIVE_STRING }
    );
  };
})(CreateEnvironmentEC2Request || (CreateEnvironmentEC2Request = {}));
export var CreateEnvironmentEC2Result;
(function (CreateEnvironmentEC2Result) {
  /**
   * @internal
   */
  CreateEnvironmentEC2Result.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateEnvironmentEC2Result || (CreateEnvironmentEC2Result = {}));
export var ForbiddenException;
(function (ForbiddenException) {
  /**
   * @internal
   */
  ForbiddenException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ForbiddenException || (ForbiddenException = {}));
export var InternalServerErrorException;
(function (InternalServerErrorException) {
  /**
   * @internal
   */
  InternalServerErrorException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InternalServerErrorException || (InternalServerErrorException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));
export var NotFoundException;
(function (NotFoundException) {
  /**
   * @internal
   */
  NotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(NotFoundException || (NotFoundException = {}));
export var TooManyRequestsException;
(function (TooManyRequestsException) {
  /**
   * @internal
   */
  TooManyRequestsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TooManyRequestsException || (TooManyRequestsException = {}));
export var MemberPermissions;
(function (MemberPermissions) {
  MemberPermissions["READ_ONLY"] = "read-only";
  MemberPermissions["READ_WRITE"] = "read-write";
})(MemberPermissions || (MemberPermissions = {}));
export var CreateEnvironmentMembershipRequest;
(function (CreateEnvironmentMembershipRequest) {
  /**
   * @internal
   */
  CreateEnvironmentMembershipRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateEnvironmentMembershipRequest || (CreateEnvironmentMembershipRequest = {}));
export var Permissions;
(function (Permissions) {
  Permissions["OWNER"] = "owner";
  Permissions["READ_ONLY"] = "read-only";
  Permissions["READ_WRITE"] = "read-write";
})(Permissions || (Permissions = {}));
export var EnvironmentMember;
(function (EnvironmentMember) {
  /**
   * @internal
   */
  EnvironmentMember.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(EnvironmentMember || (EnvironmentMember = {}));
export var CreateEnvironmentMembershipResult;
(function (CreateEnvironmentMembershipResult) {
  /**
   * @internal
   */
  CreateEnvironmentMembershipResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateEnvironmentMembershipResult || (CreateEnvironmentMembershipResult = {}));
export var DeleteEnvironmentRequest;
(function (DeleteEnvironmentRequest) {
  /**
   * @internal
   */
  DeleteEnvironmentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteEnvironmentRequest || (DeleteEnvironmentRequest = {}));
export var DeleteEnvironmentResult;
(function (DeleteEnvironmentResult) {
  /**
   * @internal
   */
  DeleteEnvironmentResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteEnvironmentResult || (DeleteEnvironmentResult = {}));
export var DeleteEnvironmentMembershipRequest;
(function (DeleteEnvironmentMembershipRequest) {
  /**
   * @internal
   */
  DeleteEnvironmentMembershipRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteEnvironmentMembershipRequest || (DeleteEnvironmentMembershipRequest = {}));
export var DeleteEnvironmentMembershipResult;
(function (DeleteEnvironmentMembershipResult) {
  /**
   * @internal
   */
  DeleteEnvironmentMembershipResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteEnvironmentMembershipResult || (DeleteEnvironmentMembershipResult = {}));
export var DescribeEnvironmentMembershipsRequest;
(function (DescribeEnvironmentMembershipsRequest) {
  /**
   * @internal
   */
  DescribeEnvironmentMembershipsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeEnvironmentMembershipsRequest || (DescribeEnvironmentMembershipsRequest = {}));
export var DescribeEnvironmentMembershipsResult;
(function (DescribeEnvironmentMembershipsResult) {
  /**
   * @internal
   */
  DescribeEnvironmentMembershipsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeEnvironmentMembershipsResult || (DescribeEnvironmentMembershipsResult = {}));
export var DescribeEnvironmentsRequest;
(function (DescribeEnvironmentsRequest) {
  /**
   * @internal
   */
  DescribeEnvironmentsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeEnvironmentsRequest || (DescribeEnvironmentsRequest = {}));
export var EnvironmentLifecycleStatus;
(function (EnvironmentLifecycleStatus) {
  EnvironmentLifecycleStatus["CREATED"] = "CREATED";
  EnvironmentLifecycleStatus["CREATE_FAILED"] = "CREATE_FAILED";
  EnvironmentLifecycleStatus["CREATING"] = "CREATING";
  EnvironmentLifecycleStatus["DELETE_FAILED"] = "DELETE_FAILED";
  EnvironmentLifecycleStatus["DELETING"] = "DELETING";
})(EnvironmentLifecycleStatus || (EnvironmentLifecycleStatus = {}));
export var EnvironmentLifecycle;
(function (EnvironmentLifecycle) {
  /**
   * @internal
   */
  EnvironmentLifecycle.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(EnvironmentLifecycle || (EnvironmentLifecycle = {}));
export var ManagedCredentialsStatus;
(function (ManagedCredentialsStatus) {
  ManagedCredentialsStatus["DISABLED_BY_COLLABORATOR"] = "DISABLED_BY_COLLABORATOR";
  ManagedCredentialsStatus["DISABLED_BY_DEFAULT"] = "DISABLED_BY_DEFAULT";
  ManagedCredentialsStatus["DISABLED_BY_OWNER"] = "DISABLED_BY_OWNER";
  ManagedCredentialsStatus["ENABLED_BY_OWNER"] = "ENABLED_BY_OWNER";
  ManagedCredentialsStatus["ENABLED_ON_CREATE"] = "ENABLED_ON_CREATE";
  ManagedCredentialsStatus["FAILED_REMOVAL_BY_COLLABORATOR"] = "FAILED_REMOVAL_BY_COLLABORATOR";
  ManagedCredentialsStatus["FAILED_REMOVAL_BY_OWNER"] = "FAILED_REMOVAL_BY_OWNER";
  ManagedCredentialsStatus["PENDING_REMOVAL_BY_COLLABORATOR"] = "PENDING_REMOVAL_BY_COLLABORATOR";
  ManagedCredentialsStatus["PENDING_REMOVAL_BY_OWNER"] = "PENDING_REMOVAL_BY_OWNER";
  ManagedCredentialsStatus["PENDING_START_REMOVAL_BY_COLLABORATOR"] = "PENDING_START_REMOVAL_BY_COLLABORATOR";
  ManagedCredentialsStatus["PENDING_START_REMOVAL_BY_OWNER"] = "PENDING_START_REMOVAL_BY_OWNER";
})(ManagedCredentialsStatus || (ManagedCredentialsStatus = {}));
export var EnvironmentType;
(function (EnvironmentType) {
  EnvironmentType["EC2"] = "ec2";
  EnvironmentType["SSH"] = "ssh";
})(EnvironmentType || (EnvironmentType = {}));
export var Environment;
(function (Environment) {
  /**
   * @internal
   */
  Environment.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.description && { description: SENSITIVE_STRING });
  };
})(Environment || (Environment = {}));
export var DescribeEnvironmentsResult;
(function (DescribeEnvironmentsResult) {
  /**
   * @internal
   */
  DescribeEnvironmentsResult.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.environments && {
        environments: obj.environments.map(function (item) {
          return Environment.filterSensitiveLog(item);
        }),
      }
    );
  };
})(DescribeEnvironmentsResult || (DescribeEnvironmentsResult = {}));
export var DescribeEnvironmentStatusRequest;
(function (DescribeEnvironmentStatusRequest) {
  /**
   * @internal
   */
  DescribeEnvironmentStatusRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeEnvironmentStatusRequest || (DescribeEnvironmentStatusRequest = {}));
export var EnvironmentStatus;
(function (EnvironmentStatus) {
  EnvironmentStatus["CONNECTING"] = "connecting";
  EnvironmentStatus["CREATING"] = "creating";
  EnvironmentStatus["DELETING"] = "deleting";
  EnvironmentStatus["ERROR"] = "error";
  EnvironmentStatus["READY"] = "ready";
  EnvironmentStatus["STOPPED"] = "stopped";
  EnvironmentStatus["STOPPING"] = "stopping";
})(EnvironmentStatus || (EnvironmentStatus = {}));
export var DescribeEnvironmentStatusResult;
(function (DescribeEnvironmentStatusResult) {
  /**
   * @internal
   */
  DescribeEnvironmentStatusResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeEnvironmentStatusResult || (DescribeEnvironmentStatusResult = {}));
export var ListEnvironmentsRequest;
(function (ListEnvironmentsRequest) {
  /**
   * @internal
   */
  ListEnvironmentsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListEnvironmentsRequest || (ListEnvironmentsRequest = {}));
export var ListEnvironmentsResult;
(function (ListEnvironmentsResult) {
  /**
   * @internal
   */
  ListEnvironmentsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListEnvironmentsResult || (ListEnvironmentsResult = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Tags && { Tags: SENSITIVE_STRING });
  };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var ConcurrentAccessException;
(function (ConcurrentAccessException) {
  /**
   * @internal
   */
  ConcurrentAccessException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConcurrentAccessException || (ConcurrentAccessException = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Tags && { Tags: SENSITIVE_STRING });
  };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.TagKeys && { TagKeys: SENSITIVE_STRING });
  };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateEnvironmentRequest;
(function (UpdateEnvironmentRequest) {
  /**
   * @internal
   */
  UpdateEnvironmentRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.description && { description: SENSITIVE_STRING });
  };
})(UpdateEnvironmentRequest || (UpdateEnvironmentRequest = {}));
export var UpdateEnvironmentResult;
(function (UpdateEnvironmentResult) {
  /**
   * @internal
   */
  UpdateEnvironmentResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateEnvironmentResult || (UpdateEnvironmentResult = {}));
export var UpdateEnvironmentMembershipRequest;
(function (UpdateEnvironmentMembershipRequest) {
  /**
   * @internal
   */
  UpdateEnvironmentMembershipRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateEnvironmentMembershipRequest || (UpdateEnvironmentMembershipRequest = {}));
export var UpdateEnvironmentMembershipResult;
(function (UpdateEnvironmentMembershipResult) {
  /**
   * @internal
   */
  UpdateEnvironmentMembershipResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateEnvironmentMembershipResult || (UpdateEnvironmentMembershipResult = {}));
//# sourceMappingURL=models_0.js.map
