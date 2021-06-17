import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AddCustomAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AddCustomAttributes",
        };
        body = JSON.stringify(serializeAws_json1_1AddCustomAttributesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminAddUserToGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminAddUserToGroup",
        };
        body = JSON.stringify(serializeAws_json1_1AdminAddUserToGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminConfirmSignUpCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminConfirmSignUp",
        };
        body = JSON.stringify(serializeAws_json1_1AdminConfirmSignUpRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminCreateUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminCreateUser",
        };
        body = JSON.stringify(serializeAws_json1_1AdminCreateUserRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminDeleteUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminDeleteUser",
        };
        body = JSON.stringify(serializeAws_json1_1AdminDeleteUserRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminDeleteUserAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminDeleteUserAttributes",
        };
        body = JSON.stringify(serializeAws_json1_1AdminDeleteUserAttributesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminDisableProviderForUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminDisableProviderForUser",
        };
        body = JSON.stringify(serializeAws_json1_1AdminDisableProviderForUserRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminDisableUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminDisableUser",
        };
        body = JSON.stringify(serializeAws_json1_1AdminDisableUserRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminEnableUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminEnableUser",
        };
        body = JSON.stringify(serializeAws_json1_1AdminEnableUserRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminForgetDeviceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminForgetDevice",
        };
        body = JSON.stringify(serializeAws_json1_1AdminForgetDeviceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminGetDeviceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminGetDevice",
        };
        body = JSON.stringify(serializeAws_json1_1AdminGetDeviceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminGetUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminGetUser",
        };
        body = JSON.stringify(serializeAws_json1_1AdminGetUserRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminInitiateAuthCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminInitiateAuth",
        };
        body = JSON.stringify(serializeAws_json1_1AdminInitiateAuthRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminLinkProviderForUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminLinkProviderForUser",
        };
        body = JSON.stringify(serializeAws_json1_1AdminLinkProviderForUserRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminListDevicesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminListDevices",
        };
        body = JSON.stringify(serializeAws_json1_1AdminListDevicesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminListGroupsForUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminListGroupsForUser",
        };
        body = JSON.stringify(serializeAws_json1_1AdminListGroupsForUserRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminListUserAuthEventsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminListUserAuthEvents",
        };
        body = JSON.stringify(serializeAws_json1_1AdminListUserAuthEventsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminRemoveUserFromGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup",
        };
        body = JSON.stringify(serializeAws_json1_1AdminRemoveUserFromGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminResetUserPasswordCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminResetUserPassword",
        };
        body = JSON.stringify(serializeAws_json1_1AdminResetUserPasswordRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminRespondToAuthChallengeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge",
        };
        body = JSON.stringify(serializeAws_json1_1AdminRespondToAuthChallengeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminSetUserMFAPreferenceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminSetUserMFAPreference",
        };
        body = JSON.stringify(serializeAws_json1_1AdminSetUserMFAPreferenceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminSetUserPasswordCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminSetUserPassword",
        };
        body = JSON.stringify(serializeAws_json1_1AdminSetUserPasswordRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminSetUserSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminSetUserSettings",
        };
        body = JSON.stringify(serializeAws_json1_1AdminSetUserSettingsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback",
        };
        body = JSON.stringify(serializeAws_json1_1AdminUpdateAuthEventFeedbackRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminUpdateDeviceStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus",
        };
        body = JSON.stringify(serializeAws_json1_1AdminUpdateDeviceStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminUpdateUserAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminUpdateUserAttributes",
        };
        body = JSON.stringify(serializeAws_json1_1AdminUpdateUserAttributesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AdminUserGlobalSignOutCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AdminUserGlobalSignOut",
        };
        body = JSON.stringify(serializeAws_json1_1AdminUserGlobalSignOutRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AssociateSoftwareTokenCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.AssociateSoftwareToken",
        };
        body = JSON.stringify(serializeAws_json1_1AssociateSoftwareTokenRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ChangePasswordCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ChangePassword",
        };
        body = JSON.stringify(serializeAws_json1_1ChangePasswordRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ConfirmDeviceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ConfirmDevice",
        };
        body = JSON.stringify(serializeAws_json1_1ConfirmDeviceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ConfirmForgotPasswordCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ConfirmForgotPassword",
        };
        body = JSON.stringify(serializeAws_json1_1ConfirmForgotPasswordRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ConfirmSignUpCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ConfirmSignUp",
        };
        body = JSON.stringify(serializeAws_json1_1ConfirmSignUpRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.CreateGroup",
        };
        body = JSON.stringify(serializeAws_json1_1CreateGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateIdentityProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.CreateIdentityProvider",
        };
        body = JSON.stringify(serializeAws_json1_1CreateIdentityProviderRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateResourceServerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.CreateResourceServer",
        };
        body = JSON.stringify(serializeAws_json1_1CreateResourceServerRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateUserImportJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.CreateUserImportJob",
        };
        body = JSON.stringify(serializeAws_json1_1CreateUserImportJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateUserPoolCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.CreateUserPool",
        };
        body = JSON.stringify(serializeAws_json1_1CreateUserPoolRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateUserPoolClientCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.CreateUserPoolClient",
        };
        body = JSON.stringify(serializeAws_json1_1CreateUserPoolClientRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateUserPoolDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.CreateUserPoolDomain",
        };
        body = JSON.stringify(serializeAws_json1_1CreateUserPoolDomainRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.DeleteGroup",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteIdentityProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.DeleteIdentityProvider",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteIdentityProviderRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteResourceServerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.DeleteResourceServer",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteResourceServerRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.DeleteUser",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteUserAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.DeleteUserAttributes",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteUserAttributesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteUserPoolCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.DeleteUserPool",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteUserPoolRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteUserPoolClientCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.DeleteUserPoolClient",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteUserPoolClientRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteUserPoolDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.DeleteUserPoolDomain",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteUserPoolDomainRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeIdentityProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.DescribeIdentityProvider",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeIdentityProviderRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeResourceServerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.DescribeResourceServer",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeResourceServerRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeRiskConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.DescribeRiskConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeRiskConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeUserImportJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.DescribeUserImportJob",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeUserImportJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeUserPoolCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.DescribeUserPool",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeUserPoolRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeUserPoolClientCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.DescribeUserPoolClient",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeUserPoolClientRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeUserPoolDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.DescribeUserPoolDomain",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeUserPoolDomainRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ForgetDeviceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ForgetDevice",
        };
        body = JSON.stringify(serializeAws_json1_1ForgetDeviceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ForgotPasswordCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ForgotPassword",
        };
        body = JSON.stringify(serializeAws_json1_1ForgotPasswordRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetCSVHeaderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.GetCSVHeader",
        };
        body = JSON.stringify(serializeAws_json1_1GetCSVHeaderRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetDeviceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.GetDevice",
        };
        body = JSON.stringify(serializeAws_json1_1GetDeviceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.GetGroup",
        };
        body = JSON.stringify(serializeAws_json1_1GetGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetIdentityProviderByIdentifierCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier",
        };
        body = JSON.stringify(serializeAws_json1_1GetIdentityProviderByIdentifierRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetSigningCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.GetSigningCertificate",
        };
        body = JSON.stringify(serializeAws_json1_1GetSigningCertificateRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetUICustomizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.GetUICustomization",
        };
        body = JSON.stringify(serializeAws_json1_1GetUICustomizationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.GetUser",
        };
        body = JSON.stringify(serializeAws_json1_1GetUserRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetUserAttributeVerificationCodeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode",
        };
        body = JSON.stringify(serializeAws_json1_1GetUserAttributeVerificationCodeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetUserPoolMfaConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.GetUserPoolMfaConfig",
        };
        body = JSON.stringify(serializeAws_json1_1GetUserPoolMfaConfigRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GlobalSignOutCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.GlobalSignOut",
        };
        body = JSON.stringify(serializeAws_json1_1GlobalSignOutRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1InitiateAuthCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.InitiateAuth",
        };
        body = JSON.stringify(serializeAws_json1_1InitiateAuthRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListDevicesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ListDevices",
        };
        body = JSON.stringify(serializeAws_json1_1ListDevicesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ListGroups",
        };
        body = JSON.stringify(serializeAws_json1_1ListGroupsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListIdentityProvidersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ListIdentityProviders",
        };
        body = JSON.stringify(serializeAws_json1_1ListIdentityProvidersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListResourceServersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ListResourceServers",
        };
        body = JSON.stringify(serializeAws_json1_1ListResourceServersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListUserImportJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ListUserImportJobs",
        };
        body = JSON.stringify(serializeAws_json1_1ListUserImportJobsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListUserPoolClientsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ListUserPoolClients",
        };
        body = JSON.stringify(serializeAws_json1_1ListUserPoolClientsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListUserPoolsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ListUserPools",
        };
        body = JSON.stringify(serializeAws_json1_1ListUserPoolsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListUsersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ListUsers",
        };
        body = JSON.stringify(serializeAws_json1_1ListUsersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListUsersInGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ListUsersInGroup",
        };
        body = JSON.stringify(serializeAws_json1_1ListUsersInGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ResendConfirmationCodeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.ResendConfirmationCode",
        };
        body = JSON.stringify(serializeAws_json1_1ResendConfirmationCodeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RespondToAuthChallengeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.RespondToAuthChallenge",
        };
        body = JSON.stringify(serializeAws_json1_1RespondToAuthChallengeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SetRiskConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.SetRiskConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1SetRiskConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SetUICustomizationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.SetUICustomization",
        };
        body = JSON.stringify(serializeAws_json1_1SetUICustomizationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SetUserMFAPreferenceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.SetUserMFAPreference",
        };
        body = JSON.stringify(serializeAws_json1_1SetUserMFAPreferenceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SetUserPoolMfaConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.SetUserPoolMfaConfig",
        };
        body = JSON.stringify(serializeAws_json1_1SetUserPoolMfaConfigRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SetUserSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.SetUserSettings",
        };
        body = JSON.stringify(serializeAws_json1_1SetUserSettingsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SignUpCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.SignUp",
        };
        body = JSON.stringify(serializeAws_json1_1SignUpRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartUserImportJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.StartUserImportJob",
        };
        body = JSON.stringify(serializeAws_json1_1StartUserImportJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopUserImportJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.StopUserImportJob",
        };
        body = JSON.stringify(serializeAws_json1_1StopUserImportJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.TagResource",
        };
        body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateAuthEventFeedbackCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.UpdateAuthEventFeedback",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateAuthEventFeedbackRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateDeviceStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.UpdateDeviceStatus",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateDeviceStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.UpdateGroup",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateIdentityProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.UpdateIdentityProvider",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateIdentityProviderRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateResourceServerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.UpdateResourceServer",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateResourceServerRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateUserAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.UpdateUserAttributes",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateUserAttributesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateUserPoolCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.UpdateUserPool",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateUserPoolRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateUserPoolClientCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.UpdateUserPoolClient",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateUserPoolClientRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateUserPoolDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.UpdateUserPoolDomain",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateUserPoolDomainRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1VerifySoftwareTokenCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.VerifySoftwareToken",
        };
        body = JSON.stringify(serializeAws_json1_1VerifySoftwareTokenRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1VerifyUserAttributeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSCognitoIdentityProviderService.VerifyUserAttribute",
        };
        body = JSON.stringify(serializeAws_json1_1VerifyUserAttributeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AddCustomAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddCustomAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddCustomAttributesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddCustomAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserImportInProgressException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserImportInProgressException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserImportInProgressExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminAddUserToGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminAddUserToGroupCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminAddUserToGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminConfirmSignUpCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminConfirmSignUpCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminConfirmSignUpResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminConfirmSignUpCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0:
                _a = [__assign({}, output)];
                _p = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_p.body = _q.sent(), _p)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 8];
                    case "NotAuthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "TooManyFailedAttemptsException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#TooManyFailedAttemptsException": return [3 /*break*/, 14];
                    case "TooManyRequestsException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 16];
                    case "UnexpectedLambdaException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException": return [3 /*break*/, 18];
                    case "UserLambdaValidationException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException": return [3 /*break*/, 20];
                    case "UserNotFoundException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyFailedAttemptsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 24:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _q.label = 25;
            case 25:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminCreateUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminCreateUserCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminCreateUserResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminCreateUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, parsedBody, message;
    var _u;
    return __generator(this, function (_v) {
        switch (_v.label) {
            case 0:
                _a = [__assign({}, output)];
                _u = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_u.body = _v.sent(), _u)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeDeliveryFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException": return [3 /*break*/, 2];
                    case "InternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 4];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 8];
                    case "InvalidPasswordException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException": return [3 /*break*/, 10];
                    case "InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 12];
                    case "InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 14];
                    case "NotAuthorizedException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 16];
                    case "PreconditionNotMetException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#PreconditionNotMetException": return [3 /*break*/, 18];
                    case "ResourceNotFoundException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 20];
                    case "TooManyRequestsException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 22];
                    case "UnexpectedLambdaException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException": return [3 /*break*/, 24];
                    case "UnsupportedUserStateException": return [3 /*break*/, 26];
                    case "com.amazonaws.cognitoidentityprovider#UnsupportedUserStateException": return [3 /*break*/, 26];
                    case "UserLambdaValidationException": return [3 /*break*/, 28];
                    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException": return [3 /*break*/, 28];
                    case "UsernameExistsException": return [3 /*break*/, 30];
                    case "com.amazonaws.cognitoidentityprovider#UsernameExistsException": return [3 /*break*/, 30];
                    case "UserNotFoundException": return [3 /*break*/, 32];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 32];
                }
                return [3 /*break*/, 34];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedUserStateExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UsernameExistsExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 34:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _v.label = 35;
            case 35:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminDeleteUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminDeleteUserCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminDeleteUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminDeleteUserAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminDeleteUserAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminDeleteUserAttributesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminDeleteUserAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminDisableProviderForUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminDisableProviderForUserCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminDisableProviderForUserResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminDisableProviderForUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AliasExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#AliasExistsException": return [3 /*break*/, 2];
                    case "InternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 6];
                    case "NotAuthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UserNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminDisableUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminDisableUserCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminDisableUserResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminDisableUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminEnableUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminEnableUserCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminEnableUserResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminEnableUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminForgetDeviceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminForgetDeviceCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminForgetDeviceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "NotAuthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UserNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminGetDeviceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminGetDeviceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminGetDeviceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminGetDeviceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "NotAuthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminGetUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminGetUserCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminGetUserResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminGetUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminInitiateAuthCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminInitiateAuthCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminInitiateAuthResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminInitiateAuthCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, parsedBody, message;
    var _t;
    return __generator(this, function (_u) {
        switch (_u.label) {
            case 0:
                _a = [__assign({}, output)];
                _t = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_t.body = _u.sent(), _t)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 8];
                    case "InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 10];
                    case "InvalidUserPoolConfigurationException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException": return [3 /*break*/, 12];
                    case "MFAMethodNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#MFAMethodNotFoundException": return [3 /*break*/, 14];
                    case "NotAuthorizedException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 16];
                    case "PasswordResetRequiredException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 18];
                    case "ResourceNotFoundException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 20];
                    case "TooManyRequestsException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 22];
                    case "UnexpectedLambdaException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException": return [3 /*break*/, 24];
                    case "UserLambdaValidationException": return [3 /*break*/, 26];
                    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException": return [3 /*break*/, 26];
                    case "UserNotConfirmedException": return [3 /*break*/, 28];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 28];
                    case "UserNotFoundException": return [3 /*break*/, 30];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 30];
                }
                return [3 /*break*/, 32];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MFAMethodNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 32:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _u.label = 33;
            case 33:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminLinkProviderForUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminLinkProviderForUserCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminLinkProviderForUserResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminLinkProviderForUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AliasExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#AliasExistsException": return [3 /*break*/, 2];
                    case "InternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 8];
                    case "NotAuthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "TooManyRequestsException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 14];
                    case "UserNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminListDevicesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminListDevicesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminListDevicesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminListDevicesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "NotAuthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminListGroupsForUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminListGroupsForUserCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminListGroupsForUserResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminListGroupsForUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminListUserAuthEventsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminListUserAuthEventsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminListUserAuthEventsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminListUserAuthEventsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 12];
                    case "UserPoolAddOnNotEnabledException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminRemoveUserFromGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminRemoveUserFromGroupCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminRemoveUserFromGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminResetUserPasswordCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminResetUserPasswordCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminResetUserPasswordResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminResetUserPasswordCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, parsedBody, message;
    var _r;
    return __generator(this, function (_s) {
        switch (_s.label) {
            case 0:
                _a = [__assign({}, output)];
                _r = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_r.body = _s.sent(), _r)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 4];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 8];
                    case "InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 10];
                    case "InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 12];
                    case "LimitExceededException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 14];
                    case "NotAuthorizedException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 16];
                    case "ResourceNotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 18];
                    case "TooManyRequestsException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 20];
                    case "UnexpectedLambdaException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException": return [3 /*break*/, 22];
                    case "UserLambdaValidationException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException": return [3 /*break*/, 24];
                    case "UserNotFoundException": return [3 /*break*/, 26];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 26];
                }
                return [3 /*break*/, 28];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 28:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _s.label = 29;
            case 29:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminRespondToAuthChallengeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminRespondToAuthChallengeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminRespondToAuthChallengeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminRespondToAuthChallengeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, parsedBody, message;
    var _y;
    return __generator(this, function (_z) {
        switch (_z.label) {
            case 0:
                _a = [__assign({}, output)];
                _y = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_y.body = _z.sent(), _y)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AliasExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#AliasExistsException": return [3 /*break*/, 2];
                    case "CodeMismatchException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#CodeMismatchException": return [3 /*break*/, 4];
                    case "ExpiredCodeException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException": return [3 /*break*/, 6];
                    case "InternalErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 8];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 10];
                    case "InvalidParameterException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 12];
                    case "InvalidPasswordException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException": return [3 /*break*/, 14];
                    case "InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 16];
                    case "InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 18];
                    case "InvalidUserPoolConfigurationException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException": return [3 /*break*/, 20];
                    case "MFAMethodNotFoundException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#MFAMethodNotFoundException": return [3 /*break*/, 22];
                    case "NotAuthorizedException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 24];
                    case "PasswordResetRequiredException": return [3 /*break*/, 26];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 26];
                    case "ResourceNotFoundException": return [3 /*break*/, 28];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 28];
                    case "SoftwareTokenMFANotFoundException": return [3 /*break*/, 30];
                    case "com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException": return [3 /*break*/, 30];
                    case "TooManyRequestsException": return [3 /*break*/, 32];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 32];
                    case "UnexpectedLambdaException": return [3 /*break*/, 34];
                    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException": return [3 /*break*/, 34];
                    case "UserLambdaValidationException": return [3 /*break*/, 36];
                    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException": return [3 /*break*/, 36];
                    case "UserNotConfirmedException": return [3 /*break*/, 38];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 38];
                    case "UserNotFoundException": return [3 /*break*/, 40];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 40];
                }
                return [3 /*break*/, 42];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MFAMethodNotFoundExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 36:
                _v = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)];
            case 37:
                response = __assign.apply(void 0, [__assign.apply(void 0, _v.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 38:
                _w = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 39:
                response = __assign.apply(void 0, [__assign.apply(void 0, _w.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 40:
                _x = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 41:
                response = __assign.apply(void 0, [__assign.apply(void 0, _x.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 42:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _z.label = 43;
            case 43:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminSetUserMFAPreferenceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminSetUserMFAPreferenceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminSetUserMFAPreferenceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminSetUserMFAPreferenceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "PasswordResetRequiredException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "UserNotConfirmedException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 12];
                    case "UserNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminSetUserPasswordCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminSetUserPasswordCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminSetUserPasswordResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminSetUserPasswordCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidPasswordException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException": return [3 /*break*/, 6];
                    case "NotAuthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UserNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminSetUserSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminSetUserSettingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminSetUserSettingsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminSetUserSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "UserNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminUpdateAuthEventFeedbackResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 12];
                    case "UserPoolAddOnNotEnabledException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminUpdateDeviceStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminUpdateDeviceStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminUpdateDeviceStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminUpdateDeviceStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "NotAuthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UserNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminUpdateUserAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminUpdateUserAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminUpdateUserAttributesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminUpdateUserAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, parsedBody, message;
    var _r;
    return __generator(this, function (_s) {
        switch (_s.label) {
            case 0:
                _a = [__assign({}, output)];
                _r = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_r.body = _s.sent(), _r)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AliasExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#AliasExistsException": return [3 /*break*/, 2];
                    case "InternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 4];
                    case "InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 8];
                    case "InvalidParameterException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 10];
                    case "InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 12];
                    case "InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 14];
                    case "NotAuthorizedException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 16];
                    case "ResourceNotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 18];
                    case "TooManyRequestsException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 20];
                    case "UnexpectedLambdaException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException": return [3 /*break*/, 22];
                    case "UserLambdaValidationException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException": return [3 /*break*/, 24];
                    case "UserNotFoundException": return [3 /*break*/, 26];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 26];
                }
                return [3 /*break*/, 28];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 28:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _s.label = 29;
            case 29:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AdminUserGlobalSignOutCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AdminUserGlobalSignOutCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AdminUserGlobalSignOutResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AdminUserGlobalSignOutCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AssociateSoftwareTokenCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssociateSoftwareTokenCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AssociateSoftwareTokenResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AssociateSoftwareTokenCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 6];
                    case "NotAuthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "SoftwareTokenMFANotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ChangePasswordCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ChangePasswordCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ChangePasswordResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ChangePasswordCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0:
                _a = [__assign({}, output)];
                _o = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_o.body = _p.sent(), _o)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidPasswordException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 8];
                    case "NotAuthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 10];
                    case "PasswordResetRequiredException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 12];
                    case "ResourceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 14];
                    case "TooManyRequestsException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 16];
                    case "UserNotConfirmedException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 18];
                    case "UserNotFoundException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 22:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _p.label = 23;
            case 23:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ConfirmDeviceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ConfirmDeviceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ConfirmDeviceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ConfirmDeviceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, parsedBody, message;
    var _q;
    return __generator(this, function (_r) {
        switch (_r.label) {
            case 0:
                _a = [__assign({}, output)];
                _q = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_q.body = _r.sent(), _q)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidPasswordException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException": return [3 /*break*/, 8];
                    case "InvalidUserPoolConfigurationException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException": return [3 /*break*/, 10];
                    case "NotAuthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 12];
                    case "PasswordResetRequiredException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 14];
                    case "ResourceNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 16];
                    case "TooManyRequestsException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 18];
                    case "UsernameExistsException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#UsernameExistsException": return [3 /*break*/, 20];
                    case "UserNotConfirmedException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 22];
                    case "UserNotFoundException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 24];
                }
                return [3 /*break*/, 26];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UsernameExistsExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 26:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _r.label = 27;
            case 27:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ConfirmForgotPasswordCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ConfirmForgotPasswordCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ConfirmForgotPasswordResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ConfirmForgotPasswordCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, parsedBody, message;
    var _t;
    return __generator(this, function (_u) {
        switch (_u.label) {
            case 0:
                _a = [__assign({}, output)];
                _t = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_t.body = _u.sent(), _t)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeMismatchException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#CodeMismatchException": return [3 /*break*/, 2];
                    case "ExpiredCodeException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException": return [3 /*break*/, 4];
                    case "InternalErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 6];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 8];
                    case "InvalidParameterException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 10];
                    case "InvalidPasswordException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException": return [3 /*break*/, 12];
                    case "LimitExceededException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 14];
                    case "NotAuthorizedException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 16];
                    case "ResourceNotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 18];
                    case "TooManyFailedAttemptsException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#TooManyFailedAttemptsException": return [3 /*break*/, 20];
                    case "TooManyRequestsException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 22];
                    case "UnexpectedLambdaException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException": return [3 /*break*/, 24];
                    case "UserLambdaValidationException": return [3 /*break*/, 26];
                    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException": return [3 /*break*/, 26];
                    case "UserNotConfirmedException": return [3 /*break*/, 28];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 28];
                    case "UserNotFoundException": return [3 /*break*/, 30];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 30];
                }
                return [3 /*break*/, 32];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyFailedAttemptsExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 32:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _u.label = 33;
            case 33:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ConfirmSignUpCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ConfirmSignUpCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ConfirmSignUpResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ConfirmSignUpCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, parsedBody, message;
    var _s;
    return __generator(this, function (_t) {
        switch (_t.label) {
            case 0:
                _a = [__assign({}, output)];
                _s = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_s.body = _t.sent(), _s)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AliasExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#AliasExistsException": return [3 /*break*/, 2];
                    case "CodeMismatchException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#CodeMismatchException": return [3 /*break*/, 4];
                    case "ExpiredCodeException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException": return [3 /*break*/, 6];
                    case "InternalErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 8];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 10];
                    case "InvalidParameterException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 12];
                    case "LimitExceededException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 14];
                    case "NotAuthorizedException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 16];
                    case "ResourceNotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 18];
                    case "TooManyFailedAttemptsException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#TooManyFailedAttemptsException": return [3 /*break*/, 20];
                    case "TooManyRequestsException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 22];
                    case "UnexpectedLambdaException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException": return [3 /*break*/, 24];
                    case "UserLambdaValidationException": return [3 /*break*/, 26];
                    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException": return [3 /*break*/, 26];
                    case "UserNotFoundException": return [3 /*break*/, 28];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 28];
                }
                return [3 /*break*/, 30];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyFailedAttemptsExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 30:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _t.label = 31;
            case 31:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "GroupExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#GroupExistsException": return [3 /*break*/, 2];
                    case "InternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 8];
                    case "NotAuthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "TooManyRequestsException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1GroupExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateIdentityProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateIdentityProviderCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateIdentityProviderResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateIdentityProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DuplicateProviderException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#DuplicateProviderException": return [3 /*break*/, 2];
                    case "InternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 8];
                    case "NotAuthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "TooManyRequestsException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateProviderExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateResourceServerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateResourceServerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateResourceServerResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateResourceServerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 6];
                    case "NotAuthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateUserImportJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateUserImportJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateUserImportJobResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateUserImportJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 6];
                    case "NotAuthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 8];
                    case "PreconditionNotMetException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#PreconditionNotMetException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "TooManyRequestsException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateUserPoolCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateUserPoolCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateUserPoolResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateUserPoolCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _a = [__assign({}, output)];
                _m = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 8];
                    case "InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 10];
                    case "LimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 12];
                    case "NotAuthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 14];
                    case "TooManyRequestsException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 16];
                    case "UserPoolTaggingException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#UserPoolTaggingException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserPoolTaggingExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 20:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _o.label = 21;
            case 21:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateUserPoolClientCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateUserPoolClientCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateUserPoolClientResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateUserPoolClientCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidOAuthFlowException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidOAuthFlowException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 8];
                    case "NotAuthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ScopeDoesNotExistException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#ScopeDoesNotExistException": return [3 /*break*/, 14];
                    case "TooManyRequestsException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOAuthFlowExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ScopeDoesNotExistExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateUserPoolDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateUserPoolDomainCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateUserPoolDomainResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateUserPoolDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 6];
                    case "NotAuthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteGroupCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteIdentityProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteIdentityProviderCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteIdentityProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnsupportedIdentityProviderException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UnsupportedIdentityProviderException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedIdentityProviderExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteResourceServerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteResourceServerCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteResourceServerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteUserCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "PasswordResetRequiredException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UserNotConfirmedException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 14];
                    case "UserNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteUserAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteUserAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteUserAttributesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteUserAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "PasswordResetRequiredException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UserNotConfirmedException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 14];
                    case "UserNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteUserPoolCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteUserPoolCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteUserPoolCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserImportInProgressException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserImportInProgressException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserImportInProgressExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteUserPoolClientCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteUserPoolClientCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteUserPoolClientCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteUserPoolDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteUserPoolDomainCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteUserPoolDomainResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteUserPoolDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeIdentityProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeIdentityProviderCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeIdentityProviderResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeIdentityProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeResourceServerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeResourceServerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeResourceServerResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeResourceServerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeRiskConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeRiskConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeRiskConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeRiskConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserPoolAddOnNotEnabledException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeUserImportJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeUserImportJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeUserImportJobResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeUserImportJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeUserPoolCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeUserPoolCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeUserPoolResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeUserPoolCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserPoolTaggingException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserPoolTaggingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserPoolTaggingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeUserPoolClientCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeUserPoolClientCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeUserPoolClientResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeUserPoolClientCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeUserPoolDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeUserPoolDomainCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeUserPoolDomainResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeUserPoolDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ForgetDeviceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ForgetDeviceCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ForgetDeviceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _a = [__assign({}, output)];
                _m = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "NotAuthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 8];
                    case "PasswordResetRequiredException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "TooManyRequestsException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 14];
                    case "UserNotConfirmedException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 16];
                    case "UserNotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 20:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _o.label = 21;
            case 21:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ForgotPasswordCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ForgotPasswordCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ForgotPasswordResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ForgotPasswordCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, parsedBody, message;
    var _t;
    return __generator(this, function (_u) {
        switch (_u.label) {
            case 0:
                _a = [__assign({}, output)];
                _t = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_t.body = _u.sent(), _t)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeDeliveryFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException": return [3 /*break*/, 2];
                    case "InternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 4];
                    case "InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 8];
                    case "InvalidParameterException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 10];
                    case "InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 12];
                    case "InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 14];
                    case "LimitExceededException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 16];
                    case "NotAuthorizedException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 18];
                    case "ResourceNotFoundException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 20];
                    case "TooManyRequestsException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 22];
                    case "UnexpectedLambdaException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException": return [3 /*break*/, 24];
                    case "UserLambdaValidationException": return [3 /*break*/, 26];
                    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException": return [3 /*break*/, 26];
                    case "UserNotConfirmedException": return [3 /*break*/, 28];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 28];
                    case "UserNotFoundException": return [3 /*break*/, 30];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 30];
                }
                return [3 /*break*/, 32];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 32:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _u.label = 33;
            case 33:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetCSVHeaderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetCSVHeaderCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetCSVHeaderResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetCSVHeaderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetDeviceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetDeviceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetDeviceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetDeviceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _a = [__assign({}, output)];
                _m = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "NotAuthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 8];
                    case "PasswordResetRequiredException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "TooManyRequestsException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 14];
                    case "UserNotConfirmedException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 16];
                    case "UserNotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 20:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _o.label = 21;
            case 21:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetIdentityProviderByIdentifierCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetIdentityProviderByIdentifierCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetIdentityProviderByIdentifierResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetIdentityProviderByIdentifierCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetSigningCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetSigningCertificateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetSigningCertificateResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetSigningCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetUICustomizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetUICustomizationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetUICustomizationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetUICustomizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetUserCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetUserResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "PasswordResetRequiredException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UserNotConfirmedException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 14];
                    case "UserNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetUserAttributeVerificationCodeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetUserAttributeVerificationCodeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetUserAttributeVerificationCodeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetUserAttributeVerificationCodeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, parsedBody, message;
    var _u;
    return __generator(this, function (_v) {
        switch (_v.label) {
            case 0:
                _a = [__assign({}, output)];
                _u = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_u.body = _v.sent(), _u)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeDeliveryFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException": return [3 /*break*/, 2];
                    case "InternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 4];
                    case "InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 8];
                    case "InvalidParameterException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 10];
                    case "InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 12];
                    case "InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 14];
                    case "LimitExceededException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 16];
                    case "NotAuthorizedException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 18];
                    case "PasswordResetRequiredException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 20];
                    case "ResourceNotFoundException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 22];
                    case "TooManyRequestsException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 24];
                    case "UnexpectedLambdaException": return [3 /*break*/, 26];
                    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException": return [3 /*break*/, 26];
                    case "UserLambdaValidationException": return [3 /*break*/, 28];
                    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException": return [3 /*break*/, 28];
                    case "UserNotConfirmedException": return [3 /*break*/, 30];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 30];
                    case "UserNotFoundException": return [3 /*break*/, 32];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 32];
                }
                return [3 /*break*/, 34];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 34:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _v.label = 35;
            case 35:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetUserPoolMfaConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetUserPoolMfaConfigCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetUserPoolMfaConfigResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetUserPoolMfaConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GlobalSignOutCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GlobalSignOutCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GlobalSignOutResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GlobalSignOutCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "PasswordResetRequiredException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UserNotConfirmedException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1InitiateAuthCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1InitiateAuthCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1InitiateAuthResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1InitiateAuthCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, parsedBody, message;
    var _s;
    return __generator(this, function (_t) {
        switch (_t.label) {
            case 0:
                _a = [__assign({}, output)];
                _s = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_s.body = _t.sent(), _s)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 8];
                    case "InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 10];
                    case "InvalidUserPoolConfigurationException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException": return [3 /*break*/, 12];
                    case "NotAuthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 14];
                    case "PasswordResetRequiredException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 16];
                    case "ResourceNotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 18];
                    case "TooManyRequestsException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 20];
                    case "UnexpectedLambdaException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException": return [3 /*break*/, 22];
                    case "UserLambdaValidationException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException": return [3 /*break*/, 24];
                    case "UserNotConfirmedException": return [3 /*break*/, 26];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 26];
                    case "UserNotFoundException": return [3 /*break*/, 28];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 28];
                }
                return [3 /*break*/, 30];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 30:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _t.label = 31;
            case 31:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListDevicesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListDevicesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListDevicesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListDevicesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _a = [__assign({}, output)];
                _m = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "NotAuthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 8];
                    case "PasswordResetRequiredException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "TooManyRequestsException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 14];
                    case "UserNotConfirmedException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 16];
                    case "UserNotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 20:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _o.label = 21;
            case 21:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListGroupsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListIdentityProvidersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListIdentityProvidersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListIdentityProvidersResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListIdentityProvidersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListResourceServersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListResourceServersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListResourceServersResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListResourceServersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListTagsForResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListUserImportJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListUserImportJobsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListUserImportJobsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListUserImportJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListUserPoolClientsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListUserPoolClientsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListUserPoolClientsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListUserPoolClientsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListUserPoolsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListUserPoolsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListUserPoolsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListUserPoolsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListUsersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListUsersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListUsersResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListUsersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListUsersInGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListUsersInGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListUsersInGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListUsersInGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ResendConfirmationCodeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ResendConfirmationCodeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ResendConfirmationCodeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ResendConfirmationCodeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, parsedBody, message;
    var _s;
    return __generator(this, function (_t) {
        switch (_t.label) {
            case 0:
                _a = [__assign({}, output)];
                _s = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_s.body = _t.sent(), _s)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeDeliveryFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException": return [3 /*break*/, 2];
                    case "InternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 4];
                    case "InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 8];
                    case "InvalidParameterException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 10];
                    case "InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 12];
                    case "InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 14];
                    case "LimitExceededException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 16];
                    case "NotAuthorizedException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 18];
                    case "ResourceNotFoundException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 20];
                    case "TooManyRequestsException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 22];
                    case "UnexpectedLambdaException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException": return [3 /*break*/, 24];
                    case "UserLambdaValidationException": return [3 /*break*/, 26];
                    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException": return [3 /*break*/, 26];
                    case "UserNotFoundException": return [3 /*break*/, 28];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 28];
                }
                return [3 /*break*/, 30];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 30:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _t.label = 31;
            case 31:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1RespondToAuthChallengeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RespondToAuthChallengeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RespondToAuthChallengeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RespondToAuthChallengeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, parsedBody, message;
    var _y;
    return __generator(this, function (_z) {
        switch (_z.label) {
            case 0:
                _a = [__assign({}, output)];
                _y = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_y.body = _z.sent(), _y)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AliasExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#AliasExistsException": return [3 /*break*/, 2];
                    case "CodeMismatchException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#CodeMismatchException": return [3 /*break*/, 4];
                    case "ExpiredCodeException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException": return [3 /*break*/, 6];
                    case "InternalErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 8];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 10];
                    case "InvalidParameterException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 12];
                    case "InvalidPasswordException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException": return [3 /*break*/, 14];
                    case "InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 16];
                    case "InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 18];
                    case "InvalidUserPoolConfigurationException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException": return [3 /*break*/, 20];
                    case "MFAMethodNotFoundException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#MFAMethodNotFoundException": return [3 /*break*/, 22];
                    case "NotAuthorizedException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 24];
                    case "PasswordResetRequiredException": return [3 /*break*/, 26];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 26];
                    case "ResourceNotFoundException": return [3 /*break*/, 28];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 28];
                    case "SoftwareTokenMFANotFoundException": return [3 /*break*/, 30];
                    case "com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException": return [3 /*break*/, 30];
                    case "TooManyRequestsException": return [3 /*break*/, 32];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 32];
                    case "UnexpectedLambdaException": return [3 /*break*/, 34];
                    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException": return [3 /*break*/, 34];
                    case "UserLambdaValidationException": return [3 /*break*/, 36];
                    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException": return [3 /*break*/, 36];
                    case "UserNotConfirmedException": return [3 /*break*/, 38];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 38];
                    case "UserNotFoundException": return [3 /*break*/, 40];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 40];
                }
                return [3 /*break*/, 42];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MFAMethodNotFoundExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 36:
                _v = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)];
            case 37:
                response = __assign.apply(void 0, [__assign.apply(void 0, _v.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 38:
                _w = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 39:
                response = __assign.apply(void 0, [__assign.apply(void 0, _w.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 40:
                _x = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 41:
                response = __assign.apply(void 0, [__assign.apply(void 0, _x.concat([(_z.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 43];
            case 42:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _z.label = 43;
            case 43:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1SetRiskConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SetRiskConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SetRiskConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SetRiskConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeDeliveryFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException": return [3 /*break*/, 2];
                    case "InternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 4];
                    case "InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 8];
                    case "NotAuthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "TooManyRequestsException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 14];
                    case "UserPoolAddOnNotEnabledException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1SetUICustomizationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SetUICustomizationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SetUICustomizationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SetUICustomizationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1SetUserMFAPreferenceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SetUserMFAPreferenceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SetUserMFAPreferenceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SetUserMFAPreferenceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "PasswordResetRequiredException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "UserNotConfirmedException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 12];
                    case "UserNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1SetUserPoolMfaConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SetUserPoolMfaConfigCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SetUserPoolMfaConfigResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SetUserPoolMfaConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 8];
                    case "NotAuthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "TooManyRequestsException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1SetUserSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SetUserSettingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SetUserSettingsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SetUserSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "PasswordResetRequiredException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "UserNotConfirmedException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 12];
                    case "UserNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1SignUpCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SignUpCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SignUpResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SignUpCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, parsedBody, message;
    var _s;
    return __generator(this, function (_t) {
        switch (_t.label) {
            case 0:
                _a = [__assign({}, output)];
                _s = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_s.body = _t.sent(), _s)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeDeliveryFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException": return [3 /*break*/, 2];
                    case "InternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 4];
                    case "InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 8];
                    case "InvalidParameterException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 10];
                    case "InvalidPasswordException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException": return [3 /*break*/, 12];
                    case "InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 14];
                    case "InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 16];
                    case "NotAuthorizedException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 18];
                    case "ResourceNotFoundException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 20];
                    case "TooManyRequestsException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 22];
                    case "UnexpectedLambdaException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException": return [3 /*break*/, 24];
                    case "UserLambdaValidationException": return [3 /*break*/, 26];
                    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException": return [3 /*break*/, 26];
                    case "UsernameExistsException": return [3 /*break*/, 28];
                    case "com.amazonaws.cognitoidentityprovider#UsernameExistsException": return [3 /*break*/, 28];
                }
                return [3 /*break*/, 30];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UsernameExistsExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 30:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _t.label = 31;
            case 31:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StartUserImportJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartUserImportJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartUserImportJobResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartUserImportJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "PreconditionNotMetException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#PreconditionNotMetException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StopUserImportJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopUserImportJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StopUserImportJobResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StopUserImportJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "PreconditionNotMetException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#PreconditionNotMetException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1TagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1TagResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UntagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UntagResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateAuthEventFeedbackCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateAuthEventFeedbackCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateAuthEventFeedbackResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateAuthEventFeedbackCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UserNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 12];
                    case "UserPoolAddOnNotEnabledException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateDeviceStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateDeviceStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateDeviceStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateDeviceStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _a = [__assign({}, output)];
                _m = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException": return [3 /*break*/, 6];
                    case "NotAuthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 8];
                    case "PasswordResetRequiredException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "TooManyRequestsException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 14];
                    case "UserNotConfirmedException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 16];
                    case "UserNotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 20:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _o.label = 21;
            case 21:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateIdentityProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateIdentityProviderCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateIdentityProviderResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateIdentityProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnsupportedIdentityProviderException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#UnsupportedIdentityProviderException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedIdentityProviderExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateResourceServerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateResourceServerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateResourceServerResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateResourceServerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateUserAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateUserAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateUserAttributesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateUserAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, parsedBody, message;
    var _w;
    return __generator(this, function (_x) {
        switch (_x.label) {
            case 0:
                _a = [__assign({}, output)];
                _w = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_w.body = _x.sent(), _w)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AliasExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#AliasExistsException": return [3 /*break*/, 2];
                    case "CodeDeliveryFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException": return [3 /*break*/, 4];
                    case "CodeMismatchException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#CodeMismatchException": return [3 /*break*/, 6];
                    case "ExpiredCodeException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException": return [3 /*break*/, 8];
                    case "InternalErrorException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 10];
                    case "InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 12];
                    case "InvalidLambdaResponseException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException": return [3 /*break*/, 14];
                    case "InvalidParameterException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 16];
                    case "InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 18];
                    case "InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 20];
                    case "NotAuthorizedException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 22];
                    case "PasswordResetRequiredException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 24];
                    case "ResourceNotFoundException": return [3 /*break*/, 26];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 26];
                    case "TooManyRequestsException": return [3 /*break*/, 28];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 28];
                    case "UnexpectedLambdaException": return [3 /*break*/, 30];
                    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException": return [3 /*break*/, 30];
                    case "UserLambdaValidationException": return [3 /*break*/, 32];
                    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException": return [3 /*break*/, 32];
                    case "UserNotConfirmedException": return [3 /*break*/, 34];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 34];
                    case "UserNotFoundException": return [3 /*break*/, 36];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 36];
                }
                return [3 /*break*/, 38];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 36:
                _v = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 37:
                response = __assign.apply(void 0, [__assign.apply(void 0, _v.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 38:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _x.label = 39;
            case 39:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateUserPoolCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateUserPoolCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateUserPoolResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateUserPoolCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0:
                _a = [__assign({}, output)];
                _p = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_p.body = _q.sent(), _p)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 4];
                    case "InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 8];
                    case "InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException": return [3 /*break*/, 10];
                    case "InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException": return [3 /*break*/, 12];
                    case "NotAuthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 14];
                    case "ResourceNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 16];
                    case "TooManyRequestsException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 18];
                    case "UserImportInProgressException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#UserImportInProgressException": return [3 /*break*/, 20];
                    case "UserPoolTaggingException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#UserPoolTaggingException": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserImportInProgressExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserPoolTaggingExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 24:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _q.label = 25;
            case 25:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateUserPoolClientCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateUserPoolClientCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateUserPoolClientResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateUserPoolClientCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 4];
                    case "InvalidOAuthFlowException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InvalidOAuthFlowException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 8];
                    case "NotAuthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ScopeDoesNotExistException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#ScopeDoesNotExistException": return [3 /*break*/, 14];
                    case "TooManyRequestsException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOAuthFlowExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ScopeDoesNotExistExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateUserPoolDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateUserPoolDomainCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateUserPoolDomainResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateUserPoolDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1VerifySoftwareTokenCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1VerifySoftwareTokenCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1VerifySoftwareTokenResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1VerifySoftwareTokenCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, parsedBody, message;
    var _q;
    return __generator(this, function (_r) {
        switch (_r.label) {
            case 0:
                _a = [__assign({}, output)];
                _q = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_q.body = _r.sent(), _q)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeMismatchException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#CodeMismatchException": return [3 /*break*/, 2];
                    case "EnableSoftwareTokenMFAException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#EnableSoftwareTokenMFAException": return [3 /*break*/, 4];
                    case "InternalErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 8];
                    case "InvalidUserPoolConfigurationException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException": return [3 /*break*/, 10];
                    case "NotAuthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 12];
                    case "PasswordResetRequiredException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 14];
                    case "ResourceNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 16];
                    case "SoftwareTokenMFANotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException": return [3 /*break*/, 18];
                    case "TooManyRequestsException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 20];
                    case "UserNotConfirmedException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 22];
                    case "UserNotFoundException": return [3 /*break*/, 24];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 24];
                }
                return [3 /*break*/, 26];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1EnableSoftwareTokenMFAExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 26:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _r.label = 27;
            case 27:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1VerifyUserAttributeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1VerifyUserAttributeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1VerifyUserAttributeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1VerifyUserAttributeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0:
                _a = [__assign({}, output)];
                _p = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_p.body = _q.sent(), _p)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeMismatchException": return [3 /*break*/, 2];
                    case "com.amazonaws.cognitoidentityprovider#CodeMismatchException": return [3 /*break*/, 2];
                    case "ExpiredCodeException": return [3 /*break*/, 4];
                    case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException": return [3 /*break*/, 4];
                    case "InternalErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.cognitoidentityprovider#InternalErrorException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.cognitoidentityprovider#LimitExceededException": return [3 /*break*/, 10];
                    case "NotAuthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException": return [3 /*break*/, 12];
                    case "PasswordResetRequiredException": return [3 /*break*/, 14];
                    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException": return [3 /*break*/, 14];
                    case "ResourceNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException": return [3 /*break*/, 16];
                    case "TooManyRequestsException": return [3 /*break*/, 18];
                    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException": return [3 /*break*/, 18];
                    case "UserNotConfirmedException": return [3 /*break*/, 20];
                    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException": return [3 /*break*/, 20];
                    case "UserNotFoundException": return [3 /*break*/, 22];
                    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 24:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _q.label = 25;
            case 25:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_json1_1AliasExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1AliasExistsException(body, context);
        contents = __assign({ name: "AliasExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CodeDeliveryFailureExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CodeDeliveryFailureException(body, context);
        contents = __assign({ name: "CodeDeliveryFailureException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CodeMismatchExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CodeMismatchException(body, context);
        contents = __assign({ name: "CodeMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ConcurrentModificationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
        contents = __assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DuplicateProviderExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DuplicateProviderException(body, context);
        contents = __assign({ name: "DuplicateProviderException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1EnableSoftwareTokenMFAExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1EnableSoftwareTokenMFAException(body, context);
        contents = __assign({ name: "EnableSoftwareTokenMFAException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ExpiredCodeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ExpiredCodeException(body, context);
        contents = __assign({ name: "ExpiredCodeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1GroupExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1GroupExistsException(body, context);
        contents = __assign({ name: "GroupExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InternalErrorExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InternalErrorException(body, context);
        contents = __assign({ name: "InternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidEmailRoleAccessPolicyException(body, context);
        contents = __assign({ name: "InvalidEmailRoleAccessPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidLambdaResponseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidLambdaResponseException(body, context);
        contents = __assign({ name: "InvalidLambdaResponseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidOAuthFlowExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidOAuthFlowException(body, context);
        contents = __assign({ name: "InvalidOAuthFlowException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidParameterExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
        contents = __assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidPasswordExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidPasswordException(body, context);
        contents = __assign({ name: "InvalidPasswordException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidSmsRoleAccessPolicyException(body, context);
        contents = __assign({ name: "InvalidSmsRoleAccessPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidSmsRoleTrustRelationshipException(body, context);
        contents = __assign({ name: "InvalidSmsRoleTrustRelationshipException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidUserPoolConfigurationException(body, context);
        contents = __assign({ name: "InvalidUserPoolConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1LimitExceededException(body, context);
        contents = __assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1MFAMethodNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1MFAMethodNotFoundException(body, context);
        contents = __assign({ name: "MFAMethodNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NotAuthorizedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NotAuthorizedException(body, context);
        contents = __assign({ name: "NotAuthorizedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1PasswordResetRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1PasswordResetRequiredException(body, context);
        contents = __assign({ name: "PasswordResetRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1PreconditionNotMetExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1PreconditionNotMetException(body, context);
        contents = __assign({ name: "PreconditionNotMetException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
        contents = __assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ScopeDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ScopeDoesNotExistException(body, context);
        contents = __assign({ name: "ScopeDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1SoftwareTokenMFANotFoundException(body, context);
        contents = __assign({ name: "SoftwareTokenMFANotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TooManyFailedAttemptsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TooManyFailedAttemptsException(body, context);
        contents = __assign({ name: "TooManyFailedAttemptsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TooManyRequestsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
        contents = __assign({ name: "TooManyRequestsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnexpectedLambdaExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnexpectedLambdaException(body, context);
        contents = __assign({ name: "UnexpectedLambdaException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnsupportedIdentityProviderExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnsupportedIdentityProviderException(body, context);
        contents = __assign({ name: "UnsupportedIdentityProviderException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnsupportedUserStateExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnsupportedUserStateException(body, context);
        contents = __assign({ name: "UnsupportedUserStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UserImportInProgressExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UserImportInProgressException(body, context);
        contents = __assign({ name: "UserImportInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UserLambdaValidationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UserLambdaValidationException(body, context);
        contents = __assign({ name: "UserLambdaValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UsernameExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UsernameExistsException(body, context);
        contents = __assign({ name: "UsernameExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UserNotConfirmedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UserNotConfirmedException(body, context);
        contents = __assign({ name: "UserNotConfirmedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UserNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UserNotFoundException(body, context);
        contents = __assign({ name: "UserNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UserPoolAddOnNotEnabledException(body, context);
        contents = __assign({ name: "UserPoolAddOnNotEnabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UserPoolTaggingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UserPoolTaggingException(body, context);
        contents = __assign({ name: "UserPoolTaggingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AccountRecoverySettingType = function (input, context) {
    return __assign({}, (input.RecoveryMechanisms !== undefined &&
        input.RecoveryMechanisms !== null && {
        RecoveryMechanisms: serializeAws_json1_1RecoveryMechanismsType(input.RecoveryMechanisms, context),
    }));
};
var serializeAws_json1_1AccountTakeoverActionsType = function (input, context) {
    return __assign(__assign(__assign({}, (input.HighAction !== undefined &&
        input.HighAction !== null && {
        HighAction: serializeAws_json1_1AccountTakeoverActionType(input.HighAction, context),
    })), (input.LowAction !== undefined &&
        input.LowAction !== null && {
        LowAction: serializeAws_json1_1AccountTakeoverActionType(input.LowAction, context),
    })), (input.MediumAction !== undefined &&
        input.MediumAction !== null && {
        MediumAction: serializeAws_json1_1AccountTakeoverActionType(input.MediumAction, context),
    }));
};
var serializeAws_json1_1AccountTakeoverActionType = function (input, context) {
    return __assign(__assign({}, (input.EventAction !== undefined && input.EventAction !== null && { EventAction: input.EventAction })), (input.Notify !== undefined && input.Notify !== null && { Notify: input.Notify }));
};
var serializeAws_json1_1AccountTakeoverRiskConfigurationType = function (input, context) {
    return __assign(__assign({}, (input.Actions !== undefined &&
        input.Actions !== null && { Actions: serializeAws_json1_1AccountTakeoverActionsType(input.Actions, context) })), (input.NotifyConfiguration !== undefined &&
        input.NotifyConfiguration !== null && {
        NotifyConfiguration: serializeAws_json1_1NotifyConfigurationType(input.NotifyConfiguration, context),
    }));
};
var serializeAws_json1_1AddCustomAttributesRequest = function (input, context) {
    return __assign(__assign({}, (input.CustomAttributes !== undefined &&
        input.CustomAttributes !== null && {
        CustomAttributes: serializeAws_json1_1CustomAttributesListType(input.CustomAttributes, context),
    })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1AdminAddUserToGroupRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminConfirmSignUpRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ClientMetadata !== undefined &&
        input.ClientMetadata !== null && {
        ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
    })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminCreateUserConfigType = function (input, context) {
    return __assign(__assign(__assign({}, (input.AllowAdminCreateUserOnly !== undefined &&
        input.AllowAdminCreateUserOnly !== null && { AllowAdminCreateUserOnly: input.AllowAdminCreateUserOnly })), (input.InviteMessageTemplate !== undefined &&
        input.InviteMessageTemplate !== null && {
        InviteMessageTemplate: serializeAws_json1_1MessageTemplateType(input.InviteMessageTemplate, context),
    })), (input.UnusedAccountValidityDays !== undefined &&
        input.UnusedAccountValidityDays !== null && { UnusedAccountValidityDays: input.UnusedAccountValidityDays }));
};
var serializeAws_json1_1AdminCreateUserRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ClientMetadata !== undefined &&
        input.ClientMetadata !== null && {
        ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
    })), (input.DesiredDeliveryMediums !== undefined &&
        input.DesiredDeliveryMediums !== null && {
        DesiredDeliveryMediums: serializeAws_json1_1DeliveryMediumListType(input.DesiredDeliveryMediums, context),
    })), (input.ForceAliasCreation !== undefined &&
        input.ForceAliasCreation !== null && { ForceAliasCreation: input.ForceAliasCreation })), (input.MessageAction !== undefined && input.MessageAction !== null && { MessageAction: input.MessageAction })), (input.TemporaryPassword !== undefined &&
        input.TemporaryPassword !== null && { TemporaryPassword: input.TemporaryPassword })), (input.UserAttributes !== undefined &&
        input.UserAttributes !== null && {
        UserAttributes: serializeAws_json1_1AttributeListType(input.UserAttributes, context),
    })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username })), (input.ValidationData !== undefined &&
        input.ValidationData !== null && {
        ValidationData: serializeAws_json1_1AttributeListType(input.ValidationData, context),
    }));
};
var serializeAws_json1_1AdminDeleteUserAttributesRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.UserAttributeNames !== undefined &&
        input.UserAttributeNames !== null && {
        UserAttributeNames: serializeAws_json1_1AttributeNameListType(input.UserAttributeNames, context),
    })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminDeleteUserRequest = function (input, context) {
    return __assign(__assign({}, (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminDisableProviderForUserRequest = function (input, context) {
    return __assign(__assign({}, (input.User !== undefined &&
        input.User !== null && { User: serializeAws_json1_1ProviderUserIdentifierType(input.User, context) })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1AdminDisableUserRequest = function (input, context) {
    return __assign(__assign({}, (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminEnableUserRequest = function (input, context) {
    return __assign(__assign({}, (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminForgetDeviceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.DeviceKey !== undefined && input.DeviceKey !== null && { DeviceKey: input.DeviceKey })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminGetDeviceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.DeviceKey !== undefined && input.DeviceKey !== null && { DeviceKey: input.DeviceKey })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminGetUserRequest = function (input, context) {
    return __assign(__assign({}, (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminInitiateAuthRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AnalyticsMetadata !== undefined &&
        input.AnalyticsMetadata !== null && {
        AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
    })), (input.AuthFlow !== undefined && input.AuthFlow !== null && { AuthFlow: input.AuthFlow })), (input.AuthParameters !== undefined &&
        input.AuthParameters !== null && {
        AuthParameters: serializeAws_json1_1AuthParametersType(input.AuthParameters, context),
    })), (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.ClientMetadata !== undefined &&
        input.ClientMetadata !== null && {
        ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
    })), (input.ContextData !== undefined &&
        input.ContextData !== null && { ContextData: serializeAws_json1_1ContextDataType(input.ContextData, context) })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1AdminLinkProviderForUserRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.DestinationUser !== undefined &&
        input.DestinationUser !== null && {
        DestinationUser: serializeAws_json1_1ProviderUserIdentifierType(input.DestinationUser, context),
    })), (input.SourceUser !== undefined &&
        input.SourceUser !== null && {
        SourceUser: serializeAws_json1_1ProviderUserIdentifierType(input.SourceUser, context),
    })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1AdminListDevicesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.PaginationToken !== undefined &&
        input.PaginationToken !== null && { PaginationToken: input.PaginationToken })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminListGroupsForUserRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminListUserAuthEventsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminRemoveUserFromGroupRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminResetUserPasswordRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ClientMetadata !== undefined &&
        input.ClientMetadata !== null && {
        ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
    })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminRespondToAuthChallengeRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AnalyticsMetadata !== undefined &&
        input.AnalyticsMetadata !== null && {
        AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
    })), (input.ChallengeName !== undefined && input.ChallengeName !== null && { ChallengeName: input.ChallengeName })), (input.ChallengeResponses !== undefined &&
        input.ChallengeResponses !== null && {
        ChallengeResponses: serializeAws_json1_1ChallengeResponsesType(input.ChallengeResponses, context),
    })), (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.ClientMetadata !== undefined &&
        input.ClientMetadata !== null && {
        ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
    })), (input.ContextData !== undefined &&
        input.ContextData !== null && { ContextData: serializeAws_json1_1ContextDataType(input.ContextData, context) })), (input.Session !== undefined && input.Session !== null && { Session: input.Session })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1AdminSetUserMFAPreferenceRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.SMSMfaSettings !== undefined &&
        input.SMSMfaSettings !== null && {
        SMSMfaSettings: serializeAws_json1_1SMSMfaSettingsType(input.SMSMfaSettings, context),
    })), (input.SoftwareTokenMfaSettings !== undefined &&
        input.SoftwareTokenMfaSettings !== null && {
        SoftwareTokenMfaSettings: serializeAws_json1_1SoftwareTokenMfaSettingsType(input.SoftwareTokenMfaSettings, context),
    })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminSetUserPasswordRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.Permanent !== undefined && input.Permanent !== null && { Permanent: input.Permanent })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminSetUserSettingsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.MFAOptions !== undefined &&
        input.MFAOptions !== null && { MFAOptions: serializeAws_json1_1MFAOptionListType(input.MFAOptions, context) })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminUpdateAuthEventFeedbackRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.EventId !== undefined && input.EventId !== null && { EventId: input.EventId })), (input.FeedbackValue !== undefined && input.FeedbackValue !== null && { FeedbackValue: input.FeedbackValue })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminUpdateDeviceStatusRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DeviceKey !== undefined && input.DeviceKey !== null && { DeviceKey: input.DeviceKey })), (input.DeviceRememberedStatus !== undefined &&
        input.DeviceRememberedStatus !== null && { DeviceRememberedStatus: input.DeviceRememberedStatus })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminUpdateUserAttributesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ClientMetadata !== undefined &&
        input.ClientMetadata !== null && {
        ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
    })), (input.UserAttributes !== undefined &&
        input.UserAttributes !== null && {
        UserAttributes: serializeAws_json1_1AttributeListType(input.UserAttributes, context),
    })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AdminUserGlobalSignOutRequest = function (input, context) {
    return __assign(__assign({}, (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1AliasAttributesListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1AnalyticsConfigurationType = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ApplicationArn !== undefined &&
        input.ApplicationArn !== null && { ApplicationArn: input.ApplicationArn })), (input.ApplicationId !== undefined && input.ApplicationId !== null && { ApplicationId: input.ApplicationId })), (input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.UserDataShared !== undefined &&
        input.UserDataShared !== null && { UserDataShared: input.UserDataShared }));
};
var serializeAws_json1_1AnalyticsMetadataType = function (input, context) {
    return __assign({}, (input.AnalyticsEndpointId !== undefined &&
        input.AnalyticsEndpointId !== null && { AnalyticsEndpointId: input.AnalyticsEndpointId }));
};
var serializeAws_json1_1AssociateSoftwareTokenRequest = function (input, context) {
    return __assign(__assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken })), (input.Session !== undefined && input.Session !== null && { Session: input.Session }));
};
var serializeAws_json1_1AttributeListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AttributeType(entry, context);
    });
};
var serializeAws_json1_1AttributeMappingType = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1AttributeNameListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1AttributeType = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1AuthParametersType = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1BlockedIPRangeListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1CallbackURLsListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ChallengeResponsesType = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1ChangePasswordRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken })), (input.PreviousPassword !== undefined &&
        input.PreviousPassword !== null && { PreviousPassword: input.PreviousPassword })), (input.ProposedPassword !== undefined &&
        input.ProposedPassword !== null && { ProposedPassword: input.ProposedPassword }));
};
var serializeAws_json1_1ClientMetadataType = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1ClientPermissionListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1CompromisedCredentialsActionsType = function (input, context) {
    return __assign({}, (input.EventAction !== undefined && input.EventAction !== null && { EventAction: input.EventAction }));
};
var serializeAws_json1_1CompromisedCredentialsRiskConfigurationType = function (input, context) {
    return __assign(__assign({}, (input.Actions !== undefined &&
        input.Actions !== null && {
        Actions: serializeAws_json1_1CompromisedCredentialsActionsType(input.Actions, context),
    })), (input.EventFilter !== undefined &&
        input.EventFilter !== null && { EventFilter: serializeAws_json1_1EventFiltersType(input.EventFilter, context) }));
};
var serializeAws_json1_1ConfirmDeviceRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken })), (input.DeviceKey !== undefined && input.DeviceKey !== null && { DeviceKey: input.DeviceKey })), (input.DeviceName !== undefined && input.DeviceName !== null && { DeviceName: input.DeviceName })), (input.DeviceSecretVerifierConfig !== undefined &&
        input.DeviceSecretVerifierConfig !== null && {
        DeviceSecretVerifierConfig: serializeAws_json1_1DeviceSecretVerifierConfigType(input.DeviceSecretVerifierConfig, context),
    }));
};
var serializeAws_json1_1ConfirmForgotPasswordRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AnalyticsMetadata !== undefined &&
        input.AnalyticsMetadata !== null && {
        AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
    })), (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.ClientMetadata !== undefined &&
        input.ClientMetadata !== null && {
        ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
    })), (input.ConfirmationCode !== undefined &&
        input.ConfirmationCode !== null && { ConfirmationCode: input.ConfirmationCode })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.SecretHash !== undefined && input.SecretHash !== null && { SecretHash: input.SecretHash })), (input.UserContextData !== undefined &&
        input.UserContextData !== null && {
        UserContextData: serializeAws_json1_1UserContextDataType(input.UserContextData, context),
    })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1ConfirmSignUpRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AnalyticsMetadata !== undefined &&
        input.AnalyticsMetadata !== null && {
        AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
    })), (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.ClientMetadata !== undefined &&
        input.ClientMetadata !== null && {
        ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
    })), (input.ConfirmationCode !== undefined &&
        input.ConfirmationCode !== null && { ConfirmationCode: input.ConfirmationCode })), (input.ForceAliasCreation !== undefined &&
        input.ForceAliasCreation !== null && { ForceAliasCreation: input.ForceAliasCreation })), (input.SecretHash !== undefined && input.SecretHash !== null && { SecretHash: input.SecretHash })), (input.UserContextData !== undefined &&
        input.UserContextData !== null && {
        UserContextData: serializeAws_json1_1UserContextDataType(input.UserContextData, context),
    })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1ContextDataType = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.EncodedData !== undefined && input.EncodedData !== null && { EncodedData: input.EncodedData })), (input.HttpHeaders !== undefined &&
        input.HttpHeaders !== null && { HttpHeaders: serializeAws_json1_1HttpHeaderList(input.HttpHeaders, context) })), (input.IpAddress !== undefined && input.IpAddress !== null && { IpAddress: input.IpAddress })), (input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName })), (input.ServerPath !== undefined && input.ServerPath !== null && { ServerPath: input.ServerPath }));
};
var serializeAws_json1_1CreateGroupRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.Precedence !== undefined && input.Precedence !== null && { Precedence: input.Precedence })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1CreateIdentityProviderRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttributeMapping !== undefined &&
        input.AttributeMapping !== null && {
        AttributeMapping: serializeAws_json1_1AttributeMappingType(input.AttributeMapping, context),
    })), (input.IdpIdentifiers !== undefined &&
        input.IdpIdentifiers !== null && {
        IdpIdentifiers: serializeAws_json1_1IdpIdentifiersListType(input.IdpIdentifiers, context),
    })), (input.ProviderDetails !== undefined &&
        input.ProviderDetails !== null && {
        ProviderDetails: serializeAws_json1_1ProviderDetailsType(input.ProviderDetails, context),
    })), (input.ProviderName !== undefined && input.ProviderName !== null && { ProviderName: input.ProviderName })), (input.ProviderType !== undefined && input.ProviderType !== null && { ProviderType: input.ProviderType })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1CreateResourceServerRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Scopes !== undefined &&
        input.Scopes !== null && { Scopes: serializeAws_json1_1ResourceServerScopeListType(input.Scopes, context) })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1CreateUserImportJobRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.CloudWatchLogsRoleArn !== undefined &&
        input.CloudWatchLogsRoleArn !== null && { CloudWatchLogsRoleArn: input.CloudWatchLogsRoleArn })), (input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1CreateUserPoolClientRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccessTokenValidity !== undefined &&
        input.AccessTokenValidity !== null && { AccessTokenValidity: input.AccessTokenValidity })), (input.AllowedOAuthFlows !== undefined &&
        input.AllowedOAuthFlows !== null && {
        AllowedOAuthFlows: serializeAws_json1_1OAuthFlowsType(input.AllowedOAuthFlows, context),
    })), (input.AllowedOAuthFlowsUserPoolClient !== undefined &&
        input.AllowedOAuthFlowsUserPoolClient !== null && {
        AllowedOAuthFlowsUserPoolClient: input.AllowedOAuthFlowsUserPoolClient,
    })), (input.AllowedOAuthScopes !== undefined &&
        input.AllowedOAuthScopes !== null && {
        AllowedOAuthScopes: serializeAws_json1_1ScopeListType(input.AllowedOAuthScopes, context),
    })), (input.AnalyticsConfiguration !== undefined &&
        input.AnalyticsConfiguration !== null && {
        AnalyticsConfiguration: serializeAws_json1_1AnalyticsConfigurationType(input.AnalyticsConfiguration, context),
    })), (input.CallbackURLs !== undefined &&
        input.CallbackURLs !== null && {
        CallbackURLs: serializeAws_json1_1CallbackURLsListType(input.CallbackURLs, context),
    })), (input.ClientName !== undefined && input.ClientName !== null && { ClientName: input.ClientName })), (input.DefaultRedirectURI !== undefined &&
        input.DefaultRedirectURI !== null && { DefaultRedirectURI: input.DefaultRedirectURI })), (input.ExplicitAuthFlows !== undefined &&
        input.ExplicitAuthFlows !== null && {
        ExplicitAuthFlows: serializeAws_json1_1ExplicitAuthFlowsListType(input.ExplicitAuthFlows, context),
    })), (input.GenerateSecret !== undefined &&
        input.GenerateSecret !== null && { GenerateSecret: input.GenerateSecret })), (input.IdTokenValidity !== undefined &&
        input.IdTokenValidity !== null && { IdTokenValidity: input.IdTokenValidity })), (input.LogoutURLs !== undefined &&
        input.LogoutURLs !== null && { LogoutURLs: serializeAws_json1_1LogoutURLsListType(input.LogoutURLs, context) })), (input.PreventUserExistenceErrors !== undefined &&
        input.PreventUserExistenceErrors !== null && { PreventUserExistenceErrors: input.PreventUserExistenceErrors })), (input.ReadAttributes !== undefined &&
        input.ReadAttributes !== null && {
        ReadAttributes: serializeAws_json1_1ClientPermissionListType(input.ReadAttributes, context),
    })), (input.RefreshTokenValidity !== undefined &&
        input.RefreshTokenValidity !== null && { RefreshTokenValidity: input.RefreshTokenValidity })), (input.SupportedIdentityProviders !== undefined &&
        input.SupportedIdentityProviders !== null && {
        SupportedIdentityProviders: serializeAws_json1_1SupportedIdentityProvidersListType(input.SupportedIdentityProviders, context),
    })), (input.TokenValidityUnits !== undefined &&
        input.TokenValidityUnits !== null && {
        TokenValidityUnits: serializeAws_json1_1TokenValidityUnitsType(input.TokenValidityUnits, context),
    })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.WriteAttributes !== undefined &&
        input.WriteAttributes !== null && {
        WriteAttributes: serializeAws_json1_1ClientPermissionListType(input.WriteAttributes, context),
    }));
};
var serializeAws_json1_1CreateUserPoolDomainRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.CustomDomainConfig !== undefined &&
        input.CustomDomainConfig !== null && {
        CustomDomainConfig: serializeAws_json1_1CustomDomainConfigType(input.CustomDomainConfig, context),
    })), (input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1CreateUserPoolRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccountRecoverySetting !== undefined &&
        input.AccountRecoverySetting !== null && {
        AccountRecoverySetting: serializeAws_json1_1AccountRecoverySettingType(input.AccountRecoverySetting, context),
    })), (input.AdminCreateUserConfig !== undefined &&
        input.AdminCreateUserConfig !== null && {
        AdminCreateUserConfig: serializeAws_json1_1AdminCreateUserConfigType(input.AdminCreateUserConfig, context),
    })), (input.AliasAttributes !== undefined &&
        input.AliasAttributes !== null && {
        AliasAttributes: serializeAws_json1_1AliasAttributesListType(input.AliasAttributes, context),
    })), (input.AutoVerifiedAttributes !== undefined &&
        input.AutoVerifiedAttributes !== null && {
        AutoVerifiedAttributes: serializeAws_json1_1VerifiedAttributesListType(input.AutoVerifiedAttributes, context),
    })), (input.DeviceConfiguration !== undefined &&
        input.DeviceConfiguration !== null && {
        DeviceConfiguration: serializeAws_json1_1DeviceConfigurationType(input.DeviceConfiguration, context),
    })), (input.EmailConfiguration !== undefined &&
        input.EmailConfiguration !== null && {
        EmailConfiguration: serializeAws_json1_1EmailConfigurationType(input.EmailConfiguration, context),
    })), (input.EmailVerificationMessage !== undefined &&
        input.EmailVerificationMessage !== null && { EmailVerificationMessage: input.EmailVerificationMessage })), (input.EmailVerificationSubject !== undefined &&
        input.EmailVerificationSubject !== null && { EmailVerificationSubject: input.EmailVerificationSubject })), (input.LambdaConfig !== undefined &&
        input.LambdaConfig !== null && {
        LambdaConfig: serializeAws_json1_1LambdaConfigType(input.LambdaConfig, context),
    })), (input.MfaConfiguration !== undefined &&
        input.MfaConfiguration !== null && { MfaConfiguration: input.MfaConfiguration })), (input.Policies !== undefined &&
        input.Policies !== null && { Policies: serializeAws_json1_1UserPoolPolicyType(input.Policies, context) })), (input.PoolName !== undefined && input.PoolName !== null && { PoolName: input.PoolName })), (input.Schema !== undefined &&
        input.Schema !== null && { Schema: serializeAws_json1_1SchemaAttributesListType(input.Schema, context) })), (input.SmsAuthenticationMessage !== undefined &&
        input.SmsAuthenticationMessage !== null && { SmsAuthenticationMessage: input.SmsAuthenticationMessage })), (input.SmsConfiguration !== undefined &&
        input.SmsConfiguration !== null && {
        SmsConfiguration: serializeAws_json1_1SmsConfigurationType(input.SmsConfiguration, context),
    })), (input.SmsVerificationMessage !== undefined &&
        input.SmsVerificationMessage !== null && { SmsVerificationMessage: input.SmsVerificationMessage })), (input.UserPoolAddOns !== undefined &&
        input.UserPoolAddOns !== null && {
        UserPoolAddOns: serializeAws_json1_1UserPoolAddOnsType(input.UserPoolAddOns, context),
    })), (input.UserPoolTags !== undefined &&
        input.UserPoolTags !== null && {
        UserPoolTags: serializeAws_json1_1UserPoolTagsType(input.UserPoolTags, context),
    })), (input.UsernameAttributes !== undefined &&
        input.UsernameAttributes !== null && {
        UsernameAttributes: serializeAws_json1_1UsernameAttributesListType(input.UsernameAttributes, context),
    })), (input.UsernameConfiguration !== undefined &&
        input.UsernameConfiguration !== null && {
        UsernameConfiguration: serializeAws_json1_1UsernameConfigurationType(input.UsernameConfiguration, context),
    })), (input.VerificationMessageTemplate !== undefined &&
        input.VerificationMessageTemplate !== null && {
        VerificationMessageTemplate: serializeAws_json1_1VerificationMessageTemplateType(input.VerificationMessageTemplate, context),
    }));
};
var serializeAws_json1_1CustomAttributesListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SchemaAttributeType(entry, context);
    });
};
var serializeAws_json1_1CustomDomainConfigType = function (input, context) {
    return __assign({}, (input.CertificateArn !== undefined &&
        input.CertificateArn !== null && { CertificateArn: input.CertificateArn }));
};
var serializeAws_json1_1CustomEmailLambdaVersionConfigType = function (input, context) {
    return __assign(__assign({}, (input.LambdaArn !== undefined && input.LambdaArn !== null && { LambdaArn: input.LambdaArn })), (input.LambdaVersion !== undefined && input.LambdaVersion !== null && { LambdaVersion: input.LambdaVersion }));
};
var serializeAws_json1_1CustomSMSLambdaVersionConfigType = function (input, context) {
    return __assign(__assign({}, (input.LambdaArn !== undefined && input.LambdaArn !== null && { LambdaArn: input.LambdaArn })), (input.LambdaVersion !== undefined && input.LambdaVersion !== null && { LambdaVersion: input.LambdaVersion }));
};
var serializeAws_json1_1DeleteGroupRequest = function (input, context) {
    return __assign(__assign({}, (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1DeleteIdentityProviderRequest = function (input, context) {
    return __assign(__assign({}, (input.ProviderName !== undefined && input.ProviderName !== null && { ProviderName: input.ProviderName })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1DeleteResourceServerRequest = function (input, context) {
    return __assign(__assign({}, (input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1DeleteUserAttributesRequest = function (input, context) {
    return __assign(__assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken })), (input.UserAttributeNames !== undefined &&
        input.UserAttributeNames !== null && {
        UserAttributeNames: serializeAws_json1_1AttributeNameListType(input.UserAttributeNames, context),
    }));
};
var serializeAws_json1_1DeleteUserPoolClientRequest = function (input, context) {
    return __assign(__assign({}, (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1DeleteUserPoolDomainRequest = function (input, context) {
    return __assign(__assign({}, (input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1DeleteUserPoolRequest = function (input, context) {
    return __assign({}, (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1DeleteUserRequest = function (input, context) {
    return __assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }));
};
var serializeAws_json1_1DeliveryMediumListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DescribeIdentityProviderRequest = function (input, context) {
    return __assign(__assign({}, (input.ProviderName !== undefined && input.ProviderName !== null && { ProviderName: input.ProviderName })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1DescribeResourceServerRequest = function (input, context) {
    return __assign(__assign({}, (input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1DescribeRiskConfigurationRequest = function (input, context) {
    return __assign(__assign({}, (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1DescribeUserImportJobRequest = function (input, context) {
    return __assign(__assign({}, (input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1DescribeUserPoolClientRequest = function (input, context) {
    return __assign(__assign({}, (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1DescribeUserPoolDomainRequest = function (input, context) {
    return __assign({}, (input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }));
};
var serializeAws_json1_1DescribeUserPoolRequest = function (input, context) {
    return __assign({}, (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1DeviceConfigurationType = function (input, context) {
    return __assign(__assign({}, (input.ChallengeRequiredOnNewDevice !== undefined &&
        input.ChallengeRequiredOnNewDevice !== null && {
        ChallengeRequiredOnNewDevice: input.ChallengeRequiredOnNewDevice,
    })), (input.DeviceOnlyRememberedOnUserPrompt !== undefined &&
        input.DeviceOnlyRememberedOnUserPrompt !== null && {
        DeviceOnlyRememberedOnUserPrompt: input.DeviceOnlyRememberedOnUserPrompt,
    }));
};
var serializeAws_json1_1DeviceSecretVerifierConfigType = function (input, context) {
    return __assign(__assign({}, (input.PasswordVerifier !== undefined &&
        input.PasswordVerifier !== null && { PasswordVerifier: input.PasswordVerifier })), (input.Salt !== undefined && input.Salt !== null && { Salt: input.Salt }));
};
var serializeAws_json1_1EmailConfigurationType = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ConfigurationSet !== undefined &&
        input.ConfigurationSet !== null && { ConfigurationSet: input.ConfigurationSet })), (input.EmailSendingAccount !== undefined &&
        input.EmailSendingAccount !== null && { EmailSendingAccount: input.EmailSendingAccount })), (input.From !== undefined && input.From !== null && { From: input.From })), (input.ReplyToEmailAddress !== undefined &&
        input.ReplyToEmailAddress !== null && { ReplyToEmailAddress: input.ReplyToEmailAddress })), (input.SourceArn !== undefined && input.SourceArn !== null && { SourceArn: input.SourceArn }));
};
var serializeAws_json1_1EventFiltersType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ExplicitAuthFlowsListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ForgetDeviceRequest = function (input, context) {
    return __assign(__assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken })), (input.DeviceKey !== undefined && input.DeviceKey !== null && { DeviceKey: input.DeviceKey }));
};
var serializeAws_json1_1ForgotPasswordRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AnalyticsMetadata !== undefined &&
        input.AnalyticsMetadata !== null && {
        AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
    })), (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.ClientMetadata !== undefined &&
        input.ClientMetadata !== null && {
        ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
    })), (input.SecretHash !== undefined && input.SecretHash !== null && { SecretHash: input.SecretHash })), (input.UserContextData !== undefined &&
        input.UserContextData !== null && {
        UserContextData: serializeAws_json1_1UserContextDataType(input.UserContextData, context),
    })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1GetCSVHeaderRequest = function (input, context) {
    return __assign({}, (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1GetDeviceRequest = function (input, context) {
    return __assign(__assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken })), (input.DeviceKey !== undefined && input.DeviceKey !== null && { DeviceKey: input.DeviceKey }));
};
var serializeAws_json1_1GetGroupRequest = function (input, context) {
    return __assign(__assign({}, (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1GetIdentityProviderByIdentifierRequest = function (input, context) {
    return __assign(__assign({}, (input.IdpIdentifier !== undefined && input.IdpIdentifier !== null && { IdpIdentifier: input.IdpIdentifier })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1GetSigningCertificateRequest = function (input, context) {
    return __assign({}, (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1GetUICustomizationRequest = function (input, context) {
    return __assign(__assign({}, (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1GetUserAttributeVerificationCodeRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken })), (input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName })), (input.ClientMetadata !== undefined &&
        input.ClientMetadata !== null && {
        ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
    }));
};
var serializeAws_json1_1GetUserPoolMfaConfigRequest = function (input, context) {
    return __assign({}, (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1GetUserRequest = function (input, context) {
    return __assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }));
};
var serializeAws_json1_1GlobalSignOutRequest = function (input, context) {
    return __assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }));
};
var serializeAws_json1_1HttpHeader = function (input, context) {
    return __assign(__assign({}, (input.headerName !== undefined && input.headerName !== null && { headerName: input.headerName })), (input.headerValue !== undefined && input.headerValue !== null && { headerValue: input.headerValue }));
};
var serializeAws_json1_1HttpHeaderList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1HttpHeader(entry, context);
    });
};
var serializeAws_json1_1IdpIdentifiersListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1InitiateAuthRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AnalyticsMetadata !== undefined &&
        input.AnalyticsMetadata !== null && {
        AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
    })), (input.AuthFlow !== undefined && input.AuthFlow !== null && { AuthFlow: input.AuthFlow })), (input.AuthParameters !== undefined &&
        input.AuthParameters !== null && {
        AuthParameters: serializeAws_json1_1AuthParametersType(input.AuthParameters, context),
    })), (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.ClientMetadata !== undefined &&
        input.ClientMetadata !== null && {
        ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
    })), (input.UserContextData !== undefined &&
        input.UserContextData !== null && {
        UserContextData: serializeAws_json1_1UserContextDataType(input.UserContextData, context),
    }));
};
var serializeAws_json1_1LambdaConfigType = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CreateAuthChallenge !== undefined &&
        input.CreateAuthChallenge !== null && { CreateAuthChallenge: input.CreateAuthChallenge })), (input.CustomEmailSender !== undefined &&
        input.CustomEmailSender !== null && {
        CustomEmailSender: serializeAws_json1_1CustomEmailLambdaVersionConfigType(input.CustomEmailSender, context),
    })), (input.CustomMessage !== undefined && input.CustomMessage !== null && { CustomMessage: input.CustomMessage })), (input.CustomSMSSender !== undefined &&
        input.CustomSMSSender !== null && {
        CustomSMSSender: serializeAws_json1_1CustomSMSLambdaVersionConfigType(input.CustomSMSSender, context),
    })), (input.DefineAuthChallenge !== undefined &&
        input.DefineAuthChallenge !== null && { DefineAuthChallenge: input.DefineAuthChallenge })), (input.KMSKeyID !== undefined && input.KMSKeyID !== null && { KMSKeyID: input.KMSKeyID })), (input.PostAuthentication !== undefined &&
        input.PostAuthentication !== null && { PostAuthentication: input.PostAuthentication })), (input.PostConfirmation !== undefined &&
        input.PostConfirmation !== null && { PostConfirmation: input.PostConfirmation })), (input.PreAuthentication !== undefined &&
        input.PreAuthentication !== null && { PreAuthentication: input.PreAuthentication })), (input.PreSignUp !== undefined && input.PreSignUp !== null && { PreSignUp: input.PreSignUp })), (input.PreTokenGeneration !== undefined &&
        input.PreTokenGeneration !== null && { PreTokenGeneration: input.PreTokenGeneration })), (input.UserMigration !== undefined && input.UserMigration !== null && { UserMigration: input.UserMigration })), (input.VerifyAuthChallengeResponse !== undefined &&
        input.VerifyAuthChallengeResponse !== null && { VerifyAuthChallengeResponse: input.VerifyAuthChallengeResponse }));
};
var serializeAws_json1_1ListDevicesRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.PaginationToken !== undefined &&
        input.PaginationToken !== null && { PaginationToken: input.PaginationToken }));
};
var serializeAws_json1_1ListGroupsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1ListIdentityProvidersRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1ListResourceServersRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1ListTagsForResourceRequest = function (input, context) {
    return __assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1ListUserImportJobsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.PaginationToken !== undefined &&
        input.PaginationToken !== null && { PaginationToken: input.PaginationToken })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1ListUserPoolClientsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1ListUserPoolsRequest = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListUsersInGroupRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1ListUsersRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AttributesToGet !== undefined &&
        input.AttributesToGet !== null && {
        AttributesToGet: serializeAws_json1_1SearchedAttributeNamesListType(input.AttributesToGet, context),
    })), (input.Filter !== undefined && input.Filter !== null && { Filter: input.Filter })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.PaginationToken !== undefined &&
        input.PaginationToken !== null && { PaginationToken: input.PaginationToken })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1LogoutURLsListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1MessageTemplateType = function (input, context) {
    return __assign(__assign(__assign({}, (input.EmailMessage !== undefined && input.EmailMessage !== null && { EmailMessage: input.EmailMessage })), (input.EmailSubject !== undefined && input.EmailSubject !== null && { EmailSubject: input.EmailSubject })), (input.SMSMessage !== undefined && input.SMSMessage !== null && { SMSMessage: input.SMSMessage }));
};
var serializeAws_json1_1MFAOptionListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1MFAOptionType(entry, context);
    });
};
var serializeAws_json1_1MFAOptionType = function (input, context) {
    return __assign(__assign({}, (input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName })), (input.DeliveryMedium !== undefined &&
        input.DeliveryMedium !== null && { DeliveryMedium: input.DeliveryMedium }));
};
var serializeAws_json1_1NotifyConfigurationType = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.BlockEmail !== undefined &&
        input.BlockEmail !== null && { BlockEmail: serializeAws_json1_1NotifyEmailType(input.BlockEmail, context) })), (input.From !== undefined && input.From !== null && { From: input.From })), (input.MfaEmail !== undefined &&
        input.MfaEmail !== null && { MfaEmail: serializeAws_json1_1NotifyEmailType(input.MfaEmail, context) })), (input.NoActionEmail !== undefined &&
        input.NoActionEmail !== null && {
        NoActionEmail: serializeAws_json1_1NotifyEmailType(input.NoActionEmail, context),
    })), (input.ReplyTo !== undefined && input.ReplyTo !== null && { ReplyTo: input.ReplyTo })), (input.SourceArn !== undefined && input.SourceArn !== null && { SourceArn: input.SourceArn }));
};
var serializeAws_json1_1NotifyEmailType = function (input, context) {
    return __assign(__assign(__assign({}, (input.HtmlBody !== undefined && input.HtmlBody !== null && { HtmlBody: input.HtmlBody })), (input.Subject !== undefined && input.Subject !== null && { Subject: input.Subject })), (input.TextBody !== undefined && input.TextBody !== null && { TextBody: input.TextBody }));
};
var serializeAws_json1_1NumberAttributeConstraintsType = function (input, context) {
    return __assign(__assign({}, (input.MaxValue !== undefined && input.MaxValue !== null && { MaxValue: input.MaxValue })), (input.MinValue !== undefined && input.MinValue !== null && { MinValue: input.MinValue }));
};
var serializeAws_json1_1OAuthFlowsType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1PasswordPolicyType = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.MinimumLength !== undefined && input.MinimumLength !== null && { MinimumLength: input.MinimumLength })), (input.RequireLowercase !== undefined &&
        input.RequireLowercase !== null && { RequireLowercase: input.RequireLowercase })), (input.RequireNumbers !== undefined &&
        input.RequireNumbers !== null && { RequireNumbers: input.RequireNumbers })), (input.RequireSymbols !== undefined &&
        input.RequireSymbols !== null && { RequireSymbols: input.RequireSymbols })), (input.RequireUppercase !== undefined &&
        input.RequireUppercase !== null && { RequireUppercase: input.RequireUppercase })), (input.TemporaryPasswordValidityDays !== undefined &&
        input.TemporaryPasswordValidityDays !== null && {
        TemporaryPasswordValidityDays: input.TemporaryPasswordValidityDays,
    }));
};
var serializeAws_json1_1ProviderDetailsType = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1ProviderUserIdentifierType = function (input, context) {
    return __assign(__assign(__assign({}, (input.ProviderAttributeName !== undefined &&
        input.ProviderAttributeName !== null && { ProviderAttributeName: input.ProviderAttributeName })), (input.ProviderAttributeValue !== undefined &&
        input.ProviderAttributeValue !== null && { ProviderAttributeValue: input.ProviderAttributeValue })), (input.ProviderName !== undefined && input.ProviderName !== null && { ProviderName: input.ProviderName }));
};
var serializeAws_json1_1RecoveryMechanismsType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RecoveryOptionType(entry, context);
    });
};
var serializeAws_json1_1RecoveryOptionType = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }));
};
var serializeAws_json1_1ResendConfirmationCodeRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AnalyticsMetadata !== undefined &&
        input.AnalyticsMetadata !== null && {
        AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
    })), (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.ClientMetadata !== undefined &&
        input.ClientMetadata !== null && {
        ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
    })), (input.SecretHash !== undefined && input.SecretHash !== null && { SecretHash: input.SecretHash })), (input.UserContextData !== undefined &&
        input.UserContextData !== null && {
        UserContextData: serializeAws_json1_1UserContextDataType(input.UserContextData, context),
    })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1ResourceServerScopeListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ResourceServerScopeType(entry, context);
    });
};
var serializeAws_json1_1ResourceServerScopeType = function (input, context) {
    return __assign(__assign({}, (input.ScopeDescription !== undefined &&
        input.ScopeDescription !== null && { ScopeDescription: input.ScopeDescription })), (input.ScopeName !== undefined && input.ScopeName !== null && { ScopeName: input.ScopeName }));
};
var serializeAws_json1_1RespondToAuthChallengeRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AnalyticsMetadata !== undefined &&
        input.AnalyticsMetadata !== null && {
        AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
    })), (input.ChallengeName !== undefined && input.ChallengeName !== null && { ChallengeName: input.ChallengeName })), (input.ChallengeResponses !== undefined &&
        input.ChallengeResponses !== null && {
        ChallengeResponses: serializeAws_json1_1ChallengeResponsesType(input.ChallengeResponses, context),
    })), (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.ClientMetadata !== undefined &&
        input.ClientMetadata !== null && {
        ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
    })), (input.Session !== undefined && input.Session !== null && { Session: input.Session })), (input.UserContextData !== undefined &&
        input.UserContextData !== null && {
        UserContextData: serializeAws_json1_1UserContextDataType(input.UserContextData, context),
    }));
};
var serializeAws_json1_1RiskExceptionConfigurationType = function (input, context) {
    return __assign(__assign({}, (input.BlockedIPRangeList !== undefined &&
        input.BlockedIPRangeList !== null && {
        BlockedIPRangeList: serializeAws_json1_1BlockedIPRangeListType(input.BlockedIPRangeList, context),
    })), (input.SkippedIPRangeList !== undefined &&
        input.SkippedIPRangeList !== null && {
        SkippedIPRangeList: serializeAws_json1_1SkippedIPRangeListType(input.SkippedIPRangeList, context),
    }));
};
var serializeAws_json1_1SchemaAttributesListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SchemaAttributeType(entry, context);
    });
};
var serializeAws_json1_1SchemaAttributeType = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttributeDataType !== undefined &&
        input.AttributeDataType !== null && { AttributeDataType: input.AttributeDataType })), (input.DeveloperOnlyAttribute !== undefined &&
        input.DeveloperOnlyAttribute !== null && { DeveloperOnlyAttribute: input.DeveloperOnlyAttribute })), (input.Mutable !== undefined && input.Mutable !== null && { Mutable: input.Mutable })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.NumberAttributeConstraints !== undefined &&
        input.NumberAttributeConstraints !== null && {
        NumberAttributeConstraints: serializeAws_json1_1NumberAttributeConstraintsType(input.NumberAttributeConstraints, context),
    })), (input.Required !== undefined && input.Required !== null && { Required: input.Required })), (input.StringAttributeConstraints !== undefined &&
        input.StringAttributeConstraints !== null && {
        StringAttributeConstraints: serializeAws_json1_1StringAttributeConstraintsType(input.StringAttributeConstraints, context),
    }));
};
var serializeAws_json1_1ScopeListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SearchedAttributeNamesListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SetRiskConfigurationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AccountTakeoverRiskConfiguration !== undefined &&
        input.AccountTakeoverRiskConfiguration !== null && {
        AccountTakeoverRiskConfiguration: serializeAws_json1_1AccountTakeoverRiskConfigurationType(input.AccountTakeoverRiskConfiguration, context),
    })), (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.CompromisedCredentialsRiskConfiguration !== undefined &&
        input.CompromisedCredentialsRiskConfiguration !== null && {
        CompromisedCredentialsRiskConfiguration: serializeAws_json1_1CompromisedCredentialsRiskConfigurationType(input.CompromisedCredentialsRiskConfiguration, context),
    })), (input.RiskExceptionConfiguration !== undefined &&
        input.RiskExceptionConfiguration !== null && {
        RiskExceptionConfiguration: serializeAws_json1_1RiskExceptionConfigurationType(input.RiskExceptionConfiguration, context),
    })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1SetUICustomizationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CSS !== undefined && input.CSS !== null && { CSS: input.CSS })), (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.ImageFile !== undefined &&
        input.ImageFile !== null && { ImageFile: context.base64Encoder(input.ImageFile) })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1SetUserMFAPreferenceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken })), (input.SMSMfaSettings !== undefined &&
        input.SMSMfaSettings !== null && {
        SMSMfaSettings: serializeAws_json1_1SMSMfaSettingsType(input.SMSMfaSettings, context),
    })), (input.SoftwareTokenMfaSettings !== undefined &&
        input.SoftwareTokenMfaSettings !== null && {
        SoftwareTokenMfaSettings: serializeAws_json1_1SoftwareTokenMfaSettingsType(input.SoftwareTokenMfaSettings, context),
    }));
};
var serializeAws_json1_1SetUserPoolMfaConfigRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.MfaConfiguration !== undefined &&
        input.MfaConfiguration !== null && { MfaConfiguration: input.MfaConfiguration })), (input.SmsMfaConfiguration !== undefined &&
        input.SmsMfaConfiguration !== null && {
        SmsMfaConfiguration: serializeAws_json1_1SmsMfaConfigType(input.SmsMfaConfiguration, context),
    })), (input.SoftwareTokenMfaConfiguration !== undefined &&
        input.SoftwareTokenMfaConfiguration !== null && {
        SoftwareTokenMfaConfiguration: serializeAws_json1_1SoftwareTokenMfaConfigType(input.SoftwareTokenMfaConfiguration, context),
    })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1SetUserSettingsRequest = function (input, context) {
    return __assign(__assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken })), (input.MFAOptions !== undefined &&
        input.MFAOptions !== null && { MFAOptions: serializeAws_json1_1MFAOptionListType(input.MFAOptions, context) }));
};
var serializeAws_json1_1SignUpRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AnalyticsMetadata !== undefined &&
        input.AnalyticsMetadata !== null && {
        AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
    })), (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.ClientMetadata !== undefined &&
        input.ClientMetadata !== null && {
        ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
    })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.SecretHash !== undefined && input.SecretHash !== null && { SecretHash: input.SecretHash })), (input.UserAttributes !== undefined &&
        input.UserAttributes !== null && {
        UserAttributes: serializeAws_json1_1AttributeListType(input.UserAttributes, context),
    })), (input.UserContextData !== undefined &&
        input.UserContextData !== null && {
        UserContextData: serializeAws_json1_1UserContextDataType(input.UserContextData, context),
    })), (input.Username !== undefined && input.Username !== null && { Username: input.Username })), (input.ValidationData !== undefined &&
        input.ValidationData !== null && {
        ValidationData: serializeAws_json1_1AttributeListType(input.ValidationData, context),
    }));
};
var serializeAws_json1_1SkippedIPRangeListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SmsConfigurationType = function (input, context) {
    return __assign(__assign({}, (input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId })), (input.SnsCallerArn !== undefined && input.SnsCallerArn !== null && { SnsCallerArn: input.SnsCallerArn }));
};
var serializeAws_json1_1SmsMfaConfigType = function (input, context) {
    return __assign(__assign({}, (input.SmsAuthenticationMessage !== undefined &&
        input.SmsAuthenticationMessage !== null && { SmsAuthenticationMessage: input.SmsAuthenticationMessage })), (input.SmsConfiguration !== undefined &&
        input.SmsConfiguration !== null && {
        SmsConfiguration: serializeAws_json1_1SmsConfigurationType(input.SmsConfiguration, context),
    }));
};
var serializeAws_json1_1SMSMfaSettingsType = function (input, context) {
    return __assign(__assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.PreferredMfa !== undefined && input.PreferredMfa !== null && { PreferredMfa: input.PreferredMfa }));
};
var serializeAws_json1_1SoftwareTokenMfaConfigType = function (input, context) {
    return __assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }));
};
var serializeAws_json1_1SoftwareTokenMfaSettingsType = function (input, context) {
    return __assign(__assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.PreferredMfa !== undefined && input.PreferredMfa !== null && { PreferredMfa: input.PreferredMfa }));
};
var serializeAws_json1_1StartUserImportJobRequest = function (input, context) {
    return __assign(__assign({}, (input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1StopUserImportJobRequest = function (input, context) {
    return __assign(__assign({}, (input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1StringAttributeConstraintsType = function (input, context) {
    return __assign(__assign({}, (input.MaxLength !== undefined && input.MaxLength !== null && { MaxLength: input.MaxLength })), (input.MinLength !== undefined && input.MinLength !== null && { MinLength: input.MinLength }));
};
var serializeAws_json1_1SupportedIdentityProvidersListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1TagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.Tags !== undefined &&
        input.Tags !== null && { Tags: serializeAws_json1_1UserPoolTagsType(input.Tags, context) }));
};
var serializeAws_json1_1TokenValidityUnitsType = function (input, context) {
    return __assign(__assign(__assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken })), (input.IdToken !== undefined && input.IdToken !== null && { IdToken: input.IdToken })), (input.RefreshToken !== undefined && input.RefreshToken !== null && { RefreshToken: input.RefreshToken }));
};
var serializeAws_json1_1UntagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_1UserPoolTagsListType(input.TagKeys, context) }));
};
var serializeAws_json1_1UpdateAuthEventFeedbackRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.EventId !== undefined && input.EventId !== null && { EventId: input.EventId })), (input.FeedbackToken !== undefined && input.FeedbackToken !== null && { FeedbackToken: input.FeedbackToken })), (input.FeedbackValue !== undefined && input.FeedbackValue !== null && { FeedbackValue: input.FeedbackValue })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.Username !== undefined && input.Username !== null && { Username: input.Username }));
};
var serializeAws_json1_1UpdateDeviceStatusRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken })), (input.DeviceKey !== undefined && input.DeviceKey !== null && { DeviceKey: input.DeviceKey })), (input.DeviceRememberedStatus !== undefined &&
        input.DeviceRememberedStatus !== null && { DeviceRememberedStatus: input.DeviceRememberedStatus }));
};
var serializeAws_json1_1UpdateGroupRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.Precedence !== undefined && input.Precedence !== null && { Precedence: input.Precedence })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1UpdateIdentityProviderRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AttributeMapping !== undefined &&
        input.AttributeMapping !== null && {
        AttributeMapping: serializeAws_json1_1AttributeMappingType(input.AttributeMapping, context),
    })), (input.IdpIdentifiers !== undefined &&
        input.IdpIdentifiers !== null && {
        IdpIdentifiers: serializeAws_json1_1IdpIdentifiersListType(input.IdpIdentifiers, context),
    })), (input.ProviderDetails !== undefined &&
        input.ProviderDetails !== null && {
        ProviderDetails: serializeAws_json1_1ProviderDetailsType(input.ProviderDetails, context),
    })), (input.ProviderName !== undefined && input.ProviderName !== null && { ProviderName: input.ProviderName })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1UpdateResourceServerRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Scopes !== undefined &&
        input.Scopes !== null && { Scopes: serializeAws_json1_1ResourceServerScopeListType(input.Scopes, context) })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1UpdateUserAttributesRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken })), (input.ClientMetadata !== undefined &&
        input.ClientMetadata !== null && {
        ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
    })), (input.UserAttributes !== undefined &&
        input.UserAttributes !== null && {
        UserAttributes: serializeAws_json1_1AttributeListType(input.UserAttributes, context),
    }));
};
var serializeAws_json1_1UpdateUserPoolClientRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccessTokenValidity !== undefined &&
        input.AccessTokenValidity !== null && { AccessTokenValidity: input.AccessTokenValidity })), (input.AllowedOAuthFlows !== undefined &&
        input.AllowedOAuthFlows !== null && {
        AllowedOAuthFlows: serializeAws_json1_1OAuthFlowsType(input.AllowedOAuthFlows, context),
    })), (input.AllowedOAuthFlowsUserPoolClient !== undefined &&
        input.AllowedOAuthFlowsUserPoolClient !== null && {
        AllowedOAuthFlowsUserPoolClient: input.AllowedOAuthFlowsUserPoolClient,
    })), (input.AllowedOAuthScopes !== undefined &&
        input.AllowedOAuthScopes !== null && {
        AllowedOAuthScopes: serializeAws_json1_1ScopeListType(input.AllowedOAuthScopes, context),
    })), (input.AnalyticsConfiguration !== undefined &&
        input.AnalyticsConfiguration !== null && {
        AnalyticsConfiguration: serializeAws_json1_1AnalyticsConfigurationType(input.AnalyticsConfiguration, context),
    })), (input.CallbackURLs !== undefined &&
        input.CallbackURLs !== null && {
        CallbackURLs: serializeAws_json1_1CallbackURLsListType(input.CallbackURLs, context),
    })), (input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId })), (input.ClientName !== undefined && input.ClientName !== null && { ClientName: input.ClientName })), (input.DefaultRedirectURI !== undefined &&
        input.DefaultRedirectURI !== null && { DefaultRedirectURI: input.DefaultRedirectURI })), (input.ExplicitAuthFlows !== undefined &&
        input.ExplicitAuthFlows !== null && {
        ExplicitAuthFlows: serializeAws_json1_1ExplicitAuthFlowsListType(input.ExplicitAuthFlows, context),
    })), (input.IdTokenValidity !== undefined &&
        input.IdTokenValidity !== null && { IdTokenValidity: input.IdTokenValidity })), (input.LogoutURLs !== undefined &&
        input.LogoutURLs !== null && { LogoutURLs: serializeAws_json1_1LogoutURLsListType(input.LogoutURLs, context) })), (input.PreventUserExistenceErrors !== undefined &&
        input.PreventUserExistenceErrors !== null && { PreventUserExistenceErrors: input.PreventUserExistenceErrors })), (input.ReadAttributes !== undefined &&
        input.ReadAttributes !== null && {
        ReadAttributes: serializeAws_json1_1ClientPermissionListType(input.ReadAttributes, context),
    })), (input.RefreshTokenValidity !== undefined &&
        input.RefreshTokenValidity !== null && { RefreshTokenValidity: input.RefreshTokenValidity })), (input.SupportedIdentityProviders !== undefined &&
        input.SupportedIdentityProviders !== null && {
        SupportedIdentityProviders: serializeAws_json1_1SupportedIdentityProvidersListType(input.SupportedIdentityProviders, context),
    })), (input.TokenValidityUnits !== undefined &&
        input.TokenValidityUnits !== null && {
        TokenValidityUnits: serializeAws_json1_1TokenValidityUnitsType(input.TokenValidityUnits, context),
    })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.WriteAttributes !== undefined &&
        input.WriteAttributes !== null && {
        WriteAttributes: serializeAws_json1_1ClientPermissionListType(input.WriteAttributes, context),
    }));
};
var serializeAws_json1_1UpdateUserPoolDomainRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.CustomDomainConfig !== undefined &&
        input.CustomDomainConfig !== null && {
        CustomDomainConfig: serializeAws_json1_1CustomDomainConfigType(input.CustomDomainConfig, context),
    })), (input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_json1_1UpdateUserPoolRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccountRecoverySetting !== undefined &&
        input.AccountRecoverySetting !== null && {
        AccountRecoverySetting: serializeAws_json1_1AccountRecoverySettingType(input.AccountRecoverySetting, context),
    })), (input.AdminCreateUserConfig !== undefined &&
        input.AdminCreateUserConfig !== null && {
        AdminCreateUserConfig: serializeAws_json1_1AdminCreateUserConfigType(input.AdminCreateUserConfig, context),
    })), (input.AutoVerifiedAttributes !== undefined &&
        input.AutoVerifiedAttributes !== null && {
        AutoVerifiedAttributes: serializeAws_json1_1VerifiedAttributesListType(input.AutoVerifiedAttributes, context),
    })), (input.DeviceConfiguration !== undefined &&
        input.DeviceConfiguration !== null && {
        DeviceConfiguration: serializeAws_json1_1DeviceConfigurationType(input.DeviceConfiguration, context),
    })), (input.EmailConfiguration !== undefined &&
        input.EmailConfiguration !== null && {
        EmailConfiguration: serializeAws_json1_1EmailConfigurationType(input.EmailConfiguration, context),
    })), (input.EmailVerificationMessage !== undefined &&
        input.EmailVerificationMessage !== null && { EmailVerificationMessage: input.EmailVerificationMessage })), (input.EmailVerificationSubject !== undefined &&
        input.EmailVerificationSubject !== null && { EmailVerificationSubject: input.EmailVerificationSubject })), (input.LambdaConfig !== undefined &&
        input.LambdaConfig !== null && {
        LambdaConfig: serializeAws_json1_1LambdaConfigType(input.LambdaConfig, context),
    })), (input.MfaConfiguration !== undefined &&
        input.MfaConfiguration !== null && { MfaConfiguration: input.MfaConfiguration })), (input.Policies !== undefined &&
        input.Policies !== null && { Policies: serializeAws_json1_1UserPoolPolicyType(input.Policies, context) })), (input.SmsAuthenticationMessage !== undefined &&
        input.SmsAuthenticationMessage !== null && { SmsAuthenticationMessage: input.SmsAuthenticationMessage })), (input.SmsConfiguration !== undefined &&
        input.SmsConfiguration !== null && {
        SmsConfiguration: serializeAws_json1_1SmsConfigurationType(input.SmsConfiguration, context),
    })), (input.SmsVerificationMessage !== undefined &&
        input.SmsVerificationMessage !== null && { SmsVerificationMessage: input.SmsVerificationMessage })), (input.UserPoolAddOns !== undefined &&
        input.UserPoolAddOns !== null && {
        UserPoolAddOns: serializeAws_json1_1UserPoolAddOnsType(input.UserPoolAddOns, context),
    })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId })), (input.UserPoolTags !== undefined &&
        input.UserPoolTags !== null && {
        UserPoolTags: serializeAws_json1_1UserPoolTagsType(input.UserPoolTags, context),
    })), (input.VerificationMessageTemplate !== undefined &&
        input.VerificationMessageTemplate !== null && {
        VerificationMessageTemplate: serializeAws_json1_1VerificationMessageTemplateType(input.VerificationMessageTemplate, context),
    }));
};
var serializeAws_json1_1UserContextDataType = function (input, context) {
    return __assign({}, (input.EncodedData !== undefined && input.EncodedData !== null && { EncodedData: input.EncodedData }));
};
var serializeAws_json1_1UsernameAttributesListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1UsernameConfigurationType = function (input, context) {
    return __assign({}, (input.CaseSensitive !== undefined && input.CaseSensitive !== null && { CaseSensitive: input.CaseSensitive }));
};
var serializeAws_json1_1UserPoolAddOnsType = function (input, context) {
    return __assign({}, (input.AdvancedSecurityMode !== undefined &&
        input.AdvancedSecurityMode !== null && { AdvancedSecurityMode: input.AdvancedSecurityMode }));
};
var serializeAws_json1_1UserPoolPolicyType = function (input, context) {
    return __assign({}, (input.PasswordPolicy !== undefined &&
        input.PasswordPolicy !== null && {
        PasswordPolicy: serializeAws_json1_1PasswordPolicyType(input.PasswordPolicy, context),
    }));
};
var serializeAws_json1_1UserPoolTagsListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1UserPoolTagsType = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1VerificationMessageTemplateType = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.DefaultEmailOption !== undefined &&
        input.DefaultEmailOption !== null && { DefaultEmailOption: input.DefaultEmailOption })), (input.EmailMessage !== undefined && input.EmailMessage !== null && { EmailMessage: input.EmailMessage })), (input.EmailMessageByLink !== undefined &&
        input.EmailMessageByLink !== null && { EmailMessageByLink: input.EmailMessageByLink })), (input.EmailSubject !== undefined && input.EmailSubject !== null && { EmailSubject: input.EmailSubject })), (input.EmailSubjectByLink !== undefined &&
        input.EmailSubjectByLink !== null && { EmailSubjectByLink: input.EmailSubjectByLink })), (input.SmsMessage !== undefined && input.SmsMessage !== null && { SmsMessage: input.SmsMessage }));
};
var serializeAws_json1_1VerifiedAttributesListType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1VerifySoftwareTokenRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken })), (input.FriendlyDeviceName !== undefined &&
        input.FriendlyDeviceName !== null && { FriendlyDeviceName: input.FriendlyDeviceName })), (input.Session !== undefined && input.Session !== null && { Session: input.Session })), (input.UserCode !== undefined && input.UserCode !== null && { UserCode: input.UserCode }));
};
var serializeAws_json1_1VerifyUserAttributeRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken })), (input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName })), (input.Code !== undefined && input.Code !== null && { Code: input.Code }));
};
var deserializeAws_json1_1AccountRecoverySettingType = function (output, context) {
    return {
        RecoveryMechanisms: output.RecoveryMechanisms !== undefined && output.RecoveryMechanisms !== null
            ? deserializeAws_json1_1RecoveryMechanismsType(output.RecoveryMechanisms, context)
            : undefined,
    };
};
var deserializeAws_json1_1AccountTakeoverActionsType = function (output, context) {
    return {
        HighAction: output.HighAction !== undefined && output.HighAction !== null
            ? deserializeAws_json1_1AccountTakeoverActionType(output.HighAction, context)
            : undefined,
        LowAction: output.LowAction !== undefined && output.LowAction !== null
            ? deserializeAws_json1_1AccountTakeoverActionType(output.LowAction, context)
            : undefined,
        MediumAction: output.MediumAction !== undefined && output.MediumAction !== null
            ? deserializeAws_json1_1AccountTakeoverActionType(output.MediumAction, context)
            : undefined,
    };
};
var deserializeAws_json1_1AccountTakeoverActionType = function (output, context) {
    return {
        EventAction: output.EventAction !== undefined && output.EventAction !== null ? output.EventAction : undefined,
        Notify: output.Notify !== undefined && output.Notify !== null ? output.Notify : undefined,
    };
};
var deserializeAws_json1_1AccountTakeoverRiskConfigurationType = function (output, context) {
    return {
        Actions: output.Actions !== undefined && output.Actions !== null
            ? deserializeAws_json1_1AccountTakeoverActionsType(output.Actions, context)
            : undefined,
        NotifyConfiguration: output.NotifyConfiguration !== undefined && output.NotifyConfiguration !== null
            ? deserializeAws_json1_1NotifyConfigurationType(output.NotifyConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1AddCustomAttributesResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AdminConfirmSignUpResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AdminCreateUserConfigType = function (output, context) {
    return {
        AllowAdminCreateUserOnly: output.AllowAdminCreateUserOnly !== undefined && output.AllowAdminCreateUserOnly !== null
            ? output.AllowAdminCreateUserOnly
            : undefined,
        InviteMessageTemplate: output.InviteMessageTemplate !== undefined && output.InviteMessageTemplate !== null
            ? deserializeAws_json1_1MessageTemplateType(output.InviteMessageTemplate, context)
            : undefined,
        UnusedAccountValidityDays: output.UnusedAccountValidityDays !== undefined && output.UnusedAccountValidityDays !== null
            ? output.UnusedAccountValidityDays
            : undefined,
    };
};
var deserializeAws_json1_1AdminCreateUserResponse = function (output, context) {
    return {
        User: output.User !== undefined && output.User !== null
            ? deserializeAws_json1_1UserType(output.User, context)
            : undefined,
    };
};
var deserializeAws_json1_1AdminDeleteUserAttributesResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AdminDisableProviderForUserResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AdminDisableUserResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AdminEnableUserResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AdminGetDeviceResponse = function (output, context) {
    return {
        Device: output.Device !== undefined && output.Device !== null
            ? deserializeAws_json1_1DeviceType(output.Device, context)
            : undefined,
    };
};
var deserializeAws_json1_1AdminGetUserResponse = function (output, context) {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        MFAOptions: output.MFAOptions !== undefined && output.MFAOptions !== null
            ? deserializeAws_json1_1MFAOptionListType(output.MFAOptions, context)
            : undefined,
        PreferredMfaSetting: output.PreferredMfaSetting !== undefined && output.PreferredMfaSetting !== null
            ? output.PreferredMfaSetting
            : undefined,
        UserAttributes: output.UserAttributes !== undefined && output.UserAttributes !== null
            ? deserializeAws_json1_1AttributeListType(output.UserAttributes, context)
            : undefined,
        UserCreateDate: output.UserCreateDate !== undefined && output.UserCreateDate !== null
            ? new Date(Math.round(output.UserCreateDate * 1000))
            : undefined,
        UserLastModifiedDate: output.UserLastModifiedDate !== undefined && output.UserLastModifiedDate !== null
            ? new Date(Math.round(output.UserLastModifiedDate * 1000))
            : undefined,
        UserMFASettingList: output.UserMFASettingList !== undefined && output.UserMFASettingList !== null
            ? deserializeAws_json1_1UserMFASettingListType(output.UserMFASettingList, context)
            : undefined,
        UserStatus: output.UserStatus !== undefined && output.UserStatus !== null ? output.UserStatus : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
var deserializeAws_json1_1AdminInitiateAuthResponse = function (output, context) {
    return {
        AuthenticationResult: output.AuthenticationResult !== undefined && output.AuthenticationResult !== null
            ? deserializeAws_json1_1AuthenticationResultType(output.AuthenticationResult, context)
            : undefined,
        ChallengeName: output.ChallengeName !== undefined && output.ChallengeName !== null ? output.ChallengeName : undefined,
        ChallengeParameters: output.ChallengeParameters !== undefined && output.ChallengeParameters !== null
            ? deserializeAws_json1_1ChallengeParametersType(output.ChallengeParameters, context)
            : undefined,
        Session: output.Session !== undefined && output.Session !== null ? output.Session : undefined,
    };
};
var deserializeAws_json1_1AdminLinkProviderForUserResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AdminListDevicesResponse = function (output, context) {
    return {
        Devices: output.Devices !== undefined && output.Devices !== null
            ? deserializeAws_json1_1DeviceListType(output.Devices, context)
            : undefined,
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
    };
};
var deserializeAws_json1_1AdminListGroupsForUserResponse = function (output, context) {
    return {
        Groups: output.Groups !== undefined && output.Groups !== null
            ? deserializeAws_json1_1GroupListType(output.Groups, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1AdminListUserAuthEventsResponse = function (output, context) {
    return {
        AuthEvents: output.AuthEvents !== undefined && output.AuthEvents !== null
            ? deserializeAws_json1_1AuthEventsType(output.AuthEvents, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1AdminResetUserPasswordResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AdminRespondToAuthChallengeResponse = function (output, context) {
    return {
        AuthenticationResult: output.AuthenticationResult !== undefined && output.AuthenticationResult !== null
            ? deserializeAws_json1_1AuthenticationResultType(output.AuthenticationResult, context)
            : undefined,
        ChallengeName: output.ChallengeName !== undefined && output.ChallengeName !== null ? output.ChallengeName : undefined,
        ChallengeParameters: output.ChallengeParameters !== undefined && output.ChallengeParameters !== null
            ? deserializeAws_json1_1ChallengeParametersType(output.ChallengeParameters, context)
            : undefined,
        Session: output.Session !== undefined && output.Session !== null ? output.Session : undefined,
    };
};
var deserializeAws_json1_1AdminSetUserMFAPreferenceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AdminSetUserPasswordResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AdminSetUserSettingsResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AdminUpdateAuthEventFeedbackResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AdminUpdateDeviceStatusResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AdminUpdateUserAttributesResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AdminUserGlobalSignOutResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AliasAttributesListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1AliasExistsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1AnalyticsConfigurationType = function (output, context) {
    return {
        ApplicationArn: output.ApplicationArn !== undefined && output.ApplicationArn !== null ? output.ApplicationArn : undefined,
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        ExternalId: output.ExternalId !== undefined && output.ExternalId !== null ? output.ExternalId : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        UserDataShared: output.UserDataShared !== undefined && output.UserDataShared !== null ? output.UserDataShared : undefined,
    };
};
var deserializeAws_json1_1AssociateSoftwareTokenResponse = function (output, context) {
    return {
        SecretCode: output.SecretCode !== undefined && output.SecretCode !== null ? output.SecretCode : undefined,
        Session: output.Session !== undefined && output.Session !== null ? output.Session : undefined,
    };
};
var deserializeAws_json1_1AttributeListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AttributeType(entry, context);
    });
};
var deserializeAws_json1_1AttributeMappingType = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1AttributeType = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1AuthenticationResultType = function (output, context) {
    return {
        AccessToken: output.AccessToken !== undefined && output.AccessToken !== null ? output.AccessToken : undefined,
        ExpiresIn: output.ExpiresIn !== undefined && output.ExpiresIn !== null ? output.ExpiresIn : undefined,
        IdToken: output.IdToken !== undefined && output.IdToken !== null ? output.IdToken : undefined,
        NewDeviceMetadata: output.NewDeviceMetadata !== undefined && output.NewDeviceMetadata !== null
            ? deserializeAws_json1_1NewDeviceMetadataType(output.NewDeviceMetadata, context)
            : undefined,
        RefreshToken: output.RefreshToken !== undefined && output.RefreshToken !== null ? output.RefreshToken : undefined,
        TokenType: output.TokenType !== undefined && output.TokenType !== null ? output.TokenType : undefined,
    };
};
var deserializeAws_json1_1AuthEventsType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AuthEventType(entry, context);
    });
};
var deserializeAws_json1_1AuthEventType = function (output, context) {
    return {
        ChallengeResponses: output.ChallengeResponses !== undefined && output.ChallengeResponses !== null
            ? deserializeAws_json1_1ChallengeResponseListType(output.ChallengeResponses, context)
            : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        EventContextData: output.EventContextData !== undefined && output.EventContextData !== null
            ? deserializeAws_json1_1EventContextDataType(output.EventContextData, context)
            : undefined,
        EventFeedback: output.EventFeedback !== undefined && output.EventFeedback !== null
            ? deserializeAws_json1_1EventFeedbackType(output.EventFeedback, context)
            : undefined,
        EventId: output.EventId !== undefined && output.EventId !== null ? output.EventId : undefined,
        EventResponse: output.EventResponse !== undefined && output.EventResponse !== null ? output.EventResponse : undefined,
        EventRisk: output.EventRisk !== undefined && output.EventRisk !== null
            ? deserializeAws_json1_1EventRiskType(output.EventRisk, context)
            : undefined,
        EventType: output.EventType !== undefined && output.EventType !== null ? output.EventType : undefined,
    };
};
var deserializeAws_json1_1BlockedIPRangeListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1CallbackURLsListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ChallengeParametersType = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1ChallengeResponseListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ChallengeResponseType(entry, context);
    });
};
var deserializeAws_json1_1ChallengeResponseType = function (output, context) {
    return {
        ChallengeName: output.ChallengeName !== undefined && output.ChallengeName !== null ? output.ChallengeName : undefined,
        ChallengeResponse: output.ChallengeResponse !== undefined && output.ChallengeResponse !== null
            ? output.ChallengeResponse
            : undefined,
    };
};
var deserializeAws_json1_1ChangePasswordResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1ClientPermissionListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1CodeDeliveryDetailsListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CodeDeliveryDetailsType(entry, context);
    });
};
var deserializeAws_json1_1CodeDeliveryDetailsType = function (output, context) {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        DeliveryMedium: output.DeliveryMedium !== undefined && output.DeliveryMedium !== null ? output.DeliveryMedium : undefined,
        Destination: output.Destination !== undefined && output.Destination !== null ? output.Destination : undefined,
    };
};
var deserializeAws_json1_1CodeDeliveryFailureException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CodeMismatchException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CompromisedCredentialsActionsType = function (output, context) {
    return {
        EventAction: output.EventAction !== undefined && output.EventAction !== null ? output.EventAction : undefined,
    };
};
var deserializeAws_json1_1CompromisedCredentialsRiskConfigurationType = function (output, context) {
    return {
        Actions: output.Actions !== undefined && output.Actions !== null
            ? deserializeAws_json1_1CompromisedCredentialsActionsType(output.Actions, context)
            : undefined,
        EventFilter: output.EventFilter !== undefined && output.EventFilter !== null
            ? deserializeAws_json1_1EventFiltersType(output.EventFilter, context)
            : undefined,
    };
};
var deserializeAws_json1_1ConcurrentModificationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ConfirmDeviceResponse = function (output, context) {
    return {
        UserConfirmationNecessary: output.UserConfirmationNecessary !== undefined && output.UserConfirmationNecessary !== null
            ? output.UserConfirmationNecessary
            : undefined,
    };
};
var deserializeAws_json1_1ConfirmForgotPasswordResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1ConfirmSignUpResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1CreateGroupResponse = function (output, context) {
    return {
        Group: output.Group !== undefined && output.Group !== null
            ? deserializeAws_json1_1GroupType(output.Group, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateIdentityProviderResponse = function (output, context) {
    return {
        IdentityProvider: output.IdentityProvider !== undefined && output.IdentityProvider !== null
            ? deserializeAws_json1_1IdentityProviderType(output.IdentityProvider, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateResourceServerResponse = function (output, context) {
    return {
        ResourceServer: output.ResourceServer !== undefined && output.ResourceServer !== null
            ? deserializeAws_json1_1ResourceServerType(output.ResourceServer, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateUserImportJobResponse = function (output, context) {
    return {
        UserImportJob: output.UserImportJob !== undefined && output.UserImportJob !== null
            ? deserializeAws_json1_1UserImportJobType(output.UserImportJob, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateUserPoolClientResponse = function (output, context) {
    return {
        UserPoolClient: output.UserPoolClient !== undefined && output.UserPoolClient !== null
            ? deserializeAws_json1_1UserPoolClientType(output.UserPoolClient, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateUserPoolDomainResponse = function (output, context) {
    return {
        CloudFrontDomain: output.CloudFrontDomain !== undefined && output.CloudFrontDomain !== null ? output.CloudFrontDomain : undefined,
    };
};
var deserializeAws_json1_1CreateUserPoolResponse = function (output, context) {
    return {
        UserPool: output.UserPool !== undefined && output.UserPool !== null
            ? deserializeAws_json1_1UserPoolType(output.UserPool, context)
            : undefined,
    };
};
var deserializeAws_json1_1CustomDomainConfigType = function (output, context) {
    return {
        CertificateArn: output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
    };
};
var deserializeAws_json1_1CustomEmailLambdaVersionConfigType = function (output, context) {
    return {
        LambdaArn: output.LambdaArn !== undefined && output.LambdaArn !== null ? output.LambdaArn : undefined,
        LambdaVersion: output.LambdaVersion !== undefined && output.LambdaVersion !== null ? output.LambdaVersion : undefined,
    };
};
var deserializeAws_json1_1CustomSMSLambdaVersionConfigType = function (output, context) {
    return {
        LambdaArn: output.LambdaArn !== undefined && output.LambdaArn !== null ? output.LambdaArn : undefined,
        LambdaVersion: output.LambdaVersion !== undefined && output.LambdaVersion !== null ? output.LambdaVersion : undefined,
    };
};
var deserializeAws_json1_1DeleteUserAttributesResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteUserPoolDomainResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DescribeIdentityProviderResponse = function (output, context) {
    return {
        IdentityProvider: output.IdentityProvider !== undefined && output.IdentityProvider !== null
            ? deserializeAws_json1_1IdentityProviderType(output.IdentityProvider, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeResourceServerResponse = function (output, context) {
    return {
        ResourceServer: output.ResourceServer !== undefined && output.ResourceServer !== null
            ? deserializeAws_json1_1ResourceServerType(output.ResourceServer, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeRiskConfigurationResponse = function (output, context) {
    return {
        RiskConfiguration: output.RiskConfiguration !== undefined && output.RiskConfiguration !== null
            ? deserializeAws_json1_1RiskConfigurationType(output.RiskConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeUserImportJobResponse = function (output, context) {
    return {
        UserImportJob: output.UserImportJob !== undefined && output.UserImportJob !== null
            ? deserializeAws_json1_1UserImportJobType(output.UserImportJob, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeUserPoolClientResponse = function (output, context) {
    return {
        UserPoolClient: output.UserPoolClient !== undefined && output.UserPoolClient !== null
            ? deserializeAws_json1_1UserPoolClientType(output.UserPoolClient, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeUserPoolDomainResponse = function (output, context) {
    return {
        DomainDescription: output.DomainDescription !== undefined && output.DomainDescription !== null
            ? deserializeAws_json1_1DomainDescriptionType(output.DomainDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeUserPoolResponse = function (output, context) {
    return {
        UserPool: output.UserPool !== undefined && output.UserPool !== null
            ? deserializeAws_json1_1UserPoolType(output.UserPool, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeviceConfigurationType = function (output, context) {
    return {
        ChallengeRequiredOnNewDevice: output.ChallengeRequiredOnNewDevice !== undefined && output.ChallengeRequiredOnNewDevice !== null
            ? output.ChallengeRequiredOnNewDevice
            : undefined,
        DeviceOnlyRememberedOnUserPrompt: output.DeviceOnlyRememberedOnUserPrompt !== undefined && output.DeviceOnlyRememberedOnUserPrompt !== null
            ? output.DeviceOnlyRememberedOnUserPrompt
            : undefined,
    };
};
var deserializeAws_json1_1DeviceListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DeviceType(entry, context);
    });
};
var deserializeAws_json1_1DeviceType = function (output, context) {
    return {
        DeviceAttributes: output.DeviceAttributes !== undefined && output.DeviceAttributes !== null
            ? deserializeAws_json1_1AttributeListType(output.DeviceAttributes, context)
            : undefined,
        DeviceCreateDate: output.DeviceCreateDate !== undefined && output.DeviceCreateDate !== null
            ? new Date(Math.round(output.DeviceCreateDate * 1000))
            : undefined,
        DeviceKey: output.DeviceKey !== undefined && output.DeviceKey !== null ? output.DeviceKey : undefined,
        DeviceLastAuthenticatedDate: output.DeviceLastAuthenticatedDate !== undefined && output.DeviceLastAuthenticatedDate !== null
            ? new Date(Math.round(output.DeviceLastAuthenticatedDate * 1000))
            : undefined,
        DeviceLastModifiedDate: output.DeviceLastModifiedDate !== undefined && output.DeviceLastModifiedDate !== null
            ? new Date(Math.round(output.DeviceLastModifiedDate * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1DomainDescriptionType = function (output, context) {
    return {
        AWSAccountId: output.AWSAccountId !== undefined && output.AWSAccountId !== null ? output.AWSAccountId : undefined,
        CloudFrontDistribution: output.CloudFrontDistribution !== undefined && output.CloudFrontDistribution !== null
            ? output.CloudFrontDistribution
            : undefined,
        CustomDomainConfig: output.CustomDomainConfig !== undefined && output.CustomDomainConfig !== null
            ? deserializeAws_json1_1CustomDomainConfigType(output.CustomDomainConfig, context)
            : undefined,
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
        S3Bucket: output.S3Bucket !== undefined && output.S3Bucket !== null ? output.S3Bucket : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
var deserializeAws_json1_1DuplicateProviderException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1EmailConfigurationType = function (output, context) {
    return {
        ConfigurationSet: output.ConfigurationSet !== undefined && output.ConfigurationSet !== null ? output.ConfigurationSet : undefined,
        EmailSendingAccount: output.EmailSendingAccount !== undefined && output.EmailSendingAccount !== null
            ? output.EmailSendingAccount
            : undefined,
        From: output.From !== undefined && output.From !== null ? output.From : undefined,
        ReplyToEmailAddress: output.ReplyToEmailAddress !== undefined && output.ReplyToEmailAddress !== null
            ? output.ReplyToEmailAddress
            : undefined,
        SourceArn: output.SourceArn !== undefined && output.SourceArn !== null ? output.SourceArn : undefined,
    };
};
var deserializeAws_json1_1EnableSoftwareTokenMFAException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1EventContextDataType = function (output, context) {
    return {
        City: output.City !== undefined && output.City !== null ? output.City : undefined,
        Country: output.Country !== undefined && output.Country !== null ? output.Country : undefined,
        DeviceName: output.DeviceName !== undefined && output.DeviceName !== null ? output.DeviceName : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
    };
};
var deserializeAws_json1_1EventFeedbackType = function (output, context) {
    return {
        FeedbackDate: output.FeedbackDate !== undefined && output.FeedbackDate !== null
            ? new Date(Math.round(output.FeedbackDate * 1000))
            : undefined,
        FeedbackValue: output.FeedbackValue !== undefined && output.FeedbackValue !== null ? output.FeedbackValue : undefined,
        Provider: output.Provider !== undefined && output.Provider !== null ? output.Provider : undefined,
    };
};
var deserializeAws_json1_1EventFiltersType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1EventRiskType = function (output, context) {
    return {
        CompromisedCredentialsDetected: output.CompromisedCredentialsDetected !== undefined && output.CompromisedCredentialsDetected !== null
            ? output.CompromisedCredentialsDetected
            : undefined,
        RiskDecision: output.RiskDecision !== undefined && output.RiskDecision !== null ? output.RiskDecision : undefined,
        RiskLevel: output.RiskLevel !== undefined && output.RiskLevel !== null ? output.RiskLevel : undefined,
    };
};
var deserializeAws_json1_1ExpiredCodeException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ExplicitAuthFlowsListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ForgotPasswordResponse = function (output, context) {
    return {
        CodeDeliveryDetails: output.CodeDeliveryDetails !== undefined && output.CodeDeliveryDetails !== null
            ? deserializeAws_json1_1CodeDeliveryDetailsType(output.CodeDeliveryDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetCSVHeaderResponse = function (output, context) {
    return {
        CSVHeader: output.CSVHeader !== undefined && output.CSVHeader !== null
            ? deserializeAws_json1_1ListOfStringTypes(output.CSVHeader, context)
            : undefined,
        UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined,
    };
};
var deserializeAws_json1_1GetDeviceResponse = function (output, context) {
    return {
        Device: output.Device !== undefined && output.Device !== null
            ? deserializeAws_json1_1DeviceType(output.Device, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetGroupResponse = function (output, context) {
    return {
        Group: output.Group !== undefined && output.Group !== null
            ? deserializeAws_json1_1GroupType(output.Group, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetIdentityProviderByIdentifierResponse = function (output, context) {
    return {
        IdentityProvider: output.IdentityProvider !== undefined && output.IdentityProvider !== null
            ? deserializeAws_json1_1IdentityProviderType(output.IdentityProvider, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetSigningCertificateResponse = function (output, context) {
    return {
        Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
    };
};
var deserializeAws_json1_1GetUICustomizationResponse = function (output, context) {
    return {
        UICustomization: output.UICustomization !== undefined && output.UICustomization !== null
            ? deserializeAws_json1_1UICustomizationType(output.UICustomization, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetUserAttributeVerificationCodeResponse = function (output, context) {
    return {
        CodeDeliveryDetails: output.CodeDeliveryDetails !== undefined && output.CodeDeliveryDetails !== null
            ? deserializeAws_json1_1CodeDeliveryDetailsType(output.CodeDeliveryDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetUserPoolMfaConfigResponse = function (output, context) {
    return {
        MfaConfiguration: output.MfaConfiguration !== undefined && output.MfaConfiguration !== null ? output.MfaConfiguration : undefined,
        SmsMfaConfiguration: output.SmsMfaConfiguration !== undefined && output.SmsMfaConfiguration !== null
            ? deserializeAws_json1_1SmsMfaConfigType(output.SmsMfaConfiguration, context)
            : undefined,
        SoftwareTokenMfaConfiguration: output.SoftwareTokenMfaConfiguration !== undefined && output.SoftwareTokenMfaConfiguration !== null
            ? deserializeAws_json1_1SoftwareTokenMfaConfigType(output.SoftwareTokenMfaConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetUserResponse = function (output, context) {
    return {
        MFAOptions: output.MFAOptions !== undefined && output.MFAOptions !== null
            ? deserializeAws_json1_1MFAOptionListType(output.MFAOptions, context)
            : undefined,
        PreferredMfaSetting: output.PreferredMfaSetting !== undefined && output.PreferredMfaSetting !== null
            ? output.PreferredMfaSetting
            : undefined,
        UserAttributes: output.UserAttributes !== undefined && output.UserAttributes !== null
            ? deserializeAws_json1_1AttributeListType(output.UserAttributes, context)
            : undefined,
        UserMFASettingList: output.UserMFASettingList !== undefined && output.UserMFASettingList !== null
            ? deserializeAws_json1_1UserMFASettingListType(output.UserMFASettingList, context)
            : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
var deserializeAws_json1_1GlobalSignOutResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1GroupExistsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1GroupListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GroupType(entry, context);
    });
};
var deserializeAws_json1_1GroupType = function (output, context) {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        Precedence: output.Precedence !== undefined && output.Precedence !== null ? output.Precedence : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined,
    };
};
var deserializeAws_json1_1IdentityProviderType = function (output, context) {
    return {
        AttributeMapping: output.AttributeMapping !== undefined && output.AttributeMapping !== null
            ? deserializeAws_json1_1AttributeMappingType(output.AttributeMapping, context)
            : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        IdpIdentifiers: output.IdpIdentifiers !== undefined && output.IdpIdentifiers !== null
            ? deserializeAws_json1_1IdpIdentifiersListType(output.IdpIdentifiers, context)
            : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        ProviderDetails: output.ProviderDetails !== undefined && output.ProviderDetails !== null
            ? deserializeAws_json1_1ProviderDetailsType(output.ProviderDetails, context)
            : undefined,
        ProviderName: output.ProviderName !== undefined && output.ProviderName !== null ? output.ProviderName : undefined,
        ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
        UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined,
    };
};
var deserializeAws_json1_1IdpIdentifiersListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1InitiateAuthResponse = function (output, context) {
    return {
        AuthenticationResult: output.AuthenticationResult !== undefined && output.AuthenticationResult !== null
            ? deserializeAws_json1_1AuthenticationResultType(output.AuthenticationResult, context)
            : undefined,
        ChallengeName: output.ChallengeName !== undefined && output.ChallengeName !== null ? output.ChallengeName : undefined,
        ChallengeParameters: output.ChallengeParameters !== undefined && output.ChallengeParameters !== null
            ? deserializeAws_json1_1ChallengeParametersType(output.ChallengeParameters, context)
            : undefined,
        Session: output.Session !== undefined && output.Session !== null ? output.Session : undefined,
    };
};
var deserializeAws_json1_1InternalErrorException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidEmailRoleAccessPolicyException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidLambdaResponseException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidOAuthFlowException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidParameterException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidPasswordException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidSmsRoleAccessPolicyException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidSmsRoleTrustRelationshipException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidUserPoolConfigurationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1LambdaConfigType = function (output, context) {
    return {
        CreateAuthChallenge: output.CreateAuthChallenge !== undefined && output.CreateAuthChallenge !== null
            ? output.CreateAuthChallenge
            : undefined,
        CustomEmailSender: output.CustomEmailSender !== undefined && output.CustomEmailSender !== null
            ? deserializeAws_json1_1CustomEmailLambdaVersionConfigType(output.CustomEmailSender, context)
            : undefined,
        CustomMessage: output.CustomMessage !== undefined && output.CustomMessage !== null ? output.CustomMessage : undefined,
        CustomSMSSender: output.CustomSMSSender !== undefined && output.CustomSMSSender !== null
            ? deserializeAws_json1_1CustomSMSLambdaVersionConfigType(output.CustomSMSSender, context)
            : undefined,
        DefineAuthChallenge: output.DefineAuthChallenge !== undefined && output.DefineAuthChallenge !== null
            ? output.DefineAuthChallenge
            : undefined,
        KMSKeyID: output.KMSKeyID !== undefined && output.KMSKeyID !== null ? output.KMSKeyID : undefined,
        PostAuthentication: output.PostAuthentication !== undefined && output.PostAuthentication !== null
            ? output.PostAuthentication
            : undefined,
        PostConfirmation: output.PostConfirmation !== undefined && output.PostConfirmation !== null ? output.PostConfirmation : undefined,
        PreAuthentication: output.PreAuthentication !== undefined && output.PreAuthentication !== null
            ? output.PreAuthentication
            : undefined,
        PreSignUp: output.PreSignUp !== undefined && output.PreSignUp !== null ? output.PreSignUp : undefined,
        PreTokenGeneration: output.PreTokenGeneration !== undefined && output.PreTokenGeneration !== null
            ? output.PreTokenGeneration
            : undefined,
        UserMigration: output.UserMigration !== undefined && output.UserMigration !== null ? output.UserMigration : undefined,
        VerifyAuthChallengeResponse: output.VerifyAuthChallengeResponse !== undefined && output.VerifyAuthChallengeResponse !== null
            ? output.VerifyAuthChallengeResponse
            : undefined,
    };
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ListDevicesResponse = function (output, context) {
    return {
        Devices: output.Devices !== undefined && output.Devices !== null
            ? deserializeAws_json1_1DeviceListType(output.Devices, context)
            : undefined,
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
    };
};
var deserializeAws_json1_1ListGroupsResponse = function (output, context) {
    return {
        Groups: output.Groups !== undefined && output.Groups !== null
            ? deserializeAws_json1_1GroupListType(output.Groups, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListIdentityProvidersResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Providers: output.Providers !== undefined && output.Providers !== null
            ? deserializeAws_json1_1ProvidersListType(output.Providers, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListOfStringTypes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ListResourceServersResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResourceServers: output.ResourceServers !== undefined && output.ResourceServers !== null
            ? deserializeAws_json1_1ResourceServersListType(output.ResourceServers, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListTagsForResourceResponse = function (output, context) {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1UserPoolTagsType(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListUserImportJobsResponse = function (output, context) {
    return {
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
        UserImportJobs: output.UserImportJobs !== undefined && output.UserImportJobs !== null
            ? deserializeAws_json1_1UserImportJobsListType(output.UserImportJobs, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListUserPoolClientsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        UserPoolClients: output.UserPoolClients !== undefined && output.UserPoolClients !== null
            ? deserializeAws_json1_1UserPoolClientListType(output.UserPoolClients, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListUserPoolsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        UserPools: output.UserPools !== undefined && output.UserPools !== null
            ? deserializeAws_json1_1UserPoolListType(output.UserPools, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListUsersInGroupResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Users: output.Users !== undefined && output.Users !== null
            ? deserializeAws_json1_1UsersListType(output.Users, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListUsersResponse = function (output, context) {
    return {
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
        Users: output.Users !== undefined && output.Users !== null
            ? deserializeAws_json1_1UsersListType(output.Users, context)
            : undefined,
    };
};
var deserializeAws_json1_1LogoutURLsListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1MessageTemplateType = function (output, context) {
    return {
        EmailMessage: output.EmailMessage !== undefined && output.EmailMessage !== null ? output.EmailMessage : undefined,
        EmailSubject: output.EmailSubject !== undefined && output.EmailSubject !== null ? output.EmailSubject : undefined,
        SMSMessage: output.SMSMessage !== undefined && output.SMSMessage !== null ? output.SMSMessage : undefined,
    };
};
var deserializeAws_json1_1MFAMethodNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1MFAOptionListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MFAOptionType(entry, context);
    });
};
var deserializeAws_json1_1MFAOptionType = function (output, context) {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        DeliveryMedium: output.DeliveryMedium !== undefined && output.DeliveryMedium !== null ? output.DeliveryMedium : undefined,
    };
};
var deserializeAws_json1_1NewDeviceMetadataType = function (output, context) {
    return {
        DeviceGroupKey: output.DeviceGroupKey !== undefined && output.DeviceGroupKey !== null ? output.DeviceGroupKey : undefined,
        DeviceKey: output.DeviceKey !== undefined && output.DeviceKey !== null ? output.DeviceKey : undefined,
    };
};
var deserializeAws_json1_1NotAuthorizedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NotifyConfigurationType = function (output, context) {
    return {
        BlockEmail: output.BlockEmail !== undefined && output.BlockEmail !== null
            ? deserializeAws_json1_1NotifyEmailType(output.BlockEmail, context)
            : undefined,
        From: output.From !== undefined && output.From !== null ? output.From : undefined,
        MfaEmail: output.MfaEmail !== undefined && output.MfaEmail !== null
            ? deserializeAws_json1_1NotifyEmailType(output.MfaEmail, context)
            : undefined,
        NoActionEmail: output.NoActionEmail !== undefined && output.NoActionEmail !== null
            ? deserializeAws_json1_1NotifyEmailType(output.NoActionEmail, context)
            : undefined,
        ReplyTo: output.ReplyTo !== undefined && output.ReplyTo !== null ? output.ReplyTo : undefined,
        SourceArn: output.SourceArn !== undefined && output.SourceArn !== null ? output.SourceArn : undefined,
    };
};
var deserializeAws_json1_1NotifyEmailType = function (output, context) {
    return {
        HtmlBody: output.HtmlBody !== undefined && output.HtmlBody !== null ? output.HtmlBody : undefined,
        Subject: output.Subject !== undefined && output.Subject !== null ? output.Subject : undefined,
        TextBody: output.TextBody !== undefined && output.TextBody !== null ? output.TextBody : undefined,
    };
};
var deserializeAws_json1_1NumberAttributeConstraintsType = function (output, context) {
    return {
        MaxValue: output.MaxValue !== undefined && output.MaxValue !== null ? output.MaxValue : undefined,
        MinValue: output.MinValue !== undefined && output.MinValue !== null ? output.MinValue : undefined,
    };
};
var deserializeAws_json1_1OAuthFlowsType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1PasswordPolicyType = function (output, context) {
    return {
        MinimumLength: output.MinimumLength !== undefined && output.MinimumLength !== null ? output.MinimumLength : undefined,
        RequireLowercase: output.RequireLowercase !== undefined && output.RequireLowercase !== null ? output.RequireLowercase : undefined,
        RequireNumbers: output.RequireNumbers !== undefined && output.RequireNumbers !== null ? output.RequireNumbers : undefined,
        RequireSymbols: output.RequireSymbols !== undefined && output.RequireSymbols !== null ? output.RequireSymbols : undefined,
        RequireUppercase: output.RequireUppercase !== undefined && output.RequireUppercase !== null ? output.RequireUppercase : undefined,
        TemporaryPasswordValidityDays: output.TemporaryPasswordValidityDays !== undefined && output.TemporaryPasswordValidityDays !== null
            ? output.TemporaryPasswordValidityDays
            : undefined,
    };
};
var deserializeAws_json1_1PasswordResetRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1PreconditionNotMetException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ProviderDescription = function (output, context) {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        ProviderName: output.ProviderName !== undefined && output.ProviderName !== null ? output.ProviderName : undefined,
        ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
    };
};
var deserializeAws_json1_1ProviderDetailsType = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1ProvidersListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProviderDescription(entry, context);
    });
};
var deserializeAws_json1_1RecoveryMechanismsType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RecoveryOptionType(entry, context);
    });
};
var deserializeAws_json1_1RecoveryOptionType = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
    };
};
var deserializeAws_json1_1ResendConfirmationCodeResponse = function (output, context) {
    return {
        CodeDeliveryDetails: output.CodeDeliveryDetails !== undefined && output.CodeDeliveryDetails !== null
            ? deserializeAws_json1_1CodeDeliveryDetailsType(output.CodeDeliveryDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ResourceServerScopeListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceServerScopeType(entry, context);
    });
};
var deserializeAws_json1_1ResourceServerScopeType = function (output, context) {
    return {
        ScopeDescription: output.ScopeDescription !== undefined && output.ScopeDescription !== null ? output.ScopeDescription : undefined,
        ScopeName: output.ScopeName !== undefined && output.ScopeName !== null ? output.ScopeName : undefined,
    };
};
var deserializeAws_json1_1ResourceServersListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceServerType(entry, context);
    });
};
var deserializeAws_json1_1ResourceServerType = function (output, context) {
    return {
        Identifier: output.Identifier !== undefined && output.Identifier !== null ? output.Identifier : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Scopes: output.Scopes !== undefined && output.Scopes !== null
            ? deserializeAws_json1_1ResourceServerScopeListType(output.Scopes, context)
            : undefined,
        UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined,
    };
};
var deserializeAws_json1_1RespondToAuthChallengeResponse = function (output, context) {
    return {
        AuthenticationResult: output.AuthenticationResult !== undefined && output.AuthenticationResult !== null
            ? deserializeAws_json1_1AuthenticationResultType(output.AuthenticationResult, context)
            : undefined,
        ChallengeName: output.ChallengeName !== undefined && output.ChallengeName !== null ? output.ChallengeName : undefined,
        ChallengeParameters: output.ChallengeParameters !== undefined && output.ChallengeParameters !== null
            ? deserializeAws_json1_1ChallengeParametersType(output.ChallengeParameters, context)
            : undefined,
        Session: output.Session !== undefined && output.Session !== null ? output.Session : undefined,
    };
};
var deserializeAws_json1_1RiskConfigurationType = function (output, context) {
    return {
        AccountTakeoverRiskConfiguration: output.AccountTakeoverRiskConfiguration !== undefined && output.AccountTakeoverRiskConfiguration !== null
            ? deserializeAws_json1_1AccountTakeoverRiskConfigurationType(output.AccountTakeoverRiskConfiguration, context)
            : undefined,
        ClientId: output.ClientId !== undefined && output.ClientId !== null ? output.ClientId : undefined,
        CompromisedCredentialsRiskConfiguration: output.CompromisedCredentialsRiskConfiguration !== undefined &&
            output.CompromisedCredentialsRiskConfiguration !== null
            ? deserializeAws_json1_1CompromisedCredentialsRiskConfigurationType(output.CompromisedCredentialsRiskConfiguration, context)
            : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        RiskExceptionConfiguration: output.RiskExceptionConfiguration !== undefined && output.RiskExceptionConfiguration !== null
            ? deserializeAws_json1_1RiskExceptionConfigurationType(output.RiskExceptionConfiguration, context)
            : undefined,
        UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined,
    };
};
var deserializeAws_json1_1RiskExceptionConfigurationType = function (output, context) {
    return {
        BlockedIPRangeList: output.BlockedIPRangeList !== undefined && output.BlockedIPRangeList !== null
            ? deserializeAws_json1_1BlockedIPRangeListType(output.BlockedIPRangeList, context)
            : undefined,
        SkippedIPRangeList: output.SkippedIPRangeList !== undefined && output.SkippedIPRangeList !== null
            ? deserializeAws_json1_1SkippedIPRangeListType(output.SkippedIPRangeList, context)
            : undefined,
    };
};
var deserializeAws_json1_1SchemaAttributesListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SchemaAttributeType(entry, context);
    });
};
var deserializeAws_json1_1SchemaAttributeType = function (output, context) {
    return {
        AttributeDataType: output.AttributeDataType !== undefined && output.AttributeDataType !== null
            ? output.AttributeDataType
            : undefined,
        DeveloperOnlyAttribute: output.DeveloperOnlyAttribute !== undefined && output.DeveloperOnlyAttribute !== null
            ? output.DeveloperOnlyAttribute
            : undefined,
        Mutable: output.Mutable !== undefined && output.Mutable !== null ? output.Mutable : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NumberAttributeConstraints: output.NumberAttributeConstraints !== undefined && output.NumberAttributeConstraints !== null
            ? deserializeAws_json1_1NumberAttributeConstraintsType(output.NumberAttributeConstraints, context)
            : undefined,
        Required: output.Required !== undefined && output.Required !== null ? output.Required : undefined,
        StringAttributeConstraints: output.StringAttributeConstraints !== undefined && output.StringAttributeConstraints !== null
            ? deserializeAws_json1_1StringAttributeConstraintsType(output.StringAttributeConstraints, context)
            : undefined,
    };
};
var deserializeAws_json1_1ScopeDoesNotExistException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ScopeListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1SetRiskConfigurationResponse = function (output, context) {
    return {
        RiskConfiguration: output.RiskConfiguration !== undefined && output.RiskConfiguration !== null
            ? deserializeAws_json1_1RiskConfigurationType(output.RiskConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1SetUICustomizationResponse = function (output, context) {
    return {
        UICustomization: output.UICustomization !== undefined && output.UICustomization !== null
            ? deserializeAws_json1_1UICustomizationType(output.UICustomization, context)
            : undefined,
    };
};
var deserializeAws_json1_1SetUserMFAPreferenceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1SetUserPoolMfaConfigResponse = function (output, context) {
    return {
        MfaConfiguration: output.MfaConfiguration !== undefined && output.MfaConfiguration !== null ? output.MfaConfiguration : undefined,
        SmsMfaConfiguration: output.SmsMfaConfiguration !== undefined && output.SmsMfaConfiguration !== null
            ? deserializeAws_json1_1SmsMfaConfigType(output.SmsMfaConfiguration, context)
            : undefined,
        SoftwareTokenMfaConfiguration: output.SoftwareTokenMfaConfiguration !== undefined && output.SoftwareTokenMfaConfiguration !== null
            ? deserializeAws_json1_1SoftwareTokenMfaConfigType(output.SoftwareTokenMfaConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1SetUserSettingsResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1SignUpResponse = function (output, context) {
    return {
        CodeDeliveryDetails: output.CodeDeliveryDetails !== undefined && output.CodeDeliveryDetails !== null
            ? deserializeAws_json1_1CodeDeliveryDetailsType(output.CodeDeliveryDetails, context)
            : undefined,
        UserConfirmed: output.UserConfirmed !== undefined && output.UserConfirmed !== null ? output.UserConfirmed : undefined,
        UserSub: output.UserSub !== undefined && output.UserSub !== null ? output.UserSub : undefined,
    };
};
var deserializeAws_json1_1SkippedIPRangeListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1SmsConfigurationType = function (output, context) {
    return {
        ExternalId: output.ExternalId !== undefined && output.ExternalId !== null ? output.ExternalId : undefined,
        SnsCallerArn: output.SnsCallerArn !== undefined && output.SnsCallerArn !== null ? output.SnsCallerArn : undefined,
    };
};
var deserializeAws_json1_1SmsMfaConfigType = function (output, context) {
    return {
        SmsAuthenticationMessage: output.SmsAuthenticationMessage !== undefined && output.SmsAuthenticationMessage !== null
            ? output.SmsAuthenticationMessage
            : undefined,
        SmsConfiguration: output.SmsConfiguration !== undefined && output.SmsConfiguration !== null
            ? deserializeAws_json1_1SmsConfigurationType(output.SmsConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1SoftwareTokenMfaConfigType = function (output, context) {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
var deserializeAws_json1_1SoftwareTokenMFANotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1StartUserImportJobResponse = function (output, context) {
    return {
        UserImportJob: output.UserImportJob !== undefined && output.UserImportJob !== null
            ? deserializeAws_json1_1UserImportJobType(output.UserImportJob, context)
            : undefined,
    };
};
var deserializeAws_json1_1StopUserImportJobResponse = function (output, context) {
    return {
        UserImportJob: output.UserImportJob !== undefined && output.UserImportJob !== null
            ? deserializeAws_json1_1UserImportJobType(output.UserImportJob, context)
            : undefined,
    };
};
var deserializeAws_json1_1StringAttributeConstraintsType = function (output, context) {
    return {
        MaxLength: output.MaxLength !== undefined && output.MaxLength !== null ? output.MaxLength : undefined,
        MinLength: output.MinLength !== undefined && output.MinLength !== null ? output.MinLength : undefined,
    };
};
var deserializeAws_json1_1SupportedIdentityProvidersListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1TagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1TokenValidityUnitsType = function (output, context) {
    return {
        AccessToken: output.AccessToken !== undefined && output.AccessToken !== null ? output.AccessToken : undefined,
        IdToken: output.IdToken !== undefined && output.IdToken !== null ? output.IdToken : undefined,
        RefreshToken: output.RefreshToken !== undefined && output.RefreshToken !== null ? output.RefreshToken : undefined,
    };
};
var deserializeAws_json1_1TooManyFailedAttemptsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1TooManyRequestsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UICustomizationType = function (output, context) {
    return {
        CSS: output.CSS !== undefined && output.CSS !== null ? output.CSS : undefined,
        CSSVersion: output.CSSVersion !== undefined && output.CSSVersion !== null ? output.CSSVersion : undefined,
        ClientId: output.ClientId !== undefined && output.ClientId !== null ? output.ClientId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        ImageUrl: output.ImageUrl !== undefined && output.ImageUrl !== null ? output.ImageUrl : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined,
    };
};
var deserializeAws_json1_1UnexpectedLambdaException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UnsupportedIdentityProviderException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UnsupportedUserStateException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UntagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateAuthEventFeedbackResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateDeviceStatusResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateGroupResponse = function (output, context) {
    return {
        Group: output.Group !== undefined && output.Group !== null
            ? deserializeAws_json1_1GroupType(output.Group, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateIdentityProviderResponse = function (output, context) {
    return {
        IdentityProvider: output.IdentityProvider !== undefined && output.IdentityProvider !== null
            ? deserializeAws_json1_1IdentityProviderType(output.IdentityProvider, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateResourceServerResponse = function (output, context) {
    return {
        ResourceServer: output.ResourceServer !== undefined && output.ResourceServer !== null
            ? deserializeAws_json1_1ResourceServerType(output.ResourceServer, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateUserAttributesResponse = function (output, context) {
    return {
        CodeDeliveryDetailsList: output.CodeDeliveryDetailsList !== undefined && output.CodeDeliveryDetailsList !== null
            ? deserializeAws_json1_1CodeDeliveryDetailsListType(output.CodeDeliveryDetailsList, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateUserPoolClientResponse = function (output, context) {
    return {
        UserPoolClient: output.UserPoolClient !== undefined && output.UserPoolClient !== null
            ? deserializeAws_json1_1UserPoolClientType(output.UserPoolClient, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateUserPoolDomainResponse = function (output, context) {
    return {
        CloudFrontDomain: output.CloudFrontDomain !== undefined && output.CloudFrontDomain !== null ? output.CloudFrontDomain : undefined,
    };
};
var deserializeAws_json1_1UpdateUserPoolResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UserImportInProgressException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UserImportJobsListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UserImportJobType(entry, context);
    });
};
var deserializeAws_json1_1UserImportJobType = function (output, context) {
    return {
        CloudWatchLogsRoleArn: output.CloudWatchLogsRoleArn !== undefined && output.CloudWatchLogsRoleArn !== null
            ? output.CloudWatchLogsRoleArn
            : undefined,
        CompletionDate: output.CompletionDate !== undefined && output.CompletionDate !== null
            ? new Date(Math.round(output.CompletionDate * 1000))
            : undefined,
        CompletionMessage: output.CompletionMessage !== undefined && output.CompletionMessage !== null
            ? output.CompletionMessage
            : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        FailedUsers: output.FailedUsers !== undefined && output.FailedUsers !== null ? output.FailedUsers : undefined,
        ImportedUsers: output.ImportedUsers !== undefined && output.ImportedUsers !== null ? output.ImportedUsers : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
        PreSignedUrl: output.PreSignedUrl !== undefined && output.PreSignedUrl !== null ? output.PreSignedUrl : undefined,
        SkippedUsers: output.SkippedUsers !== undefined && output.SkippedUsers !== null ? output.SkippedUsers : undefined,
        StartDate: output.StartDate !== undefined && output.StartDate !== null
            ? new Date(Math.round(output.StartDate * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined,
    };
};
var deserializeAws_json1_1UserLambdaValidationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UserMFASettingListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1UsernameAttributesListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1UsernameConfigurationType = function (output, context) {
    return {
        CaseSensitive: output.CaseSensitive !== undefined && output.CaseSensitive !== null ? output.CaseSensitive : undefined,
    };
};
var deserializeAws_json1_1UsernameExistsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UserNotConfirmedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UserNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UserPoolAddOnNotEnabledException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UserPoolAddOnsType = function (output, context) {
    return {
        AdvancedSecurityMode: output.AdvancedSecurityMode !== undefined && output.AdvancedSecurityMode !== null
            ? output.AdvancedSecurityMode
            : undefined,
    };
};
var deserializeAws_json1_1UserPoolClientDescription = function (output, context) {
    return {
        ClientId: output.ClientId !== undefined && output.ClientId !== null ? output.ClientId : undefined,
        ClientName: output.ClientName !== undefined && output.ClientName !== null ? output.ClientName : undefined,
        UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined,
    };
};
var deserializeAws_json1_1UserPoolClientListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UserPoolClientDescription(entry, context);
    });
};
var deserializeAws_json1_1UserPoolClientType = function (output, context) {
    return {
        AccessTokenValidity: output.AccessTokenValidity !== undefined && output.AccessTokenValidity !== null
            ? output.AccessTokenValidity
            : undefined,
        AllowedOAuthFlows: output.AllowedOAuthFlows !== undefined && output.AllowedOAuthFlows !== null
            ? deserializeAws_json1_1OAuthFlowsType(output.AllowedOAuthFlows, context)
            : undefined,
        AllowedOAuthFlowsUserPoolClient: output.AllowedOAuthFlowsUserPoolClient !== undefined && output.AllowedOAuthFlowsUserPoolClient !== null
            ? output.AllowedOAuthFlowsUserPoolClient
            : undefined,
        AllowedOAuthScopes: output.AllowedOAuthScopes !== undefined && output.AllowedOAuthScopes !== null
            ? deserializeAws_json1_1ScopeListType(output.AllowedOAuthScopes, context)
            : undefined,
        AnalyticsConfiguration: output.AnalyticsConfiguration !== undefined && output.AnalyticsConfiguration !== null
            ? deserializeAws_json1_1AnalyticsConfigurationType(output.AnalyticsConfiguration, context)
            : undefined,
        CallbackURLs: output.CallbackURLs !== undefined && output.CallbackURLs !== null
            ? deserializeAws_json1_1CallbackURLsListType(output.CallbackURLs, context)
            : undefined,
        ClientId: output.ClientId !== undefined && output.ClientId !== null ? output.ClientId : undefined,
        ClientName: output.ClientName !== undefined && output.ClientName !== null ? output.ClientName : undefined,
        ClientSecret: output.ClientSecret !== undefined && output.ClientSecret !== null ? output.ClientSecret : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        DefaultRedirectURI: output.DefaultRedirectURI !== undefined && output.DefaultRedirectURI !== null
            ? output.DefaultRedirectURI
            : undefined,
        ExplicitAuthFlows: output.ExplicitAuthFlows !== undefined && output.ExplicitAuthFlows !== null
            ? deserializeAws_json1_1ExplicitAuthFlowsListType(output.ExplicitAuthFlows, context)
            : undefined,
        IdTokenValidity: output.IdTokenValidity !== undefined && output.IdTokenValidity !== null ? output.IdTokenValidity : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        LogoutURLs: output.LogoutURLs !== undefined && output.LogoutURLs !== null
            ? deserializeAws_json1_1LogoutURLsListType(output.LogoutURLs, context)
            : undefined,
        PreventUserExistenceErrors: output.PreventUserExistenceErrors !== undefined && output.PreventUserExistenceErrors !== null
            ? output.PreventUserExistenceErrors
            : undefined,
        ReadAttributes: output.ReadAttributes !== undefined && output.ReadAttributes !== null
            ? deserializeAws_json1_1ClientPermissionListType(output.ReadAttributes, context)
            : undefined,
        RefreshTokenValidity: output.RefreshTokenValidity !== undefined && output.RefreshTokenValidity !== null
            ? output.RefreshTokenValidity
            : undefined,
        SupportedIdentityProviders: output.SupportedIdentityProviders !== undefined && output.SupportedIdentityProviders !== null
            ? deserializeAws_json1_1SupportedIdentityProvidersListType(output.SupportedIdentityProviders, context)
            : undefined,
        TokenValidityUnits: output.TokenValidityUnits !== undefined && output.TokenValidityUnits !== null
            ? deserializeAws_json1_1TokenValidityUnitsType(output.TokenValidityUnits, context)
            : undefined,
        UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined,
        WriteAttributes: output.WriteAttributes !== undefined && output.WriteAttributes !== null
            ? deserializeAws_json1_1ClientPermissionListType(output.WriteAttributes, context)
            : undefined,
    };
};
var deserializeAws_json1_1UserPoolDescriptionType = function (output, context) {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LambdaConfig: output.LambdaConfig !== undefined && output.LambdaConfig !== null
            ? deserializeAws_json1_1LambdaConfigType(output.LambdaConfig, context)
            : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_1UserPoolListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UserPoolDescriptionType(entry, context);
    });
};
var deserializeAws_json1_1UserPoolPolicyType = function (output, context) {
    return {
        PasswordPolicy: output.PasswordPolicy !== undefined && output.PasswordPolicy !== null
            ? deserializeAws_json1_1PasswordPolicyType(output.PasswordPolicy, context)
            : undefined,
    };
};
var deserializeAws_json1_1UserPoolTaggingException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UserPoolTagsType = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1UserPoolType = function (output, context) {
    return {
        AccountRecoverySetting: output.AccountRecoverySetting !== undefined && output.AccountRecoverySetting !== null
            ? deserializeAws_json1_1AccountRecoverySettingType(output.AccountRecoverySetting, context)
            : undefined,
        AdminCreateUserConfig: output.AdminCreateUserConfig !== undefined && output.AdminCreateUserConfig !== null
            ? deserializeAws_json1_1AdminCreateUserConfigType(output.AdminCreateUserConfig, context)
            : undefined,
        AliasAttributes: output.AliasAttributes !== undefined && output.AliasAttributes !== null
            ? deserializeAws_json1_1AliasAttributesListType(output.AliasAttributes, context)
            : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        AutoVerifiedAttributes: output.AutoVerifiedAttributes !== undefined && output.AutoVerifiedAttributes !== null
            ? deserializeAws_json1_1VerifiedAttributesListType(output.AutoVerifiedAttributes, context)
            : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        CustomDomain: output.CustomDomain !== undefined && output.CustomDomain !== null ? output.CustomDomain : undefined,
        DeviceConfiguration: output.DeviceConfiguration !== undefined && output.DeviceConfiguration !== null
            ? deserializeAws_json1_1DeviceConfigurationType(output.DeviceConfiguration, context)
            : undefined,
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
        EmailConfiguration: output.EmailConfiguration !== undefined && output.EmailConfiguration !== null
            ? deserializeAws_json1_1EmailConfigurationType(output.EmailConfiguration, context)
            : undefined,
        EmailConfigurationFailure: output.EmailConfigurationFailure !== undefined && output.EmailConfigurationFailure !== null
            ? output.EmailConfigurationFailure
            : undefined,
        EmailVerificationMessage: output.EmailVerificationMessage !== undefined && output.EmailVerificationMessage !== null
            ? output.EmailVerificationMessage
            : undefined,
        EmailVerificationSubject: output.EmailVerificationSubject !== undefined && output.EmailVerificationSubject !== null
            ? output.EmailVerificationSubject
            : undefined,
        EstimatedNumberOfUsers: output.EstimatedNumberOfUsers !== undefined && output.EstimatedNumberOfUsers !== null
            ? output.EstimatedNumberOfUsers
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LambdaConfig: output.LambdaConfig !== undefined && output.LambdaConfig !== null
            ? deserializeAws_json1_1LambdaConfigType(output.LambdaConfig, context)
            : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        MfaConfiguration: output.MfaConfiguration !== undefined && output.MfaConfiguration !== null ? output.MfaConfiguration : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Policies: output.Policies !== undefined && output.Policies !== null
            ? deserializeAws_json1_1UserPoolPolicyType(output.Policies, context)
            : undefined,
        SchemaAttributes: output.SchemaAttributes !== undefined && output.SchemaAttributes !== null
            ? deserializeAws_json1_1SchemaAttributesListType(output.SchemaAttributes, context)
            : undefined,
        SmsAuthenticationMessage: output.SmsAuthenticationMessage !== undefined && output.SmsAuthenticationMessage !== null
            ? output.SmsAuthenticationMessage
            : undefined,
        SmsConfiguration: output.SmsConfiguration !== undefined && output.SmsConfiguration !== null
            ? deserializeAws_json1_1SmsConfigurationType(output.SmsConfiguration, context)
            : undefined,
        SmsConfigurationFailure: output.SmsConfigurationFailure !== undefined && output.SmsConfigurationFailure !== null
            ? output.SmsConfigurationFailure
            : undefined,
        SmsVerificationMessage: output.SmsVerificationMessage !== undefined && output.SmsVerificationMessage !== null
            ? output.SmsVerificationMessage
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UserPoolAddOns: output.UserPoolAddOns !== undefined && output.UserPoolAddOns !== null
            ? deserializeAws_json1_1UserPoolAddOnsType(output.UserPoolAddOns, context)
            : undefined,
        UserPoolTags: output.UserPoolTags !== undefined && output.UserPoolTags !== null
            ? deserializeAws_json1_1UserPoolTagsType(output.UserPoolTags, context)
            : undefined,
        UsernameAttributes: output.UsernameAttributes !== undefined && output.UsernameAttributes !== null
            ? deserializeAws_json1_1UsernameAttributesListType(output.UsernameAttributes, context)
            : undefined,
        UsernameConfiguration: output.UsernameConfiguration !== undefined && output.UsernameConfiguration !== null
            ? deserializeAws_json1_1UsernameConfigurationType(output.UsernameConfiguration, context)
            : undefined,
        VerificationMessageTemplate: output.VerificationMessageTemplate !== undefined && output.VerificationMessageTemplate !== null
            ? deserializeAws_json1_1VerificationMessageTemplateType(output.VerificationMessageTemplate, context)
            : undefined,
    };
};
var deserializeAws_json1_1UsersListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UserType(entry, context);
    });
};
var deserializeAws_json1_1UserType = function (output, context) {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1AttributeListType(output.Attributes, context)
            : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        MFAOptions: output.MFAOptions !== undefined && output.MFAOptions !== null
            ? deserializeAws_json1_1MFAOptionListType(output.MFAOptions, context)
            : undefined,
        UserCreateDate: output.UserCreateDate !== undefined && output.UserCreateDate !== null
            ? new Date(Math.round(output.UserCreateDate * 1000))
            : undefined,
        UserLastModifiedDate: output.UserLastModifiedDate !== undefined && output.UserLastModifiedDate !== null
            ? new Date(Math.round(output.UserLastModifiedDate * 1000))
            : undefined,
        UserStatus: output.UserStatus !== undefined && output.UserStatus !== null ? output.UserStatus : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
var deserializeAws_json1_1VerificationMessageTemplateType = function (output, context) {
    return {
        DefaultEmailOption: output.DefaultEmailOption !== undefined && output.DefaultEmailOption !== null
            ? output.DefaultEmailOption
            : undefined,
        EmailMessage: output.EmailMessage !== undefined && output.EmailMessage !== null ? output.EmailMessage : undefined,
        EmailMessageByLink: output.EmailMessageByLink !== undefined && output.EmailMessageByLink !== null
            ? output.EmailMessageByLink
            : undefined,
        EmailSubject: output.EmailSubject !== undefined && output.EmailSubject !== null ? output.EmailSubject : undefined,
        EmailSubjectByLink: output.EmailSubjectByLink !== undefined && output.EmailSubjectByLink !== null
            ? output.EmailSubjectByLink
            : undefined,
        SmsMessage: output.SmsMessage !== undefined && output.SmsMessage !== null ? output.SmsMessage : undefined,
    };
};
var deserializeAws_json1_1VerifiedAttributesListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1VerifySoftwareTokenResponse = function (output, context) {
    return {
        Session: output.Session !== undefined && output.Session !== null ? output.Session : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_1VerifyUserAttributeResponse = function (output, context) {
    return {};
};
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var buildHttpRpcRequest = function (context, headers, path, resolvedHostname, body) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, contents;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                contents = {
                    protocol: protocol,
                    hostname: hostname,
                    port: port,
                    method: "POST",
                    path: path,
                    headers: headers,
                };
                if (resolvedHostname !== undefined) {
                    contents.hostname = resolvedHostname;
                }
                if (body !== undefined) {
                    contents.body = body;
                }
                return [2 /*return*/, new __HttpRequest(contents)];
        }
    });
}); };
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    var headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_json1_1.js.map