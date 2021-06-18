import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessEndpointType;
(function (AccessEndpointType) {
  AccessEndpointType["STREAMING"] = "STREAMING";
})(AccessEndpointType || (AccessEndpointType = {}));
export var AccessEndpoint;
(function (AccessEndpoint) {
  /**
   * @internal
   */
  AccessEndpoint.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccessEndpoint || (AccessEndpoint = {}));
export var Action;
(function (Action) {
  Action["CLIPBOARD_COPY_FROM_LOCAL_DEVICE"] = "CLIPBOARD_COPY_FROM_LOCAL_DEVICE";
  Action["CLIPBOARD_COPY_TO_LOCAL_DEVICE"] = "CLIPBOARD_COPY_TO_LOCAL_DEVICE";
  Action["DOMAIN_PASSWORD_SIGNIN"] = "DOMAIN_PASSWORD_SIGNIN";
  Action["DOMAIN_SMART_CARD_SIGNIN"] = "DOMAIN_SMART_CARD_SIGNIN";
  Action["FILE_DOWNLOAD"] = "FILE_DOWNLOAD";
  Action["FILE_UPLOAD"] = "FILE_UPLOAD";
  Action["PRINTING_TO_LOCAL_DEVICE"] = "PRINTING_TO_LOCAL_DEVICE";
})(Action || (Action = {}));
export var Application;
(function (Application) {
  /**
   * @internal
   */
  Application.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Application || (Application = {}));
export var ApplicationSettings;
(function (ApplicationSettings) {
  /**
   * @internal
   */
  ApplicationSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ApplicationSettings || (ApplicationSettings = {}));
export var ApplicationSettingsResponse;
(function (ApplicationSettingsResponse) {
  /**
   * @internal
   */
  ApplicationSettingsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ApplicationSettingsResponse || (ApplicationSettingsResponse = {}));
export var AssociateFleetRequest;
(function (AssociateFleetRequest) {
  /**
   * @internal
   */
  AssociateFleetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssociateFleetRequest || (AssociateFleetRequest = {}));
export var AssociateFleetResult;
(function (AssociateFleetResult) {
  /**
   * @internal
   */
  AssociateFleetResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssociateFleetResult || (AssociateFleetResult = {}));
export var ConcurrentModificationException;
(function (ConcurrentModificationException) {
  /**
   * @internal
   */
  ConcurrentModificationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
export var IncompatibleImageException;
(function (IncompatibleImageException) {
  /**
   * @internal
   */
  IncompatibleImageException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(IncompatibleImageException || (IncompatibleImageException = {}));
export var InvalidAccountStatusException;
(function (InvalidAccountStatusException) {
  /**
   * @internal
   */
  InvalidAccountStatusException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidAccountStatusException || (InvalidAccountStatusException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));
export var OperationNotPermittedException;
(function (OperationNotPermittedException) {
  /**
   * @internal
   */
  OperationNotPermittedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(OperationNotPermittedException || (OperationNotPermittedException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var AuthenticationType;
(function (AuthenticationType) {
  AuthenticationType["API"] = "API";
  AuthenticationType["SAML"] = "SAML";
  AuthenticationType["USERPOOL"] = "USERPOOL";
})(AuthenticationType || (AuthenticationType = {}));
export var UserStackAssociation;
(function (UserStackAssociation) {
  /**
   * @internal
   */
  UserStackAssociation.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.UserName && { UserName: SENSITIVE_STRING });
  };
})(UserStackAssociation || (UserStackAssociation = {}));
export var BatchAssociateUserStackRequest;
(function (BatchAssociateUserStackRequest) {
  /**
   * @internal
   */
  BatchAssociateUserStackRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.UserStackAssociations && {
        UserStackAssociations: obj.UserStackAssociations.map(function (item) {
          return UserStackAssociation.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchAssociateUserStackRequest || (BatchAssociateUserStackRequest = {}));
export var UserStackAssociationErrorCode;
(function (UserStackAssociationErrorCode) {
  UserStackAssociationErrorCode["DIRECTORY_NOT_FOUND"] = "DIRECTORY_NOT_FOUND";
  UserStackAssociationErrorCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
  UserStackAssociationErrorCode["STACK_NOT_FOUND"] = "STACK_NOT_FOUND";
  UserStackAssociationErrorCode["USER_NAME_NOT_FOUND"] = "USER_NAME_NOT_FOUND";
})(UserStackAssociationErrorCode || (UserStackAssociationErrorCode = {}));
export var UserStackAssociationError;
(function (UserStackAssociationError) {
  /**
   * @internal
   */
  UserStackAssociationError.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.UserStackAssociation && {
        UserStackAssociation: UserStackAssociation.filterSensitiveLog(obj.UserStackAssociation),
      }
    );
  };
})(UserStackAssociationError || (UserStackAssociationError = {}));
export var BatchAssociateUserStackResult;
(function (BatchAssociateUserStackResult) {
  /**
   * @internal
   */
  BatchAssociateUserStackResult.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.errors && {
        errors: obj.errors.map(function (item) {
          return UserStackAssociationError.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchAssociateUserStackResult || (BatchAssociateUserStackResult = {}));
export var InvalidParameterCombinationException;
(function (InvalidParameterCombinationException) {
  /**
   * @internal
   */
  InvalidParameterCombinationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidParameterCombinationException || (InvalidParameterCombinationException = {}));
export var BatchDisassociateUserStackRequest;
(function (BatchDisassociateUserStackRequest) {
  /**
   * @internal
   */
  BatchDisassociateUserStackRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.UserStackAssociations && {
        UserStackAssociations: obj.UserStackAssociations.map(function (item) {
          return UserStackAssociation.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchDisassociateUserStackRequest || (BatchDisassociateUserStackRequest = {}));
export var BatchDisassociateUserStackResult;
(function (BatchDisassociateUserStackResult) {
  /**
   * @internal
   */
  BatchDisassociateUserStackResult.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.errors && {
        errors: obj.errors.map(function (item) {
          return UserStackAssociationError.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchDisassociateUserStackResult || (BatchDisassociateUserStackResult = {}));
export var ComputeCapacity;
(function (ComputeCapacity) {
  /**
   * @internal
   */
  ComputeCapacity.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ComputeCapacity || (ComputeCapacity = {}));
export var ComputeCapacityStatus;
(function (ComputeCapacityStatus) {
  /**
   * @internal
   */
  ComputeCapacityStatus.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ComputeCapacityStatus || (ComputeCapacityStatus = {}));
export var CopyImageRequest;
(function (CopyImageRequest) {
  /**
   * @internal
   */
  CopyImageRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CopyImageRequest || (CopyImageRequest = {}));
export var CopyImageResponse;
(function (CopyImageResponse) {
  /**
   * @internal
   */
  CopyImageResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CopyImageResponse || (CopyImageResponse = {}));
export var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
  /**
   * @internal
   */
  ResourceAlreadyExistsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceAlreadyExistsException || (ResourceAlreadyExistsException = {}));
export var ResourceNotAvailableException;
(function (ResourceNotAvailableException) {
  /**
   * @internal
   */
  ResourceNotAvailableException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceNotAvailableException || (ResourceNotAvailableException = {}));
export var ServiceAccountCredentials;
(function (ServiceAccountCredentials) {
  /**
   * @internal
   */
  ServiceAccountCredentials.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.AccountName && { AccountName: SENSITIVE_STRING }),
      obj.AccountPassword && { AccountPassword: SENSITIVE_STRING }
    );
  };
})(ServiceAccountCredentials || (ServiceAccountCredentials = {}));
export var CreateDirectoryConfigRequest;
(function (CreateDirectoryConfigRequest) {
  /**
   * @internal
   */
  CreateDirectoryConfigRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ServiceAccountCredentials && {
        ServiceAccountCredentials: ServiceAccountCredentials.filterSensitiveLog(obj.ServiceAccountCredentials),
      }
    );
  };
})(CreateDirectoryConfigRequest || (CreateDirectoryConfigRequest = {}));
export var DirectoryConfig;
(function (DirectoryConfig) {
  /**
   * @internal
   */
  DirectoryConfig.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ServiceAccountCredentials && {
        ServiceAccountCredentials: ServiceAccountCredentials.filterSensitiveLog(obj.ServiceAccountCredentials),
      }
    );
  };
})(DirectoryConfig || (DirectoryConfig = {}));
export var CreateDirectoryConfigResult;
(function (CreateDirectoryConfigResult) {
  /**
   * @internal
   */
  CreateDirectoryConfigResult.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.DirectoryConfig && { DirectoryConfig: DirectoryConfig.filterSensitiveLog(obj.DirectoryConfig) }
    );
  };
})(CreateDirectoryConfigResult || (CreateDirectoryConfigResult = {}));
export var InvalidRoleException;
(function (InvalidRoleException) {
  /**
   * @internal
   */
  InvalidRoleException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidRoleException || (InvalidRoleException = {}));
export var DomainJoinInfo;
(function (DomainJoinInfo) {
  /**
   * @internal
   */
  DomainJoinInfo.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DomainJoinInfo || (DomainJoinInfo = {}));
export var FleetType;
(function (FleetType) {
  FleetType["ALWAYS_ON"] = "ALWAYS_ON";
  FleetType["ON_DEMAND"] = "ON_DEMAND";
})(FleetType || (FleetType = {}));
export var StreamView;
(function (StreamView) {
  StreamView["APP"] = "APP";
  StreamView["DESKTOP"] = "DESKTOP";
})(StreamView || (StreamView = {}));
export var VpcConfig;
(function (VpcConfig) {
  /**
   * @internal
   */
  VpcConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VpcConfig || (VpcConfig = {}));
export var CreateFleetRequest;
(function (CreateFleetRequest) {
  /**
   * @internal
   */
  CreateFleetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateFleetRequest || (CreateFleetRequest = {}));
export var FleetErrorCode;
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
})(FleetErrorCode || (FleetErrorCode = {}));
export var FleetError;
(function (FleetError) {
  /**
   * @internal
   */
  FleetError.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FleetError || (FleetError = {}));
export var FleetState;
(function (FleetState) {
  FleetState["RUNNING"] = "RUNNING";
  FleetState["STARTING"] = "STARTING";
  FleetState["STOPPED"] = "STOPPED";
  FleetState["STOPPING"] = "STOPPING";
})(FleetState || (FleetState = {}));
export var Fleet;
(function (Fleet) {
  /**
   * @internal
   */
  Fleet.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Fleet || (Fleet = {}));
export var CreateFleetResult;
(function (CreateFleetResult) {
  /**
   * @internal
   */
  CreateFleetResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateFleetResult || (CreateFleetResult = {}));
export var RequestLimitExceededException;
(function (RequestLimitExceededException) {
  /**
   * @internal
   */
  RequestLimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RequestLimitExceededException || (RequestLimitExceededException = {}));
export var CreateImageBuilderRequest;
(function (CreateImageBuilderRequest) {
  /**
   * @internal
   */
  CreateImageBuilderRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateImageBuilderRequest || (CreateImageBuilderRequest = {}));
export var ResourceError;
(function (ResourceError) {
  /**
   * @internal
   */
  ResourceError.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceError || (ResourceError = {}));
export var NetworkAccessConfiguration;
(function (NetworkAccessConfiguration) {
  /**
   * @internal
   */
  NetworkAccessConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(NetworkAccessConfiguration || (NetworkAccessConfiguration = {}));
export var ImageBuilderState;
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
})(ImageBuilderState || (ImageBuilderState = {}));
export var ImageBuilderStateChangeReasonCode;
(function (ImageBuilderStateChangeReasonCode) {
  ImageBuilderStateChangeReasonCode["IMAGE_UNAVAILABLE"] = "IMAGE_UNAVAILABLE";
  ImageBuilderStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
})(ImageBuilderStateChangeReasonCode || (ImageBuilderStateChangeReasonCode = {}));
export var ImageBuilderStateChangeReason;
(function (ImageBuilderStateChangeReason) {
  /**
   * @internal
   */
  ImageBuilderStateChangeReason.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ImageBuilderStateChangeReason || (ImageBuilderStateChangeReason = {}));
export var ImageBuilder;
(function (ImageBuilder) {
  /**
   * @internal
   */
  ImageBuilder.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ImageBuilder || (ImageBuilder = {}));
export var CreateImageBuilderResult;
(function (CreateImageBuilderResult) {
  /**
   * @internal
   */
  CreateImageBuilderResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateImageBuilderResult || (CreateImageBuilderResult = {}));
export var CreateImageBuilderStreamingURLRequest;
(function (CreateImageBuilderStreamingURLRequest) {
  /**
   * @internal
   */
  CreateImageBuilderStreamingURLRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateImageBuilderStreamingURLRequest || (CreateImageBuilderStreamingURLRequest = {}));
export var CreateImageBuilderStreamingURLResult;
(function (CreateImageBuilderStreamingURLResult) {
  /**
   * @internal
   */
  CreateImageBuilderStreamingURLResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateImageBuilderStreamingURLResult || (CreateImageBuilderStreamingURLResult = {}));
export var StorageConnectorType;
(function (StorageConnectorType) {
  StorageConnectorType["GOOGLE_DRIVE"] = "GOOGLE_DRIVE";
  StorageConnectorType["HOMEFOLDERS"] = "HOMEFOLDERS";
  StorageConnectorType["ONE_DRIVE"] = "ONE_DRIVE";
})(StorageConnectorType || (StorageConnectorType = {}));
export var StorageConnector;
(function (StorageConnector) {
  /**
   * @internal
   */
  StorageConnector.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StorageConnector || (StorageConnector = {}));
export var Permission;
(function (Permission) {
  Permission["DISABLED"] = "DISABLED";
  Permission["ENABLED"] = "ENABLED";
})(Permission || (Permission = {}));
export var UserSetting;
(function (UserSetting) {
  /**
   * @internal
   */
  UserSetting.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UserSetting || (UserSetting = {}));
export var CreateStackRequest;
(function (CreateStackRequest) {
  /**
   * @internal
   */
  CreateStackRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateStackRequest || (CreateStackRequest = {}));
export var StackErrorCode;
(function (StackErrorCode) {
  StackErrorCode["INTERNAL_SERVICE_ERROR"] = "INTERNAL_SERVICE_ERROR";
  StackErrorCode["STORAGE_CONNECTOR_ERROR"] = "STORAGE_CONNECTOR_ERROR";
})(StackErrorCode || (StackErrorCode = {}));
export var StackError;
(function (StackError) {
  /**
   * @internal
   */
  StackError.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackError || (StackError = {}));
export var Stack;
(function (Stack) {
  /**
   * @internal
   */
  Stack.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Stack || (Stack = {}));
export var CreateStackResult;
(function (CreateStackResult) {
  /**
   * @internal
   */
  CreateStackResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateStackResult || (CreateStackResult = {}));
export var CreateStreamingURLRequest;
(function (CreateStreamingURLRequest) {
  /**
   * @internal
   */
  CreateStreamingURLRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateStreamingURLRequest || (CreateStreamingURLRequest = {}));
export var CreateStreamingURLResult;
(function (CreateStreamingURLResult) {
  /**
   * @internal
   */
  CreateStreamingURLResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateStreamingURLResult || (CreateStreamingURLResult = {}));
export var CreateUpdatedImageRequest;
(function (CreateUpdatedImageRequest) {
  /**
   * @internal
   */
  CreateUpdatedImageRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateUpdatedImageRequest || (CreateUpdatedImageRequest = {}));
export var ImagePermissions;
(function (ImagePermissions) {
  /**
   * @internal
   */
  ImagePermissions.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ImagePermissions || (ImagePermissions = {}));
export var ImageState;
(function (ImageState) {
  ImageState["AVAILABLE"] = "AVAILABLE";
  ImageState["COPYING"] = "COPYING";
  ImageState["CREATING"] = "CREATING";
  ImageState["DELETING"] = "DELETING";
  ImageState["FAILED"] = "FAILED";
  ImageState["IMPORTING"] = "IMPORTING";
  ImageState["PENDING"] = "PENDING";
})(ImageState || (ImageState = {}));
export var ImageStateChangeReasonCode;
(function (ImageStateChangeReasonCode) {
  ImageStateChangeReasonCode["IMAGE_BUILDER_NOT_AVAILABLE"] = "IMAGE_BUILDER_NOT_AVAILABLE";
  ImageStateChangeReasonCode["IMAGE_COPY_FAILURE"] = "IMAGE_COPY_FAILURE";
  ImageStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
})(ImageStateChangeReasonCode || (ImageStateChangeReasonCode = {}));
export var ImageStateChangeReason;
(function (ImageStateChangeReason) {
  /**
   * @internal
   */
  ImageStateChangeReason.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ImageStateChangeReason || (ImageStateChangeReason = {}));
export var VisibilityType;
(function (VisibilityType) {
  VisibilityType["PRIVATE"] = "PRIVATE";
  VisibilityType["PUBLIC"] = "PUBLIC";
  VisibilityType["SHARED"] = "SHARED";
})(VisibilityType || (VisibilityType = {}));
export var Image;
(function (Image) {
  /**
   * @internal
   */
  Image.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Image || (Image = {}));
export var CreateUpdatedImageResult;
(function (CreateUpdatedImageResult) {
  /**
   * @internal
   */
  CreateUpdatedImageResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateUpdatedImageResult || (CreateUpdatedImageResult = {}));
export var CreateUsageReportSubscriptionRequest;
(function (CreateUsageReportSubscriptionRequest) {
  /**
   * @internal
   */
  CreateUsageReportSubscriptionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateUsageReportSubscriptionRequest || (CreateUsageReportSubscriptionRequest = {}));
export var UsageReportSchedule;
(function (UsageReportSchedule) {
  UsageReportSchedule["DAILY"] = "DAILY";
})(UsageReportSchedule || (UsageReportSchedule = {}));
export var CreateUsageReportSubscriptionResult;
(function (CreateUsageReportSubscriptionResult) {
  /**
   * @internal
   */
  CreateUsageReportSubscriptionResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateUsageReportSubscriptionResult || (CreateUsageReportSubscriptionResult = {}));
export var MessageAction;
(function (MessageAction) {
  MessageAction["RESEND"] = "RESEND";
  MessageAction["SUPPRESS"] = "SUPPRESS";
})(MessageAction || (MessageAction = {}));
export var CreateUserRequest;
(function (CreateUserRequest) {
  /**
   * @internal
   */
  CreateUserRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(__assign({}, obj), obj.UserName && { UserName: SENSITIVE_STRING }),
        obj.FirstName && { FirstName: SENSITIVE_STRING }
      ),
      obj.LastName && { LastName: SENSITIVE_STRING }
    );
  };
})(CreateUserRequest || (CreateUserRequest = {}));
export var CreateUserResult;
(function (CreateUserResult) {
  /**
   * @internal
   */
  CreateUserResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateUserResult || (CreateUserResult = {}));
export var DeleteDirectoryConfigRequest;
(function (DeleteDirectoryConfigRequest) {
  /**
   * @internal
   */
  DeleteDirectoryConfigRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteDirectoryConfigRequest || (DeleteDirectoryConfigRequest = {}));
export var DeleteDirectoryConfigResult;
(function (DeleteDirectoryConfigResult) {
  /**
   * @internal
   */
  DeleteDirectoryConfigResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteDirectoryConfigResult || (DeleteDirectoryConfigResult = {}));
export var ResourceInUseException;
(function (ResourceInUseException) {
  /**
   * @internal
   */
  ResourceInUseException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceInUseException || (ResourceInUseException = {}));
export var DeleteFleetRequest;
(function (DeleteFleetRequest) {
  /**
   * @internal
   */
  DeleteFleetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteFleetRequest || (DeleteFleetRequest = {}));
export var DeleteFleetResult;
(function (DeleteFleetResult) {
  /**
   * @internal
   */
  DeleteFleetResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteFleetResult || (DeleteFleetResult = {}));
export var DeleteImageRequest;
(function (DeleteImageRequest) {
  /**
   * @internal
   */
  DeleteImageRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteImageRequest || (DeleteImageRequest = {}));
export var DeleteImageResult;
(function (DeleteImageResult) {
  /**
   * @internal
   */
  DeleteImageResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteImageResult || (DeleteImageResult = {}));
export var DeleteImageBuilderRequest;
(function (DeleteImageBuilderRequest) {
  /**
   * @internal
   */
  DeleteImageBuilderRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteImageBuilderRequest || (DeleteImageBuilderRequest = {}));
export var DeleteImageBuilderResult;
(function (DeleteImageBuilderResult) {
  /**
   * @internal
   */
  DeleteImageBuilderResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteImageBuilderResult || (DeleteImageBuilderResult = {}));
export var DeleteImagePermissionsRequest;
(function (DeleteImagePermissionsRequest) {
  /**
   * @internal
   */
  DeleteImagePermissionsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteImagePermissionsRequest || (DeleteImagePermissionsRequest = {}));
export var DeleteImagePermissionsResult;
(function (DeleteImagePermissionsResult) {
  /**
   * @internal
   */
  DeleteImagePermissionsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteImagePermissionsResult || (DeleteImagePermissionsResult = {}));
export var DeleteStackRequest;
(function (DeleteStackRequest) {
  /**
   * @internal
   */
  DeleteStackRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteStackRequest || (DeleteStackRequest = {}));
export var DeleteStackResult;
(function (DeleteStackResult) {
  /**
   * @internal
   */
  DeleteStackResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteStackResult || (DeleteStackResult = {}));
export var DeleteUsageReportSubscriptionRequest;
(function (DeleteUsageReportSubscriptionRequest) {
  /**
   * @internal
   */
  DeleteUsageReportSubscriptionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteUsageReportSubscriptionRequest || (DeleteUsageReportSubscriptionRequest = {}));
export var DeleteUsageReportSubscriptionResult;
(function (DeleteUsageReportSubscriptionResult) {
  /**
   * @internal
   */
  DeleteUsageReportSubscriptionResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteUsageReportSubscriptionResult || (DeleteUsageReportSubscriptionResult = {}));
export var DeleteUserRequest;
(function (DeleteUserRequest) {
  /**
   * @internal
   */
  DeleteUserRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.UserName && { UserName: SENSITIVE_STRING });
  };
})(DeleteUserRequest || (DeleteUserRequest = {}));
export var DeleteUserResult;
(function (DeleteUserResult) {
  /**
   * @internal
   */
  DeleteUserResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteUserResult || (DeleteUserResult = {}));
export var DescribeDirectoryConfigsRequest;
(function (DescribeDirectoryConfigsRequest) {
  /**
   * @internal
   */
  DescribeDirectoryConfigsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeDirectoryConfigsRequest || (DescribeDirectoryConfigsRequest = {}));
export var DescribeDirectoryConfigsResult;
(function (DescribeDirectoryConfigsResult) {
  /**
   * @internal
   */
  DescribeDirectoryConfigsResult.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.DirectoryConfigs && {
        DirectoryConfigs: obj.DirectoryConfigs.map(function (item) {
          return DirectoryConfig.filterSensitiveLog(item);
        }),
      }
    );
  };
})(DescribeDirectoryConfigsResult || (DescribeDirectoryConfigsResult = {}));
export var DescribeFleetsRequest;
(function (DescribeFleetsRequest) {
  /**
   * @internal
   */
  DescribeFleetsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeFleetsRequest || (DescribeFleetsRequest = {}));
export var DescribeFleetsResult;
(function (DescribeFleetsResult) {
  /**
   * @internal
   */
  DescribeFleetsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeFleetsResult || (DescribeFleetsResult = {}));
export var DescribeImageBuildersRequest;
(function (DescribeImageBuildersRequest) {
  /**
   * @internal
   */
  DescribeImageBuildersRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeImageBuildersRequest || (DescribeImageBuildersRequest = {}));
export var DescribeImageBuildersResult;
(function (DescribeImageBuildersResult) {
  /**
   * @internal
   */
  DescribeImageBuildersResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeImageBuildersResult || (DescribeImageBuildersResult = {}));
export var DescribeImagePermissionsRequest;
(function (DescribeImagePermissionsRequest) {
  /**
   * @internal
   */
  DescribeImagePermissionsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeImagePermissionsRequest || (DescribeImagePermissionsRequest = {}));
export var SharedImagePermissions;
(function (SharedImagePermissions) {
  /**
   * @internal
   */
  SharedImagePermissions.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SharedImagePermissions || (SharedImagePermissions = {}));
export var DescribeImagePermissionsResult;
(function (DescribeImagePermissionsResult) {
  /**
   * @internal
   */
  DescribeImagePermissionsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeImagePermissionsResult || (DescribeImagePermissionsResult = {}));
export var DescribeImagesRequest;
(function (DescribeImagesRequest) {
  /**
   * @internal
   */
  DescribeImagesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeImagesRequest || (DescribeImagesRequest = {}));
export var DescribeImagesResult;
(function (DescribeImagesResult) {
  /**
   * @internal
   */
  DescribeImagesResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeImagesResult || (DescribeImagesResult = {}));
export var DescribeSessionsRequest;
(function (DescribeSessionsRequest) {
  /**
   * @internal
   */
  DescribeSessionsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeSessionsRequest || (DescribeSessionsRequest = {}));
export var SessionConnectionState;
(function (SessionConnectionState) {
  SessionConnectionState["CONNECTED"] = "CONNECTED";
  SessionConnectionState["NOT_CONNECTED"] = "NOT_CONNECTED";
})(SessionConnectionState || (SessionConnectionState = {}));
export var SessionState;
(function (SessionState) {
  SessionState["ACTIVE"] = "ACTIVE";
  SessionState["EXPIRED"] = "EXPIRED";
  SessionState["PENDING"] = "PENDING";
})(SessionState || (SessionState = {}));
export var Session;
(function (Session) {
  /**
   * @internal
   */
  Session.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Session || (Session = {}));
export var DescribeSessionsResult;
(function (DescribeSessionsResult) {
  /**
   * @internal
   */
  DescribeSessionsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeSessionsResult || (DescribeSessionsResult = {}));
export var DescribeStacksRequest;
(function (DescribeStacksRequest) {
  /**
   * @internal
   */
  DescribeStacksRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStacksRequest || (DescribeStacksRequest = {}));
export var DescribeStacksResult;
(function (DescribeStacksResult) {
  /**
   * @internal
   */
  DescribeStacksResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStacksResult || (DescribeStacksResult = {}));
export var DescribeUsageReportSubscriptionsRequest;
(function (DescribeUsageReportSubscriptionsRequest) {
  /**
   * @internal
   */
  DescribeUsageReportSubscriptionsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeUsageReportSubscriptionsRequest || (DescribeUsageReportSubscriptionsRequest = {}));
export var UsageReportExecutionErrorCode;
(function (UsageReportExecutionErrorCode) {
  UsageReportExecutionErrorCode["ACCESS_DENIED"] = "ACCESS_DENIED";
  UsageReportExecutionErrorCode["INTERNAL_SERVICE_ERROR"] = "INTERNAL_SERVICE_ERROR";
  UsageReportExecutionErrorCode["RESOURCE_NOT_FOUND"] = "RESOURCE_NOT_FOUND";
})(UsageReportExecutionErrorCode || (UsageReportExecutionErrorCode = {}));
export var LastReportGenerationExecutionError;
(function (LastReportGenerationExecutionError) {
  /**
   * @internal
   */
  LastReportGenerationExecutionError.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LastReportGenerationExecutionError || (LastReportGenerationExecutionError = {}));
export var UsageReportSubscription;
(function (UsageReportSubscription) {
  /**
   * @internal
   */
  UsageReportSubscription.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UsageReportSubscription || (UsageReportSubscription = {}));
export var DescribeUsageReportSubscriptionsResult;
(function (DescribeUsageReportSubscriptionsResult) {
  /**
   * @internal
   */
  DescribeUsageReportSubscriptionsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeUsageReportSubscriptionsResult || (DescribeUsageReportSubscriptionsResult = {}));
export var DescribeUsersRequest;
(function (DescribeUsersRequest) {
  /**
   * @internal
   */
  DescribeUsersRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeUsersRequest || (DescribeUsersRequest = {}));
export var User;
(function (User) {
  /**
   * @internal
   */
  User.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(__assign({}, obj), obj.UserName && { UserName: SENSITIVE_STRING }),
        obj.FirstName && { FirstName: SENSITIVE_STRING }
      ),
      obj.LastName && { LastName: SENSITIVE_STRING }
    );
  };
})(User || (User = {}));
export var DescribeUsersResult;
(function (DescribeUsersResult) {
  /**
   * @internal
   */
  DescribeUsersResult.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Users && {
        Users: obj.Users.map(function (item) {
          return User.filterSensitiveLog(item);
        }),
      }
    );
  };
})(DescribeUsersResult || (DescribeUsersResult = {}));
export var DescribeUserStackAssociationsRequest;
(function (DescribeUserStackAssociationsRequest) {
  /**
   * @internal
   */
  DescribeUserStackAssociationsRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.UserName && { UserName: SENSITIVE_STRING });
  };
})(DescribeUserStackAssociationsRequest || (DescribeUserStackAssociationsRequest = {}));
export var DescribeUserStackAssociationsResult;
(function (DescribeUserStackAssociationsResult) {
  /**
   * @internal
   */
  DescribeUserStackAssociationsResult.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.UserStackAssociations && {
        UserStackAssociations: obj.UserStackAssociations.map(function (item) {
          return UserStackAssociation.filterSensitiveLog(item);
        }),
      }
    );
  };
})(DescribeUserStackAssociationsResult || (DescribeUserStackAssociationsResult = {}));
export var DisableUserRequest;
(function (DisableUserRequest) {
  /**
   * @internal
   */
  DisableUserRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.UserName && { UserName: SENSITIVE_STRING });
  };
})(DisableUserRequest || (DisableUserRequest = {}));
export var DisableUserResult;
(function (DisableUserResult) {
  /**
   * @internal
   */
  DisableUserResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DisableUserResult || (DisableUserResult = {}));
export var DisassociateFleetRequest;
(function (DisassociateFleetRequest) {
  /**
   * @internal
   */
  DisassociateFleetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DisassociateFleetRequest || (DisassociateFleetRequest = {}));
export var DisassociateFleetResult;
(function (DisassociateFleetResult) {
  /**
   * @internal
   */
  DisassociateFleetResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DisassociateFleetResult || (DisassociateFleetResult = {}));
export var EnableUserRequest;
(function (EnableUserRequest) {
  /**
   * @internal
   */
  EnableUserRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.UserName && { UserName: SENSITIVE_STRING });
  };
})(EnableUserRequest || (EnableUserRequest = {}));
export var EnableUserResult;
(function (EnableUserResult) {
  /**
   * @internal
   */
  EnableUserResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(EnableUserResult || (EnableUserResult = {}));
export var ExpireSessionRequest;
(function (ExpireSessionRequest) {
  /**
   * @internal
   */
  ExpireSessionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExpireSessionRequest || (ExpireSessionRequest = {}));
export var ExpireSessionResult;
(function (ExpireSessionResult) {
  /**
   * @internal
   */
  ExpireSessionResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExpireSessionResult || (ExpireSessionResult = {}));
export var FleetAttribute;
(function (FleetAttribute) {
  FleetAttribute["DOMAIN_JOIN_INFO"] = "DOMAIN_JOIN_INFO";
  FleetAttribute["IAM_ROLE_ARN"] = "IAM_ROLE_ARN";
  FleetAttribute["VPC_CONFIGURATION"] = "VPC_CONFIGURATION";
  FleetAttribute["VPC_CONFIGURATION_SECURITY_GROUP_IDS"] = "VPC_CONFIGURATION_SECURITY_GROUP_IDS";
})(FleetAttribute || (FleetAttribute = {}));
export var ListAssociatedFleetsRequest;
(function (ListAssociatedFleetsRequest) {
  /**
   * @internal
   */
  ListAssociatedFleetsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAssociatedFleetsRequest || (ListAssociatedFleetsRequest = {}));
export var ListAssociatedFleetsResult;
(function (ListAssociatedFleetsResult) {
  /**
   * @internal
   */
  ListAssociatedFleetsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAssociatedFleetsResult || (ListAssociatedFleetsResult = {}));
export var ListAssociatedStacksRequest;
(function (ListAssociatedStacksRequest) {
  /**
   * @internal
   */
  ListAssociatedStacksRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAssociatedStacksRequest || (ListAssociatedStacksRequest = {}));
export var ListAssociatedStacksResult;
(function (ListAssociatedStacksResult) {
  /**
   * @internal
   */
  ListAssociatedStacksResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAssociatedStacksResult || (ListAssociatedStacksResult = {}));
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
    return __assign({}, obj);
  };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var StartFleetRequest;
(function (StartFleetRequest) {
  /**
   * @internal
   */
  StartFleetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartFleetRequest || (StartFleetRequest = {}));
export var StartFleetResult;
(function (StartFleetResult) {
  /**
   * @internal
   */
  StartFleetResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartFleetResult || (StartFleetResult = {}));
export var StartImageBuilderRequest;
(function (StartImageBuilderRequest) {
  /**
   * @internal
   */
  StartImageBuilderRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartImageBuilderRequest || (StartImageBuilderRequest = {}));
export var StartImageBuilderResult;
(function (StartImageBuilderResult) {
  /**
   * @internal
   */
  StartImageBuilderResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartImageBuilderResult || (StartImageBuilderResult = {}));
export var StopFleetRequest;
(function (StopFleetRequest) {
  /**
   * @internal
   */
  StopFleetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StopFleetRequest || (StopFleetRequest = {}));
export var StopFleetResult;
(function (StopFleetResult) {
  /**
   * @internal
   */
  StopFleetResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StopFleetResult || (StopFleetResult = {}));
export var StopImageBuilderRequest;
(function (StopImageBuilderRequest) {
  /**
   * @internal
   */
  StopImageBuilderRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StopImageBuilderRequest || (StopImageBuilderRequest = {}));
export var StopImageBuilderResult;
(function (StopImageBuilderResult) {
  /**
   * @internal
   */
  StopImageBuilderResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StopImageBuilderResult || (StopImageBuilderResult = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
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
    return __assign({}, obj);
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
export var UpdateDirectoryConfigRequest;
(function (UpdateDirectoryConfigRequest) {
  /**
   * @internal
   */
  UpdateDirectoryConfigRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ServiceAccountCredentials && {
        ServiceAccountCredentials: ServiceAccountCredentials.filterSensitiveLog(obj.ServiceAccountCredentials),
      }
    );
  };
})(UpdateDirectoryConfigRequest || (UpdateDirectoryConfigRequest = {}));
export var UpdateDirectoryConfigResult;
(function (UpdateDirectoryConfigResult) {
  /**
   * @internal
   */
  UpdateDirectoryConfigResult.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.DirectoryConfig && { DirectoryConfig: DirectoryConfig.filterSensitiveLog(obj.DirectoryConfig) }
    );
  };
})(UpdateDirectoryConfigResult || (UpdateDirectoryConfigResult = {}));
export var UpdateFleetRequest;
(function (UpdateFleetRequest) {
  /**
   * @internal
   */
  UpdateFleetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateFleetRequest || (UpdateFleetRequest = {}));
export var UpdateFleetResult;
(function (UpdateFleetResult) {
  /**
   * @internal
   */
  UpdateFleetResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateFleetResult || (UpdateFleetResult = {}));
export var UpdateImagePermissionsRequest;
(function (UpdateImagePermissionsRequest) {
  /**
   * @internal
   */
  UpdateImagePermissionsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateImagePermissionsRequest || (UpdateImagePermissionsRequest = {}));
export var UpdateImagePermissionsResult;
(function (UpdateImagePermissionsResult) {
  /**
   * @internal
   */
  UpdateImagePermissionsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateImagePermissionsResult || (UpdateImagePermissionsResult = {}));
export var StackAttribute;
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
})(StackAttribute || (StackAttribute = {}));
export var UpdateStackRequest;
(function (UpdateStackRequest) {
  /**
   * @internal
   */
  UpdateStackRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateStackRequest || (UpdateStackRequest = {}));
export var UpdateStackResult;
(function (UpdateStackResult) {
  /**
   * @internal
   */
  UpdateStackResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateStackResult || (UpdateStackResult = {}));
//# sourceMappingURL=models_0.js.map
