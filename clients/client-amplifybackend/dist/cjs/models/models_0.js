"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBackendAuthRequest =
  exports.DeleteBackendAPIResponse =
  exports.DeleteBackendAPIRequest =
  exports.DeleteBackendResponse =
  exports.DeleteBackendRequest =
  exports.CreateTokenResponse =
  exports.CreateTokenRequest =
  exports.CreateBackendConfigResponse =
  exports.CreateBackendConfigRequest =
  exports.CreateBackendAuthResponse =
  exports.CreateBackendAuthRequest =
  exports.CreateBackendAuthResourceConfig =
  exports.CreateBackendAuthUserPoolConfig =
  exports.SignInMethod =
  exports.RequiredSignUpAttributesElement =
  exports.CreateBackendAuthPasswordPolicyConfig =
  exports.CreateBackendAuthOAuthConfig =
  exports.SocialProviderSettings =
  exports.BackendAuthSocialProviderConfig =
  exports.OAuthScopesElement =
  exports.OAuthGrantType =
  exports.CreateBackendAuthMFAConfig =
  exports.Settings =
  exports.MfaTypesElement =
  exports.MFAMode =
  exports.CreateBackendAuthForgotPasswordConfig =
  exports.SmsSettings =
  exports.EmailSettings =
  exports.DeliveryMethod =
  exports.Service =
  exports.CreateBackendAuthIdentityPoolConfig =
  exports.AuthResources =
  exports.CreateBackendAPIResponse =
  exports.CreateBackendAPIRequest =
  exports.BackendAPIResourceConfig =
  exports.BackendAPIConflictResolution =
  exports.ResolutionStrategy =
  exports.BackendAPIAuthType =
  exports.BackendAPIAppSyncAuthSettings =
  exports.Mode =
  exports.CreateBackendResponse =
  exports.CreateBackendRequest =
  exports.ResourceConfig =
  exports.TooManyRequestsException =
  exports.NotFoundException =
  exports.GatewayTimeoutException =
  exports.CloneBackendResponse =
  exports.CloneBackendRequest =
  exports.BadRequestException =
  exports.AdditionalConstraintsElement =
    void 0;
exports.UpdateBackendJobResponse =
  exports.UpdateBackendJobRequest =
  exports.UpdateBackendConfigResponse =
  exports.UpdateBackendConfigRequest =
  exports.LoginAuthConfigReqObj =
  exports.UpdateBackendAuthResponse =
  exports.UpdateBackendAuthRequest =
  exports.UpdateBackendAuthResourceConfig =
  exports.UpdateBackendAuthUserPoolConfig =
  exports.UpdateBackendAuthPasswordPolicyConfig =
  exports.UpdateBackendAuthOAuthConfig =
  exports.UpdateBackendAuthMFAConfig =
  exports.UpdateBackendAuthForgotPasswordConfig =
  exports.UpdateBackendAuthIdentityPoolConfig =
  exports.UpdateBackendAPIResponse =
  exports.UpdateBackendAPIRequest =
  exports.RemoveBackendConfigResponse =
  exports.RemoveBackendConfigRequest =
  exports.RemoveAllBackendsResponse =
  exports.RemoveAllBackendsRequest =
  exports.ListBackendJobsResponse =
  exports.BackendJobRespObj =
  exports.ListBackendJobsRequest =
  exports.GetTokenResponse =
  exports.GetTokenRequest =
  exports.GetBackendJobResponse =
  exports.GetBackendJobRequest =
  exports.GetBackendAuthResponse =
  exports.GetBackendAuthRequest =
  exports.GetBackendAPIModelsResponse =
  exports.Status =
  exports.GetBackendAPIModelsRequest =
  exports.GetBackendAPIResponse =
  exports.GetBackendAPIRequest =
  exports.GetBackendResponse =
  exports.GetBackendRequest =
  exports.GenerateBackendAPIModelsResponse =
  exports.GenerateBackendAPIModelsRequest =
  exports.DeleteTokenResponse =
  exports.DeleteTokenRequest =
  exports.DeleteBackendAuthResponse =
    void 0;
