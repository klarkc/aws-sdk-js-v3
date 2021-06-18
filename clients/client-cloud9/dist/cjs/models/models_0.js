"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEnvironmentMembershipResult =
  exports.UpdateEnvironmentMembershipRequest =
  exports.UpdateEnvironmentResult =
  exports.UpdateEnvironmentRequest =
  exports.UntagResourceResponse =
  exports.UntagResourceRequest =
  exports.TagResourceResponse =
  exports.TagResourceRequest =
  exports.ConcurrentAccessException =
  exports.ListTagsForResourceResponse =
  exports.ListTagsForResourceRequest =
  exports.ListEnvironmentsResult =
  exports.ListEnvironmentsRequest =
  exports.DescribeEnvironmentStatusResult =
  exports.EnvironmentStatus =
  exports.DescribeEnvironmentStatusRequest =
  exports.DescribeEnvironmentsResult =
  exports.Environment =
  exports.EnvironmentType =
  exports.ManagedCredentialsStatus =
  exports.EnvironmentLifecycle =
  exports.EnvironmentLifecycleStatus =
  exports.DescribeEnvironmentsRequest =
  exports.DescribeEnvironmentMembershipsResult =
  exports.DescribeEnvironmentMembershipsRequest =
  exports.DeleteEnvironmentMembershipResult =
  exports.DeleteEnvironmentMembershipRequest =
  exports.DeleteEnvironmentResult =
  exports.DeleteEnvironmentRequest =
  exports.CreateEnvironmentMembershipResult =
  exports.EnvironmentMember =
  exports.Permissions =
  exports.CreateEnvironmentMembershipRequest =
  exports.MemberPermissions =
  exports.TooManyRequestsException =
  exports.NotFoundException =
  exports.LimitExceededException =
  exports.InternalServerErrorException =
  exports.ForbiddenException =
  exports.CreateEnvironmentEC2Result =
  exports.CreateEnvironmentEC2Request =
  exports.Tag =
  exports.ConnectionType =
  exports.ConflictException =
  exports.BadRequestException =
    void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BadRequestException = exports.BadRequestException || (exports.BadRequestException = {})));
var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConflictException = exports.ConflictException || (exports.ConflictException = {})));
var ConnectionType;
(function (ConnectionType) {
  ConnectionType["CONNECT_SSH"] = "CONNECT_SSH";
  ConnectionType["CONNECT_SSM"] = "CONNECT_SSM";
})((ConnectionType = exports.ConnectionType || (exports.ConnectionType = {})));
var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Key && { Key: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Value && { Value: smithy_client_1.SENSITIVE_STRING }),
  });
})((Tag = exports.Tag || (exports.Tag = {})));
var CreateEnvironmentEC2Request;
(function (CreateEnvironmentEC2Request) {
  /**
   * @internal
   */
  CreateEnvironmentEC2Request.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.description && { description: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.tags && { tags: smithy_client_1.SENSITIVE_STRING }),
  });
})((CreateEnvironmentEC2Request = exports.CreateEnvironmentEC2Request || (exports.CreateEnvironmentEC2Request = {})));
var CreateEnvironmentEC2Result;
(function (CreateEnvironmentEC2Result) {
  /**
   * @internal
   */
  CreateEnvironmentEC2Result.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateEnvironmentEC2Result = exports.CreateEnvironmentEC2Result || (exports.CreateEnvironmentEC2Result = {})));
var ForbiddenException;
(function (ForbiddenException) {
  /**
   * @internal
   */
  ForbiddenException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {})));
var InternalServerErrorException;
(function (InternalServerErrorException) {
  /**
   * @internal
   */
  InternalServerErrorException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}))
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
var NotFoundException;
(function (NotFoundException) {
  /**
   * @internal
   */
  NotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NotFoundException = exports.NotFoundException || (exports.NotFoundException = {})));
var TooManyRequestsException;
(function (TooManyRequestsException) {
  /**
   * @internal
   */
  TooManyRequestsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {})));
