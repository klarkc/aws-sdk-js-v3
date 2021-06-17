"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQuickConnectConfig = exports.QuickConnectType = exports.QueueQuickConnectConfig = exports.PhoneNumberQuickConnectConfig = exports.CreateQueueResponse = exports.CreateQueueRequest = exports.OutboundCallerConfig = exports.CreateIntegrationAssociationResponse = exports.CreateIntegrationAssociationRequest = exports.SourceType = exports.IntegrationType = exports.CreateInstanceResponse = exports.CreateInstanceRequest = exports.DirectoryType = exports.InvalidContactFlowException = exports.ProblemDetail = exports.DuplicateResourceException = exports.CreateContactFlowResponse = exports.CreateContactFlowRequest = exports.ContactFlowType = exports.AssociateSecurityKeyResponse = exports.AssociateSecurityKeyRequest = exports.AssociateRoutingProfileQueuesRequest = exports.RoutingProfileQueueConfig = exports.RoutingProfileQueueReference = exports.Channel = exports.LimitExceededException = exports.AssociateQueueQuickConnectsRequest = exports.AssociateLexBotRequest = exports.LexBot = exports.AssociateLambdaFunctionRequest = exports.AssociateInstanceStorageConfigResponse = exports.AssociateInstanceStorageConfigRequest = exports.InstanceStorageConfig = exports.StorageType = exports.S3Config = exports.KinesisVideoStreamConfig = exports.EncryptionConfig = exports.EncryptionType = exports.KinesisStreamConfig = exports.KinesisFirehoseConfig = exports.InstanceStorageResourceType = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.ResourceConflictException = exports.InvalidRequestException = exports.InvalidParameterException = exports.InternalServiceException = exports.AssociateApprovedOriginRequest = void 0;
exports.DescribeQuickConnectRequest = exports.DescribeQueueResponse = exports.Queue = exports.QueueStatus = exports.DescribeQueueRequest = exports.DescribeInstanceStorageConfigResponse = exports.DescribeInstanceStorageConfigRequest = exports.DescribeInstanceAttributeResponse = exports.Attribute = exports.DescribeInstanceAttributeRequest = exports.InstanceAttributeType = exports.DescribeInstanceResponse = exports.Instance = exports.InstanceStatusReason = exports.InstanceStatus = exports.DescribeInstanceRequest = exports.DescribeHoursOfOperationResponse = exports.HoursOfOperation = exports.HoursOfOperationConfig = exports.HoursOfOperationTimeSlice = exports.HoursOfOperationDays = exports.DescribeHoursOfOperationRequest = exports.DescribeContactFlowResponse = exports.ContactFlow = exports.DescribeContactFlowRequest = exports.ContactFlowNotPublishedException = exports.ResourceInUseException = exports.ResourceType = exports.DeleteUserHierarchyGroupRequest = exports.DeleteUserRequest = exports.DeleteUseCaseRequest = exports.DeleteQuickConnectRequest = exports.DeleteIntegrationAssociationRequest = exports.DeleteInstanceRequest = exports.CreateUserHierarchyGroupResponse = exports.CreateUserHierarchyGroupRequest = exports.CreateUserResponse = exports.CreateUserRequest = exports.UserPhoneConfig = exports.PhoneType = exports.UserIdentityInfo = exports.CreateUseCaseResponse = exports.CreateUseCaseRequest = exports.UseCaseType = exports.CreateRoutingProfileResponse = exports.CreateRoutingProfileRequest = exports.MediaConcurrency = exports.CreateQuickConnectResponse = exports.CreateQuickConnectRequest = exports.QuickConnectConfig = void 0;
exports.GetMetricDataResponse = exports.HistoricalMetricResult = exports.HistoricalMetricData = exports.GetMetricDataRequest = exports.HistoricalMetric = exports.Threshold = exports.Comparison = exports.Statistic = exports.HistoricalMetricName = exports.UserNotFoundException = exports.GetFederationTokenResponse = exports.Credentials = exports.GetFederationTokenRequest = exports.GetCurrentMetricDataResponse = exports.CurrentMetricResult = exports.Dimensions = exports.QueueReference = exports.CurrentMetricData = exports.GetCurrentMetricDataRequest = exports.Grouping = exports.Filters = exports.CurrentMetric = exports.Unit = exports.CurrentMetricName = exports.GetContactAttributesResponse = exports.GetContactAttributesRequest = exports.DisassociateSecurityKeyRequest = exports.DisassociateRoutingProfileQueuesRequest = exports.DisassociateQueueQuickConnectsRequest = exports.DisassociateLexBotRequest = exports.DisassociateLambdaFunctionRequest = exports.DisassociateInstanceStorageConfigRequest = exports.DisassociateApprovedOriginRequest = exports.DescribeUserHierarchyStructureResponse = exports.HierarchyStructure = exports.HierarchyLevel = exports.DescribeUserHierarchyStructureRequest = exports.DescribeUserHierarchyGroupResponse = exports.HierarchyGroup = exports.HierarchyPath = exports.HierarchyGroupSummary = exports.DescribeUserHierarchyGroupRequest = exports.DescribeUserResponse = exports.User = exports.DescribeUserRequest = exports.DescribeRoutingProfileResponse = exports.RoutingProfile = exports.DescribeRoutingProfileRequest = exports.DescribeQuickConnectResponse = exports.QuickConnect = void 0;
exports.SecurityProfileSummary = exports.ListSecurityProfilesRequest = exports.ListSecurityKeysResponse = exports.SecurityKey = exports.ListSecurityKeysRequest = exports.ListRoutingProfilesResponse = exports.RoutingProfileSummary = exports.ListRoutingProfilesRequest = exports.ListRoutingProfileQueuesResponse = exports.RoutingProfileQueueConfigSummary = exports.ListRoutingProfileQueuesRequest = exports.ListQuickConnectsResponse = exports.ListQuickConnectsRequest = exports.ListQueuesResponse = exports.QueueSummary = exports.ListQueuesRequest = exports.QueueType = exports.ListQueueQuickConnectsResponse = exports.QuickConnectSummary = exports.ListQueueQuickConnectsRequest = exports.ListPromptsResponse = exports.PromptSummary = exports.ListPromptsRequest = exports.ListPhoneNumbersResponse = exports.PhoneNumberSummary = exports.ListPhoneNumbersRequest = exports.PhoneNumberType = exports.PhoneNumberCountryCode = exports.ListLexBotsResponse = exports.ListLexBotsRequest = exports.ListLambdaFunctionsResponse = exports.ListLambdaFunctionsRequest = exports.ListIntegrationAssociationsResponse = exports.IntegrationAssociationSummary = exports.ListIntegrationAssociationsRequest = exports.ListInstanceStorageConfigsResponse = exports.ListInstanceStorageConfigsRequest = exports.ListInstancesResponse = exports.InstanceSummary = exports.ListInstancesRequest = exports.ListInstanceAttributesResponse = exports.ListInstanceAttributesRequest = exports.ListHoursOfOperationsResponse = exports.HoursOfOperationSummary = exports.ListHoursOfOperationsRequest = exports.ListContactFlowsResponse = exports.ContactFlowSummary = exports.ListContactFlowsRequest = exports.ListApprovedOriginsResponse = exports.ListApprovedOriginsRequest = void 0;
exports.UpdateQuickConnectConfigRequest = exports.UpdateQueueStatusRequest = exports.UpdateQueueOutboundCallerConfigRequest = exports.UpdateQueueNameRequest = exports.UpdateQueueMaxContactsRequest = exports.UpdateQueueHoursOfOperationRequest = exports.UpdateInstanceStorageConfigRequest = exports.UpdateInstanceAttributeRequest = exports.UpdateContactFlowNameRequest = exports.UpdateContactFlowContentRequest = exports.UpdateContactAttributesResponse = exports.UpdateContactAttributesRequest = exports.UntagResourceRequest = exports.TagResourceRequest = exports.SuspendContactRecordingResponse = exports.SuspendContactRecordingRequest = exports.StopContactRecordingResponse = exports.StopContactRecordingRequest = exports.StopContactResponse = exports.StopContactRequest = exports.ContactNotFoundException = exports.StartTaskContactResponse = exports.StartTaskContactRequest = exports.Reference = exports.ReferenceType = exports.StartOutboundVoiceContactResponse = exports.StartOutboundVoiceContactRequest = exports.OutboundContactNotPermittedException = exports.DestinationNotAllowedException = exports.StartContactRecordingResponse = exports.StartContactRecordingRequest = exports.VoiceRecordingConfiguration = exports.VoiceRecordingTrack = exports.StartChatContactResponse = exports.StartChatContactRequest = exports.ParticipantDetails = exports.ChatMessage = exports.ResumeContactRecordingResponse = exports.ResumeContactRecordingRequest = exports.ListUsersResponse = exports.UserSummary = exports.ListUsersRequest = exports.ListUserHierarchyGroupsResponse = exports.ListUserHierarchyGroupsRequest = exports.ListUseCasesResponse = exports.UseCase = exports.ListUseCasesRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListSecurityProfilesResponse = void 0;
exports.UpdateUserSecurityProfilesRequest = exports.UpdateUserRoutingProfileRequest = exports.UpdateUserPhoneConfigRequest = exports.UpdateUserIdentityInfoRequest = exports.UpdateUserHierarchyStructureRequest = exports.HierarchyStructureUpdate = exports.HierarchyLevelUpdate = exports.UpdateUserHierarchyGroupNameRequest = exports.UpdateUserHierarchyRequest = exports.UpdateRoutingProfileQueuesRequest = exports.UpdateRoutingProfileNameRequest = exports.UpdateRoutingProfileDefaultOutboundQueueRequest = exports.UpdateRoutingProfileConcurrencyRequest = exports.UpdateQuickConnectNameRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AssociateApprovedOriginRequest;
(function (AssociateApprovedOriginRequest) {
    /**
     * @internal
     */
    AssociateApprovedOriginRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateApprovedOriginRequest = exports.AssociateApprovedOriginRequest || (exports.AssociateApprovedOriginRequest = {}));
var InternalServiceException;
(function (InternalServiceException) {
    /**
     * @internal
     */
    InternalServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ResourceConflictException;
(function (ResourceConflictException) {
    /**
     * @internal
     */
    ResourceConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceConflictException = exports.ResourceConflictException || (exports.ResourceConflictException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var InstanceStorageResourceType;
(function (InstanceStorageResourceType) {
    InstanceStorageResourceType["AGENT_EVENTS"] = "AGENT_EVENTS";
    InstanceStorageResourceType["CALL_RECORDINGS"] = "CALL_RECORDINGS";
    InstanceStorageResourceType["CHAT_TRANSCRIPTS"] = "CHAT_TRANSCRIPTS";
    InstanceStorageResourceType["CONTACT_TRACE_RECORDS"] = "CONTACT_TRACE_RECORDS";
    InstanceStorageResourceType["MEDIA_STREAMS"] = "MEDIA_STREAMS";
    InstanceStorageResourceType["SCHEDULED_REPORTS"] = "SCHEDULED_REPORTS";
})(InstanceStorageResourceType = exports.InstanceStorageResourceType || (exports.InstanceStorageResourceType = {}));
var KinesisFirehoseConfig;
(function (KinesisFirehoseConfig) {
    /**
     * @internal
     */
    KinesisFirehoseConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisFirehoseConfig = exports.KinesisFirehoseConfig || (exports.KinesisFirehoseConfig = {}));
var KinesisStreamConfig;
(function (KinesisStreamConfig) {
    /**
     * @internal
     */
    KinesisStreamConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisStreamConfig = exports.KinesisStreamConfig || (exports.KinesisStreamConfig = {}));
var EncryptionType;
(function (EncryptionType) {
    EncryptionType["KMS"] = "KMS";
})(EncryptionType = exports.EncryptionType || (exports.EncryptionType = {}));
var EncryptionConfig;
(function (EncryptionConfig) {
    /**
     * @internal
     */
    EncryptionConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionConfig = exports.EncryptionConfig || (exports.EncryptionConfig = {}));
var KinesisVideoStreamConfig;
(function (KinesisVideoStreamConfig) {
    /**
     * @internal
     */
    KinesisVideoStreamConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisVideoStreamConfig = exports.KinesisVideoStreamConfig || (exports.KinesisVideoStreamConfig = {}));
var S3Config;
(function (S3Config) {
    /**
     * @internal
     */
    S3Config.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Config = exports.S3Config || (exports.S3Config = {}));
var StorageType;
(function (StorageType) {
    StorageType["KINESIS_FIREHOSE"] = "KINESIS_FIREHOSE";
    StorageType["KINESIS_STREAM"] = "KINESIS_STREAM";
    StorageType["KINESIS_VIDEO_STREAM"] = "KINESIS_VIDEO_STREAM";
    StorageType["S3"] = "S3";
})(StorageType = exports.StorageType || (exports.StorageType = {}));
var InstanceStorageConfig;
(function (InstanceStorageConfig) {
    /**
     * @internal
     */
    InstanceStorageConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceStorageConfig = exports.InstanceStorageConfig || (exports.InstanceStorageConfig = {}));
var AssociateInstanceStorageConfigRequest;
(function (AssociateInstanceStorageConfigRequest) {
    /**
     * @internal
     */
    AssociateInstanceStorageConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateInstanceStorageConfigRequest = exports.AssociateInstanceStorageConfigRequest || (exports.AssociateInstanceStorageConfigRequest = {}));
var AssociateInstanceStorageConfigResponse;
(function (AssociateInstanceStorageConfigResponse) {
    /**
     * @internal
     */
    AssociateInstanceStorageConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateInstanceStorageConfigResponse = exports.AssociateInstanceStorageConfigResponse || (exports.AssociateInstanceStorageConfigResponse = {}));
var AssociateLambdaFunctionRequest;
(function (AssociateLambdaFunctionRequest) {
    /**
     * @internal
     */
    AssociateLambdaFunctionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateLambdaFunctionRequest = exports.AssociateLambdaFunctionRequest || (exports.AssociateLambdaFunctionRequest = {}));
var LexBot;
(function (LexBot) {
    /**
     * @internal
     */
    LexBot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LexBot = exports.LexBot || (exports.LexBot = {}));
var AssociateLexBotRequest;
(function (AssociateLexBotRequest) {
    /**
     * @internal
     */
    AssociateLexBotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateLexBotRequest = exports.AssociateLexBotRequest || (exports.AssociateLexBotRequest = {}));
var AssociateQueueQuickConnectsRequest;
(function (AssociateQueueQuickConnectsRequest) {
    /**
     * @internal
     */
    AssociateQueueQuickConnectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateQueueQuickConnectsRequest = exports.AssociateQueueQuickConnectsRequest || (exports.AssociateQueueQuickConnectsRequest = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var Channel;
(function (Channel) {
    Channel["CHAT"] = "CHAT";
    Channel["TASK"] = "TASK";
    Channel["VOICE"] = "VOICE";
})(Channel = exports.Channel || (exports.Channel = {}));
var RoutingProfileQueueReference;
(function (RoutingProfileQueueReference) {
    /**
     * @internal
     */
    RoutingProfileQueueReference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RoutingProfileQueueReference = exports.RoutingProfileQueueReference || (exports.RoutingProfileQueueReference = {}));
var RoutingProfileQueueConfig;
(function (RoutingProfileQueueConfig) {
    /**
     * @internal
     */
    RoutingProfileQueueConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RoutingProfileQueueConfig = exports.RoutingProfileQueueConfig || (exports.RoutingProfileQueueConfig = {}));
var AssociateRoutingProfileQueuesRequest;
(function (AssociateRoutingProfileQueuesRequest) {
    /**
     * @internal
     */
    AssociateRoutingProfileQueuesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateRoutingProfileQueuesRequest = exports.AssociateRoutingProfileQueuesRequest || (exports.AssociateRoutingProfileQueuesRequest = {}));
var AssociateSecurityKeyRequest;
(function (AssociateSecurityKeyRequest) {
    /**
     * @internal
     */
    AssociateSecurityKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateSecurityKeyRequest = exports.AssociateSecurityKeyRequest || (exports.AssociateSecurityKeyRequest = {}));
var AssociateSecurityKeyResponse;
(function (AssociateSecurityKeyResponse) {
    /**
     * @internal
     */
    AssociateSecurityKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateSecurityKeyResponse = exports.AssociateSecurityKeyResponse || (exports.AssociateSecurityKeyResponse = {}));
var ContactFlowType;
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
})(ContactFlowType = exports.ContactFlowType || (exports.ContactFlowType = {}));
var CreateContactFlowRequest;
(function (CreateContactFlowRequest) {
    /**
     * @internal
     */
    CreateContactFlowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContactFlowRequest = exports.CreateContactFlowRequest || (exports.CreateContactFlowRequest = {}));
var CreateContactFlowResponse;
(function (CreateContactFlowResponse) {
    /**
     * @internal
     */
    CreateContactFlowResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContactFlowResponse = exports.CreateContactFlowResponse || (exports.CreateContactFlowResponse = {}));
var DuplicateResourceException;
(function (DuplicateResourceException) {
    /**
     * @internal
     */
    DuplicateResourceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateResourceException = exports.DuplicateResourceException || (exports.DuplicateResourceException = {}));
var ProblemDetail;
(function (ProblemDetail) {
    /**
     * @internal
     */
    ProblemDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProblemDetail = exports.ProblemDetail || (exports.ProblemDetail = {}));
var InvalidContactFlowException;
(function (InvalidContactFlowException) {
    /**
     * @internal
     */
    InvalidContactFlowException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidContactFlowException = exports.InvalidContactFlowException || (exports.InvalidContactFlowException = {}));
var DirectoryType;
(function (DirectoryType) {
    DirectoryType["CONNECT_MANAGED"] = "CONNECT_MANAGED";
    DirectoryType["EXISTING_DIRECTORY"] = "EXISTING_DIRECTORY";
    DirectoryType["SAML"] = "SAML";
})(DirectoryType = exports.DirectoryType || (exports.DirectoryType = {}));
var CreateInstanceRequest;
(function (CreateInstanceRequest) {
    /**
     * @internal
     */
    CreateInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.InstanceAlias && { InstanceAlias: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateInstanceRequest = exports.CreateInstanceRequest || (exports.CreateInstanceRequest = {}));
var CreateInstanceResponse;
(function (CreateInstanceResponse) {
    /**
     * @internal
     */
    CreateInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstanceResponse = exports.CreateInstanceResponse || (exports.CreateInstanceResponse = {}));
var IntegrationType;
(function (IntegrationType) {
    IntegrationType["EVENT"] = "EVENT";
})(IntegrationType = exports.IntegrationType || (exports.IntegrationType = {}));
var SourceType;
(function (SourceType) {
    SourceType["SALESFORCE"] = "SALESFORCE";
    SourceType["ZENDESK"] = "ZENDESK";
})(SourceType = exports.SourceType || (exports.SourceType = {}));
var CreateIntegrationAssociationRequest;
(function (CreateIntegrationAssociationRequest) {
    /**
     * @internal
     */
    CreateIntegrationAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIntegrationAssociationRequest = exports.CreateIntegrationAssociationRequest || (exports.CreateIntegrationAssociationRequest = {}));
var CreateIntegrationAssociationResponse;
(function (CreateIntegrationAssociationResponse) {
    /**
     * @internal
     */
    CreateIntegrationAssociationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIntegrationAssociationResponse = exports.CreateIntegrationAssociationResponse || (exports.CreateIntegrationAssociationResponse = {}));
var OutboundCallerConfig;
(function (OutboundCallerConfig) {
    /**
     * @internal
     */
    OutboundCallerConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutboundCallerConfig = exports.OutboundCallerConfig || (exports.OutboundCallerConfig = {}));
var CreateQueueRequest;
(function (CreateQueueRequest) {
    /**
     * @internal
     */
    CreateQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQueueRequest = exports.CreateQueueRequest || (exports.CreateQueueRequest = {}));
var CreateQueueResponse;
(function (CreateQueueResponse) {
    /**
     * @internal
     */
    CreateQueueResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQueueResponse = exports.CreateQueueResponse || (exports.CreateQueueResponse = {}));
var PhoneNumberQuickConnectConfig;
(function (PhoneNumberQuickConnectConfig) {
    /**
     * @internal
     */
    PhoneNumberQuickConnectConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PhoneNumberQuickConnectConfig = exports.PhoneNumberQuickConnectConfig || (exports.PhoneNumberQuickConnectConfig = {}));
var QueueQuickConnectConfig;
(function (QueueQuickConnectConfig) {
    /**
     * @internal
     */
    QueueQuickConnectConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueueQuickConnectConfig = exports.QueueQuickConnectConfig || (exports.QueueQuickConnectConfig = {}));
var QuickConnectType;
(function (QuickConnectType) {
    QuickConnectType["PHONE_NUMBER"] = "PHONE_NUMBER";
    QuickConnectType["QUEUE"] = "QUEUE";
    QuickConnectType["USER"] = "USER";
})(QuickConnectType = exports.QuickConnectType || (exports.QuickConnectType = {}));
var UserQuickConnectConfig;
(function (UserQuickConnectConfig) {
    /**
     * @internal
     */
    UserQuickConnectConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserQuickConnectConfig = exports.UserQuickConnectConfig || (exports.UserQuickConnectConfig = {}));
var QuickConnectConfig;
(function (QuickConnectConfig) {
    /**
     * @internal
     */
    QuickConnectConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QuickConnectConfig = exports.QuickConnectConfig || (exports.QuickConnectConfig = {}));
var CreateQuickConnectRequest;
(function (CreateQuickConnectRequest) {
    /**
     * @internal
     */
    CreateQuickConnectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQuickConnectRequest = exports.CreateQuickConnectRequest || (exports.CreateQuickConnectRequest = {}));
var CreateQuickConnectResponse;
(function (CreateQuickConnectResponse) {
    /**
     * @internal
     */
    CreateQuickConnectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQuickConnectResponse = exports.CreateQuickConnectResponse || (exports.CreateQuickConnectResponse = {}));
var MediaConcurrency;
(function (MediaConcurrency) {
    /**
     * @internal
     */
    MediaConcurrency.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MediaConcurrency = exports.MediaConcurrency || (exports.MediaConcurrency = {}));
var CreateRoutingProfileRequest;
(function (CreateRoutingProfileRequest) {
    /**
     * @internal
     */
    CreateRoutingProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRoutingProfileRequest = exports.CreateRoutingProfileRequest || (exports.CreateRoutingProfileRequest = {}));
var CreateRoutingProfileResponse;
(function (CreateRoutingProfileResponse) {
    /**
     * @internal
     */
    CreateRoutingProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRoutingProfileResponse = exports.CreateRoutingProfileResponse || (exports.CreateRoutingProfileResponse = {}));
var UseCaseType;
(function (UseCaseType) {
    UseCaseType["RULES_EVALUATION"] = "RULES_EVALUATION";
})(UseCaseType = exports.UseCaseType || (exports.UseCaseType = {}));
var CreateUseCaseRequest;
(function (CreateUseCaseRequest) {
    /**
     * @internal
     */
    CreateUseCaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUseCaseRequest = exports.CreateUseCaseRequest || (exports.CreateUseCaseRequest = {}));
var CreateUseCaseResponse;
(function (CreateUseCaseResponse) {
    /**
     * @internal
     */
    CreateUseCaseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUseCaseResponse = exports.CreateUseCaseResponse || (exports.CreateUseCaseResponse = {}));
var UserIdentityInfo;
(function (UserIdentityInfo) {
    /**
     * @internal
     */
    UserIdentityInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserIdentityInfo = exports.UserIdentityInfo || (exports.UserIdentityInfo = {}));
var PhoneType;
(function (PhoneType) {
    PhoneType["DESK_PHONE"] = "DESK_PHONE";
    PhoneType["SOFT_PHONE"] = "SOFT_PHONE";
})(PhoneType = exports.PhoneType || (exports.PhoneType = {}));
var UserPhoneConfig;
(function (UserPhoneConfig) {
    /**
     * @internal
     */
    UserPhoneConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserPhoneConfig = exports.UserPhoneConfig || (exports.UserPhoneConfig = {}));
var CreateUserRequest;
(function (CreateUserRequest) {
    /**
     * @internal
     */
    CreateUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserRequest = exports.CreateUserRequest || (exports.CreateUserRequest = {}));
var CreateUserResponse;
(function (CreateUserResponse) {
    /**
     * @internal
     */
    CreateUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserResponse = exports.CreateUserResponse || (exports.CreateUserResponse = {}));
var CreateUserHierarchyGroupRequest;
(function (CreateUserHierarchyGroupRequest) {
    /**
     * @internal
     */
    CreateUserHierarchyGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserHierarchyGroupRequest = exports.CreateUserHierarchyGroupRequest || (exports.CreateUserHierarchyGroupRequest = {}));
var CreateUserHierarchyGroupResponse;
(function (CreateUserHierarchyGroupResponse) {
    /**
     * @internal
     */
    CreateUserHierarchyGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserHierarchyGroupResponse = exports.CreateUserHierarchyGroupResponse || (exports.CreateUserHierarchyGroupResponse = {}));
var DeleteInstanceRequest;
(function (DeleteInstanceRequest) {
    /**
     * @internal
     */
    DeleteInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInstanceRequest = exports.DeleteInstanceRequest || (exports.DeleteInstanceRequest = {}));
var DeleteIntegrationAssociationRequest;
(function (DeleteIntegrationAssociationRequest) {
    /**
     * @internal
     */
    DeleteIntegrationAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIntegrationAssociationRequest = exports.DeleteIntegrationAssociationRequest || (exports.DeleteIntegrationAssociationRequest = {}));
var DeleteQuickConnectRequest;
(function (DeleteQuickConnectRequest) {
    /**
     * @internal
     */
    DeleteQuickConnectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteQuickConnectRequest = exports.DeleteQuickConnectRequest || (exports.DeleteQuickConnectRequest = {}));
var DeleteUseCaseRequest;
(function (DeleteUseCaseRequest) {
    /**
     * @internal
     */
    DeleteUseCaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUseCaseRequest = exports.DeleteUseCaseRequest || (exports.DeleteUseCaseRequest = {}));
var DeleteUserRequest;
(function (DeleteUserRequest) {
    /**
     * @internal
     */
    DeleteUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserRequest = exports.DeleteUserRequest || (exports.DeleteUserRequest = {}));
var DeleteUserHierarchyGroupRequest;
(function (DeleteUserHierarchyGroupRequest) {
    /**
     * @internal
     */
    DeleteUserHierarchyGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserHierarchyGroupRequest = exports.DeleteUserHierarchyGroupRequest || (exports.DeleteUserHierarchyGroupRequest = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["CONTACT"] = "CONTACT";
    ResourceType["CONTACT_FLOW"] = "CONTACT_FLOW";
    ResourceType["HIERARCHY_GROUP"] = "HIERARCHY_GROUP";
    ResourceType["HIERARCHY_LEVEL"] = "HIERARCHY_LEVEL";
    ResourceType["INSTANCE"] = "INSTANCE";
    ResourceType["PARTICIPANT"] = "PARTICIPANT";
    ResourceType["USER"] = "USER";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ContactFlowNotPublishedException;
(function (ContactFlowNotPublishedException) {
    /**
     * @internal
     */
    ContactFlowNotPublishedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContactFlowNotPublishedException = exports.ContactFlowNotPublishedException || (exports.ContactFlowNotPublishedException = {}));
var DescribeContactFlowRequest;
(function (DescribeContactFlowRequest) {
    /**
     * @internal
     */
    DescribeContactFlowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeContactFlowRequest = exports.DescribeContactFlowRequest || (exports.DescribeContactFlowRequest = {}));
var ContactFlow;
(function (ContactFlow) {
    /**
     * @internal
     */
    ContactFlow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContactFlow = exports.ContactFlow || (exports.ContactFlow = {}));
var DescribeContactFlowResponse;
(function (DescribeContactFlowResponse) {
    /**
     * @internal
     */
    DescribeContactFlowResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeContactFlowResponse = exports.DescribeContactFlowResponse || (exports.DescribeContactFlowResponse = {}));
var DescribeHoursOfOperationRequest;
(function (DescribeHoursOfOperationRequest) {
    /**
     * @internal
     */
    DescribeHoursOfOperationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHoursOfOperationRequest = exports.DescribeHoursOfOperationRequest || (exports.DescribeHoursOfOperationRequest = {}));
var HoursOfOperationDays;
(function (HoursOfOperationDays) {
    HoursOfOperationDays["FRIDAY"] = "FRIDAY";
    HoursOfOperationDays["MONDAY"] = "MONDAY";
    HoursOfOperationDays["SATURDAY"] = "SATURDAY";
    HoursOfOperationDays["SUNDAY"] = "SUNDAY";
    HoursOfOperationDays["THURSDAY"] = "THURSDAY";
    HoursOfOperationDays["TUESDAY"] = "TUESDAY";
    HoursOfOperationDays["WEDNESDAY"] = "WEDNESDAY";
})(HoursOfOperationDays = exports.HoursOfOperationDays || (exports.HoursOfOperationDays = {}));
var HoursOfOperationTimeSlice;
(function (HoursOfOperationTimeSlice) {
    /**
     * @internal
     */
    HoursOfOperationTimeSlice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HoursOfOperationTimeSlice = exports.HoursOfOperationTimeSlice || (exports.HoursOfOperationTimeSlice = {}));
var HoursOfOperationConfig;
(function (HoursOfOperationConfig) {
    /**
     * @internal
     */
    HoursOfOperationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HoursOfOperationConfig = exports.HoursOfOperationConfig || (exports.HoursOfOperationConfig = {}));
var HoursOfOperation;
(function (HoursOfOperation) {
    /**
     * @internal
     */
    HoursOfOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HoursOfOperation = exports.HoursOfOperation || (exports.HoursOfOperation = {}));
var DescribeHoursOfOperationResponse;
(function (DescribeHoursOfOperationResponse) {
    /**
     * @internal
     */
    DescribeHoursOfOperationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHoursOfOperationResponse = exports.DescribeHoursOfOperationResponse || (exports.DescribeHoursOfOperationResponse = {}));
var DescribeInstanceRequest;
(function (DescribeInstanceRequest) {
    /**
     * @internal
     */
    DescribeInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceRequest = exports.DescribeInstanceRequest || (exports.DescribeInstanceRequest = {}));
var InstanceStatus;
(function (InstanceStatus) {
    InstanceStatus["ACTIVE"] = "ACTIVE";
    InstanceStatus["CREATION_FAILED"] = "CREATION_FAILED";
    InstanceStatus["CREATION_IN_PROGRESS"] = "CREATION_IN_PROGRESS";
})(InstanceStatus = exports.InstanceStatus || (exports.InstanceStatus = {}));
var InstanceStatusReason;
(function (InstanceStatusReason) {
    /**
     * @internal
     */
    InstanceStatusReason.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceStatusReason = exports.InstanceStatusReason || (exports.InstanceStatusReason = {}));
var Instance;
(function (Instance) {
    /**
     * @internal
     */
    Instance.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.InstanceAlias && { InstanceAlias: smithy_client_1.SENSITIVE_STRING }),
    });
})(Instance = exports.Instance || (exports.Instance = {}));
var DescribeInstanceResponse;
(function (DescribeInstanceResponse) {
    /**
     * @internal
     */
    DescribeInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Instance && { Instance: Instance.filterSensitiveLog(obj.Instance) }),
    });
})(DescribeInstanceResponse = exports.DescribeInstanceResponse || (exports.DescribeInstanceResponse = {}));
var InstanceAttributeType;
(function (InstanceAttributeType) {
    InstanceAttributeType["AUTO_RESOLVE_BEST_VOICES"] = "AUTO_RESOLVE_BEST_VOICES";
    InstanceAttributeType["CONTACTFLOW_LOGS"] = "CONTACTFLOW_LOGS";
    InstanceAttributeType["CONTACT_LENS"] = "CONTACT_LENS";
    InstanceAttributeType["EARLY_MEDIA"] = "EARLY_MEDIA";
    InstanceAttributeType["INBOUND_CALLS"] = "INBOUND_CALLS";
    InstanceAttributeType["OUTBOUND_CALLS"] = "OUTBOUND_CALLS";
    InstanceAttributeType["USE_CUSTOM_TTS_VOICES"] = "USE_CUSTOM_TTS_VOICES";
})(InstanceAttributeType = exports.InstanceAttributeType || (exports.InstanceAttributeType = {}));
var DescribeInstanceAttributeRequest;
(function (DescribeInstanceAttributeRequest) {
    /**
     * @internal
     */
    DescribeInstanceAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceAttributeRequest = exports.DescribeInstanceAttributeRequest || (exports.DescribeInstanceAttributeRequest = {}));
var Attribute;
(function (Attribute) {
    /**
     * @internal
     */
    Attribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Attribute = exports.Attribute || (exports.Attribute = {}));
var DescribeInstanceAttributeResponse;
(function (DescribeInstanceAttributeResponse) {
    /**
     * @internal
     */
    DescribeInstanceAttributeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceAttributeResponse = exports.DescribeInstanceAttributeResponse || (exports.DescribeInstanceAttributeResponse = {}));
var DescribeInstanceStorageConfigRequest;
(function (DescribeInstanceStorageConfigRequest) {
    /**
     * @internal
     */
    DescribeInstanceStorageConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceStorageConfigRequest = exports.DescribeInstanceStorageConfigRequest || (exports.DescribeInstanceStorageConfigRequest = {}));
var DescribeInstanceStorageConfigResponse;
(function (DescribeInstanceStorageConfigResponse) {
    /**
     * @internal
     */
    DescribeInstanceStorageConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceStorageConfigResponse = exports.DescribeInstanceStorageConfigResponse || (exports.DescribeInstanceStorageConfigResponse = {}));
var DescribeQueueRequest;
(function (DescribeQueueRequest) {
    /**
     * @internal
     */
    DescribeQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeQueueRequest = exports.DescribeQueueRequest || (exports.DescribeQueueRequest = {}));
var QueueStatus;
(function (QueueStatus) {
    QueueStatus["DISABLED"] = "DISABLED";
    QueueStatus["ENABLED"] = "ENABLED";
})(QueueStatus = exports.QueueStatus || (exports.QueueStatus = {}));
var Queue;
(function (Queue) {
    /**
     * @internal
     */
    Queue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Queue = exports.Queue || (exports.Queue = {}));
var DescribeQueueResponse;
(function (DescribeQueueResponse) {
    /**
     * @internal
     */
    DescribeQueueResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeQueueResponse = exports.DescribeQueueResponse || (exports.DescribeQueueResponse = {}));
var DescribeQuickConnectRequest;
(function (DescribeQuickConnectRequest) {
    /**
     * @internal
     */
    DescribeQuickConnectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeQuickConnectRequest = exports.DescribeQuickConnectRequest || (exports.DescribeQuickConnectRequest = {}));
var QuickConnect;
(function (QuickConnect) {
    /**
     * @internal
     */
    QuickConnect.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QuickConnect = exports.QuickConnect || (exports.QuickConnect = {}));
var DescribeQuickConnectResponse;
(function (DescribeQuickConnectResponse) {
    /**
     * @internal
     */
    DescribeQuickConnectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeQuickConnectResponse = exports.DescribeQuickConnectResponse || (exports.DescribeQuickConnectResponse = {}));
var DescribeRoutingProfileRequest;
(function (DescribeRoutingProfileRequest) {
    /**
     * @internal
     */
    DescribeRoutingProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRoutingProfileRequest = exports.DescribeRoutingProfileRequest || (exports.DescribeRoutingProfileRequest = {}));
var RoutingProfile;
(function (RoutingProfile) {
    /**
     * @internal
     */
    RoutingProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RoutingProfile = exports.RoutingProfile || (exports.RoutingProfile = {}));
var DescribeRoutingProfileResponse;
(function (DescribeRoutingProfileResponse) {
    /**
     * @internal
     */
    DescribeRoutingProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRoutingProfileResponse = exports.DescribeRoutingProfileResponse || (exports.DescribeRoutingProfileResponse = {}));
var DescribeUserRequest;
(function (DescribeUserRequest) {
    /**
     * @internal
     */
    DescribeUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserRequest = exports.DescribeUserRequest || (exports.DescribeUserRequest = {}));
var User;
(function (User) {
    /**
     * @internal
     */
    User.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(User = exports.User || (exports.User = {}));
var DescribeUserResponse;
(function (DescribeUserResponse) {
    /**
     * @internal
     */
    DescribeUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserResponse = exports.DescribeUserResponse || (exports.DescribeUserResponse = {}));
var DescribeUserHierarchyGroupRequest;
(function (DescribeUserHierarchyGroupRequest) {
    /**
     * @internal
     */
    DescribeUserHierarchyGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserHierarchyGroupRequest = exports.DescribeUserHierarchyGroupRequest || (exports.DescribeUserHierarchyGroupRequest = {}));
var HierarchyGroupSummary;
(function (HierarchyGroupSummary) {
    /**
     * @internal
     */
    HierarchyGroupSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HierarchyGroupSummary = exports.HierarchyGroupSummary || (exports.HierarchyGroupSummary = {}));
var HierarchyPath;
(function (HierarchyPath) {
    /**
     * @internal
     */
    HierarchyPath.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HierarchyPath = exports.HierarchyPath || (exports.HierarchyPath = {}));
var HierarchyGroup;
(function (HierarchyGroup) {
    /**
     * @internal
     */
    HierarchyGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HierarchyGroup = exports.HierarchyGroup || (exports.HierarchyGroup = {}));
var DescribeUserHierarchyGroupResponse;
(function (DescribeUserHierarchyGroupResponse) {
    /**
     * @internal
     */
    DescribeUserHierarchyGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserHierarchyGroupResponse = exports.DescribeUserHierarchyGroupResponse || (exports.DescribeUserHierarchyGroupResponse = {}));
var DescribeUserHierarchyStructureRequest;
(function (DescribeUserHierarchyStructureRequest) {
    /**
     * @internal
     */
    DescribeUserHierarchyStructureRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserHierarchyStructureRequest = exports.DescribeUserHierarchyStructureRequest || (exports.DescribeUserHierarchyStructureRequest = {}));
var HierarchyLevel;
(function (HierarchyLevel) {
    /**
     * @internal
     */
    HierarchyLevel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HierarchyLevel = exports.HierarchyLevel || (exports.HierarchyLevel = {}));
var HierarchyStructure;
(function (HierarchyStructure) {
    /**
     * @internal
     */
    HierarchyStructure.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HierarchyStructure = exports.HierarchyStructure || (exports.HierarchyStructure = {}));
var DescribeUserHierarchyStructureResponse;
(function (DescribeUserHierarchyStructureResponse) {
    /**
     * @internal
     */
    DescribeUserHierarchyStructureResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserHierarchyStructureResponse = exports.DescribeUserHierarchyStructureResponse || (exports.DescribeUserHierarchyStructureResponse = {}));
var DisassociateApprovedOriginRequest;
(function (DisassociateApprovedOriginRequest) {
    /**
     * @internal
     */
    DisassociateApprovedOriginRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateApprovedOriginRequest = exports.DisassociateApprovedOriginRequest || (exports.DisassociateApprovedOriginRequest = {}));
var DisassociateInstanceStorageConfigRequest;
(function (DisassociateInstanceStorageConfigRequest) {
    /**
     * @internal
     */
    DisassociateInstanceStorageConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateInstanceStorageConfigRequest = exports.DisassociateInstanceStorageConfigRequest || (exports.DisassociateInstanceStorageConfigRequest = {}));
var DisassociateLambdaFunctionRequest;
(function (DisassociateLambdaFunctionRequest) {
    /**
     * @internal
     */
    DisassociateLambdaFunctionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateLambdaFunctionRequest = exports.DisassociateLambdaFunctionRequest || (exports.DisassociateLambdaFunctionRequest = {}));
var DisassociateLexBotRequest;
(function (DisassociateLexBotRequest) {
    /**
     * @internal
     */
    DisassociateLexBotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateLexBotRequest = exports.DisassociateLexBotRequest || (exports.DisassociateLexBotRequest = {}));
var DisassociateQueueQuickConnectsRequest;
(function (DisassociateQueueQuickConnectsRequest) {
    /**
     * @internal
     */
    DisassociateQueueQuickConnectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateQueueQuickConnectsRequest = exports.DisassociateQueueQuickConnectsRequest || (exports.DisassociateQueueQuickConnectsRequest = {}));
var DisassociateRoutingProfileQueuesRequest;
(function (DisassociateRoutingProfileQueuesRequest) {
    /**
     * @internal
     */
    DisassociateRoutingProfileQueuesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateRoutingProfileQueuesRequest = exports.DisassociateRoutingProfileQueuesRequest || (exports.DisassociateRoutingProfileQueuesRequest = {}));
var DisassociateSecurityKeyRequest;
(function (DisassociateSecurityKeyRequest) {
    /**
     * @internal
     */
    DisassociateSecurityKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateSecurityKeyRequest = exports.DisassociateSecurityKeyRequest || (exports.DisassociateSecurityKeyRequest = {}));
var GetContactAttributesRequest;
(function (GetContactAttributesRequest) {
    /**
     * @internal
     */
    GetContactAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactAttributesRequest = exports.GetContactAttributesRequest || (exports.GetContactAttributesRequest = {}));
var GetContactAttributesResponse;
(function (GetContactAttributesResponse) {
    /**
     * @internal
     */
    GetContactAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactAttributesResponse = exports.GetContactAttributesResponse || (exports.GetContactAttributesResponse = {}));
var CurrentMetricName;
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
})(CurrentMetricName = exports.CurrentMetricName || (exports.CurrentMetricName = {}));
var Unit;
(function (Unit) {
    Unit["COUNT"] = "COUNT";
    Unit["PERCENT"] = "PERCENT";
    Unit["SECONDS"] = "SECONDS";
})(Unit = exports.Unit || (exports.Unit = {}));
var CurrentMetric;
(function (CurrentMetric) {
    /**
     * @internal
     */
    CurrentMetric.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CurrentMetric = exports.CurrentMetric || (exports.CurrentMetric = {}));
var Filters;
(function (Filters) {
    /**
     * @internal
     */
    Filters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filters = exports.Filters || (exports.Filters = {}));
var Grouping;
(function (Grouping) {
    Grouping["CHANNEL"] = "CHANNEL";
    Grouping["QUEUE"] = "QUEUE";
})(Grouping = exports.Grouping || (exports.Grouping = {}));
var GetCurrentMetricDataRequest;
(function (GetCurrentMetricDataRequest) {
    /**
     * @internal
     */
    GetCurrentMetricDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCurrentMetricDataRequest = exports.GetCurrentMetricDataRequest || (exports.GetCurrentMetricDataRequest = {}));
var CurrentMetricData;
(function (CurrentMetricData) {
    /**
     * @internal
     */
    CurrentMetricData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CurrentMetricData = exports.CurrentMetricData || (exports.CurrentMetricData = {}));
var QueueReference;
(function (QueueReference) {
    /**
     * @internal
     */
    QueueReference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueueReference = exports.QueueReference || (exports.QueueReference = {}));
var Dimensions;
(function (Dimensions) {
    /**
     * @internal
     */
    Dimensions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Dimensions = exports.Dimensions || (exports.Dimensions = {}));
var CurrentMetricResult;
(function (CurrentMetricResult) {
    /**
     * @internal
     */
    CurrentMetricResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CurrentMetricResult = exports.CurrentMetricResult || (exports.CurrentMetricResult = {}));
var GetCurrentMetricDataResponse;
(function (GetCurrentMetricDataResponse) {
    /**
     * @internal
     */
    GetCurrentMetricDataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCurrentMetricDataResponse = exports.GetCurrentMetricDataResponse || (exports.GetCurrentMetricDataResponse = {}));
var GetFederationTokenRequest;
(function (GetFederationTokenRequest) {
    /**
     * @internal
     */
    GetFederationTokenRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFederationTokenRequest = exports.GetFederationTokenRequest || (exports.GetFederationTokenRequest = {}));
var Credentials;
(function (Credentials) {
    /**
     * @internal
     */
    Credentials.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.RefreshToken && { RefreshToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(Credentials = exports.Credentials || (exports.Credentials = {}));
var GetFederationTokenResponse;
(function (GetFederationTokenResponse) {
    /**
     * @internal
     */
    GetFederationTokenResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Credentials && { Credentials: Credentials.filterSensitiveLog(obj.Credentials) }),
    });
})(GetFederationTokenResponse = exports.GetFederationTokenResponse || (exports.GetFederationTokenResponse = {}));
var UserNotFoundException;
(function (UserNotFoundException) {
    /**
     * @internal
     */
    UserNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserNotFoundException = exports.UserNotFoundException || (exports.UserNotFoundException = {}));
var HistoricalMetricName;
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
})(HistoricalMetricName = exports.HistoricalMetricName || (exports.HistoricalMetricName = {}));
var Statistic;
(function (Statistic) {
    Statistic["AVG"] = "AVG";
    Statistic["MAX"] = "MAX";
    Statistic["SUM"] = "SUM";
})(Statistic = exports.Statistic || (exports.Statistic = {}));
var Comparison;
(function (Comparison) {
    Comparison["LT"] = "LT";
})(Comparison = exports.Comparison || (exports.Comparison = {}));
var Threshold;
(function (Threshold) {
    /**
     * @internal
     */
    Threshold.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Threshold = exports.Threshold || (exports.Threshold = {}));
var HistoricalMetric;
(function (HistoricalMetric) {
    /**
     * @internal
     */
    HistoricalMetric.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HistoricalMetric = exports.HistoricalMetric || (exports.HistoricalMetric = {}));
var GetMetricDataRequest;
(function (GetMetricDataRequest) {
    /**
     * @internal
     */
    GetMetricDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMetricDataRequest = exports.GetMetricDataRequest || (exports.GetMetricDataRequest = {}));
var HistoricalMetricData;
(function (HistoricalMetricData) {
    /**
     * @internal
     */
    HistoricalMetricData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HistoricalMetricData = exports.HistoricalMetricData || (exports.HistoricalMetricData = {}));
var HistoricalMetricResult;
(function (HistoricalMetricResult) {
    /**
     * @internal
     */
    HistoricalMetricResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HistoricalMetricResult = exports.HistoricalMetricResult || (exports.HistoricalMetricResult = {}));
var GetMetricDataResponse;
(function (GetMetricDataResponse) {
    /**
     * @internal
     */
    GetMetricDataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMetricDataResponse = exports.GetMetricDataResponse || (exports.GetMetricDataResponse = {}));
var ListApprovedOriginsRequest;
(function (ListApprovedOriginsRequest) {
    /**
     * @internal
     */
    ListApprovedOriginsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApprovedOriginsRequest = exports.ListApprovedOriginsRequest || (exports.ListApprovedOriginsRequest = {}));
var ListApprovedOriginsResponse;
(function (ListApprovedOriginsResponse) {
    /**
     * @internal
     */
    ListApprovedOriginsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApprovedOriginsResponse = exports.ListApprovedOriginsResponse || (exports.ListApprovedOriginsResponse = {}));
var ListContactFlowsRequest;
(function (ListContactFlowsRequest) {
    /**
     * @internal
     */
    ListContactFlowsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContactFlowsRequest = exports.ListContactFlowsRequest || (exports.ListContactFlowsRequest = {}));
var ContactFlowSummary;
(function (ContactFlowSummary) {
    /**
     * @internal
     */
    ContactFlowSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContactFlowSummary = exports.ContactFlowSummary || (exports.ContactFlowSummary = {}));
var ListContactFlowsResponse;
(function (ListContactFlowsResponse) {
    /**
     * @internal
     */
    ListContactFlowsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContactFlowsResponse = exports.ListContactFlowsResponse || (exports.ListContactFlowsResponse = {}));
var ListHoursOfOperationsRequest;
(function (ListHoursOfOperationsRequest) {
    /**
     * @internal
     */
    ListHoursOfOperationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHoursOfOperationsRequest = exports.ListHoursOfOperationsRequest || (exports.ListHoursOfOperationsRequest = {}));
var HoursOfOperationSummary;
(function (HoursOfOperationSummary) {
    /**
     * @internal
     */
    HoursOfOperationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HoursOfOperationSummary = exports.HoursOfOperationSummary || (exports.HoursOfOperationSummary = {}));
var ListHoursOfOperationsResponse;
(function (ListHoursOfOperationsResponse) {
    /**
     * @internal
     */
    ListHoursOfOperationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHoursOfOperationsResponse = exports.ListHoursOfOperationsResponse || (exports.ListHoursOfOperationsResponse = {}));
var ListInstanceAttributesRequest;
(function (ListInstanceAttributesRequest) {
    /**
     * @internal
     */
    ListInstanceAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceAttributesRequest = exports.ListInstanceAttributesRequest || (exports.ListInstanceAttributesRequest = {}));
var ListInstanceAttributesResponse;
(function (ListInstanceAttributesResponse) {
    /**
     * @internal
     */
    ListInstanceAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceAttributesResponse = exports.ListInstanceAttributesResponse || (exports.ListInstanceAttributesResponse = {}));
var ListInstancesRequest;
(function (ListInstancesRequest) {
    /**
     * @internal
     */
    ListInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstancesRequest = exports.ListInstancesRequest || (exports.ListInstancesRequest = {}));
var InstanceSummary;
(function (InstanceSummary) {
    /**
     * @internal
     */
    InstanceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.InstanceAlias && { InstanceAlias: smithy_client_1.SENSITIVE_STRING }),
    });
})(InstanceSummary = exports.InstanceSummary || (exports.InstanceSummary = {}));
var ListInstancesResponse;
(function (ListInstancesResponse) {
    /**
     * @internal
     */
    ListInstancesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.InstanceSummaryList && {
            InstanceSummaryList: obj.InstanceSummaryList.map((item) => InstanceSummary.filterSensitiveLog(item)),
        }),
    });
})(ListInstancesResponse = exports.ListInstancesResponse || (exports.ListInstancesResponse = {}));
var ListInstanceStorageConfigsRequest;
(function (ListInstanceStorageConfigsRequest) {
    /**
     * @internal
     */
    ListInstanceStorageConfigsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceStorageConfigsRequest = exports.ListInstanceStorageConfigsRequest || (exports.ListInstanceStorageConfigsRequest = {}));
var ListInstanceStorageConfigsResponse;
(function (ListInstanceStorageConfigsResponse) {
    /**
     * @internal
     */
    ListInstanceStorageConfigsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstanceStorageConfigsResponse = exports.ListInstanceStorageConfigsResponse || (exports.ListInstanceStorageConfigsResponse = {}));
var ListIntegrationAssociationsRequest;
(function (ListIntegrationAssociationsRequest) {
    /**
     * @internal
     */
    ListIntegrationAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIntegrationAssociationsRequest = exports.ListIntegrationAssociationsRequest || (exports.ListIntegrationAssociationsRequest = {}));
var IntegrationAssociationSummary;
(function (IntegrationAssociationSummary) {
    /**
     * @internal
     */
    IntegrationAssociationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IntegrationAssociationSummary = exports.IntegrationAssociationSummary || (exports.IntegrationAssociationSummary = {}));
var ListIntegrationAssociationsResponse;
(function (ListIntegrationAssociationsResponse) {
    /**
     * @internal
     */
    ListIntegrationAssociationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIntegrationAssociationsResponse = exports.ListIntegrationAssociationsResponse || (exports.ListIntegrationAssociationsResponse = {}));
var ListLambdaFunctionsRequest;
(function (ListLambdaFunctionsRequest) {
    /**
     * @internal
     */
    ListLambdaFunctionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLambdaFunctionsRequest = exports.ListLambdaFunctionsRequest || (exports.ListLambdaFunctionsRequest = {}));
var ListLambdaFunctionsResponse;
(function (ListLambdaFunctionsResponse) {
    /**
     * @internal
     */
    ListLambdaFunctionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLambdaFunctionsResponse = exports.ListLambdaFunctionsResponse || (exports.ListLambdaFunctionsResponse = {}));
var ListLexBotsRequest;
(function (ListLexBotsRequest) {
    /**
     * @internal
     */
    ListLexBotsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLexBotsRequest = exports.ListLexBotsRequest || (exports.ListLexBotsRequest = {}));
var ListLexBotsResponse;
(function (ListLexBotsResponse) {
    /**
     * @internal
     */
    ListLexBotsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLexBotsResponse = exports.ListLexBotsResponse || (exports.ListLexBotsResponse = {}));
var PhoneNumberCountryCode;
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
})(PhoneNumberCountryCode = exports.PhoneNumberCountryCode || (exports.PhoneNumberCountryCode = {}));
var PhoneNumberType;
(function (PhoneNumberType) {
    PhoneNumberType["DID"] = "DID";
    PhoneNumberType["TOLL_FREE"] = "TOLL_FREE";
})(PhoneNumberType = exports.PhoneNumberType || (exports.PhoneNumberType = {}));
var ListPhoneNumbersRequest;
(function (ListPhoneNumbersRequest) {
    /**
     * @internal
     */
    ListPhoneNumbersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPhoneNumbersRequest = exports.ListPhoneNumbersRequest || (exports.ListPhoneNumbersRequest = {}));
var PhoneNumberSummary;
(function (PhoneNumberSummary) {
    /**
     * @internal
     */
    PhoneNumberSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PhoneNumberSummary = exports.PhoneNumberSummary || (exports.PhoneNumberSummary = {}));
var ListPhoneNumbersResponse;
(function (ListPhoneNumbersResponse) {
    /**
     * @internal
     */
    ListPhoneNumbersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPhoneNumbersResponse = exports.ListPhoneNumbersResponse || (exports.ListPhoneNumbersResponse = {}));
var ListPromptsRequest;
(function (ListPromptsRequest) {
    /**
     * @internal
     */
    ListPromptsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPromptsRequest = exports.ListPromptsRequest || (exports.ListPromptsRequest = {}));
var PromptSummary;
(function (PromptSummary) {
    /**
     * @internal
     */
    PromptSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PromptSummary = exports.PromptSummary || (exports.PromptSummary = {}));
var ListPromptsResponse;
(function (ListPromptsResponse) {
    /**
     * @internal
     */
    ListPromptsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPromptsResponse = exports.ListPromptsResponse || (exports.ListPromptsResponse = {}));
var ListQueueQuickConnectsRequest;
(function (ListQueueQuickConnectsRequest) {
    /**
     * @internal
     */
    ListQueueQuickConnectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueueQuickConnectsRequest = exports.ListQueueQuickConnectsRequest || (exports.ListQueueQuickConnectsRequest = {}));
var QuickConnectSummary;
(function (QuickConnectSummary) {
    /**
     * @internal
     */
    QuickConnectSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QuickConnectSummary = exports.QuickConnectSummary || (exports.QuickConnectSummary = {}));
var ListQueueQuickConnectsResponse;
(function (ListQueueQuickConnectsResponse) {
    /**
     * @internal
     */
    ListQueueQuickConnectsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueueQuickConnectsResponse = exports.ListQueueQuickConnectsResponse || (exports.ListQueueQuickConnectsResponse = {}));
var QueueType;
(function (QueueType) {
    QueueType["AGENT"] = "AGENT";
    QueueType["STANDARD"] = "STANDARD";
})(QueueType = exports.QueueType || (exports.QueueType = {}));
var ListQueuesRequest;
(function (ListQueuesRequest) {
    /**
     * @internal
     */
    ListQueuesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueuesRequest = exports.ListQueuesRequest || (exports.ListQueuesRequest = {}));
var QueueSummary;
(function (QueueSummary) {
    /**
     * @internal
     */
    QueueSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueueSummary = exports.QueueSummary || (exports.QueueSummary = {}));
var ListQueuesResponse;
(function (ListQueuesResponse) {
    /**
     * @internal
     */
    ListQueuesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueuesResponse = exports.ListQueuesResponse || (exports.ListQueuesResponse = {}));
var ListQuickConnectsRequest;
(function (ListQuickConnectsRequest) {
    /**
     * @internal
     */
    ListQuickConnectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQuickConnectsRequest = exports.ListQuickConnectsRequest || (exports.ListQuickConnectsRequest = {}));
var ListQuickConnectsResponse;
(function (ListQuickConnectsResponse) {
    /**
     * @internal
     */
    ListQuickConnectsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQuickConnectsResponse = exports.ListQuickConnectsResponse || (exports.ListQuickConnectsResponse = {}));
var ListRoutingProfileQueuesRequest;
(function (ListRoutingProfileQueuesRequest) {
    /**
     * @internal
     */
    ListRoutingProfileQueuesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRoutingProfileQueuesRequest = exports.ListRoutingProfileQueuesRequest || (exports.ListRoutingProfileQueuesRequest = {}));
var RoutingProfileQueueConfigSummary;
(function (RoutingProfileQueueConfigSummary) {
    /**
     * @internal
     */
    RoutingProfileQueueConfigSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RoutingProfileQueueConfigSummary = exports.RoutingProfileQueueConfigSummary || (exports.RoutingProfileQueueConfigSummary = {}));
var ListRoutingProfileQueuesResponse;
(function (ListRoutingProfileQueuesResponse) {
    /**
     * @internal
     */
    ListRoutingProfileQueuesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRoutingProfileQueuesResponse = exports.ListRoutingProfileQueuesResponse || (exports.ListRoutingProfileQueuesResponse = {}));
var ListRoutingProfilesRequest;
(function (ListRoutingProfilesRequest) {
    /**
     * @internal
     */
    ListRoutingProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRoutingProfilesRequest = exports.ListRoutingProfilesRequest || (exports.ListRoutingProfilesRequest = {}));
var RoutingProfileSummary;
(function (RoutingProfileSummary) {
    /**
     * @internal
     */
    RoutingProfileSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RoutingProfileSummary = exports.RoutingProfileSummary || (exports.RoutingProfileSummary = {}));
var ListRoutingProfilesResponse;
(function (ListRoutingProfilesResponse) {
    /**
     * @internal
     */
    ListRoutingProfilesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRoutingProfilesResponse = exports.ListRoutingProfilesResponse || (exports.ListRoutingProfilesResponse = {}));
var ListSecurityKeysRequest;
(function (ListSecurityKeysRequest) {
    /**
     * @internal
     */
    ListSecurityKeysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSecurityKeysRequest = exports.ListSecurityKeysRequest || (exports.ListSecurityKeysRequest = {}));
var SecurityKey;
(function (SecurityKey) {
    /**
     * @internal
     */
    SecurityKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityKey = exports.SecurityKey || (exports.SecurityKey = {}));
var ListSecurityKeysResponse;
(function (ListSecurityKeysResponse) {
    /**
     * @internal
     */
    ListSecurityKeysResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSecurityKeysResponse = exports.ListSecurityKeysResponse || (exports.ListSecurityKeysResponse = {}));
var ListSecurityProfilesRequest;
(function (ListSecurityProfilesRequest) {
    /**
     * @internal
     */
    ListSecurityProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSecurityProfilesRequest = exports.ListSecurityProfilesRequest || (exports.ListSecurityProfilesRequest = {}));
var SecurityProfileSummary;
(function (SecurityProfileSummary) {
    /**
     * @internal
     */
    SecurityProfileSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityProfileSummary = exports.SecurityProfileSummary || (exports.SecurityProfileSummary = {}));
var ListSecurityProfilesResponse;
(function (ListSecurityProfilesResponse) {
    /**
     * @internal
     */
    ListSecurityProfilesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSecurityProfilesResponse = exports.ListSecurityProfilesResponse || (exports.ListSecurityProfilesResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ListUseCasesRequest;
(function (ListUseCasesRequest) {
    /**
     * @internal
     */
    ListUseCasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUseCasesRequest = exports.ListUseCasesRequest || (exports.ListUseCasesRequest = {}));
var UseCase;
(function (UseCase) {
    /**
     * @internal
     */
    UseCase.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UseCase = exports.UseCase || (exports.UseCase = {}));
var ListUseCasesResponse;
(function (ListUseCasesResponse) {
    /**
     * @internal
     */
    ListUseCasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUseCasesResponse = exports.ListUseCasesResponse || (exports.ListUseCasesResponse = {}));
var ListUserHierarchyGroupsRequest;
(function (ListUserHierarchyGroupsRequest) {
    /**
     * @internal
     */
    ListUserHierarchyGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserHierarchyGroupsRequest = exports.ListUserHierarchyGroupsRequest || (exports.ListUserHierarchyGroupsRequest = {}));
var ListUserHierarchyGroupsResponse;
(function (ListUserHierarchyGroupsResponse) {
    /**
     * @internal
     */
    ListUserHierarchyGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserHierarchyGroupsResponse = exports.ListUserHierarchyGroupsResponse || (exports.ListUserHierarchyGroupsResponse = {}));
var ListUsersRequest;
(function (ListUsersRequest) {
    /**
     * @internal
     */
    ListUsersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsersRequest = exports.ListUsersRequest || (exports.ListUsersRequest = {}));
var UserSummary;
(function (UserSummary) {
    /**
     * @internal
     */
    UserSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserSummary = exports.UserSummary || (exports.UserSummary = {}));
var ListUsersResponse;
(function (ListUsersResponse) {
    /**
     * @internal
     */
    ListUsersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsersResponse = exports.ListUsersResponse || (exports.ListUsersResponse = {}));
var ResumeContactRecordingRequest;
(function (ResumeContactRecordingRequest) {
    /**
     * @internal
     */
    ResumeContactRecordingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResumeContactRecordingRequest = exports.ResumeContactRecordingRequest || (exports.ResumeContactRecordingRequest = {}));
var ResumeContactRecordingResponse;
(function (ResumeContactRecordingResponse) {
    /**
     * @internal
     */
    ResumeContactRecordingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResumeContactRecordingResponse = exports.ResumeContactRecordingResponse || (exports.ResumeContactRecordingResponse = {}));
var ChatMessage;
(function (ChatMessage) {
    /**
     * @internal
     */
    ChatMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChatMessage = exports.ChatMessage || (exports.ChatMessage = {}));
var ParticipantDetails;
(function (ParticipantDetails) {
    /**
     * @internal
     */
    ParticipantDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParticipantDetails = exports.ParticipantDetails || (exports.ParticipantDetails = {}));
var StartChatContactRequest;
(function (StartChatContactRequest) {
    /**
     * @internal
     */
    StartChatContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartChatContactRequest = exports.StartChatContactRequest || (exports.StartChatContactRequest = {}));
var StartChatContactResponse;
(function (StartChatContactResponse) {
    /**
     * @internal
     */
    StartChatContactResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartChatContactResponse = exports.StartChatContactResponse || (exports.StartChatContactResponse = {}));
var VoiceRecordingTrack;
(function (VoiceRecordingTrack) {
    VoiceRecordingTrack["ALL"] = "ALL";
    VoiceRecordingTrack["FROM_AGENT"] = "FROM_AGENT";
    VoiceRecordingTrack["TO_AGENT"] = "TO_AGENT";
})(VoiceRecordingTrack = exports.VoiceRecordingTrack || (exports.VoiceRecordingTrack = {}));
var VoiceRecordingConfiguration;
(function (VoiceRecordingConfiguration) {
    /**
     * @internal
     */
    VoiceRecordingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VoiceRecordingConfiguration = exports.VoiceRecordingConfiguration || (exports.VoiceRecordingConfiguration = {}));
var StartContactRecordingRequest;
(function (StartContactRecordingRequest) {
    /**
     * @internal
     */
    StartContactRecordingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartContactRecordingRequest = exports.StartContactRecordingRequest || (exports.StartContactRecordingRequest = {}));
var StartContactRecordingResponse;
(function (StartContactRecordingResponse) {
    /**
     * @internal
     */
    StartContactRecordingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartContactRecordingResponse = exports.StartContactRecordingResponse || (exports.StartContactRecordingResponse = {}));
var DestinationNotAllowedException;
(function (DestinationNotAllowedException) {
    /**
     * @internal
     */
    DestinationNotAllowedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DestinationNotAllowedException = exports.DestinationNotAllowedException || (exports.DestinationNotAllowedException = {}));
var OutboundContactNotPermittedException;
(function (OutboundContactNotPermittedException) {
    /**
     * @internal
     */
    OutboundContactNotPermittedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutboundContactNotPermittedException = exports.OutboundContactNotPermittedException || (exports.OutboundContactNotPermittedException = {}));
var StartOutboundVoiceContactRequest;
(function (StartOutboundVoiceContactRequest) {
    /**
     * @internal
     */
    StartOutboundVoiceContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartOutboundVoiceContactRequest = exports.StartOutboundVoiceContactRequest || (exports.StartOutboundVoiceContactRequest = {}));
var StartOutboundVoiceContactResponse;
(function (StartOutboundVoiceContactResponse) {
    /**
     * @internal
     */
    StartOutboundVoiceContactResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartOutboundVoiceContactResponse = exports.StartOutboundVoiceContactResponse || (exports.StartOutboundVoiceContactResponse = {}));
var ReferenceType;
(function (ReferenceType) {
    ReferenceType["URL"] = "URL";
})(ReferenceType = exports.ReferenceType || (exports.ReferenceType = {}));
var Reference;
(function (Reference) {
    /**
     * @internal
     */
    Reference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Reference = exports.Reference || (exports.Reference = {}));
var StartTaskContactRequest;
(function (StartTaskContactRequest) {
    /**
     * @internal
     */
    StartTaskContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTaskContactRequest = exports.StartTaskContactRequest || (exports.StartTaskContactRequest = {}));
var StartTaskContactResponse;
(function (StartTaskContactResponse) {
    /**
     * @internal
     */
    StartTaskContactResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTaskContactResponse = exports.StartTaskContactResponse || (exports.StartTaskContactResponse = {}));
var ContactNotFoundException;
(function (ContactNotFoundException) {
    /**
     * @internal
     */
    ContactNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContactNotFoundException = exports.ContactNotFoundException || (exports.ContactNotFoundException = {}));
var StopContactRequest;
(function (StopContactRequest) {
    /**
     * @internal
     */
    StopContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopContactRequest = exports.StopContactRequest || (exports.StopContactRequest = {}));
var StopContactResponse;
(function (StopContactResponse) {
    /**
     * @internal
     */
    StopContactResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopContactResponse = exports.StopContactResponse || (exports.StopContactResponse = {}));
var StopContactRecordingRequest;
(function (StopContactRecordingRequest) {
    /**
     * @internal
     */
    StopContactRecordingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopContactRecordingRequest = exports.StopContactRecordingRequest || (exports.StopContactRecordingRequest = {}));
var StopContactRecordingResponse;
(function (StopContactRecordingResponse) {
    /**
     * @internal
     */
    StopContactRecordingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopContactRecordingResponse = exports.StopContactRecordingResponse || (exports.StopContactRecordingResponse = {}));
var SuspendContactRecordingRequest;
(function (SuspendContactRecordingRequest) {
    /**
     * @internal
     */
    SuspendContactRecordingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuspendContactRecordingRequest = exports.SuspendContactRecordingRequest || (exports.SuspendContactRecordingRequest = {}));
var SuspendContactRecordingResponse;
(function (SuspendContactRecordingResponse) {
    /**
     * @internal
     */
    SuspendContactRecordingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuspendContactRecordingResponse = exports.SuspendContactRecordingResponse || (exports.SuspendContactRecordingResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateContactAttributesRequest;
(function (UpdateContactAttributesRequest) {
    /**
     * @internal
     */
    UpdateContactAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContactAttributesRequest = exports.UpdateContactAttributesRequest || (exports.UpdateContactAttributesRequest = {}));
var UpdateContactAttributesResponse;
(function (UpdateContactAttributesResponse) {
    /**
     * @internal
     */
    UpdateContactAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContactAttributesResponse = exports.UpdateContactAttributesResponse || (exports.UpdateContactAttributesResponse = {}));
var UpdateContactFlowContentRequest;
(function (UpdateContactFlowContentRequest) {
    /**
     * @internal
     */
    UpdateContactFlowContentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContactFlowContentRequest = exports.UpdateContactFlowContentRequest || (exports.UpdateContactFlowContentRequest = {}));
var UpdateContactFlowNameRequest;
(function (UpdateContactFlowNameRequest) {
    /**
     * @internal
     */
    UpdateContactFlowNameRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContactFlowNameRequest = exports.UpdateContactFlowNameRequest || (exports.UpdateContactFlowNameRequest = {}));
var UpdateInstanceAttributeRequest;
(function (UpdateInstanceAttributeRequest) {
    /**
     * @internal
     */
    UpdateInstanceAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInstanceAttributeRequest = exports.UpdateInstanceAttributeRequest || (exports.UpdateInstanceAttributeRequest = {}));
var UpdateInstanceStorageConfigRequest;
(function (UpdateInstanceStorageConfigRequest) {
    /**
     * @internal
     */
    UpdateInstanceStorageConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInstanceStorageConfigRequest = exports.UpdateInstanceStorageConfigRequest || (exports.UpdateInstanceStorageConfigRequest = {}));
var UpdateQueueHoursOfOperationRequest;
(function (UpdateQueueHoursOfOperationRequest) {
    /**
     * @internal
     */
    UpdateQueueHoursOfOperationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateQueueHoursOfOperationRequest = exports.UpdateQueueHoursOfOperationRequest || (exports.UpdateQueueHoursOfOperationRequest = {}));
var UpdateQueueMaxContactsRequest;
(function (UpdateQueueMaxContactsRequest) {
    /**
     * @internal
     */
    UpdateQueueMaxContactsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateQueueMaxContactsRequest = exports.UpdateQueueMaxContactsRequest || (exports.UpdateQueueMaxContactsRequest = {}));
var UpdateQueueNameRequest;
(function (UpdateQueueNameRequest) {
    /**
     * @internal
     */
    UpdateQueueNameRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateQueueNameRequest = exports.UpdateQueueNameRequest || (exports.UpdateQueueNameRequest = {}));
var UpdateQueueOutboundCallerConfigRequest;
(function (UpdateQueueOutboundCallerConfigRequest) {
    /**
     * @internal
     */
    UpdateQueueOutboundCallerConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateQueueOutboundCallerConfigRequest = exports.UpdateQueueOutboundCallerConfigRequest || (exports.UpdateQueueOutboundCallerConfigRequest = {}));
var UpdateQueueStatusRequest;
(function (UpdateQueueStatusRequest) {
    /**
     * @internal
     */
    UpdateQueueStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateQueueStatusRequest = exports.UpdateQueueStatusRequest || (exports.UpdateQueueStatusRequest = {}));
var UpdateQuickConnectConfigRequest;
(function (UpdateQuickConnectConfigRequest) {
    /**
     * @internal
     */
    UpdateQuickConnectConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateQuickConnectConfigRequest = exports.UpdateQuickConnectConfigRequest || (exports.UpdateQuickConnectConfigRequest = {}));
var UpdateQuickConnectNameRequest;
(function (UpdateQuickConnectNameRequest) {
    /**
     * @internal
     */
    UpdateQuickConnectNameRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateQuickConnectNameRequest = exports.UpdateQuickConnectNameRequest || (exports.UpdateQuickConnectNameRequest = {}));
var UpdateRoutingProfileConcurrencyRequest;
(function (UpdateRoutingProfileConcurrencyRequest) {
    /**
     * @internal
     */
    UpdateRoutingProfileConcurrencyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRoutingProfileConcurrencyRequest = exports.UpdateRoutingProfileConcurrencyRequest || (exports.UpdateRoutingProfileConcurrencyRequest = {}));
var UpdateRoutingProfileDefaultOutboundQueueRequest;
(function (UpdateRoutingProfileDefaultOutboundQueueRequest) {
    /**
     * @internal
     */
    UpdateRoutingProfileDefaultOutboundQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRoutingProfileDefaultOutboundQueueRequest = exports.UpdateRoutingProfileDefaultOutboundQueueRequest || (exports.UpdateRoutingProfileDefaultOutboundQueueRequest = {}));
var UpdateRoutingProfileNameRequest;
(function (UpdateRoutingProfileNameRequest) {
    /**
     * @internal
     */
    UpdateRoutingProfileNameRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRoutingProfileNameRequest = exports.UpdateRoutingProfileNameRequest || (exports.UpdateRoutingProfileNameRequest = {}));
var UpdateRoutingProfileQueuesRequest;
(function (UpdateRoutingProfileQueuesRequest) {
    /**
     * @internal
     */
    UpdateRoutingProfileQueuesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRoutingProfileQueuesRequest = exports.UpdateRoutingProfileQueuesRequest || (exports.UpdateRoutingProfileQueuesRequest = {}));
var UpdateUserHierarchyRequest;
(function (UpdateUserHierarchyRequest) {
    /**
     * @internal
     */
    UpdateUserHierarchyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserHierarchyRequest = exports.UpdateUserHierarchyRequest || (exports.UpdateUserHierarchyRequest = {}));
var UpdateUserHierarchyGroupNameRequest;
(function (UpdateUserHierarchyGroupNameRequest) {
    /**
     * @internal
     */
    UpdateUserHierarchyGroupNameRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserHierarchyGroupNameRequest = exports.UpdateUserHierarchyGroupNameRequest || (exports.UpdateUserHierarchyGroupNameRequest = {}));
var HierarchyLevelUpdate;
(function (HierarchyLevelUpdate) {
    /**
     * @internal
     */
    HierarchyLevelUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HierarchyLevelUpdate = exports.HierarchyLevelUpdate || (exports.HierarchyLevelUpdate = {}));
var HierarchyStructureUpdate;
(function (HierarchyStructureUpdate) {
    /**
     * @internal
     */
    HierarchyStructureUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HierarchyStructureUpdate = exports.HierarchyStructureUpdate || (exports.HierarchyStructureUpdate = {}));
var UpdateUserHierarchyStructureRequest;
(function (UpdateUserHierarchyStructureRequest) {
    /**
     * @internal
     */
    UpdateUserHierarchyStructureRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserHierarchyStructureRequest = exports.UpdateUserHierarchyStructureRequest || (exports.UpdateUserHierarchyStructureRequest = {}));
var UpdateUserIdentityInfoRequest;
(function (UpdateUserIdentityInfoRequest) {
    /**
     * @internal
     */
    UpdateUserIdentityInfoRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserIdentityInfoRequest = exports.UpdateUserIdentityInfoRequest || (exports.UpdateUserIdentityInfoRequest = {}));
var UpdateUserPhoneConfigRequest;
(function (UpdateUserPhoneConfigRequest) {
    /**
     * @internal
     */
    UpdateUserPhoneConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserPhoneConfigRequest = exports.UpdateUserPhoneConfigRequest || (exports.UpdateUserPhoneConfigRequest = {}));
var UpdateUserRoutingProfileRequest;
(function (UpdateUserRoutingProfileRequest) {
    /**
     * @internal
     */
    UpdateUserRoutingProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserRoutingProfileRequest = exports.UpdateUserRoutingProfileRequest || (exports.UpdateUserRoutingProfileRequest = {}));
var UpdateUserSecurityProfilesRequest;
(function (UpdateUserSecurityProfilesRequest) {
    /**
     * @internal
     */
    UpdateUserSecurityProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserSecurityProfilesRequest = exports.UpdateUserSecurityProfilesRequest || (exports.UpdateUserSecurityProfilesRequest = {}));
//# sourceMappingURL=models_0.js.map