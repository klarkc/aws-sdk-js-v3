"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageBuilderStateChangeReasonCode =
  exports.ImageBuilderState =
  exports.NetworkAccessConfiguration =
  exports.ResourceError =
  exports.CreateImageBuilderRequest =
  exports.RequestLimitExceededException =
  exports.CreateFleetResult =
  exports.Fleet =
  exports.FleetState =
  exports.FleetError =
  exports.FleetErrorCode =
  exports.CreateFleetRequest =
  exports.VpcConfig =
  exports.StreamView =
  exports.FleetType =
  exports.DomainJoinInfo =
  exports.InvalidRoleException =
  exports.CreateDirectoryConfigResult =
  exports.DirectoryConfig =
  exports.CreateDirectoryConfigRequest =
  exports.ServiceAccountCredentials =
  exports.ResourceNotAvailableException =
  exports.ResourceAlreadyExistsException =
  exports.CopyImageResponse =
  exports.CopyImageRequest =
  exports.ComputeCapacityStatus =
  exports.ComputeCapacity =
  exports.BatchDisassociateUserStackResult =
  exports.BatchDisassociateUserStackRequest =
  exports.InvalidParameterCombinationException =
  exports.BatchAssociateUserStackResult =
  exports.UserStackAssociationError =
  exports.UserStackAssociationErrorCode =
  exports.BatchAssociateUserStackRequest =
  exports.UserStackAssociation =
  exports.AuthenticationType =
  exports.ResourceNotFoundException =
  exports.OperationNotPermittedException =
  exports.LimitExceededException =
  exports.InvalidAccountStatusException =
  exports.IncompatibleImageException =
  exports.ConcurrentModificationException =
  exports.AssociateFleetResult =
  exports.AssociateFleetRequest =
  exports.ApplicationSettingsResponse =
  exports.ApplicationSettings =
  exports.Application =
  exports.Action =
  exports.AccessEndpoint =
  exports.AccessEndpointType =
    void 0;
exports.DescribeFleetsRequest =
  exports.DescribeDirectoryConfigsResult =
  exports.DescribeDirectoryConfigsRequest =
  exports.DeleteUserResult =
  exports.DeleteUserRequest =
  exports.DeleteUsageReportSubscriptionResult =
  exports.DeleteUsageReportSubscriptionRequest =
  exports.DeleteStackResult =
  exports.DeleteStackRequest =
  exports.DeleteImagePermissionsResult =
  exports.DeleteImagePermissionsRequest =
  exports.DeleteImageBuilderResult =
  exports.DeleteImageBuilderRequest =
  exports.DeleteImageResult =
  exports.DeleteImageRequest =
  exports.DeleteFleetResult =
  exports.DeleteFleetRequest =
  exports.ResourceInUseException =
  exports.DeleteDirectoryConfigResult =
  exports.DeleteDirectoryConfigRequest =
  exports.CreateUserResult =
  exports.CreateUserRequest =
  exports.MessageAction =
  exports.CreateUsageReportSubscriptionResult =
  exports.UsageReportSchedule =
  exports.CreateUsageReportSubscriptionRequest =
  exports.CreateUpdatedImageResult =
  exports.Image =
  exports.VisibilityType =
  exports.ImageStateChangeReason =
  exports.ImageStateChangeReasonCode =
  exports.ImageState =
  exports.ImagePermissions =
  exports.CreateUpdatedImageRequest =
  exports.CreateStreamingURLResult =
  exports.CreateStreamingURLRequest =
  exports.CreateStackResult =
  exports.Stack =
  exports.StackError =
  exports.StackErrorCode =
  exports.CreateStackRequest =
  exports.UserSetting =
  exports.Permission =
  exports.StorageConnector =
  exports.StorageConnectorType =
  exports.CreateImageBuilderStreamingURLResult =
  exports.CreateImageBuilderStreamingURLRequest =
  exports.CreateImageBuilderResult =
  exports.ImageBuilder =
  exports.ImageBuilderStateChangeReason =
    void 0;
exports.TagResourceResponse =
  exports.TagResourceRequest =
  exports.StopImageBuilderResult =
  exports.StopImageBuilderRequest =
  exports.StopFleetResult =
  exports.StopFleetRequest =
  exports.StartImageBuilderResult =
  exports.StartImageBuilderRequest =
  exports.StartFleetResult =
  exports.StartFleetRequest =
  exports.ListTagsForResourceResponse =
  exports.ListTagsForResourceRequest =
  exports.ListAssociatedStacksResult =
  exports.ListAssociatedStacksRequest =
  exports.ListAssociatedFleetsResult =
  exports.ListAssociatedFleetsRequest =
  exports.FleetAttribute =
  exports.ExpireSessionResult =
  exports.ExpireSessionRequest =
  exports.EnableUserResult =
  exports.EnableUserRequest =
  exports.DisassociateFleetResult =
  exports.DisassociateFleetRequest =
  exports.DisableUserResult =
  exports.DisableUserRequest =
  exports.DescribeUserStackAssociationsResult =
  exports.DescribeUserStackAssociationsRequest =
  exports.DescribeUsersResult =
  exports.User =
  exports.DescribeUsersRequest =
  exports.DescribeUsageReportSubscriptionsResult =
  exports.UsageReportSubscription =
  exports.LastReportGenerationExecutionError =
  exports.UsageReportExecutionErrorCode =
  exports.DescribeUsageReportSubscriptionsRequest =
  exports.DescribeStacksResult =
  exports.DescribeStacksRequest =
  exports.DescribeSessionsResult =
  exports.Session =
  exports.SessionState =
  exports.SessionConnectionState =
  exports.DescribeSessionsRequest =
  exports.DescribeImagesResult =
  exports.DescribeImagesRequest =
  exports.DescribeImagePermissionsResult =
  exports.SharedImagePermissions =
  exports.DescribeImagePermissionsRequest =
  exports.DescribeImageBuildersResult =
  exports.DescribeImageBuildersRequest =
  exports.DescribeFleetsResult =
    void 0;
exports.UpdateStackResult =
  exports.UpdateStackRequest =
  exports.StackAttribute =
  exports.UpdateImagePermissionsResult =
  exports.UpdateImagePermissionsRequest =
  exports.UpdateFleetResult =
  exports.UpdateFleetRequest =
  exports.UpdateDirectoryConfigResult =
  exports.UpdateDirectoryConfigRequest =
  exports.UntagResourceResponse =
  exports.UntagResourceRequest =
    void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessEndpointType;
(function (AccessEndpointType) {
  AccessEndpointType["STREAMING"] = "STREAMING";
})((AccessEndpointType = exports.AccessEndpointType || (exports.AccessEndpointType = {})));
var AccessEndpoint;
(function (AccessEndpoint) {
  /**
   * @internal
   */
  AccessEndpoint.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessEndpoint = exports.AccessEndpoint || (exports.AccessEndpoint = {})));