var AdditionalConstraintsElement;
(function (AdditionalConstraintsElement) {
  AdditionalConstraintsElement["REQUIRE_DIGIT"] = "REQUIRE_DIGIT";
  AdditionalConstraintsElement["REQUIRE_LOWERCASE"] = "REQUIRE_LOWERCASE";
  AdditionalConstraintsElement["REQUIRE_SYMBOL"] = "REQUIRE_SYMBOL";
  AdditionalConstraintsElement["REQUIRE_UPPERCASE"] = "REQUIRE_UPPERCASE";
})(
  (AdditionalConstraintsElement = exports.AdditionalConstraintsElement || (exports.AdditionalConstraintsElement = {}))
);
var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BadRequestException = exports.BadRequestException || (exports.BadRequestException = {})));
var CloneBackendRequest;
(function (CloneBackendRequest) {
  /**
   * @internal
   */
  CloneBackendRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CloneBackendRequest = exports.CloneBackendRequest || (exports.CloneBackendRequest = {})));
var CloneBackendResponse;
(function (CloneBackendResponse) {
  /**
   * @internal
   */
  CloneBackendResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CloneBackendResponse = exports.CloneBackendResponse || (exports.CloneBackendResponse = {})));
var GatewayTimeoutException;
(function (GatewayTimeoutException) {
  /**
   * @internal
   */
  GatewayTimeoutException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GatewayTimeoutException = exports.GatewayTimeoutException || (exports.GatewayTimeoutException = {})));
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
var ResourceConfig;
(function (ResourceConfig) {
  /**
   * @internal
   */
  ResourceConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceConfig = exports.ResourceConfig || (exports.ResourceConfig = {})));
var CreateBackendRequest;
(function (CreateBackendRequest) {
  /**
   * @internal
   */
  CreateBackendRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBackendRequest = exports.CreateBackendRequest || (exports.CreateBackendRequest = {})));
var CreateBackendResponse;
(function (CreateBackendResponse) {
  /**
   * @internal
   */
  CreateBackendResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBackendResponse = exports.CreateBackendResponse || (exports.CreateBackendResponse = {})));
var Mode;
(function (Mode) {
  Mode["AMAZON_COGNITO_USER_POOLS"] = "AMAZON_COGNITO_USER_POOLS";
  Mode["API_KEY"] = "API_KEY";
  Mode["AWS_IAM"] = "AWS_IAM";
  Mode["OPENID_CONNECT"] = "OPENID_CONNECT";
})((Mode = exports.Mode || (exports.Mode = {})));
var BackendAPIAppSyncAuthSettings;
(function (BackendAPIAppSyncAuthSettings) {
  /**
   * @internal
   */
  BackendAPIAppSyncAuthSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BackendAPIAppSyncAuthSettings =
    exports.BackendAPIAppSyncAuthSettings || (exports.BackendAPIAppSyncAuthSettings = {}))
);
var BackendAPIAuthType;
(function (BackendAPIAuthType) {
  /**
   * @internal
   */
  BackendAPIAuthType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BackendAPIAuthType = exports.BackendAPIAuthType || (exports.BackendAPIAuthType = {})));
var ResolutionStrategy;
(function (ResolutionStrategy) {
  ResolutionStrategy["AUTOMERGE"] = "AUTOMERGE";
  ResolutionStrategy["LAMBDA"] = "LAMBDA";
  ResolutionStrategy["NONE"] = "NONE";
  ResolutionStrategy["OPTIMISTIC_CONCURRENCY"] = "OPTIMISTIC_CONCURRENCY";
})((ResolutionStrategy = exports.ResolutionStrategy || (exports.ResolutionStrategy = {})));
var BackendAPIConflictResolution;
(function (BackendAPIConflictResolution) {
  /**
   * @internal
   */
  BackendAPIConflictResolution.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BackendAPIConflictResolution = exports.BackendAPIConflictResolution || (exports.BackendAPIConflictResolution = {}))
);
var BackendAPIResourceConfig;
(function (BackendAPIResourceConfig) {
  /**
   * @internal
   */
  BackendAPIResourceConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BackendAPIResourceConfig = exports.BackendAPIResourceConfig || (exports.BackendAPIResourceConfig = {})));
var CreateBackendAPIRequest;
(function (CreateBackendAPIRequest) {
  /**
   * @internal
   */
  CreateBackendAPIRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBackendAPIRequest = exports.CreateBackendAPIRequest || (exports.CreateBackendAPIRequest = {})));
