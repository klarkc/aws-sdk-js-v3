import { __assign } from "tslib";
import { AttributeType, UserPoolClientType, } from "./models_0";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateAuthEventFeedbackRequest;
(function (UpdateAuthEventFeedbackRequest) {
    /**
     * @internal
     */
    UpdateAuthEventFeedbackRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Username && { Username: SENSITIVE_STRING })), (obj.FeedbackToken && { FeedbackToken: SENSITIVE_STRING }))); };
})(UpdateAuthEventFeedbackRequest || (UpdateAuthEventFeedbackRequest = {}));
export var UpdateAuthEventFeedbackResponse;
(function (UpdateAuthEventFeedbackResponse) {
    /**
     * @internal
     */
    UpdateAuthEventFeedbackResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAuthEventFeedbackResponse || (UpdateAuthEventFeedbackResponse = {}));
export var UpdateDeviceStatusRequest;
(function (UpdateDeviceStatusRequest) {
    /**
     * @internal
     */
    UpdateDeviceStatusRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(UpdateDeviceStatusRequest || (UpdateDeviceStatusRequest = {}));
export var UpdateDeviceStatusResponse;
(function (UpdateDeviceStatusResponse) {
    /**
     * @internal
     */
    UpdateDeviceStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDeviceStatusResponse || (UpdateDeviceStatusResponse = {}));
export var UpdateGroupRequest;
(function (UpdateGroupRequest) {
    /**
     * @internal
     */
    UpdateGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGroupRequest || (UpdateGroupRequest = {}));
export var UpdateGroupResponse;
(function (UpdateGroupResponse) {
    /**
     * @internal
     */
    UpdateGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGroupResponse || (UpdateGroupResponse = {}));
export var UpdateIdentityProviderRequest;
(function (UpdateIdentityProviderRequest) {
    /**
     * @internal
     */
    UpdateIdentityProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateIdentityProviderRequest || (UpdateIdentityProviderRequest = {}));
export var UpdateIdentityProviderResponse;
(function (UpdateIdentityProviderResponse) {
    /**
     * @internal
     */
    UpdateIdentityProviderResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateIdentityProviderResponse || (UpdateIdentityProviderResponse = {}));
export var UpdateResourceServerRequest;
(function (UpdateResourceServerRequest) {
    /**
     * @internal
     */
    UpdateResourceServerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateResourceServerRequest || (UpdateResourceServerRequest = {}));
export var UpdateResourceServerResponse;
(function (UpdateResourceServerResponse) {
    /**
     * @internal
     */
    UpdateResourceServerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateResourceServerResponse || (UpdateResourceServerResponse = {}));
export var UpdateUserAttributesRequest;
(function (UpdateUserAttributesRequest) {
    /**
     * @internal
     */
    UpdateUserAttributesRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.UserAttributes && {
        UserAttributes: obj.UserAttributes.map(function (item) { return AttributeType.filterSensitiveLog(item); }),
    })), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(UpdateUserAttributesRequest || (UpdateUserAttributesRequest = {}));
export var UpdateUserAttributesResponse;
(function (UpdateUserAttributesResponse) {
    /**
     * @internal
     */
    UpdateUserAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserAttributesResponse || (UpdateUserAttributesResponse = {}));
export var UpdateUserPoolRequest;
(function (UpdateUserPoolRequest) {
    /**
     * @internal
     */
    UpdateUserPoolRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserPoolRequest || (UpdateUserPoolRequest = {}));
export var UpdateUserPoolResponse;
(function (UpdateUserPoolResponse) {
    /**
     * @internal
     */
    UpdateUserPoolResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserPoolResponse || (UpdateUserPoolResponse = {}));
export var UpdateUserPoolClientRequest;
(function (UpdateUserPoolClientRequest) {
    /**
     * @internal
     */
    UpdateUserPoolClientRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ClientId && { ClientId: SENSITIVE_STRING }))); };
})(UpdateUserPoolClientRequest || (UpdateUserPoolClientRequest = {}));
export var UpdateUserPoolClientResponse;
(function (UpdateUserPoolClientResponse) {
    /**
     * @internal
     */
    UpdateUserPoolClientResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.UserPoolClient && { UserPoolClient: UserPoolClientType.filterSensitiveLog(obj.UserPoolClient) }))); };
})(UpdateUserPoolClientResponse || (UpdateUserPoolClientResponse = {}));
export var UpdateUserPoolDomainRequest;
(function (UpdateUserPoolDomainRequest) {
    /**
     * @internal
     */
    UpdateUserPoolDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserPoolDomainRequest || (UpdateUserPoolDomainRequest = {}));
export var UpdateUserPoolDomainResponse;
(function (UpdateUserPoolDomainResponse) {
    /**
     * @internal
     */
    UpdateUserPoolDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserPoolDomainResponse || (UpdateUserPoolDomainResponse = {}));
export var EnableSoftwareTokenMFAException;
(function (EnableSoftwareTokenMFAException) {
    /**
     * @internal
     */
    EnableSoftwareTokenMFAException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableSoftwareTokenMFAException || (EnableSoftwareTokenMFAException = {}));
export var VerifySoftwareTokenRequest;
(function (VerifySoftwareTokenRequest) {
    /**
     * @internal
     */
    VerifySoftwareTokenRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(VerifySoftwareTokenRequest || (VerifySoftwareTokenRequest = {}));
export var VerifySoftwareTokenResponseType;
(function (VerifySoftwareTokenResponseType) {
    VerifySoftwareTokenResponseType["ERROR"] = "ERROR";
    VerifySoftwareTokenResponseType["SUCCESS"] = "SUCCESS";
})(VerifySoftwareTokenResponseType || (VerifySoftwareTokenResponseType = {}));
export var VerifySoftwareTokenResponse;
(function (VerifySoftwareTokenResponse) {
    /**
     * @internal
     */
    VerifySoftwareTokenResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VerifySoftwareTokenResponse || (VerifySoftwareTokenResponse = {}));
export var VerifyUserAttributeRequest;
(function (VerifyUserAttributeRequest) {
    /**
     * @internal
     */
    VerifyUserAttributeRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccessToken && { AccessToken: SENSITIVE_STRING }))); };
})(VerifyUserAttributeRequest || (VerifyUserAttributeRequest = {}));
export var VerifyUserAttributeResponse;
(function (VerifyUserAttributeResponse) {
    /**
     * @internal
     */
    VerifyUserAttributeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VerifyUserAttributeResponse || (VerifyUserAttributeResponse = {}));
//# sourceMappingURL=models_1.js.map