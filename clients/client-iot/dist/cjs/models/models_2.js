"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestInvokeAuthorizerResponse = exports.TestInvokeAuthorizerRequest = exports.TlsContext = exports.MqttContext = exports.HttpContext = exports.InvalidResponseException = exports.TestAuthorizationResponse = exports.TestAuthorizationRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StopThingRegistrationTaskResponse = exports.StopThingRegistrationTaskRequest = exports.StartThingRegistrationTaskResponse = exports.StartThingRegistrationTaskRequest = exports.StartOnDemandAuditTaskResponse = exports.StartOnDemandAuditTaskRequest = exports.StartDetectMitigationActionsTaskResponse = exports.StartDetectMitigationActionsTaskRequest = exports.TaskAlreadyExistsException = exports.StartAuditMitigationActionsTaskResponse = exports.StartAuditMitigationActionsTaskRequest = exports.SetV2LoggingOptionsRequest = exports.SetV2LoggingLevelRequest = exports.SetLoggingOptionsRequest = exports.LoggingOptionsPayload = exports.SetDefaultPolicyVersionRequest = exports.SetDefaultAuthorizerResponse = exports.SetDefaultAuthorizerRequest = exports.SearchIndexResponse = exports.ThingDocument = exports.ThingConnectivity = exports.ThingGroupDocument = exports.SearchIndexRequest = exports.ReplaceTopicRuleRequest = exports.RemoveThingFromThingGroupResponse = exports.RemoveThingFromThingGroupRequest = exports.RemoveThingFromBillingGroupResponse = exports.RemoveThingFromBillingGroupRequest = exports.RejectCertificateTransferRequest = exports.ResourceRegistrationFailureException = exports.RegisterThingResponse = exports.RegisterThingRequest = exports.RegisterCertificateWithoutCAResponse = exports.RegisterCertificateWithoutCARequest = exports.RegisterCertificateResponse = exports.RegisterCertificateRequest = exports.CertificateConflictException = exports.RegistrationCodeValidationException = exports.RegisterCACertificateResponse = exports.RegisterCACertificateRequest = void 0;
exports.ValidationError = exports.ValidateSecurityProfileBehaviorsRequest = exports.UpdateTopicRuleDestinationResponse = exports.UpdateTopicRuleDestinationRequest = exports.UpdateThingGroupsForThingResponse = exports.UpdateThingGroupsForThingRequest = exports.UpdateThingGroupResponse = exports.UpdateThingGroupRequest = exports.UpdateThingResponse = exports.UpdateThingRequest = exports.UpdateStreamResponse = exports.UpdateStreamRequest = exports.UpdateSecurityProfileResponse = exports.UpdateSecurityProfileRequest = exports.UpdateScheduledAuditResponse = exports.UpdateScheduledAuditRequest = exports.UpdateRoleAliasResponse = exports.UpdateRoleAliasRequest = exports.UpdateProvisioningTemplateResponse = exports.UpdateProvisioningTemplateRequest = exports.UpdateMitigationActionResponse = exports.UpdateMitigationActionRequest = exports.UpdateJobRequest = exports.UpdateIndexingConfigurationResponse = exports.UpdateIndexingConfigurationRequest = exports.UpdateEventConfigurationsResponse = exports.UpdateEventConfigurationsRequest = exports.UpdateDynamicThingGroupResponse = exports.UpdateDynamicThingGroupRequest = exports.UpdateDomainConfigurationResponse = exports.UpdateDomainConfigurationRequest = exports.UpdateDimensionResponse = exports.UpdateDimensionRequest = exports.UpdateCustomMetricResponse = exports.UpdateCustomMetricRequest = exports.UpdateCertificateRequest = exports.UpdateCACertificateRequest = exports.UpdateBillingGroupResponse = exports.UpdateBillingGroupRequest = exports.UpdateAuthorizerResponse = exports.UpdateAuthorizerRequest = exports.UpdateAuditSuppressionResponse = exports.UpdateAuditSuppressionRequest = exports.UpdateAccountAuditConfigurationResponse = exports.UpdateAccountAuditConfigurationRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TransferConflictException = exports.TransferCertificateResponse = exports.TransferCertificateRequest = void 0;
exports.ValidateSecurityProfileBehaviorsResponse = void 0;
var RegisterCACertificateRequest;
(function (RegisterCACertificateRequest) {
    /**
     * @internal
     */
    RegisterCACertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterCACertificateRequest = exports.RegisterCACertificateRequest || (exports.RegisterCACertificateRequest = {}));
var RegisterCACertificateResponse;
(function (RegisterCACertificateResponse) {
    /**
     * @internal
     */
    RegisterCACertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterCACertificateResponse = exports.RegisterCACertificateResponse || (exports.RegisterCACertificateResponse = {}));
var RegistrationCodeValidationException;
(function (RegistrationCodeValidationException) {
    /**
     * @internal
     */
    RegistrationCodeValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegistrationCodeValidationException = exports.RegistrationCodeValidationException || (exports.RegistrationCodeValidationException = {}));
var CertificateConflictException;
(function (CertificateConflictException) {
    /**
     * @internal
     */
    CertificateConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateConflictException = exports.CertificateConflictException || (exports.CertificateConflictException = {}));
var RegisterCertificateRequest;
(function (RegisterCertificateRequest) {
    /**
     * @internal
     */
    RegisterCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterCertificateRequest = exports.RegisterCertificateRequest || (exports.RegisterCertificateRequest = {}));
var RegisterCertificateResponse;
(function (RegisterCertificateResponse) {
    /**
     * @internal
     */
    RegisterCertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterCertificateResponse = exports.RegisterCertificateResponse || (exports.RegisterCertificateResponse = {}));
var RegisterCertificateWithoutCARequest;
(function (RegisterCertificateWithoutCARequest) {
    /**
     * @internal
     */
    RegisterCertificateWithoutCARequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterCertificateWithoutCARequest = exports.RegisterCertificateWithoutCARequest || (exports.RegisterCertificateWithoutCARequest = {}));
var RegisterCertificateWithoutCAResponse;
(function (RegisterCertificateWithoutCAResponse) {
    /**
     * @internal
     */
    RegisterCertificateWithoutCAResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterCertificateWithoutCAResponse = exports.RegisterCertificateWithoutCAResponse || (exports.RegisterCertificateWithoutCAResponse = {}));
var RegisterThingRequest;
(function (RegisterThingRequest) {
    /**
     * @internal
     */
    RegisterThingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterThingRequest = exports.RegisterThingRequest || (exports.RegisterThingRequest = {}));
var RegisterThingResponse;
(function (RegisterThingResponse) {
    /**
     * @internal
     */
    RegisterThingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterThingResponse = exports.RegisterThingResponse || (exports.RegisterThingResponse = {}));
var ResourceRegistrationFailureException;
(function (ResourceRegistrationFailureException) {
    /**
     * @internal
     */
    ResourceRegistrationFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceRegistrationFailureException = exports.ResourceRegistrationFailureException || (exports.ResourceRegistrationFailureException = {}));
var RejectCertificateTransferRequest;
(function (RejectCertificateTransferRequest) {
    /**
     * @internal
     */
    RejectCertificateTransferRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectCertificateTransferRequest = exports.RejectCertificateTransferRequest || (exports.RejectCertificateTransferRequest = {}));
var RemoveThingFromBillingGroupRequest;
(function (RemoveThingFromBillingGroupRequest) {
    /**
     * @internal
     */
    RemoveThingFromBillingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveThingFromBillingGroupRequest = exports.RemoveThingFromBillingGroupRequest || (exports.RemoveThingFromBillingGroupRequest = {}));
var RemoveThingFromBillingGroupResponse;
(function (RemoveThingFromBillingGroupResponse) {
    /**
     * @internal
     */
    RemoveThingFromBillingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveThingFromBillingGroupResponse = exports.RemoveThingFromBillingGroupResponse || (exports.RemoveThingFromBillingGroupResponse = {}));
var RemoveThingFromThingGroupRequest;
(function (RemoveThingFromThingGroupRequest) {
    /**
     * @internal
     */
    RemoveThingFromThingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveThingFromThingGroupRequest = exports.RemoveThingFromThingGroupRequest || (exports.RemoveThingFromThingGroupRequest = {}));
var RemoveThingFromThingGroupResponse;
(function (RemoveThingFromThingGroupResponse) {
    /**
     * @internal
     */
    RemoveThingFromThingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveThingFromThingGroupResponse = exports.RemoveThingFromThingGroupResponse || (exports.RemoveThingFromThingGroupResponse = {}));
var ReplaceTopicRuleRequest;
(function (ReplaceTopicRuleRequest) {
    /**
     * @internal
     */
    ReplaceTopicRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplaceTopicRuleRequest = exports.ReplaceTopicRuleRequest || (exports.ReplaceTopicRuleRequest = {}));
var SearchIndexRequest;
(function (SearchIndexRequest) {
    /**
     * @internal
     */
    SearchIndexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchIndexRequest = exports.SearchIndexRequest || (exports.SearchIndexRequest = {}));
var ThingGroupDocument;
(function (ThingGroupDocument) {
    /**
     * @internal
     */
    ThingGroupDocument.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThingGroupDocument = exports.ThingGroupDocument || (exports.ThingGroupDocument = {}));
var ThingConnectivity;
(function (ThingConnectivity) {
    /**
     * @internal
     */
    ThingConnectivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThingConnectivity = exports.ThingConnectivity || (exports.ThingConnectivity = {}));
var ThingDocument;
(function (ThingDocument) {
    /**
     * @internal
     */
    ThingDocument.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThingDocument = exports.ThingDocument || (exports.ThingDocument = {}));
var SearchIndexResponse;
(function (SearchIndexResponse) {
    /**
     * @internal
     */
    SearchIndexResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchIndexResponse = exports.SearchIndexResponse || (exports.SearchIndexResponse = {}));
var SetDefaultAuthorizerRequest;
(function (SetDefaultAuthorizerRequest) {
    /**
     * @internal
     */
    SetDefaultAuthorizerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetDefaultAuthorizerRequest = exports.SetDefaultAuthorizerRequest || (exports.SetDefaultAuthorizerRequest = {}));
var SetDefaultAuthorizerResponse;
(function (SetDefaultAuthorizerResponse) {
    /**
     * @internal
     */
    SetDefaultAuthorizerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetDefaultAuthorizerResponse = exports.SetDefaultAuthorizerResponse || (exports.SetDefaultAuthorizerResponse = {}));
var SetDefaultPolicyVersionRequest;
(function (SetDefaultPolicyVersionRequest) {
    /**
     * @internal
     */
    SetDefaultPolicyVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetDefaultPolicyVersionRequest = exports.SetDefaultPolicyVersionRequest || (exports.SetDefaultPolicyVersionRequest = {}));
var LoggingOptionsPayload;
(function (LoggingOptionsPayload) {
    /**
     * @internal
     */
    LoggingOptionsPayload.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoggingOptionsPayload = exports.LoggingOptionsPayload || (exports.LoggingOptionsPayload = {}));
var SetLoggingOptionsRequest;
(function (SetLoggingOptionsRequest) {
    /**
     * @internal
     */
    SetLoggingOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetLoggingOptionsRequest = exports.SetLoggingOptionsRequest || (exports.SetLoggingOptionsRequest = {}));
var SetV2LoggingLevelRequest;
(function (SetV2LoggingLevelRequest) {
    /**
     * @internal
     */
    SetV2LoggingLevelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetV2LoggingLevelRequest = exports.SetV2LoggingLevelRequest || (exports.SetV2LoggingLevelRequest = {}));
var SetV2LoggingOptionsRequest;
(function (SetV2LoggingOptionsRequest) {
    /**
     * @internal
     */
    SetV2LoggingOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetV2LoggingOptionsRequest = exports.SetV2LoggingOptionsRequest || (exports.SetV2LoggingOptionsRequest = {}));
var StartAuditMitigationActionsTaskRequest;
(function (StartAuditMitigationActionsTaskRequest) {
    /**
     * @internal
     */
    StartAuditMitigationActionsTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAuditMitigationActionsTaskRequest = exports.StartAuditMitigationActionsTaskRequest || (exports.StartAuditMitigationActionsTaskRequest = {}));
var StartAuditMitigationActionsTaskResponse;
(function (StartAuditMitigationActionsTaskResponse) {
    /**
     * @internal
     */
    StartAuditMitigationActionsTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAuditMitigationActionsTaskResponse = exports.StartAuditMitigationActionsTaskResponse || (exports.StartAuditMitigationActionsTaskResponse = {}));
var TaskAlreadyExistsException;
(function (TaskAlreadyExistsException) {
    /**
     * @internal
     */
    TaskAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskAlreadyExistsException = exports.TaskAlreadyExistsException || (exports.TaskAlreadyExistsException = {}));
var StartDetectMitigationActionsTaskRequest;
(function (StartDetectMitigationActionsTaskRequest) {
    /**
     * @internal
     */
    StartDetectMitigationActionsTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDetectMitigationActionsTaskRequest = exports.StartDetectMitigationActionsTaskRequest || (exports.StartDetectMitigationActionsTaskRequest = {}));
var StartDetectMitigationActionsTaskResponse;
(function (StartDetectMitigationActionsTaskResponse) {
    /**
     * @internal
     */
    StartDetectMitigationActionsTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDetectMitigationActionsTaskResponse = exports.StartDetectMitigationActionsTaskResponse || (exports.StartDetectMitigationActionsTaskResponse = {}));
var StartOnDemandAuditTaskRequest;
(function (StartOnDemandAuditTaskRequest) {
    /**
     * @internal
     */
    StartOnDemandAuditTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartOnDemandAuditTaskRequest = exports.StartOnDemandAuditTaskRequest || (exports.StartOnDemandAuditTaskRequest = {}));
var StartOnDemandAuditTaskResponse;
(function (StartOnDemandAuditTaskResponse) {
    /**
     * @internal
     */
    StartOnDemandAuditTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartOnDemandAuditTaskResponse = exports.StartOnDemandAuditTaskResponse || (exports.StartOnDemandAuditTaskResponse = {}));
var StartThingRegistrationTaskRequest;
(function (StartThingRegistrationTaskRequest) {
    /**
     * @internal
     */
    StartThingRegistrationTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartThingRegistrationTaskRequest = exports.StartThingRegistrationTaskRequest || (exports.StartThingRegistrationTaskRequest = {}));
var StartThingRegistrationTaskResponse;
(function (StartThingRegistrationTaskResponse) {
    /**
     * @internal
     */
    StartThingRegistrationTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartThingRegistrationTaskResponse = exports.StartThingRegistrationTaskResponse || (exports.StartThingRegistrationTaskResponse = {}));
var StopThingRegistrationTaskRequest;
(function (StopThingRegistrationTaskRequest) {
    /**
     * @internal
     */
    StopThingRegistrationTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopThingRegistrationTaskRequest = exports.StopThingRegistrationTaskRequest || (exports.StopThingRegistrationTaskRequest = {}));
var StopThingRegistrationTaskResponse;
(function (StopThingRegistrationTaskResponse) {
    /**
     * @internal
     */
    StopThingRegistrationTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopThingRegistrationTaskResponse = exports.StopThingRegistrationTaskResponse || (exports.StopThingRegistrationTaskResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var TestAuthorizationRequest;
(function (TestAuthorizationRequest) {
    /**
     * @internal
     */
    TestAuthorizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestAuthorizationRequest = exports.TestAuthorizationRequest || (exports.TestAuthorizationRequest = {}));
var TestAuthorizationResponse;
(function (TestAuthorizationResponse) {
    /**
     * @internal
     */
    TestAuthorizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestAuthorizationResponse = exports.TestAuthorizationResponse || (exports.TestAuthorizationResponse = {}));
var InvalidResponseException;
(function (InvalidResponseException) {
    /**
     * @internal
     */
    InvalidResponseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidResponseException = exports.InvalidResponseException || (exports.InvalidResponseException = {}));
var HttpContext;
(function (HttpContext) {
    /**
     * @internal
     */
    HttpContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HttpContext = exports.HttpContext || (exports.HttpContext = {}));
var MqttContext;
(function (MqttContext) {
    /**
     * @internal
     */
    MqttContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MqttContext = exports.MqttContext || (exports.MqttContext = {}));
var TlsContext;
(function (TlsContext) {
    /**
     * @internal
     */
    TlsContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TlsContext = exports.TlsContext || (exports.TlsContext = {}));
var TestInvokeAuthorizerRequest;
(function (TestInvokeAuthorizerRequest) {
    /**
     * @internal
     */
    TestInvokeAuthorizerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestInvokeAuthorizerRequest = exports.TestInvokeAuthorizerRequest || (exports.TestInvokeAuthorizerRequest = {}));
var TestInvokeAuthorizerResponse;
(function (TestInvokeAuthorizerResponse) {
    /**
     * @internal
     */
    TestInvokeAuthorizerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestInvokeAuthorizerResponse = exports.TestInvokeAuthorizerResponse || (exports.TestInvokeAuthorizerResponse = {}));
var TransferCertificateRequest;
(function (TransferCertificateRequest) {
    /**
     * @internal
     */
    TransferCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransferCertificateRequest = exports.TransferCertificateRequest || (exports.TransferCertificateRequest = {}));
var TransferCertificateResponse;
(function (TransferCertificateResponse) {
    /**
     * @internal
     */
    TransferCertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransferCertificateResponse = exports.TransferCertificateResponse || (exports.TransferCertificateResponse = {}));
var TransferConflictException;
(function (TransferConflictException) {
    /**
     * @internal
     */
    TransferConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransferConflictException = exports.TransferConflictException || (exports.TransferConflictException = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateAccountAuditConfigurationRequest;
(function (UpdateAccountAuditConfigurationRequest) {
    /**
     * @internal
     */
    UpdateAccountAuditConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAccountAuditConfigurationRequest = exports.UpdateAccountAuditConfigurationRequest || (exports.UpdateAccountAuditConfigurationRequest = {}));
var UpdateAccountAuditConfigurationResponse;
(function (UpdateAccountAuditConfigurationResponse) {
    /**
     * @internal
     */
    UpdateAccountAuditConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAccountAuditConfigurationResponse = exports.UpdateAccountAuditConfigurationResponse || (exports.UpdateAccountAuditConfigurationResponse = {}));
var UpdateAuditSuppressionRequest;
(function (UpdateAuditSuppressionRequest) {
    /**
     * @internal
     */
    UpdateAuditSuppressionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAuditSuppressionRequest = exports.UpdateAuditSuppressionRequest || (exports.UpdateAuditSuppressionRequest = {}));
var UpdateAuditSuppressionResponse;
(function (UpdateAuditSuppressionResponse) {
    /**
     * @internal
     */
    UpdateAuditSuppressionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAuditSuppressionResponse = exports.UpdateAuditSuppressionResponse || (exports.UpdateAuditSuppressionResponse = {}));
var UpdateAuthorizerRequest;
(function (UpdateAuthorizerRequest) {
    /**
     * @internal
     */
    UpdateAuthorizerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAuthorizerRequest = exports.UpdateAuthorizerRequest || (exports.UpdateAuthorizerRequest = {}));
var UpdateAuthorizerResponse;
(function (UpdateAuthorizerResponse) {
    /**
     * @internal
     */
    UpdateAuthorizerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAuthorizerResponse = exports.UpdateAuthorizerResponse || (exports.UpdateAuthorizerResponse = {}));
var UpdateBillingGroupRequest;
(function (UpdateBillingGroupRequest) {
    /**
     * @internal
     */
    UpdateBillingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBillingGroupRequest = exports.UpdateBillingGroupRequest || (exports.UpdateBillingGroupRequest = {}));
var UpdateBillingGroupResponse;
(function (UpdateBillingGroupResponse) {
    /**
     * @internal
     */
    UpdateBillingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBillingGroupResponse = exports.UpdateBillingGroupResponse || (exports.UpdateBillingGroupResponse = {}));
var UpdateCACertificateRequest;
(function (UpdateCACertificateRequest) {
    /**
     * @internal
     */
    UpdateCACertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCACertificateRequest = exports.UpdateCACertificateRequest || (exports.UpdateCACertificateRequest = {}));
var UpdateCertificateRequest;
(function (UpdateCertificateRequest) {
    /**
     * @internal
     */
    UpdateCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCertificateRequest = exports.UpdateCertificateRequest || (exports.UpdateCertificateRequest = {}));
var UpdateCustomMetricRequest;
(function (UpdateCustomMetricRequest) {
    /**
     * @internal
     */
    UpdateCustomMetricRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCustomMetricRequest = exports.UpdateCustomMetricRequest || (exports.UpdateCustomMetricRequest = {}));
var UpdateCustomMetricResponse;
(function (UpdateCustomMetricResponse) {
    /**
     * @internal
     */
    UpdateCustomMetricResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCustomMetricResponse = exports.UpdateCustomMetricResponse || (exports.UpdateCustomMetricResponse = {}));
var UpdateDimensionRequest;
(function (UpdateDimensionRequest) {
    /**
     * @internal
     */
    UpdateDimensionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDimensionRequest = exports.UpdateDimensionRequest || (exports.UpdateDimensionRequest = {}));
var UpdateDimensionResponse;
(function (UpdateDimensionResponse) {
    /**
     * @internal
     */
    UpdateDimensionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDimensionResponse = exports.UpdateDimensionResponse || (exports.UpdateDimensionResponse = {}));
var UpdateDomainConfigurationRequest;
(function (UpdateDomainConfigurationRequest) {
    /**
     * @internal
     */
    UpdateDomainConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDomainConfigurationRequest = exports.UpdateDomainConfigurationRequest || (exports.UpdateDomainConfigurationRequest = {}));
var UpdateDomainConfigurationResponse;
(function (UpdateDomainConfigurationResponse) {
    /**
     * @internal
     */
    UpdateDomainConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDomainConfigurationResponse = exports.UpdateDomainConfigurationResponse || (exports.UpdateDomainConfigurationResponse = {}));
var UpdateDynamicThingGroupRequest;
(function (UpdateDynamicThingGroupRequest) {
    /**
     * @internal
     */
    UpdateDynamicThingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDynamicThingGroupRequest = exports.UpdateDynamicThingGroupRequest || (exports.UpdateDynamicThingGroupRequest = {}));
var UpdateDynamicThingGroupResponse;
(function (UpdateDynamicThingGroupResponse) {
    /**
     * @internal
     */
    UpdateDynamicThingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDynamicThingGroupResponse = exports.UpdateDynamicThingGroupResponse || (exports.UpdateDynamicThingGroupResponse = {}));
var UpdateEventConfigurationsRequest;
(function (UpdateEventConfigurationsRequest) {
    /**
     * @internal
     */
    UpdateEventConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEventConfigurationsRequest = exports.UpdateEventConfigurationsRequest || (exports.UpdateEventConfigurationsRequest = {}));
var UpdateEventConfigurationsResponse;
(function (UpdateEventConfigurationsResponse) {
    /**
     * @internal
     */
    UpdateEventConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEventConfigurationsResponse = exports.UpdateEventConfigurationsResponse || (exports.UpdateEventConfigurationsResponse = {}));
var UpdateIndexingConfigurationRequest;
(function (UpdateIndexingConfigurationRequest) {
    /**
     * @internal
     */
    UpdateIndexingConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIndexingConfigurationRequest = exports.UpdateIndexingConfigurationRequest || (exports.UpdateIndexingConfigurationRequest = {}));
var UpdateIndexingConfigurationResponse;
(function (UpdateIndexingConfigurationResponse) {
    /**
     * @internal
     */
    UpdateIndexingConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIndexingConfigurationResponse = exports.UpdateIndexingConfigurationResponse || (exports.UpdateIndexingConfigurationResponse = {}));
var UpdateJobRequest;
(function (UpdateJobRequest) {
    /**
     * @internal
     */
    UpdateJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJobRequest = exports.UpdateJobRequest || (exports.UpdateJobRequest = {}));
var UpdateMitigationActionRequest;
(function (UpdateMitigationActionRequest) {
    /**
     * @internal
     */
    UpdateMitigationActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMitigationActionRequest = exports.UpdateMitigationActionRequest || (exports.UpdateMitigationActionRequest = {}));
var UpdateMitigationActionResponse;
(function (UpdateMitigationActionResponse) {
    /**
     * @internal
     */
    UpdateMitigationActionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMitigationActionResponse = exports.UpdateMitigationActionResponse || (exports.UpdateMitigationActionResponse = {}));
var UpdateProvisioningTemplateRequest;
(function (UpdateProvisioningTemplateRequest) {
    /**
     * @internal
     */
    UpdateProvisioningTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProvisioningTemplateRequest = exports.UpdateProvisioningTemplateRequest || (exports.UpdateProvisioningTemplateRequest = {}));
var UpdateProvisioningTemplateResponse;
(function (UpdateProvisioningTemplateResponse) {
    /**
     * @internal
     */
    UpdateProvisioningTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProvisioningTemplateResponse = exports.UpdateProvisioningTemplateResponse || (exports.UpdateProvisioningTemplateResponse = {}));
var UpdateRoleAliasRequest;
(function (UpdateRoleAliasRequest) {
    /**
     * @internal
     */
    UpdateRoleAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRoleAliasRequest = exports.UpdateRoleAliasRequest || (exports.UpdateRoleAliasRequest = {}));
var UpdateRoleAliasResponse;
(function (UpdateRoleAliasResponse) {
    /**
     * @internal
     */
    UpdateRoleAliasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRoleAliasResponse = exports.UpdateRoleAliasResponse || (exports.UpdateRoleAliasResponse = {}));
var UpdateScheduledAuditRequest;
(function (UpdateScheduledAuditRequest) {
    /**
     * @internal
     */
    UpdateScheduledAuditRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateScheduledAuditRequest = exports.UpdateScheduledAuditRequest || (exports.UpdateScheduledAuditRequest = {}));
var UpdateScheduledAuditResponse;
(function (UpdateScheduledAuditResponse) {
    /**
     * @internal
     */
    UpdateScheduledAuditResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateScheduledAuditResponse = exports.UpdateScheduledAuditResponse || (exports.UpdateScheduledAuditResponse = {}));
var UpdateSecurityProfileRequest;
(function (UpdateSecurityProfileRequest) {
    /**
     * @internal
     */
    UpdateSecurityProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSecurityProfileRequest = exports.UpdateSecurityProfileRequest || (exports.UpdateSecurityProfileRequest = {}));
var UpdateSecurityProfileResponse;
(function (UpdateSecurityProfileResponse) {
    /**
     * @internal
     */
    UpdateSecurityProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSecurityProfileResponse = exports.UpdateSecurityProfileResponse || (exports.UpdateSecurityProfileResponse = {}));
var UpdateStreamRequest;
(function (UpdateStreamRequest) {
    /**
     * @internal
     */
    UpdateStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStreamRequest = exports.UpdateStreamRequest || (exports.UpdateStreamRequest = {}));
var UpdateStreamResponse;
(function (UpdateStreamResponse) {
    /**
     * @internal
     */
    UpdateStreamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStreamResponse = exports.UpdateStreamResponse || (exports.UpdateStreamResponse = {}));
var UpdateThingRequest;
(function (UpdateThingRequest) {
    /**
     * @internal
     */
    UpdateThingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThingRequest = exports.UpdateThingRequest || (exports.UpdateThingRequest = {}));
var UpdateThingResponse;
(function (UpdateThingResponse) {
    /**
     * @internal
     */
    UpdateThingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThingResponse = exports.UpdateThingResponse || (exports.UpdateThingResponse = {}));
var UpdateThingGroupRequest;
(function (UpdateThingGroupRequest) {
    /**
     * @internal
     */
    UpdateThingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThingGroupRequest = exports.UpdateThingGroupRequest || (exports.UpdateThingGroupRequest = {}));
var UpdateThingGroupResponse;
(function (UpdateThingGroupResponse) {
    /**
     * @internal
     */
    UpdateThingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThingGroupResponse = exports.UpdateThingGroupResponse || (exports.UpdateThingGroupResponse = {}));
var UpdateThingGroupsForThingRequest;
(function (UpdateThingGroupsForThingRequest) {
    /**
     * @internal
     */
    UpdateThingGroupsForThingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThingGroupsForThingRequest = exports.UpdateThingGroupsForThingRequest || (exports.UpdateThingGroupsForThingRequest = {}));
var UpdateThingGroupsForThingResponse;
(function (UpdateThingGroupsForThingResponse) {
    /**
     * @internal
     */
    UpdateThingGroupsForThingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThingGroupsForThingResponse = exports.UpdateThingGroupsForThingResponse || (exports.UpdateThingGroupsForThingResponse = {}));
var UpdateTopicRuleDestinationRequest;
(function (UpdateTopicRuleDestinationRequest) {
    /**
     * @internal
     */
    UpdateTopicRuleDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTopicRuleDestinationRequest = exports.UpdateTopicRuleDestinationRequest || (exports.UpdateTopicRuleDestinationRequest = {}));
var UpdateTopicRuleDestinationResponse;
(function (UpdateTopicRuleDestinationResponse) {
    /**
     * @internal
     */
    UpdateTopicRuleDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTopicRuleDestinationResponse = exports.UpdateTopicRuleDestinationResponse || (exports.UpdateTopicRuleDestinationResponse = {}));
var ValidateSecurityProfileBehaviorsRequest;
(function (ValidateSecurityProfileBehaviorsRequest) {
    /**
     * @internal
     */
    ValidateSecurityProfileBehaviorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidateSecurityProfileBehaviorsRequest = exports.ValidateSecurityProfileBehaviorsRequest || (exports.ValidateSecurityProfileBehaviorsRequest = {}));
var ValidationError;
(function (ValidationError) {
    /**
     * @internal
     */
    ValidationError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationError = exports.ValidationError || (exports.ValidationError = {}));
var ValidateSecurityProfileBehaviorsResponse;
(function (ValidateSecurityProfileBehaviorsResponse) {
    /**
     * @internal
     */
    ValidateSecurityProfileBehaviorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidateSecurityProfileBehaviorsResponse = exports.ValidateSecurityProfileBehaviorsResponse || (exports.ValidateSecurityProfileBehaviorsResponse = {}));
//# sourceMappingURL=models_2.js.map