var CreateBackendAPIResponse;
(function (CreateBackendAPIResponse) {
  /**
   * @internal
   */
  CreateBackendAPIResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBackendAPIResponse = exports.CreateBackendAPIResponse || (exports.CreateBackendAPIResponse = {})));
var AuthResources;
(function (AuthResources) {
  AuthResources["IDENTITY_POOL_AND_USER_POOL"] = "IDENTITY_POOL_AND_USER_POOL";
  AuthResources["USER_POOL_ONLY"] = "USER_POOL_ONLY";
})((AuthResources = exports.AuthResources || (exports.AuthResources = {})));
var CreateBackendAuthIdentityPoolConfig;
(function (CreateBackendAuthIdentityPoolConfig) {
  /**
   * @internal
   */
  CreateBackendAuthIdentityPoolConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateBackendAuthIdentityPoolConfig =
    exports.CreateBackendAuthIdentityPoolConfig || (exports.CreateBackendAuthIdentityPoolConfig = {}))
);
var Service;
(function (Service) {
  Service["COGNITO"] = "COGNITO";
})((Service = exports.Service || (exports.Service = {})));
var DeliveryMethod;
(function (DeliveryMethod) {
  DeliveryMethod["EMAIL"] = "EMAIL";
  DeliveryMethod["SMS"] = "SMS";
})((DeliveryMethod = exports.DeliveryMethod || (exports.DeliveryMethod = {})));
var EmailSettings;
(function (EmailSettings) {
  /**
   * @internal
   */
  EmailSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EmailSettings = exports.EmailSettings || (exports.EmailSettings = {})));
var SmsSettings;
(function (SmsSettings) {
  /**
   * @internal
   */
  SmsSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SmsSettings = exports.SmsSettings || (exports.SmsSettings = {})));
var CreateBackendAuthForgotPasswordConfig;
(function (CreateBackendAuthForgotPasswordConfig) {
  /**
   * @internal
   */
  CreateBackendAuthForgotPasswordConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateBackendAuthForgotPasswordConfig =
    exports.CreateBackendAuthForgotPasswordConfig || (exports.CreateBackendAuthForgotPasswordConfig = {}))
);
var MFAMode;
(function (MFAMode) {
  MFAMode["OFF"] = "OFF";
  MFAMode["ON"] = "ON";
  MFAMode["OPTIONAL"] = "OPTIONAL";
})((MFAMode = exports.MFAMode || (exports.MFAMode = {})));
var MfaTypesElement;
(function (MfaTypesElement) {
  MfaTypesElement["SMS"] = "SMS";
  MfaTypesElement["TOTP"] = "TOTP";
})((MfaTypesElement = exports.MfaTypesElement || (exports.MfaTypesElement = {})));
var Settings;
(function (Settings) {
  /**
   * @internal
   */
  Settings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Settings = exports.Settings || (exports.Settings = {})));
var CreateBackendAuthMFAConfig;
(function (CreateBackendAuthMFAConfig) {
  /**
   * @internal
   */
  CreateBackendAuthMFAConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBackendAuthMFAConfig = exports.CreateBackendAuthMFAConfig || (exports.CreateBackendAuthMFAConfig = {})));
var OAuthGrantType;
(function (OAuthGrantType) {
  OAuthGrantType["CODE"] = "CODE";
  OAuthGrantType["IMPLICIT"] = "IMPLICIT";
})((OAuthGrantType = exports.OAuthGrantType || (exports.OAuthGrantType = {})));
var OAuthScopesElement;
(function (OAuthScopesElement) {
  OAuthScopesElement["AWS_COGNITO_SIGNIN_USER_ADMIN"] = "AWS_COGNITO_SIGNIN_USER_ADMIN";
  OAuthScopesElement["EMAIL"] = "EMAIL";
  OAuthScopesElement["OPENID"] = "OPENID";
  OAuthScopesElement["PHONE"] = "PHONE";
  OAuthScopesElement["PROFILE"] = "PROFILE";
})((OAuthScopesElement = exports.OAuthScopesElement || (exports.OAuthScopesElement = {})));
var BackendAuthSocialProviderConfig;
(function (BackendAuthSocialProviderConfig) {
  /**
   * @internal
   */
  BackendAuthSocialProviderConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BackendAuthSocialProviderConfig =
    exports.BackendAuthSocialProviderConfig || (exports.BackendAuthSocialProviderConfig = {}))
);
var SocialProviderSettings;
(function (SocialProviderSettings) {
  /**
   * @internal
   */
  SocialProviderSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SocialProviderSettings = exports.SocialProviderSettings || (exports.SocialProviderSettings = {})));