var Action;
(function (Action) {
  Action["CLIPBOARD_COPY_FROM_LOCAL_DEVICE"] = "CLIPBOARD_COPY_FROM_LOCAL_DEVICE";
  Action["CLIPBOARD_COPY_TO_LOCAL_DEVICE"] = "CLIPBOARD_COPY_TO_LOCAL_DEVICE";
  Action["DOMAIN_PASSWORD_SIGNIN"] = "DOMAIN_PASSWORD_SIGNIN";
  Action["DOMAIN_SMART_CARD_SIGNIN"] = "DOMAIN_SMART_CARD_SIGNIN";
  Action["FILE_DOWNLOAD"] = "FILE_DOWNLOAD";
  Action["FILE_UPLOAD"] = "FILE_UPLOAD";
  Action["PRINTING_TO_LOCAL_DEVICE"] = "PRINTING_TO_LOCAL_DEVICE";
})((Action = exports.Action || (exports.Action = {})));
var Application;
(function (Application) {
  /**
   * @internal
   */
  Application.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Application = exports.Application || (exports.Application = {})));
var ApplicationSettings;
(function (ApplicationSettings) {
  /**
   * @internal
   */
  ApplicationSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApplicationSettings = exports.ApplicationSettings || (exports.ApplicationSettings = {})));
var ApplicationSettingsResponse;
(function (ApplicationSettingsResponse) {
  /**
   * @internal
   */
  ApplicationSettingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApplicationSettingsResponse = exports.ApplicationSettingsResponse || (exports.ApplicationSettingsResponse = {})));
var AssociateFleetRequest;
(function (AssociateFleetRequest) {
  /**
   * @internal
   */
  AssociateFleetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AssociateFleetRequest = exports.AssociateFleetRequest || (exports.AssociateFleetRequest = {})));
var AssociateFleetResult;
(function (AssociateFleetResult) {
  /**
   * @internal
   */
  AssociateFleetResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AssociateFleetResult = exports.AssociateFleetResult || (exports.AssociateFleetResult = {})));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
  /**
   * @internal
   */
  ConcurrentModificationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ConcurrentModificationException =
    exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}))
);
var IncompatibleImageException;
(function (IncompatibleImageException) {
  /**
   * @internal
   */
  IncompatibleImageException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((IncompatibleImageException = exports.IncompatibleImageException || (exports.IncompatibleImageException = {})));
var InvalidAccountStatusException;
(function (InvalidAccountStatusException) {
  /**
   * @internal
   */
  InvalidAccountStatusException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidAccountStatusException =
    exports.InvalidAccountStatusException || (exports.InvalidAccountStatusException = {}))
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
var OperationNotPermittedException;
(function (OperationNotPermittedException) {
  /**
   * @internal
   */
  OperationNotPermittedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (OperationNotPermittedException =
    exports.OperationNotPermittedException || (exports.OperationNotPermittedException = {}))
);
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var AuthenticationType;
(function (AuthenticationType) {
  AuthenticationType["API"] = "API";
  AuthenticationType["SAML"] = "SAML";
  AuthenticationType["USERPOOL"] = "USERPOOL";
})((AuthenticationType = exports.AuthenticationType || (exports.AuthenticationType = {})));
var UserStackAssociation;
(function (UserStackAssociation) {
  /**
   * @internal
   */
  UserStackAssociation.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserName && { UserName: smithy_client_1.SENSITIVE_STRING }),
  });
})((UserStackAssociation = exports.UserStackAssociation || (exports.UserStackAssociation = {})));
var BatchAssociateUserStackRequest;
(function (BatchAssociateUserStackRequest) {
  /**
   * @internal
   */
  BatchAssociateUserStackRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserStackAssociations && {
      UserStackAssociations: obj.UserStackAssociations.map((item) => UserStackAssociation.filterSensitiveLog(item)),
    }),
  });
})(
  (BatchAssociateUserStackRequest =
    exports.BatchAssociateUserStackRequest || (exports.BatchAssociateUserStackRequest = {}))
);
var UserStackAssociationErrorCode;
(function (UserStackAssociationErrorCode) {
  UserStackAssociationErrorCode["DIRECTORY_NOT_FOUND"] = "DIRECTORY_NOT_FOUND";
  UserStackAssociationErrorCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
  UserStackAssociationErrorCode["STACK_NOT_FOUND"] = "STACK_NOT_FOUND";
  UserStackAssociationErrorCode["USER_NAME_NOT_FOUND"] = "USER_NAME_NOT_FOUND";
})(
  (UserStackAssociationErrorCode =
    exports.UserStackAssociationErrorCode || (exports.UserStackAssociationErrorCode = {}))
);
var UserStackAssociationError;
(function (UserStackAssociationError) {
  /**
   * @internal
   */
  UserStackAssociationError.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserStackAssociation && {
      UserStackAssociation: UserStackAssociation.filterSensitiveLog(obj.UserStackAssociation),
    }),
  });
})((UserStackAssociationError = exports.UserStackAssociationError || (exports.UserStackAssociationError = {})));
var BatchAssociateUserStackResult;
(function (BatchAssociateUserStackResult) {
  /**
   * @internal
   */
  BatchAssociateUserStackResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.errors && { errors: obj.errors.map((item) => UserStackAssociationError.filterSensitiveLog(item)) }),
  });
})(
  (BatchAssociateUserStackResult =
    exports.BatchAssociateUserStackResult || (exports.BatchAssociateUserStackResult = {}))
);
var InvalidParameterCombinationException;
(function (InvalidParameterCombinationException) {
  /**
   * @internal
   */
  InvalidParameterCombinationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidParameterCombinationException =
    exports.InvalidParameterCombinationException || (exports.InvalidParameterCombinationException = {}))
);
var BatchDisassociateUserStackRequest;
(function (BatchDisassociateUserStackRequest) {
  /**
   * @internal
   */
  BatchDisassociateUserStackRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserStackAssociations && {
      UserStackAssociations: obj.UserStackAssociations.map((item) => UserStackAssociation.filterSensitiveLog(item)),
    }),
  });
})(
  (BatchDisassociateUserStackRequest =
    exports.BatchDisassociateUserStackRequest || (exports.BatchDisassociateUserStackRequest = {}))
);
var BatchDisassociateUserStackResult;
(function (BatchDisassociateUserStackResult) {
  /**
   * @internal
   */
  BatchDisassociateUserStackResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.errors && { errors: obj.errors.map((item) => UserStackAssociationError.filterSensitiveLog(item)) }),
  });
})(
  (BatchDisassociateUserStackResult =
    exports.BatchDisassociateUserStackResult || (exports.BatchDisassociateUserStackResult = {}))
);
var ComputeCapacity;
(function (ComputeCapacity) {
  /**
   * @internal
   */
  ComputeCapacity.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ComputeCapacity = exports.ComputeCapacity || (exports.ComputeCapacity = {})));
