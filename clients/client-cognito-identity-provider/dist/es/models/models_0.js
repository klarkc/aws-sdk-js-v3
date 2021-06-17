import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var RecoveryOptionNameType;
(function (RecoveryOptionNameType) {
    RecoveryOptionNameType["ADMIN_ONLY"] = "admin_only";
    RecoveryOptionNameType["VERIFIED_EMAIL"] = "verified_email";
    RecoveryOptionNameType["VERIFIED_PHONE_NUMBER"] = "verified_phone_number";
})(RecoveryOptionNameType || (RecoveryOptionNameType = {}));
export var RecoveryOptionType;
(function (RecoveryOptionType) {
    /**
     * @internal
     */
    RecoveryOptionType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecoveryOptionType || (RecoveryOptionType = {}));
export var AccountRecoverySettingType;
(function (AccountRecoverySettingType) {
    /**
     * @internal
     */
    AccountRecoverySettingType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountRecoverySettingType || (AccountRecoverySettingType = {}));
export var AccountTakeoverEventActionType;
(function (AccountTakeoverEventActionType) {
    AccountTakeoverEventActionType["BLOCK"] = "BLOCK";
    AccountTakeoverEventActionType["MFA_IF_CONFIGURED"] = "MFA_IF_CONFIGURED";
    AccountTakeoverEventActionType["MFA_REQUIRED"] = "MFA_REQUIRED";
    AccountTakeoverEventActionType["NO_ACTION"] = "NO_ACTION";
})(AccountTakeoverEventActionType || (AccountTakeoverEventActionType = {}));
export var AccountTakeoverActionType;
(function (AccountTakeoverActionType) {
    /**
     * @internal
     */
    AccountTakeoverActionType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountTakeoverActionType || (AccountTakeoverActionType = {}));
export var AccountTakeoverActionsType;
(function (AccountTakeoverActionsType) {
    /**
     * @internal
     */
    AccountTakeoverActionsType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountTakeoverActionsType || (AccountTakeoverActionsType = {}));
export var NotifyEmailType;
(function (NotifyEmailType) {
    /**
     * @internal
     */
    NotifyEmailType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotifyEmailType || (NotifyEmailType = {}));
export var NotifyConfigurationType;
(function (NotifyConfigurationType) {
    /**
     * @internal
     */
    NotifyConfigurationType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotifyConfigurationType || (NotifyConfigurationType = {}));
export var AccountTakeoverRiskConfigurationType;
(function (AccountTakeoverRiskConfigurationType) {
    /**
     * @internal
     */
    AccountTakeoverRiskConfigurationType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountTakeoverRiskConfigurationType || (AccountTakeoverRiskConfigurationType = {}));
export var AttributeDataType;
(function (AttributeDataType) {
    AttributeDataType["BOOLEAN"] = "Boolean";
    AttributeDataType["DATETIME"] = "DateTime";
    AttributeDataType["NUMBER"] = "Number";
    AttributeDataType["STRING"] = "String";
})(AttributeDataType || (AttributeDataType = {}));
export var NumberAttributeConstraintsType;
(function (NumberAttributeConstraintsType) {
    /**
     * @internal
     */
    NumberAttributeConstraintsType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NumberAttributeConstraintsType || (NumberAttributeConstraintsType = {}));
export var StringAttributeConstraintsType;
(function (StringAttributeConstraintsType) {
    /**
     * @internal
     */
    StringAttributeConstraintsType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StringAttributeConstraintsType || (StringAttributeConstraintsType = {}));
export var SchemaAttributeType;
(function (SchemaAttributeType) {
    /**
     * @internal
     */
    SchemaAttributeType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SchemaAttributeType || (SchemaAttributeType = {}));
export var AddCustomAttributesRequest;
(function (AddCustomAttributesRequest) {
    /**
     * @internal
     */
    AddCustomAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddCustomAttributesRequest || (AddCustomAttributesRequest = {}));
export var AddCustomAttributesResponse;
(function (AddCustomAttributesResponse) {
    /**
     * @internal
     */
    AddCustomAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddCustomAttributesResponse || (AddCustomAttributesResponse = {}));
export var InternalErrorException;
(function (InternalErrorException) {
    /**
     * @internal
     */
    InternalErrorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalErrorException || (InternalErrorException = {}));
export var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterException || (InvalidParameterException = {}));
export var NotAuthorizedException;
(function (NotAuthorizedException) {
    /**
     * @internal
     */
    NotAuthorizedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotAuthorizedException || (NotAuthorizedException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyRequestsException || (TooManyRequestsException = {}));
export var UserImportInProgressException;
(function (UserImportInProgressException) {
    /**
     * @internal
     */
    UserImportInProgressException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserImportInProgressException || (UserImportInProgressException = {}));
export var AdminAddUserToGroupRequest;
(function (AdminAddUserToGroupRequest) {
    /**
     * @internal
     */
    AdminAddUserToGroupRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminAddUserToGroupRequest || (AdminAddUserToGroupRequest = {}));
export var UserNotFoundException;
(function (UserNotFoundException) {
    /**
     * @internal
     */
    UserNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserNotFoundException || (UserNotFoundException = {}));
export var AdminConfirmSignUpRequest;
(function (AdminConfirmSignUpRequest) {
    /**
     * @internal
     */
    AdminConfirmSignUpRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminConfirmSignUpRequest || (AdminConfirmSignUpRequest = {}));
export var AdminConfirmSignUpResponse;
(function (AdminConfirmSignUpResponse) {
    /**
     * @internal
     */
    AdminConfirmSignUpResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminConfirmSignUpResponse || (AdminConfirmSignUpResponse = {}));
export var InvalidLambdaResponseException;
(function (InvalidLambdaResponseException) {
    /**
     * @internal
     */
    InvalidLambdaResponseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidLambdaResponseException || (InvalidLambdaResponseException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var TooManyFailedAttemptsException;
(function (TooManyFailedAttemptsException) {
    /**
     * @internal
     */
    TooManyFailedAttemptsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyFailedAttemptsException || (TooManyFailedAttemptsException = {}));
export var UnexpectedLambdaException;
(function (UnexpectedLambdaException) {
    /**
     * @internal
     */
    UnexpectedLambdaException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnexpectedLambdaException || (UnexpectedLambdaException = {}));
export var UserLambdaValidationException;
(function (UserLambdaValidationException) {
    /**
     * @internal
     */
    UserLambdaValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserLambdaValidationException || (UserLambdaValidationException = {}));
export var DeliveryMediumType;
(function (DeliveryMediumType) {
    DeliveryMediumType["EMAIL"] = "EMAIL";
    DeliveryMediumType["SMS"] = "SMS";
})(DeliveryMediumType || (DeliveryMediumType = {}));
export var MessageActionType;
(function (MessageActionType) {
    MessageActionType["RESEND"] = "RESEND";
    MessageActionType["SUPPRESS"] = "SUPPRESS";
})(MessageActionType || (MessageActionType = {}));
export var AttributeType;
(function (AttributeType) {
    /**
     * @internal
     */
    AttributeType.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Value && { Value: SENSITIVE_STRING }))); };
})(AttributeType || (AttributeType = {}));
export var AdminCreateUserRequest;
(function (AdminCreateUserRequest) {
    /**
     * @internal
     */
    AdminCreateUserRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING })), (obj.UserAttributes && {
        UserAttributes: obj.UserAttributes.map(function (item) { return AttributeType.filterSensitiveLog(item); }),
    })), (obj.ValidationData && {
        ValidationData: obj.ValidationData.map(function (item) { return AttributeType.filterSensitiveLog(item); }),
    })), (obj.TemporaryPassword && { TemporaryPassword: SENSITIVE_STRING }))); };
})(AdminCreateUserRequest || (AdminCreateUserRequest = {}));
export var MFAOptionType;
(function (MFAOptionType) {
    /**
     * @internal
     */
    MFAOptionType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MFAOptionType || (MFAOptionType = {}));
export var UserStatusType;
(function (UserStatusType) {
    UserStatusType["ARCHIVED"] = "ARCHIVED";
    UserStatusType["COMPROMISED"] = "COMPROMISED";
    UserStatusType["CONFIRMED"] = "CONFIRMED";
    UserStatusType["FORCE_CHANGE_PASSWORD"] = "FORCE_CHANGE_PASSWORD";
    UserStatusType["RESET_REQUIRED"] = "RESET_REQUIRED";
    UserStatusType["UNCONFIRMED"] = "UNCONFIRMED";
    UserStatusType["UNKNOWN"] = "UNKNOWN";
})(UserStatusType || (UserStatusType = {}));
export var UserType;
(function (UserType) {
    /**
     * @internal
     */
    UserType.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING })), (obj.Attributes && { Attributes: obj.Attributes.map(function (item) { return AttributeType.filterSensitiveLog(item); }) }))); };
})(UserType || (UserType = {}));
export var AdminCreateUserResponse;
(function (AdminCreateUserResponse) {
    /**
     * @internal
     */
    AdminCreateUserResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.User && { User: UserType.filterSensitiveLog(obj.User) }))); };
})(AdminCreateUserResponse || (AdminCreateUserResponse = {}));
export var CodeDeliveryFailureException;
(function (CodeDeliveryFailureException) {
    /**
     * @internal
     */
    CodeDeliveryFailureException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeDeliveryFailureException || (CodeDeliveryFailureException = {}));
export var InvalidPasswordException;
(function (InvalidPasswordException) {
    /**
     * @internal
     */
    InvalidPasswordException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidPasswordException || (InvalidPasswordException = {}));
export var InvalidSmsRoleAccessPolicyException;
(function (InvalidSmsRoleAccessPolicyException) {
    /**
     * @internal
     */
    InvalidSmsRoleAccessPolicyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidSmsRoleAccessPolicyException || (InvalidSmsRoleAccessPolicyException = {}));
export var InvalidSmsRoleTrustRelationshipException;
(function (InvalidSmsRoleTrustRelationshipException) {
    /**
     * @internal
     */
    InvalidSmsRoleTrustRelationshipException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidSmsRoleTrustRelationshipException || (InvalidSmsRoleTrustRelationshipException = {}));
export var PreconditionNotMetException;
(function (PreconditionNotMetException) {
    /**
     * @internal
     */
    PreconditionNotMetException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PreconditionNotMetException || (PreconditionNotMetException = {}));
export var UnsupportedUserStateException;
(function (UnsupportedUserStateException) {
    /**
     * @internal
     */
    UnsupportedUserStateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedUserStateException || (UnsupportedUserStateException = {}));
export var UsernameExistsException;
(function (UsernameExistsException) {
    /**
     * @internal
     */
    UsernameExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UsernameExistsException || (UsernameExistsException = {}));
export var MessageTemplateType;
(function (MessageTemplateType) {
    /**
     * @internal
     */
    MessageTemplateType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MessageTemplateType || (MessageTemplateType = {}));
export var AdminCreateUserConfigType;
(function (AdminCreateUserConfigType) {
    /**
     * @internal
     */
    AdminCreateUserConfigType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminCreateUserConfigType || (AdminCreateUserConfigType = {}));
export var AdminDeleteUserRequest;
(function (AdminDeleteUserRequest) {
    /**
     * @internal
     */
    AdminDeleteUserRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminDeleteUserRequest || (AdminDeleteUserRequest = {}));
export var AdminDeleteUserAttributesRequest;
(function (AdminDeleteUserAttributesRequest) {
    /**
     * @internal
     */
    AdminDeleteUserAttributesRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminDeleteUserAttributesRequest || (AdminDeleteUserAttributesRequest = {}));
export var AdminDeleteUserAttributesResponse;
(function (AdminDeleteUserAttributesResponse) {
    /**
     * @internal
     */
    AdminDeleteUserAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminDeleteUserAttributesResponse || (AdminDeleteUserAttributesResponse = {}));
export var ProviderUserIdentifierType;
(function (ProviderUserIdentifierType) {
    /**
     * @internal
     */
    ProviderUserIdentifierType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProviderUserIdentifierType || (ProviderUserIdentifierType = {}));
export var AdminDisableProviderForUserRequest;
(function (AdminDisableProviderForUserRequest) {
    /**
     * @internal
     */
    AdminDisableProviderForUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminDisableProviderForUserRequest || (AdminDisableProviderForUserRequest = {}));
export var AdminDisableProviderForUserResponse;
(function (AdminDisableProviderForUserResponse) {
    /**
     * @internal
     */
    AdminDisableProviderForUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminDisableProviderForUserResponse || (AdminDisableProviderForUserResponse = {}));
export var AliasExistsException;
(function (AliasExistsException) {
    /**
     * @internal
     */
    AliasExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AliasExistsException || (AliasExistsException = {}));
export var AdminDisableUserRequest;
(function (AdminDisableUserRequest) {
    /**
     * @internal
     */
    AdminDisableUserRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminDisableUserRequest || (AdminDisableUserRequest = {}));
export var AdminDisableUserResponse;
(function (AdminDisableUserResponse) {
    /**
     * @internal
     */
    AdminDisableUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminDisableUserResponse || (AdminDisableUserResponse = {}));
export var AdminEnableUserRequest;
(function (AdminEnableUserRequest) {
    /**
     * @internal
     */
    AdminEnableUserRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminEnableUserRequest || (AdminEnableUserRequest = {}));
export var AdminEnableUserResponse;
(function (AdminEnableUserResponse) {
    /**
     * @internal
     */
    AdminEnableUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminEnableUserResponse || (AdminEnableUserResponse = {}));
export var AdminForgetDeviceRequest;
(function (AdminForgetDeviceRequest) {
    /**
     * @internal
     */
    AdminForgetDeviceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminForgetDeviceRequest || (AdminForgetDeviceRequest = {}));
export var InvalidUserPoolConfigurationException;
(function (InvalidUserPoolConfigurationException) {
    /**
     * @internal
     */
    InvalidUserPoolConfigurationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidUserPoolConfigurationException || (InvalidUserPoolConfigurationException = {}));
export var AdminGetDeviceRequest;
(function (AdminGetDeviceRequest) {
    /**
     * @internal
     */
    AdminGetDeviceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminGetDeviceRequest || (AdminGetDeviceRequest = {}));
export var DeviceType;
(function (DeviceType) {
    /**
     * @internal
     */
    DeviceType.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DeviceAttributes && {
        DeviceAttributes: obj.DeviceAttributes.map(function (item) { return AttributeType.filterSensitiveLog(item); }),
    }))); };
})(DeviceType || (DeviceType = {}));
export var AdminGetDeviceResponse;
(function (AdminGetDeviceResponse) {
    /**
     * @internal
     */
    AdminGetDeviceResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Device && { Device: DeviceType.filterSensitiveLog(obj.Device) }))); };
})(AdminGetDeviceResponse || (AdminGetDeviceResponse = {}));
export var AdminGetUserRequest;
(function (AdminGetUserRequest) {
    /**
     * @internal
     */
    AdminGetUserRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminGetUserRequest || (AdminGetUserRequest = {}));
export var AdminGetUserResponse;
(function (AdminGetUserResponse) {
    /**
     * @internal
     */
    AdminGetUserResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING })), (obj.UserAttributes && {
        UserAttributes: obj.UserAttributes.map(function (item) { return AttributeType.filterSensitiveLog(item); }),
    }))); };
})(AdminGetUserResponse || (AdminGetUserResponse = {}));
export var AnalyticsMetadataType;
(function (AnalyticsMetadataType) {
    /**
     * @internal
     */
    AnalyticsMetadataType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnalyticsMetadataType || (AnalyticsMetadataType = {}));
export var AuthFlowType;
(function (AuthFlowType) {
    AuthFlowType["ADMIN_NO_SRP_AUTH"] = "ADMIN_NO_SRP_AUTH";
    AuthFlowType["ADMIN_USER_PASSWORD_AUTH"] = "ADMIN_USER_PASSWORD_AUTH";
    AuthFlowType["CUSTOM_AUTH"] = "CUSTOM_AUTH";
    AuthFlowType["REFRESH_TOKEN"] = "REFRESH_TOKEN";
    AuthFlowType["REFRESH_TOKEN_AUTH"] = "REFRESH_TOKEN_AUTH";
    AuthFlowType["USER_PASSWORD_AUTH"] = "USER_PASSWORD_AUTH";
    AuthFlowType["USER_SRP_AUTH"] = "USER_SRP_AUTH";
})(AuthFlowType || (AuthFlowType = {}));
export var HttpHeader;
(function (HttpHeader) {
    /**
     * @internal
     */
    HttpHeader.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HttpHeader || (HttpHeader = {}));
export var ContextDataType;
(function (ContextDataType) {
    /**
     * @internal
     */
    ContextDataType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContextDataType || (ContextDataType = {}));
export var AdminInitiateAuthRequest;
(function (AdminInitiateAuthRequest) {
    /**
     * @internal
     */
    AdminInitiateAuthRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING })), (obj.AuthParameters && { AuthParameters: SENSITIVE_STRING }))); };
})(AdminInitiateAuthRequest || (AdminInitiateAuthRequest = {}));
export var NewDeviceMetadataType;
(function (NewDeviceMetadataType) {
    /**
     * @internal
     */
    NewDeviceMetadataType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NewDeviceMetadataType || (NewDeviceMetadataType = {}));
export var AuthenticationResultType;
(function (AuthenticationResultType) {
    /**
     * @internal
     */
    AuthenticationResultType.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING })), (obj.RefreshToken && { RefreshToken: SENSITIVE_STRING })), (obj.IdToken && { IdToken: SENSITIVE_STRING }))); };
})(AuthenticationResultType || (AuthenticationResultType = {}));
export var ChallengeNameType;
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
})(ChallengeNameType || (ChallengeNameType = {}));
export var AdminInitiateAuthResponse;
(function (AdminInitiateAuthResponse) {
    /**
     * @internal
     */
    AdminInitiateAuthResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationResult && {
        AuthenticationResult: AuthenticationResultType.filterSensitiveLog(obj.AuthenticationResult),
    }))); };
})(AdminInitiateAuthResponse || (AdminInitiateAuthResponse = {}));
export var MFAMethodNotFoundException;
(function (MFAMethodNotFoundException) {
    /**
     * @internal
     */
    MFAMethodNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MFAMethodNotFoundException || (MFAMethodNotFoundException = {}));
export var PasswordResetRequiredException;
(function (PasswordResetRequiredException) {
    /**
     * @internal
     */
    PasswordResetRequiredException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PasswordResetRequiredException || (PasswordResetRequiredException = {}));
export var UserNotConfirmedException;
(function (UserNotConfirmedException) {
    /**
     * @internal
     */
    UserNotConfirmedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserNotConfirmedException || (UserNotConfirmedException = {}));
export var AdminLinkProviderForUserRequest;
(function (AdminLinkProviderForUserRequest) {
    /**
     * @internal
     */
    AdminLinkProviderForUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminLinkProviderForUserRequest || (AdminLinkProviderForUserRequest = {}));
export var AdminLinkProviderForUserResponse;
(function (AdminLinkProviderForUserResponse) {
    /**
     * @internal
     */
    AdminLinkProviderForUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminLinkProviderForUserResponse || (AdminLinkProviderForUserResponse = {}));
export var AdminListDevicesRequest;
(function (AdminListDevicesRequest) {
    /**
     * @internal
     */
    AdminListDevicesRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminListDevicesRequest || (AdminListDevicesRequest = {}));
export var AdminListDevicesResponse;
(function (AdminListDevicesResponse) {
    /**
     * @internal
     */
    AdminListDevicesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminListDevicesResponse || (AdminListDevicesResponse = {}));
export var AdminListGroupsForUserRequest;
(function (AdminListGroupsForUserRequest) {
    /**
     * @internal
     */
    AdminListGroupsForUserRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminListGroupsForUserRequest || (AdminListGroupsForUserRequest = {}));
export var GroupType;
(function (GroupType) {
    /**
     * @internal
     */
    GroupType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GroupType || (GroupType = {}));
export var AdminListGroupsForUserResponse;
(function (AdminListGroupsForUserResponse) {
    /**
     * @internal
     */
    AdminListGroupsForUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminListGroupsForUserResponse || (AdminListGroupsForUserResponse = {}));
export var AdminListUserAuthEventsRequest;
(function (AdminListUserAuthEventsRequest) {
    /**
     * @internal
     */
    AdminListUserAuthEventsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminListUserAuthEventsRequest || (AdminListUserAuthEventsRequest = {}));
export var ChallengeName;
(function (ChallengeName) {
    ChallengeName["Mfa"] = "Mfa";
    ChallengeName["Password"] = "Password";
})(ChallengeName || (ChallengeName = {}));
export var ChallengeResponse;
(function (ChallengeResponse) {
    ChallengeResponse["Failure"] = "Failure";
    ChallengeResponse["Success"] = "Success";
})(ChallengeResponse || (ChallengeResponse = {}));
export var ChallengeResponseType;
(function (ChallengeResponseType) {
    /**
     * @internal
     */
    ChallengeResponseType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChallengeResponseType || (ChallengeResponseType = {}));
export var EventContextDataType;
(function (EventContextDataType) {
    /**
     * @internal
     */
    EventContextDataType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventContextDataType || (EventContextDataType = {}));
export var FeedbackValueType;
(function (FeedbackValueType) {
    FeedbackValueType["INVALID"] = "Invalid";
    FeedbackValueType["VALID"] = "Valid";
})(FeedbackValueType || (FeedbackValueType = {}));
export var EventFeedbackType;
(function (EventFeedbackType) {
    /**
     * @internal
     */
    EventFeedbackType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventFeedbackType || (EventFeedbackType = {}));
export var EventResponseType;
(function (EventResponseType) {
    EventResponseType["Failure"] = "Failure";
    EventResponseType["Success"] = "Success";
})(EventResponseType || (EventResponseType = {}));
export var RiskDecisionType;
(function (RiskDecisionType) {
    RiskDecisionType["AccountTakeover"] = "AccountTakeover";
    RiskDecisionType["Block"] = "Block";
    RiskDecisionType["NoRisk"] = "NoRisk";
})(RiskDecisionType || (RiskDecisionType = {}));
export var RiskLevelType;
(function (RiskLevelType) {
    RiskLevelType["High"] = "High";
    RiskLevelType["Low"] = "Low";
    RiskLevelType["Medium"] = "Medium";
})(RiskLevelType || (RiskLevelType = {}));
export var EventRiskType;
(function (EventRiskType) {
    /**
     * @internal
     */
    EventRiskType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventRiskType || (EventRiskType = {}));
export var EventType;
(function (EventType) {
    EventType["ForgotPassword"] = "ForgotPassword";
    EventType["SignIn"] = "SignIn";
    EventType["SignUp"] = "SignUp";
})(EventType || (EventType = {}));
export var AuthEventType;
(function (AuthEventType) {
    /**
     * @internal
     */
    AuthEventType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuthEventType || (AuthEventType = {}));
export var AdminListUserAuthEventsResponse;
(function (AdminListUserAuthEventsResponse) {
    /**
     * @internal
     */
    AdminListUserAuthEventsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminListUserAuthEventsResponse || (AdminListUserAuthEventsResponse = {}));
export var UserPoolAddOnNotEnabledException;
(function (UserPoolAddOnNotEnabledException) {
    /**
     * @internal
     */
    UserPoolAddOnNotEnabledException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserPoolAddOnNotEnabledException || (UserPoolAddOnNotEnabledException = {}));
export var AdminRemoveUserFromGroupRequest;
(function (AdminRemoveUserFromGroupRequest) {
    /**
     * @internal
     */
    AdminRemoveUserFromGroupRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminRemoveUserFromGroupRequest || (AdminRemoveUserFromGroupRequest = {}));
export var AdminResetUserPasswordRequest;
(function (AdminResetUserPasswordRequest) {
    /**
     * @internal
     */
    AdminResetUserPasswordRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminResetUserPasswordRequest || (AdminResetUserPasswordRequest = {}));
export var AdminResetUserPasswordResponse;
(function (AdminResetUserPasswordResponse) {
    /**
     * @internal
     */
    AdminResetUserPasswordResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminResetUserPasswordResponse || (AdminResetUserPasswordResponse = {}));
export var InvalidEmailRoleAccessPolicyException;
(function (InvalidEmailRoleAccessPolicyException) {
    /**
     * @internal
     */
    InvalidEmailRoleAccessPolicyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidEmailRoleAccessPolicyException || (InvalidEmailRoleAccessPolicyException = {}));
export var AdminRespondToAuthChallengeRequest;
(function (AdminRespondToAuthChallengeRequest) {
    /**
     * @internal
     */
    AdminRespondToAuthChallengeRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING }))); };
})(AdminRespondToAuthChallengeRequest || (AdminRespondToAuthChallengeRequest = {}));
export var AdminRespondToAuthChallengeResponse;
(function (AdminRespondToAuthChallengeResponse) {
    /**
     * @internal
     */
    AdminRespondToAuthChallengeResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationResult && {
        AuthenticationResult: AuthenticationResultType.filterSensitiveLog(obj.AuthenticationResult),
    }))); };
})(AdminRespondToAuthChallengeResponse || (AdminRespondToAuthChallengeResponse = {}));
export var CodeMismatchException;
(function (CodeMismatchException) {
    /**
     * @internal
     */
    CodeMismatchException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeMismatchException || (CodeMismatchException = {}));
export var ExpiredCodeException;
(function (ExpiredCodeException) {
    /**
     * @internal
     */
    ExpiredCodeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExpiredCodeException || (ExpiredCodeException = {}));
export var SoftwareTokenMFANotFoundException;
(function (SoftwareTokenMFANotFoundException) {
    /**
     * @internal
     */
    SoftwareTokenMFANotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SoftwareTokenMFANotFoundException || (SoftwareTokenMFANotFoundException = {}));
export var SMSMfaSettingsType;
(function (SMSMfaSettingsType) {
    /**
     * @internal
     */
    SMSMfaSettingsType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SMSMfaSettingsType || (SMSMfaSettingsType = {}));
export var SoftwareTokenMfaSettingsType;
(function (SoftwareTokenMfaSettingsType) {
    /**
     * @internal
     */
    SoftwareTokenMfaSettingsType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SoftwareTokenMfaSettingsType || (SoftwareTokenMfaSettingsType = {}));
export var AdminSetUserMFAPreferenceRequest;
(function (AdminSetUserMFAPreferenceRequest) {
    /**
     * @internal
     */
    AdminSetUserMFAPreferenceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminSetUserMFAPreferenceRequest || (AdminSetUserMFAPreferenceRequest = {}));
export var AdminSetUserMFAPreferenceResponse;
(function (AdminSetUserMFAPreferenceResponse) {
    /**
     * @internal
     */
    AdminSetUserMFAPreferenceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminSetUserMFAPreferenceResponse || (AdminSetUserMFAPreferenceResponse = {}));
export var AdminSetUserPasswordRequest;
(function (AdminSetUserPasswordRequest) {
    /**
     * @internal
     */
    AdminSetUserPasswordRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING })), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(AdminSetUserPasswordRequest || (AdminSetUserPasswordRequest = {}));
export var AdminSetUserPasswordResponse;
(function (AdminSetUserPasswordResponse) {
    /**
     * @internal
     */
    AdminSetUserPasswordResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminSetUserPasswordResponse || (AdminSetUserPasswordResponse = {}));
export var AdminSetUserSettingsRequest;
(function (AdminSetUserSettingsRequest) {
    /**
     * @internal
     */
    AdminSetUserSettingsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminSetUserSettingsRequest || (AdminSetUserSettingsRequest = {}));
export var AdminSetUserSettingsResponse;
(function (AdminSetUserSettingsResponse) {
    /**
     * @internal
     */
    AdminSetUserSettingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminSetUserSettingsResponse || (AdminSetUserSettingsResponse = {}));
export var AdminUpdateAuthEventFeedbackRequest;
(function (AdminUpdateAuthEventFeedbackRequest) {
    /**
     * @internal
     */
    AdminUpdateAuthEventFeedbackRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminUpdateAuthEventFeedbackRequest || (AdminUpdateAuthEventFeedbackRequest = {}));
export var AdminUpdateAuthEventFeedbackResponse;
(function (AdminUpdateAuthEventFeedbackResponse) {
    /**
     * @internal
     */
    AdminUpdateAuthEventFeedbackResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminUpdateAuthEventFeedbackResponse || (AdminUpdateAuthEventFeedbackResponse = {}));
export var DeviceRememberedStatusType;
(function (DeviceRememberedStatusType) {
    DeviceRememberedStatusType["NOT_REMEMBERED"] = "not_remembered";
    DeviceRememberedStatusType["REMEMBERED"] = "remembered";
})(DeviceRememberedStatusType || (DeviceRememberedStatusType = {}));
export var AdminUpdateDeviceStatusRequest;
(function (AdminUpdateDeviceStatusRequest) {
    /**
     * @internal
     */
    AdminUpdateDeviceStatusRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminUpdateDeviceStatusRequest || (AdminUpdateDeviceStatusRequest = {}));
export var AdminUpdateDeviceStatusResponse;
(function (AdminUpdateDeviceStatusResponse) {
    /**
     * @internal
     */
    AdminUpdateDeviceStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminUpdateDeviceStatusResponse || (AdminUpdateDeviceStatusResponse = {}));
export var AdminUpdateUserAttributesRequest;
(function (AdminUpdateUserAttributesRequest) {
    /**
     * @internal
     */
    AdminUpdateUserAttributesRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING })), (obj.UserAttributes && {
        UserAttributes: obj.UserAttributes.map(function (item) { return AttributeType.filterSensitiveLog(item); }),
    }))); };
})(AdminUpdateUserAttributesRequest || (AdminUpdateUserAttributesRequest = {}));
export var AdminUpdateUserAttributesResponse;
(function (AdminUpdateUserAttributesResponse) {
    /**
     * @internal
     */
    AdminUpdateUserAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminUpdateUserAttributesResponse || (AdminUpdateUserAttributesResponse = {}));
export var AdminUserGlobalSignOutRequest;
(function (AdminUserGlobalSignOutRequest) {
    /**
     * @internal
     */
    AdminUserGlobalSignOutRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(AdminUserGlobalSignOutRequest || (AdminUserGlobalSignOutRequest = {}));
export var AdminUserGlobalSignOutResponse;
(function (AdminUserGlobalSignOutResponse) {
    /**
     * @internal
     */
    AdminUserGlobalSignOutResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminUserGlobalSignOutResponse || (AdminUserGlobalSignOutResponse = {}));
export var AdvancedSecurityModeType;
(function (AdvancedSecurityModeType) {
    AdvancedSecurityModeType["AUDIT"] = "AUDIT";
    AdvancedSecurityModeType["ENFORCED"] = "ENFORCED";
    AdvancedSecurityModeType["OFF"] = "OFF";
})(AdvancedSecurityModeType || (AdvancedSecurityModeType = {}));
export var AliasAttributeType;
(function (AliasAttributeType) {
    AliasAttributeType["EMAIL"] = "email";
    AliasAttributeType["PHONE_NUMBER"] = "phone_number";
    AliasAttributeType["PREFERRED_USERNAME"] = "preferred_username";
})(AliasAttributeType || (AliasAttributeType = {}));
export var AnalyticsConfigurationType;
(function (AnalyticsConfigurationType) {
    /**
     * @internal
     */
    AnalyticsConfigurationType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnalyticsConfigurationType || (AnalyticsConfigurationType = {}));
export var AssociateSoftwareTokenRequest;
(function (AssociateSoftwareTokenRequest) {
    /**
     * @internal
     */
    AssociateSoftwareTokenRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(AssociateSoftwareTokenRequest || (AssociateSoftwareTokenRequest = {}));
export var AssociateSoftwareTokenResponse;
(function (AssociateSoftwareTokenResponse) {
    /**
     * @internal
     */
    AssociateSoftwareTokenResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SecretCode && { SecretCode: SENSITIVE_STRING }))); };
})(AssociateSoftwareTokenResponse || (AssociateSoftwareTokenResponse = {}));
export var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
export var ChangePasswordRequest;
(function (ChangePasswordRequest) {
    /**
     * @internal
     */
    ChangePasswordRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.PreviousPassword && { PreviousPassword: SENSITIVE_STRING })), (obj.ProposedPassword && { ProposedPassword: SENSITIVE_STRING })), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(ChangePasswordRequest || (ChangePasswordRequest = {}));
export var ChangePasswordResponse;
(function (ChangePasswordResponse) {
    /**
     * @internal
     */
    ChangePasswordResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChangePasswordResponse || (ChangePasswordResponse = {}));
export var DeviceSecretVerifierConfigType;
(function (DeviceSecretVerifierConfigType) {
    /**
     * @internal
     */
    DeviceSecretVerifierConfigType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeviceSecretVerifierConfigType || (DeviceSecretVerifierConfigType = {}));
export var ConfirmDeviceRequest;
(function (ConfirmDeviceRequest) {
    /**
     * @internal
     */
    ConfirmDeviceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(ConfirmDeviceRequest || (ConfirmDeviceRequest = {}));
export var ConfirmDeviceResponse;
(function (ConfirmDeviceResponse) {
    /**
     * @internal
     */
    ConfirmDeviceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfirmDeviceResponse || (ConfirmDeviceResponse = {}));
export var UserContextDataType;
(function (UserContextDataType) {
    /**
     * @internal
     */
    UserContextDataType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserContextDataType || (UserContextDataType = {}));
export var ConfirmForgotPasswordRequest;
(function (ConfirmForgotPasswordRequest) {
    /**
     * @internal
     */
    ConfirmForgotPasswordRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING })), (obj.SecretHash && { SecretHash: SENSITIVE_STRING })), (obj.Username && { Username: SENSITIVE_STRING })), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(ConfirmForgotPasswordRequest || (ConfirmForgotPasswordRequest = {}));
export var ConfirmForgotPasswordResponse;
(function (ConfirmForgotPasswordResponse) {
    /**
     * @internal
     */
    ConfirmForgotPasswordResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfirmForgotPasswordResponse || (ConfirmForgotPasswordResponse = {}));
export var ConfirmSignUpRequest;
(function (ConfirmSignUpRequest) {
    /**
     * @internal
     */
    ConfirmSignUpRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING })), (obj.SecretHash && { SecretHash: SENSITIVE_STRING })), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(ConfirmSignUpRequest || (ConfirmSignUpRequest = {}));
export var ConfirmSignUpResponse;
(function (ConfirmSignUpResponse) {
    /**
     * @internal
     */
    ConfirmSignUpResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConfirmSignUpResponse || (ConfirmSignUpResponse = {}));
export var CreateGroupRequest;
(function (CreateGroupRequest) {
    /**
     * @internal
     */
    CreateGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGroupRequest || (CreateGroupRequest = {}));
export var CreateGroupResponse;
(function (CreateGroupResponse) {
    /**
     * @internal
     */
    CreateGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGroupResponse || (CreateGroupResponse = {}));
export var GroupExistsException;
(function (GroupExistsException) {
    /**
     * @internal
     */
    GroupExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GroupExistsException || (GroupExistsException = {}));
export var IdentityProviderTypeType;
(function (IdentityProviderTypeType) {
    IdentityProviderTypeType["Facebook"] = "Facebook";
    IdentityProviderTypeType["Google"] = "Google";
    IdentityProviderTypeType["LoginWithAmazon"] = "LoginWithAmazon";
    IdentityProviderTypeType["OIDC"] = "OIDC";
    IdentityProviderTypeType["SAML"] = "SAML";
    IdentityProviderTypeType["SignInWithApple"] = "SignInWithApple";
})(IdentityProviderTypeType || (IdentityProviderTypeType = {}));
export var CreateIdentityProviderRequest;
(function (CreateIdentityProviderRequest) {
    /**
     * @internal
     */
    CreateIdentityProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateIdentityProviderRequest || (CreateIdentityProviderRequest = {}));
export var IdentityProviderType;
(function (IdentityProviderType) {
    /**
     * @internal
     */
    IdentityProviderType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdentityProviderType || (IdentityProviderType = {}));
export var CreateIdentityProviderResponse;
(function (CreateIdentityProviderResponse) {
    /**
     * @internal
     */
    CreateIdentityProviderResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateIdentityProviderResponse || (CreateIdentityProviderResponse = {}));
export var DuplicateProviderException;
(function (DuplicateProviderException) {
    /**
     * @internal
     */
    DuplicateProviderException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicateProviderException || (DuplicateProviderException = {}));
export var ResourceServerScopeType;
(function (ResourceServerScopeType) {
    /**
     * @internal
     */
    ResourceServerScopeType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceServerScopeType || (ResourceServerScopeType = {}));
export var CreateResourceServerRequest;
(function (CreateResourceServerRequest) {
    /**
     * @internal
     */
    CreateResourceServerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateResourceServerRequest || (CreateResourceServerRequest = {}));
export var ResourceServerType;
(function (ResourceServerType) {
    /**
     * @internal
     */
    ResourceServerType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceServerType || (ResourceServerType = {}));
export var CreateResourceServerResponse;
(function (CreateResourceServerResponse) {
    /**
     * @internal
     */
    CreateResourceServerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateResourceServerResponse || (CreateResourceServerResponse = {}));
export var CreateUserImportJobRequest;
(function (CreateUserImportJobRequest) {
    /**
     * @internal
     */
    CreateUserImportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserImportJobRequest || (CreateUserImportJobRequest = {}));
export var UserImportJobStatusType;
(function (UserImportJobStatusType) {
    UserImportJobStatusType["Created"] = "Created";
    UserImportJobStatusType["Expired"] = "Expired";
    UserImportJobStatusType["Failed"] = "Failed";
    UserImportJobStatusType["InProgress"] = "InProgress";
    UserImportJobStatusType["Pending"] = "Pending";
    UserImportJobStatusType["Stopped"] = "Stopped";
    UserImportJobStatusType["Stopping"] = "Stopping";
    UserImportJobStatusType["Succeeded"] = "Succeeded";
})(UserImportJobStatusType || (UserImportJobStatusType = {}));
export var UserImportJobType;
(function (UserImportJobType) {
    /**
     * @internal
     */
    UserImportJobType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserImportJobType || (UserImportJobType = {}));
export var CreateUserImportJobResponse;
(function (CreateUserImportJobResponse) {
    /**
     * @internal
     */
    CreateUserImportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserImportJobResponse || (CreateUserImportJobResponse = {}));
export var VerifiedAttributeType;
(function (VerifiedAttributeType) {
    VerifiedAttributeType["EMAIL"] = "email";
    VerifiedAttributeType["PHONE_NUMBER"] = "phone_number";
})(VerifiedAttributeType || (VerifiedAttributeType = {}));
export var DeviceConfigurationType;
(function (DeviceConfigurationType) {
    /**
     * @internal
     */
    DeviceConfigurationType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeviceConfigurationType || (DeviceConfigurationType = {}));
export var EmailSendingAccountType;
(function (EmailSendingAccountType) {
    EmailSendingAccountType["COGNITO_DEFAULT"] = "COGNITO_DEFAULT";
    EmailSendingAccountType["DEVELOPER"] = "DEVELOPER";
})(EmailSendingAccountType || (EmailSendingAccountType = {}));
export var EmailConfigurationType;
(function (EmailConfigurationType) {
    /**
     * @internal
     */
    EmailConfigurationType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmailConfigurationType || (EmailConfigurationType = {}));
export var CustomEmailSenderLambdaVersionType;
(function (CustomEmailSenderLambdaVersionType) {
    CustomEmailSenderLambdaVersionType["V1_0"] = "V1_0";
})(CustomEmailSenderLambdaVersionType || (CustomEmailSenderLambdaVersionType = {}));
export var CustomEmailLambdaVersionConfigType;
(function (CustomEmailLambdaVersionConfigType) {
    /**
     * @internal
     */
    CustomEmailLambdaVersionConfigType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomEmailLambdaVersionConfigType || (CustomEmailLambdaVersionConfigType = {}));
export var CustomSMSSenderLambdaVersionType;
(function (CustomSMSSenderLambdaVersionType) {
    CustomSMSSenderLambdaVersionType["V1_0"] = "V1_0";
})(CustomSMSSenderLambdaVersionType || (CustomSMSSenderLambdaVersionType = {}));
export var CustomSMSLambdaVersionConfigType;
(function (CustomSMSLambdaVersionConfigType) {
    /**
     * @internal
     */
    CustomSMSLambdaVersionConfigType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomSMSLambdaVersionConfigType || (CustomSMSLambdaVersionConfigType = {}));
export var LambdaConfigType;
(function (LambdaConfigType) {
    /**
     * @internal
     */
    LambdaConfigType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LambdaConfigType || (LambdaConfigType = {}));
export var UserPoolMfaType;
(function (UserPoolMfaType) {
    UserPoolMfaType["OFF"] = "OFF";
    UserPoolMfaType["ON"] = "ON";
    UserPoolMfaType["OPTIONAL"] = "OPTIONAL";
})(UserPoolMfaType || (UserPoolMfaType = {}));
export var PasswordPolicyType;
(function (PasswordPolicyType) {
    /**
     * @internal
     */
    PasswordPolicyType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PasswordPolicyType || (PasswordPolicyType = {}));
export var UserPoolPolicyType;
(function (UserPoolPolicyType) {
    /**
     * @internal
     */
    UserPoolPolicyType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserPoolPolicyType || (UserPoolPolicyType = {}));
export var SmsConfigurationType;
(function (SmsConfigurationType) {
    /**
     * @internal
     */
    SmsConfigurationType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SmsConfigurationType || (SmsConfigurationType = {}));
export var UsernameAttributeType;
(function (UsernameAttributeType) {
    UsernameAttributeType["EMAIL"] = "email";
    UsernameAttributeType["PHONE_NUMBER"] = "phone_number";
})(UsernameAttributeType || (UsernameAttributeType = {}));
export var UsernameConfigurationType;
(function (UsernameConfigurationType) {
    /**
     * @internal
     */
    UsernameConfigurationType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UsernameConfigurationType || (UsernameConfigurationType = {}));
export var UserPoolAddOnsType;
(function (UserPoolAddOnsType) {
    /**
     * @internal
     */
    UserPoolAddOnsType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserPoolAddOnsType || (UserPoolAddOnsType = {}));
export var DefaultEmailOptionType;
(function (DefaultEmailOptionType) {
    DefaultEmailOptionType["CONFIRM_WITH_CODE"] = "CONFIRM_WITH_CODE";
    DefaultEmailOptionType["CONFIRM_WITH_LINK"] = "CONFIRM_WITH_LINK";
})(DefaultEmailOptionType || (DefaultEmailOptionType = {}));
export var VerificationMessageTemplateType;
(function (VerificationMessageTemplateType) {
    /**
     * @internal
     */
    VerificationMessageTemplateType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VerificationMessageTemplateType || (VerificationMessageTemplateType = {}));
export var CreateUserPoolRequest;
(function (CreateUserPoolRequest) {
    /**
     * @internal
     */
    CreateUserPoolRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserPoolRequest || (CreateUserPoolRequest = {}));
export var StatusType;
(function (StatusType) {
    StatusType["Disabled"] = "Disabled";
    StatusType["Enabled"] = "Enabled";
})(StatusType || (StatusType = {}));
export var UserPoolType;
(function (UserPoolType) {
    /**
     * @internal
     */
    UserPoolType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserPoolType || (UserPoolType = {}));
export var CreateUserPoolResponse;
(function (CreateUserPoolResponse) {
    /**
     * @internal
     */
    CreateUserPoolResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserPoolResponse || (CreateUserPoolResponse = {}));
export var UserPoolTaggingException;
(function (UserPoolTaggingException) {
    /**
     * @internal
     */
    UserPoolTaggingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserPoolTaggingException || (UserPoolTaggingException = {}));
export var OAuthFlowType;
(function (OAuthFlowType) {
    OAuthFlowType["client_credentials"] = "client_credentials";
    OAuthFlowType["code"] = "code";
    OAuthFlowType["implicit"] = "implicit";
})(OAuthFlowType || (OAuthFlowType = {}));
export var ExplicitAuthFlowsType;
(function (ExplicitAuthFlowsType) {
    ExplicitAuthFlowsType["ADMIN_NO_SRP_AUTH"] = "ADMIN_NO_SRP_AUTH";
    ExplicitAuthFlowsType["ALLOW_ADMIN_USER_PASSWORD_AUTH"] = "ALLOW_ADMIN_USER_PASSWORD_AUTH";
    ExplicitAuthFlowsType["ALLOW_CUSTOM_AUTH"] = "ALLOW_CUSTOM_AUTH";
    ExplicitAuthFlowsType["ALLOW_REFRESH_TOKEN_AUTH"] = "ALLOW_REFRESH_TOKEN_AUTH";
    ExplicitAuthFlowsType["ALLOW_USER_PASSWORD_AUTH"] = "ALLOW_USER_PASSWORD_AUTH";
    ExplicitAuthFlowsType["ALLOW_USER_SRP_AUTH"] = "ALLOW_USER_SRP_AUTH";
    ExplicitAuthFlowsType["CUSTOM_AUTH_FLOW_ONLY"] = "CUSTOM_AUTH_FLOW_ONLY";
    ExplicitAuthFlowsType["USER_PASSWORD_AUTH"] = "USER_PASSWORD_AUTH";
})(ExplicitAuthFlowsType || (ExplicitAuthFlowsType = {}));
export var PreventUserExistenceErrorTypes;
(function (PreventUserExistenceErrorTypes) {
    PreventUserExistenceErrorTypes["ENABLED"] = "ENABLED";
    PreventUserExistenceErrorTypes["LEGACY"] = "LEGACY";
})(PreventUserExistenceErrorTypes || (PreventUserExistenceErrorTypes = {}));
export var TimeUnitsType;
(function (TimeUnitsType) {
    TimeUnitsType["DAYS"] = "days";
    TimeUnitsType["HOURS"] = "hours";
    TimeUnitsType["MINUTES"] = "minutes";
    TimeUnitsType["SECONDS"] = "seconds";
})(TimeUnitsType || (TimeUnitsType = {}));
export var TokenValidityUnitsType;
(function (TokenValidityUnitsType) {
    /**
     * @internal
     */
    TokenValidityUnitsType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TokenValidityUnitsType || (TokenValidityUnitsType = {}));
export var CreateUserPoolClientRequest;
(function (CreateUserPoolClientRequest) {
    /**
     * @internal
     */
    CreateUserPoolClientRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserPoolClientRequest || (CreateUserPoolClientRequest = {}));
export var UserPoolClientType;
(function (UserPoolClientType) {
    /**
     * @internal
     */
    UserPoolClientType.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING })), (obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }))); };
})(UserPoolClientType || (UserPoolClientType = {}));
export var CreateUserPoolClientResponse;
(function (CreateUserPoolClientResponse) {
    /**
     * @internal
     */
    CreateUserPoolClientResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.UserPoolClient && { UserPoolClient: UserPoolClientType.filterSensitiveLog(obj.UserPoolClient) }))); };
})(CreateUserPoolClientResponse || (CreateUserPoolClientResponse = {}));
export var InvalidOAuthFlowException;
(function (InvalidOAuthFlowException) {
    /**
     * @internal
     */
    InvalidOAuthFlowException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidOAuthFlowException || (InvalidOAuthFlowException = {}));
export var ScopeDoesNotExistException;
(function (ScopeDoesNotExistException) {
    /**
     * @internal
     */
    ScopeDoesNotExistException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScopeDoesNotExistException || (ScopeDoesNotExistException = {}));
export var CustomDomainConfigType;
(function (CustomDomainConfigType) {
    /**
     * @internal
     */
    CustomDomainConfigType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomDomainConfigType || (CustomDomainConfigType = {}));
export var CreateUserPoolDomainRequest;
(function (CreateUserPoolDomainRequest) {
    /**
     * @internal
     */
    CreateUserPoolDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserPoolDomainRequest || (CreateUserPoolDomainRequest = {}));
export var CreateUserPoolDomainResponse;
(function (CreateUserPoolDomainResponse) {
    /**
     * @internal
     */
    CreateUserPoolDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserPoolDomainResponse || (CreateUserPoolDomainResponse = {}));
export var DeleteGroupRequest;
(function (DeleteGroupRequest) {
    /**
     * @internal
     */
    DeleteGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGroupRequest || (DeleteGroupRequest = {}));
export var DeleteIdentityProviderRequest;
(function (DeleteIdentityProviderRequest) {
    /**
     * @internal
     */
    DeleteIdentityProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteIdentityProviderRequest || (DeleteIdentityProviderRequest = {}));
export var UnsupportedIdentityProviderException;
(function (UnsupportedIdentityProviderException) {
    /**
     * @internal
     */
    UnsupportedIdentityProviderException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedIdentityProviderException || (UnsupportedIdentityProviderException = {}));
export var DeleteResourceServerRequest;
(function (DeleteResourceServerRequest) {
    /**
     * @internal
     */
    DeleteResourceServerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteResourceServerRequest || (DeleteResourceServerRequest = {}));
export var DeleteUserRequest;
(function (DeleteUserRequest) {
    /**
     * @internal
     */
    DeleteUserRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(DeleteUserRequest || (DeleteUserRequest = {}));
export var DeleteUserAttributesRequest;
(function (DeleteUserAttributesRequest) {
    /**
     * @internal
     */
    DeleteUserAttributesRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(DeleteUserAttributesRequest || (DeleteUserAttributesRequest = {}));
export var DeleteUserAttributesResponse;
(function (DeleteUserAttributesResponse) {
    /**
     * @internal
     */
    DeleteUserAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUserAttributesResponse || (DeleteUserAttributesResponse = {}));
export var DeleteUserPoolRequest;
(function (DeleteUserPoolRequest) {
    /**
     * @internal
     */
    DeleteUserPoolRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUserPoolRequest || (DeleteUserPoolRequest = {}));
export var DeleteUserPoolClientRequest;
(function (DeleteUserPoolClientRequest) {
    /**
     * @internal
     */
    DeleteUserPoolClientRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING }))); };
})(DeleteUserPoolClientRequest || (DeleteUserPoolClientRequest = {}));
export var DeleteUserPoolDomainRequest;
(function (DeleteUserPoolDomainRequest) {
    /**
     * @internal
     */
    DeleteUserPoolDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUserPoolDomainRequest || (DeleteUserPoolDomainRequest = {}));
export var DeleteUserPoolDomainResponse;
(function (DeleteUserPoolDomainResponse) {
    /**
     * @internal
     */
    DeleteUserPoolDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUserPoolDomainResponse || (DeleteUserPoolDomainResponse = {}));
export var DescribeIdentityProviderRequest;
(function (DescribeIdentityProviderRequest) {
    /**
     * @internal
     */
    DescribeIdentityProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeIdentityProviderRequest || (DescribeIdentityProviderRequest = {}));
export var DescribeIdentityProviderResponse;
(function (DescribeIdentityProviderResponse) {
    /**
     * @internal
     */
    DescribeIdentityProviderResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeIdentityProviderResponse || (DescribeIdentityProviderResponse = {}));
export var DescribeResourceServerRequest;
(function (DescribeResourceServerRequest) {
    /**
     * @internal
     */
    DescribeResourceServerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeResourceServerRequest || (DescribeResourceServerRequest = {}));
export var DescribeResourceServerResponse;
(function (DescribeResourceServerResponse) {
    /**
     * @internal
     */
    DescribeResourceServerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeResourceServerResponse || (DescribeResourceServerResponse = {}));
export var DescribeRiskConfigurationRequest;
(function (DescribeRiskConfigurationRequest) {
    /**
     * @internal
     */
    DescribeRiskConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING }))); };
})(DescribeRiskConfigurationRequest || (DescribeRiskConfigurationRequest = {}));
export var CompromisedCredentialsEventActionType;
(function (CompromisedCredentialsEventActionType) {
    CompromisedCredentialsEventActionType["BLOCK"] = "BLOCK";
    CompromisedCredentialsEventActionType["NO_ACTION"] = "NO_ACTION";
})(CompromisedCredentialsEventActionType || (CompromisedCredentialsEventActionType = {}));
export var CompromisedCredentialsActionsType;
(function (CompromisedCredentialsActionsType) {
    /**
     * @internal
     */
    CompromisedCredentialsActionsType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompromisedCredentialsActionsType || (CompromisedCredentialsActionsType = {}));
export var EventFilterType;
(function (EventFilterType) {
    EventFilterType["PASSWORD_CHANGE"] = "PASSWORD_CHANGE";
    EventFilterType["SIGN_IN"] = "SIGN_IN";
    EventFilterType["SIGN_UP"] = "SIGN_UP";
})(EventFilterType || (EventFilterType = {}));
export var CompromisedCredentialsRiskConfigurationType;
(function (CompromisedCredentialsRiskConfigurationType) {
    /**
     * @internal
     */
    CompromisedCredentialsRiskConfigurationType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompromisedCredentialsRiskConfigurationType || (CompromisedCredentialsRiskConfigurationType = {}));
export var RiskExceptionConfigurationType;
(function (RiskExceptionConfigurationType) {
    /**
     * @internal
     */
    RiskExceptionConfigurationType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RiskExceptionConfigurationType || (RiskExceptionConfigurationType = {}));
export var RiskConfigurationType;
(function (RiskConfigurationType) {
    /**
     * @internal
     */
    RiskConfigurationType.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING }))); };
})(RiskConfigurationType || (RiskConfigurationType = {}));
export var DescribeRiskConfigurationResponse;
(function (DescribeRiskConfigurationResponse) {
    /**
     * @internal
     */
    DescribeRiskConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.RiskConfiguration && {
        RiskConfiguration: RiskConfigurationType.filterSensitiveLog(obj.RiskConfiguration),
    }))); };
})(DescribeRiskConfigurationResponse || (DescribeRiskConfigurationResponse = {}));
export var DescribeUserImportJobRequest;
(function (DescribeUserImportJobRequest) {
    /**
     * @internal
     */
    DescribeUserImportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserImportJobRequest || (DescribeUserImportJobRequest = {}));
export var DescribeUserImportJobResponse;
(function (DescribeUserImportJobResponse) {
    /**
     * @internal
     */
    DescribeUserImportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserImportJobResponse || (DescribeUserImportJobResponse = {}));
export var DescribeUserPoolRequest;
(function (DescribeUserPoolRequest) {
    /**
     * @internal
     */
    DescribeUserPoolRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserPoolRequest || (DescribeUserPoolRequest = {}));
export var DescribeUserPoolResponse;
(function (DescribeUserPoolResponse) {
    /**
     * @internal
     */
    DescribeUserPoolResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserPoolResponse || (DescribeUserPoolResponse = {}));
export var DescribeUserPoolClientRequest;
(function (DescribeUserPoolClientRequest) {
    /**
     * @internal
     */
    DescribeUserPoolClientRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING }))); };
})(DescribeUserPoolClientRequest || (DescribeUserPoolClientRequest = {}));
export var DescribeUserPoolClientResponse;
(function (DescribeUserPoolClientResponse) {
    /**
     * @internal
     */
    DescribeUserPoolClientResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.UserPoolClient && { UserPoolClient: UserPoolClientType.filterSensitiveLog(obj.UserPoolClient) }))); };
})(DescribeUserPoolClientResponse || (DescribeUserPoolClientResponse = {}));
export var DescribeUserPoolDomainRequest;
(function (DescribeUserPoolDomainRequest) {
    /**
     * @internal
     */
    DescribeUserPoolDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserPoolDomainRequest || (DescribeUserPoolDomainRequest = {}));
export var DomainStatusType;
(function (DomainStatusType) {
    DomainStatusType["ACTIVE"] = "ACTIVE";
    DomainStatusType["CREATING"] = "CREATING";
    DomainStatusType["DELETING"] = "DELETING";
    DomainStatusType["FAILED"] = "FAILED";
    DomainStatusType["UPDATING"] = "UPDATING";
})(DomainStatusType || (DomainStatusType = {}));
export var DomainDescriptionType;
(function (DomainDescriptionType) {
    /**
     * @internal
     */
    DomainDescriptionType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainDescriptionType || (DomainDescriptionType = {}));
export var DescribeUserPoolDomainResponse;
(function (DescribeUserPoolDomainResponse) {
    /**
     * @internal
     */
    DescribeUserPoolDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserPoolDomainResponse || (DescribeUserPoolDomainResponse = {}));
export var ForgetDeviceRequest;
(function (ForgetDeviceRequest) {
    /**
     * @internal
     */
    ForgetDeviceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(ForgetDeviceRequest || (ForgetDeviceRequest = {}));
export var ForgotPasswordRequest;
(function (ForgotPasswordRequest) {
    /**
     * @internal
     */
    ForgotPasswordRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING })), (obj.SecretHash && { SecretHash: SENSITIVE_STRING })), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(ForgotPasswordRequest || (ForgotPasswordRequest = {}));
export var CodeDeliveryDetailsType;
(function (CodeDeliveryDetailsType) {
    /**
     * @internal
     */
    CodeDeliveryDetailsType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeDeliveryDetailsType || (CodeDeliveryDetailsType = {}));
export var ForgotPasswordResponse;
(function (ForgotPasswordResponse) {
    /**
     * @internal
     */
    ForgotPasswordResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ForgotPasswordResponse || (ForgotPasswordResponse = {}));
export var GetCSVHeaderRequest;
(function (GetCSVHeaderRequest) {
    /**
     * @internal
     */
    GetCSVHeaderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCSVHeaderRequest || (GetCSVHeaderRequest = {}));
export var GetCSVHeaderResponse;
(function (GetCSVHeaderResponse) {
    /**
     * @internal
     */
    GetCSVHeaderResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCSVHeaderResponse || (GetCSVHeaderResponse = {}));
export var GetDeviceRequest;
(function (GetDeviceRequest) {
    /**
     * @internal
     */
    GetDeviceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(GetDeviceRequest || (GetDeviceRequest = {}));
export var GetDeviceResponse;
(function (GetDeviceResponse) {
    /**
     * @internal
     */
    GetDeviceResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Device && { Device: DeviceType.filterSensitiveLog(obj.Device) }))); };
})(GetDeviceResponse || (GetDeviceResponse = {}));
export var GetGroupRequest;
(function (GetGroupRequest) {
    /**
     * @internal
     */
    GetGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGroupRequest || (GetGroupRequest = {}));
export var GetGroupResponse;
(function (GetGroupResponse) {
    /**
     * @internal
     */
    GetGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGroupResponse || (GetGroupResponse = {}));
export var GetIdentityProviderByIdentifierRequest;
(function (GetIdentityProviderByIdentifierRequest) {
    /**
     * @internal
     */
    GetIdentityProviderByIdentifierRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIdentityProviderByIdentifierRequest || (GetIdentityProviderByIdentifierRequest = {}));
export var GetIdentityProviderByIdentifierResponse;
(function (GetIdentityProviderByIdentifierResponse) {
    /**
     * @internal
     */
    GetIdentityProviderByIdentifierResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIdentityProviderByIdentifierResponse || (GetIdentityProviderByIdentifierResponse = {}));
export var GetSigningCertificateRequest;
(function (GetSigningCertificateRequest) {
    /**
     * @internal
     */
    GetSigningCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSigningCertificateRequest || (GetSigningCertificateRequest = {}));
export var GetSigningCertificateResponse;
(function (GetSigningCertificateResponse) {
    /**
     * @internal
     */
    GetSigningCertificateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSigningCertificateResponse || (GetSigningCertificateResponse = {}));
export var GetUICustomizationRequest;
(function (GetUICustomizationRequest) {
    /**
     * @internal
     */
    GetUICustomizationRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING }))); };
})(GetUICustomizationRequest || (GetUICustomizationRequest = {}));
export var UICustomizationType;
(function (UICustomizationType) {
    /**
     * @internal
     */
    UICustomizationType.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING }))); };
})(UICustomizationType || (UICustomizationType = {}));
export var GetUICustomizationResponse;
(function (GetUICustomizationResponse) {
    /**
     * @internal
     */
    GetUICustomizationResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.UICustomization && { UICustomization: UICustomizationType.filterSensitiveLog(obj.UICustomization) }))); };
})(GetUICustomizationResponse || (GetUICustomizationResponse = {}));
export var GetUserRequest;
(function (GetUserRequest) {
    /**
     * @internal
     */
    GetUserRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(GetUserRequest || (GetUserRequest = {}));
export var GetUserResponse;
(function (GetUserResponse) {
    /**
     * @internal
     */
    GetUserResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING })), (obj.UserAttributes && {
        UserAttributes: obj.UserAttributes.map(function (item) { return AttributeType.filterSensitiveLog(item); }),
    }))); };
})(GetUserResponse || (GetUserResponse = {}));
export var GetUserAttributeVerificationCodeRequest;
(function (GetUserAttributeVerificationCodeRequest) {
    /**
     * @internal
     */
    GetUserAttributeVerificationCodeRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(GetUserAttributeVerificationCodeRequest || (GetUserAttributeVerificationCodeRequest = {}));
export var GetUserAttributeVerificationCodeResponse;
(function (GetUserAttributeVerificationCodeResponse) {
    /**
     * @internal
     */
    GetUserAttributeVerificationCodeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUserAttributeVerificationCodeResponse || (GetUserAttributeVerificationCodeResponse = {}));
export var GetUserPoolMfaConfigRequest;
(function (GetUserPoolMfaConfigRequest) {
    /**
     * @internal
     */
    GetUserPoolMfaConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUserPoolMfaConfigRequest || (GetUserPoolMfaConfigRequest = {}));
export var SmsMfaConfigType;
(function (SmsMfaConfigType) {
    /**
     * @internal
     */
    SmsMfaConfigType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SmsMfaConfigType || (SmsMfaConfigType = {}));
export var SoftwareTokenMfaConfigType;
(function (SoftwareTokenMfaConfigType) {
    /**
     * @internal
     */
    SoftwareTokenMfaConfigType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SoftwareTokenMfaConfigType || (SoftwareTokenMfaConfigType = {}));
export var GetUserPoolMfaConfigResponse;
(function (GetUserPoolMfaConfigResponse) {
    /**
     * @internal
     */
    GetUserPoolMfaConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUserPoolMfaConfigResponse || (GetUserPoolMfaConfigResponse = {}));
export var GlobalSignOutRequest;
(function (GlobalSignOutRequest) {
    /**
     * @internal
     */
    GlobalSignOutRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(GlobalSignOutRequest || (GlobalSignOutRequest = {}));
export var GlobalSignOutResponse;
(function (GlobalSignOutResponse) {
    /**
     * @internal
     */
    GlobalSignOutResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GlobalSignOutResponse || (GlobalSignOutResponse = {}));
export var InitiateAuthRequest;
(function (InitiateAuthRequest) {
    /**
     * @internal
     */
    InitiateAuthRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.AuthParameters && { AuthParameters: SENSITIVE_STRING })), (obj.ClientId && { ClientId: SENSITIVE_STRING }))); };
})(InitiateAuthRequest || (InitiateAuthRequest = {}));
export var InitiateAuthResponse;
(function (InitiateAuthResponse) {
    /**
     * @internal
     */
    InitiateAuthResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationResult && {
        AuthenticationResult: AuthenticationResultType.filterSensitiveLog(obj.AuthenticationResult),
    }))); };
})(InitiateAuthResponse || (InitiateAuthResponse = {}));
export var ListDevicesRequest;
(function (ListDevicesRequest) {
    /**
     * @internal
     */
    ListDevicesRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(ListDevicesRequest || (ListDevicesRequest = {}));
export var ListDevicesResponse;
(function (ListDevicesResponse) {
    /**
     * @internal
     */
    ListDevicesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDevicesResponse || (ListDevicesResponse = {}));
export var ListGroupsRequest;
(function (ListGroupsRequest) {
    /**
     * @internal
     */
    ListGroupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGroupsRequest || (ListGroupsRequest = {}));
export var ListGroupsResponse;
(function (ListGroupsResponse) {
    /**
     * @internal
     */
    ListGroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGroupsResponse || (ListGroupsResponse = {}));
export var ListIdentityProvidersRequest;
(function (ListIdentityProvidersRequest) {
    /**
     * @internal
     */
    ListIdentityProvidersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIdentityProvidersRequest || (ListIdentityProvidersRequest = {}));
export var ProviderDescription;
(function (ProviderDescription) {
    /**
     * @internal
     */
    ProviderDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProviderDescription || (ProviderDescription = {}));
export var ListIdentityProvidersResponse;
(function (ListIdentityProvidersResponse) {
    /**
     * @internal
     */
    ListIdentityProvidersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIdentityProvidersResponse || (ListIdentityProvidersResponse = {}));
export var ListResourceServersRequest;
(function (ListResourceServersRequest) {
    /**
     * @internal
     */
    ListResourceServersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResourceServersRequest || (ListResourceServersRequest = {}));
export var ListResourceServersResponse;
(function (ListResourceServersResponse) {
    /**
     * @internal
     */
    ListResourceServersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResourceServersResponse || (ListResourceServersResponse = {}));
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
export var ListUserImportJobsRequest;
(function (ListUserImportJobsRequest) {
    /**
     * @internal
     */
    ListUserImportJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUserImportJobsRequest || (ListUserImportJobsRequest = {}));
export var ListUserImportJobsResponse;
(function (ListUserImportJobsResponse) {
    /**
     * @internal
     */
    ListUserImportJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUserImportJobsResponse || (ListUserImportJobsResponse = {}));
export var ListUserPoolClientsRequest;
(function (ListUserPoolClientsRequest) {
    /**
     * @internal
     */
    ListUserPoolClientsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUserPoolClientsRequest || (ListUserPoolClientsRequest = {}));
export var UserPoolClientDescription;
(function (UserPoolClientDescription) {
    /**
     * @internal
     */
    UserPoolClientDescription.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING }))); };
})(UserPoolClientDescription || (UserPoolClientDescription = {}));
export var ListUserPoolClientsResponse;
(function (ListUserPoolClientsResponse) {
    /**
     * @internal
     */
    ListUserPoolClientsResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.UserPoolClients && {
        UserPoolClients: obj.UserPoolClients.map(function (item) { return UserPoolClientDescription.filterSensitiveLog(item); }),
    }))); };
})(ListUserPoolClientsResponse || (ListUserPoolClientsResponse = {}));
export var ListUserPoolsRequest;
(function (ListUserPoolsRequest) {
    /**
     * @internal
     */
    ListUserPoolsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUserPoolsRequest || (ListUserPoolsRequest = {}));
export var UserPoolDescriptionType;
(function (UserPoolDescriptionType) {
    /**
     * @internal
     */
    UserPoolDescriptionType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserPoolDescriptionType || (UserPoolDescriptionType = {}));
export var ListUserPoolsResponse;
(function (ListUserPoolsResponse) {
    /**
     * @internal
     */
    ListUserPoolsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUserPoolsResponse || (ListUserPoolsResponse = {}));
export var ListUsersRequest;
(function (ListUsersRequest) {
    /**
     * @internal
     */
    ListUsersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUsersRequest || (ListUsersRequest = {}));
export var ListUsersResponse;
(function (ListUsersResponse) {
    /**
     * @internal
     */
    ListUsersResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Users && { Users: obj.Users.map(function (item) { return UserType.filterSensitiveLog(item); }) }))); };
})(ListUsersResponse || (ListUsersResponse = {}));
export var ListUsersInGroupRequest;
(function (ListUsersInGroupRequest) {
    /**
     * @internal
     */
    ListUsersInGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUsersInGroupRequest || (ListUsersInGroupRequest = {}));
export var ListUsersInGroupResponse;
(function (ListUsersInGroupResponse) {
    /**
     * @internal
     */
    ListUsersInGroupResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Users && { Users: obj.Users.map(function (item) { return UserType.filterSensitiveLog(item); }) }))); };
})(ListUsersInGroupResponse || (ListUsersInGroupResponse = {}));
export var ResendConfirmationCodeRequest;
(function (ResendConfirmationCodeRequest) {
    /**
     * @internal
     */
    ResendConfirmationCodeRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING })), (obj.SecretHash && { SecretHash: SENSITIVE_STRING })), (obj.Username && { Username: SENSITIVE_STRING }))); };
})(ResendConfirmationCodeRequest || (ResendConfirmationCodeRequest = {}));
export var ResendConfirmationCodeResponse;
(function (ResendConfirmationCodeResponse) {
    /**
     * @internal
     */
    ResendConfirmationCodeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResendConfirmationCodeResponse || (ResendConfirmationCodeResponse = {}));
export var RespondToAuthChallengeRequest;
(function (RespondToAuthChallengeRequest) {
    /**
     * @internal
     */
    RespondToAuthChallengeRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING }))); };
})(RespondToAuthChallengeRequest || (RespondToAuthChallengeRequest = {}));
export var RespondToAuthChallengeResponse;
(function (RespondToAuthChallengeResponse) {
    /**
     * @internal
     */
    RespondToAuthChallengeResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationResult && {
        AuthenticationResult: AuthenticationResultType.filterSensitiveLog(obj.AuthenticationResult),
    }))); };
})(RespondToAuthChallengeResponse || (RespondToAuthChallengeResponse = {}));
export var SetRiskConfigurationRequest;
(function (SetRiskConfigurationRequest) {
    /**
     * @internal
     */
    SetRiskConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING }))); };
})(SetRiskConfigurationRequest || (SetRiskConfigurationRequest = {}));
export var SetRiskConfigurationResponse;
(function (SetRiskConfigurationResponse) {
    /**
     * @internal
     */
    SetRiskConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.RiskConfiguration && {
        RiskConfiguration: RiskConfigurationType.filterSensitiveLog(obj.RiskConfiguration),
    }))); };
})(SetRiskConfigurationResponse || (SetRiskConfigurationResponse = {}));
export var SetUICustomizationRequest;
(function (SetUICustomizationRequest) {
    /**
     * @internal
     */
    SetUICustomizationRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING }))); };
})(SetUICustomizationRequest || (SetUICustomizationRequest = {}));
export var SetUICustomizationResponse;
(function (SetUICustomizationResponse) {
    /**
     * @internal
     */
    SetUICustomizationResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.UICustomization && { UICustomization: UICustomizationType.filterSensitiveLog(obj.UICustomization) }))); };
})(SetUICustomizationResponse || (SetUICustomizationResponse = {}));
export var SetUserMFAPreferenceRequest;
(function (SetUserMFAPreferenceRequest) {
    /**
     * @internal
     */
    SetUserMFAPreferenceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(SetUserMFAPreferenceRequest || (SetUserMFAPreferenceRequest = {}));
export var SetUserMFAPreferenceResponse;
(function (SetUserMFAPreferenceResponse) {
    /**
     * @internal
     */
    SetUserMFAPreferenceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetUserMFAPreferenceResponse || (SetUserMFAPreferenceResponse = {}));
export var SetUserPoolMfaConfigRequest;
(function (SetUserPoolMfaConfigRequest) {
    /**
     * @internal
     */
    SetUserPoolMfaConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetUserPoolMfaConfigRequest || (SetUserPoolMfaConfigRequest = {}));
export var SetUserPoolMfaConfigResponse;
(function (SetUserPoolMfaConfigResponse) {
    /**
     * @internal
     */
    SetUserPoolMfaConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetUserPoolMfaConfigResponse || (SetUserPoolMfaConfigResponse = {}));
export var SetUserSettingsRequest;
(function (SetUserSettingsRequest) {
    /**
     * @internal
     */
    SetUserSettingsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(SetUserSettingsRequest || (SetUserSettingsRequest = {}));
export var SetUserSettingsResponse;
(function (SetUserSettingsResponse) {
    /**
     * @internal
     */
    SetUserSettingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetUserSettingsResponse || (SetUserSettingsResponse = {}));
export var SignUpRequest;
(function (SignUpRequest) {
    /**
     * @internal
     */
    SignUpRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING })), (obj.SecretHash && { SecretHash: SENSITIVE_STRING })), (obj.Username && { Username: SENSITIVE_STRING })), (obj.Password && { Password: SENSITIVE_STRING })), (obj.UserAttributes && {
        UserAttributes: obj.UserAttributes.map(function (item) { return AttributeType.filterSensitiveLog(item); }),
    })), (obj.ValidationData && {
        ValidationData: obj.ValidationData.map(function (item) { return AttributeType.filterSensitiveLog(item); }),
    }))); };
})(SignUpRequest || (SignUpRequest = {}));
export var SignUpResponse;
(function (SignUpResponse) {
    /**
     * @internal
     */
    SignUpResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SignUpResponse || (SignUpResponse = {}));
export var StartUserImportJobRequest;
(function (StartUserImportJobRequest) {
    /**
     * @internal
     */
    StartUserImportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartUserImportJobRequest || (StartUserImportJobRequest = {}));
export var StartUserImportJobResponse;
(function (StartUserImportJobResponse) {
    /**
     * @internal
     */
    StartUserImportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartUserImportJobResponse || (StartUserImportJobResponse = {}));
export var StopUserImportJobRequest;
(function (StopUserImportJobRequest) {
    /**
     * @internal
     */
    StopUserImportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopUserImportJobRequest || (StopUserImportJobRequest = {}));
export var StopUserImportJobResponse;
(function (StopUserImportJobResponse) {
    /**
     * @internal
     */
    StopUserImportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopUserImportJobResponse || (StopUserImportJobResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
//# sourceMappingURL=models_0.js.map