var CreateBackendAuthOAuthConfig;
(function (CreateBackendAuthOAuthConfig) {
  /**
   * @internal
   */
  CreateBackendAuthOAuthConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateBackendAuthOAuthConfig = exports.CreateBackendAuthOAuthConfig || (exports.CreateBackendAuthOAuthConfig = {}))
);
var CreateBackendAuthPasswordPolicyConfig;
(function (CreateBackendAuthPasswordPolicyConfig) {
  /**
   * @internal
   */
  CreateBackendAuthPasswordPolicyConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateBackendAuthPasswordPolicyConfig =
    exports.CreateBackendAuthPasswordPolicyConfig || (exports.CreateBackendAuthPasswordPolicyConfig = {}))
);
var RequiredSignUpAttributesElement;
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
})(
  (RequiredSignUpAttributesElement =
    exports.RequiredSignUpAttributesElement || (exports.RequiredSignUpAttributesElement = {}))
);
var SignInMethod;
(function (SignInMethod) {
  SignInMethod["EMAIL"] = "EMAIL";
  SignInMethod["EMAIL_AND_PHONE_NUMBER"] = "EMAIL_AND_PHONE_NUMBER";
  SignInMethod["PHONE_NUMBER"] = "PHONE_NUMBER";
  SignInMethod["USERNAME"] = "USERNAME";
})((SignInMethod = exports.SignInMethod || (exports.SignInMethod = {})));
var CreateBackendAuthUserPoolConfig;
(function (CreateBackendAuthUserPoolConfig) {
  /**
   * @internal
   */
  CreateBackendAuthUserPoolConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateBackendAuthUserPoolConfig =
    exports.CreateBackendAuthUserPoolConfig || (exports.CreateBackendAuthUserPoolConfig = {}))
);
var CreateBackendAuthResourceConfig;
(function (CreateBackendAuthResourceConfig) {
  /**
   * @internal
   */
  CreateBackendAuthResourceConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateBackendAuthResourceConfig =
    exports.CreateBackendAuthResourceConfig || (exports.CreateBackendAuthResourceConfig = {}))
);
var CreateBackendAuthRequest;
(function (CreateBackendAuthRequest) {
  /**
   * @internal
   */
  CreateBackendAuthRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBackendAuthRequest = exports.CreateBackendAuthRequest || (exports.CreateBackendAuthRequest = {})));
var CreateBackendAuthResponse;
(function (CreateBackendAuthResponse) {
  /**
   * @internal
   */
  CreateBackendAuthResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBackendAuthResponse = exports.CreateBackendAuthResponse || (exports.CreateBackendAuthResponse = {})));
var CreateBackendConfigRequest;
(function (CreateBackendConfigRequest) {
  /**
   * @internal
   */
  CreateBackendConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBackendConfigRequest = exports.CreateBackendConfigRequest || (exports.CreateBackendConfigRequest = {})));
var CreateBackendConfigResponse;
(function (CreateBackendConfigResponse) {
  /**
   * @internal
   */
  CreateBackendConfigResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBackendConfigResponse = exports.CreateBackendConfigResponse || (exports.CreateBackendConfigResponse = {})));
var CreateTokenRequest;
(function (CreateTokenRequest) {
  /**
   * @internal
   */
  CreateTokenRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateTokenRequest = exports.CreateTokenRequest || (exports.CreateTokenRequest = {})));
var CreateTokenResponse;
(function (CreateTokenResponse) {
  /**
   * @internal
   */
  CreateTokenResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateTokenResponse = exports.CreateTokenResponse || (exports.CreateTokenResponse = {})));
var DeleteBackendRequest;
(function (DeleteBackendRequest) {
  /**
   * @internal
   */
  DeleteBackendRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBackendRequest = exports.DeleteBackendRequest || (exports.DeleteBackendRequest = {})));