var ComputeCapacityStatus;
(function (ComputeCapacityStatus) {
  /**
   * @internal
   */
  ComputeCapacityStatus.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ComputeCapacityStatus = exports.ComputeCapacityStatus || (exports.ComputeCapacityStatus = {})));
var CopyImageRequest;
(function (CopyImageRequest) {
  /**
   * @internal
   */
  CopyImageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CopyImageRequest = exports.CopyImageRequest || (exports.CopyImageRequest = {})));
var CopyImageResponse;
(function (CopyImageResponse) {
  /**
   * @internal
   */
  CopyImageResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CopyImageResponse = exports.CopyImageResponse || (exports.CopyImageResponse = {})));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
  /**
   * @internal
   */
  ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ResourceAlreadyExistsException =
    exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}))
);
var ResourceNotAvailableException;
(function (ResourceNotAvailableException) {
  /**
   * @internal
   */
  ResourceNotAvailableException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ResourceNotAvailableException =
    exports.ResourceNotAvailableException || (exports.ResourceNotAvailableException = {}))
);
var ServiceAccountCredentials;
(function (ServiceAccountCredentials) {
  /**
   * @internal
   */
  ServiceAccountCredentials.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccountName && { AccountName: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.AccountPassword && { AccountPassword: smithy_client_1.SENSITIVE_STRING }),
  });
})((ServiceAccountCredentials = exports.ServiceAccountCredentials || (exports.ServiceAccountCredentials = {})));
var CreateDirectoryConfigRequest;
(function (CreateDirectoryConfigRequest) {
  /**
   * @internal
   */
  CreateDirectoryConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ServiceAccountCredentials && {
      ServiceAccountCredentials: ServiceAccountCredentials.filterSensitiveLog(obj.ServiceAccountCredentials),
    }),
  });
})(
  (CreateDirectoryConfigRequest = exports.CreateDirectoryConfigRequest || (exports.CreateDirectoryConfigRequest = {}))
);
var DirectoryConfig;
(function (DirectoryConfig) {
  /**
   * @internal
   */
  DirectoryConfig.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ServiceAccountCredentials && {
      ServiceAccountCredentials: ServiceAccountCredentials.filterSensitiveLog(obj.ServiceAccountCredentials),
    }),
  });
})((DirectoryConfig = exports.DirectoryConfig || (exports.DirectoryConfig = {})));
var CreateDirectoryConfigResult;
(function (CreateDirectoryConfigResult) {
  /**
   * @internal
   */
  CreateDirectoryConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DirectoryConfig && { DirectoryConfig: DirectoryConfig.filterSensitiveLog(obj.DirectoryConfig) }),
  });
})((CreateDirectoryConfigResult = exports.CreateDirectoryConfigResult || (exports.CreateDirectoryConfigResult = {})));
var InvalidRoleException;
(function (InvalidRoleException) {
  /**
   * @internal
   */
  InvalidRoleException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidRoleException = exports.InvalidRoleException || (exports.InvalidRoleException = {})));
var DomainJoinInfo;
(function (DomainJoinInfo) {
  /**
   * @internal
   */
  DomainJoinInfo.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DomainJoinInfo = exports.DomainJoinInfo || (exports.DomainJoinInfo = {})));
var FleetType;
(function (FleetType) {
  FleetType["ALWAYS_ON"] = "ALWAYS_ON";
  FleetType["ON_DEMAND"] = "ON_DEMAND";
})((FleetType = exports.FleetType || (exports.FleetType = {})));
var StreamView;
(function (StreamView) {
  StreamView["APP"] = "APP";
  StreamView["DESKTOP"] = "DESKTOP";
})((StreamView = exports.StreamView || (exports.StreamView = {})));
var VpcConfig;
(function (VpcConfig) {
  /**
   * @internal
   */
  VpcConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VpcConfig = exports.VpcConfig || (exports.VpcConfig = {})));
var CreateFleetRequest;
(function (CreateFleetRequest) {
  /**
   * @internal
   */
  CreateFleetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateFleetRequest = exports.CreateFleetRequest || (exports.CreateFleetRequest = {})));
var FleetErrorCode;
(function (FleetErrorCode) {
  FleetErrorCode["DOMAIN_JOIN_ERROR_ACCESS_DENIED"] = "DOMAIN_JOIN_ERROR_ACCESS_DENIED";
  FleetErrorCode["DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED"] =
    "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED";
  FleetErrorCode["DOMAIN_JOIN_ERROR_FILE_NOT_FOUND"] = "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND";
  FleetErrorCode["DOMAIN_JOIN_ERROR_INVALID_PARAMETER"] = "DOMAIN_JOIN_ERROR_INVALID_PARAMETER";
  FleetErrorCode["DOMAIN_JOIN_ERROR_LOGON_FAILURE"] = "DOMAIN_JOIN_ERROR_LOGON_FAILURE";
  FleetErrorCode["DOMAIN_JOIN_ERROR_MORE_DATA"] = "DOMAIN_JOIN_ERROR_MORE_DATA";
  FleetErrorCode["DOMAIN_JOIN_ERROR_NOT_SUPPORTED"] = "DOMAIN_JOIN_ERROR_NOT_SUPPORTED";
  FleetErrorCode["DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN"] = "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN";
  FleetErrorCode["DOMAIN_JOIN_INTERNAL_SERVICE_ERROR"] = "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR";
  FleetErrorCode["DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME"] = "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME";
  FleetErrorCode["DOMAIN_JOIN_NERR_PASSWORD_EXPIRED"] = "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED";
  FleetErrorCode["DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED"] = "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED";
  FleetErrorCode["FLEET_INSTANCE_PROVISIONING_FAILURE"] = "FLEET_INSTANCE_PROVISIONING_FAILURE";
  FleetErrorCode["FLEET_STOPPED"] = "FLEET_STOPPED";
  FleetErrorCode["IAM_SERVICE_ROLE_IS_MISSING"] = "IAM_SERVICE_ROLE_IS_MISSING";
  FleetErrorCode["IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION"] =
    "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION";
  FleetErrorCode["IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION"] = "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION";
  FleetErrorCode["IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION"] = "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION";
  FleetErrorCode["IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION"] = "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION";
  FleetErrorCode["IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION"] = "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION";
  FleetErrorCode["IGW_NOT_ATTACHED"] = "IGW_NOT_ATTACHED";
  FleetErrorCode["IMAGE_NOT_FOUND"] = "IMAGE_NOT_FOUND";
  FleetErrorCode["INTERNAL_SERVICE_ERROR"] = "INTERNAL_SERVICE_ERROR";
  FleetErrorCode["INVALID_SUBNET_CONFIGURATION"] = "INVALID_SUBNET_CONFIGURATION";
  FleetErrorCode["MACHINE_ROLE_IS_MISSING"] = "MACHINE_ROLE_IS_MISSING";
  FleetErrorCode["NETWORK_INTERFACE_LIMIT_EXCEEDED"] = "NETWORK_INTERFACE_LIMIT_EXCEEDED";
  FleetErrorCode["SECURITY_GROUPS_NOT_FOUND"] = "SECURITY_GROUPS_NOT_FOUND";
  FleetErrorCode["STS_DISABLED_IN_REGION"] = "STS_DISABLED_IN_REGION";
  FleetErrorCode["SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES"] = "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES";
  FleetErrorCode["SUBNET_NOT_FOUND"] = "SUBNET_NOT_FOUND";
})((FleetErrorCode = exports.FleetErrorCode || (exports.FleetErrorCode = {})));
var FleetError;
(function (FleetError) {
  /**
   * @internal
   */
  FleetError.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FleetError = exports.FleetError || (exports.FleetError = {})));
