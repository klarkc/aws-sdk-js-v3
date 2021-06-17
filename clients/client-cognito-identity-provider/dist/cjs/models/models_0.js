"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDeleteUserAttributesResponse = exports.AdminDeleteUserAttributesRequest = exports.AdminDeleteUserRequest = exports.AdminCreateUserConfigType = exports.MessageTemplateType = exports.UsernameExistsException = exports.UnsupportedUserStateException = exports.PreconditionNotMetException = exports.InvalidSmsRoleTrustRelationshipException = exports.InvalidSmsRoleAccessPolicyException = exports.InvalidPasswordException = exports.CodeDeliveryFailureException = exports.AdminCreateUserResponse = exports.UserType = exports.UserStatusType = exports.MFAOptionType = exports.AdminCreateUserRequest = exports.AttributeType = exports.MessageActionType = exports.DeliveryMediumType = exports.UserLambdaValidationException = exports.UnexpectedLambdaException = exports.TooManyFailedAttemptsException = exports.LimitExceededException = exports.InvalidLambdaResponseException = exports.AdminConfirmSignUpResponse = exports.AdminConfirmSignUpRequest = exports.UserNotFoundException = exports.AdminAddUserToGroupRequest = exports.UserImportInProgressException = exports.TooManyRequestsException = exports.ResourceNotFoundException = exports.NotAuthorizedException = exports.InvalidParameterException = exports.InternalErrorException = exports.AddCustomAttributesResponse = exports.AddCustomAttributesRequest = exports.SchemaAttributeType = exports.StringAttributeConstraintsType = exports.NumberAttributeConstraintsType = exports.AttributeDataType = exports.AccountTakeoverRiskConfigurationType = exports.NotifyConfigurationType = exports.NotifyEmailType = exports.AccountTakeoverActionsType = exports.AccountTakeoverActionType = exports.AccountTakeoverEventActionType = exports.AccountRecoverySettingType = exports.RecoveryOptionType = exports.RecoveryOptionNameType = void 0;
exports.AdminRemoveUserFromGroupRequest = exports.UserPoolAddOnNotEnabledException = exports.AdminListUserAuthEventsResponse = exports.AuthEventType = exports.EventType = exports.EventRiskType = exports.RiskLevelType = exports.RiskDecisionType = exports.EventResponseType = exports.EventFeedbackType = exports.FeedbackValueType = exports.EventContextDataType = exports.ChallengeResponseType = exports.ChallengeResponse = exports.ChallengeName = exports.AdminListUserAuthEventsRequest = exports.AdminListGroupsForUserResponse = exports.GroupType = exports.AdminListGroupsForUserRequest = exports.AdminListDevicesResponse = exports.AdminListDevicesRequest = exports.AdminLinkProviderForUserResponse = exports.AdminLinkProviderForUserRequest = exports.UserNotConfirmedException = exports.PasswordResetRequiredException = exports.MFAMethodNotFoundException = exports.AdminInitiateAuthResponse = exports.ChallengeNameType = exports.AuthenticationResultType = exports.NewDeviceMetadataType = exports.AdminInitiateAuthRequest = exports.ContextDataType = exports.HttpHeader = exports.AuthFlowType = exports.AnalyticsMetadataType = exports.AdminGetUserResponse = exports.AdminGetUserRequest = exports.AdminGetDeviceResponse = exports.DeviceType = exports.AdminGetDeviceRequest = exports.InvalidUserPoolConfigurationException = exports.AdminForgetDeviceRequest = exports.AdminEnableUserResponse = exports.AdminEnableUserRequest = exports.AdminDisableUserResponse = exports.AdminDisableUserRequest = exports.AliasExistsException = exports.AdminDisableProviderForUserResponse = exports.AdminDisableProviderForUserRequest = exports.ProviderUserIdentifierType = void 0;
exports.ResourceServerScopeType = exports.DuplicateProviderException = exports.CreateIdentityProviderResponse = exports.IdentityProviderType = exports.CreateIdentityProviderRequest = exports.IdentityProviderTypeType = exports.GroupExistsException = exports.CreateGroupResponse = exports.CreateGroupRequest = exports.ConfirmSignUpResponse = exports.ConfirmSignUpRequest = exports.ConfirmForgotPasswordResponse = exports.ConfirmForgotPasswordRequest = exports.UserContextDataType = exports.ConfirmDeviceResponse = exports.ConfirmDeviceRequest = exports.DeviceSecretVerifierConfigType = exports.ChangePasswordResponse = exports.ChangePasswordRequest = exports.ConcurrentModificationException = exports.AssociateSoftwareTokenResponse = exports.AssociateSoftwareTokenRequest = exports.AnalyticsConfigurationType = exports.AliasAttributeType = exports.AdvancedSecurityModeType = exports.AdminUserGlobalSignOutResponse = exports.AdminUserGlobalSignOutRequest = exports.AdminUpdateUserAttributesResponse = exports.AdminUpdateUserAttributesRequest = exports.AdminUpdateDeviceStatusResponse = exports.AdminUpdateDeviceStatusRequest = exports.DeviceRememberedStatusType = exports.AdminUpdateAuthEventFeedbackResponse = exports.AdminUpdateAuthEventFeedbackRequest = exports.AdminSetUserSettingsResponse = exports.AdminSetUserSettingsRequest = exports.AdminSetUserPasswordResponse = exports.AdminSetUserPasswordRequest = exports.AdminSetUserMFAPreferenceResponse = exports.AdminSetUserMFAPreferenceRequest = exports.SoftwareTokenMfaSettingsType = exports.SMSMfaSettingsType = exports.SoftwareTokenMFANotFoundException = exports.ExpiredCodeException = exports.CodeMismatchException = exports.AdminRespondToAuthChallengeResponse = exports.AdminRespondToAuthChallengeRequest = exports.InvalidEmailRoleAccessPolicyException = exports.AdminResetUserPasswordResponse = exports.AdminResetUserPasswordRequest = void 0;
exports.DeleteUserAttributesResponse = exports.DeleteUserAttributesRequest = exports.DeleteUserRequest = exports.DeleteResourceServerRequest = exports.UnsupportedIdentityProviderException = exports.DeleteIdentityProviderRequest = exports.DeleteGroupRequest = exports.CreateUserPoolDomainResponse = exports.CreateUserPoolDomainRequest = exports.CustomDomainConfigType = exports.ScopeDoesNotExistException = exports.InvalidOAuthFlowException = exports.CreateUserPoolClientResponse = exports.UserPoolClientType = exports.CreateUserPoolClientRequest = exports.TokenValidityUnitsType = exports.TimeUnitsType = exports.PreventUserExistenceErrorTypes = exports.ExplicitAuthFlowsType = exports.OAuthFlowType = exports.UserPoolTaggingException = exports.CreateUserPoolResponse = exports.UserPoolType = exports.StatusType = exports.CreateUserPoolRequest = exports.VerificationMessageTemplateType = exports.DefaultEmailOptionType = exports.UserPoolAddOnsType = exports.UsernameConfigurationType = exports.UsernameAttributeType = exports.SmsConfigurationType = exports.UserPoolPolicyType = exports.PasswordPolicyType = exports.UserPoolMfaType = exports.LambdaConfigType = exports.CustomSMSLambdaVersionConfigType = exports.CustomSMSSenderLambdaVersionType = exports.CustomEmailLambdaVersionConfigType = exports.CustomEmailSenderLambdaVersionType = exports.EmailConfigurationType = exports.EmailSendingAccountType = exports.DeviceConfigurationType = exports.VerifiedAttributeType = exports.CreateUserImportJobResponse = exports.UserImportJobType = exports.UserImportJobStatusType = exports.CreateUserImportJobRequest = exports.CreateResourceServerResponse = exports.ResourceServerType = exports.CreateResourceServerRequest = void 0;
exports.SoftwareTokenMfaConfigType = exports.SmsMfaConfigType = exports.GetUserPoolMfaConfigRequest = exports.GetUserAttributeVerificationCodeResponse = exports.GetUserAttributeVerificationCodeRequest = exports.GetUserResponse = exports.GetUserRequest = exports.GetUICustomizationResponse = exports.UICustomizationType = exports.GetUICustomizationRequest = exports.GetSigningCertificateResponse = exports.GetSigningCertificateRequest = exports.GetIdentityProviderByIdentifierResponse = exports.GetIdentityProviderByIdentifierRequest = exports.GetGroupResponse = exports.GetGroupRequest = exports.GetDeviceResponse = exports.GetDeviceRequest = exports.GetCSVHeaderResponse = exports.GetCSVHeaderRequest = exports.ForgotPasswordResponse = exports.CodeDeliveryDetailsType = exports.ForgotPasswordRequest = exports.ForgetDeviceRequest = exports.DescribeUserPoolDomainResponse = exports.DomainDescriptionType = exports.DomainStatusType = exports.DescribeUserPoolDomainRequest = exports.DescribeUserPoolClientResponse = exports.DescribeUserPoolClientRequest = exports.DescribeUserPoolResponse = exports.DescribeUserPoolRequest = exports.DescribeUserImportJobResponse = exports.DescribeUserImportJobRequest = exports.DescribeRiskConfigurationResponse = exports.RiskConfigurationType = exports.RiskExceptionConfigurationType = exports.CompromisedCredentialsRiskConfigurationType = exports.EventFilterType = exports.CompromisedCredentialsActionsType = exports.CompromisedCredentialsEventActionType = exports.DescribeRiskConfigurationRequest = exports.DescribeResourceServerResponse = exports.DescribeResourceServerRequest = exports.DescribeIdentityProviderResponse = exports.DescribeIdentityProviderRequest = exports.DeleteUserPoolDomainResponse = exports.DeleteUserPoolDomainRequest = exports.DeleteUserPoolClientRequest = exports.DeleteUserPoolRequest = void 0;
exports.TagResourceResponse = exports.TagResourceRequest = exports.StopUserImportJobResponse = exports.StopUserImportJobRequest = exports.StartUserImportJobResponse = exports.StartUserImportJobRequest = exports.SignUpResponse = exports.SignUpRequest = exports.SetUserSettingsResponse = exports.SetUserSettingsRequest = exports.SetUserPoolMfaConfigResponse = exports.SetUserPoolMfaConfigRequest = exports.SetUserMFAPreferenceResponse = exports.SetUserMFAPreferenceRequest = exports.SetUICustomizationResponse = exports.SetUICustomizationRequest = exports.SetRiskConfigurationResponse = exports.SetRiskConfigurationRequest = exports.RespondToAuthChallengeResponse = exports.RespondToAuthChallengeRequest = exports.ResendConfirmationCodeResponse = exports.ResendConfirmationCodeRequest = exports.ListUsersInGroupResponse = exports.ListUsersInGroupRequest = exports.ListUsersResponse = exports.ListUsersRequest = exports.ListUserPoolsResponse = exports.UserPoolDescriptionType = exports.ListUserPoolsRequest = exports.ListUserPoolClientsResponse = exports.UserPoolClientDescription = exports.ListUserPoolClientsRequest = exports.ListUserImportJobsResponse = exports.ListUserImportJobsRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListResourceServersResponse = exports.ListResourceServersRequest = exports.ListIdentityProvidersResponse = exports.ProviderDescription = exports.ListIdentityProvidersRequest = exports.ListGroupsResponse = exports.ListGroupsRequest = exports.ListDevicesResponse = exports.ListDevicesRequest = exports.InitiateAuthResponse = exports.InitiateAuthRequest = exports.GlobalSignOutResponse = exports.GlobalSignOutRequest = exports.GetUserPoolMfaConfigResponse = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var RecoveryOptionNameType;
(function (RecoveryOptionNameType) {
    RecoveryOptionNameType["ADMIN_ONLY"] = "admin_only";
    RecoveryOptionNameType["VERIFIED_EMAIL"] = "verified_email";
    RecoveryOptionNameType["VERIFIED_PHONE_NUMBER"] = "verified_phone_number";
})(RecoveryOptionNameType = exports.RecoveryOptionNameType || (exports.RecoveryOptionNameType = {}));
var RecoveryOptionType;
(function (RecoveryOptionType) {
    /**
     * @internal
     */
    RecoveryOptionType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecoveryOptionType = exports.RecoveryOptionType || (exports.RecoveryOptionType = {}));
var AccountRecoverySettingType;
(function (AccountRecoverySettingType) {
    /**
     * @internal
     */
    AccountRecoverySettingType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountRecoverySettingType = exports.AccountRecoverySettingType || (exports.AccountRecoverySettingType = {}));
var AccountTakeoverEventActionType;
(function (AccountTakeoverEventActionType) {
    AccountTakeoverEventActionType["BLOCK"] = "BLOCK";
    AccountTakeoverEventActionType["MFA_IF_CONFIGURED"] = "MFA_IF_CONFIGURED";
    AccountTakeoverEventActionType["MFA_REQUIRED"] = "MFA_REQUIRED";
    AccountTakeoverEventActionType["NO_ACTION"] = "NO_ACTION";
})(AccountTakeoverEventActionType = exports.AccountTakeoverEventActionType || (exports.AccountTakeoverEventActionType = {}));
var AccountTakeoverActionType;
(function (AccountTakeoverActionType) {
    /**
     * @internal
     */
    AccountTakeoverActionType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountTakeoverActionType = exports.AccountTakeoverActionType || (exports.AccountTakeoverActionType = {}));
var AccountTakeoverActionsType;
(function (AccountTakeoverActionsType) {
    /**
     * @internal
     */
    AccountTakeoverActionsType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountTakeoverActionsType = exports.AccountTakeoverActionsType || (exports.AccountTakeoverActionsType = {}));
var NotifyEmailType;
(function (NotifyEmailType) {
    /**
     * @internal
     */
    NotifyEmailType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotifyEmailType = exports.NotifyEmailType || (exports.NotifyEmailType = {}));
var NotifyConfigurationType;
(function (NotifyConfigurationType) {
    /**
     * @internal
     */
    NotifyConfigurationType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotifyConfigurationType = exports.NotifyConfigurationType || (exports.NotifyConfigurationType = {}));
var AccountTakeoverRiskConfigurationType;
(function (AccountTakeoverRiskConfigurationType) {
    /**
     * @internal
     */
    AccountTakeoverRiskConfigurationType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountTakeoverRiskConfigurationType = exports.AccountTakeoverRiskConfigurationType || (exports.AccountTakeoverRiskConfigurationType = {}));
var AttributeDataType;
(function (AttributeDataType) {
    AttributeDataType["BOOLEAN"] = "Boolean";
    AttributeDataType["DATETIME"] = "DateTime";
    AttributeDataType["NUMBER"] = "Number";
    AttributeDataType["STRING"] = "String";
})(AttributeDataType = exports.AttributeDataType || (exports.AttributeDataType = {}));
var NumberAttributeConstraintsType;
(function (NumberAttributeConstraintsType) {
    /**
     * @internal
     */
    NumberAttributeConstraintsType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NumberAttributeConstraintsType = exports.NumberAttributeConstraintsType || (exports.NumberAttributeConstraintsType = {}));
var StringAttributeConstraintsType;
(function (StringAttributeConstraintsType) {
    /**
     * @internal
     */
    StringAttributeConstraintsType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StringAttributeConstraintsType = exports.StringAttributeConstraintsType || (exports.StringAttributeConstraintsType = {}));
var SchemaAttributeType;
(function (SchemaAttributeType) {
    /**
     * @internal
     */
    SchemaAttributeType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchemaAttributeType = exports.SchemaAttributeType || (exports.SchemaAttributeType = {}));
var AddCustomAttributesRequest;
(function (AddCustomAttributesRequest) {
    /**
     * @internal
     */
    AddCustomAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddCustomAttributesRequest = exports.AddCustomAttributesRequest || (exports.AddCustomAttributesRequest = {}));
var AddCustomAttributesResponse;
(function (AddCustomAttributesResponse) {
    /**
     * @internal
     */
    AddCustomAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddCustomAttributesResponse = exports.AddCustomAttributesResponse || (exports.AddCustomAttributesResponse = {}));
var InternalErrorException;
(function (InternalErrorException) {
    /**
     * @internal
     */
    InternalErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalErrorException = exports.InternalErrorException || (exports.InternalErrorException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var NotAuthorizedException;
(function (NotAuthorizedException) {
    /**
     * @internal
     */
    NotAuthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotAuthorizedException = exports.NotAuthorizedException || (exports.NotAuthorizedException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var UserImportInProgressException;
(function (UserImportInProgressException) {
    /**
     * @internal
     */
    UserImportInProgressException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserImportInProgressException = exports.UserImportInProgressException || (exports.UserImportInProgressException = {}));
var AdminAddUserToGroupRequest;
(function (AdminAddUserToGroupRequest) {
    /**
     * @internal
     */
    AdminAddUserToGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminAddUserToGroupRequest = exports.AdminAddUserToGroupRequest || (exports.AdminAddUserToGroupRequest = {}));
var UserNotFoundException;
(function (UserNotFoundException) {
    /**
     * @internal
     */
    UserNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserNotFoundException = exports.UserNotFoundException || (exports.UserNotFoundException = {}));
var AdminConfirmSignUpRequest;
(function (AdminConfirmSignUpRequest) {
    /**
     * @internal
     */
    AdminConfirmSignUpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminConfirmSignUpRequest = exports.AdminConfirmSignUpRequest || (exports.AdminConfirmSignUpRequest = {}));
var AdminConfirmSignUpResponse;
(function (AdminConfirmSignUpResponse) {
    /**
     * @internal
     */
    AdminConfirmSignUpResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminConfirmSignUpResponse = exports.AdminConfirmSignUpResponse || (exports.AdminConfirmSignUpResponse = {}));
var InvalidLambdaResponseException;
(function (InvalidLambdaResponseException) {
    /**
     * @internal
     */
    InvalidLambdaResponseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidLambdaResponseException = exports.InvalidLambdaResponseException || (exports.InvalidLambdaResponseException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var TooManyFailedAttemptsException;
(function (TooManyFailedAttemptsException) {
    /**
     * @internal
     */
    TooManyFailedAttemptsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyFailedAttemptsException = exports.TooManyFailedAttemptsException || (exports.TooManyFailedAttemptsException = {}));
var UnexpectedLambdaException;
(function (UnexpectedLambdaException) {
    /**
     * @internal
     */
    UnexpectedLambdaException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnexpectedLambdaException = exports.UnexpectedLambdaException || (exports.UnexpectedLambdaException = {}));
var UserLambdaValidationException;
(function (UserLambdaValidationException) {
    /**
     * @internal
     */
    UserLambdaValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserLambdaValidationException = exports.UserLambdaValidationException || (exports.UserLambdaValidationException = {}));
var DeliveryMediumType;
(function (DeliveryMediumType) {
    DeliveryMediumType["EMAIL"] = "EMAIL";
    DeliveryMediumType["SMS"] = "SMS";
})(DeliveryMediumType = exports.DeliveryMediumType || (exports.DeliveryMediumType = {}));
var MessageActionType;
(function (MessageActionType) {
    MessageActionType["RESEND"] = "RESEND";
    MessageActionType["SUPPRESS"] = "SUPPRESS";
})(MessageActionType = exports.MessageActionType || (exports.MessageActionType = {}));
var AttributeType;
(function (AttributeType) {
    /**
     * @internal
     */
    AttributeType.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Value && { Value: smithy_client_1.SENSITIVE_STRING }),
    });
})(AttributeType = exports.AttributeType || (exports.AttributeType = {}));
var AdminCreateUserRequest;
(function (AdminCreateUserRequest) {
    /**
     * @internal
     */
    AdminCreateUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.UserAttributes && {
            UserAttributes: obj.UserAttributes.map((item) => AttributeType.filterSensitiveLog(item)),
        }),
        ...(obj.ValidationData && {
            ValidationData: obj.ValidationData.map((item) => AttributeType.filterSensitiveLog(item)),
        }),
        ...(obj.TemporaryPassword && { TemporaryPassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminCreateUserRequest = exports.AdminCreateUserRequest || (exports.AdminCreateUserRequest = {}));
var MFAOptionType;
(function (MFAOptionType) {
    /**
     * @internal
     */
    MFAOptionType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MFAOptionType = exports.MFAOptionType || (exports.MFAOptionType = {}));
var UserStatusType;
(function (UserStatusType) {
    UserStatusType["ARCHIVED"] = "ARCHIVED";
    UserStatusType["COMPROMISED"] = "COMPROMISED";
    UserStatusType["CONFIRMED"] = "CONFIRMED";
    UserStatusType["FORCE_CHANGE_PASSWORD"] = "FORCE_CHANGE_PASSWORD";
    UserStatusType["RESET_REQUIRED"] = "RESET_REQUIRED";
    UserStatusType["UNCONFIRMED"] = "UNCONFIRMED";
    UserStatusType["UNKNOWN"] = "UNKNOWN";
})(UserStatusType = exports.UserStatusType || (exports.UserStatusType = {}));
var UserType;
(function (UserType) {
    /**
     * @internal
     */
    UserType.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeType.filterSensitiveLog(item)) }),
    });
})(UserType = exports.UserType || (exports.UserType = {}));
var AdminCreateUserResponse;
(function (AdminCreateUserResponse) {
    /**
     * @internal
     */
    AdminCreateUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.User && { User: UserType.filterSensitiveLog(obj.User) }),
    });
})(AdminCreateUserResponse = exports.AdminCreateUserResponse || (exports.AdminCreateUserResponse = {}));
var CodeDeliveryFailureException;
(function (CodeDeliveryFailureException) {
    /**
     * @internal
     */
    CodeDeliveryFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeDeliveryFailureException = exports.CodeDeliveryFailureException || (exports.CodeDeliveryFailureException = {}));
var InvalidPasswordException;
(function (InvalidPasswordException) {
    /**
     * @internal
     */
    InvalidPasswordException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPasswordException = exports.InvalidPasswordException || (exports.InvalidPasswordException = {}));
var InvalidSmsRoleAccessPolicyException;
(function (InvalidSmsRoleAccessPolicyException) {
    /**
     * @internal
     */
    InvalidSmsRoleAccessPolicyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSmsRoleAccessPolicyException = exports.InvalidSmsRoleAccessPolicyException || (exports.InvalidSmsRoleAccessPolicyException = {}));
var InvalidSmsRoleTrustRelationshipException;
(function (InvalidSmsRoleTrustRelationshipException) {
    /**
     * @internal
     */
    InvalidSmsRoleTrustRelationshipException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSmsRoleTrustRelationshipException = exports.InvalidSmsRoleTrustRelationshipException || (exports.InvalidSmsRoleTrustRelationshipException = {}));
var PreconditionNotMetException;
(function (PreconditionNotMetException) {
    /**
     * @internal
     */
    PreconditionNotMetException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PreconditionNotMetException = exports.PreconditionNotMetException || (exports.PreconditionNotMetException = {}));
var UnsupportedUserStateException;
(function (UnsupportedUserStateException) {
    /**
     * @internal
     */
    UnsupportedUserStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedUserStateException = exports.UnsupportedUserStateException || (exports.UnsupportedUserStateException = {}));
var UsernameExistsException;
(function (UsernameExistsException) {
    /**
     * @internal
     */
    UsernameExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsernameExistsException = exports.UsernameExistsException || (exports.UsernameExistsException = {}));
var MessageTemplateType;
(function (MessageTemplateType) {
    /**
     * @internal
     */
    MessageTemplateType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageTemplateType = exports.MessageTemplateType || (exports.MessageTemplateType = {}));
var AdminCreateUserConfigType;
(function (AdminCreateUserConfigType) {
    /**
     * @internal
     */
    AdminCreateUserConfigType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminCreateUserConfigType = exports.AdminCreateUserConfigType || (exports.AdminCreateUserConfigType = {}));
var AdminDeleteUserRequest;
(function (AdminDeleteUserRequest) {
    /**
     * @internal
     */
    AdminDeleteUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminDeleteUserRequest = exports.AdminDeleteUserRequest || (exports.AdminDeleteUserRequest = {}));
var AdminDeleteUserAttributesRequest;
(function (AdminDeleteUserAttributesRequest) {
    /**
     * @internal
     */
    AdminDeleteUserAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminDeleteUserAttributesRequest = exports.AdminDeleteUserAttributesRequest || (exports.AdminDeleteUserAttributesRequest = {}));
var AdminDeleteUserAttributesResponse;
(function (AdminDeleteUserAttributesResponse) {
    /**
     * @internal
     */
    AdminDeleteUserAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminDeleteUserAttributesResponse = exports.AdminDeleteUserAttributesResponse || (exports.AdminDeleteUserAttributesResponse = {}));
var ProviderUserIdentifierType;
(function (ProviderUserIdentifierType) {
    /**
     * @internal
     */
    ProviderUserIdentifierType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProviderUserIdentifierType = exports.ProviderUserIdentifierType || (exports.ProviderUserIdentifierType = {}));
var AdminDisableProviderForUserRequest;
(function (AdminDisableProviderForUserRequest) {
    /**
     * @internal
     */
    AdminDisableProviderForUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminDisableProviderForUserRequest = exports.AdminDisableProviderForUserRequest || (exports.AdminDisableProviderForUserRequest = {}));
var AdminDisableProviderForUserResponse;
(function (AdminDisableProviderForUserResponse) {
    /**
     * @internal
     */
    AdminDisableProviderForUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminDisableProviderForUserResponse = exports.AdminDisableProviderForUserResponse || (exports.AdminDisableProviderForUserResponse = {}));
var AliasExistsException;
(function (AliasExistsException) {
    /**
     * @internal
     */
    AliasExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AliasExistsException = exports.AliasExistsException || (exports.AliasExistsException = {}));
var AdminDisableUserRequest;
(function (AdminDisableUserRequest) {
    /**
     * @internal
     */
    AdminDisableUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminDisableUserRequest = exports.AdminDisableUserRequest || (exports.AdminDisableUserRequest = {}));
var AdminDisableUserResponse;
(function (AdminDisableUserResponse) {
    /**
     * @internal
     */
    AdminDisableUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminDisableUserResponse = exports.AdminDisableUserResponse || (exports.AdminDisableUserResponse = {}));
var AdminEnableUserRequest;
(function (AdminEnableUserRequest) {
    /**
     * @internal
     */
    AdminEnableUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminEnableUserRequest = exports.AdminEnableUserRequest || (exports.AdminEnableUserRequest = {}));
var AdminEnableUserResponse;
(function (AdminEnableUserResponse) {
    /**
     * @internal
     */
    AdminEnableUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminEnableUserResponse = exports.AdminEnableUserResponse || (exports.AdminEnableUserResponse = {}));
var AdminForgetDeviceRequest;
(function (AdminForgetDeviceRequest) {
    /**
     * @internal
     */
    AdminForgetDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminForgetDeviceRequest = exports.AdminForgetDeviceRequest || (exports.AdminForgetDeviceRequest = {}));
var InvalidUserPoolConfigurationException;
(function (InvalidUserPoolConfigurationException) {
    /**
     * @internal
     */
    InvalidUserPoolConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidUserPoolConfigurationException = exports.InvalidUserPoolConfigurationException || (exports.InvalidUserPoolConfigurationException = {}));
var AdminGetDeviceRequest;
(function (AdminGetDeviceRequest) {
    /**
     * @internal
     */
    AdminGetDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminGetDeviceRequest = exports.AdminGetDeviceRequest || (exports.AdminGetDeviceRequest = {}));
var DeviceType;
(function (DeviceType) {
    /**
     * @internal
     */
    DeviceType.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DeviceAttributes && {
            DeviceAttributes: obj.DeviceAttributes.map((item) => AttributeType.filterSensitiveLog(item)),
        }),
    });
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
var AdminGetDeviceResponse;
(function (AdminGetDeviceResponse) {
    /**
     * @internal
     */
    AdminGetDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Device && { Device: DeviceType.filterSensitiveLog(obj.Device) }),
    });
})(AdminGetDeviceResponse = exports.AdminGetDeviceResponse || (exports.AdminGetDeviceResponse = {}));
var AdminGetUserRequest;
(function (AdminGetUserRequest) {
    /**
     * @internal
     */
    AdminGetUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminGetUserRequest = exports.AdminGetUserRequest || (exports.AdminGetUserRequest = {}));
var AdminGetUserResponse;
(function (AdminGetUserResponse) {
    /**
     * @internal
     */
    AdminGetUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.UserAttributes && {
            UserAttributes: obj.UserAttributes.map((item) => AttributeType.filterSensitiveLog(item)),
        }),
    });
})(AdminGetUserResponse = exports.AdminGetUserResponse || (exports.AdminGetUserResponse = {}));
var AnalyticsMetadataType;
(function (AnalyticsMetadataType) {
    /**
     * @internal
     */
    AnalyticsMetadataType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalyticsMetadataType = exports.AnalyticsMetadataType || (exports.AnalyticsMetadataType = {}));
var AuthFlowType;
(function (AuthFlowType) {
    AuthFlowType["ADMIN_NO_SRP_AUTH"] = "ADMIN_NO_SRP_AUTH";
    AuthFlowType["ADMIN_USER_PASSWORD_AUTH"] = "ADMIN_USER_PASSWORD_AUTH";
    AuthFlowType["CUSTOM_AUTH"] = "CUSTOM_AUTH";
    AuthFlowType["REFRESH_TOKEN"] = "REFRESH_TOKEN";
    AuthFlowType["REFRESH_TOKEN_AUTH"] = "REFRESH_TOKEN_AUTH";
    AuthFlowType["USER_PASSWORD_AUTH"] = "USER_PASSWORD_AUTH";
    AuthFlowType["USER_SRP_AUTH"] = "USER_SRP_AUTH";
})(AuthFlowType = exports.AuthFlowType || (exports.AuthFlowType = {}));
var HttpHeader;
(function (HttpHeader) {
    /**
     * @internal
     */
    HttpHeader.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HttpHeader = exports.HttpHeader || (exports.HttpHeader = {}));
var ContextDataType;
(function (ContextDataType) {
    /**
     * @internal
     */
    ContextDataType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContextDataType = exports.ContextDataType || (exports.ContextDataType = {}));
var AdminInitiateAuthRequest;
(function (AdminInitiateAuthRequest) {
    /**
     * @internal
     */
    AdminInitiateAuthRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.AuthParameters && { AuthParameters: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminInitiateAuthRequest = exports.AdminInitiateAuthRequest || (exports.AdminInitiateAuthRequest = {}));
var NewDeviceMetadataType;
(function (NewDeviceMetadataType) {
    /**
     * @internal
     */
    NewDeviceMetadataType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NewDeviceMetadataType = exports.NewDeviceMetadataType || (exports.NewDeviceMetadataType = {}));
var AuthenticationResultType;
(function (AuthenticationResultType) {
    /**
     * @internal
     */
    AuthenticationResultType.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.RefreshToken && { RefreshToken: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.IdToken && { IdToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(AuthenticationResultType = exports.AuthenticationResultType || (exports.AuthenticationResultType = {}));
var ChallengeNameType;
(function (ChallengeNameType) {
    ChallengeNameType["ADMIN_NO_SRP_AUTH"] = "ADMIN_NO_SRP_AUTH";
    ChallengeNameType["CUSTOM_CHALLENGE"] = "CUSTOM_CHALLENGE";
    ChallengeNameType["DEVICE_PASSWORD_VERIFIER"] = "DEVICE_PASSWORD_VERIFIER";
    ChallengeNameType["DEVICE_SRP_AUTH"] = "DEVICE_SRP_AUTH";
    ChallengeNameType["MFA_SETUP"] = "MFA_SETUP";
    ChallengeNameType["NEW_PASSWORD_REQUIRED"] = "NEW_PASSWORD_REQUIRED";
    ChallengeNameType["PASSWORD_VERIFIER"] = "PASSWORD_VERIFIER";
    ChallengeNameType["SELECT_MFA_TYPE"] = "SELECT_MFA_TYPE";
    ChallengeNameType["SMS_MFA"] = "SMS_MFA";
    ChallengeNameType["SOFTWARE_TOKEN_MFA"] = "SOFTWARE_TOKEN_MFA";
})(ChallengeNameType = exports.ChallengeNameType || (exports.ChallengeNameType = {}));
var AdminInitiateAuthResponse;
(function (AdminInitiateAuthResponse) {
    /**
     * @internal
     */
    AdminInitiateAuthResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationResult && {
            AuthenticationResult: AuthenticationResultType.filterSensitiveLog(obj.AuthenticationResult),
        }),
    });
})(AdminInitiateAuthResponse = exports.AdminInitiateAuthResponse || (exports.AdminInitiateAuthResponse = {}));
var MFAMethodNotFoundException;
(function (MFAMethodNotFoundException) {
    /**
     * @internal
     */
    MFAMethodNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MFAMethodNotFoundException = exports.MFAMethodNotFoundException || (exports.MFAMethodNotFoundException = {}));
var PasswordResetRequiredException;
(function (PasswordResetRequiredException) {
    /**
     * @internal
     */
    PasswordResetRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PasswordResetRequiredException = exports.PasswordResetRequiredException || (exports.PasswordResetRequiredException = {}));
var UserNotConfirmedException;
(function (UserNotConfirmedException) {
    /**
     * @internal
     */
    UserNotConfirmedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserNotConfirmedException = exports.UserNotConfirmedException || (exports.UserNotConfirmedException = {}));
var AdminLinkProviderForUserRequest;
(function (AdminLinkProviderForUserRequest) {
    /**
     * @internal
     */
    AdminLinkProviderForUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminLinkProviderForUserRequest = exports.AdminLinkProviderForUserRequest || (exports.AdminLinkProviderForUserRequest = {}));
var AdminLinkProviderForUserResponse;
(function (AdminLinkProviderForUserResponse) {
    /**
     * @internal
     */
    AdminLinkProviderForUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminLinkProviderForUserResponse = exports.AdminLinkProviderForUserResponse || (exports.AdminLinkProviderForUserResponse = {}));
var AdminListDevicesRequest;
(function (AdminListDevicesRequest) {
    /**
     * @internal
     */
    AdminListDevicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminListDevicesRequest = exports.AdminListDevicesRequest || (exports.AdminListDevicesRequest = {}));
var AdminListDevicesResponse;
(function (AdminListDevicesResponse) {
    /**
     * @internal
     */
    AdminListDevicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminListDevicesResponse = exports.AdminListDevicesResponse || (exports.AdminListDevicesResponse = {}));
var AdminListGroupsForUserRequest;
(function (AdminListGroupsForUserRequest) {
    /**
     * @internal
     */
    AdminListGroupsForUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminListGroupsForUserRequest = exports.AdminListGroupsForUserRequest || (exports.AdminListGroupsForUserRequest = {}));
var GroupType;
(function (GroupType) {
    /**
     * @internal
     */
    GroupType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupType = exports.GroupType || (exports.GroupType = {}));
var AdminListGroupsForUserResponse;
(function (AdminListGroupsForUserResponse) {
    /**
     * @internal
     */
    AdminListGroupsForUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminListGroupsForUserResponse = exports.AdminListGroupsForUserResponse || (exports.AdminListGroupsForUserResponse = {}));
var AdminListUserAuthEventsRequest;
(function (AdminListUserAuthEventsRequest) {
    /**
     * @internal
     */
    AdminListUserAuthEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminListUserAuthEventsRequest = exports.AdminListUserAuthEventsRequest || (exports.AdminListUserAuthEventsRequest = {}));
var ChallengeName;
(function (ChallengeName) {
    ChallengeName["Mfa"] = "Mfa";
    ChallengeName["Password"] = "Password";
})(ChallengeName = exports.ChallengeName || (exports.ChallengeName = {}));
var ChallengeResponse;
(function (ChallengeResponse) {
    ChallengeResponse["Failure"] = "Failure";
    ChallengeResponse["Success"] = "Success";
})(ChallengeResponse = exports.ChallengeResponse || (exports.ChallengeResponse = {}));
var ChallengeResponseType;
(function (ChallengeResponseType) {
    /**
     * @internal
     */
    ChallengeResponseType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChallengeResponseType = exports.ChallengeResponseType || (exports.ChallengeResponseType = {}));
var EventContextDataType;
(function (EventContextDataType) {
    /**
     * @internal
     */
    EventContextDataType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventContextDataType = exports.EventContextDataType || (exports.EventContextDataType = {}));
var FeedbackValueType;
(function (FeedbackValueType) {
    FeedbackValueType["INVALID"] = "Invalid";
    FeedbackValueType["VALID"] = "Valid";
})(FeedbackValueType = exports.FeedbackValueType || (exports.FeedbackValueType = {}));
var EventFeedbackType;
(function (EventFeedbackType) {
    /**
     * @internal
     */
    EventFeedbackType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventFeedbackType = exports.EventFeedbackType || (exports.EventFeedbackType = {}));
var EventResponseType;
(function (EventResponseType) {
    EventResponseType["Failure"] = "Failure";
    EventResponseType["Success"] = "Success";
})(EventResponseType = exports.EventResponseType || (exports.EventResponseType = {}));
var RiskDecisionType;
(function (RiskDecisionType) {
    RiskDecisionType["AccountTakeover"] = "AccountTakeover";
    RiskDecisionType["Block"] = "Block";
    RiskDecisionType["NoRisk"] = "NoRisk";
})(RiskDecisionType = exports.RiskDecisionType || (exports.RiskDecisionType = {}));
var RiskLevelType;
(function (RiskLevelType) {
    RiskLevelType["High"] = "High";
    RiskLevelType["Low"] = "Low";
    RiskLevelType["Medium"] = "Medium";
})(RiskLevelType = exports.RiskLevelType || (exports.RiskLevelType = {}));
var EventRiskType;
(function (EventRiskType) {
    /**
     * @internal
     */
    EventRiskType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventRiskType = exports.EventRiskType || (exports.EventRiskType = {}));
var EventType;
(function (EventType) {
    EventType["ForgotPassword"] = "ForgotPassword";
    EventType["SignIn"] = "SignIn";
    EventType["SignUp"] = "SignUp";
})(EventType = exports.EventType || (exports.EventType = {}));
var AuthEventType;
(function (AuthEventType) {
    /**
     * @internal
     */
    AuthEventType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthEventType = exports.AuthEventType || (exports.AuthEventType = {}));
var AdminListUserAuthEventsResponse;
(function (AdminListUserAuthEventsResponse) {
    /**
     * @internal
     */
    AdminListUserAuthEventsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminListUserAuthEventsResponse = exports.AdminListUserAuthEventsResponse || (exports.AdminListUserAuthEventsResponse = {}));
var UserPoolAddOnNotEnabledException;
(function (UserPoolAddOnNotEnabledException) {
    /**
     * @internal
     */
    UserPoolAddOnNotEnabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserPoolAddOnNotEnabledException = exports.UserPoolAddOnNotEnabledException || (exports.UserPoolAddOnNotEnabledException = {}));
var AdminRemoveUserFromGroupRequest;
(function (AdminRemoveUserFromGroupRequest) {
    /**
     * @internal
     */
    AdminRemoveUserFromGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminRemoveUserFromGroupRequest = exports.AdminRemoveUserFromGroupRequest || (exports.AdminRemoveUserFromGroupRequest = {}));
var AdminResetUserPasswordRequest;
(function (AdminResetUserPasswordRequest) {
    /**
     * @internal
     */
    AdminResetUserPasswordRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminResetUserPasswordRequest = exports.AdminResetUserPasswordRequest || (exports.AdminResetUserPasswordRequest = {}));
var AdminResetUserPasswordResponse;
(function (AdminResetUserPasswordResponse) {
    /**
     * @internal
     */
    AdminResetUserPasswordResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminResetUserPasswordResponse = exports.AdminResetUserPasswordResponse || (exports.AdminResetUserPasswordResponse = {}));
var InvalidEmailRoleAccessPolicyException;
(function (InvalidEmailRoleAccessPolicyException) {
    /**
     * @internal
     */
    InvalidEmailRoleAccessPolicyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidEmailRoleAccessPolicyException = exports.InvalidEmailRoleAccessPolicyException || (exports.InvalidEmailRoleAccessPolicyException = {}));
var AdminRespondToAuthChallengeRequest;
(function (AdminRespondToAuthChallengeRequest) {
    /**
     * @internal
     */
    AdminRespondToAuthChallengeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminRespondToAuthChallengeRequest = exports.AdminRespondToAuthChallengeRequest || (exports.AdminRespondToAuthChallengeRequest = {}));
var AdminRespondToAuthChallengeResponse;
(function (AdminRespondToAuthChallengeResponse) {
    /**
     * @internal
     */
    AdminRespondToAuthChallengeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationResult && {
            AuthenticationResult: AuthenticationResultType.filterSensitiveLog(obj.AuthenticationResult),
        }),
    });
})(AdminRespondToAuthChallengeResponse = exports.AdminRespondToAuthChallengeResponse || (exports.AdminRespondToAuthChallengeResponse = {}));
var CodeMismatchException;
(function (CodeMismatchException) {
    /**
     * @internal
     */
    CodeMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeMismatchException = exports.CodeMismatchException || (exports.CodeMismatchException = {}));
var ExpiredCodeException;
(function (ExpiredCodeException) {
    /**
     * @internal
     */
    ExpiredCodeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExpiredCodeException = exports.ExpiredCodeException || (exports.ExpiredCodeException = {}));
var SoftwareTokenMFANotFoundException;
(function (SoftwareTokenMFANotFoundException) {
    /**
     * @internal
     */
    SoftwareTokenMFANotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SoftwareTokenMFANotFoundException = exports.SoftwareTokenMFANotFoundException || (exports.SoftwareTokenMFANotFoundException = {}));
var SMSMfaSettingsType;
(function (SMSMfaSettingsType) {
    /**
     * @internal
     */
    SMSMfaSettingsType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SMSMfaSettingsType = exports.SMSMfaSettingsType || (exports.SMSMfaSettingsType = {}));
var SoftwareTokenMfaSettingsType;
(function (SoftwareTokenMfaSettingsType) {
    /**
     * @internal
     */
    SoftwareTokenMfaSettingsType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SoftwareTokenMfaSettingsType = exports.SoftwareTokenMfaSettingsType || (exports.SoftwareTokenMfaSettingsType = {}));
var AdminSetUserMFAPreferenceRequest;
(function (AdminSetUserMFAPreferenceRequest) {
    /**
     * @internal
     */
    AdminSetUserMFAPreferenceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminSetUserMFAPreferenceRequest = exports.AdminSetUserMFAPreferenceRequest || (exports.AdminSetUserMFAPreferenceRequest = {}));
var AdminSetUserMFAPreferenceResponse;
(function (AdminSetUserMFAPreferenceResponse) {
    /**
     * @internal
     */
    AdminSetUserMFAPreferenceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminSetUserMFAPreferenceResponse = exports.AdminSetUserMFAPreferenceResponse || (exports.AdminSetUserMFAPreferenceResponse = {}));
var AdminSetUserPasswordRequest;
(function (AdminSetUserPasswordRequest) {
    /**
     * @internal
     */
    AdminSetUserPasswordRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminSetUserPasswordRequest = exports.AdminSetUserPasswordRequest || (exports.AdminSetUserPasswordRequest = {}));
var AdminSetUserPasswordResponse;
(function (AdminSetUserPasswordResponse) {
    /**
     * @internal
     */
    AdminSetUserPasswordResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminSetUserPasswordResponse = exports.AdminSetUserPasswordResponse || (exports.AdminSetUserPasswordResponse = {}));
var AdminSetUserSettingsRequest;
(function (AdminSetUserSettingsRequest) {
    /**
     * @internal
     */
    AdminSetUserSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminSetUserSettingsRequest = exports.AdminSetUserSettingsRequest || (exports.AdminSetUserSettingsRequest = {}));
var AdminSetUserSettingsResponse;
(function (AdminSetUserSettingsResponse) {
    /**
     * @internal
     */
    AdminSetUserSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminSetUserSettingsResponse = exports.AdminSetUserSettingsResponse || (exports.AdminSetUserSettingsResponse = {}));
var AdminUpdateAuthEventFeedbackRequest;
(function (AdminUpdateAuthEventFeedbackRequest) {
    /**
     * @internal
     */
    AdminUpdateAuthEventFeedbackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminUpdateAuthEventFeedbackRequest = exports.AdminUpdateAuthEventFeedbackRequest || (exports.AdminUpdateAuthEventFeedbackRequest = {}));
var AdminUpdateAuthEventFeedbackResponse;
(function (AdminUpdateAuthEventFeedbackResponse) {
    /**
     * @internal
     */
    AdminUpdateAuthEventFeedbackResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminUpdateAuthEventFeedbackResponse = exports.AdminUpdateAuthEventFeedbackResponse || (exports.AdminUpdateAuthEventFeedbackResponse = {}));
var DeviceRememberedStatusType;
(function (DeviceRememberedStatusType) {
    DeviceRememberedStatusType["NOT_REMEMBERED"] = "not_remembered";
    DeviceRememberedStatusType["REMEMBERED"] = "remembered";
})(DeviceRememberedStatusType = exports.DeviceRememberedStatusType || (exports.DeviceRememberedStatusType = {}));
var AdminUpdateDeviceStatusRequest;
(function (AdminUpdateDeviceStatusRequest) {
    /**
     * @internal
     */
    AdminUpdateDeviceStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminUpdateDeviceStatusRequest = exports.AdminUpdateDeviceStatusRequest || (exports.AdminUpdateDeviceStatusRequest = {}));
var AdminUpdateDeviceStatusResponse;
(function (AdminUpdateDeviceStatusResponse) {
    /**
     * @internal
     */
    AdminUpdateDeviceStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminUpdateDeviceStatusResponse = exports.AdminUpdateDeviceStatusResponse || (exports.AdminUpdateDeviceStatusResponse = {}));
var AdminUpdateUserAttributesRequest;
(function (AdminUpdateUserAttributesRequest) {
    /**
     * @internal
     */
    AdminUpdateUserAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.UserAttributes && {
            UserAttributes: obj.UserAttributes.map((item) => AttributeType.filterSensitiveLog(item)),
        }),
    });
})(AdminUpdateUserAttributesRequest = exports.AdminUpdateUserAttributesRequest || (exports.AdminUpdateUserAttributesRequest = {}));
var AdminUpdateUserAttributesResponse;
(function (AdminUpdateUserAttributesResponse) {
    /**
     * @internal
     */
    AdminUpdateUserAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminUpdateUserAttributesResponse = exports.AdminUpdateUserAttributesResponse || (exports.AdminUpdateUserAttributesResponse = {}));
var AdminUserGlobalSignOutRequest;
(function (AdminUserGlobalSignOutRequest) {
    /**
     * @internal
     */
    AdminUserGlobalSignOutRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(AdminUserGlobalSignOutRequest = exports.AdminUserGlobalSignOutRequest || (exports.AdminUserGlobalSignOutRequest = {}));
var AdminUserGlobalSignOutResponse;
(function (AdminUserGlobalSignOutResponse) {
    /**
     * @internal
     */
    AdminUserGlobalSignOutResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminUserGlobalSignOutResponse = exports.AdminUserGlobalSignOutResponse || (exports.AdminUserGlobalSignOutResponse = {}));
var AdvancedSecurityModeType;
(function (AdvancedSecurityModeType) {
    AdvancedSecurityModeType["AUDIT"] = "AUDIT";
    AdvancedSecurityModeType["ENFORCED"] = "ENFORCED";
    AdvancedSecurityModeType["OFF"] = "OFF";
})(AdvancedSecurityModeType = exports.AdvancedSecurityModeType || (exports.AdvancedSecurityModeType = {}));
var AliasAttributeType;
(function (AliasAttributeType) {
    AliasAttributeType["EMAIL"] = "email";
    AliasAttributeType["PHONE_NUMBER"] = "phone_number";
    AliasAttributeType["PREFERRED_USERNAME"] = "preferred_username";
})(AliasAttributeType = exports.AliasAttributeType || (exports.AliasAttributeType = {}));
var AnalyticsConfigurationType;
(function (AnalyticsConfigurationType) {
    /**
     * @internal
     */
    AnalyticsConfigurationType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalyticsConfigurationType = exports.AnalyticsConfigurationType || (exports.AnalyticsConfigurationType = {}));
var AssociateSoftwareTokenRequest;
(function (AssociateSoftwareTokenRequest) {
    /**
     * @internal
     */
    AssociateSoftwareTokenRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(AssociateSoftwareTokenRequest = exports.AssociateSoftwareTokenRequest || (exports.AssociateSoftwareTokenRequest = {}));
var AssociateSoftwareTokenResponse;
(function (AssociateSoftwareTokenResponse) {
    /**
     * @internal
     */
    AssociateSoftwareTokenResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SecretCode && { SecretCode: smithy_client_1.SENSITIVE_STRING }),
    });
})(AssociateSoftwareTokenResponse = exports.AssociateSoftwareTokenResponse || (exports.AssociateSoftwareTokenResponse = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var ChangePasswordRequest;
(function (ChangePasswordRequest) {
    /**
     * @internal
     */
    ChangePasswordRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.PreviousPassword && { PreviousPassword: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.ProposedPassword && { ProposedPassword: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(ChangePasswordRequest = exports.ChangePasswordRequest || (exports.ChangePasswordRequest = {}));
var ChangePasswordResponse;
(function (ChangePasswordResponse) {
    /**
     * @internal
     */
    ChangePasswordResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangePasswordResponse = exports.ChangePasswordResponse || (exports.ChangePasswordResponse = {}));
var DeviceSecretVerifierConfigType;
(function (DeviceSecretVerifierConfigType) {
    /**
     * @internal
     */
    DeviceSecretVerifierConfigType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceSecretVerifierConfigType = exports.DeviceSecretVerifierConfigType || (exports.DeviceSecretVerifierConfigType = {}));
var ConfirmDeviceRequest;
(function (ConfirmDeviceRequest) {
    /**
     * @internal
     */
    ConfirmDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(ConfirmDeviceRequest = exports.ConfirmDeviceRequest || (exports.ConfirmDeviceRequest = {}));
var ConfirmDeviceResponse;
(function (ConfirmDeviceResponse) {
    /**
     * @internal
     */
    ConfirmDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmDeviceResponse = exports.ConfirmDeviceResponse || (exports.ConfirmDeviceResponse = {}));
var UserContextDataType;
(function (UserContextDataType) {
    /**
     * @internal
     */
    UserContextDataType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserContextDataType = exports.UserContextDataType || (exports.UserContextDataType = {}));
var ConfirmForgotPasswordRequest;
(function (ConfirmForgotPasswordRequest) {
    /**
     * @internal
     */
    ConfirmForgotPasswordRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SecretHash && { SecretHash: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(ConfirmForgotPasswordRequest = exports.ConfirmForgotPasswordRequest || (exports.ConfirmForgotPasswordRequest = {}));
var ConfirmForgotPasswordResponse;
(function (ConfirmForgotPasswordResponse) {
    /**
     * @internal
     */
    ConfirmForgotPasswordResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmForgotPasswordResponse = exports.ConfirmForgotPasswordResponse || (exports.ConfirmForgotPasswordResponse = {}));
var ConfirmSignUpRequest;
(function (ConfirmSignUpRequest) {
    /**
     * @internal
     */
    ConfirmSignUpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SecretHash && { SecretHash: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(ConfirmSignUpRequest = exports.ConfirmSignUpRequest || (exports.ConfirmSignUpRequest = {}));
var ConfirmSignUpResponse;
(function (ConfirmSignUpResponse) {
    /**
     * @internal
     */
    ConfirmSignUpResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmSignUpResponse = exports.ConfirmSignUpResponse || (exports.ConfirmSignUpResponse = {}));
var CreateGroupRequest;
(function (CreateGroupRequest) {
    /**
     * @internal
     */
    CreateGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupRequest = exports.CreateGroupRequest || (exports.CreateGroupRequest = {}));
var CreateGroupResponse;
(function (CreateGroupResponse) {
    /**
     * @internal
     */
    CreateGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupResponse = exports.CreateGroupResponse || (exports.CreateGroupResponse = {}));
var GroupExistsException;
(function (GroupExistsException) {
    /**
     * @internal
     */
    GroupExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupExistsException = exports.GroupExistsException || (exports.GroupExistsException = {}));
var IdentityProviderTypeType;
(function (IdentityProviderTypeType) {
    IdentityProviderTypeType["Facebook"] = "Facebook";
    IdentityProviderTypeType["Google"] = "Google";
    IdentityProviderTypeType["LoginWithAmazon"] = "LoginWithAmazon";
    IdentityProviderTypeType["OIDC"] = "OIDC";
    IdentityProviderTypeType["SAML"] = "SAML";
    IdentityProviderTypeType["SignInWithApple"] = "SignInWithApple";
})(IdentityProviderTypeType = exports.IdentityProviderTypeType || (exports.IdentityProviderTypeType = {}));
var CreateIdentityProviderRequest;
(function (CreateIdentityProviderRequest) {
    /**
     * @internal
     */
    CreateIdentityProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIdentityProviderRequest = exports.CreateIdentityProviderRequest || (exports.CreateIdentityProviderRequest = {}));
var IdentityProviderType;
(function (IdentityProviderType) {
    /**
     * @internal
     */
    IdentityProviderType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityProviderType = exports.IdentityProviderType || (exports.IdentityProviderType = {}));
var CreateIdentityProviderResponse;
(function (CreateIdentityProviderResponse) {
    /**
     * @internal
     */
    CreateIdentityProviderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIdentityProviderResponse = exports.CreateIdentityProviderResponse || (exports.CreateIdentityProviderResponse = {}));
var DuplicateProviderException;
(function (DuplicateProviderException) {
    /**
     * @internal
     */
    DuplicateProviderException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateProviderException = exports.DuplicateProviderException || (exports.DuplicateProviderException = {}));
var ResourceServerScopeType;
(function (ResourceServerScopeType) {
    /**
     * @internal
     */
    ResourceServerScopeType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceServerScopeType = exports.ResourceServerScopeType || (exports.ResourceServerScopeType = {}));
var CreateResourceServerRequest;
(function (CreateResourceServerRequest) {
    /**
     * @internal
     */
    CreateResourceServerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResourceServerRequest = exports.CreateResourceServerRequest || (exports.CreateResourceServerRequest = {}));
var ResourceServerType;
(function (ResourceServerType) {
    /**
     * @internal
     */
    ResourceServerType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceServerType = exports.ResourceServerType || (exports.ResourceServerType = {}));
var CreateResourceServerResponse;
(function (CreateResourceServerResponse) {
    /**
     * @internal
     */
    CreateResourceServerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResourceServerResponse = exports.CreateResourceServerResponse || (exports.CreateResourceServerResponse = {}));
var CreateUserImportJobRequest;
(function (CreateUserImportJobRequest) {
    /**
     * @internal
     */
    CreateUserImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserImportJobRequest = exports.CreateUserImportJobRequest || (exports.CreateUserImportJobRequest = {}));
var UserImportJobStatusType;
(function (UserImportJobStatusType) {
    UserImportJobStatusType["Created"] = "Created";
    UserImportJobStatusType["Expired"] = "Expired";
    UserImportJobStatusType["Failed"] = "Failed";
    UserImportJobStatusType["InProgress"] = "InProgress";
    UserImportJobStatusType["Pending"] = "Pending";
    UserImportJobStatusType["Stopped"] = "Stopped";
    UserImportJobStatusType["Stopping"] = "Stopping";
    UserImportJobStatusType["Succeeded"] = "Succeeded";
})(UserImportJobStatusType = exports.UserImportJobStatusType || (exports.UserImportJobStatusType = {}));
var UserImportJobType;
(function (UserImportJobType) {
    /**
     * @internal
     */
    UserImportJobType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserImportJobType = exports.UserImportJobType || (exports.UserImportJobType = {}));
var CreateUserImportJobResponse;
(function (CreateUserImportJobResponse) {
    /**
     * @internal
     */
    CreateUserImportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserImportJobResponse = exports.CreateUserImportJobResponse || (exports.CreateUserImportJobResponse = {}));
var VerifiedAttributeType;
(function (VerifiedAttributeType) {
    VerifiedAttributeType["EMAIL"] = "email";
    VerifiedAttributeType["PHONE_NUMBER"] = "phone_number";
})(VerifiedAttributeType = exports.VerifiedAttributeType || (exports.VerifiedAttributeType = {}));
var DeviceConfigurationType;
(function (DeviceConfigurationType) {
    /**
     * @internal
     */
    DeviceConfigurationType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceConfigurationType = exports.DeviceConfigurationType || (exports.DeviceConfigurationType = {}));
var EmailSendingAccountType;
(function (EmailSendingAccountType) {
    EmailSendingAccountType["COGNITO_DEFAULT"] = "COGNITO_DEFAULT";
    EmailSendingAccountType["DEVELOPER"] = "DEVELOPER";
})(EmailSendingAccountType = exports.EmailSendingAccountType || (exports.EmailSendingAccountType = {}));
var EmailConfigurationType;
(function (EmailConfigurationType) {
    /**
     * @internal
     */
    EmailConfigurationType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmailConfigurationType = exports.EmailConfigurationType || (exports.EmailConfigurationType = {}));
var CustomEmailSenderLambdaVersionType;
(function (CustomEmailSenderLambdaVersionType) {
    CustomEmailSenderLambdaVersionType["V1_0"] = "V1_0";
})(CustomEmailSenderLambdaVersionType = exports.CustomEmailSenderLambdaVersionType || (exports.CustomEmailSenderLambdaVersionType = {}));
var CustomEmailLambdaVersionConfigType;
(function (CustomEmailLambdaVersionConfigType) {
    /**
     * @internal
     */
    CustomEmailLambdaVersionConfigType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomEmailLambdaVersionConfigType = exports.CustomEmailLambdaVersionConfigType || (exports.CustomEmailLambdaVersionConfigType = {}));
var CustomSMSSenderLambdaVersionType;
(function (CustomSMSSenderLambdaVersionType) {
    CustomSMSSenderLambdaVersionType["V1_0"] = "V1_0";
})(CustomSMSSenderLambdaVersionType = exports.CustomSMSSenderLambdaVersionType || (exports.CustomSMSSenderLambdaVersionType = {}));
var CustomSMSLambdaVersionConfigType;
(function (CustomSMSLambdaVersionConfigType) {
    /**
     * @internal
     */
    CustomSMSLambdaVersionConfigType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomSMSLambdaVersionConfigType = exports.CustomSMSLambdaVersionConfigType || (exports.CustomSMSLambdaVersionConfigType = {}));
var LambdaConfigType;
(function (LambdaConfigType) {
    /**
     * @internal
     */
    LambdaConfigType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaConfigType = exports.LambdaConfigType || (exports.LambdaConfigType = {}));
var UserPoolMfaType;
(function (UserPoolMfaType) {
    UserPoolMfaType["OFF"] = "OFF";
    UserPoolMfaType["ON"] = "ON";
    UserPoolMfaType["OPTIONAL"] = "OPTIONAL";
})(UserPoolMfaType = exports.UserPoolMfaType || (exports.UserPoolMfaType = {}));
var PasswordPolicyType;
(function (PasswordPolicyType) {
    /**
     * @internal
     */
    PasswordPolicyType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PasswordPolicyType = exports.PasswordPolicyType || (exports.PasswordPolicyType = {}));
var UserPoolPolicyType;
(function (UserPoolPolicyType) {
    /**
     * @internal
     */
    UserPoolPolicyType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserPoolPolicyType = exports.UserPoolPolicyType || (exports.UserPoolPolicyType = {}));
var SmsConfigurationType;
(function (SmsConfigurationType) {
    /**
     * @internal
     */
    SmsConfigurationType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SmsConfigurationType = exports.SmsConfigurationType || (exports.SmsConfigurationType = {}));
var UsernameAttributeType;
(function (UsernameAttributeType) {
    UsernameAttributeType["EMAIL"] = "email";
    UsernameAttributeType["PHONE_NUMBER"] = "phone_number";
})(UsernameAttributeType = exports.UsernameAttributeType || (exports.UsernameAttributeType = {}));
var UsernameConfigurationType;
(function (UsernameConfigurationType) {
    /**
     * @internal
     */
    UsernameConfigurationType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsernameConfigurationType = exports.UsernameConfigurationType || (exports.UsernameConfigurationType = {}));
var UserPoolAddOnsType;
(function (UserPoolAddOnsType) {
    /**
     * @internal
     */
    UserPoolAddOnsType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserPoolAddOnsType = exports.UserPoolAddOnsType || (exports.UserPoolAddOnsType = {}));
var DefaultEmailOptionType;
(function (DefaultEmailOptionType) {
    DefaultEmailOptionType["CONFIRM_WITH_CODE"] = "CONFIRM_WITH_CODE";
    DefaultEmailOptionType["CONFIRM_WITH_LINK"] = "CONFIRM_WITH_LINK";
})(DefaultEmailOptionType = exports.DefaultEmailOptionType || (exports.DefaultEmailOptionType = {}));
var VerificationMessageTemplateType;
(function (VerificationMessageTemplateType) {
    /**
     * @internal
     */
    VerificationMessageTemplateType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VerificationMessageTemplateType = exports.VerificationMessageTemplateType || (exports.VerificationMessageTemplateType = {}));
var CreateUserPoolRequest;
(function (CreateUserPoolRequest) {
    /**
     * @internal
     */
    CreateUserPoolRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserPoolRequest = exports.CreateUserPoolRequest || (exports.CreateUserPoolRequest = {}));
var StatusType;
(function (StatusType) {
    StatusType["Disabled"] = "Disabled";
    StatusType["Enabled"] = "Enabled";
})(StatusType = exports.StatusType || (exports.StatusType = {}));
var UserPoolType;
(function (UserPoolType) {
    /**
     * @internal
     */
    UserPoolType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserPoolType = exports.UserPoolType || (exports.UserPoolType = {}));
var CreateUserPoolResponse;
(function (CreateUserPoolResponse) {
    /**
     * @internal
     */
    CreateUserPoolResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserPoolResponse = exports.CreateUserPoolResponse || (exports.CreateUserPoolResponse = {}));
var UserPoolTaggingException;
(function (UserPoolTaggingException) {
    /**
     * @internal
     */
    UserPoolTaggingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserPoolTaggingException = exports.UserPoolTaggingException || (exports.UserPoolTaggingException = {}));
var OAuthFlowType;
(function (OAuthFlowType) {
    OAuthFlowType["client_credentials"] = "client_credentials";
    OAuthFlowType["code"] = "code";
    OAuthFlowType["implicit"] = "implicit";
})(OAuthFlowType = exports.OAuthFlowType || (exports.OAuthFlowType = {}));
var ExplicitAuthFlowsType;
(function (ExplicitAuthFlowsType) {
    ExplicitAuthFlowsType["ADMIN_NO_SRP_AUTH"] = "ADMIN_NO_SRP_AUTH";
    ExplicitAuthFlowsType["ALLOW_ADMIN_USER_PASSWORD_AUTH"] = "ALLOW_ADMIN_USER_PASSWORD_AUTH";
    ExplicitAuthFlowsType["ALLOW_CUSTOM_AUTH"] = "ALLOW_CUSTOM_AUTH";
    ExplicitAuthFlowsType["ALLOW_REFRESH_TOKEN_AUTH"] = "ALLOW_REFRESH_TOKEN_AUTH";
    ExplicitAuthFlowsType["ALLOW_USER_PASSWORD_AUTH"] = "ALLOW_USER_PASSWORD_AUTH";
    ExplicitAuthFlowsType["ALLOW_USER_SRP_AUTH"] = "ALLOW_USER_SRP_AUTH";
    ExplicitAuthFlowsType["CUSTOM_AUTH_FLOW_ONLY"] = "CUSTOM_AUTH_FLOW_ONLY";
    ExplicitAuthFlowsType["USER_PASSWORD_AUTH"] = "USER_PASSWORD_AUTH";
})(ExplicitAuthFlowsType = exports.ExplicitAuthFlowsType || (exports.ExplicitAuthFlowsType = {}));
var PreventUserExistenceErrorTypes;
(function (PreventUserExistenceErrorTypes) {
    PreventUserExistenceErrorTypes["ENABLED"] = "ENABLED";
    PreventUserExistenceErrorTypes["LEGACY"] = "LEGACY";
})(PreventUserExistenceErrorTypes = exports.PreventUserExistenceErrorTypes || (exports.PreventUserExistenceErrorTypes = {}));
var TimeUnitsType;
(function (TimeUnitsType) {
    TimeUnitsType["DAYS"] = "days";
    TimeUnitsType["HOURS"] = "hours";
    TimeUnitsType["MINUTES"] = "minutes";
    TimeUnitsType["SECONDS"] = "seconds";
})(TimeUnitsType = exports.TimeUnitsType || (exports.TimeUnitsType = {}));
var TokenValidityUnitsType;
(function (TokenValidityUnitsType) {
    /**
     * @internal
     */
    TokenValidityUnitsType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TokenValidityUnitsType = exports.TokenValidityUnitsType || (exports.TokenValidityUnitsType = {}));
var CreateUserPoolClientRequest;
(function (CreateUserPoolClientRequest) {
    /**
     * @internal
     */
    CreateUserPoolClientRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserPoolClientRequest = exports.CreateUserPoolClientRequest || (exports.CreateUserPoolClientRequest = {}));
var UserPoolClientType;
(function (UserPoolClientType) {
    /**
     * @internal
     */
    UserPoolClientType.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.ClientSecret && { ClientSecret: smithy_client_1.SENSITIVE_STRING }),
    });
})(UserPoolClientType = exports.UserPoolClientType || (exports.UserPoolClientType = {}));
var CreateUserPoolClientResponse;
(function (CreateUserPoolClientResponse) {
    /**
     * @internal
     */
    CreateUserPoolClientResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.UserPoolClient && { UserPoolClient: UserPoolClientType.filterSensitiveLog(obj.UserPoolClient) }),
    });
})(CreateUserPoolClientResponse = exports.CreateUserPoolClientResponse || (exports.CreateUserPoolClientResponse = {}));
var InvalidOAuthFlowException;
(function (InvalidOAuthFlowException) {
    /**
     * @internal
     */
    InvalidOAuthFlowException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidOAuthFlowException = exports.InvalidOAuthFlowException || (exports.InvalidOAuthFlowException = {}));
var ScopeDoesNotExistException;
(function (ScopeDoesNotExistException) {
    /**
     * @internal
     */
    ScopeDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScopeDoesNotExistException = exports.ScopeDoesNotExistException || (exports.ScopeDoesNotExistException = {}));
var CustomDomainConfigType;
(function (CustomDomainConfigType) {
    /**
     * @internal
     */
    CustomDomainConfigType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomDomainConfigType = exports.CustomDomainConfigType || (exports.CustomDomainConfigType = {}));
var CreateUserPoolDomainRequest;
(function (CreateUserPoolDomainRequest) {
    /**
     * @internal
     */
    CreateUserPoolDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserPoolDomainRequest = exports.CreateUserPoolDomainRequest || (exports.CreateUserPoolDomainRequest = {}));
var CreateUserPoolDomainResponse;
(function (CreateUserPoolDomainResponse) {
    /**
     * @internal
     */
    CreateUserPoolDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserPoolDomainResponse = exports.CreateUserPoolDomainResponse || (exports.CreateUserPoolDomainResponse = {}));
var DeleteGroupRequest;
(function (DeleteGroupRequest) {
    /**
     * @internal
     */
    DeleteGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGroupRequest = exports.DeleteGroupRequest || (exports.DeleteGroupRequest = {}));
var DeleteIdentityProviderRequest;
(function (DeleteIdentityProviderRequest) {
    /**
     * @internal
     */
    DeleteIdentityProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIdentityProviderRequest = exports.DeleteIdentityProviderRequest || (exports.DeleteIdentityProviderRequest = {}));
var UnsupportedIdentityProviderException;
(function (UnsupportedIdentityProviderException) {
    /**
     * @internal
     */
    UnsupportedIdentityProviderException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedIdentityProviderException = exports.UnsupportedIdentityProviderException || (exports.UnsupportedIdentityProviderException = {}));
var DeleteResourceServerRequest;
(function (DeleteResourceServerRequest) {
    /**
     * @internal
     */
    DeleteResourceServerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourceServerRequest = exports.DeleteResourceServerRequest || (exports.DeleteResourceServerRequest = {}));
var DeleteUserRequest;
(function (DeleteUserRequest) {
    /**
     * @internal
     */
    DeleteUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DeleteUserRequest = exports.DeleteUserRequest || (exports.DeleteUserRequest = {}));
var DeleteUserAttributesRequest;
(function (DeleteUserAttributesRequest) {
    /**
     * @internal
     */
    DeleteUserAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DeleteUserAttributesRequest = exports.DeleteUserAttributesRequest || (exports.DeleteUserAttributesRequest = {}));
var DeleteUserAttributesResponse;
(function (DeleteUserAttributesResponse) {
    /**
     * @internal
     */
    DeleteUserAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserAttributesResponse = exports.DeleteUserAttributesResponse || (exports.DeleteUserAttributesResponse = {}));
var DeleteUserPoolRequest;
(function (DeleteUserPoolRequest) {
    /**
     * @internal
     */
    DeleteUserPoolRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserPoolRequest = exports.DeleteUserPoolRequest || (exports.DeleteUserPoolRequest = {}));
var DeleteUserPoolClientRequest;
(function (DeleteUserPoolClientRequest) {
    /**
     * @internal
     */
    DeleteUserPoolClientRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
    });
})(DeleteUserPoolClientRequest = exports.DeleteUserPoolClientRequest || (exports.DeleteUserPoolClientRequest = {}));
var DeleteUserPoolDomainRequest;
(function (DeleteUserPoolDomainRequest) {
    /**
     * @internal
     */
    DeleteUserPoolDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserPoolDomainRequest = exports.DeleteUserPoolDomainRequest || (exports.DeleteUserPoolDomainRequest = {}));
var DeleteUserPoolDomainResponse;
(function (DeleteUserPoolDomainResponse) {
    /**
     * @internal
     */
    DeleteUserPoolDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserPoolDomainResponse = exports.DeleteUserPoolDomainResponse || (exports.DeleteUserPoolDomainResponse = {}));
var DescribeIdentityProviderRequest;
(function (DescribeIdentityProviderRequest) {
    /**
     * @internal
     */
    DescribeIdentityProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdentityProviderRequest = exports.DescribeIdentityProviderRequest || (exports.DescribeIdentityProviderRequest = {}));
var DescribeIdentityProviderResponse;
(function (DescribeIdentityProviderResponse) {
    /**
     * @internal
     */
    DescribeIdentityProviderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdentityProviderResponse = exports.DescribeIdentityProviderResponse || (exports.DescribeIdentityProviderResponse = {}));
var DescribeResourceServerRequest;
(function (DescribeResourceServerRequest) {
    /**
     * @internal
     */
    DescribeResourceServerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeResourceServerRequest = exports.DescribeResourceServerRequest || (exports.DescribeResourceServerRequest = {}));
var DescribeResourceServerResponse;
(function (DescribeResourceServerResponse) {
    /**
     * @internal
     */
    DescribeResourceServerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeResourceServerResponse = exports.DescribeResourceServerResponse || (exports.DescribeResourceServerResponse = {}));
var DescribeRiskConfigurationRequest;
(function (DescribeRiskConfigurationRequest) {
    /**
     * @internal
     */
    DescribeRiskConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeRiskConfigurationRequest = exports.DescribeRiskConfigurationRequest || (exports.DescribeRiskConfigurationRequest = {}));
var CompromisedCredentialsEventActionType;
(function (CompromisedCredentialsEventActionType) {
    CompromisedCredentialsEventActionType["BLOCK"] = "BLOCK";
    CompromisedCredentialsEventActionType["NO_ACTION"] = "NO_ACTION";
})(CompromisedCredentialsEventActionType = exports.CompromisedCredentialsEventActionType || (exports.CompromisedCredentialsEventActionType = {}));
var CompromisedCredentialsActionsType;
(function (CompromisedCredentialsActionsType) {
    /**
     * @internal
     */
    CompromisedCredentialsActionsType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompromisedCredentialsActionsType = exports.CompromisedCredentialsActionsType || (exports.CompromisedCredentialsActionsType = {}));
var EventFilterType;
(function (EventFilterType) {
    EventFilterType["PASSWORD_CHANGE"] = "PASSWORD_CHANGE";
    EventFilterType["SIGN_IN"] = "SIGN_IN";
    EventFilterType["SIGN_UP"] = "SIGN_UP";
})(EventFilterType = exports.EventFilterType || (exports.EventFilterType = {}));
var CompromisedCredentialsRiskConfigurationType;
(function (CompromisedCredentialsRiskConfigurationType) {
    /**
     * @internal
     */
    CompromisedCredentialsRiskConfigurationType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompromisedCredentialsRiskConfigurationType = exports.CompromisedCredentialsRiskConfigurationType || (exports.CompromisedCredentialsRiskConfigurationType = {}));
var RiskExceptionConfigurationType;
(function (RiskExceptionConfigurationType) {
    /**
     * @internal
     */
    RiskExceptionConfigurationType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RiskExceptionConfigurationType = exports.RiskExceptionConfigurationType || (exports.RiskExceptionConfigurationType = {}));
var RiskConfigurationType;
(function (RiskConfigurationType) {
    /**
     * @internal
     */
    RiskConfigurationType.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
    });
})(RiskConfigurationType = exports.RiskConfigurationType || (exports.RiskConfigurationType = {}));
var DescribeRiskConfigurationResponse;
(function (DescribeRiskConfigurationResponse) {
    /**
     * @internal
     */
    DescribeRiskConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.RiskConfiguration && {
            RiskConfiguration: RiskConfigurationType.filterSensitiveLog(obj.RiskConfiguration),
        }),
    });
})(DescribeRiskConfigurationResponse = exports.DescribeRiskConfigurationResponse || (exports.DescribeRiskConfigurationResponse = {}));
var DescribeUserImportJobRequest;
(function (DescribeUserImportJobRequest) {
    /**
     * @internal
     */
    DescribeUserImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserImportJobRequest = exports.DescribeUserImportJobRequest || (exports.DescribeUserImportJobRequest = {}));
var DescribeUserImportJobResponse;
(function (DescribeUserImportJobResponse) {
    /**
     * @internal
     */
    DescribeUserImportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserImportJobResponse = exports.DescribeUserImportJobResponse || (exports.DescribeUserImportJobResponse = {}));
var DescribeUserPoolRequest;
(function (DescribeUserPoolRequest) {
    /**
     * @internal
     */
    DescribeUserPoolRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserPoolRequest = exports.DescribeUserPoolRequest || (exports.DescribeUserPoolRequest = {}));
var DescribeUserPoolResponse;
(function (DescribeUserPoolResponse) {
    /**
     * @internal
     */
    DescribeUserPoolResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserPoolResponse = exports.DescribeUserPoolResponse || (exports.DescribeUserPoolResponse = {}));
var DescribeUserPoolClientRequest;
(function (DescribeUserPoolClientRequest) {
    /**
     * @internal
     */
    DescribeUserPoolClientRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeUserPoolClientRequest = exports.DescribeUserPoolClientRequest || (exports.DescribeUserPoolClientRequest = {}));
var DescribeUserPoolClientResponse;
(function (DescribeUserPoolClientResponse) {
    /**
     * @internal
     */
    DescribeUserPoolClientResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.UserPoolClient && { UserPoolClient: UserPoolClientType.filterSensitiveLog(obj.UserPoolClient) }),
    });
})(DescribeUserPoolClientResponse = exports.DescribeUserPoolClientResponse || (exports.DescribeUserPoolClientResponse = {}));
var DescribeUserPoolDomainRequest;
(function (DescribeUserPoolDomainRequest) {
    /**
     * @internal
     */
    DescribeUserPoolDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserPoolDomainRequest = exports.DescribeUserPoolDomainRequest || (exports.DescribeUserPoolDomainRequest = {}));
var DomainStatusType;
(function (DomainStatusType) {
    DomainStatusType["ACTIVE"] = "ACTIVE";
    DomainStatusType["CREATING"] = "CREATING";
    DomainStatusType["DELETING"] = "DELETING";
    DomainStatusType["FAILED"] = "FAILED";
    DomainStatusType["UPDATING"] = "UPDATING";
})(DomainStatusType = exports.DomainStatusType || (exports.DomainStatusType = {}));
var DomainDescriptionType;
(function (DomainDescriptionType) {
    /**
     * @internal
     */
    DomainDescriptionType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainDescriptionType = exports.DomainDescriptionType || (exports.DomainDescriptionType = {}));
var DescribeUserPoolDomainResponse;
(function (DescribeUserPoolDomainResponse) {
    /**
     * @internal
     */
    DescribeUserPoolDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserPoolDomainResponse = exports.DescribeUserPoolDomainResponse || (exports.DescribeUserPoolDomainResponse = {}));
var ForgetDeviceRequest;
(function (ForgetDeviceRequest) {
    /**
     * @internal
     */
    ForgetDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(ForgetDeviceRequest = exports.ForgetDeviceRequest || (exports.ForgetDeviceRequest = {}));
var ForgotPasswordRequest;
(function (ForgotPasswordRequest) {
    /**
     * @internal
     */
    ForgotPasswordRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SecretHash && { SecretHash: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(ForgotPasswordRequest = exports.ForgotPasswordRequest || (exports.ForgotPasswordRequest = {}));
var CodeDeliveryDetailsType;
(function (CodeDeliveryDetailsType) {
    /**
     * @internal
     */
    CodeDeliveryDetailsType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeDeliveryDetailsType = exports.CodeDeliveryDetailsType || (exports.CodeDeliveryDetailsType = {}));
var ForgotPasswordResponse;
(function (ForgotPasswordResponse) {
    /**
     * @internal
     */
    ForgotPasswordResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForgotPasswordResponse = exports.ForgotPasswordResponse || (exports.ForgotPasswordResponse = {}));
var GetCSVHeaderRequest;
(function (GetCSVHeaderRequest) {
    /**
     * @internal
     */
    GetCSVHeaderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCSVHeaderRequest = exports.GetCSVHeaderRequest || (exports.GetCSVHeaderRequest = {}));
var GetCSVHeaderResponse;
(function (GetCSVHeaderResponse) {
    /**
     * @internal
     */
    GetCSVHeaderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCSVHeaderResponse = exports.GetCSVHeaderResponse || (exports.GetCSVHeaderResponse = {}));
var GetDeviceRequest;
(function (GetDeviceRequest) {
    /**
     * @internal
     */
    GetDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetDeviceRequest = exports.GetDeviceRequest || (exports.GetDeviceRequest = {}));
var GetDeviceResponse;
(function (GetDeviceResponse) {
    /**
     * @internal
     */
    GetDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Device && { Device: DeviceType.filterSensitiveLog(obj.Device) }),
    });
})(GetDeviceResponse = exports.GetDeviceResponse || (exports.GetDeviceResponse = {}));
var GetGroupRequest;
(function (GetGroupRequest) {
    /**
     * @internal
     */
    GetGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupRequest = exports.GetGroupRequest || (exports.GetGroupRequest = {}));
var GetGroupResponse;
(function (GetGroupResponse) {
    /**
     * @internal
     */
    GetGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupResponse = exports.GetGroupResponse || (exports.GetGroupResponse = {}));
var GetIdentityProviderByIdentifierRequest;
(function (GetIdentityProviderByIdentifierRequest) {
    /**
     * @internal
     */
    GetIdentityProviderByIdentifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIdentityProviderByIdentifierRequest = exports.GetIdentityProviderByIdentifierRequest || (exports.GetIdentityProviderByIdentifierRequest = {}));
var GetIdentityProviderByIdentifierResponse;
(function (GetIdentityProviderByIdentifierResponse) {
    /**
     * @internal
     */
    GetIdentityProviderByIdentifierResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIdentityProviderByIdentifierResponse = exports.GetIdentityProviderByIdentifierResponse || (exports.GetIdentityProviderByIdentifierResponse = {}));
var GetSigningCertificateRequest;
(function (GetSigningCertificateRequest) {
    /**
     * @internal
     */
    GetSigningCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSigningCertificateRequest = exports.GetSigningCertificateRequest || (exports.GetSigningCertificateRequest = {}));
var GetSigningCertificateResponse;
(function (GetSigningCertificateResponse) {
    /**
     * @internal
     */
    GetSigningCertificateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSigningCertificateResponse = exports.GetSigningCertificateResponse || (exports.GetSigningCertificateResponse = {}));
var GetUICustomizationRequest;
(function (GetUICustomizationRequest) {
    /**
     * @internal
     */
    GetUICustomizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetUICustomizationRequest = exports.GetUICustomizationRequest || (exports.GetUICustomizationRequest = {}));
var UICustomizationType;
(function (UICustomizationType) {
    /**
     * @internal
     */
    UICustomizationType.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
    });
})(UICustomizationType = exports.UICustomizationType || (exports.UICustomizationType = {}));
var GetUICustomizationResponse;
(function (GetUICustomizationResponse) {
    /**
     * @internal
     */
    GetUICustomizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.UICustomization && { UICustomization: UICustomizationType.filterSensitiveLog(obj.UICustomization) }),
    });
})(GetUICustomizationResponse = exports.GetUICustomizationResponse || (exports.GetUICustomizationResponse = {}));
var GetUserRequest;
(function (GetUserRequest) {
    /**
     * @internal
     */
    GetUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetUserRequest = exports.GetUserRequest || (exports.GetUserRequest = {}));
var GetUserResponse;
(function (GetUserResponse) {
    /**
     * @internal
     */
    GetUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.UserAttributes && {
            UserAttributes: obj.UserAttributes.map((item) => AttributeType.filterSensitiveLog(item)),
        }),
    });
})(GetUserResponse = exports.GetUserResponse || (exports.GetUserResponse = {}));
var GetUserAttributeVerificationCodeRequest;
(function (GetUserAttributeVerificationCodeRequest) {
    /**
     * @internal
     */
    GetUserAttributeVerificationCodeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetUserAttributeVerificationCodeRequest = exports.GetUserAttributeVerificationCodeRequest || (exports.GetUserAttributeVerificationCodeRequest = {}));
var GetUserAttributeVerificationCodeResponse;
(function (GetUserAttributeVerificationCodeResponse) {
    /**
     * @internal
     */
    GetUserAttributeVerificationCodeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUserAttributeVerificationCodeResponse = exports.GetUserAttributeVerificationCodeResponse || (exports.GetUserAttributeVerificationCodeResponse = {}));
var GetUserPoolMfaConfigRequest;
(function (GetUserPoolMfaConfigRequest) {
    /**
     * @internal
     */
    GetUserPoolMfaConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUserPoolMfaConfigRequest = exports.GetUserPoolMfaConfigRequest || (exports.GetUserPoolMfaConfigRequest = {}));
var SmsMfaConfigType;
(function (SmsMfaConfigType) {
    /**
     * @internal
     */
    SmsMfaConfigType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SmsMfaConfigType = exports.SmsMfaConfigType || (exports.SmsMfaConfigType = {}));
var SoftwareTokenMfaConfigType;
(function (SoftwareTokenMfaConfigType) {
    /**
     * @internal
     */
    SoftwareTokenMfaConfigType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SoftwareTokenMfaConfigType = exports.SoftwareTokenMfaConfigType || (exports.SoftwareTokenMfaConfigType = {}));
var GetUserPoolMfaConfigResponse;
(function (GetUserPoolMfaConfigResponse) {
    /**
     * @internal
     */
    GetUserPoolMfaConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUserPoolMfaConfigResponse = exports.GetUserPoolMfaConfigResponse || (exports.GetUserPoolMfaConfigResponse = {}));
var GlobalSignOutRequest;
(function (GlobalSignOutRequest) {
    /**
     * @internal
     */
    GlobalSignOutRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(GlobalSignOutRequest = exports.GlobalSignOutRequest || (exports.GlobalSignOutRequest = {}));
var GlobalSignOutResponse;
(function (GlobalSignOutResponse) {
    /**
     * @internal
     */
    GlobalSignOutResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalSignOutResponse = exports.GlobalSignOutResponse || (exports.GlobalSignOutResponse = {}));
var InitiateAuthRequest;
(function (InitiateAuthRequest) {
    /**
     * @internal
     */
    InitiateAuthRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthParameters && { AuthParameters: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
    });
})(InitiateAuthRequest = exports.InitiateAuthRequest || (exports.InitiateAuthRequest = {}));
var InitiateAuthResponse;
(function (InitiateAuthResponse) {
    /**
     * @internal
     */
    InitiateAuthResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationResult && {
            AuthenticationResult: AuthenticationResultType.filterSensitiveLog(obj.AuthenticationResult),
        }),
    });
})(InitiateAuthResponse = exports.InitiateAuthResponse || (exports.InitiateAuthResponse = {}));
var ListDevicesRequest;
(function (ListDevicesRequest) {
    /**
     * @internal
     */
    ListDevicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(ListDevicesRequest = exports.ListDevicesRequest || (exports.ListDevicesRequest = {}));
var ListDevicesResponse;
(function (ListDevicesResponse) {
    /**
     * @internal
     */
    ListDevicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDevicesResponse = exports.ListDevicesResponse || (exports.ListDevicesResponse = {}));
var ListGroupsRequest;
(function (ListGroupsRequest) {
    /**
     * @internal
     */
    ListGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupsRequest = exports.ListGroupsRequest || (exports.ListGroupsRequest = {}));
var ListGroupsResponse;
(function (ListGroupsResponse) {
    /**
     * @internal
     */
    ListGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupsResponse = exports.ListGroupsResponse || (exports.ListGroupsResponse = {}));
var ListIdentityProvidersRequest;
(function (ListIdentityProvidersRequest) {
    /**
     * @internal
     */
    ListIdentityProvidersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIdentityProvidersRequest = exports.ListIdentityProvidersRequest || (exports.ListIdentityProvidersRequest = {}));
var ProviderDescription;
(function (ProviderDescription) {
    /**
     * @internal
     */
    ProviderDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProviderDescription = exports.ProviderDescription || (exports.ProviderDescription = {}));
var ListIdentityProvidersResponse;
(function (ListIdentityProvidersResponse) {
    /**
     * @internal
     */
    ListIdentityProvidersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIdentityProvidersResponse = exports.ListIdentityProvidersResponse || (exports.ListIdentityProvidersResponse = {}));
var ListResourceServersRequest;
(function (ListResourceServersRequest) {
    /**
     * @internal
     */
    ListResourceServersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceServersRequest = exports.ListResourceServersRequest || (exports.ListResourceServersRequest = {}));
var ListResourceServersResponse;
(function (ListResourceServersResponse) {
    /**
     * @internal
     */
    ListResourceServersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceServersResponse = exports.ListResourceServersResponse || (exports.ListResourceServersResponse = {}));
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
var ListUserImportJobsRequest;
(function (ListUserImportJobsRequest) {
    /**
     * @internal
     */
    ListUserImportJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserImportJobsRequest = exports.ListUserImportJobsRequest || (exports.ListUserImportJobsRequest = {}));
var ListUserImportJobsResponse;
(function (ListUserImportJobsResponse) {
    /**
     * @internal
     */
    ListUserImportJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserImportJobsResponse = exports.ListUserImportJobsResponse || (exports.ListUserImportJobsResponse = {}));
var ListUserPoolClientsRequest;
(function (ListUserPoolClientsRequest) {
    /**
     * @internal
     */
    ListUserPoolClientsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserPoolClientsRequest = exports.ListUserPoolClientsRequest || (exports.ListUserPoolClientsRequest = {}));
var UserPoolClientDescription;
(function (UserPoolClientDescription) {
    /**
     * @internal
     */
    UserPoolClientDescription.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
    });
})(UserPoolClientDescription = exports.UserPoolClientDescription || (exports.UserPoolClientDescription = {}));
var ListUserPoolClientsResponse;
(function (ListUserPoolClientsResponse) {
    /**
     * @internal
     */
    ListUserPoolClientsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.UserPoolClients && {
            UserPoolClients: obj.UserPoolClients.map((item) => UserPoolClientDescription.filterSensitiveLog(item)),
        }),
    });
})(ListUserPoolClientsResponse = exports.ListUserPoolClientsResponse || (exports.ListUserPoolClientsResponse = {}));
var ListUserPoolsRequest;
(function (ListUserPoolsRequest) {
    /**
     * @internal
     */
    ListUserPoolsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserPoolsRequest = exports.ListUserPoolsRequest || (exports.ListUserPoolsRequest = {}));
var UserPoolDescriptionType;
(function (UserPoolDescriptionType) {
    /**
     * @internal
     */
    UserPoolDescriptionType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserPoolDescriptionType = exports.UserPoolDescriptionType || (exports.UserPoolDescriptionType = {}));
var ListUserPoolsResponse;
(function (ListUserPoolsResponse) {
    /**
     * @internal
     */
    ListUserPoolsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserPoolsResponse = exports.ListUserPoolsResponse || (exports.ListUserPoolsResponse = {}));
var ListUsersRequest;
(function (ListUsersRequest) {
    /**
     * @internal
     */
    ListUsersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsersRequest = exports.ListUsersRequest || (exports.ListUsersRequest = {}));
var ListUsersResponse;
(function (ListUsersResponse) {
    /**
     * @internal
     */
    ListUsersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Users && { Users: obj.Users.map((item) => UserType.filterSensitiveLog(item)) }),
    });
})(ListUsersResponse = exports.ListUsersResponse || (exports.ListUsersResponse = {}));
var ListUsersInGroupRequest;
(function (ListUsersInGroupRequest) {
    /**
     * @internal
     */
    ListUsersInGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsersInGroupRequest = exports.ListUsersInGroupRequest || (exports.ListUsersInGroupRequest = {}));
var ListUsersInGroupResponse;
(function (ListUsersInGroupResponse) {
    /**
     * @internal
     */
    ListUsersInGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Users && { Users: obj.Users.map((item) => UserType.filterSensitiveLog(item)) }),
    });
})(ListUsersInGroupResponse = exports.ListUsersInGroupResponse || (exports.ListUsersInGroupResponse = {}));
var ResendConfirmationCodeRequest;
(function (ResendConfirmationCodeRequest) {
    /**
     * @internal
     */
    ResendConfirmationCodeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SecretHash && { SecretHash: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    });
})(ResendConfirmationCodeRequest = exports.ResendConfirmationCodeRequest || (exports.ResendConfirmationCodeRequest = {}));
var ResendConfirmationCodeResponse;
(function (ResendConfirmationCodeResponse) {
    /**
     * @internal
     */
    ResendConfirmationCodeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResendConfirmationCodeResponse = exports.ResendConfirmationCodeResponse || (exports.ResendConfirmationCodeResponse = {}));
var RespondToAuthChallengeRequest;
(function (RespondToAuthChallengeRequest) {
    /**
     * @internal
     */
    RespondToAuthChallengeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
    });
})(RespondToAuthChallengeRequest = exports.RespondToAuthChallengeRequest || (exports.RespondToAuthChallengeRequest = {}));
var RespondToAuthChallengeResponse;
(function (RespondToAuthChallengeResponse) {
    /**
     * @internal
     */
    RespondToAuthChallengeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationResult && {
            AuthenticationResult: AuthenticationResultType.filterSensitiveLog(obj.AuthenticationResult),
        }),
    });
})(RespondToAuthChallengeResponse = exports.RespondToAuthChallengeResponse || (exports.RespondToAuthChallengeResponse = {}));
var SetRiskConfigurationRequest;
(function (SetRiskConfigurationRequest) {
    /**
     * @internal
     */
    SetRiskConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
    });
})(SetRiskConfigurationRequest = exports.SetRiskConfigurationRequest || (exports.SetRiskConfigurationRequest = {}));
var SetRiskConfigurationResponse;
(function (SetRiskConfigurationResponse) {
    /**
     * @internal
     */
    SetRiskConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.RiskConfiguration && {
            RiskConfiguration: RiskConfigurationType.filterSensitiveLog(obj.RiskConfiguration),
        }),
    });
})(SetRiskConfigurationResponse = exports.SetRiskConfigurationResponse || (exports.SetRiskConfigurationResponse = {}));
var SetUICustomizationRequest;
(function (SetUICustomizationRequest) {
    /**
     * @internal
     */
    SetUICustomizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
    });
})(SetUICustomizationRequest = exports.SetUICustomizationRequest || (exports.SetUICustomizationRequest = {}));
var SetUICustomizationResponse;
(function (SetUICustomizationResponse) {
    /**
     * @internal
     */
    SetUICustomizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.UICustomization && { UICustomization: UICustomizationType.filterSensitiveLog(obj.UICustomization) }),
    });
})(SetUICustomizationResponse = exports.SetUICustomizationResponse || (exports.SetUICustomizationResponse = {}));
var SetUserMFAPreferenceRequest;
(function (SetUserMFAPreferenceRequest) {
    /**
     * @internal
     */
    SetUserMFAPreferenceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(SetUserMFAPreferenceRequest = exports.SetUserMFAPreferenceRequest || (exports.SetUserMFAPreferenceRequest = {}));
var SetUserMFAPreferenceResponse;
(function (SetUserMFAPreferenceResponse) {
    /**
     * @internal
     */
    SetUserMFAPreferenceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetUserMFAPreferenceResponse = exports.SetUserMFAPreferenceResponse || (exports.SetUserMFAPreferenceResponse = {}));
var SetUserPoolMfaConfigRequest;
(function (SetUserPoolMfaConfigRequest) {
    /**
     * @internal
     */
    SetUserPoolMfaConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetUserPoolMfaConfigRequest = exports.SetUserPoolMfaConfigRequest || (exports.SetUserPoolMfaConfigRequest = {}));
var SetUserPoolMfaConfigResponse;
(function (SetUserPoolMfaConfigResponse) {
    /**
     * @internal
     */
    SetUserPoolMfaConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetUserPoolMfaConfigResponse = exports.SetUserPoolMfaConfigResponse || (exports.SetUserPoolMfaConfigResponse = {}));
var SetUserSettingsRequest;
(function (SetUserSettingsRequest) {
    /**
     * @internal
     */
    SetUserSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(SetUserSettingsRequest = exports.SetUserSettingsRequest || (exports.SetUserSettingsRequest = {}));
var SetUserSettingsResponse;
(function (SetUserSettingsResponse) {
    /**
     * @internal
     */
    SetUserSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetUserSettingsResponse = exports.SetUserSettingsResponse || (exports.SetUserSettingsResponse = {}));
var SignUpRequest;
(function (SignUpRequest) {
    /**
     * @internal
     */
    SignUpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SecretHash && { SecretHash: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.UserAttributes && {
            UserAttributes: obj.UserAttributes.map((item) => AttributeType.filterSensitiveLog(item)),
        }),
        ...(obj.ValidationData && {
            ValidationData: obj.ValidationData.map((item) => AttributeType.filterSensitiveLog(item)),
        }),
    });
})(SignUpRequest = exports.SignUpRequest || (exports.SignUpRequest = {}));
var SignUpResponse;
(function (SignUpResponse) {
    /**
     * @internal
     */
    SignUpResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SignUpResponse = exports.SignUpResponse || (exports.SignUpResponse = {}));
var StartUserImportJobRequest;
(function (StartUserImportJobRequest) {
    /**
     * @internal
     */
    StartUserImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartUserImportJobRequest = exports.StartUserImportJobRequest || (exports.StartUserImportJobRequest = {}));
var StartUserImportJobResponse;
(function (StartUserImportJobResponse) {
    /**
     * @internal
     */
    StartUserImportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartUserImportJobResponse = exports.StartUserImportJobResponse || (exports.StartUserImportJobResponse = {}));
var StopUserImportJobRequest;
(function (StopUserImportJobRequest) {
    /**
     * @internal
     */
    StopUserImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopUserImportJobRequest = exports.StopUserImportJobRequest || (exports.StopUserImportJobRequest = {}));
var StopUserImportJobResponse;
(function (StopUserImportJobResponse) {
    /**
     * @internal
     */
    StopUserImportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopUserImportJobResponse = exports.StopUserImportJobResponse || (exports.StopUserImportJobResponse = {}));
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
//# sourceMappingURL=models_0.js.map