var DeleteBackendResponse;
(function (DeleteBackendResponse) {
  /**
   * @internal
   */
  DeleteBackendResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBackendResponse = exports.DeleteBackendResponse || (exports.DeleteBackendResponse = {})));
var DeleteBackendAPIRequest;
(function (DeleteBackendAPIRequest) {
  /**
   * @internal
   */
  DeleteBackendAPIRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBackendAPIRequest = exports.DeleteBackendAPIRequest || (exports.DeleteBackendAPIRequest = {})));
var DeleteBackendAPIResponse;
(function (DeleteBackendAPIResponse) {
  /**
   * @internal
   */
  DeleteBackendAPIResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBackendAPIResponse = exports.DeleteBackendAPIResponse || (exports.DeleteBackendAPIResponse = {})));
var DeleteBackendAuthRequest;
(function (DeleteBackendAuthRequest) {
  /**
   * @internal
   */
  DeleteBackendAuthRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBackendAuthRequest = exports.DeleteBackendAuthRequest || (exports.DeleteBackendAuthRequest = {})));
var DeleteBackendAuthResponse;
(function (DeleteBackendAuthResponse) {
  /**
   * @internal
   */
  DeleteBackendAuthResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBackendAuthResponse = exports.DeleteBackendAuthResponse || (exports.DeleteBackendAuthResponse = {})));
var DeleteTokenRequest;
(function (DeleteTokenRequest) {
  /**
   * @internal
   */
  DeleteTokenRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteTokenRequest = exports.DeleteTokenRequest || (exports.DeleteTokenRequest = {})));
var DeleteTokenResponse;
(function (DeleteTokenResponse) {
  /**
   * @internal
   */
  DeleteTokenResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteTokenResponse = exports.DeleteTokenResponse || (exports.DeleteTokenResponse = {})));
var GenerateBackendAPIModelsRequest;
(function (GenerateBackendAPIModelsRequest) {
  /**
   * @internal
   */
  GenerateBackendAPIModelsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GenerateBackendAPIModelsRequest =
    exports.GenerateBackendAPIModelsRequest || (exports.GenerateBackendAPIModelsRequest = {}))
);
var GenerateBackendAPIModelsResponse;
(function (GenerateBackendAPIModelsResponse) {
  /**
   * @internal
   */
  GenerateBackendAPIModelsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GenerateBackendAPIModelsResponse =
    exports.GenerateBackendAPIModelsResponse || (exports.GenerateBackendAPIModelsResponse = {}))
);
var GetBackendRequest;
(function (GetBackendRequest) {
  /**
   * @internal
   */
  GetBackendRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBackendRequest = exports.GetBackendRequest || (exports.GetBackendRequest = {})));
var GetBackendResponse;
(function (GetBackendResponse) {
  /**
   * @internal
   */
  GetBackendResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBackendResponse = exports.GetBackendResponse || (exports.GetBackendResponse = {})));
var GetBackendAPIRequest;
(function (GetBackendAPIRequest) {
  /**
   * @internal
   */
  GetBackendAPIRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBackendAPIRequest = exports.GetBackendAPIRequest || (exports.GetBackendAPIRequest = {})));
var GetBackendAPIResponse;
(function (GetBackendAPIResponse) {
  /**
   * @internal
   */
  GetBackendAPIResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBackendAPIResponse = exports.GetBackendAPIResponse || (exports.GetBackendAPIResponse = {})));
var GetBackendAPIModelsRequest;
(function (GetBackendAPIModelsRequest) {
  /**
   * @internal
   */
  GetBackendAPIModelsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBackendAPIModelsRequest = exports.GetBackendAPIModelsRequest || (exports.GetBackendAPIModelsRequest = {})));
var Status;
(function (Status) {
  Status["LATEST"] = "LATEST";
  Status["STALE"] = "STALE";
})((Status = exports.Status || (exports.Status = {})));
var GetBackendAPIModelsResponse;
(function (GetBackendAPIModelsResponse) {
  /**
   * @internal
   */
  GetBackendAPIModelsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBackendAPIModelsResponse = exports.GetBackendAPIModelsResponse || (exports.GetBackendAPIModelsResponse = {})));