var FleetState;
(function (FleetState) {
  FleetState["RUNNING"] = "RUNNING";
  FleetState["STARTING"] = "STARTING";
  FleetState["STOPPED"] = "STOPPED";
  FleetState["STOPPING"] = "STOPPING";
})((FleetState = exports.FleetState || (exports.FleetState = {})));
var Fleet;
(function (Fleet) {
  /**
   * @internal
   */
  Fleet.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Fleet = exports.Fleet || (exports.Fleet = {})));
var CreateFleetResult;
(function (CreateFleetResult) {
  /**
   * @internal
   */
  CreateFleetResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateFleetResult = exports.CreateFleetResult || (exports.CreateFleetResult = {})));
var RequestLimitExceededException;
(function (RequestLimitExceededException) {
  /**
   * @internal
   */
  RequestLimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RequestLimitExceededException =
    exports.RequestLimitExceededException || (exports.RequestLimitExceededException = {}))
);
var CreateImageBuilderRequest;
(function (CreateImageBuilderRequest) {
  /**
   * @internal
   */
  CreateImageBuilderRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateImageBuilderRequest = exports.CreateImageBuilderRequest || (exports.CreateImageBuilderRequest = {})));
var ResourceError;
(function (ResourceError) {
  /**
   * @internal
   */
  ResourceError.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceError = exports.ResourceError || (exports.ResourceError = {})));
var NetworkAccessConfiguration;
(function (NetworkAccessConfiguration) {
  /**
   * @internal
   */
  NetworkAccessConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NetworkAccessConfiguration = exports.NetworkAccessConfiguration || (exports.NetworkAccessConfiguration = {})));
var ImageBuilderState;
(function (ImageBuilderState) {
  ImageBuilderState["DELETING"] = "DELETING";
  ImageBuilderState["FAILED"] = "FAILED";
  ImageBuilderState["PENDING"] = "PENDING";
  ImageBuilderState["PENDING_QUALIFICATION"] = "PENDING_QUALIFICATION";
  ImageBuilderState["REBOOTING"] = "REBOOTING";
  ImageBuilderState["RUNNING"] = "RUNNING";
  ImageBuilderState["SNAPSHOTTING"] = "SNAPSHOTTING";
  ImageBuilderState["STOPPED"] = "STOPPED";
  ImageBuilderState["STOPPING"] = "STOPPING";
  ImageBuilderState["UPDATING"] = "UPDATING";
  ImageBuilderState["UPDATING_AGENT"] = "UPDATING_AGENT";
})((ImageBuilderState = exports.ImageBuilderState || (exports.ImageBuilderState = {})));
var ImageBuilderStateChangeReasonCode;
(function (ImageBuilderStateChangeReasonCode) {
  ImageBuilderStateChangeReasonCode["IMAGE_UNAVAILABLE"] = "IMAGE_UNAVAILABLE";
  ImageBuilderStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
})(
  (ImageBuilderStateChangeReasonCode =
    exports.ImageBuilderStateChangeReasonCode || (exports.ImageBuilderStateChangeReasonCode = {}))
);
var ImageBuilderStateChangeReason;
(function (ImageBuilderStateChangeReason) {
  /**
   * @internal
   */
  ImageBuilderStateChangeReason.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ImageBuilderStateChangeReason =
    exports.ImageBuilderStateChangeReason || (exports.ImageBuilderStateChangeReason = {}))
);
var ImageBuilder;
(function (ImageBuilder) {
  /**
   * @internal
   */
  ImageBuilder.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ImageBuilder = exports.ImageBuilder || (exports.ImageBuilder = {})));
var CreateImageBuilderResult;
(function (CreateImageBuilderResult) {
  /**
   * @internal
   */
  CreateImageBuilderResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateImageBuilderResult = exports.CreateImageBuilderResult || (exports.CreateImageBuilderResult = {})));
var CreateImageBuilderStreamingURLRequest;
(function (CreateImageBuilderStreamingURLRequest) {
  /**
   * @internal
   */
  CreateImageBuilderStreamingURLRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateImageBuilderStreamingURLRequest =
    exports.CreateImageBuilderStreamingURLRequest || (exports.CreateImageBuilderStreamingURLRequest = {}))
);
var CreateImageBuilderStreamingURLResult;
(function (CreateImageBuilderStreamingURLResult) {
  /**
   * @internal
   */
  CreateImageBuilderStreamingURLResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateImageBuilderStreamingURLResult =
    exports.CreateImageBuilderStreamingURLResult || (exports.CreateImageBuilderStreamingURLResult = {}))
);
var StorageConnectorType;
(function (StorageConnectorType) {
  StorageConnectorType["GOOGLE_DRIVE"] = "GOOGLE_DRIVE";
  StorageConnectorType["HOMEFOLDERS"] = "HOMEFOLDERS";
  StorageConnectorType["ONE_DRIVE"] = "ONE_DRIVE";
})((StorageConnectorType = exports.StorageConnectorType || (exports.StorageConnectorType = {})));
var StorageConnector;
(function (StorageConnector) {
  /**
   * @internal
   */
  StorageConnector.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StorageConnector = exports.StorageConnector || (exports.StorageConnector = {})));
var Permission;
(function (Permission) {
  Permission["DISABLED"] = "DISABLED";
  Permission["ENABLED"] = "ENABLED";
})((Permission = exports.Permission || (exports.Permission = {})));
var UserSetting;
(function (UserSetting) {
  /**
   * @internal
   */
  UserSetting.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UserSetting = exports.UserSetting || (exports.UserSetting = {})));
var CreateStackRequest;
(function (CreateStackRequest) {
  /**
   * @internal
   */
  CreateStackRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateStackRequest = exports.CreateStackRequest || (exports.CreateStackRequest = {})));
