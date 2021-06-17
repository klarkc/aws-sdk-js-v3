"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyUserAttributeResponse = exports.VerifyUserAttributeRequest = exports.VerifySoftwareTokenResponse = exports.VerifySoftwareTokenResponseType = exports.VerifySoftwareTokenRequest = exports.EnableSoftwareTokenMFAException = exports.UpdateUserPoolDomainResponse = exports.UpdateUserPoolDomainRequest = exports.UpdateUserPoolClientResponse = exports.UpdateUserPoolClientRequest = exports.UpdateUserPoolResponse = exports.UpdateUserPoolRequest = exports.UpdateUserAttributesResponse = exports.UpdateUserAttributesRequest = exports.UpdateResourceServerResponse = exports.UpdateResourceServerRequest = exports.UpdateIdentityProviderResponse = exports.UpdateIdentityProviderRequest = exports.UpdateGroupResponse = exports.UpdateGroupRequest = exports.UpdateDeviceStatusResponse = exports.UpdateDeviceStatusRequest = exports.UpdateAuthEventFeedbackResponse = exports.UpdateAuthEventFeedbackRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = void 0;
const models_0_1 = require("./models_0");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
var UpdateAuthEventFeedbackRequest;
(function (UpdateAuthEventFeedbackRequest) {
    /**
     * @internal
     */
    UpdateAuthEventFeedbackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.FeedbackToken && { FeedbackToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateAuthEventFeedbackRequest = exports.UpdateAuthEventFeedbackRequest || (exports.UpdateAuthEventFeedbackRequest = {}));
var UpdateAuthEventFeedbackResponse;
(function (UpdateAuthEventFeedbackResponse) {
    /**
     * @internal
     */
    UpdateAuthEventFeedbackResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAuthEventFeedbackResponse = exports.UpdateAuthEventFeedbackResponse || (exports.UpdateAuthEventFeedbackResponse = {}));
var UpdateDeviceStatusRequest;
(function (UpdateDeviceStatusRequest) {
    /**
     * @internal
     */
    UpdateDeviceStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateDeviceStatusRequest = exports.UpdateDeviceStatusRequest || (exports.UpdateDeviceStatusRequest = {}));
var UpdateDeviceStatusResponse;
(function (UpdateDeviceStatusResponse) {
    /**
     * @internal
     */
    UpdateDeviceStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDeviceStatusResponse = exports.UpdateDeviceStatusResponse || (exports.UpdateDeviceStatusResponse = {}));
var UpdateGroupRequest;
(function (UpdateGroupRequest) {
    /**
     * @internal
     */
    UpdateGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGroupRequest = exports.UpdateGroupRequest || (exports.UpdateGroupRequest = {}));
var UpdateGroupResponse;
(function (UpdateGroupResponse) {
    /**
     * @internal
     */
    UpdateGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGroupResponse = exports.UpdateGroupResponse || (exports.UpdateGroupResponse = {}));
var UpdateIdentityProviderRequest;
(function (UpdateIdentityProviderRequest) {
    /**
     * @internal
     */
    UpdateIdentityProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIdentityProviderRequest = exports.UpdateIdentityProviderRequest || (exports.UpdateIdentityProviderRequest = {}));
var UpdateIdentityProviderResponse;
(function (UpdateIdentityProviderResponse) {
    /**
     * @internal
     */
    UpdateIdentityProviderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIdentityProviderResponse = exports.UpdateIdentityProviderResponse || (exports.UpdateIdentityProviderResponse = {}));
var UpdateResourceServerRequest;
(function (UpdateResourceServerRequest) {
    /**
     * @internal
     */
    UpdateResourceServerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResourceServerRequest = exports.UpdateResourceServerRequest || (exports.UpdateResourceServerRequest = {}));
var UpdateResourceServerResponse;
(function (UpdateResourceServerResponse) {
    /**
     * @internal
     */
    UpdateResourceServerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResourceServerResponse = exports.UpdateResourceServerResponse || (exports.UpdateResourceServerResponse = {}));
var UpdateUserAttributesRequest;
(function (UpdateUserAttributesRequest) {
    /**
     * @internal
     */
    UpdateUserAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.UserAttributes && {
            UserAttributes: obj.UserAttributes.map((item) => models_0_1.AttributeType.filterSensitiveLog(item)),
        }),
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateUserAttributesRequest = exports.UpdateUserAttributesRequest || (exports.UpdateUserAttributesRequest = {}));
var UpdateUserAttributesResponse;
(function (UpdateUserAttributesResponse) {
    /**
     * @internal
     */
    UpdateUserAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserAttributesResponse = exports.UpdateUserAttributesResponse || (exports.UpdateUserAttributesResponse = {}));
var UpdateUserPoolRequest;
(function (UpdateUserPoolRequest) {
    /**
     * @internal
     */
    UpdateUserPoolRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserPoolRequest = exports.UpdateUserPoolRequest || (exports.UpdateUserPoolRequest = {}));
var UpdateUserPoolResponse;
(function (UpdateUserPoolResponse) {
    /**
     * @internal
     */
    UpdateUserPoolResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserPoolResponse = exports.UpdateUserPoolResponse || (exports.UpdateUserPoolResponse = {}));
var UpdateUserPoolClientRequest;
(function (UpdateUserPoolClientRequest) {
    /**
     * @internal
     */
    UpdateUserPoolClientRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ClientId && { ClientId: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateUserPoolClientRequest = exports.UpdateUserPoolClientRequest || (exports.UpdateUserPoolClientRequest = {}));
var UpdateUserPoolClientResponse;
(function (UpdateUserPoolClientResponse) {
    /**
     * @internal
     */
    UpdateUserPoolClientResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.UserPoolClient && { UserPoolClient: models_0_1.UserPoolClientType.filterSensitiveLog(obj.UserPoolClient) }),
    });
})(UpdateUserPoolClientResponse = exports.UpdateUserPoolClientResponse || (exports.UpdateUserPoolClientResponse = {}));
var UpdateUserPoolDomainRequest;
(function (UpdateUserPoolDomainRequest) {
    /**
     * @internal
     */
    UpdateUserPoolDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserPoolDomainRequest = exports.UpdateUserPoolDomainRequest || (exports.UpdateUserPoolDomainRequest = {}));
var UpdateUserPoolDomainResponse;
(function (UpdateUserPoolDomainResponse) {
    /**
     * @internal
     */
    UpdateUserPoolDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserPoolDomainResponse = exports.UpdateUserPoolDomainResponse || (exports.UpdateUserPoolDomainResponse = {}));
var EnableSoftwareTokenMFAException;
(function (EnableSoftwareTokenMFAException) {
    /**
     * @internal
     */
    EnableSoftwareTokenMFAException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableSoftwareTokenMFAException = exports.EnableSoftwareTokenMFAException || (exports.EnableSoftwareTokenMFAException = {}));
var VerifySoftwareTokenRequest;
(function (VerifySoftwareTokenRequest) {
    /**
     * @internal
     */
    VerifySoftwareTokenRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(VerifySoftwareTokenRequest = exports.VerifySoftwareTokenRequest || (exports.VerifySoftwareTokenRequest = {}));
var VerifySoftwareTokenResponseType;
(function (VerifySoftwareTokenResponseType) {
    VerifySoftwareTokenResponseType["ERROR"] = "ERROR";
    VerifySoftwareTokenResponseType["SUCCESS"] = "SUCCESS";
})(VerifySoftwareTokenResponseType = exports.VerifySoftwareTokenResponseType || (exports.VerifySoftwareTokenResponseType = {}));
var VerifySoftwareTokenResponse;
(function (VerifySoftwareTokenResponse) {
    /**
     * @internal
     */
    VerifySoftwareTokenResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VerifySoftwareTokenResponse = exports.VerifySoftwareTokenResponse || (exports.VerifySoftwareTokenResponse = {}));
var VerifyUserAttributeRequest;
(function (VerifyUserAttributeRequest) {
    /**
     * @internal
     */
    VerifyUserAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccessToken && { AccessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(VerifyUserAttributeRequest = exports.VerifyUserAttributeRequest || (exports.VerifyUserAttributeRequest = {}));
var VerifyUserAttributeResponse;
(function (VerifyUserAttributeResponse) {
    /**
     * @internal
     */
    VerifyUserAttributeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VerifyUserAttributeResponse = exports.VerifyUserAttributeResponse || (exports.VerifyUserAttributeResponse = {}));
//# sourceMappingURL=models_1.js.map