var GetBackendAuthRequest;
(function (GetBackendAuthRequest) {
  /**
   * @internal
   */
  GetBackendAuthRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBackendAuthRequest = exports.GetBackendAuthRequest || (exports.GetBackendAuthRequest = {})));
var GetBackendAuthResponse;
(function (GetBackendAuthResponse) {
  /**
   * @internal
   */
  GetBackendAuthResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBackendAuthResponse = exports.GetBackendAuthResponse || (exports.GetBackendAuthResponse = {})));
var GetBackendJobRequest;
(function (GetBackendJobRequest) {
  /**
   * @internal
   */
  GetBackendJobRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBackendJobRequest = exports.GetBackendJobRequest || (exports.GetBackendJobRequest = {})));
var GetBackendJobResponse;
(function (GetBackendJobResponse) {
  /**
   * @internal
   */
  GetBackendJobResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBackendJobResponse = exports.GetBackendJobResponse || (exports.GetBackendJobResponse = {})));
var GetTokenRequest;
(function (GetTokenRequest) {
  /**
   * @internal
   */
  GetTokenRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetTokenRequest = exports.GetTokenRequest || (exports.GetTokenRequest = {})));
var GetTokenResponse;
(function (GetTokenResponse) {
  /**
   * @internal
   */
  GetTokenResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetTokenResponse = exports.GetTokenResponse || (exports.GetTokenResponse = {})));
var ListBackendJobsRequest;
(function (ListBackendJobsRequest) {
  /**
   * @internal
   */
  ListBackendJobsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListBackendJobsRequest = exports.ListBackendJobsRequest || (exports.ListBackendJobsRequest = {})));
var BackendJobRespObj;
(function (BackendJobRespObj) {
  /**
   * @internal
   */
  BackendJobRespObj.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BackendJobRespObj = exports.BackendJobRespObj || (exports.BackendJobRespObj = {})));
var ListBackendJobsResponse;
(function (ListBackendJobsResponse) {
  /**
   * @internal
   */
  ListBackendJobsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListBackendJobsResponse = exports.ListBackendJobsResponse || (exports.ListBackendJobsResponse = {})));
var RemoveAllBackendsRequest;
(function (RemoveAllBackendsRequest) {
  /**
   * @internal
   */
  RemoveAllBackendsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RemoveAllBackendsRequest = exports.RemoveAllBackendsRequest || (exports.RemoveAllBackendsRequest = {})));
var RemoveAllBackendsResponse;
(function (RemoveAllBackendsResponse) {
  /**
   * @internal
   */
  RemoveAllBackendsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RemoveAllBackendsResponse = exports.RemoveAllBackendsResponse || (exports.RemoveAllBackendsResponse = {})));
var RemoveBackendConfigRequest;
(function (RemoveBackendConfigRequest) {
  /**
   * @internal
   */
  RemoveBackendConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RemoveBackendConfigRequest = exports.RemoveBackendConfigRequest || (exports.RemoveBackendConfigRequest = {})));
var RemoveBackendConfigResponse;
(function (RemoveBackendConfigResponse) {
  /**
   * @internal
   */
  RemoveBackendConfigResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RemoveBackendConfigResponse = exports.RemoveBackendConfigResponse || (exports.RemoveBackendConfigResponse = {})));
var UpdateBackendAPIRequest;
(function (UpdateBackendAPIRequest) {
  /**
   * @internal
   */
  UpdateBackendAPIRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateBackendAPIRequest = exports.UpdateBackendAPIRequest || (exports.UpdateBackendAPIRequest = {})));
var UpdateBackendAPIResponse;
(function (UpdateBackendAPIResponse) {
  /**
   * @internal
   */
  UpdateBackendAPIResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateBackendAPIResponse = exports.UpdateBackendAPIResponse || (exports.UpdateBackendAPIResponse = {})));