var StackErrorCode;
(function (StackErrorCode) {
  StackErrorCode["INTERNAL_SERVICE_ERROR"] = "INTERNAL_SERVICE_ERROR";
  StackErrorCode["STORAGE_CONNECTOR_ERROR"] = "STORAGE_CONNECTOR_ERROR";
})((StackErrorCode = exports.StackErrorCode || (exports.StackErrorCode = {})));
var StackError;
(function (StackError) {
  /**
   * @internal
   */
  StackError.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackError = exports.StackError || (exports.StackError = {})));
var Stack;
(function (Stack) {
  /**
   * @internal
   */
  Stack.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Stack = exports.Stack || (exports.Stack = {})));
var CreateStackResult;
(function (CreateStackResult) {
  /**
   * @internal
   */
  CreateStackResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateStackResult = exports.CreateStackResult || (exports.CreateStackResult = {})));
var CreateStreamingURLRequest;
(function (CreateStreamingURLRequest) {
  /**
   * @internal
   */
  CreateStreamingURLRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateStreamingURLRequest = exports.CreateStreamingURLRequest || (exports.CreateStreamingURLRequest = {})));
var CreateStreamingURLResult;
(function (CreateStreamingURLResult) {
  /**
   * @internal
   */
  CreateStreamingURLResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateStreamingURLResult = exports.CreateStreamingURLResult || (exports.CreateStreamingURLResult = {})));
var CreateUpdatedImageRequest;
(function (CreateUpdatedImageRequest) {
  /**
   * @internal
   */
  CreateUpdatedImageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateUpdatedImageRequest = exports.CreateUpdatedImageRequest || (exports.CreateUpdatedImageRequest = {})));
var ImagePermissions;
(function (ImagePermissions) {
  /**
   * @internal
   */
  ImagePermissions.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ImagePermissions = exports.ImagePermissions || (exports.ImagePermissions = {})));
var ImageState;
(function (ImageState) {
  ImageState["AVAILABLE"] = "AVAILABLE";
  ImageState["COPYING"] = "COPYING";
  ImageState["CREATING"] = "CREATING";
  ImageState["DELETING"] = "DELETING";
  ImageState["FAILED"] = "FAILED";
  ImageState["IMPORTING"] = "IMPORTING";
  ImageState["PENDING"] = "PENDING";
})((ImageState = exports.ImageState || (exports.ImageState = {})));
var ImageStateChangeReasonCode;
(function (ImageStateChangeReasonCode) {
  ImageStateChangeReasonCode["IMAGE_BUILDER_NOT_AVAILABLE"] = "IMAGE_BUILDER_NOT_AVAILABLE";
  ImageStateChangeReasonCode["IMAGE_COPY_FAILURE"] = "IMAGE_COPY_FAILURE";
  ImageStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
})((ImageStateChangeReasonCode = exports.ImageStateChangeReasonCode || (exports.ImageStateChangeReasonCode = {})));
var ImageStateChangeReason;
(function (ImageStateChangeReason) {
  /**
   * @internal
   */
  ImageStateChangeReason.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ImageStateChangeReason = exports.ImageStateChangeReason || (exports.ImageStateChangeReason = {})));
var VisibilityType;
(function (VisibilityType) {
  VisibilityType["PRIVATE"] = "PRIVATE";
  VisibilityType["PUBLIC"] = "PUBLIC";
  VisibilityType["SHARED"] = "SHARED";
})((VisibilityType = exports.VisibilityType || (exports.VisibilityType = {})));
var Image;
(function (Image) {
  /**
   * @internal
   */
  Image.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Image = exports.Image || (exports.Image = {})));
var CreateUpdatedImageResult;
(function (CreateUpdatedImageResult) {
  /**
   * @internal
   */
  CreateUpdatedImageResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateUpdatedImageResult = exports.CreateUpdatedImageResult || (exports.CreateUpdatedImageResult = {})));
var CreateUsageReportSubscriptionRequest;
(function (CreateUsageReportSubscriptionRequest) {
  /**
   * @internal
   */
  CreateUsageReportSubscriptionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateUsageReportSubscriptionRequest =
    exports.CreateUsageReportSubscriptionRequest || (exports.CreateUsageReportSubscriptionRequest = {}))
);
var UsageReportSchedule;
(function (UsageReportSchedule) {
  UsageReportSchedule["DAILY"] = "DAILY";
})((UsageReportSchedule = exports.UsageReportSchedule || (exports.UsageReportSchedule = {})));
var CreateUsageReportSubscriptionResult;
(function (CreateUsageReportSubscriptionResult) {
  /**
   * @internal
   */
  CreateUsageReportSubscriptionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateUsageReportSubscriptionResult =
    exports.CreateUsageReportSubscriptionResult || (exports.CreateUsageReportSubscriptionResult = {}))
);
var MessageAction;
(function (MessageAction) {
  MessageAction["RESEND"] = "RESEND";
  MessageAction["SUPPRESS"] = "SUPPRESS";
})((MessageAction = exports.MessageAction || (exports.MessageAction = {})));
var CreateUserRequest;
(function (CreateUserRequest) {
  /**
   * @internal
   */
  CreateUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserName && { UserName: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.FirstName && { FirstName: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.LastName && { LastName: smithy_client_1.SENSITIVE_STRING }),
  });
})((CreateUserRequest = exports.CreateUserRequest || (exports.CreateUserRequest = {})));
var CreateUserResult;
(function (CreateUserResult) {
  /**
   * @internal
   */
  CreateUserResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateUserResult = exports.CreateUserResult || (exports.CreateUserResult = {})));
var DeleteDirectoryConfigRequest;
(function (DeleteDirectoryConfigRequest) {
  /**
   * @internal
   */
  DeleteDirectoryConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteDirectoryConfigRequest = exports.DeleteDirectoryConfigRequest || (exports.DeleteDirectoryConfigRequest = {}))
);
var DeleteDirectoryConfigResult;
(function (DeleteDirectoryConfigResult) {
  /**
   * @internal
   */
  DeleteDirectoryConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteDirectoryConfigResult = exports.DeleteDirectoryConfigResult || (exports.DeleteDirectoryConfigResult = {})));
var ResourceInUseException;
(function (ResourceInUseException) {
  /**
   * @internal
   */
  ResourceInUseException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {})));
var DeleteFleetRequest;
(function (DeleteFleetRequest) {
  /**
   * @internal
   */
  DeleteFleetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteFleetRequest = exports.DeleteFleetRequest || (exports.DeleteFleetRequest = {})));
var DeleteFleetResult;
(function (DeleteFleetResult) {
  /**
   * @internal
   */
  DeleteFleetResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteFleetResult = exports.DeleteFleetResult || (exports.DeleteFleetResult = {})));
var DeleteImageRequest;
(function (DeleteImageRequest) {
  /**
   * @internal
   */
  DeleteImageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteImageRequest = exports.DeleteImageRequest || (exports.DeleteImageRequest = {})));
