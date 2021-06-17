import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AssociateApprovedOriginRequest;
(function (AssociateApprovedOriginRequest) {
    /**
     * @internal
     */
    AssociateApprovedOriginRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateApprovedOriginRequest || (AssociateApprovedOriginRequest = {}));
export var InternalServiceException;
(function (InternalServiceException) {
    /**
     * @internal
     */
    InternalServiceException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServiceException || (InternalServiceException = {}));
export var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterException || (InvalidParameterException = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRequestException || (InvalidRequestException = {}));
export var ResourceConflictException;
(function (ResourceConflictException) {
    /**
     * @internal
     */
    ResourceConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceConflictException || (ResourceConflictException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var InstanceStorageResourceType;
(function (InstanceStorageResourceType) {
    InstanceStorageResourceType["AGENT_EVENTS"] = "AGENT_EVENTS";
    InstanceStorageResourceType["CALL_RECORDINGS"] = "CALL_RECORDINGS";
    InstanceStorageResourceType["CHAT_TRANSCRIPTS"] = "CHAT_TRANSCRIPTS";
    InstanceStorageResourceType["CONTACT_TRACE_RECORDS"] = "CONTACT_TRACE_RECORDS";
    InstanceStorageResourceType["MEDIA_STREAMS"] = "MEDIA_STREAMS";
    InstanceStorageResourceType["SCHEDULED_REPORTS"] = "SCHEDULED_REPORTS";
})(InstanceStorageResourceType || (InstanceStorageResourceType = {}));
export var KinesisFirehoseConfig;
(function (KinesisFirehoseConfig) {
    /**
     * @internal
     */
    KinesisFirehoseConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KinesisFirehoseConfig || (KinesisFirehoseConfig = {}));
export var KinesisStreamConfig;
(function (KinesisStreamConfig) {
    /**
     * @internal
     */
    KinesisStreamConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KinesisStreamConfig || (KinesisStreamConfig = {}));
export var EncryptionType;
(function (EncryptionType) {
    EncryptionType["KMS"] = "KMS";
})(EncryptionType || (EncryptionType = {}));
export var EncryptionConfig;
(function (EncryptionConfig) {
    /**
     * @internal
     */
    EncryptionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncryptionConfig || (EncryptionConfig = {}));
export var KinesisVideoStreamConfig;
(function (KinesisVideoStreamConfig) {
    /**
     * @internal
     */
    KinesisVideoStreamConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KinesisVideoStreamConfig || (KinesisVideoStreamConfig = {}));
export var S3Config;
(function (S3Config) {
    /**
     * @internal
     */
    S3Config.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Config || (S3Config = {}));
export var StorageType;
(function (StorageType) {
    StorageType["KINESIS_FIREHOSE"] = "KINESIS_FIREHOSE";
    StorageType["KINESIS_STREAM"] = "KINESIS_STREAM";
    StorageType["KINESIS_VIDEO_STREAM"] = "KINESIS_VIDEO_STREAM";
    StorageType["S3"] = "S3";
})(StorageType || (StorageType = {}));
export var InstanceStorageConfig;
(function (InstanceStorageConfig) {
    /**
     * @internal
     */
    InstanceStorageConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceStorageConfig || (InstanceStorageConfig = {}));
export var AssociateInstanceStorageConfigRequest;
(function (AssociateInstanceStorageConfigRequest) {
    /**
     * @internal
     */
    AssociateInstanceStorageConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateInstanceStorageConfigRequest || (AssociateInstanceStorageConfigRequest = {}));
export var AssociateInstanceStorageConfigResponse;
(function (AssociateInstanceStorageConfigResponse) {
    /**
     * @internal
     */
    AssociateInstanceStorageConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateInstanceStorageConfigResponse || (AssociateInstanceStorageConfigResponse = {}));
export var AssociateLambdaFunctionRequest;
(function (AssociateLambdaFunctionRequest) {
    /**
     * @internal
     */
    AssociateLambdaFunctionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateLambdaFunctionRequest || (AssociateLambdaFunctionRequest = {}));
export var LexBot;
(function (LexBot) {
    /**
     * @internal
     */
    LexBot.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LexBot || (LexBot = {}));
export var AssociateLexBotRequest;
(function (AssociateLexBotRequest) {
    /**
     * @internal
     */
    AssociateLexBotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateLexBotRequest || (AssociateLexBotRequest = {}));
export var AssociateQueueQuickConnectsRequest;
(function (AssociateQueueQuickConnectsRequest) {
    /**
     * @internal
     */
    AssociateQueueQuickConnectsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateQueueQuickConnectsRequest || (AssociateQueueQuickConnectsRequest = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var Channel;
(function (Channel) {
    Channel["CHAT"] = "CHAT";
    Channel["TASK"] = "TASK";
    Channel["VOICE"] = "VOICE";
})(Channel || (Channel = {}));
export var RoutingProfileQueueReference;
(function (RoutingProfileQueueReference) {
    /**
     * @internal
     */
    RoutingProfileQueueReference.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RoutingProfileQueueReference || (RoutingProfileQueueReference = {}));
export var RoutingProfileQueueConfig;
(function (RoutingProfileQueueConfig) {
    /**
     * @internal
     */
    RoutingProfileQueueConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RoutingProfileQueueConfig || (RoutingProfileQueueConfig = {}));
export var AssociateRoutingProfileQueuesRequest;
(function (AssociateRoutingProfileQueuesRequest) {
    /**
     * @internal
     */
    AssociateRoutingProfileQueuesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateRoutingProfileQueuesRequest || (AssociateRoutingProfileQueuesRequest = {}));
export var AssociateSecurityKeyRequest;
(function (AssociateSecurityKeyRequest) {
    /**
     * @internal
     */
    AssociateSecurityKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateSecurityKeyRequest || (AssociateSecurityKeyRequest = {}));
export var AssociateSecurityKeyResponse;
(function (AssociateSecurityKeyResponse) {
    /**
     * @internal
     */
    AssociateSecurityKeyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateSecurityKeyResponse || (AssociateSecurityKeyResponse = {}));
export var ContactFlowType;
(function (ContactFlowType) {
    ContactFlowType["AGENT_HOLD"] = "AGENT_HOLD";
    ContactFlowType["AGENT_TRANSFER"] = "AGENT_TRANSFER";
    ContactFlowType["AGENT_WHISPER"] = "AGENT_WHISPER";
    ContactFlowType["CONTACT_FLOW"] = "CONTACT_FLOW";
    ContactFlowType["CUSTOMER_HOLD"] = "CUSTOMER_HOLD";
    ContactFlowType["CUSTOMER_QUEUE"] = "CUSTOMER_QUEUE";
    ContactFlowType["CUSTOMER_WHISPER"] = "CUSTOMER_WHISPER";
    ContactFlowType["OUTBOUND_WHISPER"] = "OUTBOUND_WHISPER";
    ContactFlowType["QUEUE_TRANSFER"] = "QUEUE_TRANSFER";
})(ContactFlowType || (ContactFlowType = {}));
export var CreateContactFlowRequest;
(function (CreateContactFlowRequest) {
    /**
     * @internal
     */
    CreateContactFlowRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContactFlowRequest || (CreateContactFlowRequest = {}));
export var CreateContactFlowResponse;
(function (CreateContactFlowResponse) {
    /**
     * @internal
     */
    CreateContactFlowResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContactFlowResponse || (CreateContactFlowResponse = {}));
export var DuplicateResourceException;
(function (DuplicateResourceException) {
    /**
     * @internal
     */
    DuplicateResourceException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicateResourceException || (DuplicateResourceException = {}));
export var ProblemDetail;
(function (ProblemDetail) {
    /**
     * @internal
     */
    ProblemDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProblemDetail || (ProblemDetail = {}));
export var InvalidContactFlowException;
(function (InvalidContactFlowException) {
    /**
     * @internal
     */
    InvalidContactFlowException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidContactFlowException || (InvalidContactFlowException = {}));
export var DirectoryType;
(function (DirectoryType) {
    DirectoryType["CONNECT_MANAGED"] = "CONNECT_MANAGED";
    DirectoryType["EXISTING_DIRECTORY"] = "EXISTING_DIRECTORY";
    DirectoryType["SAML"] = "SAML";
})(DirectoryType || (DirectoryType = {}));
export var CreateInstanceRequest;
(function (CreateInstanceRequest) {
    /**
     * @internal
     */
    CreateInstanceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.InstanceAlias && { InstanceAlias: SENSITIVE_STRING }))); };
})(CreateInstanceRequest || (CreateInstanceRequest = {}));
export var CreateInstanceResponse;
(function (CreateInstanceResponse) {
    /**
     * @internal
     */
    CreateInstanceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInstanceResponse || (CreateInstanceResponse = {}));
export var IntegrationType;
(function (IntegrationType) {
    IntegrationType["EVENT"] = "EVENT";
})(IntegrationType || (IntegrationType = {}));
export var SourceType;
(function (SourceType) {
    SourceType["SALESFORCE"] = "SALESFORCE";
    SourceType["ZENDESK"] = "ZENDESK";
})(SourceType || (SourceType = {}));
export var CreateIntegrationAssociationRequest;
(function (CreateIntegrationAssociationRequest) {
    /**
     * @internal
     */
    CreateIntegrationAssociationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateIntegrationAssociationRequest || (CreateIntegrationAssociationRequest = {}));
export var CreateIntegrationAssociationResponse;
(function (CreateIntegrationAssociationResponse) {
    /**
     * @internal
     */
    CreateIntegrationAssociationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateIntegrationAssociationResponse || (CreateIntegrationAssociationResponse = {}));
export var OutboundCallerConfig;
(function (OutboundCallerConfig) {
    /**
     * @internal
     */
    OutboundCallerConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutboundCallerConfig || (OutboundCallerConfig = {}));
export var CreateQueueRequest;
(function (CreateQueueRequest) {
    /**
     * @internal
     */
    CreateQueueRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateQueueRequest || (CreateQueueRequest = {}));
export var CreateQueueResponse;
(function (CreateQueueResponse) {
    /**
     * @internal
     */
    CreateQueueResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateQueueResponse || (CreateQueueResponse = {}));
export var PhoneNumberQuickConnectConfig;
(function (PhoneNumberQuickConnectConfig) {
    /**
     * @internal
     */
    PhoneNumberQuickConnectConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PhoneNumberQuickConnectConfig || (PhoneNumberQuickConnectConfig = {}));
export var QueueQuickConnectConfig;
(function (QueueQuickConnectConfig) {
    /**
     * @internal
     */
    QueueQuickConnectConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QueueQuickConnectConfig || (QueueQuickConnectConfig = {}));
export var QuickConnectType;
(function (QuickConnectType) {
    QuickConnectType["PHONE_NUMBER"] = "PHONE_NUMBER";
    QuickConnectType["QUEUE"] = "QUEUE";
    QuickConnectType["USER"] = "USER";
})(QuickConnectType || (QuickConnectType = {}));
export var UserQuickConnectConfig;
(function (UserQuickConnectConfig) {
    /**
     * @internal
     */
    UserQuickConnectConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserQuickConnectConfig || (UserQuickConnectConfig = {}));
export var QuickConnectConfig;
(function (QuickConnectConfig) {
    /**
     * @internal
     */
    QuickConnectConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QuickConnectConfig || (QuickConnectConfig = {}));
export var CreateQuickConnectRequest;
(function (CreateQuickConnectRequest) {
    /**
     * @internal
     */
    CreateQuickConnectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateQuickConnectRequest || (CreateQuickConnectRequest = {}));
export var CreateQuickConnectResponse;
(function (CreateQuickConnectResponse) {
    /**
     * @internal
     */
    CreateQuickConnectResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateQuickConnectResponse || (CreateQuickConnectResponse = {}));
export var MediaConcurrency;
(function (MediaConcurrency) {
    /**
     * @internal
     */
    MediaConcurrency.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MediaConcurrency || (MediaConcurrency = {}));
export var CreateRoutingProfileRequest;
(function (CreateRoutingProfileRequest) {
    /**
     * @internal
     */
    CreateRoutingProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRoutingProfileRequest || (CreateRoutingProfileRequest = {}));
export var CreateRoutingProfileResponse;
(function (CreateRoutingProfileResponse) {
    /**
     * @internal
     */
    CreateRoutingProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRoutingProfileResponse || (CreateRoutingProfileResponse = {}));
export var UseCaseType;
(function (UseCaseType) {
    UseCaseType["RULES_EVALUATION"] = "RULES_EVALUATION";
})(UseCaseType || (UseCaseType = {}));
export var CreateUseCaseRequest;
(function (CreateUseCaseRequest) {
    /**
     * @internal
     */
    CreateUseCaseRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUseCaseRequest || (CreateUseCaseRequest = {}));
export var CreateUseCaseResponse;
(function (CreateUseCaseResponse) {
    /**
     * @internal
     */
    CreateUseCaseResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUseCaseResponse || (CreateUseCaseResponse = {}));
export var UserIdentityInfo;
(function (UserIdentityInfo) {
    /**
     * @internal
     */
    UserIdentityInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserIdentityInfo || (UserIdentityInfo = {}));
export var PhoneType;
(function (PhoneType) {
    PhoneType["DESK_PHONE"] = "DESK_PHONE";
    PhoneType["SOFT_PHONE"] = "SOFT_PHONE";
})(PhoneType || (PhoneType = {}));
export var UserPhoneConfig;
(function (UserPhoneConfig) {
    /**
     * @internal
     */
    UserPhoneConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserPhoneConfig || (UserPhoneConfig = {}));
export var CreateUserRequest;
(function (CreateUserRequest) {
    /**
     * @internal
     */
    CreateUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserRequest || (CreateUserRequest = {}));
export var CreateUserResponse;
(function (CreateUserResponse) {
    /**
     * @internal
     */
    CreateUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserResponse || (CreateUserResponse = {}));
export var CreateUserHierarchyGroupRequest;
(function (CreateUserHierarchyGroupRequest) {
    /**
     * @internal
     */
    CreateUserHierarchyGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserHierarchyGroupRequest || (CreateUserHierarchyGroupRequest = {}));
export var CreateUserHierarchyGroupResponse;
(function (CreateUserHierarchyGroupResponse) {
    /**
     * @internal
     */
    CreateUserHierarchyGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserHierarchyGroupResponse || (CreateUserHierarchyGroupResponse = {}));
export var DeleteInstanceRequest;
(function (DeleteInstanceRequest) {
    /**
     * @internal
     */
    DeleteInstanceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInstanceRequest || (DeleteInstanceRequest = {}));
export var DeleteIntegrationAssociationRequest;
(function (DeleteIntegrationAssociationRequest) {
    /**
     * @internal
     */
    DeleteIntegrationAssociationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteIntegrationAssociationRequest || (DeleteIntegrationAssociationRequest = {}));
export var DeleteQuickConnectRequest;
(function (DeleteQuickConnectRequest) {
    /**
     * @internal
     */
    DeleteQuickConnectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteQuickConnectRequest || (DeleteQuickConnectRequest = {}));
export var DeleteUseCaseRequest;
(function (DeleteUseCaseRequest) {
    /**
     * @internal
     */
    DeleteUseCaseRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUseCaseRequest || (DeleteUseCaseRequest = {}));
export var DeleteUserRequest;
(function (DeleteUserRequest) {
    /**
     * @internal
     */
    DeleteUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUserRequest || (DeleteUserRequest = {}));
export var DeleteUserHierarchyGroupRequest;
(function (DeleteUserHierarchyGroupRequest) {
    /**
     * @internal
     */
    DeleteUserHierarchyGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUserHierarchyGroupRequest || (DeleteUserHierarchyGroupRequest = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["CONTACT"] = "CONTACT";
    ResourceType["CONTACT_FLOW"] = "CONTACT_FLOW";
    ResourceType["HIERARCHY_GROUP"] = "HIERARCHY_GROUP";
    ResourceType["HIERARCHY_LEVEL"] = "HIERARCHY_LEVEL";
    ResourceType["INSTANCE"] = "INSTANCE";
    ResourceType["PARTICIPANT"] = "PARTICIPANT";
    ResourceType["USER"] = "USER";
})(ResourceType || (ResourceType = {}));
export var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceInUseException || (ResourceInUseException = {}));
export var ContactFlowNotPublishedException;
(function (ContactFlowNotPublishedException) {
    /**
     * @internal
     */
    ContactFlowNotPublishedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContactFlowNotPublishedException || (ContactFlowNotPublishedException = {}));
export var DescribeContactFlowRequest;
(function (DescribeContactFlowRequest) {
    /**
     * @internal
     */
    DescribeContactFlowRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeContactFlowRequest || (DescribeContactFlowRequest = {}));
export var ContactFlow;
(function (ContactFlow) {
    /**
     * @internal
     */
    ContactFlow.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContactFlow || (ContactFlow = {}));
export var DescribeContactFlowResponse;
(function (DescribeContactFlowResponse) {
    /**
     * @internal
     */
    DescribeContactFlowResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeContactFlowResponse || (DescribeContactFlowResponse = {}));
export var DescribeHoursOfOperationRequest;
(function (DescribeHoursOfOperationRequest) {
    /**
     * @internal
     */
    DescribeHoursOfOperationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeHoursOfOperationRequest || (DescribeHoursOfOperationRequest = {}));
export var HoursOfOperationDays;
(function (HoursOfOperationDays) {
    HoursOfOperationDays["FRIDAY"] = "FRIDAY";
    HoursOfOperationDays["MONDAY"] = "MONDAY";
    HoursOfOperationDays["SATURDAY"] = "SATURDAY";
    HoursOfOperationDays["SUNDAY"] = "SUNDAY";
    HoursOfOperationDays["THURSDAY"] = "THURSDAY";
    HoursOfOperationDays["TUESDAY"] = "TUESDAY";
    HoursOfOperationDays["WEDNESDAY"] = "WEDNESDAY";
})(HoursOfOperationDays || (HoursOfOperationDays = {}));
export var HoursOfOperationTimeSlice;
(function (HoursOfOperationTimeSlice) {
    /**
     * @internal
     */
    HoursOfOperationTimeSlice.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HoursOfOperationTimeSlice || (HoursOfOperationTimeSlice = {}));
export var HoursOfOperationConfig;
(function (HoursOfOperationConfig) {
    /**
     * @internal
     */
    HoursOfOperationConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HoursOfOperationConfig || (HoursOfOperationConfig = {}));
export var HoursOfOperation;
(function (HoursOfOperation) {
    /**
     * @internal
     */
    HoursOfOperation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HoursOfOperation || (HoursOfOperation = {}));
export var DescribeHoursOfOperationResponse;
(function (DescribeHoursOfOperationResponse) {
    /**
     * @internal
     */
    DescribeHoursOfOperationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeHoursOfOperationResponse || (DescribeHoursOfOperationResponse = {}));
export var DescribeInstanceRequest;
(function (DescribeInstanceRequest) {
    /**
     * @internal
     */
    DescribeInstanceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstanceRequest || (DescribeInstanceRequest = {}));
export var InstanceStatus;
(function (InstanceStatus) {
    InstanceStatus["ACTIVE"] = "ACTIVE";
    InstanceStatus["CREATION_FAILED"] = "CREATION_FAILED";
    InstanceStatus["CREATION_IN_PROGRESS"] = "CREATION_IN_PROGRESS";
})(InstanceStatus || (InstanceStatus = {}));
export var InstanceStatusReason;
(function (InstanceStatusReason) {
    /**
     * @internal
     */
    InstanceStatusReason.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceStatusReason || (InstanceStatusReason = {}));
export var Instance;
(function (Instance) {
    /**
     * @internal
     */
    Instance.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.InstanceAlias && { InstanceAlias: SENSITIVE_STRING }))); };
})(Instance || (Instance = {}));
export var DescribeInstanceResponse;
(function (DescribeInstanceResponse) {
    /**
     * @internal
     */
    DescribeInstanceResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Instance && { Instance: Instance.filterSensitiveLog(obj.Instance) }))); };
})(DescribeInstanceResponse || (DescribeInstanceResponse = {}));
export var InstanceAttributeType;
(function (InstanceAttributeType) {
    InstanceAttributeType["AUTO_RESOLVE_BEST_VOICES"] = "AUTO_RESOLVE_BEST_VOICES";
    InstanceAttributeType["CONTACTFLOW_LOGS"] = "CONTACTFLOW_LOGS";
    InstanceAttributeType["CONTACT_LENS"] = "CONTACT_LENS";
    InstanceAttributeType["EARLY_MEDIA"] = "EARLY_MEDIA";
    InstanceAttributeType["INBOUND_CALLS"] = "INBOUND_CALLS";
    InstanceAttributeType["OUTBOUND_CALLS"] = "OUTBOUND_CALLS";
    InstanceAttributeType["USE_CUSTOM_TTS_VOICES"] = "USE_CUSTOM_TTS_VOICES";
})(InstanceAttributeType || (InstanceAttributeType = {}));
export var DescribeInstanceAttributeRequest;
(function (DescribeInstanceAttributeRequest) {
    /**
     * @internal
     */
    DescribeInstanceAttributeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstanceAttributeRequest || (DescribeInstanceAttributeRequest = {}));
export var Attribute;
(function (Attribute) {
    /**
     * @internal
     */
    Attribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Attribute || (Attribute = {}));
export var DescribeInstanceAttributeResponse;
(function (DescribeInstanceAttributeResponse) {
    /**
     * @internal
     */
    DescribeInstanceAttributeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstanceAttributeResponse || (DescribeInstanceAttributeResponse = {}));
export var DescribeInstanceStorageConfigRequest;
(function (DescribeInstanceStorageConfigRequest) {
    /**
     * @internal
     */
    DescribeInstanceStorageConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstanceStorageConfigRequest || (DescribeInstanceStorageConfigRequest = {}));
export var DescribeInstanceStorageConfigResponse;
(function (DescribeInstanceStorageConfigResponse) {
    /**
     * @internal
     */
    DescribeInstanceStorageConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstanceStorageConfigResponse || (DescribeInstanceStorageConfigResponse = {}));
export var DescribeQueueRequest;
(function (DescribeQueueRequest) {
    /**
     * @internal
     */
    DescribeQueueRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeQueueRequest || (DescribeQueueRequest = {}));
export var QueueStatus;
(function (QueueStatus) {
    QueueStatus["DISABLED"] = "DISABLED";
    QueueStatus["ENABLED"] = "ENABLED";
})(QueueStatus || (QueueStatus = {}));
export var Queue;
(function (Queue) {
    /**
     * @internal
     */
    Queue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Queue || (Queue = {}));
export var DescribeQueueResponse;
(function (DescribeQueueResponse) {
    /**
     * @internal
     */
    DescribeQueueResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeQueueResponse || (DescribeQueueResponse = {}));
export var DescribeQuickConnectRequest;
(function (DescribeQuickConnectRequest) {
    /**
     * @internal
     */
    DescribeQuickConnectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeQuickConnectRequest || (DescribeQuickConnectRequest = {}));
export var QuickConnect;
(function (QuickConnect) {
    /**
     * @internal
     */
    QuickConnect.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QuickConnect || (QuickConnect = {}));
export var DescribeQuickConnectResponse;
(function (DescribeQuickConnectResponse) {
    /**
     * @internal
     */
    DescribeQuickConnectResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeQuickConnectResponse || (DescribeQuickConnectResponse = {}));
export var DescribeRoutingProfileRequest;
(function (DescribeRoutingProfileRequest) {
    /**
     * @internal
     */
    DescribeRoutingProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRoutingProfileRequest || (DescribeRoutingProfileRequest = {}));
export var RoutingProfile;
(function (RoutingProfile) {
    /**
     * @internal
     */
    RoutingProfile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RoutingProfile || (RoutingProfile = {}));
export var DescribeRoutingProfileResponse;
(function (DescribeRoutingProfileResponse) {
    /**
     * @internal
     */
    DescribeRoutingProfileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRoutingProfileResponse || (DescribeRoutingProfileResponse = {}));
export var DescribeUserRequest;
(function (DescribeUserRequest) {
    /**
     * @internal
     */
    DescribeUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserRequest || (DescribeUserRequest = {}));
export var User;
(function (User) {
    /**
     * @internal
     */
    User.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(User || (User = {}));
export var DescribeUserResponse;
(function (DescribeUserResponse) {
    /**
     * @internal
     */
    DescribeUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserResponse || (DescribeUserResponse = {}));
export var DescribeUserHierarchyGroupRequest;
(function (DescribeUserHierarchyGroupRequest) {
    /**
     * @internal
     */
    DescribeUserHierarchyGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserHierarchyGroupRequest || (DescribeUserHierarchyGroupRequest = {}));
export var HierarchyGroupSummary;
(function (HierarchyGroupSummary) {
    /**
     * @internal
     */
    HierarchyGroupSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HierarchyGroupSummary || (HierarchyGroupSummary = {}));
export var HierarchyPath;
(function (HierarchyPath) {
    /**
     * @internal
     */
    HierarchyPath.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HierarchyPath || (HierarchyPath = {}));
export var HierarchyGroup;
(function (HierarchyGroup) {
    /**
     * @internal
     */
    HierarchyGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HierarchyGroup || (HierarchyGroup = {}));
export var DescribeUserHierarchyGroupResponse;
(function (DescribeUserHierarchyGroupResponse) {
    /**
     * @internal
     */
    DescribeUserHierarchyGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserHierarchyGroupResponse || (DescribeUserHierarchyGroupResponse = {}));
export var DescribeUserHierarchyStructureRequest;
(function (DescribeUserHierarchyStructureRequest) {
    /**
     * @internal
     */
    DescribeUserHierarchyStructureRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserHierarchyStructureRequest || (DescribeUserHierarchyStructureRequest = {}));
export var HierarchyLevel;
(function (HierarchyLevel) {
    /**
     * @internal
     */
    HierarchyLevel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HierarchyLevel || (HierarchyLevel = {}));
export var HierarchyStructure;
(function (HierarchyStructure) {
    /**
     * @internal
     */
    HierarchyStructure.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HierarchyStructure || (HierarchyStructure = {}));
export var DescribeUserHierarchyStructureResponse;
(function (DescribeUserHierarchyStructureResponse) {
    /**
     * @internal
     */
    DescribeUserHierarchyStructureResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserHierarchyStructureResponse || (DescribeUserHierarchyStructureResponse = {}));
export var DisassociateApprovedOriginRequest;
(function (DisassociateApprovedOriginRequest) {
    /**
     * @internal
     */
    DisassociateApprovedOriginRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateApprovedOriginRequest || (DisassociateApprovedOriginRequest = {}));
export var DisassociateInstanceStorageConfigRequest;
(function (DisassociateInstanceStorageConfigRequest) {
    /**
     * @internal
     */
    DisassociateInstanceStorageConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateInstanceStorageConfigRequest || (DisassociateInstanceStorageConfigRequest = {}));
export var DisassociateLambdaFunctionRequest;
(function (DisassociateLambdaFunctionRequest) {
    /**
     * @internal
     */
    DisassociateLambdaFunctionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateLambdaFunctionRequest || (DisassociateLambdaFunctionRequest = {}));
export var DisassociateLexBotRequest;
(function (DisassociateLexBotRequest) {
    /**
     * @internal
     */
    DisassociateLexBotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateLexBotRequest || (DisassociateLexBotRequest = {}));
export var DisassociateQueueQuickConnectsRequest;
(function (DisassociateQueueQuickConnectsRequest) {
    /**
     * @internal
     */
    DisassociateQueueQuickConnectsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateQueueQuickConnectsRequest || (DisassociateQueueQuickConnectsRequest = {}));
export var DisassociateRoutingProfileQueuesRequest;
(function (DisassociateRoutingProfileQueuesRequest) {
    /**
     * @internal
     */
    DisassociateRoutingProfileQueuesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateRoutingProfileQueuesRequest || (DisassociateRoutingProfileQueuesRequest = {}));
export var DisassociateSecurityKeyRequest;
(function (DisassociateSecurityKeyRequest) {
    /**
     * @internal
     */
    DisassociateSecurityKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateSecurityKeyRequest || (DisassociateSecurityKeyRequest = {}));
export var GetContactAttributesRequest;
(function (GetContactAttributesRequest) {
    /**
     * @internal
     */
    GetContactAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContactAttributesRequest || (GetContactAttributesRequest = {}));
export var GetContactAttributesResponse;
(function (GetContactAttributesResponse) {
    /**
     * @internal
     */
    GetContactAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContactAttributesResponse || (GetContactAttributesResponse = {}));
export var CurrentMetricName;
(function (CurrentMetricName) {
    CurrentMetricName["AGENTS_AFTER_CONTACT_WORK"] = "AGENTS_AFTER_CONTACT_WORK";
    CurrentMetricName["AGENTS_AVAILABLE"] = "AGENTS_AVAILABLE";
    CurrentMetricName["AGENTS_ERROR"] = "AGENTS_ERROR";
    CurrentMetricName["AGENTS_NON_PRODUCTIVE"] = "AGENTS_NON_PRODUCTIVE";
    CurrentMetricName["AGENTS_ONLINE"] = "AGENTS_ONLINE";
    CurrentMetricName["AGENTS_ON_CALL"] = "AGENTS_ON_CALL";
    CurrentMetricName["AGENTS_ON_CONTACT"] = "AGENTS_ON_CONTACT";
    CurrentMetricName["AGENTS_STAFFED"] = "AGENTS_STAFFED";
    CurrentMetricName["CONTACTS_IN_QUEUE"] = "CONTACTS_IN_QUEUE";
    CurrentMetricName["CONTACTS_SCHEDULED"] = "CONTACTS_SCHEDULED";
    CurrentMetricName["OLDEST_CONTACT_AGE"] = "OLDEST_CONTACT_AGE";
    CurrentMetricName["SLOTS_ACTIVE"] = "SLOTS_ACTIVE";
    CurrentMetricName["SLOTS_AVAILABLE"] = "SLOTS_AVAILABLE";
})(CurrentMetricName || (CurrentMetricName = {}));
export var Unit;
(function (Unit) {
    Unit["COUNT"] = "COUNT";
    Unit["PERCENT"] = "PERCENT";
    Unit["SECONDS"] = "SECONDS";
})(Unit || (Unit = {}));
export var CurrentMetric;
(function (CurrentMetric) {
    /**
     * @internal
     */
    CurrentMetric.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CurrentMetric || (CurrentMetric = {}));
export var Filters;
(function (Filters) {
    /**
     * @internal
     */
    Filters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Filters || (Filters = {}));
export var Grouping;
(function (Grouping) {
    Grouping["CHANNEL"] = "CHANNEL";
    Grouping["QUEUE"] = "QUEUE";
})(Grouping || (Grouping = {}));
export var GetCurrentMetricDataRequest;
(function (GetCurrentMetricDataRequest) {
    /**
     * @internal
     */
    GetCurrentMetricDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCurrentMetricDataRequest || (GetCurrentMetricDataRequest = {}));
export var CurrentMetricData;
(function (CurrentMetricData) {
    /**
     * @internal
     */
    CurrentMetricData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CurrentMetricData || (CurrentMetricData = {}));
export var QueueReference;
(function (QueueReference) {
    /**
     * @internal
     */
    QueueReference.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QueueReference || (QueueReference = {}));
export var Dimensions;
(function (Dimensions) {
    /**
     * @internal
     */
    Dimensions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Dimensions || (Dimensions = {}));
export var CurrentMetricResult;
(function (CurrentMetricResult) {
    /**
     * @internal
     */
    CurrentMetricResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CurrentMetricResult || (CurrentMetricResult = {}));
export var GetCurrentMetricDataResponse;
(function (GetCurrentMetricDataResponse) {
    /**
     * @internal
     */
    GetCurrentMetricDataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCurrentMetricDataResponse || (GetCurrentMetricDataResponse = {}));
export var GetFederationTokenRequest;
(function (GetFederationTokenRequest) {
    /**
     * @internal
     */
    GetFederationTokenRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetFederationTokenRequest || (GetFederationTokenRequest = {}));
export var Credentials;
(function (Credentials) {
    /**
     * @internal
     */
    Credentials.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING })), (obj.RefreshToken && { RefreshToken: SENSITIVE_STRING }))); };
})(Credentials || (Credentials = {}));
export var GetFederationTokenResponse;
(function (GetFederationTokenResponse) {
    /**
     * @internal
     */
    GetFederationTokenResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Credentials && { Credentials: Credentials.filterSensitiveLog(obj.Credentials) }))); };
})(GetFederationTokenResponse || (GetFederationTokenResponse = {}));
export var UserNotFoundException;
(function (UserNotFoundException) {
    /**
     * @internal
     */
    UserNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserNotFoundException || (UserNotFoundException = {}));
export var HistoricalMetricName;
(function (HistoricalMetricName) {
    HistoricalMetricName["ABANDON_TIME"] = "ABANDON_TIME";
    HistoricalMetricName["AFTER_CONTACT_WORK_TIME"] = "AFTER_CONTACT_WORK_TIME";
    HistoricalMetricName["API_CONTACTS_HANDLED"] = "API_CONTACTS_HANDLED";
    HistoricalMetricName["CALLBACK_CONTACTS_HANDLED"] = "CALLBACK_CONTACTS_HANDLED";
    HistoricalMetricName["CONTACTS_ABANDONED"] = "CONTACTS_ABANDONED";
    HistoricalMetricName["CONTACTS_AGENT_HUNG_UP_FIRST"] = "CONTACTS_AGENT_HUNG_UP_FIRST";
    HistoricalMetricName["CONTACTS_CONSULTED"] = "CONTACTS_CONSULTED";
    HistoricalMetricName["CONTACTS_HANDLED"] = "CONTACTS_HANDLED";
    HistoricalMetricName["CONTACTS_HANDLED_INCOMING"] = "CONTACTS_HANDLED_INCOMING";
    HistoricalMetricName["CONTACTS_HANDLED_OUTBOUND"] = "CONTACTS_HANDLED_OUTBOUND";
    HistoricalMetricName["CONTACTS_HOLD_ABANDONS"] = "CONTACTS_HOLD_ABANDONS";
    HistoricalMetricName["CONTACTS_MISSED"] = "CONTACTS_MISSED";
    HistoricalMetricName["CONTACTS_QUEUED"] = "CONTACTS_QUEUED";
    HistoricalMetricName["CONTACTS_TRANSFERRED_IN"] = "CONTACTS_TRANSFERRED_IN";
    HistoricalMetricName["CONTACTS_TRANSFERRED_IN_FROM_QUEUE"] = "CONTACTS_TRANSFERRED_IN_FROM_QUEUE";
    HistoricalMetricName["CONTACTS_TRANSFERRED_OUT"] = "CONTACTS_TRANSFERRED_OUT";
    HistoricalMetricName["CONTACTS_TRANSFERRED_OUT_FROM_QUEUE"] = "CONTACTS_TRANSFERRED_OUT_FROM_QUEUE";
    HistoricalMetricName["HANDLE_TIME"] = "HANDLE_TIME";
    HistoricalMetricName["HOLD_TIME"] = "HOLD_TIME";
    HistoricalMetricName["INTERACTION_AND_HOLD_TIME"] = "INTERACTION_AND_HOLD_TIME";
    HistoricalMetricName["INTERACTION_TIME"] = "INTERACTION_TIME";
    HistoricalMetricName["OCCUPANCY"] = "OCCUPANCY";
    HistoricalMetricName["QUEUED_TIME"] = "QUEUED_TIME";
    HistoricalMetricName["QUEUE_ANSWER_TIME"] = "QUEUE_ANSWER_TIME";
    HistoricalMetricName["SERVICE_LEVEL"] = "SERVICE_LEVEL";
})(HistoricalMetricName || (HistoricalMetricName = {}));
export var Statistic;
(function (Statistic) {
    Statistic["AVG"] = "AVG";
    Statistic["MAX"] = "MAX";
    Statistic["SUM"] = "SUM";
})(Statistic || (Statistic = {}));
export var Comparison;
(function (Comparison) {
    Comparison["LT"] = "LT";
})(Comparison || (Comparison = {}));
export var Threshold;
(function (Threshold) {
    /**
     * @internal
     */
    Threshold.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Threshold || (Threshold = {}));
export var HistoricalMetric;
(function (HistoricalMetric) {
    /**
     * @internal
     */
    HistoricalMetric.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HistoricalMetric || (HistoricalMetric = {}));
export var GetMetricDataRequest;
(function (GetMetricDataRequest) {
    /**
     * @internal
     */
    GetMetricDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMetricDataRequest || (GetMetricDataRequest = {}));
export var HistoricalMetricData;
(function (HistoricalMetricData) {
    /**
     * @internal
     */
    HistoricalMetricData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HistoricalMetricData || (HistoricalMetricData = {}));
export var HistoricalMetricResult;
(function (HistoricalMetricResult) {
    /**
     * @internal
     */
    HistoricalMetricResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HistoricalMetricResult || (HistoricalMetricResult = {}));
export var GetMetricDataResponse;
(function (GetMetricDataResponse) {
    /**
     * @internal
     */
    GetMetricDataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMetricDataResponse || (GetMetricDataResponse = {}));
export var ListApprovedOriginsRequest;
(function (ListApprovedOriginsRequest) {
    /**
     * @internal
     */
    ListApprovedOriginsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListApprovedOriginsRequest || (ListApprovedOriginsRequest = {}));
export var ListApprovedOriginsResponse;
(function (ListApprovedOriginsResponse) {
    /**
     * @internal
     */
    ListApprovedOriginsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListApprovedOriginsResponse || (ListApprovedOriginsResponse = {}));
export var ListContactFlowsRequest;
(function (ListContactFlowsRequest) {
    /**
     * @internal
     */
    ListContactFlowsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListContactFlowsRequest || (ListContactFlowsRequest = {}));
export var ContactFlowSummary;
(function (ContactFlowSummary) {
    /**
     * @internal
     */
    ContactFlowSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContactFlowSummary || (ContactFlowSummary = {}));
export var ListContactFlowsResponse;
(function (ListContactFlowsResponse) {
    /**
     * @internal
     */
    ListContactFlowsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListContactFlowsResponse || (ListContactFlowsResponse = {}));
export var ListHoursOfOperationsRequest;
(function (ListHoursOfOperationsRequest) {
    /**
     * @internal
     */
    ListHoursOfOperationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListHoursOfOperationsRequest || (ListHoursOfOperationsRequest = {}));
export var HoursOfOperationSummary;
(function (HoursOfOperationSummary) {
    /**
     * @internal
     */
    HoursOfOperationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HoursOfOperationSummary || (HoursOfOperationSummary = {}));
export var ListHoursOfOperationsResponse;
(function (ListHoursOfOperationsResponse) {
    /**
     * @internal
     */
    ListHoursOfOperationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListHoursOfOperationsResponse || (ListHoursOfOperationsResponse = {}));
export var ListInstanceAttributesRequest;
(function (ListInstanceAttributesRequest) {
    /**
     * @internal
     */
    ListInstanceAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceAttributesRequest || (ListInstanceAttributesRequest = {}));
export var ListInstanceAttributesResponse;
(function (ListInstanceAttributesResponse) {
    /**
     * @internal
     */
    ListInstanceAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceAttributesResponse || (ListInstanceAttributesResponse = {}));
export var ListInstancesRequest;
(function (ListInstancesRequest) {
    /**
     * @internal
     */
    ListInstancesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstancesRequest || (ListInstancesRequest = {}));
export var InstanceSummary;
(function (InstanceSummary) {
    /**
     * @internal
     */
    InstanceSummary.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.InstanceAlias && { InstanceAlias: SENSITIVE_STRING }))); };
})(InstanceSummary || (InstanceSummary = {}));
export var ListInstancesResponse;
(function (ListInstancesResponse) {
    /**
     * @internal
     */
    ListInstancesResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.InstanceSummaryList && {
        InstanceSummaryList: obj.InstanceSummaryList.map(function (item) { return InstanceSummary.filterSensitiveLog(item); }),
    }))); };
})(ListInstancesResponse || (ListInstancesResponse = {}));
export var ListInstanceStorageConfigsRequest;
(function (ListInstanceStorageConfigsRequest) {
    /**
     * @internal
     */
    ListInstanceStorageConfigsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceStorageConfigsRequest || (ListInstanceStorageConfigsRequest = {}));
export var ListInstanceStorageConfigsResponse;
(function (ListInstanceStorageConfigsResponse) {
    /**
     * @internal
     */
    ListInstanceStorageConfigsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstanceStorageConfigsResponse || (ListInstanceStorageConfigsResponse = {}));
export var ListIntegrationAssociationsRequest;
(function (ListIntegrationAssociationsRequest) {
    /**
     * @internal
     */
    ListIntegrationAssociationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIntegrationAssociationsRequest || (ListIntegrationAssociationsRequest = {}));
export var IntegrationAssociationSummary;
(function (IntegrationAssociationSummary) {
    /**
     * @internal
     */
    IntegrationAssociationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IntegrationAssociationSummary || (IntegrationAssociationSummary = {}));
export var ListIntegrationAssociationsResponse;
(function (ListIntegrationAssociationsResponse) {
    /**
     * @internal
     */
    ListIntegrationAssociationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIntegrationAssociationsResponse || (ListIntegrationAssociationsResponse = {}));
export var ListLambdaFunctionsRequest;
(function (ListLambdaFunctionsRequest) {
    /**
     * @internal
     */
    ListLambdaFunctionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLambdaFunctionsRequest || (ListLambdaFunctionsRequest = {}));
export var ListLambdaFunctionsResponse;
(function (ListLambdaFunctionsResponse) {
    /**
     * @internal
     */
    ListLambdaFunctionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLambdaFunctionsResponse || (ListLambdaFunctionsResponse = {}));
export var ListLexBotsRequest;
(function (ListLexBotsRequest) {
    /**
     * @internal
     */
    ListLexBotsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLexBotsRequest || (ListLexBotsRequest = {}));
export var ListLexBotsResponse;
(function (ListLexBotsResponse) {
    /**
     * @internal
     */
    ListLexBotsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLexBotsResponse || (ListLexBotsResponse = {}));
export var PhoneNumberCountryCode;
(function (PhoneNumberCountryCode) {
    PhoneNumberCountryCode["AD"] = "AD";
    PhoneNumberCountryCode["AE"] = "AE";
    PhoneNumberCountryCode["AF"] = "AF";
    PhoneNumberCountryCode["AG"] = "AG";
    PhoneNumberCountryCode["AI"] = "AI";
    PhoneNumberCountryCode["AL"] = "AL";
    PhoneNumberCountryCode["AM"] = "AM";
    PhoneNumberCountryCode["AN"] = "AN";
    PhoneNumberCountryCode["AO"] = "AO";
    PhoneNumberCountryCode["AQ"] = "AQ";
    PhoneNumberCountryCode["AR"] = "AR";
    PhoneNumberCountryCode["AS"] = "AS";
    PhoneNumberCountryCode["AT"] = "AT";
    PhoneNumberCountryCode["AU"] = "AU";
    PhoneNumberCountryCode["AW"] = "AW";
    PhoneNumberCountryCode["AZ"] = "AZ";
    PhoneNumberCountryCode["BA"] = "BA";
    PhoneNumberCountryCode["BB"] = "BB";
    PhoneNumberCountryCode["BD"] = "BD";
    PhoneNumberCountryCode["BE"] = "BE";
    PhoneNumberCountryCode["BF"] = "BF";
    PhoneNumberCountryCode["BG"] = "BG";
    PhoneNumberCountryCode["BH"] = "BH";
    PhoneNumberCountryCode["BI"] = "BI";
    PhoneNumberCountryCode["BJ"] = "BJ";
    PhoneNumberCountryCode["BL"] = "BL";
    PhoneNumberCountryCode["BM"] = "BM";
    PhoneNumberCountryCode["BN"] = "BN";
    PhoneNumberCountryCode["BO"] = "BO";
    PhoneNumberCountryCode["BR"] = "BR";
    PhoneNumberCountryCode["BS"] = "BS";
    PhoneNumberCountryCode["BT"] = "BT";
    PhoneNumberCountryCode["BW"] = "BW";
    PhoneNumberCountryCode["BY"] = "BY";
    PhoneNumberCountryCode["BZ"] = "BZ";
    PhoneNumberCountryCode["CA"] = "CA";
    PhoneNumberCountryCode["CC"] = "CC";
    PhoneNumberCountryCode["CD"] = "CD";
    PhoneNumberCountryCode["CF"] = "CF";
    PhoneNumberCountryCode["CG"] = "CG";
    PhoneNumberCountryCode["CH"] = "CH";
    PhoneNumberCountryCode["CI"] = "CI";
    PhoneNumberCountryCode["CK"] = "CK";
    PhoneNumberCountryCode["CL"] = "CL";
    PhoneNumberCountryCode["CM"] = "CM";
    PhoneNumberCountryCode["CN"] = "CN";
    PhoneNumberCountryCode["CO"] = "CO";
    PhoneNumberCountryCode["CR"] = "CR";
    PhoneNumberCountryCode["CU"] = "CU";
    PhoneNumberCountryCode["CV"] = "CV";
    PhoneNumberCountryCode["CW"] = "CW";
    PhoneNumberCountryCode["CX"] = "CX";
    PhoneNumberCountryCode["CY"] = "CY";
    PhoneNumberCountryCode["CZ"] = "CZ";
    PhoneNumberCountryCode["DE"] = "DE";
    PhoneNumberCountryCode["DJ"] = "DJ";
    PhoneNumberCountryCode["DK"] = "DK";
    PhoneNumberCountryCode["DM"] = "DM";
    PhoneNumberCountryCode["DO"] = "DO";
    PhoneNumberCountryCode["DZ"] = "DZ";
    PhoneNumberCountryCode["EC"] = "EC";
    PhoneNumberCountryCode["EE"] = "EE";
    PhoneNumberCountryCode["EG"] = "EG";
    PhoneNumberCountryCode["EH"] = "EH";
    PhoneNumberCountryCode["ER"] = "ER";
    PhoneNumberCountryCode["ES"] = "ES";
    PhoneNumberCountryCode["ET"] = "ET";
    PhoneNumberCountryCode["FI"] = "FI";
    PhoneNumberCountryCode["FJ"] = "FJ";
    PhoneNumberCountryCode["FK"] = "FK";
    PhoneNumberCountryCode["FM"] = "FM";
    PhoneNumberCountryCode["FO"] = "FO";
    PhoneNumberCountryCode["FR"] = "FR";
    PhoneNumberCountryCode["GA"] = "GA";
    PhoneNumberCountryCode["GB"] = "GB";
    PhoneNumberCountryCode["GD"] = "GD";
    PhoneNumberCountryCode["GE"] = "GE";
    PhoneNumberCountryCode["GG"] = "GG";
    PhoneNumberCountryCode["GH"] = "GH";
    PhoneNumberCountryCode["GI"] = "GI";
    PhoneNumberCountryCode["GL"] = "GL";
    PhoneNumberCountryCode["GM"] = "GM";
    PhoneNumberCountryCode["GN"] = "GN";
    PhoneNumberCountryCode["GQ"] = "GQ";
    PhoneNumberCountryCode["GR"] = "GR";
    PhoneNumberCountryCode["GT"] = "GT";
    PhoneNumberCountryCode["GU"] = "GU";
    PhoneNumberCountryCode["GW"] = "GW";
    PhoneNumberCountryCode["GY"] = "GY";
    PhoneNumberCountryCode["HK"] = "HK";
    PhoneNumberCountryCode["HN"] = "HN";
    PhoneNumberCountryCode["HR"] = "HR";
    PhoneNumberCountryCode["HT"] = "HT";
    PhoneNumberCountryCode["HU"] = "HU";
    PhoneNumberCountryCode["ID"] = "ID";
    PhoneNumberCountryCode["IE"] = "IE";
    PhoneNumberCountryCode["IL"] = "IL";
    PhoneNumberCountryCode["IM"] = "IM";
    PhoneNumberCountryCode["IN"] = "IN";
    PhoneNumberCountryCode["IO"] = "IO";
    PhoneNumberCountryCode["IQ"] = "IQ";
    PhoneNumberCountryCode["IR"] = "IR";
    PhoneNumberCountryCode["IS"] = "IS";
    PhoneNumberCountryCode["IT"] = "IT";
    PhoneNumberCountryCode["JE"] = "JE";
    PhoneNumberCountryCode["JM"] = "JM";
    PhoneNumberCountryCode["JO"] = "JO";
    PhoneNumberCountryCode["JP"] = "JP";
    PhoneNumberCountryCode["KE"] = "KE";
    PhoneNumberCountryCode["KG"] = "KG";
    PhoneNumberCountryCode["KH"] = "KH";
    PhoneNumberCountryCode["KI"] = "KI";
    PhoneNumberCountryCode["KM"] = "KM";
    PhoneNumberCountryCode["KN"] = "KN";
    PhoneNumberCountryCode["KP"] = "KP";
    PhoneNumberCountryCode["KR"] = "KR";
    PhoneNumberCountryCode["KW"] = "KW";
    PhoneNumberCountryCode["KY"] = "KY";
    PhoneNumberCountryCode["KZ"] = "KZ";
    PhoneNumberCountryCode["LA"] = "LA";
    PhoneNumberCountryCode["LB"] = "LB";
    PhoneNumberCountryCode["LC"] = "LC";
    PhoneNumberCountryCode["LI"] = "LI";
    PhoneNumberCountryCode["LK"] = "LK";
    PhoneNumberCountryCode["LR"] = "LR";
    PhoneNumberCountryCode["LS"] = "LS";
    PhoneNumberCountryCode["LT"] = "LT";
    PhoneNumberCountryCode["LU"] = "LU";
    PhoneNumberCountryCode["LV"] = "LV";
    PhoneNumberCountryCode["LY"] = "LY";
    PhoneNumberCountryCode["MA"] = "MA";
    PhoneNumberCountryCode["MC"] = "MC";
    PhoneNumberCountryCode["MD"] = "MD";
    PhoneNumberCountryCode["ME"] = "ME";
    PhoneNumberCountryCode["MF"] = "MF";
    PhoneNumberCountryCode["MG"] = "MG";
    PhoneNumberCountryCode["MH"] = "MH";
    PhoneNumberCountryCode["MK"] = "MK";
    PhoneNumberCountryCode["ML"] = "ML";
    PhoneNumberCountryCode["MM"] = "MM";
    PhoneNumberCountryCode["MN"] = "MN";
    PhoneNumberCountryCode["MO"] = "MO";
    PhoneNumberCountryCode["MP"] = "MP";
    PhoneNumberCountryCode["MR"] = "MR";
    PhoneNumberCountryCode["MS"] = "MS";
    PhoneNumberCountryCode["MT"] = "MT";
    PhoneNumberCountryCode["MU"] = "MU";
    PhoneNumberCountryCode["MV"] = "MV";
    PhoneNumberCountryCode["MW"] = "MW";
    PhoneNumberCountryCode["MX"] = "MX";
    PhoneNumberCountryCode["MY"] = "MY";
    PhoneNumberCountryCode["MZ"] = "MZ";
    PhoneNumberCountryCode["NA"] = "NA";
    PhoneNumberCountryCode["NC"] = "NC";
    PhoneNumberCountryCode["NE"] = "NE";
    PhoneNumberCountryCode["NG"] = "NG";
    PhoneNumberCountryCode["NI"] = "NI";
    PhoneNumberCountryCode["NL"] = "NL";
    PhoneNumberCountryCode["NO"] = "NO";
    PhoneNumberCountryCode["NP"] = "NP";
    PhoneNumberCountryCode["NR"] = "NR";
    PhoneNumberCountryCode["NU"] = "NU";
    PhoneNumberCountryCode["NZ"] = "NZ";
    PhoneNumberCountryCode["OM"] = "OM";
    PhoneNumberCountryCode["PA"] = "PA";
    PhoneNumberCountryCode["PE"] = "PE";
    PhoneNumberCountryCode["PF"] = "PF";
    PhoneNumberCountryCode["PG"] = "PG";
    PhoneNumberCountryCode["PH"] = "PH";
    PhoneNumberCountryCode["PK"] = "PK";
    PhoneNumberCountryCode["PL"] = "PL";
    PhoneNumberCountryCode["PM"] = "PM";
    PhoneNumberCountryCode["PN"] = "PN";
    PhoneNumberCountryCode["PR"] = "PR";
    PhoneNumberCountryCode["PT"] = "PT";
    PhoneNumberCountryCode["PW"] = "PW";
    PhoneNumberCountryCode["PY"] = "PY";
    PhoneNumberCountryCode["QA"] = "QA";
    PhoneNumberCountryCode["RE"] = "RE";
    PhoneNumberCountryCode["RO"] = "RO";
    PhoneNumberCountryCode["RS"] = "RS";
    PhoneNumberCountryCode["RU"] = "RU";
    PhoneNumberCountryCode["RW"] = "RW";
    PhoneNumberCountryCode["SA"] = "SA";
    PhoneNumberCountryCode["SB"] = "SB";
    PhoneNumberCountryCode["SC"] = "SC";
    PhoneNumberCountryCode["SD"] = "SD";
    PhoneNumberCountryCode["SE"] = "SE";
    PhoneNumberCountryCode["SG"] = "SG";
    PhoneNumberCountryCode["SH"] = "SH";
    PhoneNumberCountryCode["SI"] = "SI";
    PhoneNumberCountryCode["SJ"] = "SJ";
    PhoneNumberCountryCode["SK"] = "SK";
    PhoneNumberCountryCode["SL"] = "SL";
    PhoneNumberCountryCode["SM"] = "SM";
    PhoneNumberCountryCode["SN"] = "SN";
    PhoneNumberCountryCode["SO"] = "SO";
    PhoneNumberCountryCode["SR"] = "SR";
    PhoneNumberCountryCode["ST"] = "ST";
    PhoneNumberCountryCode["SV"] = "SV";
    PhoneNumberCountryCode["SX"] = "SX";
    PhoneNumberCountryCode["SY"] = "SY";
    PhoneNumberCountryCode["SZ"] = "SZ";
    PhoneNumberCountryCode["TC"] = "TC";
    PhoneNumberCountryCode["TD"] = "TD";
    PhoneNumberCountryCode["TG"] = "TG";
    PhoneNumberCountryCode["TH"] = "TH";
    PhoneNumberCountryCode["TJ"] = "TJ";
    PhoneNumberCountryCode["TK"] = "TK";
    PhoneNumberCountryCode["TL"] = "TL";
    PhoneNumberCountryCode["TM"] = "TM";
    PhoneNumberCountryCode["TN"] = "TN";
    PhoneNumberCountryCode["TO"] = "TO";
    PhoneNumberCountryCode["TR"] = "TR";
    PhoneNumberCountryCode["TT"] = "TT";
    PhoneNumberCountryCode["TV"] = "TV";
    PhoneNumberCountryCode["TW"] = "TW";
    PhoneNumberCountryCode["TZ"] = "TZ";
    PhoneNumberCountryCode["UA"] = "UA";
    PhoneNumberCountryCode["UG"] = "UG";
    PhoneNumberCountryCode["US"] = "US";
    PhoneNumberCountryCode["UY"] = "UY";
    PhoneNumberCountryCode["UZ"] = "UZ";
    PhoneNumberCountryCode["VA"] = "VA";
    PhoneNumberCountryCode["VC"] = "VC";
    PhoneNumberCountryCode["VE"] = "VE";
    PhoneNumberCountryCode["VG"] = "VG";
    PhoneNumberCountryCode["VI"] = "VI";
    PhoneNumberCountryCode["VN"] = "VN";
    PhoneNumberCountryCode["VU"] = "VU";
    PhoneNumberCountryCode["WF"] = "WF";
    PhoneNumberCountryCode["WS"] = "WS";
    PhoneNumberCountryCode["YE"] = "YE";
    PhoneNumberCountryCode["YT"] = "YT";
    PhoneNumberCountryCode["ZA"] = "ZA";
    PhoneNumberCountryCode["ZM"] = "ZM";
    PhoneNumberCountryCode["ZW"] = "ZW";
})(PhoneNumberCountryCode || (PhoneNumberCountryCode = {}));
export var PhoneNumberType;
(function (PhoneNumberType) {
    PhoneNumberType["DID"] = "DID";
    PhoneNumberType["TOLL_FREE"] = "TOLL_FREE";
})(PhoneNumberType || (PhoneNumberType = {}));
export var ListPhoneNumbersRequest;
(function (ListPhoneNumbersRequest) {
    /**
     * @internal
     */
    ListPhoneNumbersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPhoneNumbersRequest || (ListPhoneNumbersRequest = {}));
export var PhoneNumberSummary;
(function (PhoneNumberSummary) {
    /**
     * @internal
     */
    PhoneNumberSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PhoneNumberSummary || (PhoneNumberSummary = {}));
export var ListPhoneNumbersResponse;
(function (ListPhoneNumbersResponse) {
    /**
     * @internal
     */
    ListPhoneNumbersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPhoneNumbersResponse || (ListPhoneNumbersResponse = {}));
export var ListPromptsRequest;
(function (ListPromptsRequest) {
    /**
     * @internal
     */
    ListPromptsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPromptsRequest || (ListPromptsRequest = {}));
export var PromptSummary;
(function (PromptSummary) {
    /**
     * @internal
     */
    PromptSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PromptSummary || (PromptSummary = {}));
export var ListPromptsResponse;
(function (ListPromptsResponse) {
    /**
     * @internal
     */
    ListPromptsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPromptsResponse || (ListPromptsResponse = {}));
export var ListQueueQuickConnectsRequest;
(function (ListQueueQuickConnectsRequest) {
    /**
     * @internal
     */
    ListQueueQuickConnectsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListQueueQuickConnectsRequest || (ListQueueQuickConnectsRequest = {}));
export var QuickConnectSummary;
(function (QuickConnectSummary) {
    /**
     * @internal
     */
    QuickConnectSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QuickConnectSummary || (QuickConnectSummary = {}));
export var ListQueueQuickConnectsResponse;
(function (ListQueueQuickConnectsResponse) {
    /**
     * @internal
     */
    ListQueueQuickConnectsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListQueueQuickConnectsResponse || (ListQueueQuickConnectsResponse = {}));
export var QueueType;
(function (QueueType) {
    QueueType["AGENT"] = "AGENT";
    QueueType["STANDARD"] = "STANDARD";
})(QueueType || (QueueType = {}));
export var ListQueuesRequest;
(function (ListQueuesRequest) {
    /**
     * @internal
     */
    ListQueuesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListQueuesRequest || (ListQueuesRequest = {}));
export var QueueSummary;
(function (QueueSummary) {
    /**
     * @internal
     */
    QueueSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QueueSummary || (QueueSummary = {}));
export var ListQueuesResponse;
(function (ListQueuesResponse) {
    /**
     * @internal
     */
    ListQueuesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListQueuesResponse || (ListQueuesResponse = {}));
export var ListQuickConnectsRequest;
(function (ListQuickConnectsRequest) {
    /**
     * @internal
     */
    ListQuickConnectsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListQuickConnectsRequest || (ListQuickConnectsRequest = {}));
export var ListQuickConnectsResponse;
(function (ListQuickConnectsResponse) {
    /**
     * @internal
     */
    ListQuickConnectsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListQuickConnectsResponse || (ListQuickConnectsResponse = {}));
export var ListRoutingProfileQueuesRequest;
(function (ListRoutingProfileQueuesRequest) {
    /**
     * @internal
     */
    ListRoutingProfileQueuesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRoutingProfileQueuesRequest || (ListRoutingProfileQueuesRequest = {}));
export var RoutingProfileQueueConfigSummary;
(function (RoutingProfileQueueConfigSummary) {
    /**
     * @internal
     */
    RoutingProfileQueueConfigSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RoutingProfileQueueConfigSummary || (RoutingProfileQueueConfigSummary = {}));
export var ListRoutingProfileQueuesResponse;
(function (ListRoutingProfileQueuesResponse) {
    /**
     * @internal
     */
    ListRoutingProfileQueuesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRoutingProfileQueuesResponse || (ListRoutingProfileQueuesResponse = {}));
export var ListRoutingProfilesRequest;
(function (ListRoutingProfilesRequest) {
    /**
     * @internal
     */
    ListRoutingProfilesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRoutingProfilesRequest || (ListRoutingProfilesRequest = {}));
export var RoutingProfileSummary;
(function (RoutingProfileSummary) {
    /**
     * @internal
     */
    RoutingProfileSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RoutingProfileSummary || (RoutingProfileSummary = {}));
export var ListRoutingProfilesResponse;
(function (ListRoutingProfilesResponse) {
    /**
     * @internal
     */
    ListRoutingProfilesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRoutingProfilesResponse || (ListRoutingProfilesResponse = {}));
export var ListSecurityKeysRequest;
(function (ListSecurityKeysRequest) {
    /**
     * @internal
     */
    ListSecurityKeysRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSecurityKeysRequest || (ListSecurityKeysRequest = {}));
export var SecurityKey;
(function (SecurityKey) {
    /**
     * @internal
     */
    SecurityKey.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SecurityKey || (SecurityKey = {}));
export var ListSecurityKeysResponse;
(function (ListSecurityKeysResponse) {
    /**
     * @internal
     */
    ListSecurityKeysResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSecurityKeysResponse || (ListSecurityKeysResponse = {}));
export var ListSecurityProfilesRequest;
(function (ListSecurityProfilesRequest) {
    /**
     * @internal
     */
    ListSecurityProfilesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSecurityProfilesRequest || (ListSecurityProfilesRequest = {}));
export var SecurityProfileSummary;
(function (SecurityProfileSummary) {
    /**
     * @internal
     */
    SecurityProfileSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SecurityProfileSummary || (SecurityProfileSummary = {}));
export var ListSecurityProfilesResponse;
(function (ListSecurityProfilesResponse) {
    /**
     * @internal
     */
    ListSecurityProfilesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSecurityProfilesResponse || (ListSecurityProfilesResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var ListUseCasesRequest;
(function (ListUseCasesRequest) {
    /**
     * @internal
     */
    ListUseCasesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUseCasesRequest || (ListUseCasesRequest = {}));
export var UseCase;
(function (UseCase) {
    /**
     * @internal
     */
    UseCase.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UseCase || (UseCase = {}));
export var ListUseCasesResponse;
(function (ListUseCasesResponse) {
    /**
     * @internal
     */
    ListUseCasesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUseCasesResponse || (ListUseCasesResponse = {}));
export var ListUserHierarchyGroupsRequest;
(function (ListUserHierarchyGroupsRequest) {
    /**
     * @internal
     */
    ListUserHierarchyGroupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUserHierarchyGroupsRequest || (ListUserHierarchyGroupsRequest = {}));
export var ListUserHierarchyGroupsResponse;
(function (ListUserHierarchyGroupsResponse) {
    /**
     * @internal
     */
    ListUserHierarchyGroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUserHierarchyGroupsResponse || (ListUserHierarchyGroupsResponse = {}));
export var ListUsersRequest;
(function (ListUsersRequest) {
    /**
     * @internal
     */
    ListUsersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUsersRequest || (ListUsersRequest = {}));
export var UserSummary;
(function (UserSummary) {
    /**
     * @internal
     */
    UserSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserSummary || (UserSummary = {}));
export var ListUsersResponse;
(function (ListUsersResponse) {
    /**
     * @internal
     */
    ListUsersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUsersResponse || (ListUsersResponse = {}));
export var ResumeContactRecordingRequest;
(function (ResumeContactRecordingRequest) {
    /**
     * @internal
     */
    ResumeContactRecordingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResumeContactRecordingRequest || (ResumeContactRecordingRequest = {}));
export var ResumeContactRecordingResponse;
(function (ResumeContactRecordingResponse) {
    /**
     * @internal
     */
    ResumeContactRecordingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResumeContactRecordingResponse || (ResumeContactRecordingResponse = {}));
export var ChatMessage;
(function (ChatMessage) {
    /**
     * @internal
     */
    ChatMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChatMessage || (ChatMessage = {}));
export var ParticipantDetails;
(function (ParticipantDetails) {
    /**
     * @internal
     */
    ParticipantDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParticipantDetails || (ParticipantDetails = {}));
export var StartChatContactRequest;
(function (StartChatContactRequest) {
    /**
     * @internal
     */
    StartChatContactRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartChatContactRequest || (StartChatContactRequest = {}));
export var StartChatContactResponse;
(function (StartChatContactResponse) {
    /**
     * @internal
     */
    StartChatContactResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartChatContactResponse || (StartChatContactResponse = {}));
export var VoiceRecordingTrack;
(function (VoiceRecordingTrack) {
    VoiceRecordingTrack["ALL"] = "ALL";
    VoiceRecordingTrack["FROM_AGENT"] = "FROM_AGENT";
    VoiceRecordingTrack["TO_AGENT"] = "TO_AGENT";
})(VoiceRecordingTrack || (VoiceRecordingTrack = {}));
export var VoiceRecordingConfiguration;
(function (VoiceRecordingConfiguration) {
    /**
     * @internal
     */
    VoiceRecordingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VoiceRecordingConfiguration || (VoiceRecordingConfiguration = {}));
export var StartContactRecordingRequest;
(function (StartContactRecordingRequest) {
    /**
     * @internal
     */
    StartContactRecordingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartContactRecordingRequest || (StartContactRecordingRequest = {}));
export var StartContactRecordingResponse;
(function (StartContactRecordingResponse) {
    /**
     * @internal
     */
    StartContactRecordingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartContactRecordingResponse || (StartContactRecordingResponse = {}));
export var DestinationNotAllowedException;
(function (DestinationNotAllowedException) {
    /**
     * @internal
     */
    DestinationNotAllowedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DestinationNotAllowedException || (DestinationNotAllowedException = {}));
export var OutboundContactNotPermittedException;
(function (OutboundContactNotPermittedException) {
    /**
     * @internal
     */
    OutboundContactNotPermittedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutboundContactNotPermittedException || (OutboundContactNotPermittedException = {}));
export var StartOutboundVoiceContactRequest;
(function (StartOutboundVoiceContactRequest) {
    /**
     * @internal
     */
    StartOutboundVoiceContactRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartOutboundVoiceContactRequest || (StartOutboundVoiceContactRequest = {}));
export var StartOutboundVoiceContactResponse;
(function (StartOutboundVoiceContactResponse) {
    /**
     * @internal
     */
    StartOutboundVoiceContactResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartOutboundVoiceContactResponse || (StartOutboundVoiceContactResponse = {}));
export var ReferenceType;
(function (ReferenceType) {
    ReferenceType["URL"] = "URL";
})(ReferenceType || (ReferenceType = {}));
export var Reference;
(function (Reference) {
    /**
     * @internal
     */
    Reference.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Reference || (Reference = {}));
export var StartTaskContactRequest;
(function (StartTaskContactRequest) {
    /**
     * @internal
     */
    StartTaskContactRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartTaskContactRequest || (StartTaskContactRequest = {}));
export var StartTaskContactResponse;
(function (StartTaskContactResponse) {
    /**
     * @internal
     */
    StartTaskContactResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartTaskContactResponse || (StartTaskContactResponse = {}));
export var ContactNotFoundException;
(function (ContactNotFoundException) {
    /**
     * @internal
     */
    ContactNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContactNotFoundException || (ContactNotFoundException = {}));
export var StopContactRequest;
(function (StopContactRequest) {
    /**
     * @internal
     */
    StopContactRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopContactRequest || (StopContactRequest = {}));
export var StopContactResponse;
(function (StopContactResponse) {
    /**
     * @internal
     */
    StopContactResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopContactResponse || (StopContactResponse = {}));
export var StopContactRecordingRequest;
(function (StopContactRecordingRequest) {
    /**
     * @internal
     */
    StopContactRecordingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopContactRecordingRequest || (StopContactRecordingRequest = {}));
export var StopContactRecordingResponse;
(function (StopContactRecordingResponse) {
    /**
     * @internal
     */
    StopContactRecordingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopContactRecordingResponse || (StopContactRecordingResponse = {}));
export var SuspendContactRecordingRequest;
(function (SuspendContactRecordingRequest) {
    /**
     * @internal
     */
    SuspendContactRecordingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SuspendContactRecordingRequest || (SuspendContactRecordingRequest = {}));
export var SuspendContactRecordingResponse;
(function (SuspendContactRecordingResponse) {
    /**
     * @internal
     */
    SuspendContactRecordingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SuspendContactRecordingResponse || (SuspendContactRecordingResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UpdateContactAttributesRequest;
(function (UpdateContactAttributesRequest) {
    /**
     * @internal
     */
    UpdateContactAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateContactAttributesRequest || (UpdateContactAttributesRequest = {}));
export var UpdateContactAttributesResponse;
(function (UpdateContactAttributesResponse) {
    /**
     * @internal
     */
    UpdateContactAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateContactAttributesResponse || (UpdateContactAttributesResponse = {}));
export var UpdateContactFlowContentRequest;
(function (UpdateContactFlowContentRequest) {
    /**
     * @internal
     */
    UpdateContactFlowContentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateContactFlowContentRequest || (UpdateContactFlowContentRequest = {}));
export var UpdateContactFlowNameRequest;
(function (UpdateContactFlowNameRequest) {
    /**
     * @internal
     */
    UpdateContactFlowNameRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateContactFlowNameRequest || (UpdateContactFlowNameRequest = {}));
export var UpdateInstanceAttributeRequest;
(function (UpdateInstanceAttributeRequest) {
    /**
     * @internal
     */
    UpdateInstanceAttributeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInstanceAttributeRequest || (UpdateInstanceAttributeRequest = {}));
export var UpdateInstanceStorageConfigRequest;
(function (UpdateInstanceStorageConfigRequest) {
    /**
     * @internal
     */
    UpdateInstanceStorageConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInstanceStorageConfigRequest || (UpdateInstanceStorageConfigRequest = {}));
export var UpdateQueueHoursOfOperationRequest;
(function (UpdateQueueHoursOfOperationRequest) {
    /**
     * @internal
     */
    UpdateQueueHoursOfOperationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateQueueHoursOfOperationRequest || (UpdateQueueHoursOfOperationRequest = {}));
export var UpdateQueueMaxContactsRequest;
(function (UpdateQueueMaxContactsRequest) {
    /**
     * @internal
     */
    UpdateQueueMaxContactsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateQueueMaxContactsRequest || (UpdateQueueMaxContactsRequest = {}));
export var UpdateQueueNameRequest;
(function (UpdateQueueNameRequest) {
    /**
     * @internal
     */
    UpdateQueueNameRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateQueueNameRequest || (UpdateQueueNameRequest = {}));
export var UpdateQueueOutboundCallerConfigRequest;
(function (UpdateQueueOutboundCallerConfigRequest) {
    /**
     * @internal
     */
    UpdateQueueOutboundCallerConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateQueueOutboundCallerConfigRequest || (UpdateQueueOutboundCallerConfigRequest = {}));
export var UpdateQueueStatusRequest;
(function (UpdateQueueStatusRequest) {
    /**
     * @internal
     */
    UpdateQueueStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateQueueStatusRequest || (UpdateQueueStatusRequest = {}));
export var UpdateQuickConnectConfigRequest;
(function (UpdateQuickConnectConfigRequest) {
    /**
     * @internal
     */
    UpdateQuickConnectConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateQuickConnectConfigRequest || (UpdateQuickConnectConfigRequest = {}));
export var UpdateQuickConnectNameRequest;
(function (UpdateQuickConnectNameRequest) {
    /**
     * @internal
     */
    UpdateQuickConnectNameRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateQuickConnectNameRequest || (UpdateQuickConnectNameRequest = {}));
export var UpdateRoutingProfileConcurrencyRequest;
(function (UpdateRoutingProfileConcurrencyRequest) {
    /**
     * @internal
     */
    UpdateRoutingProfileConcurrencyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRoutingProfileConcurrencyRequest || (UpdateRoutingProfileConcurrencyRequest = {}));
export var UpdateRoutingProfileDefaultOutboundQueueRequest;
(function (UpdateRoutingProfileDefaultOutboundQueueRequest) {
    /**
     * @internal
     */
    UpdateRoutingProfileDefaultOutboundQueueRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRoutingProfileDefaultOutboundQueueRequest || (UpdateRoutingProfileDefaultOutboundQueueRequest = {}));
export var UpdateRoutingProfileNameRequest;
(function (UpdateRoutingProfileNameRequest) {
    /**
     * @internal
     */
    UpdateRoutingProfileNameRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRoutingProfileNameRequest || (UpdateRoutingProfileNameRequest = {}));
export var UpdateRoutingProfileQueuesRequest;
(function (UpdateRoutingProfileQueuesRequest) {
    /**
     * @internal
     */
    UpdateRoutingProfileQueuesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRoutingProfileQueuesRequest || (UpdateRoutingProfileQueuesRequest = {}));
export var UpdateUserHierarchyRequest;
(function (UpdateUserHierarchyRequest) {
    /**
     * @internal
     */
    UpdateUserHierarchyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserHierarchyRequest || (UpdateUserHierarchyRequest = {}));
export var UpdateUserHierarchyGroupNameRequest;
(function (UpdateUserHierarchyGroupNameRequest) {
    /**
     * @internal
     */
    UpdateUserHierarchyGroupNameRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserHierarchyGroupNameRequest || (UpdateUserHierarchyGroupNameRequest = {}));
export var HierarchyLevelUpdate;
(function (HierarchyLevelUpdate) {
    /**
     * @internal
     */
    HierarchyLevelUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HierarchyLevelUpdate || (HierarchyLevelUpdate = {}));
export var HierarchyStructureUpdate;
(function (HierarchyStructureUpdate) {
    /**
     * @internal
     */
    HierarchyStructureUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HierarchyStructureUpdate || (HierarchyStructureUpdate = {}));
export var UpdateUserHierarchyStructureRequest;
(function (UpdateUserHierarchyStructureRequest) {
    /**
     * @internal
     */
    UpdateUserHierarchyStructureRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserHierarchyStructureRequest || (UpdateUserHierarchyStructureRequest = {}));
export var UpdateUserIdentityInfoRequest;
(function (UpdateUserIdentityInfoRequest) {
    /**
     * @internal
     */
    UpdateUserIdentityInfoRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserIdentityInfoRequest || (UpdateUserIdentityInfoRequest = {}));
export var UpdateUserPhoneConfigRequest;
(function (UpdateUserPhoneConfigRequest) {
    /**
     * @internal
     */
    UpdateUserPhoneConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserPhoneConfigRequest || (UpdateUserPhoneConfigRequest = {}));
export var UpdateUserRoutingProfileRequest;
(function (UpdateUserRoutingProfileRequest) {
    /**
     * @internal
     */
    UpdateUserRoutingProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserRoutingProfileRequest || (UpdateUserRoutingProfileRequest = {}));
export var UpdateUserSecurityProfilesRequest;
(function (UpdateUserSecurityProfilesRequest) {
    /**
     * @internal
     */
    UpdateUserSecurityProfilesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserSecurityProfilesRequest || (UpdateUserSecurityProfilesRequest = {}));
//# sourceMappingURL=models_0.js.map