var MemberPermissions;
(function (MemberPermissions) {
  MemberPermissions["READ_ONLY"] = "read-only";
  MemberPermissions["READ_WRITE"] = "read-write";
})((MemberPermissions = exports.MemberPermissions || (exports.MemberPermissions = {})));
var CreateEnvironmentMembershipRequest;
(function (CreateEnvironmentMembershipRequest) {
  /**
   * @internal
   */
  CreateEnvironmentMembershipRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateEnvironmentMembershipRequest =
    exports.CreateEnvironmentMembershipRequest || (exports.CreateEnvironmentMembershipRequest = {}))
);
var Permissions;
(function (Permissions) {
  Permissions["OWNER"] = "owner";
  Permissions["READ_ONLY"] = "read-only";
  Permissions["READ_WRITE"] = "read-write";
})((Permissions = exports.Permissions || (exports.Permissions = {})));
var EnvironmentMember;
(function (EnvironmentMember) {
  /**
   * @internal
   */
  EnvironmentMember.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EnvironmentMember = exports.EnvironmentMember || (exports.EnvironmentMember = {})));
var CreateEnvironmentMembershipResult;
(function (CreateEnvironmentMembershipResult) {
  /**
   * @internal
   */
  CreateEnvironmentMembershipResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateEnvironmentMembershipResult =
    exports.CreateEnvironmentMembershipResult || (exports.CreateEnvironmentMembershipResult = {}))
);
var DeleteEnvironmentRequest;
(function (DeleteEnvironmentRequest) {
  /**
   * @internal
   */
  DeleteEnvironmentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteEnvironmentRequest = exports.DeleteEnvironmentRequest || (exports.DeleteEnvironmentRequest = {})));
var DeleteEnvironmentResult;
(function (DeleteEnvironmentResult) {
  /**
   * @internal
   */
  DeleteEnvironmentResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteEnvironmentResult = exports.DeleteEnvironmentResult || (exports.DeleteEnvironmentResult = {})));
var DeleteEnvironmentMembershipRequest;
(function (DeleteEnvironmentMembershipRequest) {
  /**
   * @internal
   */
  DeleteEnvironmentMembershipRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteEnvironmentMembershipRequest =
    exports.DeleteEnvironmentMembershipRequest || (exports.DeleteEnvironmentMembershipRequest = {}))
);
var DeleteEnvironmentMembershipResult;
(function (DeleteEnvironmentMembershipResult) {
  /**
   * @internal
   */
  DeleteEnvironmentMembershipResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteEnvironmentMembershipResult =
    exports.DeleteEnvironmentMembershipResult || (exports.DeleteEnvironmentMembershipResult = {}))
);
var DescribeEnvironmentMembershipsRequest;
(function (DescribeEnvironmentMembershipsRequest) {
  /**
   * @internal
   */
  DescribeEnvironmentMembershipsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeEnvironmentMembershipsRequest =
    exports.DescribeEnvironmentMembershipsRequest || (exports.DescribeEnvironmentMembershipsRequest = {}))
);
var DescribeEnvironmentMembershipsResult;
(function (DescribeEnvironmentMembershipsResult) {
  /**
   * @internal
   */
  DescribeEnvironmentMembershipsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeEnvironmentMembershipsResult =
    exports.DescribeEnvironmentMembershipsResult || (exports.DescribeEnvironmentMembershipsResult = {}))
);
var DescribeEnvironmentsRequest;
(function (DescribeEnvironmentsRequest) {
  /**
   * @internal
   */
  DescribeEnvironmentsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeEnvironmentsRequest = exports.DescribeEnvironmentsRequest || (exports.DescribeEnvironmentsRequest = {})));
var EnvironmentLifecycleStatus;
(function (EnvironmentLifecycleStatus) {
  EnvironmentLifecycleStatus["CREATED"] = "CREATED";
  EnvironmentLifecycleStatus["CREATE_FAILED"] = "CREATE_FAILED";
  EnvironmentLifecycleStatus["CREATING"] = "CREATING";
  EnvironmentLifecycleStatus["DELETE_FAILED"] = "DELETE_FAILED";
  EnvironmentLifecycleStatus["DELETING"] = "DELETING";
})((EnvironmentLifecycleStatus = exports.EnvironmentLifecycleStatus || (exports.EnvironmentLifecycleStatus = {})));
var EnvironmentLifecycle;
(function (EnvironmentLifecycle) {
  /**
   * @internal
   */
  EnvironmentLifecycle.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EnvironmentLifecycle = exports.EnvironmentLifecycle || (exports.EnvironmentLifecycle = {})));