var DeleteImageResult;
(function (DeleteImageResult) {
  /**
   * @internal
   */
  DeleteImageResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteImageResult = exports.DeleteImageResult || (exports.DeleteImageResult = {})));
var DeleteImageBuilderRequest;
(function (DeleteImageBuilderRequest) {
  /**
   * @internal
   */
  DeleteImageBuilderRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteImageBuilderRequest = exports.DeleteImageBuilderRequest || (exports.DeleteImageBuilderRequest = {})));
var DeleteImageBuilderResult;
(function (DeleteImageBuilderResult) {
  /**
   * @internal
   */
  DeleteImageBuilderResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteImageBuilderResult = exports.DeleteImageBuilderResult || (exports.DeleteImageBuilderResult = {})));
var DeleteImagePermissionsRequest;
(function (DeleteImagePermissionsRequest) {
  /**
   * @internal
   */
  DeleteImagePermissionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteImagePermissionsRequest =
    exports.DeleteImagePermissionsRequest || (exports.DeleteImagePermissionsRequest = {}))
);
var DeleteImagePermissionsResult;
(function (DeleteImagePermissionsResult) {
  /**
   * @internal
   */
  DeleteImagePermissionsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteImagePermissionsResult = exports.DeleteImagePermissionsResult || (exports.DeleteImagePermissionsResult = {}))
);
var DeleteStackRequest;
(function (DeleteStackRequest) {
  /**
   * @internal
   */
  DeleteStackRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteStackRequest = exports.DeleteStackRequest || (exports.DeleteStackRequest = {})));
var DeleteStackResult;
(function (DeleteStackResult) {
  /**
   * @internal
   */
  DeleteStackResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteStackResult = exports.DeleteStackResult || (exports.DeleteStackResult = {})));
var DeleteUsageReportSubscriptionRequest;
(function (DeleteUsageReportSubscriptionRequest) {
  /**
   * @internal
   */
  DeleteUsageReportSubscriptionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteUsageReportSubscriptionRequest =
    exports.DeleteUsageReportSubscriptionRequest || (exports.DeleteUsageReportSubscriptionRequest = {}))
);
var DeleteUsageReportSubscriptionResult;
(function (DeleteUsageReportSubscriptionResult) {
  /**
   * @internal
   */
  DeleteUsageReportSubscriptionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteUsageReportSubscriptionResult =
    exports.DeleteUsageReportSubscriptionResult || (exports.DeleteUsageReportSubscriptionResult = {}))
);
var DeleteUserRequest;
(function (DeleteUserRequest) {
  /**
   * @internal
   */
  DeleteUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserName && { UserName: smithy_client_1.SENSITIVE_STRING }),
  });
})((DeleteUserRequest = exports.DeleteUserRequest || (exports.DeleteUserRequest = {})));
var DeleteUserResult;
(function (DeleteUserResult) {
  /**
   * @internal
   */
  DeleteUserResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteUserResult = exports.DeleteUserResult || (exports.DeleteUserResult = {})));
var DescribeDirectoryConfigsRequest;
(function (DescribeDirectoryConfigsRequest) {
  /**
   * @internal
   */
  DescribeDirectoryConfigsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeDirectoryConfigsRequest =
    exports.DescribeDirectoryConfigsRequest || (exports.DescribeDirectoryConfigsRequest = {}))
);
var DescribeDirectoryConfigsResult;
(function (DescribeDirectoryConfigsResult) {
  /**
   * @internal
   */
  DescribeDirectoryConfigsResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DirectoryConfigs && {
      DirectoryConfigs: obj.DirectoryConfigs.map((item) => DirectoryConfig.filterSensitiveLog(item)),
    }),
  });
})(
  (DescribeDirectoryConfigsResult =
    exports.DescribeDirectoryConfigsResult || (exports.DescribeDirectoryConfigsResult = {}))
);
var DescribeFleetsRequest;
(function (DescribeFleetsRequest) {
  /**
   * @internal
   */
  DescribeFleetsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeFleetsRequest = exports.DescribeFleetsRequest || (exports.DescribeFleetsRequest = {})));
var DescribeFleetsResult;
(function (DescribeFleetsResult) {
  /**
   * @internal
   */
  DescribeFleetsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeFleetsResult = exports.DescribeFleetsResult || (exports.DescribeFleetsResult = {})));
var DescribeImageBuildersRequest;
(function (DescribeImageBuildersRequest) {
  /**
   * @internal
   */
  DescribeImageBuildersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeImageBuildersRequest = exports.DescribeImageBuildersRequest || (exports.DescribeImageBuildersRequest = {}))
);
var DescribeImageBuildersResult;
(function (DescribeImageBuildersResult) {
  /**
   * @internal
   */
  DescribeImageBuildersResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeImageBuildersResult = exports.DescribeImageBuildersResult || (exports.DescribeImageBuildersResult = {})));
var DescribeImagePermissionsRequest;
(function (DescribeImagePermissionsRequest) {
  /**
   * @internal
   */
  DescribeImagePermissionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeImagePermissionsRequest =
    exports.DescribeImagePermissionsRequest || (exports.DescribeImagePermissionsRequest = {}))
);
var SharedImagePermissions;
(function (SharedImagePermissions) {
  /**
   * @internal
   */
  SharedImagePermissions.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SharedImagePermissions = exports.SharedImagePermissions || (exports.SharedImagePermissions = {})));
var DescribeImagePermissionsResult;
(function (DescribeImagePermissionsResult) {
  /**
   * @internal
   */
  DescribeImagePermissionsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeImagePermissionsResult =
    exports.DescribeImagePermissionsResult || (exports.DescribeImagePermissionsResult = {}))
);
var DescribeImagesRequest;
(function (DescribeImagesRequest) {
  /**
   * @internal
   */
  DescribeImagesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeImagesRequest = exports.DescribeImagesRequest || (exports.DescribeImagesRequest = {})));
var DescribeImagesResult;
(function (DescribeImagesResult) {
  /**
   * @internal
   */
  DescribeImagesResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeImagesResult = exports.DescribeImagesResult || (exports.DescribeImagesResult = {})));
var DescribeSessionsRequest;
(function (DescribeSessionsRequest) {
  /**
   * @internal
   */
  DescribeSessionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeSessionsRequest = exports.DescribeSessionsRequest || (exports.DescribeSessionsRequest = {})));
var SessionConnectionState;
(function (SessionConnectionState) {
  SessionConnectionState["CONNECTED"] = "CONNECTED";
  SessionConnectionState["NOT_CONNECTED"] = "NOT_CONNECTED";
})((SessionConnectionState = exports.SessionConnectionState || (exports.SessionConnectionState = {})));
var SessionState;
(function (SessionState) {
  SessionState["ACTIVE"] = "ACTIVE";
  SessionState["EXPIRED"] = "EXPIRED";
  SessionState["PENDING"] = "PENDING";
})((SessionState = exports.SessionState || (exports.SessionState = {})));
var Session;
(function (Session) {
  /**
   * @internal
   */
  Session.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Session = exports.Session || (exports.Session = {})));
