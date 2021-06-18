import { __assign } from "tslib";
export var AdditionalConstraintsElement;
(function (AdditionalConstraintsElement) {
  AdditionalConstraintsElement["REQUIRE_DIGIT"] = "REQUIRE_DIGIT";
  AdditionalConstraintsElement["REQUIRE_LOWERCASE"] = "REQUIRE_LOWERCASE";
  AdditionalConstraintsElement["REQUIRE_SYMBOL"] = "REQUIRE_SYMBOL";
  AdditionalConstraintsElement["REQUIRE_UPPERCASE"] = "REQUIRE_UPPERCASE";
})(AdditionalConstraintsElement || (AdditionalConstraintsElement = {}));
export var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BadRequestException || (BadRequestException = {}));
export var CloneBackendRequest;
(function (CloneBackendRequest) {
  /**
   * @internal
   */
  CloneBackendRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CloneBackendRequest || (CloneBackendRequest = {}));
export var CloneBackendResponse;
(function (CloneBackendResponse) {
  /**
   * @internal
   */
  CloneBackendResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CloneBackendResponse || (CloneBackendResponse = {}));
export var GatewayTimeoutException;
(function (GatewayTimeoutException) {
  /**
   * @internal
   */
  GatewayTimeoutException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GatewayTimeoutException || (GatewayTimeoutException = {}));
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
export var ResourceConfig;
(function (ResourceConfig) {
  /**
   * @internal
   */
  ResourceConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceConfig || (ResourceConfig = {}));
export var CreateBackendRequest;
(function (CreateBackendRequest) {
  /**
   * @internal
   */
  CreateBackendRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendRequest || (CreateBackendRequest = {}));
export var CreateBackendResponse;
(function (CreateBackendResponse) {
  /**
   * @internal
   */
  CreateBackendResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendResponse || (CreateBackendResponse = {}));
export var Mode;
(function (Mode) {
  Mode["AMAZON_COGNITO_USER_POOLS"] = "AMAZON_COGNITO_USER_POOLS";
  Mode["API_KEY"] = "API_KEY";
  Mode["AWS_IAM"] = "AWS_IAM";
  Mode["OPENID_CONNECT"] = "OPENID_CONNECT";
})(Mode || (Mode = {}));
export var BackendAPIAppSyncAuthSettings;
(function (BackendAPIAppSyncAuthSettings) {
  /**
   * @internal
   */
  BackendAPIAppSyncAuthSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BackendAPIAppSyncAuthSettings || (BackendAPIAppSyncAuthSettings = {}));
export var BackendAPIAuthType;
(function (BackendAPIAuthType) {
  /**
   * @internal
   */
  BackendAPIAuthType.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BackendAPIAuthType || (BackendAPIAuthType = {}));
export var ResolutionStrategy;
(function (ResolutionStrategy) {
  ResolutionStrategy["AUTOMERGE"] = "AUTOMERGE";
  ResolutionStrategy["LAMBDA"] = "LAMBDA";
  ResolutionStrategy["NONE"] = "NONE";
  ResolutionStrategy["OPTIMISTIC_CONCURRENCY"] = "OPTIMISTIC_CONCURRENCY";
})(ResolutionStrategy || (ResolutionStrategy = {}));
export var BackendAPIConflictResolution;
(function (BackendAPIConflictResolution) {
  /**
   * @internal
   */
  BackendAPIConflictResolution.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BackendAPIConflictResolution || (BackendAPIConflictResolution = {}));
export var BackendAPIResourceConfig;
(function (BackendAPIResourceConfig) {
  /**
   * @internal
   */
  BackendAPIResourceConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BackendAPIResourceConfig || (BackendAPIResourceConfig = {}));
export var CreateBackendAPIRequest;
(function (CreateBackendAPIRequest) {
  /**
   * @internal
   */
  CreateBackendAPIRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendAPIRequest || (CreateBackendAPIRequest = {}));
export var CreateBackendAPIResponse;
(function (CreateBackendAPIResponse) {
  /**
   * @internal
   */
  CreateBackendAPIResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendAPIResponse || (CreateBackendAPIResponse = {}));
export var AuthResources;
(function (AuthResources) {
  AuthResources["IDENTITY_POOL_AND_USER_POOL"] = "IDENTITY_POOL_AND_USER_POOL";
  AuthResources["USER_POOL_ONLY"] = "USER_POOL_ONLY";
})(AuthResources || (AuthResources = {}));
export var CreateBackendAuthIdentityPoolConfig;
(function (CreateBackendAuthIdentityPoolConfig) {
  /**
   * @internal
   */
  CreateBackendAuthIdentityPoolConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendAuthIdentityPoolConfig || (CreateBackendAuthIdentityPoolConfig = {}));
export var Service;
(function (Service) {
  Service["COGNITO"] = "COGNITO";
})(Service || (Service = {}));
export var DeliveryMethod;
(function (DeliveryMethod) {
  DeliveryMethod["EMAIL"] = "EMAIL";
  DeliveryMethod["SMS"] = "SMS";
})(DeliveryMethod || (DeliveryMethod = {}));
export var EmailSettings;
(function (EmailSettings) {
  /**
   * @internal
   */
  EmailSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(EmailSettings || (EmailSettings = {}));
export var SmsSettings;
(function (SmsSettings) {
  /**
   * @internal
   */
  SmsSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SmsSettings || (SmsSettings = {}));
export var CreateBackendAuthForgotPasswordConfig;
(function (CreateBackendAuthForgotPasswordConfig) {
  /**
   * @internal
   */
  CreateBackendAuthForgotPasswordConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendAuthForgotPasswordConfig || (CreateBackendAuthForgotPasswordConfig = {}));
export var MFAMode;
(function (MFAMode) {
  MFAMode["OFF"] = "OFF";
  MFAMode["ON"] = "ON";
  MFAMode["OPTIONAL"] = "OPTIONAL";
})(MFAMode || (MFAMode = {}));
export var MfaTypesElement;
(function (MfaTypesElement) {
  MfaTypesElement["SMS"] = "SMS";
  MfaTypesElement["TOTP"] = "TOTP";
})(MfaTypesElement || (MfaTypesElement = {}));
export var Settings;
(function (Settings) {
  /**
   * @internal
   */
  Settings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Settings || (Settings = {}));
export var CreateBackendAuthMFAConfig;
(function (CreateBackendAuthMFAConfig) {
  /**
   * @internal
   */
  CreateBackendAuthMFAConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendAuthMFAConfig || (CreateBackendAuthMFAConfig = {}));
export var OAuthGrantType;
(function (OAuthGrantType) {
  OAuthGrantType["CODE"] = "CODE";
  OAuthGrantType["IMPLICIT"] = "IMPLICIT";
})(OAuthGrantType || (OAuthGrantType = {}));
export var OAuthScopesElement;
(function (OAuthScopesElement) {
  OAuthScopesElement["AWS_COGNITO_SIGNIN_USER_ADMIN"] = "AWS_COGNITO_SIGNIN_USER_ADMIN";
  OAuthScopesElement["EMAIL"] = "EMAIL";
  OAuthScopesElement["OPENID"] = "OPENID";
  OAuthScopesElement["PHONE"] = "PHONE";
  OAuthScopesElement["PROFILE"] = "PROFILE";
})(OAuthScopesElement || (OAuthScopesElement = {}));
export var BackendAuthSocialProviderConfig;
(function (BackendAuthSocialProviderConfig) {
  /**
   * @internal
   */
  BackendAuthSocialProviderConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BackendAuthSocialProviderConfig || (BackendAuthSocialProviderConfig = {}));
export var SocialProviderSettings;
(function (SocialProviderSettings) {
  /**
   * @internal
   */
  SocialProviderSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SocialProviderSettings || (SocialProviderSettings = {}));
export var CreateBackendAuthOAuthConfig;
(function (CreateBackendAuthOAuthConfig) {
  /**
   * @internal
   */
  CreateBackendAuthOAuthConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendAuthOAuthConfig || (CreateBackendAuthOAuthConfig = {}));
export var CreateBackendAuthPasswordPolicyConfig;
(function (CreateBackendAuthPasswordPolicyConfig) {
  /**
   * @internal
   */
  CreateBackendAuthPasswordPolicyConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendAuthPasswordPolicyConfig || (CreateBackendAuthPasswordPolicyConfig = {}));
export var RequiredSignUpAttributesElement;
(function (RequiredSignUpAttributesElement) {
  RequiredSignUpAttributesElement["ADDRESS"] = "ADDRESS";
  RequiredSignUpAttributesElement["BIRTHDATE"] = "BIRTHDATE";
  RequiredSignUpAttributesElement["EMAIL"] = "EMAIL";
  RequiredSignUpAttributesElement["FAMILY_NAME"] = "FAMILY_NAME";
  RequiredSignUpAttributesElement["GENDER"] = "GENDER";
  RequiredSignUpAttributesElement["GIVEN_NAME"] = "GIVEN_NAME";
  RequiredSignUpAttributesElement["LOCALE"] = "LOCALE";
  RequiredSignUpAttributesElement["MIDDLE_NAME"] = "MIDDLE_NAME";
  RequiredSignUpAttributesElement["NAME"] = "NAME";
  RequiredSignUpAttributesElement["NICKNAME"] = "NICKNAME";
  RequiredSignUpAttributesElement["PHONE_NUMBER"] = "PHONE_NUMBER";
  RequiredSignUpAttributesElement["PICTURE"] = "PICTURE";
  RequiredSignUpAttributesElement["PREFERRED_USERNAME"] = "PREFERRED_USERNAME";
  RequiredSignUpAttributesElement["PROFILE"] = "PROFILE";
  RequiredSignUpAttributesElement["UPDATED_AT"] = "UPDATED_AT";
  RequiredSignUpAttributesElement["WEBSITE"] = "WEBSITE";
  RequiredSignUpAttributesElement["ZONE_INFO"] = "ZONE_INFO";
})(RequiredSignUpAttributesElement || (RequiredSignUpAttributesElement = {}));
export var SignInMethod;
(function (SignInMethod) {
  SignInMethod["EMAIL"] = "EMAIL";
  SignInMethod["EMAIL_AND_PHONE_NUMBER"] = "EMAIL_AND_PHONE_NUMBER";
  SignInMethod["PHONE_NUMBER"] = "PHONE_NUMBER";
  SignInMethod["USERNAME"] = "USERNAME";
})(SignInMethod || (SignInMethod = {}));
export var CreateBackendAuthUserPoolConfig;
(function (CreateBackendAuthUserPoolConfig) {
  /**
   * @internal
   */
  CreateBackendAuthUserPoolConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendAuthUserPoolConfig || (CreateBackendAuthUserPoolConfig = {}));
export var CreateBackendAuthResourceConfig;
(function (CreateBackendAuthResourceConfig) {
  /**
   * @internal
   */
  CreateBackendAuthResourceConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendAuthResourceConfig || (CreateBackendAuthResourceConfig = {}));
export var CreateBackendAuthRequest;
(function (CreateBackendAuthRequest) {
  /**
   * @internal
   */
  CreateBackendAuthRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendAuthRequest || (CreateBackendAuthRequest = {}));
export var CreateBackendAuthResponse;
(function (CreateBackendAuthResponse) {
  /**
   * @internal
   */
  CreateBackendAuthResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendAuthResponse || (CreateBackendAuthResponse = {}));
export var CreateBackendConfigRequest;
(function (CreateBackendConfigRequest) {
  /**
   * @internal
   */
  CreateBackendConfigRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendConfigRequest || (CreateBackendConfigRequest = {}));
export var CreateBackendConfigResponse;
(function (CreateBackendConfigResponse) {
  /**
   * @internal
   */
  CreateBackendConfigResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBackendConfigResponse || (CreateBackendConfigResponse = {}));
export var CreateTokenRequest;
(function (CreateTokenRequest) {
  /**
   * @internal
   */
  CreateTokenRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateTokenRequest || (CreateTokenRequest = {}));
export var CreateTokenResponse;
(function (CreateTokenResponse) {
  /**
   * @internal
   */
  CreateTokenResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateTokenResponse || (CreateTokenResponse = {}));
export var DeleteBackendRequest;
(function (DeleteBackendRequest) {
  /**
   * @internal
   */
  DeleteBackendRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackendRequest || (DeleteBackendRequest = {}));
export var DeleteBackendResponse;
(function (DeleteBackendResponse) {
  /**
   * @internal
   */
  DeleteBackendResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackendResponse || (DeleteBackendResponse = {}));
export var DeleteBackendAPIRequest;
(function (DeleteBackendAPIRequest) {
  /**
   * @internal
   */
  DeleteBackendAPIRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackendAPIRequest || (DeleteBackendAPIRequest = {}));
export var DeleteBackendAPIResponse;
(function (DeleteBackendAPIResponse) {
  /**
   * @internal
   */
  DeleteBackendAPIResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackendAPIResponse || (DeleteBackendAPIResponse = {}));
export var DeleteBackendAuthRequest;
(function (DeleteBackendAuthRequest) {
  /**
   * @internal
   */
  DeleteBackendAuthRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackendAuthRequest || (DeleteBackendAuthRequest = {}));
export var DeleteBackendAuthResponse;
(function (DeleteBackendAuthResponse) {
  /**
   * @internal
   */
  DeleteBackendAuthResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBackendAuthResponse || (DeleteBackendAuthResponse = {}));
export var DeleteTokenRequest;
(function (DeleteTokenRequest) {
  /**
   * @internal
   */
  DeleteTokenRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteTokenRequest || (DeleteTokenRequest = {}));
export var DeleteTokenResponse;
(function (DeleteTokenResponse) {
  /**
   * @internal
   */
  DeleteTokenResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteTokenResponse || (DeleteTokenResponse = {}));
export var GenerateBackendAPIModelsRequest;
(function (GenerateBackendAPIModelsRequest) {
  /**
   * @internal
   */
  GenerateBackendAPIModelsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GenerateBackendAPIModelsRequest || (GenerateBackendAPIModelsRequest = {}));
export var GenerateBackendAPIModelsResponse;
(function (GenerateBackendAPIModelsResponse) {
  /**
   * @internal
   */
  GenerateBackendAPIModelsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GenerateBackendAPIModelsResponse || (GenerateBackendAPIModelsResponse = {}));
export var GetBackendRequest;
(function (GetBackendRequest) {
  /**
   * @internal
   */
  GetBackendRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackendRequest || (GetBackendRequest = {}));
export var GetBackendResponse;
(function (GetBackendResponse) {
  /**
   * @internal
   */
  GetBackendResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackendResponse || (GetBackendResponse = {}));
export var GetBackendAPIRequest;
(function (GetBackendAPIRequest) {
  /**
   * @internal
   */
  GetBackendAPIRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackendAPIRequest || (GetBackendAPIRequest = {}));
export var GetBackendAPIResponse;
(function (GetBackendAPIResponse) {
  /**
   * @internal
   */
  GetBackendAPIResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackendAPIResponse || (GetBackendAPIResponse = {}));
export var GetBackendAPIModelsRequest;
(function (GetBackendAPIModelsRequest) {
  /**
   * @internal
   */
  GetBackendAPIModelsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackendAPIModelsRequest || (GetBackendAPIModelsRequest = {}));
export var Status;
(function (Status) {
  Status["LATEST"] = "LATEST";
  Status["STALE"] = "STALE";
})(Status || (Status = {}));
export var GetBackendAPIModelsResponse;
(function (GetBackendAPIModelsResponse) {
  /**
   * @internal
   */
  GetBackendAPIModelsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackendAPIModelsResponse || (GetBackendAPIModelsResponse = {}));
export var GetBackendAuthRequest;
(function (GetBackendAuthRequest) {
  /**
   * @internal
   */
  GetBackendAuthRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackendAuthRequest || (GetBackendAuthRequest = {}));
export var GetBackendAuthResponse;
(function (GetBackendAuthResponse) {
  /**
   * @internal
   */
  GetBackendAuthResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackendAuthResponse || (GetBackendAuthResponse = {}));
export var GetBackendJobRequest;
(function (GetBackendJobRequest) {
  /**
   * @internal
   */
  GetBackendJobRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackendJobRequest || (GetBackendJobRequest = {}));
export var GetBackendJobResponse;
(function (GetBackendJobResponse) {
  /**
   * @internal
   */
  GetBackendJobResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBackendJobResponse || (GetBackendJobResponse = {}));
export var GetTokenRequest;
(function (GetTokenRequest) {
  /**
   * @internal
   */
  GetTokenRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetTokenRequest || (GetTokenRequest = {}));
export var GetTokenResponse;
(function (GetTokenResponse) {
  /**
   * @internal
   */
  GetTokenResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetTokenResponse || (GetTokenResponse = {}));
export var ListBackendJobsRequest;
(function (ListBackendJobsRequest) {
  /**
   * @internal
   */
  ListBackendJobsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackendJobsRequest || (ListBackendJobsRequest = {}));
export var BackendJobRespObj;
(function (BackendJobRespObj) {
  /**
   * @internal
   */
  BackendJobRespObj.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BackendJobRespObj || (BackendJobRespObj = {}));
export var ListBackendJobsResponse;
(function (ListBackendJobsResponse) {
  /**
   * @internal
   */
  ListBackendJobsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBackendJobsResponse || (ListBackendJobsResponse = {}));
export var RemoveAllBackendsRequest;
(function (RemoveAllBackendsRequest) {
  /**
   * @internal
   */
  RemoveAllBackendsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RemoveAllBackendsRequest || (RemoveAllBackendsRequest = {}));
export var RemoveAllBackendsResponse;
(function (RemoveAllBackendsResponse) {
  /**
   * @internal
   */
  RemoveAllBackendsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RemoveAllBackendsResponse || (RemoveAllBackendsResponse = {}));
export var RemoveBackendConfigRequest;
(function (RemoveBackendConfigRequest) {
  /**
   * @internal
   */
  RemoveBackendConfigRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RemoveBackendConfigRequest || (RemoveBackendConfigRequest = {}));
export var RemoveBackendConfigResponse;
(function (RemoveBackendConfigResponse) {
  /**
   * @internal
   */
  RemoveBackendConfigResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RemoveBackendConfigResponse || (RemoveBackendConfigResponse = {}));
export var UpdateBackendAPIRequest;
(function (UpdateBackendAPIRequest) {
  /**
   * @internal
   */
  UpdateBackendAPIRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackendAPIRequest || (UpdateBackendAPIRequest = {}));
export var UpdateBackendAPIResponse;
(function (UpdateBackendAPIResponse) {
  /**
   * @internal
   */
  UpdateBackendAPIResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackendAPIResponse || (UpdateBackendAPIResponse = {}));
export var UpdateBackendAuthIdentityPoolConfig;
(function (UpdateBackendAuthIdentityPoolConfig) {
  /**
   * @internal
   */
  UpdateBackendAuthIdentityPoolConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackendAuthIdentityPoolConfig || (UpdateBackendAuthIdentityPoolConfig = {}));
export var UpdateBackendAuthForgotPasswordConfig;
(function (UpdateBackendAuthForgotPasswordConfig) {
  /**
   * @internal
   */
  UpdateBackendAuthForgotPasswordConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackendAuthForgotPasswordConfig || (UpdateBackendAuthForgotPasswordConfig = {}));
export var UpdateBackendAuthMFAConfig;
(function (UpdateBackendAuthMFAConfig) {
  /**
   * @internal
   */
  UpdateBackendAuthMFAConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackendAuthMFAConfig || (UpdateBackendAuthMFAConfig = {}));
export var UpdateBackendAuthOAuthConfig;
(function (UpdateBackendAuthOAuthConfig) {
  /**
   * @internal
   */
  UpdateBackendAuthOAuthConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackendAuthOAuthConfig || (UpdateBackendAuthOAuthConfig = {}));
export var UpdateBackendAuthPasswordPolicyConfig;
(function (UpdateBackendAuthPasswordPolicyConfig) {
  /**
   * @internal
   */
  UpdateBackendAuthPasswordPolicyConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackendAuthPasswordPolicyConfig || (UpdateBackendAuthPasswordPolicyConfig = {}));
export var UpdateBackendAuthUserPoolConfig;
(function (UpdateBackendAuthUserPoolConfig) {
  /**
   * @internal
   */
  UpdateBackendAuthUserPoolConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackendAuthUserPoolConfig || (UpdateBackendAuthUserPoolConfig = {}));
export var UpdateBackendAuthResourceConfig;
(function (UpdateBackendAuthResourceConfig) {
  /**
   * @internal
   */
  UpdateBackendAuthResourceConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackendAuthResourceConfig || (UpdateBackendAuthResourceConfig = {}));
export var UpdateBackendAuthRequest;
(function (UpdateBackendAuthRequest) {
  /**
   * @internal
   */
  UpdateBackendAuthRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackendAuthRequest || (UpdateBackendAuthRequest = {}));
export var UpdateBackendAuthResponse;
(function (UpdateBackendAuthResponse) {
  /**
   * @internal
   */
  UpdateBackendAuthResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackendAuthResponse || (UpdateBackendAuthResponse = {}));
export var LoginAuthConfigReqObj;
(function (LoginAuthConfigReqObj) {
  /**
   * @internal
   */
  LoginAuthConfigReqObj.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LoginAuthConfigReqObj || (LoginAuthConfigReqObj = {}));
export var UpdateBackendConfigRequest;
(function (UpdateBackendConfigRequest) {
  /**
   * @internal
   */
  UpdateBackendConfigRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackendConfigRequest || (UpdateBackendConfigRequest = {}));
export var UpdateBackendConfigResponse;
(function (UpdateBackendConfigResponse) {
  /**
   * @internal
   */
  UpdateBackendConfigResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackendConfigResponse || (UpdateBackendConfigResponse = {}));
export var UpdateBackendJobRequest;
(function (UpdateBackendJobRequest) {
  /**
   * @internal
   */
  UpdateBackendJobRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackendJobRequest || (UpdateBackendJobRequest = {}));
export var UpdateBackendJobResponse;
(function (UpdateBackendJobResponse) {
  /**
   * @internal
   */
  UpdateBackendJobResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBackendJobResponse || (UpdateBackendJobResponse = {}));
//# sourceMappingURL=models_0.js.map