var ManagedCredentialsStatus;
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
})((ManagedCredentialsStatus = exports.ManagedCredentialsStatus || (exports.ManagedCredentialsStatus = {})));
var EnvironmentType;
(function (EnvironmentType) {
  EnvironmentType["EC2"] = "ec2";
  EnvironmentType["SSH"] = "ssh";
})((EnvironmentType = exports.EnvironmentType || (exports.EnvironmentType = {})));
var Environment;
(function (Environment) {
  /**
   * @internal
   */
  Environment.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.description && { description: smithy_client_1.SENSITIVE_STRING }),
  });
})((Environment = exports.Environment || (exports.Environment = {})));
var DescribeEnvironmentsResult;
(function (DescribeEnvironmentsResult) {
  /**
   * @internal
   */
  DescribeEnvironmentsResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.environments && { environments: obj.environments.map((item) => Environment.filterSensitiveLog(item)) }),
  });
})((DescribeEnvironmentsResult = exports.DescribeEnvironmentsResult || (exports.DescribeEnvironmentsResult = {})));
var DescribeEnvironmentStatusRequest;
(function (DescribeEnvironmentStatusRequest) {
  /**
   * @internal
   */
  DescribeEnvironmentStatusRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeEnvironmentStatusRequest =
    exports.DescribeEnvironmentStatusRequest || (exports.DescribeEnvironmentStatusRequest = {}))
);
var EnvironmentStatus;
(function (EnvironmentStatus) {
  EnvironmentStatus["CONNECTING"] = "connecting";
  EnvironmentStatus["CREATING"] = "creating";
  EnvironmentStatus["DELETING"] = "deleting";
  EnvironmentStatus["ERROR"] = "error";
  EnvironmentStatus["READY"] = "ready";
  EnvironmentStatus["STOPPED"] = "stopped";
  EnvironmentStatus["STOPPING"] = "stopping";
})((EnvironmentStatus = exports.EnvironmentStatus || (exports.EnvironmentStatus = {})));
var DescribeEnvironmentStatusResult;
(function (DescribeEnvironmentStatusResult) {
  /**
   * @internal
   */
  DescribeEnvironmentStatusResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeEnvironmentStatusResult =
    exports.DescribeEnvironmentStatusResult || (exports.DescribeEnvironmentStatusResult = {}))
);
var ListEnvironmentsRequest;
(function (ListEnvironmentsRequest) {
  /**
   * @internal
   */
  ListEnvironmentsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListEnvironmentsRequest = exports.ListEnvironmentsRequest || (exports.ListEnvironmentsRequest = {})));
var ListEnvironmentsResult;
(function (ListEnvironmentsResult) {
  /**
   * @internal
   */
  ListEnvironmentsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListEnvironmentsResult = exports.ListEnvironmentsResult || (exports.ListEnvironmentsResult = {})));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {})));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Tags && { Tags: smithy_client_1.SENSITIVE_STRING }),
  });
})((ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {})));
var ConcurrentAccessException;
(function (ConcurrentAccessException) {
  /**
   * @internal
   */
  ConcurrentAccessException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConcurrentAccessException = exports.ConcurrentAccessException || (exports.ConcurrentAccessException = {})));
var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Tags && { Tags: smithy_client_1.SENSITIVE_STRING }),
  });
})((TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {})));
var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {})));
var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TagKeys && { TagKeys: smithy_client_1.SENSITIVE_STRING }),
  });
})((UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {})));
var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {})));
var UpdateEnvironmentRequest;
(function (UpdateEnvironmentRequest) {
  /**
   * @internal
   */
  UpdateEnvironmentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.description && { description: smithy_client_1.SENSITIVE_STRING }),
  });
})((UpdateEnvironmentRequest = exports.UpdateEnvironmentRequest || (exports.UpdateEnvironmentRequest = {})));
var UpdateEnvironmentResult;
(function (UpdateEnvironmentResult) {
  /**
   * @internal
   */
  UpdateEnvironmentResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateEnvironmentResult = exports.UpdateEnvironmentResult || (exports.UpdateEnvironmentResult = {})));
var UpdateEnvironmentMembershipRequest;
(function (UpdateEnvironmentMembershipRequest) {
  /**
   * @internal
   */
  UpdateEnvironmentMembershipRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateEnvironmentMembershipRequest =
    exports.UpdateEnvironmentMembershipRequest || (exports.UpdateEnvironmentMembershipRequest = {}))
);
var UpdateEnvironmentMembershipResult;
(function (UpdateEnvironmentMembershipResult) {
  /**
   * @internal
   */
  UpdateEnvironmentMembershipResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateEnvironmentMembershipResult =
    exports.UpdateEnvironmentMembershipResult || (exports.UpdateEnvironmentMembershipResult = {}))
);
//# sourceMappingURL=models_0.js.map