var DescribeSessionsResult;
(function (DescribeSessionsResult) {
  /**
   * @internal
   */
  DescribeSessionsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeSessionsResult = exports.DescribeSessionsResult || (exports.DescribeSessionsResult = {})));
var DescribeStacksRequest;
(function (DescribeStacksRequest) {
  /**
   * @internal
   */
  DescribeStacksRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeStacksRequest = exports.DescribeStacksRequest || (exports.DescribeStacksRequest = {})));
var DescribeStacksResult;
(function (DescribeStacksResult) {
  /**
   * @internal
   */
  DescribeStacksResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeStacksResult = exports.DescribeStacksResult || (exports.DescribeStacksResult = {})));
var DescribeUsageReportSubscriptionsRequest;
(function (DescribeUsageReportSubscriptionsRequest) {
  /**
   * @internal
   */
  DescribeUsageReportSubscriptionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeUsageReportSubscriptionsRequest =
    exports.DescribeUsageReportSubscriptionsRequest || (exports.DescribeUsageReportSubscriptionsRequest = {}))
);
var UsageReportExecutionErrorCode;
(function (UsageReportExecutionErrorCode) {
  UsageReportExecutionErrorCode["ACCESS_DENIED"] = "ACCESS_DENIED";
  UsageReportExecutionErrorCode["INTERNAL_SERVICE_ERROR"] = "INTERNAL_SERVICE_ERROR";
  UsageReportExecutionErrorCode["RESOURCE_NOT_FOUND"] = "RESOURCE_NOT_FOUND";
})(
  (UsageReportExecutionErrorCode =
    exports.UsageReportExecutionErrorCode || (exports.UsageReportExecutionErrorCode = {}))
);
var LastReportGenerationExecutionError;
(function (LastReportGenerationExecutionError) {
  /**
   * @internal
   */
  LastReportGenerationExecutionError.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (LastReportGenerationExecutionError =
    exports.LastReportGenerationExecutionError || (exports.LastReportGenerationExecutionError = {}))
);
var UsageReportSubscription;
(function (UsageReportSubscription) {
  /**
   * @internal
   */
  UsageReportSubscription.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UsageReportSubscription = exports.UsageReportSubscription || (exports.UsageReportSubscription = {})));
var DescribeUsageReportSubscriptionsResult;
(function (DescribeUsageReportSubscriptionsResult) {
  /**
   * @internal
   */
  DescribeUsageReportSubscriptionsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeUsageReportSubscriptionsResult =
    exports.DescribeUsageReportSubscriptionsResult || (exports.DescribeUsageReportSubscriptionsResult = {}))
);
var DescribeUsersRequest;
(function (DescribeUsersRequest) {
  /**
   * @internal
   */
  DescribeUsersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeUsersRequest = exports.DescribeUsersRequest || (exports.DescribeUsersRequest = {})));
var User;
(function (User) {
  /**
   * @internal
   */
  User.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserName && { UserName: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.FirstName && { FirstName: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.LastName && { LastName: smithy_client_1.SENSITIVE_STRING }),
  });
})((User = exports.User || (exports.User = {})));
var DescribeUsersResult;
(function (DescribeUsersResult) {
  /**
   * @internal
   */
  DescribeUsersResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Users && { Users: obj.Users.map((item) => User.filterSensitiveLog(item)) }),
  });
})((DescribeUsersResult = exports.DescribeUsersResult || (exports.DescribeUsersResult = {})));
var DescribeUserStackAssociationsRequest;
(function (DescribeUserStackAssociationsRequest) {
  /**
   * @internal
   */
  DescribeUserStackAssociationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserName && { UserName: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (DescribeUserStackAssociationsRequest =
    exports.DescribeUserStackAssociationsRequest || (exports.DescribeUserStackAssociationsRequest = {}))
);
var DescribeUserStackAssociationsResult;
(function (DescribeUserStackAssociationsResult) {
  /**
   * @internal
   */
  DescribeUserStackAssociationsResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserStackAssociations && {
      UserStackAssociations: obj.UserStackAssociations.map((item) => UserStackAssociation.filterSensitiveLog(item)),
    }),
  });
})(
  (DescribeUserStackAssociationsResult =
    exports.DescribeUserStackAssociationsResult || (exports.DescribeUserStackAssociationsResult = {}))
);
var DisableUserRequest;
(function (DisableUserRequest) {
  /**
   * @internal
   */
  DisableUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserName && { UserName: smithy_client_1.SENSITIVE_STRING }),
  });
})((DisableUserRequest = exports.DisableUserRequest || (exports.DisableUserRequest = {})));
var DisableUserResult;
(function (DisableUserResult) {
  /**
   * @internal
   */
  DisableUserResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DisableUserResult = exports.DisableUserResult || (exports.DisableUserResult = {})));
var DisassociateFleetRequest;
(function (DisassociateFleetRequest) {
  /**
   * @internal
   */
  DisassociateFleetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DisassociateFleetRequest = exports.DisassociateFleetRequest || (exports.DisassociateFleetRequest = {})));
var DisassociateFleetResult;
(function (DisassociateFleetResult) {
  /**
   * @internal
   */
  DisassociateFleetResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DisassociateFleetResult = exports.DisassociateFleetResult || (exports.DisassociateFleetResult = {})));
var EnableUserRequest;
(function (EnableUserRequest) {
  /**
   * @internal
   */
  EnableUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserName && { UserName: smithy_client_1.SENSITIVE_STRING }),
  });
})((EnableUserRequest = exports.EnableUserRequest || (exports.EnableUserRequest = {})));
var EnableUserResult;
(function (EnableUserResult) {
  /**
   * @internal
   */
  EnableUserResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EnableUserResult = exports.EnableUserResult || (exports.EnableUserResult = {})));
var ExpireSessionRequest;
(function (ExpireSessionRequest) {
  /**
   * @internal
   */
  ExpireSessionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExpireSessionRequest = exports.ExpireSessionRequest || (exports.ExpireSessionRequest = {})));
var ExpireSessionResult;
(function (ExpireSessionResult) {
  /**
   * @internal
   */
  ExpireSessionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExpireSessionResult = exports.ExpireSessionResult || (exports.ExpireSessionResult = {})));
var FleetAttribute;
(function (FleetAttribute) {
  FleetAttribute["DOMAIN_JOIN_INFO"] = "DOMAIN_JOIN_INFO";
  FleetAttribute["IAM_ROLE_ARN"] = "IAM_ROLE_ARN";
  FleetAttribute["VPC_CONFIGURATION"] = "VPC_CONFIGURATION";
  FleetAttribute["VPC_CONFIGURATION_SECURITY_GROUP_IDS"] = "VPC_CONFIGURATION_SECURITY_GROUP_IDS";
})((FleetAttribute = exports.FleetAttribute || (exports.FleetAttribute = {})));
var ListAssociatedFleetsRequest;
(function (ListAssociatedFleetsRequest) {
  /**
   * @internal
   */
  ListAssociatedFleetsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAssociatedFleetsRequest = exports.ListAssociatedFleetsRequest || (exports.ListAssociatedFleetsRequest = {})));