var UpdateBackendAuthIdentityPoolConfig;
(function (UpdateBackendAuthIdentityPoolConfig) {
  /**
   * @internal
   */
  UpdateBackendAuthIdentityPoolConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateBackendAuthIdentityPoolConfig =
    exports.UpdateBackendAuthIdentityPoolConfig || (exports.UpdateBackendAuthIdentityPoolConfig = {}))
);
var UpdateBackendAuthForgotPasswordConfig;
(function (UpdateBackendAuthForgotPasswordConfig) {
  /**
   * @internal
   */
  UpdateBackendAuthForgotPasswordConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateBackendAuthForgotPasswordConfig =
    exports.UpdateBackendAuthForgotPasswordConfig || (exports.UpdateBackendAuthForgotPasswordConfig = {}))
);
var UpdateBackendAuthMFAConfig;
(function (UpdateBackendAuthMFAConfig) {
  /**
   * @internal
   */
  UpdateBackendAuthMFAConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateBackendAuthMFAConfig = exports.UpdateBackendAuthMFAConfig || (exports.UpdateBackendAuthMFAConfig = {})));
var UpdateBackendAuthOAuthConfig;
(function (UpdateBackendAuthOAuthConfig) {
  /**
   * @internal
   */
  UpdateBackendAuthOAuthConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateBackendAuthOAuthConfig = exports.UpdateBackendAuthOAuthConfig || (exports.UpdateBackendAuthOAuthConfig = {}))
);
var UpdateBackendAuthPasswordPolicyConfig;
(function (UpdateBackendAuthPasswordPolicyConfig) {
  /**
   * @internal
   */
  UpdateBackendAuthPasswordPolicyConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateBackendAuthPasswordPolicyConfig =
    exports.UpdateBackendAuthPasswordPolicyConfig || (exports.UpdateBackendAuthPasswordPolicyConfig = {}))
);
var UpdateBackendAuthUserPoolConfig;
(function (UpdateBackendAuthUserPoolConfig) {
  /**
   * @internal
   */
  UpdateBackendAuthUserPoolConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateBackendAuthUserPoolConfig =
    exports.UpdateBackendAuthUserPoolConfig || (exports.UpdateBackendAuthUserPoolConfig = {}))
);
var UpdateBackendAuthResourceConfig;
(function (UpdateBackendAuthResourceConfig) {
  /**
   * @internal
   */
  UpdateBackendAuthResourceConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateBackendAuthResourceConfig =
    exports.UpdateBackendAuthResourceConfig || (exports.UpdateBackendAuthResourceConfig = {}))
);
var UpdateBackendAuthRequest;
(function (UpdateBackendAuthRequest) {
  /**
   * @internal
   */
  UpdateBackendAuthRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateBackendAuthRequest = exports.UpdateBackendAuthRequest || (exports.UpdateBackendAuthRequest = {})));
var UpdateBackendAuthResponse;
(function (UpdateBackendAuthResponse) {
  /**
   * @internal
   */
  UpdateBackendAuthResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateBackendAuthResponse = exports.UpdateBackendAuthResponse || (exports.UpdateBackendAuthResponse = {})));
var LoginAuthConfigReqObj;
(function (LoginAuthConfigReqObj) {
  /**
   * @internal
   */
  LoginAuthConfigReqObj.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LoginAuthConfigReqObj = exports.LoginAuthConfigReqObj || (exports.LoginAuthConfigReqObj = {})));
var UpdateBackendConfigRequest;
(function (UpdateBackendConfigRequest) {
  /**
   * @internal
   */
  UpdateBackendConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateBackendConfigRequest = exports.UpdateBackendConfigRequest || (exports.UpdateBackendConfigRequest = {})));
var UpdateBackendConfigResponse;
(function (UpdateBackendConfigResponse) {
  /**
   * @internal
   */
  UpdateBackendConfigResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateBackendConfigResponse = exports.UpdateBackendConfigResponse || (exports.UpdateBackendConfigResponse = {})));
var UpdateBackendJobRequest;
(function (UpdateBackendJobRequest) {
  /**
   * @internal
   */
  UpdateBackendJobRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateBackendJobRequest = exports.UpdateBackendJobRequest || (exports.UpdateBackendJobRequest = {})));
var UpdateBackendJobResponse;
(function (UpdateBackendJobResponse) {
  /**
   * @internal
   */
  UpdateBackendJobResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateBackendJobResponse = exports.UpdateBackendJobResponse || (exports.UpdateBackendJobResponse = {})));
//# sourceMappingURL=models_0.js.map