var ListAssociatedFleetsResult;
(function (ListAssociatedFleetsResult) {
  /**
   * @internal
   */
  ListAssociatedFleetsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAssociatedFleetsResult = exports.ListAssociatedFleetsResult || (exports.ListAssociatedFleetsResult = {})));
var ListAssociatedStacksRequest;
(function (ListAssociatedStacksRequest) {
  /**
   * @internal
   */
  ListAssociatedStacksRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAssociatedStacksRequest = exports.ListAssociatedStacksRequest || (exports.ListAssociatedStacksRequest = {})));
var ListAssociatedStacksResult;
(function (ListAssociatedStacksResult) {
  /**
   * @internal
   */
  ListAssociatedStacksResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAssociatedStacksResult = exports.ListAssociatedStacksResult || (exports.ListAssociatedStacksResult = {})));
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
  });
})((ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {})));
var StartFleetRequest;
(function (StartFleetRequest) {
  /**
   * @internal
   */
  StartFleetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartFleetRequest = exports.StartFleetRequest || (exports.StartFleetRequest = {})));
var StartFleetResult;
(function (StartFleetResult) {
  /**
   * @internal
   */
  StartFleetResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartFleetResult = exports.StartFleetResult || (exports.StartFleetResult = {})));
var StartImageBuilderRequest;
(function (StartImageBuilderRequest) {
  /**
   * @internal
   */
  StartImageBuilderRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartImageBuilderRequest = exports.StartImageBuilderRequest || (exports.StartImageBuilderRequest = {})));
var StartImageBuilderResult;
(function (StartImageBuilderResult) {
  /**
   * @internal
   */
  StartImageBuilderResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartImageBuilderResult = exports.StartImageBuilderResult || (exports.StartImageBuilderResult = {})));
var StopFleetRequest;
(function (StopFleetRequest) {
  /**
   * @internal
   */
  StopFleetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StopFleetRequest = exports.StopFleetRequest || (exports.StopFleetRequest = {})));
var StopFleetResult;
(function (StopFleetResult) {
  /**
   * @internal
   */
  StopFleetResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StopFleetResult = exports.StopFleetResult || (exports.StopFleetResult = {})));
var StopImageBuilderRequest;
(function (StopImageBuilderRequest) {
  /**
   * @internal
   */
  StopImageBuilderRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StopImageBuilderRequest = exports.StopImageBuilderRequest || (exports.StopImageBuilderRequest = {})));
var StopImageBuilderResult;
(function (StopImageBuilderResult) {
  /**
   * @internal
   */
  StopImageBuilderResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StopImageBuilderResult = exports.StopImageBuilderResult || (exports.StopImageBuilderResult = {})));
var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
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
var UpdateDirectoryConfigRequest;
(function (UpdateDirectoryConfigRequest) {
  /**
   * @internal
   */
  UpdateDirectoryConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ServiceAccountCredentials && {
      ServiceAccountCredentials: ServiceAccountCredentials.filterSensitiveLog(obj.ServiceAccountCredentials),
    }),
  });
})(
  (UpdateDirectoryConfigRequest = exports.UpdateDirectoryConfigRequest || (exports.UpdateDirectoryConfigRequest = {}))
);
var UpdateDirectoryConfigResult;
(function (UpdateDirectoryConfigResult) {
  /**
   * @internal
   */
  UpdateDirectoryConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DirectoryConfig && { DirectoryConfig: DirectoryConfig.filterSensitiveLog(obj.DirectoryConfig) }),
  });
})((UpdateDirectoryConfigResult = exports.UpdateDirectoryConfigResult || (exports.UpdateDirectoryConfigResult = {})));
var UpdateFleetRequest;
(function (UpdateFleetRequest) {
  /**
   * @internal
   */
  UpdateFleetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateFleetRequest = exports.UpdateFleetRequest || (exports.UpdateFleetRequest = {})));
var UpdateFleetResult;
(function (UpdateFleetResult) {
  /**
   * @internal
   */
  UpdateFleetResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateFleetResult = exports.UpdateFleetResult || (exports.UpdateFleetResult = {})));
var UpdateImagePermissionsRequest;
(function (UpdateImagePermissionsRequest) {
  /**
   * @internal
   */
  UpdateImagePermissionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateImagePermissionsRequest =
    exports.UpdateImagePermissionsRequest || (exports.UpdateImagePermissionsRequest = {}))
);
var UpdateImagePermissionsResult;
(function (UpdateImagePermissionsResult) {
  /**
   * @internal
   */
  UpdateImagePermissionsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateImagePermissionsResult = exports.UpdateImagePermissionsResult || (exports.UpdateImagePermissionsResult = {}))
);
var StackAttribute;
(function (StackAttribute) {
  StackAttribute["ACCESS_ENDPOINTS"] = "ACCESS_ENDPOINTS";
  StackAttribute["EMBED_HOST_DOMAINS"] = "EMBED_HOST_DOMAINS";
  StackAttribute["FEEDBACK_URL"] = "FEEDBACK_URL";
  StackAttribute["IAM_ROLE_ARN"] = "IAM_ROLE_ARN";
  StackAttribute["REDIRECT_URL"] = "REDIRECT_URL";
  StackAttribute["STORAGE_CONNECTORS"] = "STORAGE_CONNECTORS";
  StackAttribute["STORAGE_CONNECTOR_GOOGLE_DRIVE"] = "STORAGE_CONNECTOR_GOOGLE_DRIVE";
  StackAttribute["STORAGE_CONNECTOR_HOMEFOLDERS"] = "STORAGE_CONNECTOR_HOMEFOLDERS";
  StackAttribute["STORAGE_CONNECTOR_ONE_DRIVE"] = "STORAGE_CONNECTOR_ONE_DRIVE";
  StackAttribute["THEME_NAME"] = "THEME_NAME";
  StackAttribute["USER_SETTINGS"] = "USER_SETTINGS";
})((StackAttribute = exports.StackAttribute || (exports.StackAttribute = {})));
var UpdateStackRequest;
(function (UpdateStackRequest) {
  /**
   * @internal
   */
  UpdateStackRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateStackRequest = exports.UpdateStackRequest || (exports.UpdateStackRequest = {})));
var UpdateStackResult;
(function (UpdateStackResult) {
  /**
   * @internal
   */
  UpdateStackResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateStackResult = exports.UpdateStackResult || (exports.UpdateStackResult = {})));
//# sourceMappingURL=models_0.js.map
