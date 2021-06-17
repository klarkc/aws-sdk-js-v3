import { __assign, __awaiter, __generator, __read, __values } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, getArrayIfSingleItem as __getArrayIfSingleItem, getValueFromTextNode as __getValueFromTextNode, } from "@aws-sdk/smithy-client";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
export var serializeAws_queryAddClientIDToOpenIDConnectProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAddClientIDToOpenIDConnectProviderRequest(input, context)), { Action: "AddClientIDToOpenIDConnectProvider", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryAddRoleToInstanceProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAddRoleToInstanceProfileRequest(input, context)), { Action: "AddRoleToInstanceProfile", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryAddUserToGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAddUserToGroupRequest(input, context)), { Action: "AddUserToGroup", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryAttachGroupPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAttachGroupPolicyRequest(input, context)), { Action: "AttachGroupPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryAttachRolePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAttachRolePolicyRequest(input, context)), { Action: "AttachRolePolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryAttachUserPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAttachUserPolicyRequest(input, context)), { Action: "AttachUserPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryChangePasswordCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryChangePasswordRequest(input, context)), { Action: "ChangePassword", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateAccessKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateAccessKeyRequest(input, context)), { Action: "CreateAccessKey", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateAccountAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateAccountAliasRequest(input, context)), { Action: "CreateAccountAlias", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateGroupRequest(input, context)), { Action: "CreateGroup", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateInstanceProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateInstanceProfileRequest(input, context)), { Action: "CreateInstanceProfile", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateLoginProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateLoginProfileRequest(input, context)), { Action: "CreateLoginProfile", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateOpenIDConnectProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateOpenIDConnectProviderRequest(input, context)), { Action: "CreateOpenIDConnectProvider", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreatePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreatePolicyRequest(input, context)), { Action: "CreatePolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreatePolicyVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreatePolicyVersionRequest(input, context)), { Action: "CreatePolicyVersion", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateRoleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateRoleRequest(input, context)), { Action: "CreateRole", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateSAMLProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateSAMLProviderRequest(input, context)), { Action: "CreateSAMLProvider", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateServiceLinkedRoleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateServiceLinkedRoleRequest(input, context)), { Action: "CreateServiceLinkedRole", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateServiceSpecificCredentialCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateServiceSpecificCredentialRequest(input, context)), { Action: "CreateServiceSpecificCredential", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateUserRequest(input, context)), { Action: "CreateUser", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateVirtualMFADeviceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateVirtualMFADeviceRequest(input, context)), { Action: "CreateVirtualMFADevice", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeactivateMFADeviceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeactivateMFADeviceRequest(input, context)), { Action: "DeactivateMFADevice", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteAccessKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteAccessKeyRequest(input, context)), { Action: "DeleteAccessKey", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteAccountAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteAccountAliasRequest(input, context)), { Action: "DeleteAccountAlias", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteAccountPasswordPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString({
            Action: "DeleteAccountPasswordPolicy",
            Version: "2010-05-08",
        });
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteGroupRequest(input, context)), { Action: "DeleteGroup", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteGroupPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteGroupPolicyRequest(input, context)), { Action: "DeleteGroupPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteInstanceProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteInstanceProfileRequest(input, context)), { Action: "DeleteInstanceProfile", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteLoginProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteLoginProfileRequest(input, context)), { Action: "DeleteLoginProfile", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteOpenIDConnectProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteOpenIDConnectProviderRequest(input, context)), { Action: "DeleteOpenIDConnectProvider", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeletePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeletePolicyRequest(input, context)), { Action: "DeletePolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeletePolicyVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeletePolicyVersionRequest(input, context)), { Action: "DeletePolicyVersion", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteRoleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteRoleRequest(input, context)), { Action: "DeleteRole", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteRolePermissionsBoundaryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteRolePermissionsBoundaryRequest(input, context)), { Action: "DeleteRolePermissionsBoundary", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteRolePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteRolePolicyRequest(input, context)), { Action: "DeleteRolePolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteSAMLProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteSAMLProviderRequest(input, context)), { Action: "DeleteSAMLProvider", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteServerCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteServerCertificateRequest(input, context)), { Action: "DeleteServerCertificate", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteServiceLinkedRoleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteServiceLinkedRoleRequest(input, context)), { Action: "DeleteServiceLinkedRole", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteServiceSpecificCredentialCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteServiceSpecificCredentialRequest(input, context)), { Action: "DeleteServiceSpecificCredential", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteSigningCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteSigningCertificateRequest(input, context)), { Action: "DeleteSigningCertificate", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteSSHPublicKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteSSHPublicKeyRequest(input, context)), { Action: "DeleteSSHPublicKey", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteUserRequest(input, context)), { Action: "DeleteUser", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteUserPermissionsBoundaryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteUserPermissionsBoundaryRequest(input, context)), { Action: "DeleteUserPermissionsBoundary", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteUserPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteUserPolicyRequest(input, context)), { Action: "DeleteUserPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteVirtualMFADeviceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteVirtualMFADeviceRequest(input, context)), { Action: "DeleteVirtualMFADevice", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDetachGroupPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDetachGroupPolicyRequest(input, context)), { Action: "DetachGroupPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDetachRolePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDetachRolePolicyRequest(input, context)), { Action: "DetachRolePolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDetachUserPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDetachUserPolicyRequest(input, context)), { Action: "DetachUserPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryEnableMFADeviceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryEnableMFADeviceRequest(input, context)), { Action: "EnableMFADevice", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGenerateCredentialReportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString({
            Action: "GenerateCredentialReport",
            Version: "2010-05-08",
        });
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGenerateOrganizationsAccessReportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGenerateOrganizationsAccessReportRequest(input, context)), { Action: "GenerateOrganizationsAccessReport", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGenerateServiceLastAccessedDetailsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGenerateServiceLastAccessedDetailsRequest(input, context)), { Action: "GenerateServiceLastAccessedDetails", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetAccessKeyLastUsedCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetAccessKeyLastUsedRequest(input, context)), { Action: "GetAccessKeyLastUsed", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetAccountAuthorizationDetailsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetAccountAuthorizationDetailsRequest(input, context)), { Action: "GetAccountAuthorizationDetails", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetAccountPasswordPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString({
            Action: "GetAccountPasswordPolicy",
            Version: "2010-05-08",
        });
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetAccountSummaryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString({
            Action: "GetAccountSummary",
            Version: "2010-05-08",
        });
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetContextKeysForCustomPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetContextKeysForCustomPolicyRequest(input, context)), { Action: "GetContextKeysForCustomPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetContextKeysForPrincipalPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetContextKeysForPrincipalPolicyRequest(input, context)), { Action: "GetContextKeysForPrincipalPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetCredentialReportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString({
            Action: "GetCredentialReport",
            Version: "2010-05-08",
        });
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetGroupRequest(input, context)), { Action: "GetGroup", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetGroupPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetGroupPolicyRequest(input, context)), { Action: "GetGroupPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetInstanceProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetInstanceProfileRequest(input, context)), { Action: "GetInstanceProfile", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetLoginProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetLoginProfileRequest(input, context)), { Action: "GetLoginProfile", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetOpenIDConnectProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetOpenIDConnectProviderRequest(input, context)), { Action: "GetOpenIDConnectProvider", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetOrganizationsAccessReportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetOrganizationsAccessReportRequest(input, context)), { Action: "GetOrganizationsAccessReport", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetPolicyRequest(input, context)), { Action: "GetPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetPolicyVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetPolicyVersionRequest(input, context)), { Action: "GetPolicyVersion", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetRoleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetRoleRequest(input, context)), { Action: "GetRole", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetRolePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetRolePolicyRequest(input, context)), { Action: "GetRolePolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetSAMLProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetSAMLProviderRequest(input, context)), { Action: "GetSAMLProvider", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetServerCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetServerCertificateRequest(input, context)), { Action: "GetServerCertificate", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetServiceLastAccessedDetailsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetServiceLastAccessedDetailsRequest(input, context)), { Action: "GetServiceLastAccessedDetails", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesRequest(input, context)), { Action: "GetServiceLastAccessedDetailsWithEntities", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetServiceLinkedRoleDeletionStatusRequest(input, context)), { Action: "GetServiceLinkedRoleDeletionStatus", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetSSHPublicKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetSSHPublicKeyRequest(input, context)), { Action: "GetSSHPublicKey", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetUserRequest(input, context)), { Action: "GetUser", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetUserPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetUserPolicyRequest(input, context)), { Action: "GetUserPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListAccessKeysCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListAccessKeysRequest(input, context)), { Action: "ListAccessKeys", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListAccountAliasesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListAccountAliasesRequest(input, context)), { Action: "ListAccountAliases", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListAttachedGroupPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListAttachedGroupPoliciesRequest(input, context)), { Action: "ListAttachedGroupPolicies", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListAttachedRolePoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListAttachedRolePoliciesRequest(input, context)), { Action: "ListAttachedRolePolicies", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListAttachedUserPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListAttachedUserPoliciesRequest(input, context)), { Action: "ListAttachedUserPolicies", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListEntitiesForPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListEntitiesForPolicyRequest(input, context)), { Action: "ListEntitiesForPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListGroupPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListGroupPoliciesRequest(input, context)), { Action: "ListGroupPolicies", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListGroupsRequest(input, context)), { Action: "ListGroups", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListGroupsForUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListGroupsForUserRequest(input, context)), { Action: "ListGroupsForUser", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListInstanceProfilesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListInstanceProfilesRequest(input, context)), { Action: "ListInstanceProfiles", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListInstanceProfilesForRoleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListInstanceProfilesForRoleRequest(input, context)), { Action: "ListInstanceProfilesForRole", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListInstanceProfileTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListInstanceProfileTagsRequest(input, context)), { Action: "ListInstanceProfileTags", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListMFADevicesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListMFADevicesRequest(input, context)), { Action: "ListMFADevices", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListMFADeviceTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListMFADeviceTagsRequest(input, context)), { Action: "ListMFADeviceTags", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListOpenIDConnectProvidersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListOpenIDConnectProvidersRequest(input, context)), { Action: "ListOpenIDConnectProviders", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListOpenIDConnectProviderTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListOpenIDConnectProviderTagsRequest(input, context)), { Action: "ListOpenIDConnectProviderTags", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListPoliciesRequest(input, context)), { Action: "ListPolicies", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListPoliciesGrantingServiceAccessCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListPoliciesGrantingServiceAccessRequest(input, context)), { Action: "ListPoliciesGrantingServiceAccess", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListPolicyTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListPolicyTagsRequest(input, context)), { Action: "ListPolicyTags", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListPolicyVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListPolicyVersionsRequest(input, context)), { Action: "ListPolicyVersions", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListRolePoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListRolePoliciesRequest(input, context)), { Action: "ListRolePolicies", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListRolesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListRolesRequest(input, context)), { Action: "ListRoles", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListRoleTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListRoleTagsRequest(input, context)), { Action: "ListRoleTags", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListSAMLProvidersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListSAMLProvidersRequest(input, context)), { Action: "ListSAMLProviders", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListSAMLProviderTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListSAMLProviderTagsRequest(input, context)), { Action: "ListSAMLProviderTags", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListServerCertificatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListServerCertificatesRequest(input, context)), { Action: "ListServerCertificates", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListServerCertificateTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListServerCertificateTagsRequest(input, context)), { Action: "ListServerCertificateTags", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListServiceSpecificCredentialsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListServiceSpecificCredentialsRequest(input, context)), { Action: "ListServiceSpecificCredentials", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListSigningCertificatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListSigningCertificatesRequest(input, context)), { Action: "ListSigningCertificates", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListSSHPublicKeysCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListSSHPublicKeysRequest(input, context)), { Action: "ListSSHPublicKeys", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListUserPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListUserPoliciesRequest(input, context)), { Action: "ListUserPolicies", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListUsersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListUsersRequest(input, context)), { Action: "ListUsers", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListUserTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListUserTagsRequest(input, context)), { Action: "ListUserTags", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListVirtualMFADevicesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListVirtualMFADevicesRequest(input, context)), { Action: "ListVirtualMFADevices", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPutGroupPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPutGroupPolicyRequest(input, context)), { Action: "PutGroupPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPutRolePermissionsBoundaryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPutRolePermissionsBoundaryRequest(input, context)), { Action: "PutRolePermissionsBoundary", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPutRolePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPutRolePolicyRequest(input, context)), { Action: "PutRolePolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPutUserPermissionsBoundaryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPutUserPermissionsBoundaryRequest(input, context)), { Action: "PutUserPermissionsBoundary", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPutUserPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPutUserPolicyRequest(input, context)), { Action: "PutUserPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRemoveClientIDFromOpenIDConnectProviderRequest(input, context)), { Action: "RemoveClientIDFromOpenIDConnectProvider", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRemoveRoleFromInstanceProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRemoveRoleFromInstanceProfileRequest(input, context)), { Action: "RemoveRoleFromInstanceProfile", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRemoveUserFromGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRemoveUserFromGroupRequest(input, context)), { Action: "RemoveUserFromGroup", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryResetServiceSpecificCredentialCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryResetServiceSpecificCredentialRequest(input, context)), { Action: "ResetServiceSpecificCredential", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryResyncMFADeviceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryResyncMFADeviceRequest(input, context)), { Action: "ResyncMFADevice", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetDefaultPolicyVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetDefaultPolicyVersionRequest(input, context)), { Action: "SetDefaultPolicyVersion", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetSecurityTokenServicePreferencesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetSecurityTokenServicePreferencesRequest(input, context)), { Action: "SetSecurityTokenServicePreferences", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySimulateCustomPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySimulateCustomPolicyRequest(input, context)), { Action: "SimulateCustomPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySimulatePrincipalPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySimulatePrincipalPolicyRequest(input, context)), { Action: "SimulatePrincipalPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryTagInstanceProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryTagInstanceProfileRequest(input, context)), { Action: "TagInstanceProfile", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryTagMFADeviceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryTagMFADeviceRequest(input, context)), { Action: "TagMFADevice", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryTagOpenIDConnectProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryTagOpenIDConnectProviderRequest(input, context)), { Action: "TagOpenIDConnectProvider", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryTagPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryTagPolicyRequest(input, context)), { Action: "TagPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryTagRoleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryTagRoleRequest(input, context)), { Action: "TagRole", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryTagSAMLProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryTagSAMLProviderRequest(input, context)), { Action: "TagSAMLProvider", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryTagServerCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryTagServerCertificateRequest(input, context)), { Action: "TagServerCertificate", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryTagUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryTagUserRequest(input, context)), { Action: "TagUser", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUntagInstanceProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUntagInstanceProfileRequest(input, context)), { Action: "UntagInstanceProfile", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUntagMFADeviceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUntagMFADeviceRequest(input, context)), { Action: "UntagMFADevice", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUntagOpenIDConnectProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUntagOpenIDConnectProviderRequest(input, context)), { Action: "UntagOpenIDConnectProvider", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUntagPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUntagPolicyRequest(input, context)), { Action: "UntagPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUntagRoleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUntagRoleRequest(input, context)), { Action: "UntagRole", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUntagSAMLProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUntagSAMLProviderRequest(input, context)), { Action: "UntagSAMLProvider", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUntagServerCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUntagServerCertificateRequest(input, context)), { Action: "UntagServerCertificate", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUntagUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUntagUserRequest(input, context)), { Action: "UntagUser", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateAccessKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateAccessKeyRequest(input, context)), { Action: "UpdateAccessKey", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateAccountPasswordPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateAccountPasswordPolicyRequest(input, context)), { Action: "UpdateAccountPasswordPolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateAssumeRolePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateAssumeRolePolicyRequest(input, context)), { Action: "UpdateAssumeRolePolicy", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateGroupRequest(input, context)), { Action: "UpdateGroup", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateLoginProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateLoginProfileRequest(input, context)), { Action: "UpdateLoginProfile", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateOpenIDConnectProviderThumbprintRequest(input, context)), { Action: "UpdateOpenIDConnectProviderThumbprint", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateRoleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateRoleRequest(input, context)), { Action: "UpdateRole", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateRoleDescriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateRoleDescriptionRequest(input, context)), { Action: "UpdateRoleDescription", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateSAMLProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateSAMLProviderRequest(input, context)), { Action: "UpdateSAMLProvider", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateServerCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateServerCertificateRequest(input, context)), { Action: "UpdateServerCertificate", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateServiceSpecificCredentialCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateServiceSpecificCredentialRequest(input, context)), { Action: "UpdateServiceSpecificCredential", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateSigningCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateSigningCertificateRequest(input, context)), { Action: "UpdateSigningCertificate", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateSSHPublicKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateSSHPublicKeyRequest(input, context)), { Action: "UpdateSSHPublicKey", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateUserRequest(input, context)), { Action: "UpdateUser", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUploadServerCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUploadServerCertificateRequest(input, context)), { Action: "UploadServerCertificate", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUploadSigningCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUploadSigningCertificateRequest(input, context)), { Action: "UploadSigningCertificate", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUploadSSHPublicKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUploadSSHPublicKeyRequest(input, context)), { Action: "UploadSSHPublicKey", Version: "2010-05-08" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_queryAddClientIDToOpenIDConnectProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAddClientIDToOpenIDConnectProviderCommandError(output, context)];
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
var deserializeAws_queryAddClientIDToOpenIDConnectProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryAddRoleToInstanceProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAddRoleToInstanceProfileCommandError(output, context)];
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
var deserializeAws_queryAddRoleToInstanceProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "EntityAlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                    case "UnmodifiableEntityException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#UnmodifiableEntityException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryAddUserToGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAddUserToGroupCommandError(output, context)];
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
var deserializeAws_queryAddUserToGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryAttachGroupPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAttachGroupPolicyCommandError(output, context)];
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
var deserializeAws_queryAttachGroupPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "PolicyNotAttachableException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#PolicyNotAttachableException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryAttachRolePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAttachRolePolicyCommandError(output, context)];
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
var deserializeAws_queryAttachRolePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "PolicyNotAttachableException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#PolicyNotAttachableException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                    case "UnmodifiableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.iam#UnmodifiableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryAttachUserPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAttachUserPolicyCommandError(output, context)];
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
var deserializeAws_queryAttachUserPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "PolicyNotAttachableException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#PolicyNotAttachableException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryChangePasswordCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryChangePasswordCommandError(output, context)];
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
var deserializeAws_queryChangePasswordCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "EntityTemporarilyUnmodifiableException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException": return [3 /*break*/, 2];
                    case "InvalidUserTypeException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidUserTypeException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 6];
                    case "NoSuchEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 8];
                    case "PasswordPolicyViolationException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#PasswordPolicyViolationException": return [3 /*break*/, 10];
                    case "ServiceFailureException": return [3 /*break*/, 12];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidUserTypeExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryPasswordPolicyViolationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateAccessKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateAccessKeyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateAccessKeyResponse(data.CreateAccessKeyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateAccessKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateAccountAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateAccountAliasCommandError(output, context)];
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
var deserializeAws_queryCreateAccountAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "EntityAlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateGroupResponse(data.CreateGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "EntityAlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateInstanceProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateInstanceProfileCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateInstanceProfileResponse(data.CreateInstanceProfileResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateInstanceProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateLoginProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateLoginProfileCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateLoginProfileResponse(data.CreateLoginProfileResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateLoginProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "EntityAlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "PasswordPolicyViolationException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#PasswordPolicyViolationException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryPasswordPolicyViolationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateOpenIDConnectProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateOpenIDConnectProviderCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateOpenIDConnectProviderResponse(data.CreateOpenIDConnectProviderResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateOpenIDConnectProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreatePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreatePolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreatePolicyResponse(data.CreatePolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreatePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 8];
                    case "MalformedPolicyDocumentException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#MalformedPolicyDocumentException": return [3 /*break*/, 10];
                    case "ServiceFailureException": return [3 /*break*/, 12];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreatePolicyVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreatePolicyVersionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreatePolicyVersionResponse(data.CreatePolicyVersionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreatePolicyVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "MalformedPolicyDocumentException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#MalformedPolicyDocumentException": return [3 /*break*/, 6];
                    case "NoSuchEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateRoleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateRoleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateRoleResponse(data.CreateRoleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateRoleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 8];
                    case "MalformedPolicyDocumentException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#MalformedPolicyDocumentException": return [3 /*break*/, 10];
                    case "ServiceFailureException": return [3 /*break*/, 12];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateSAMLProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateSAMLProviderCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateSAMLProviderResponse(data.CreateSAMLProviderResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateSAMLProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateServiceLinkedRoleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateServiceLinkedRoleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateServiceLinkedRoleResponse(data.CreateServiceLinkedRoleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateServiceLinkedRoleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateServiceSpecificCredentialCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateServiceSpecificCredentialCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateServiceSpecificCredentialResponse(data.CreateServiceSpecificCredentialResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateServiceSpecificCredentialCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceNotSupportedException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceNotSupportedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceNotSupportedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateUserCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateUserResponse(data.CreateUserResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 8];
                    case "NoSuchEntityException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 10];
                    case "ServiceFailureException": return [3 /*break*/, 12];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateVirtualMFADeviceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateVirtualMFADeviceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateVirtualMFADeviceResponse(data.CreateVirtualMFADeviceResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateVirtualMFADeviceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeactivateMFADeviceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeactivateMFADeviceCommandError(output, context)];
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
var deserializeAws_queryDeactivateMFADeviceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "EntityTemporarilyUnmodifiableException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteAccessKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteAccessKeyCommandError(output, context)];
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
var deserializeAws_queryDeleteAccessKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteAccountAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteAccountAliasCommandError(output, context)];
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
var deserializeAws_queryDeleteAccountAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteAccountPasswordPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteAccountPasswordPolicyCommandError(output, context)];
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
var deserializeAws_queryDeleteAccountPasswordPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteGroupCommandError(output, context)];
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
var deserializeAws_queryDeleteGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DeleteConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#DeleteConflictException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteGroupPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteGroupPolicyCommandError(output, context)];
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
var deserializeAws_queryDeleteGroupPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteInstanceProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteInstanceProfileCommandError(output, context)];
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
var deserializeAws_queryDeleteInstanceProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DeleteConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#DeleteConflictException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteLoginProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteLoginProfileCommandError(output, context)];
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
var deserializeAws_queryDeleteLoginProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "EntityTemporarilyUnmodifiableException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteOpenIDConnectProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteOpenIDConnectProviderCommandError(output, context)];
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
var deserializeAws_queryDeleteOpenIDConnectProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeletePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeletePolicyCommandError(output, context)];
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
var deserializeAws_queryDeletePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DeleteConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#DeleteConflictException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 6];
                    case "NoSuchEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeletePolicyVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeletePolicyVersionCommandError(output, context)];
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
var deserializeAws_queryDeletePolicyVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DeleteConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#DeleteConflictException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 6];
                    case "NoSuchEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteRoleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteRoleCommandError(output, context)];
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
var deserializeAws_queryDeleteRoleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "DeleteConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#DeleteConflictException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 6];
                    case "NoSuchEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                    case "UnmodifiableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.iam#UnmodifiableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteRolePermissionsBoundaryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteRolePermissionsBoundaryCommandError(output, context)];
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
var deserializeAws_queryDeleteRolePermissionsBoundaryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                    case "UnmodifiableEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#UnmodifiableEntityException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteRolePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteRolePolicyCommandError(output, context)];
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
var deserializeAws_queryDeleteRolePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                    case "UnmodifiableEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#UnmodifiableEntityException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteSAMLProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteSAMLProviderCommandError(output, context)];
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
var deserializeAws_queryDeleteSAMLProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteServerCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteServerCertificateCommandError(output, context)];
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
var deserializeAws_queryDeleteServerCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DeleteConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#DeleteConflictException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteServiceLinkedRoleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteServiceLinkedRoleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteServiceLinkedRoleResponse(data.DeleteServiceLinkedRoleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteServiceLinkedRoleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteServiceSpecificCredentialCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteServiceSpecificCredentialCommandError(output, context)];
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
var deserializeAws_queryDeleteServiceSpecificCredentialCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteSigningCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteSigningCertificateCommandError(output, context)];
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
var deserializeAws_queryDeleteSigningCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteSSHPublicKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteSSHPublicKeyCommandError(output, context)];
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
var deserializeAws_queryDeleteSSHPublicKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteUserCommandError(output, context)];
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
var deserializeAws_queryDeleteUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "DeleteConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#DeleteConflictException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 6];
                    case "NoSuchEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteUserPermissionsBoundaryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteUserPermissionsBoundaryCommandError(output, context)];
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
var deserializeAws_queryDeleteUserPermissionsBoundaryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteUserPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteUserPolicyCommandError(output, context)];
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
var deserializeAws_queryDeleteUserPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteVirtualMFADeviceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteVirtualMFADeviceCommandError(output, context)];
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
var deserializeAws_queryDeleteVirtualMFADeviceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DeleteConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#DeleteConflictException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDetachGroupPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDetachGroupPolicyCommandError(output, context)];
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
var deserializeAws_queryDetachGroupPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDetachRolePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDetachRolePolicyCommandError(output, context)];
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
var deserializeAws_queryDetachRolePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                    case "UnmodifiableEntityException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#UnmodifiableEntityException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDetachUserPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDetachUserPolicyCommandError(output, context)];
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
var deserializeAws_queryDetachUserPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryEnableMFADeviceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryEnableMFADeviceCommandError(output, context)];
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
var deserializeAws_queryEnableMFADeviceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "EntityAlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 2];
                    case "EntityTemporarilyUnmodifiableException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException": return [3 /*break*/, 4];
                    case "InvalidAuthenticationCodeException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#InvalidAuthenticationCodeException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 8];
                    case "NoSuchEntityException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 10];
                    case "ServiceFailureException": return [3 /*break*/, 12];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidAuthenticationCodeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGenerateCredentialReportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGenerateCredentialReportCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGenerateCredentialReportResponse(data.GenerateCredentialReportResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGenerateCredentialReportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGenerateOrganizationsAccessReportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGenerateOrganizationsAccessReportCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGenerateOrganizationsAccessReportResponse(data.GenerateOrganizationsAccessReportResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGenerateOrganizationsAccessReportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ReportGenerationLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ReportGenerationLimitExceededException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryReportGenerationLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGenerateServiceLastAccessedDetailsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGenerateServiceLastAccessedDetailsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGenerateServiceLastAccessedDetailsResponse(data.GenerateServiceLastAccessedDetailsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGenerateServiceLastAccessedDetailsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetAccessKeyLastUsedCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetAccessKeyLastUsedCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetAccessKeyLastUsedResponse(data.GetAccessKeyLastUsedResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetAccessKeyLastUsedCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetAccountAuthorizationDetailsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetAccountAuthorizationDetailsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetAccountAuthorizationDetailsResponse(data.GetAccountAuthorizationDetailsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetAccountAuthorizationDetailsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ServiceFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetAccountPasswordPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetAccountPasswordPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetAccountPasswordPolicyResponse(data.GetAccountPasswordPolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetAccountPasswordPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetAccountSummaryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetAccountSummaryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetAccountSummaryResponse(data.GetAccountSummaryResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetAccountSummaryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ServiceFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetContextKeysForCustomPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetContextKeysForCustomPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetContextKeysForPolicyResponse(data.GetContextKeysForCustomPolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetContextKeysForCustomPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetContextKeysForPrincipalPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetContextKeysForPrincipalPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetContextKeysForPolicyResponse(data.GetContextKeysForPrincipalPolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetContextKeysForPrincipalPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetCredentialReportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetCredentialReportCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetCredentialReportResponse(data.GetCredentialReportResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetCredentialReportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CredentialReportExpiredException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#CredentialReportExpiredException": return [3 /*break*/, 2];
                    case "CredentialReportNotPresentException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#CredentialReportNotPresentException": return [3 /*break*/, 4];
                    case "CredentialReportNotReadyException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#CredentialReportNotReadyException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCredentialReportExpiredExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCredentialReportNotPresentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryCredentialReportNotReadyExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetGroupResponse(data.GetGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetGroupPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetGroupPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetGroupPolicyResponse(data.GetGroupPolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetGroupPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetInstanceProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetInstanceProfileCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetInstanceProfileResponse(data.GetInstanceProfileResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetInstanceProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetLoginProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetLoginProfileCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetLoginProfileResponse(data.GetLoginProfileResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetLoginProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetOpenIDConnectProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetOpenIDConnectProviderCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetOpenIDConnectProviderResponse(data.GetOpenIDConnectProviderResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetOpenIDConnectProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetOrganizationsAccessReportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetOrganizationsAccessReportCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetOrganizationsAccessReportResponse(data.GetOrganizationsAccessReportResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetOrganizationsAccessReportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetPolicyResponse(data.GetPolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetPolicyVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetPolicyVersionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetPolicyVersionResponse(data.GetPolicyVersionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetPolicyVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetRoleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetRoleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetRoleResponse(data.GetRoleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetRoleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetRolePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetRolePolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetRolePolicyResponse(data.GetRolePolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetRolePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetSAMLProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetSAMLProviderCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetSAMLProviderResponse(data.GetSAMLProviderResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetSAMLProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetServerCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetServerCertificateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetServerCertificateResponse(data.GetServerCertificateResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetServerCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetServiceLastAccessedDetailsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetServiceLastAccessedDetailsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetServiceLastAccessedDetailsResponse(data.GetServiceLastAccessedDetailsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetServiceLastAccessedDetailsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesResponse(data.GetServiceLastAccessedDetailsWithEntitiesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetServiceLinkedRoleDeletionStatusResponse(data.GetServiceLinkedRoleDeletionStatusResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetSSHPublicKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetSSHPublicKeyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetSSHPublicKeyResponse(data.GetSSHPublicKeyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetSSHPublicKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "UnrecognizedPublicKeyEncodingException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#UnrecognizedPublicKeyEncodingException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryUnrecognizedPublicKeyEncodingExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetUserCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetUserResponse(data.GetUserResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetUserPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetUserPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetUserPolicyResponse(data.GetUserPolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetUserPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListAccessKeysCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListAccessKeysCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListAccessKeysResponse(data.ListAccessKeysResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListAccessKeysCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListAccountAliasesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListAccountAliasesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListAccountAliasesResponse(data.ListAccountAliasesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListAccountAliasesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ServiceFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListAttachedGroupPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListAttachedGroupPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListAttachedGroupPoliciesResponse(data.ListAttachedGroupPoliciesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListAttachedGroupPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListAttachedRolePoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListAttachedRolePoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListAttachedRolePoliciesResponse(data.ListAttachedRolePoliciesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListAttachedRolePoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListAttachedUserPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListAttachedUserPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListAttachedUserPoliciesResponse(data.ListAttachedUserPoliciesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListAttachedUserPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListEntitiesForPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListEntitiesForPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListEntitiesForPolicyResponse(data.ListEntitiesForPolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListEntitiesForPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListGroupPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListGroupPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListGroupPoliciesResponse(data.ListGroupPoliciesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListGroupPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListGroupsResponse(data.ListGroupsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ServiceFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListGroupsForUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListGroupsForUserCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListGroupsForUserResponse(data.ListGroupsForUserResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListGroupsForUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListInstanceProfilesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListInstanceProfilesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListInstanceProfilesResponse(data.ListInstanceProfilesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListInstanceProfilesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ServiceFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListInstanceProfilesForRoleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListInstanceProfilesForRoleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListInstanceProfilesForRoleResponse(data.ListInstanceProfilesForRoleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListInstanceProfilesForRoleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListInstanceProfileTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListInstanceProfileTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListInstanceProfileTagsResponse(data.ListInstanceProfileTagsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListInstanceProfileTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListMFADevicesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListMFADevicesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListMFADevicesResponse(data.ListMFADevicesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListMFADevicesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListMFADeviceTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListMFADeviceTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListMFADeviceTagsResponse(data.ListMFADeviceTagsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListMFADeviceTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListOpenIDConnectProvidersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListOpenIDConnectProvidersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListOpenIDConnectProvidersResponse(data.ListOpenIDConnectProvidersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListOpenIDConnectProvidersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ServiceFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListOpenIDConnectProviderTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListOpenIDConnectProviderTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListOpenIDConnectProviderTagsResponse(data.ListOpenIDConnectProviderTagsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListOpenIDConnectProviderTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListPoliciesResponse(data.ListPoliciesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ServiceFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListPoliciesGrantingServiceAccessCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListPoliciesGrantingServiceAccessCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListPoliciesGrantingServiceAccessResponse(data.ListPoliciesGrantingServiceAccessResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListPoliciesGrantingServiceAccessCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListPolicyTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListPolicyTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListPolicyTagsResponse(data.ListPolicyTagsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListPolicyTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListPolicyVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListPolicyVersionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListPolicyVersionsResponse(data.ListPolicyVersionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListPolicyVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListRolePoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListRolePoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListRolePoliciesResponse(data.ListRolePoliciesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListRolePoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListRolesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListRolesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListRolesResponse(data.ListRolesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListRolesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ServiceFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListRoleTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListRoleTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListRoleTagsResponse(data.ListRoleTagsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListRoleTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListSAMLProvidersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListSAMLProvidersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListSAMLProvidersResponse(data.ListSAMLProvidersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListSAMLProvidersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ServiceFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListSAMLProviderTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListSAMLProviderTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListSAMLProviderTagsResponse(data.ListSAMLProviderTagsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListSAMLProviderTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListServerCertificatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListServerCertificatesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListServerCertificatesResponse(data.ListServerCertificatesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListServerCertificatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ServiceFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListServerCertificateTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListServerCertificateTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListServerCertificateTagsResponse(data.ListServerCertificateTagsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListServerCertificateTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListServiceSpecificCredentialsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListServiceSpecificCredentialsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListServiceSpecificCredentialsResponse(data.ListServiceSpecificCredentialsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListServiceSpecificCredentialsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceNotSupportedException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceNotSupportedException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceNotSupportedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListSigningCertificatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListSigningCertificatesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListSigningCertificatesResponse(data.ListSigningCertificatesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListSigningCertificatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListSSHPublicKeysCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListSSHPublicKeysCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListSSHPublicKeysResponse(data.ListSSHPublicKeysResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListSSHPublicKeysCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListUserPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListUserPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListUserPoliciesResponse(data.ListUserPoliciesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListUserPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListUsersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListUsersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListUsersResponse(data.ListUsersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListUsersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ServiceFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListUserTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListUserTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListUserTagsResponse(data.ListUserTagsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListUserTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListVirtualMFADevicesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListVirtualMFADevicesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListVirtualMFADevicesResponse(data.ListVirtualMFADevicesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListVirtualMFADevicesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPutGroupPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPutGroupPolicyCommandError(output, context)];
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
var deserializeAws_queryPutGroupPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "MalformedPolicyDocumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#MalformedPolicyDocumentException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPutRolePermissionsBoundaryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPutRolePermissionsBoundaryCommandError(output, context)];
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
var deserializeAws_queryPutRolePermissionsBoundaryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "PolicyNotAttachableException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#PolicyNotAttachableException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                    case "UnmodifiableEntityException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#UnmodifiableEntityException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPutRolePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPutRolePolicyCommandError(output, context)];
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
var deserializeAws_queryPutRolePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "MalformedPolicyDocumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#MalformedPolicyDocumentException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                    case "UnmodifiableEntityException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#UnmodifiableEntityException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPutUserPermissionsBoundaryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPutUserPermissionsBoundaryCommandError(output, context)];
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
var deserializeAws_queryPutUserPermissionsBoundaryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "PolicyNotAttachableException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#PolicyNotAttachableException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPutUserPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPutUserPolicyCommandError(output, context)];
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
var deserializeAws_queryPutUserPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "MalformedPolicyDocumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#MalformedPolicyDocumentException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommandError(output, context)];
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
var deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRemoveRoleFromInstanceProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRemoveRoleFromInstanceProfileCommandError(output, context)];
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
var deserializeAws_queryRemoveRoleFromInstanceProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                    case "UnmodifiableEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#UnmodifiableEntityException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRemoveUserFromGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRemoveUserFromGroupCommandError(output, context)];
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
var deserializeAws_queryRemoveUserFromGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryResetServiceSpecificCredentialCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryResetServiceSpecificCredentialCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryResetServiceSpecificCredentialResponse(data.ResetServiceSpecificCredentialResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryResetServiceSpecificCredentialCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryResyncMFADeviceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryResyncMFADeviceCommandError(output, context)];
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
var deserializeAws_queryResyncMFADeviceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidAuthenticationCodeException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidAuthenticationCodeException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidAuthenticationCodeExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySetDefaultPolicyVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetDefaultPolicyVersionCommandError(output, context)];
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
var deserializeAws_querySetDefaultPolicyVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySetSecurityTokenServicePreferencesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetSecurityTokenServicePreferencesCommandError(output, context)];
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
var deserializeAws_querySetSecurityTokenServicePreferencesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ServiceFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySimulateCustomPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySimulateCustomPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySimulatePolicyResponse(data.SimulateCustomPolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySimulateCustomPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "PolicyEvaluationException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#PolicyEvaluationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryPolicyEvaluationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySimulatePrincipalPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySimulatePrincipalPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySimulatePolicyResponse(data.SimulatePrincipalPolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySimulatePrincipalPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "PolicyEvaluationException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#PolicyEvaluationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryPolicyEvaluationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryTagInstanceProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryTagInstanceProfileCommandError(output, context)];
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
var deserializeAws_queryTagInstanceProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 6];
                    case "NoSuchEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryTagMFADeviceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryTagMFADeviceCommandError(output, context)];
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
var deserializeAws_queryTagMFADeviceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 6];
                    case "NoSuchEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryTagOpenIDConnectProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryTagOpenIDConnectProviderCommandError(output, context)];
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
var deserializeAws_queryTagOpenIDConnectProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 6];
                    case "NoSuchEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryTagPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryTagPolicyCommandError(output, context)];
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
var deserializeAws_queryTagPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 6];
                    case "NoSuchEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryTagRoleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryTagRoleCommandError(output, context)];
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
var deserializeAws_queryTagRoleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 6];
                    case "NoSuchEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryTagSAMLProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryTagSAMLProviderCommandError(output, context)];
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
var deserializeAws_queryTagSAMLProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 6];
                    case "NoSuchEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryTagServerCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryTagServerCertificateCommandError(output, context)];
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
var deserializeAws_queryTagServerCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 6];
                    case "NoSuchEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryTagUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryTagUserCommandError(output, context)];
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
var deserializeAws_queryTagUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 6];
                    case "NoSuchEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUntagInstanceProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUntagInstanceProfileCommandError(output, context)];
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
var deserializeAws_queryUntagInstanceProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUntagMFADeviceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUntagMFADeviceCommandError(output, context)];
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
var deserializeAws_queryUntagMFADeviceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUntagOpenIDConnectProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUntagOpenIDConnectProviderCommandError(output, context)];
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
var deserializeAws_queryUntagOpenIDConnectProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUntagPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUntagPolicyCommandError(output, context)];
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
var deserializeAws_queryUntagPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUntagRoleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUntagRoleCommandError(output, context)];
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
var deserializeAws_queryUntagRoleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUntagSAMLProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUntagSAMLProviderCommandError(output, context)];
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
var deserializeAws_queryUntagSAMLProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUntagServerCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUntagServerCertificateCommandError(output, context)];
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
var deserializeAws_queryUntagServerCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUntagUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUntagUserCommandError(output, context)];
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
var deserializeAws_queryUntagUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateAccessKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateAccessKeyCommandError(output, context)];
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
var deserializeAws_queryUpdateAccessKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateAccountPasswordPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateAccountPasswordPolicyCommandError(output, context)];
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
var deserializeAws_queryUpdateAccountPasswordPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "MalformedPolicyDocumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#MalformedPolicyDocumentException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateAssumeRolePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateAssumeRolePolicyCommandError(output, context)];
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
var deserializeAws_queryUpdateAssumeRolePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "MalformedPolicyDocumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#MalformedPolicyDocumentException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                    case "UnmodifiableEntityException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#UnmodifiableEntityException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateGroupCommandError(output, context)];
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
var deserializeAws_queryUpdateGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "EntityAlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateLoginProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateLoginProfileCommandError(output, context)];
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
var deserializeAws_queryUpdateLoginProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "EntityTemporarilyUnmodifiableException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "PasswordPolicyViolationException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#PasswordPolicyViolationException": return [3 /*break*/, 8];
                    case "ServiceFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryPasswordPolicyViolationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommandError(output, context)];
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
var deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateRoleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateRoleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUpdateRoleResponse(data.UpdateRoleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateRoleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                    case "UnmodifiableEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#UnmodifiableEntityException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateRoleDescriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateRoleDescriptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUpdateRoleDescriptionResponse(data.UpdateRoleDescriptionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateRoleDescriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                    case "ServiceFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 4];
                    case "UnmodifiableEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#UnmodifiableEntityException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateSAMLProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateSAMLProviderCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUpdateSAMLProviderResponse(data.UpdateSAMLProviderResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateSAMLProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidInputException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateServerCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateServerCertificateCommandError(output, context)];
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
var deserializeAws_queryUpdateServerCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "EntityAlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 4];
                    case "NoSuchEntityException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 6];
                    case "ServiceFailureException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateServiceSpecificCredentialCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateServiceSpecificCredentialCommandError(output, context)];
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
var deserializeAws_queryUpdateServiceSpecificCredentialCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateSigningCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateSigningCertificateCommandError(output, context)];
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
var deserializeAws_queryUpdateSigningCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "LimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 2];
                    case "NoSuchEntityException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 4];
                    case "ServiceFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateSSHPublicKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateSSHPublicKeyCommandError(output, context)];
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
var deserializeAws_queryUpdateSSHPublicKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "NoSuchEntityException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateUserCommandError(output, context)];
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
var deserializeAws_queryUpdateUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "EntityTemporarilyUnmodifiableException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 8];
                    case "NoSuchEntityException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 10];
                    case "ServiceFailureException": return [3 /*break*/, 12];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUploadServerCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUploadServerCertificateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUploadServerCertificateResponse(data.UploadServerCertificateResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUploadServerCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConcurrentModificationException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#ConcurrentModificationException": return [3 /*break*/, 2];
                    case "EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#InvalidInputException": return [3 /*break*/, 6];
                    case "KeyPairMismatchException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#KeyPairMismatchException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 10];
                    case "MalformedCertificateException": return [3 /*break*/, 12];
                    case "com.amazonaws.iam#MalformedCertificateException": return [3 /*break*/, 12];
                    case "ServiceFailureException": return [3 /*break*/, 14];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryKeyPairMismatchExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryMalformedCertificateExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUploadSigningCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUploadSigningCertificateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUploadSigningCertificateResponse(data.UploadSigningCertificateResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUploadSigningCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DuplicateCertificateException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#DuplicateCertificateException": return [3 /*break*/, 2];
                    case "EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#EntityAlreadyExistsException": return [3 /*break*/, 4];
                    case "InvalidCertificateException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#InvalidCertificateException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 8];
                    case "MalformedCertificateException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#MalformedCertificateException": return [3 /*break*/, 10];
                    case "NoSuchEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 12];
                    case "ServiceFailureException": return [3 /*break*/, 14];
                    case "com.amazonaws.iam#ServiceFailureException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicateCertificateExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCertificateExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryMalformedCertificateExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUploadSSHPublicKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUploadSSHPublicKeyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUploadSSHPublicKeyResponse(data.UploadSSHPublicKeyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUploadSSHPublicKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DuplicateSSHPublicKeyException": return [3 /*break*/, 2];
                    case "com.amazonaws.iam#DuplicateSSHPublicKeyException": return [3 /*break*/, 2];
                    case "InvalidPublicKeyException": return [3 /*break*/, 4];
                    case "com.amazonaws.iam#InvalidPublicKeyException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iam#LimitExceededException": return [3 /*break*/, 6];
                    case "NoSuchEntityException": return [3 /*break*/, 8];
                    case "com.amazonaws.iam#NoSuchEntityException": return [3 /*break*/, 8];
                    case "UnrecognizedPublicKeyEncodingException": return [3 /*break*/, 10];
                    case "com.amazonaws.iam#UnrecognizedPublicKeyEncodingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicateSSHPublicKeyExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidPublicKeyExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryUnrecognizedPublicKeyEncodingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_queryConcurrentModificationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryConcurrentModificationException(body.Error, context);
        contents = __assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCredentialReportExpiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCredentialReportExpiredException(body.Error, context);
        contents = __assign({ name: "CredentialReportExpiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCredentialReportNotPresentExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCredentialReportNotPresentException(body.Error, context);
        contents = __assign({ name: "CredentialReportNotPresentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCredentialReportNotReadyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCredentialReportNotReadyException(body.Error, context);
        contents = __assign({ name: "CredentialReportNotReadyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDeleteConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDeleteConflictException(body.Error, context);
        contents = __assign({ name: "DeleteConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDuplicateCertificateExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDuplicateCertificateException(body.Error, context);
        contents = __assign({ name: "DuplicateCertificateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDuplicateSSHPublicKeyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDuplicateSSHPublicKeyException(body.Error, context);
        contents = __assign({ name: "DuplicateSSHPublicKeyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryEntityAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryEntityAlreadyExistsException(body.Error, context);
        contents = __assign({ name: "EntityAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryEntityTemporarilyUnmodifiableException(body.Error, context);
        contents = __assign({ name: "EntityTemporarilyUnmodifiableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidAuthenticationCodeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidAuthenticationCodeException(body.Error, context);
        contents = __assign({ name: "InvalidAuthenticationCodeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidCertificateExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidCertificateException(body.Error, context);
        contents = __assign({ name: "InvalidCertificateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidInputExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidInputException(body.Error, context);
        contents = __assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidPublicKeyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidPublicKeyException(body.Error, context);
        contents = __assign({ name: "InvalidPublicKeyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidUserTypeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidUserTypeException(body.Error, context);
        contents = __assign({ name: "InvalidUserTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryKeyPairMismatchExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryKeyPairMismatchException(body.Error, context);
        contents = __assign({ name: "KeyPairMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryLimitExceededException(body.Error, context);
        contents = __assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryMalformedCertificateExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryMalformedCertificateException(body.Error, context);
        contents = __assign({ name: "MalformedCertificateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryMalformedPolicyDocumentExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryMalformedPolicyDocumentException(body.Error, context);
        contents = __assign({ name: "MalformedPolicyDocumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryNoSuchEntityExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryNoSuchEntityException(body.Error, context);
        contents = __assign({ name: "NoSuchEntityException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryPasswordPolicyViolationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryPasswordPolicyViolationException(body.Error, context);
        contents = __assign({ name: "PasswordPolicyViolationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryPolicyEvaluationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryPolicyEvaluationException(body.Error, context);
        contents = __assign({ name: "PolicyEvaluationException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryPolicyNotAttachableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryPolicyNotAttachableException(body.Error, context);
        contents = __assign({ name: "PolicyNotAttachableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryReportGenerationLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryReportGenerationLimitExceededException(body.Error, context);
        contents = __assign({ name: "ReportGenerationLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryServiceFailureExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryServiceFailureException(body.Error, context);
        contents = __assign({ name: "ServiceFailureException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryServiceNotSupportedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryServiceNotSupportedException(body.Error, context);
        contents = __assign({ name: "ServiceNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUnmodifiableEntityExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUnmodifiableEntityException(body.Error, context);
        contents = __assign({ name: "UnmodifiableEntityException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUnrecognizedPublicKeyEncodingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUnrecognizedPublicKeyEncodingException(body.Error, context);
        contents = __assign({ name: "UnrecognizedPublicKeyEncodingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_queryActionNameListType = function (input, context) {
    var e_1, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
            var entry = input_1_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return entries;
};
var serializeAws_queryAddClientIDToOpenIDConnectProviderRequest = function (input, context) {
    var entries = {};
    if (input.OpenIDConnectProviderArn !== undefined && input.OpenIDConnectProviderArn !== null) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    if (input.ClientID !== undefined && input.ClientID !== null) {
        entries["ClientID"] = input.ClientID;
    }
    return entries;
};
var serializeAws_queryAddRoleToInstanceProfileRequest = function (input, context) {
    var entries = {};
    if (input.InstanceProfileName !== undefined && input.InstanceProfileName !== null) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
var serializeAws_queryAddUserToGroupRequest = function (input, context) {
    var entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
var serializeAws_queryAttachGroupPolicyRequest = function (input, context) {
    var entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
var serializeAws_queryAttachRolePolicyRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
var serializeAws_queryAttachUserPolicyRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
var serializeAws_queryChangePasswordRequest = function (input, context) {
    var entries = {};
    if (input.OldPassword !== undefined && input.OldPassword !== null) {
        entries["OldPassword"] = input.OldPassword;
    }
    if (input.NewPassword !== undefined && input.NewPassword !== null) {
        entries["NewPassword"] = input.NewPassword;
    }
    return entries;
};
var serializeAws_queryclientIDListType = function (input, context) {
    var e_2, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_2 = __values(input), input_2_1 = input_2.next(); !input_2_1.done; input_2_1 = input_2.next()) {
            var entry = input_2_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (input_2_1 && !input_2_1.done && (_a = input_2.return)) _a.call(input_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return entries;
};
var serializeAws_queryContextEntry = function (input, context) {
    var entries = {};
    if (input.ContextKeyName !== undefined && input.ContextKeyName !== null) {
        entries["ContextKeyName"] = input.ContextKeyName;
    }
    if (input.ContextKeyValues !== undefined && input.ContextKeyValues !== null) {
        var memberEntries = serializeAws_queryContextKeyValueListType(input.ContextKeyValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ContextKeyValues." + key;
            entries[loc] = value;
        });
    }
    if (input.ContextKeyType !== undefined && input.ContextKeyType !== null) {
        entries["ContextKeyType"] = input.ContextKeyType;
    }
    return entries;
};
var serializeAws_queryContextEntryListType = function (input, context) {
    var e_3, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_3 = __values(input), input_3_1 = input_3.next(); !input_3_1.done; input_3_1 = input_3.next()) {
            var entry = input_3_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryContextEntry(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (input_3_1 && !input_3_1.done && (_a = input_3.return)) _a.call(input_3);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return entries;
};
var serializeAws_queryContextKeyValueListType = function (input, context) {
    var e_4, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_4 = __values(input), input_4_1 = input_4.next(); !input_4_1.done; input_4_1 = input_4.next()) {
            var entry = input_4_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (input_4_1 && !input_4_1.done && (_a = input_4.return)) _a.call(input_4);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return entries;
};
var serializeAws_queryCreateAccessKeyRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
var serializeAws_queryCreateAccountAliasRequest = function (input, context) {
    var entries = {};
    if (input.AccountAlias !== undefined && input.AccountAlias !== null) {
        entries["AccountAlias"] = input.AccountAlias;
    }
    return entries;
};
var serializeAws_queryCreateGroupRequest = function (input, context) {
    var entries = {};
    if (input.Path !== undefined && input.Path !== null) {
        entries["Path"] = input.Path;
    }
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    return entries;
};
var serializeAws_queryCreateInstanceProfileRequest = function (input, context) {
    var entries = {};
    if (input.InstanceProfileName !== undefined && input.InstanceProfileName !== null) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    if (input.Path !== undefined && input.Path !== null) {
        entries["Path"] = input.Path;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateLoginProfileRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.Password !== undefined && input.Password !== null) {
        entries["Password"] = input.Password;
    }
    if (input.PasswordResetRequired !== undefined && input.PasswordResetRequired !== null) {
        entries["PasswordResetRequired"] = input.PasswordResetRequired;
    }
    return entries;
};
var serializeAws_queryCreateOpenIDConnectProviderRequest = function (input, context) {
    var entries = {};
    if (input.Url !== undefined && input.Url !== null) {
        entries["Url"] = input.Url;
    }
    if (input.ClientIDList !== undefined && input.ClientIDList !== null) {
        var memberEntries = serializeAws_queryclientIDListType(input.ClientIDList, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ClientIDList." + key;
            entries[loc] = value;
        });
    }
    if (input.ThumbprintList !== undefined && input.ThumbprintList !== null) {
        var memberEntries = serializeAws_querythumbprintListType(input.ThumbprintList, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ThumbprintList." + key;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreatePolicyRequest = function (input, context) {
    var entries = {};
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.Path !== undefined && input.Path !== null) {
        entries["Path"] = input.Path;
    }
    if (input.PolicyDocument !== undefined && input.PolicyDocument !== null) {
        entries["PolicyDocument"] = input.PolicyDocument;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreatePolicyVersionRequest = function (input, context) {
    var entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.PolicyDocument !== undefined && input.PolicyDocument !== null) {
        entries["PolicyDocument"] = input.PolicyDocument;
    }
    if (input.SetAsDefault !== undefined && input.SetAsDefault !== null) {
        entries["SetAsDefault"] = input.SetAsDefault;
    }
    return entries;
};
var serializeAws_queryCreateRoleRequest = function (input, context) {
    var entries = {};
    if (input.Path !== undefined && input.Path !== null) {
        entries["Path"] = input.Path;
    }
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.AssumeRolePolicyDocument !== undefined && input.AssumeRolePolicyDocument !== null) {
        entries["AssumeRolePolicyDocument"] = input.AssumeRolePolicyDocument;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.MaxSessionDuration !== undefined && input.MaxSessionDuration !== null) {
        entries["MaxSessionDuration"] = input.MaxSessionDuration;
    }
    if (input.PermissionsBoundary !== undefined && input.PermissionsBoundary !== null) {
        entries["PermissionsBoundary"] = input.PermissionsBoundary;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateSAMLProviderRequest = function (input, context) {
    var entries = {};
    if (input.SAMLMetadataDocument !== undefined && input.SAMLMetadataDocument !== null) {
        entries["SAMLMetadataDocument"] = input.SAMLMetadataDocument;
    }
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateServiceLinkedRoleRequest = function (input, context) {
    var entries = {};
    if (input.AWSServiceName !== undefined && input.AWSServiceName !== null) {
        entries["AWSServiceName"] = input.AWSServiceName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.CustomSuffix !== undefined && input.CustomSuffix !== null) {
        entries["CustomSuffix"] = input.CustomSuffix;
    }
    return entries;
};
var serializeAws_queryCreateServiceSpecificCredentialRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.ServiceName !== undefined && input.ServiceName !== null) {
        entries["ServiceName"] = input.ServiceName;
    }
    return entries;
};
var serializeAws_queryCreateUserRequest = function (input, context) {
    var entries = {};
    if (input.Path !== undefined && input.Path !== null) {
        entries["Path"] = input.Path;
    }
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.PermissionsBoundary !== undefined && input.PermissionsBoundary !== null) {
        entries["PermissionsBoundary"] = input.PermissionsBoundary;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateVirtualMFADeviceRequest = function (input, context) {
    var entries = {};
    if (input.Path !== undefined && input.Path !== null) {
        entries["Path"] = input.Path;
    }
    if (input.VirtualMFADeviceName !== undefined && input.VirtualMFADeviceName !== null) {
        entries["VirtualMFADeviceName"] = input.VirtualMFADeviceName;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDeactivateMFADeviceRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    return entries;
};
var serializeAws_queryDeleteAccessKeyRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.AccessKeyId !== undefined && input.AccessKeyId !== null) {
        entries["AccessKeyId"] = input.AccessKeyId;
    }
    return entries;
};
var serializeAws_queryDeleteAccountAliasRequest = function (input, context) {
    var entries = {};
    if (input.AccountAlias !== undefined && input.AccountAlias !== null) {
        entries["AccountAlias"] = input.AccountAlias;
    }
    return entries;
};
var serializeAws_queryDeleteGroupPolicyRequest = function (input, context) {
    var entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
var serializeAws_queryDeleteGroupRequest = function (input, context) {
    var entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    return entries;
};
var serializeAws_queryDeleteInstanceProfileRequest = function (input, context) {
    var entries = {};
    if (input.InstanceProfileName !== undefined && input.InstanceProfileName !== null) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    return entries;
};
var serializeAws_queryDeleteLoginProfileRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
var serializeAws_queryDeleteOpenIDConnectProviderRequest = function (input, context) {
    var entries = {};
    if (input.OpenIDConnectProviderArn !== undefined && input.OpenIDConnectProviderArn !== null) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    return entries;
};
var serializeAws_queryDeletePolicyRequest = function (input, context) {
    var entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
var serializeAws_queryDeletePolicyVersionRequest = function (input, context) {
    var entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.VersionId !== undefined && input.VersionId !== null) {
        entries["VersionId"] = input.VersionId;
    }
    return entries;
};
var serializeAws_queryDeleteRolePermissionsBoundaryRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
var serializeAws_queryDeleteRolePolicyRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
var serializeAws_queryDeleteRoleRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
var serializeAws_queryDeleteSAMLProviderRequest = function (input, context) {
    var entries = {};
    if (input.SAMLProviderArn !== undefined && input.SAMLProviderArn !== null) {
        entries["SAMLProviderArn"] = input.SAMLProviderArn;
    }
    return entries;
};
var serializeAws_queryDeleteServerCertificateRequest = function (input, context) {
    var entries = {};
    if (input.ServerCertificateName !== undefined && input.ServerCertificateName !== null) {
        entries["ServerCertificateName"] = input.ServerCertificateName;
    }
    return entries;
};
var serializeAws_queryDeleteServiceLinkedRoleRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
var serializeAws_queryDeleteServiceSpecificCredentialRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.ServiceSpecificCredentialId !== undefined && input.ServiceSpecificCredentialId !== null) {
        entries["ServiceSpecificCredentialId"] = input.ServiceSpecificCredentialId;
    }
    return entries;
};
var serializeAws_queryDeleteSigningCertificateRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.CertificateId !== undefined && input.CertificateId !== null) {
        entries["CertificateId"] = input.CertificateId;
    }
    return entries;
};
var serializeAws_queryDeleteSSHPublicKeyRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.SSHPublicKeyId !== undefined && input.SSHPublicKeyId !== null) {
        entries["SSHPublicKeyId"] = input.SSHPublicKeyId;
    }
    return entries;
};
var serializeAws_queryDeleteUserPermissionsBoundaryRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
var serializeAws_queryDeleteUserPolicyRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
var serializeAws_queryDeleteUserRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
var serializeAws_queryDeleteVirtualMFADeviceRequest = function (input, context) {
    var entries = {};
    if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    return entries;
};
var serializeAws_queryDetachGroupPolicyRequest = function (input, context) {
    var entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
var serializeAws_queryDetachRolePolicyRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
var serializeAws_queryDetachUserPolicyRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
var serializeAws_queryEnableMFADeviceRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.AuthenticationCode1 !== undefined && input.AuthenticationCode1 !== null) {
        entries["AuthenticationCode1"] = input.AuthenticationCode1;
    }
    if (input.AuthenticationCode2 !== undefined && input.AuthenticationCode2 !== null) {
        entries["AuthenticationCode2"] = input.AuthenticationCode2;
    }
    return entries;
};
var serializeAws_queryentityListType = function (input, context) {
    var e_5, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_5 = __values(input), input_5_1 = input_5.next(); !input_5_1.done; input_5_1 = input_5.next()) {
            var entry = input_5_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (input_5_1 && !input_5_1.done && (_a = input_5.return)) _a.call(input_5);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return entries;
};
var serializeAws_queryGenerateOrganizationsAccessReportRequest = function (input, context) {
    var entries = {};
    if (input.EntityPath !== undefined && input.EntityPath !== null) {
        entries["EntityPath"] = input.EntityPath;
    }
    if (input.OrganizationsPolicyId !== undefined && input.OrganizationsPolicyId !== null) {
        entries["OrganizationsPolicyId"] = input.OrganizationsPolicyId;
    }
    return entries;
};
var serializeAws_queryGenerateServiceLastAccessedDetailsRequest = function (input, context) {
    var entries = {};
    if (input.Arn !== undefined && input.Arn !== null) {
        entries["Arn"] = input.Arn;
    }
    if (input.Granularity !== undefined && input.Granularity !== null) {
        entries["Granularity"] = input.Granularity;
    }
    return entries;
};
var serializeAws_queryGetAccessKeyLastUsedRequest = function (input, context) {
    var entries = {};
    if (input.AccessKeyId !== undefined && input.AccessKeyId !== null) {
        entries["AccessKeyId"] = input.AccessKeyId;
    }
    return entries;
};
var serializeAws_queryGetAccountAuthorizationDetailsRequest = function (input, context) {
    var entries = {};
    if (input.Filter !== undefined && input.Filter !== null) {
        var memberEntries = serializeAws_queryentityListType(input.Filter, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filter." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryGetContextKeysForCustomPolicyRequest = function (input, context) {
    var entries = {};
    if (input.PolicyInputList !== undefined && input.PolicyInputList !== null) {
        var memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PolicyInputList." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryGetContextKeysForPrincipalPolicyRequest = function (input, context) {
    var entries = {};
    if (input.PolicySourceArn !== undefined && input.PolicySourceArn !== null) {
        entries["PolicySourceArn"] = input.PolicySourceArn;
    }
    if (input.PolicyInputList !== undefined && input.PolicyInputList !== null) {
        var memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PolicyInputList." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryGetGroupPolicyRequest = function (input, context) {
    var entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
var serializeAws_queryGetGroupRequest = function (input, context) {
    var entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryGetInstanceProfileRequest = function (input, context) {
    var entries = {};
    if (input.InstanceProfileName !== undefined && input.InstanceProfileName !== null) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    return entries;
};
var serializeAws_queryGetLoginProfileRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
var serializeAws_queryGetOpenIDConnectProviderRequest = function (input, context) {
    var entries = {};
    if (input.OpenIDConnectProviderArn !== undefined && input.OpenIDConnectProviderArn !== null) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    return entries;
};
var serializeAws_queryGetOrganizationsAccessReportRequest = function (input, context) {
    var entries = {};
    if (input.JobId !== undefined && input.JobId !== null) {
        entries["JobId"] = input.JobId;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.SortKey !== undefined && input.SortKey !== null) {
        entries["SortKey"] = input.SortKey;
    }
    return entries;
};
var serializeAws_queryGetPolicyRequest = function (input, context) {
    var entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
var serializeAws_queryGetPolicyVersionRequest = function (input, context) {
    var entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.VersionId !== undefined && input.VersionId !== null) {
        entries["VersionId"] = input.VersionId;
    }
    return entries;
};
var serializeAws_queryGetRolePolicyRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
var serializeAws_queryGetRoleRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
var serializeAws_queryGetSAMLProviderRequest = function (input, context) {
    var entries = {};
    if (input.SAMLProviderArn !== undefined && input.SAMLProviderArn !== null) {
        entries["SAMLProviderArn"] = input.SAMLProviderArn;
    }
    return entries;
};
var serializeAws_queryGetServerCertificateRequest = function (input, context) {
    var entries = {};
    if (input.ServerCertificateName !== undefined && input.ServerCertificateName !== null) {
        entries["ServerCertificateName"] = input.ServerCertificateName;
    }
    return entries;
};
var serializeAws_queryGetServiceLastAccessedDetailsRequest = function (input, context) {
    var entries = {};
    if (input.JobId !== undefined && input.JobId !== null) {
        entries["JobId"] = input.JobId;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesRequest = function (input, context) {
    var entries = {};
    if (input.JobId !== undefined && input.JobId !== null) {
        entries["JobId"] = input.JobId;
    }
    if (input.ServiceNamespace !== undefined && input.ServiceNamespace !== null) {
        entries["ServiceNamespace"] = input.ServiceNamespace;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryGetServiceLinkedRoleDeletionStatusRequest = function (input, context) {
    var entries = {};
    if (input.DeletionTaskId !== undefined && input.DeletionTaskId !== null) {
        entries["DeletionTaskId"] = input.DeletionTaskId;
    }
    return entries;
};
var serializeAws_queryGetSSHPublicKeyRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.SSHPublicKeyId !== undefined && input.SSHPublicKeyId !== null) {
        entries["SSHPublicKeyId"] = input.SSHPublicKeyId;
    }
    if (input.Encoding !== undefined && input.Encoding !== null) {
        entries["Encoding"] = input.Encoding;
    }
    return entries;
};
var serializeAws_queryGetUserPolicyRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
var serializeAws_queryGetUserRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
var serializeAws_queryListAccessKeysRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListAccountAliasesRequest = function (input, context) {
    var entries = {};
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListAttachedGroupPoliciesRequest = function (input, context) {
    var entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.PathPrefix !== undefined && input.PathPrefix !== null) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListAttachedRolePoliciesRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.PathPrefix !== undefined && input.PathPrefix !== null) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListAttachedUserPoliciesRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.PathPrefix !== undefined && input.PathPrefix !== null) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListEntitiesForPolicyRequest = function (input, context) {
    var entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.EntityFilter !== undefined && input.EntityFilter !== null) {
        entries["EntityFilter"] = input.EntityFilter;
    }
    if (input.PathPrefix !== undefined && input.PathPrefix !== null) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    if (input.PolicyUsageFilter !== undefined && input.PolicyUsageFilter !== null) {
        entries["PolicyUsageFilter"] = input.PolicyUsageFilter;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListGroupPoliciesRequest = function (input, context) {
    var entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListGroupsForUserRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListGroupsRequest = function (input, context) {
    var entries = {};
    if (input.PathPrefix !== undefined && input.PathPrefix !== null) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListInstanceProfilesForRoleRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListInstanceProfilesRequest = function (input, context) {
    var entries = {};
    if (input.PathPrefix !== undefined && input.PathPrefix !== null) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListInstanceProfileTagsRequest = function (input, context) {
    var entries = {};
    if (input.InstanceProfileName !== undefined && input.InstanceProfileName !== null) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListMFADevicesRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListMFADeviceTagsRequest = function (input, context) {
    var entries = {};
    if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListOpenIDConnectProvidersRequest = function (input, context) {
    var entries = {};
    return entries;
};
var serializeAws_queryListOpenIDConnectProviderTagsRequest = function (input, context) {
    var entries = {};
    if (input.OpenIDConnectProviderArn !== undefined && input.OpenIDConnectProviderArn !== null) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListPoliciesGrantingServiceAccessRequest = function (input, context) {
    var entries = {};
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.Arn !== undefined && input.Arn !== null) {
        entries["Arn"] = input.Arn;
    }
    if (input.ServiceNamespaces !== undefined && input.ServiceNamespaces !== null) {
        var memberEntries = serializeAws_queryserviceNamespaceListType(input.ServiceNamespaces, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ServiceNamespaces." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryListPoliciesRequest = function (input, context) {
    var entries = {};
    if (input.Scope !== undefined && input.Scope !== null) {
        entries["Scope"] = input.Scope;
    }
    if (input.OnlyAttached !== undefined && input.OnlyAttached !== null) {
        entries["OnlyAttached"] = input.OnlyAttached;
    }
    if (input.PathPrefix !== undefined && input.PathPrefix !== null) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    if (input.PolicyUsageFilter !== undefined && input.PolicyUsageFilter !== null) {
        entries["PolicyUsageFilter"] = input.PolicyUsageFilter;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListPolicyTagsRequest = function (input, context) {
    var entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListPolicyVersionsRequest = function (input, context) {
    var entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListRolePoliciesRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListRolesRequest = function (input, context) {
    var entries = {};
    if (input.PathPrefix !== undefined && input.PathPrefix !== null) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListRoleTagsRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListSAMLProvidersRequest = function (input, context) {
    var entries = {};
    return entries;
};
var serializeAws_queryListSAMLProviderTagsRequest = function (input, context) {
    var entries = {};
    if (input.SAMLProviderArn !== undefined && input.SAMLProviderArn !== null) {
        entries["SAMLProviderArn"] = input.SAMLProviderArn;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListServerCertificatesRequest = function (input, context) {
    var entries = {};
    if (input.PathPrefix !== undefined && input.PathPrefix !== null) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListServerCertificateTagsRequest = function (input, context) {
    var entries = {};
    if (input.ServerCertificateName !== undefined && input.ServerCertificateName !== null) {
        entries["ServerCertificateName"] = input.ServerCertificateName;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListServiceSpecificCredentialsRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.ServiceName !== undefined && input.ServiceName !== null) {
        entries["ServiceName"] = input.ServiceName;
    }
    return entries;
};
var serializeAws_queryListSigningCertificatesRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListSSHPublicKeysRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListUserPoliciesRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListUsersRequest = function (input, context) {
    var entries = {};
    if (input.PathPrefix !== undefined && input.PathPrefix !== null) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListUserTagsRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListVirtualMFADevicesRequest = function (input, context) {
    var entries = {};
    if (input.AssignmentStatus !== undefined && input.AssignmentStatus !== null) {
        entries["AssignmentStatus"] = input.AssignmentStatus;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryPutGroupPolicyRequest = function (input, context) {
    var entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.PolicyDocument !== undefined && input.PolicyDocument !== null) {
        entries["PolicyDocument"] = input.PolicyDocument;
    }
    return entries;
};
var serializeAws_queryPutRolePermissionsBoundaryRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.PermissionsBoundary !== undefined && input.PermissionsBoundary !== null) {
        entries["PermissionsBoundary"] = input.PermissionsBoundary;
    }
    return entries;
};
var serializeAws_queryPutRolePolicyRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.PolicyDocument !== undefined && input.PolicyDocument !== null) {
        entries["PolicyDocument"] = input.PolicyDocument;
    }
    return entries;
};
var serializeAws_queryPutUserPermissionsBoundaryRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.PermissionsBoundary !== undefined && input.PermissionsBoundary !== null) {
        entries["PermissionsBoundary"] = input.PermissionsBoundary;
    }
    return entries;
};
var serializeAws_queryPutUserPolicyRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.PolicyDocument !== undefined && input.PolicyDocument !== null) {
        entries["PolicyDocument"] = input.PolicyDocument;
    }
    return entries;
};
var serializeAws_queryRemoveClientIDFromOpenIDConnectProviderRequest = function (input, context) {
    var entries = {};
    if (input.OpenIDConnectProviderArn !== undefined && input.OpenIDConnectProviderArn !== null) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    if (input.ClientID !== undefined && input.ClientID !== null) {
        entries["ClientID"] = input.ClientID;
    }
    return entries;
};
var serializeAws_queryRemoveRoleFromInstanceProfileRequest = function (input, context) {
    var entries = {};
    if (input.InstanceProfileName !== undefined && input.InstanceProfileName !== null) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
var serializeAws_queryRemoveUserFromGroupRequest = function (input, context) {
    var entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
var serializeAws_queryResetServiceSpecificCredentialRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.ServiceSpecificCredentialId !== undefined && input.ServiceSpecificCredentialId !== null) {
        entries["ServiceSpecificCredentialId"] = input.ServiceSpecificCredentialId;
    }
    return entries;
};
var serializeAws_queryResourceNameListType = function (input, context) {
    var e_6, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_6 = __values(input), input_6_1 = input_6.next(); !input_6_1.done; input_6_1 = input_6.next()) {
            var entry = input_6_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (input_6_1 && !input_6_1.done && (_a = input_6.return)) _a.call(input_6);
        }
        finally { if (e_6) throw e_6.error; }
    }
    return entries;
};
var serializeAws_queryResyncMFADeviceRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.AuthenticationCode1 !== undefined && input.AuthenticationCode1 !== null) {
        entries["AuthenticationCode1"] = input.AuthenticationCode1;
    }
    if (input.AuthenticationCode2 !== undefined && input.AuthenticationCode2 !== null) {
        entries["AuthenticationCode2"] = input.AuthenticationCode2;
    }
    return entries;
};
var serializeAws_queryserviceNamespaceListType = function (input, context) {
    var e_7, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_7 = __values(input), input_7_1 = input_7.next(); !input_7_1.done; input_7_1 = input_7.next()) {
            var entry = input_7_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (input_7_1 && !input_7_1.done && (_a = input_7.return)) _a.call(input_7);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return entries;
};
var serializeAws_querySetDefaultPolicyVersionRequest = function (input, context) {
    var entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.VersionId !== undefined && input.VersionId !== null) {
        entries["VersionId"] = input.VersionId;
    }
    return entries;
};
var serializeAws_querySetSecurityTokenServicePreferencesRequest = function (input, context) {
    var entries = {};
    if (input.GlobalEndpointTokenVersion !== undefined && input.GlobalEndpointTokenVersion !== null) {
        entries["GlobalEndpointTokenVersion"] = input.GlobalEndpointTokenVersion;
    }
    return entries;
};
var serializeAws_querySimulateCustomPolicyRequest = function (input, context) {
    var entries = {};
    if (input.PolicyInputList !== undefined && input.PolicyInputList !== null) {
        var memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PolicyInputList." + key;
            entries[loc] = value;
        });
    }
    if (input.PermissionsBoundaryPolicyInputList !== undefined && input.PermissionsBoundaryPolicyInputList !== null) {
        var memberEntries = serializeAws_querySimulationPolicyListType(input.PermissionsBoundaryPolicyInputList, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PermissionsBoundaryPolicyInputList." + key;
            entries[loc] = value;
        });
    }
    if (input.ActionNames !== undefined && input.ActionNames !== null) {
        var memberEntries = serializeAws_queryActionNameListType(input.ActionNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ActionNames." + key;
            entries[loc] = value;
        });
    }
    if (input.ResourceArns !== undefined && input.ResourceArns !== null) {
        var memberEntries = serializeAws_queryResourceNameListType(input.ResourceArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ResourceArns." + key;
            entries[loc] = value;
        });
    }
    if (input.ResourcePolicy !== undefined && input.ResourcePolicy !== null) {
        entries["ResourcePolicy"] = input.ResourcePolicy;
    }
    if (input.ResourceOwner !== undefined && input.ResourceOwner !== null) {
        entries["ResourceOwner"] = input.ResourceOwner;
    }
    if (input.CallerArn !== undefined && input.CallerArn !== null) {
        entries["CallerArn"] = input.CallerArn;
    }
    if (input.ContextEntries !== undefined && input.ContextEntries !== null) {
        var memberEntries = serializeAws_queryContextEntryListType(input.ContextEntries, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ContextEntries." + key;
            entries[loc] = value;
        });
    }
    if (input.ResourceHandlingOption !== undefined && input.ResourceHandlingOption !== null) {
        entries["ResourceHandlingOption"] = input.ResourceHandlingOption;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_querySimulatePrincipalPolicyRequest = function (input, context) {
    var entries = {};
    if (input.PolicySourceArn !== undefined && input.PolicySourceArn !== null) {
        entries["PolicySourceArn"] = input.PolicySourceArn;
    }
    if (input.PolicyInputList !== undefined && input.PolicyInputList !== null) {
        var memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PolicyInputList." + key;
            entries[loc] = value;
        });
    }
    if (input.PermissionsBoundaryPolicyInputList !== undefined && input.PermissionsBoundaryPolicyInputList !== null) {
        var memberEntries = serializeAws_querySimulationPolicyListType(input.PermissionsBoundaryPolicyInputList, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PermissionsBoundaryPolicyInputList." + key;
            entries[loc] = value;
        });
    }
    if (input.ActionNames !== undefined && input.ActionNames !== null) {
        var memberEntries = serializeAws_queryActionNameListType(input.ActionNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ActionNames." + key;
            entries[loc] = value;
        });
    }
    if (input.ResourceArns !== undefined && input.ResourceArns !== null) {
        var memberEntries = serializeAws_queryResourceNameListType(input.ResourceArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ResourceArns." + key;
            entries[loc] = value;
        });
    }
    if (input.ResourcePolicy !== undefined && input.ResourcePolicy !== null) {
        entries["ResourcePolicy"] = input.ResourcePolicy;
    }
    if (input.ResourceOwner !== undefined && input.ResourceOwner !== null) {
        entries["ResourceOwner"] = input.ResourceOwner;
    }
    if (input.CallerArn !== undefined && input.CallerArn !== null) {
        entries["CallerArn"] = input.CallerArn;
    }
    if (input.ContextEntries !== undefined && input.ContextEntries !== null) {
        var memberEntries = serializeAws_queryContextEntryListType(input.ContextEntries, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ContextEntries." + key;
            entries[loc] = value;
        });
    }
    if (input.ResourceHandlingOption !== undefined && input.ResourceHandlingOption !== null) {
        entries["ResourceHandlingOption"] = input.ResourceHandlingOption;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_querySimulationPolicyListType = function (input, context) {
    var e_8, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_8 = __values(input), input_8_1 = input_8.next(); !input_8_1.done; input_8_1 = input_8.next()) {
            var entry = input_8_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (input_8_1 && !input_8_1.done && (_a = input_8.return)) _a.call(input_8);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return entries;
};
var serializeAws_queryTag = function (input, context) {
    var entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
var serializeAws_queryTagInstanceProfileRequest = function (input, context) {
    var entries = {};
    if (input.InstanceProfileName !== undefined && input.InstanceProfileName !== null) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_querytagKeyListType = function (input, context) {
    var e_9, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_9 = __values(input), input_9_1 = input_9.next(); !input_9_1.done; input_9_1 = input_9.next()) {
            var entry = input_9_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (input_9_1 && !input_9_1.done && (_a = input_9.return)) _a.call(input_9);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return entries;
};
var serializeAws_querytagListType = function (input, context) {
    var e_10, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_10 = __values(input), input_10_1 = input_10.next(); !input_10_1.done; input_10_1 = input_10.next()) {
            var entry = input_10_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryTag(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (input_10_1 && !input_10_1.done && (_a = input_10.return)) _a.call(input_10);
        }
        finally { if (e_10) throw e_10.error; }
    }
    return entries;
};
var serializeAws_queryTagMFADeviceRequest = function (input, context) {
    var entries = {};
    if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryTagOpenIDConnectProviderRequest = function (input, context) {
    var entries = {};
    if (input.OpenIDConnectProviderArn !== undefined && input.OpenIDConnectProviderArn !== null) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryTagPolicyRequest = function (input, context) {
    var entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryTagRoleRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryTagSAMLProviderRequest = function (input, context) {
    var entries = {};
    if (input.SAMLProviderArn !== undefined && input.SAMLProviderArn !== null) {
        entries["SAMLProviderArn"] = input.SAMLProviderArn;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryTagServerCertificateRequest = function (input, context) {
    var entries = {};
    if (input.ServerCertificateName !== undefined && input.ServerCertificateName !== null) {
        entries["ServerCertificateName"] = input.ServerCertificateName;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryTagUserRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_querythumbprintListType = function (input, context) {
    var e_11, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_11 = __values(input), input_11_1 = input_11.next(); !input_11_1.done; input_11_1 = input_11.next()) {
            var entry = input_11_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (input_11_1 && !input_11_1.done && (_a = input_11.return)) _a.call(input_11);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return entries;
};
var serializeAws_queryUntagInstanceProfileRequest = function (input, context) {
    var entries = {};
    if (input.InstanceProfileName !== undefined && input.InstanceProfileName !== null) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUntagMFADeviceRequest = function (input, context) {
    var entries = {};
    if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUntagOpenIDConnectProviderRequest = function (input, context) {
    var entries = {};
    if (input.OpenIDConnectProviderArn !== undefined && input.OpenIDConnectProviderArn !== null) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUntagPolicyRequest = function (input, context) {
    var entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUntagRoleRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUntagSAMLProviderRequest = function (input, context) {
    var entries = {};
    if (input.SAMLProviderArn !== undefined && input.SAMLProviderArn !== null) {
        entries["SAMLProviderArn"] = input.SAMLProviderArn;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUntagServerCertificateRequest = function (input, context) {
    var entries = {};
    if (input.ServerCertificateName !== undefined && input.ServerCertificateName !== null) {
        entries["ServerCertificateName"] = input.ServerCertificateName;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUntagUserRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUpdateAccessKeyRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.AccessKeyId !== undefined && input.AccessKeyId !== null) {
        entries["AccessKeyId"] = input.AccessKeyId;
    }
    if (input.Status !== undefined && input.Status !== null) {
        entries["Status"] = input.Status;
    }
    return entries;
};
var serializeAws_queryUpdateAccountPasswordPolicyRequest = function (input, context) {
    var entries = {};
    if (input.MinimumPasswordLength !== undefined && input.MinimumPasswordLength !== null) {
        entries["MinimumPasswordLength"] = input.MinimumPasswordLength;
    }
    if (input.RequireSymbols !== undefined && input.RequireSymbols !== null) {
        entries["RequireSymbols"] = input.RequireSymbols;
    }
    if (input.RequireNumbers !== undefined && input.RequireNumbers !== null) {
        entries["RequireNumbers"] = input.RequireNumbers;
    }
    if (input.RequireUppercaseCharacters !== undefined && input.RequireUppercaseCharacters !== null) {
        entries["RequireUppercaseCharacters"] = input.RequireUppercaseCharacters;
    }
    if (input.RequireLowercaseCharacters !== undefined && input.RequireLowercaseCharacters !== null) {
        entries["RequireLowercaseCharacters"] = input.RequireLowercaseCharacters;
    }
    if (input.AllowUsersToChangePassword !== undefined && input.AllowUsersToChangePassword !== null) {
        entries["AllowUsersToChangePassword"] = input.AllowUsersToChangePassword;
    }
    if (input.MaxPasswordAge !== undefined && input.MaxPasswordAge !== null) {
        entries["MaxPasswordAge"] = input.MaxPasswordAge;
    }
    if (input.PasswordReusePrevention !== undefined && input.PasswordReusePrevention !== null) {
        entries["PasswordReusePrevention"] = input.PasswordReusePrevention;
    }
    if (input.HardExpiry !== undefined && input.HardExpiry !== null) {
        entries["HardExpiry"] = input.HardExpiry;
    }
    return entries;
};
var serializeAws_queryUpdateAssumeRolePolicyRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.PolicyDocument !== undefined && input.PolicyDocument !== null) {
        entries["PolicyDocument"] = input.PolicyDocument;
    }
    return entries;
};
var serializeAws_queryUpdateGroupRequest = function (input, context) {
    var entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.NewPath !== undefined && input.NewPath !== null) {
        entries["NewPath"] = input.NewPath;
    }
    if (input.NewGroupName !== undefined && input.NewGroupName !== null) {
        entries["NewGroupName"] = input.NewGroupName;
    }
    return entries;
};
var serializeAws_queryUpdateLoginProfileRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.Password !== undefined && input.Password !== null) {
        entries["Password"] = input.Password;
    }
    if (input.PasswordResetRequired !== undefined && input.PasswordResetRequired !== null) {
        entries["PasswordResetRequired"] = input.PasswordResetRequired;
    }
    return entries;
};
var serializeAws_queryUpdateOpenIDConnectProviderThumbprintRequest = function (input, context) {
    var entries = {};
    if (input.OpenIDConnectProviderArn !== undefined && input.OpenIDConnectProviderArn !== null) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    if (input.ThumbprintList !== undefined && input.ThumbprintList !== null) {
        var memberEntries = serializeAws_querythumbprintListType(input.ThumbprintList, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ThumbprintList." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUpdateRoleDescriptionRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    return entries;
};
var serializeAws_queryUpdateRoleRequest = function (input, context) {
    var entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.MaxSessionDuration !== undefined && input.MaxSessionDuration !== null) {
        entries["MaxSessionDuration"] = input.MaxSessionDuration;
    }
    return entries;
};
var serializeAws_queryUpdateSAMLProviderRequest = function (input, context) {
    var entries = {};
    if (input.SAMLMetadataDocument !== undefined && input.SAMLMetadataDocument !== null) {
        entries["SAMLMetadataDocument"] = input.SAMLMetadataDocument;
    }
    if (input.SAMLProviderArn !== undefined && input.SAMLProviderArn !== null) {
        entries["SAMLProviderArn"] = input.SAMLProviderArn;
    }
    return entries;
};
var serializeAws_queryUpdateServerCertificateRequest = function (input, context) {
    var entries = {};
    if (input.ServerCertificateName !== undefined && input.ServerCertificateName !== null) {
        entries["ServerCertificateName"] = input.ServerCertificateName;
    }
    if (input.NewPath !== undefined && input.NewPath !== null) {
        entries["NewPath"] = input.NewPath;
    }
    if (input.NewServerCertificateName !== undefined && input.NewServerCertificateName !== null) {
        entries["NewServerCertificateName"] = input.NewServerCertificateName;
    }
    return entries;
};
var serializeAws_queryUpdateServiceSpecificCredentialRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.ServiceSpecificCredentialId !== undefined && input.ServiceSpecificCredentialId !== null) {
        entries["ServiceSpecificCredentialId"] = input.ServiceSpecificCredentialId;
    }
    if (input.Status !== undefined && input.Status !== null) {
        entries["Status"] = input.Status;
    }
    return entries;
};
var serializeAws_queryUpdateSigningCertificateRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.CertificateId !== undefined && input.CertificateId !== null) {
        entries["CertificateId"] = input.CertificateId;
    }
    if (input.Status !== undefined && input.Status !== null) {
        entries["Status"] = input.Status;
    }
    return entries;
};
var serializeAws_queryUpdateSSHPublicKeyRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.SSHPublicKeyId !== undefined && input.SSHPublicKeyId !== null) {
        entries["SSHPublicKeyId"] = input.SSHPublicKeyId;
    }
    if (input.Status !== undefined && input.Status !== null) {
        entries["Status"] = input.Status;
    }
    return entries;
};
var serializeAws_queryUpdateUserRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.NewPath !== undefined && input.NewPath !== null) {
        entries["NewPath"] = input.NewPath;
    }
    if (input.NewUserName !== undefined && input.NewUserName !== null) {
        entries["NewUserName"] = input.NewUserName;
    }
    return entries;
};
var serializeAws_queryUploadServerCertificateRequest = function (input, context) {
    var entries = {};
    if (input.Path !== undefined && input.Path !== null) {
        entries["Path"] = input.Path;
    }
    if (input.ServerCertificateName !== undefined && input.ServerCertificateName !== null) {
        entries["ServerCertificateName"] = input.ServerCertificateName;
    }
    if (input.CertificateBody !== undefined && input.CertificateBody !== null) {
        entries["CertificateBody"] = input.CertificateBody;
    }
    if (input.PrivateKey !== undefined && input.PrivateKey !== null) {
        entries["PrivateKey"] = input.PrivateKey;
    }
    if (input.CertificateChain !== undefined && input.CertificateChain !== null) {
        entries["CertificateChain"] = input.CertificateChain;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUploadSigningCertificateRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.CertificateBody !== undefined && input.CertificateBody !== null) {
        entries["CertificateBody"] = input.CertificateBody;
    }
    return entries;
};
var serializeAws_queryUploadSSHPublicKeyRequest = function (input, context) {
    var entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.SSHPublicKeyBody !== undefined && input.SSHPublicKeyBody !== null) {
        entries["SSHPublicKeyBody"] = input.SSHPublicKeyBody;
    }
    return entries;
};
var deserializeAws_queryAccessDetail = function (output, context) {
    var contents = {
        ServiceName: undefined,
        ServiceNamespace: undefined,
        Region: undefined,
        EntityPath: undefined,
        LastAuthenticatedTime: undefined,
        TotalAuthenticatedEntities: undefined,
    };
    if (output["ServiceName"] !== undefined) {
        contents.ServiceName = output["ServiceName"];
    }
    if (output["ServiceNamespace"] !== undefined) {
        contents.ServiceNamespace = output["ServiceNamespace"];
    }
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    if (output["EntityPath"] !== undefined) {
        contents.EntityPath = output["EntityPath"];
    }
    if (output["LastAuthenticatedTime"] !== undefined) {
        contents.LastAuthenticatedTime = new Date(output["LastAuthenticatedTime"]);
    }
    if (output["TotalAuthenticatedEntities"] !== undefined) {
        contents.TotalAuthenticatedEntities = parseInt(output["TotalAuthenticatedEntities"]);
    }
    return contents;
};
var deserializeAws_queryAccessDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAccessDetail(entry, context);
    });
};
var deserializeAws_queryAccessKey = function (output, context) {
    var contents = {
        UserName: undefined,
        AccessKeyId: undefined,
        Status: undefined,
        SecretAccessKey: undefined,
        CreateDate: undefined,
    };
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["AccessKeyId"] !== undefined) {
        contents.AccessKeyId = output["AccessKeyId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["SecretAccessKey"] !== undefined) {
        contents.SecretAccessKey = output["SecretAccessKey"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    return contents;
};
var deserializeAws_queryAccessKeyLastUsed = function (output, context) {
    var contents = {
        LastUsedDate: undefined,
        ServiceName: undefined,
        Region: undefined,
    };
    if (output["LastUsedDate"] !== undefined) {
        contents.LastUsedDate = new Date(output["LastUsedDate"]);
    }
    if (output["ServiceName"] !== undefined) {
        contents.ServiceName = output["ServiceName"];
    }
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    return contents;
};
var deserializeAws_queryAccessKeyMetadata = function (output, context) {
    var contents = {
        UserName: undefined,
        AccessKeyId: undefined,
        Status: undefined,
        CreateDate: undefined,
    };
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["AccessKeyId"] !== undefined) {
        contents.AccessKeyId = output["AccessKeyId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    return contents;
};
var deserializeAws_queryaccessKeyMetadataListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAccessKeyMetadata(entry, context);
    });
};
var deserializeAws_queryaccountAliasListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryArnListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryAttachedPermissionsBoundary = function (output, context) {
    var contents = {
        PermissionsBoundaryType: undefined,
        PermissionsBoundaryArn: undefined,
    };
    if (output["PermissionsBoundaryType"] !== undefined) {
        contents.PermissionsBoundaryType = output["PermissionsBoundaryType"];
    }
    if (output["PermissionsBoundaryArn"] !== undefined) {
        contents.PermissionsBoundaryArn = output["PermissionsBoundaryArn"];
    }
    return contents;
};
var deserializeAws_queryattachedPoliciesListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAttachedPolicy(entry, context);
    });
};
var deserializeAws_queryAttachedPolicy = function (output, context) {
    var contents = {
        PolicyName: undefined,
        PolicyArn: undefined,
    };
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["PolicyArn"] !== undefined) {
        contents.PolicyArn = output["PolicyArn"];
    }
    return contents;
};
var deserializeAws_querycertificateListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySigningCertificate(entry, context);
    });
};
var deserializeAws_queryclientIDListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryConcurrentModificationException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryContextKeyNamesResultListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryCreateAccessKeyResponse = function (output, context) {
    var contents = {
        AccessKey: undefined,
    };
    if (output["AccessKey"] !== undefined) {
        contents.AccessKey = deserializeAws_queryAccessKey(output["AccessKey"], context);
    }
    return contents;
};
var deserializeAws_queryCreateGroupResponse = function (output, context) {
    var contents = {
        Group: undefined,
    };
    if (output["Group"] !== undefined) {
        contents.Group = deserializeAws_queryGroup(output["Group"], context);
    }
    return contents;
};
var deserializeAws_queryCreateInstanceProfileResponse = function (output, context) {
    var contents = {
        InstanceProfile: undefined,
    };
    if (output["InstanceProfile"] !== undefined) {
        contents.InstanceProfile = deserializeAws_queryInstanceProfile(output["InstanceProfile"], context);
    }
    return contents;
};
var deserializeAws_queryCreateLoginProfileResponse = function (output, context) {
    var contents = {
        LoginProfile: undefined,
    };
    if (output["LoginProfile"] !== undefined) {
        contents.LoginProfile = deserializeAws_queryLoginProfile(output["LoginProfile"], context);
    }
    return contents;
};
var deserializeAws_queryCreateOpenIDConnectProviderResponse = function (output, context) {
    var contents = {
        OpenIDConnectProviderArn: undefined,
        Tags: undefined,
    };
    if (output["OpenIDConnectProviderArn"] !== undefined) {
        contents.OpenIDConnectProviderArn = output["OpenIDConnectProviderArn"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryCreatePolicyResponse = function (output, context) {
    var contents = {
        Policy: undefined,
    };
    if (output["Policy"] !== undefined) {
        contents.Policy = deserializeAws_queryPolicy(output["Policy"], context);
    }
    return contents;
};
var deserializeAws_queryCreatePolicyVersionResponse = function (output, context) {
    var contents = {
        PolicyVersion: undefined,
    };
    if (output["PolicyVersion"] !== undefined) {
        contents.PolicyVersion = deserializeAws_queryPolicyVersion(output["PolicyVersion"], context);
    }
    return contents;
};
var deserializeAws_queryCreateRoleResponse = function (output, context) {
    var contents = {
        Role: undefined,
    };
    if (output["Role"] !== undefined) {
        contents.Role = deserializeAws_queryRole(output["Role"], context);
    }
    return contents;
};
var deserializeAws_queryCreateSAMLProviderResponse = function (output, context) {
    var contents = {
        SAMLProviderArn: undefined,
        Tags: undefined,
    };
    if (output["SAMLProviderArn"] !== undefined) {
        contents.SAMLProviderArn = output["SAMLProviderArn"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryCreateServiceLinkedRoleResponse = function (output, context) {
    var contents = {
        Role: undefined,
    };
    if (output["Role"] !== undefined) {
        contents.Role = deserializeAws_queryRole(output["Role"], context);
    }
    return contents;
};
var deserializeAws_queryCreateServiceSpecificCredentialResponse = function (output, context) {
    var contents = {
        ServiceSpecificCredential: undefined,
    };
    if (output["ServiceSpecificCredential"] !== undefined) {
        contents.ServiceSpecificCredential = deserializeAws_queryServiceSpecificCredential(output["ServiceSpecificCredential"], context);
    }
    return contents;
};
var deserializeAws_queryCreateUserResponse = function (output, context) {
    var contents = {
        User: undefined,
    };
    if (output["User"] !== undefined) {
        contents.User = deserializeAws_queryUser(output["User"], context);
    }
    return contents;
};
var deserializeAws_queryCreateVirtualMFADeviceResponse = function (output, context) {
    var contents = {
        VirtualMFADevice: undefined,
    };
    if (output["VirtualMFADevice"] !== undefined) {
        contents.VirtualMFADevice = deserializeAws_queryVirtualMFADevice(output["VirtualMFADevice"], context);
    }
    return contents;
};
var deserializeAws_queryCredentialReportExpiredException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCredentialReportNotPresentException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCredentialReportNotReadyException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDeleteConflictException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDeleteServiceLinkedRoleResponse = function (output, context) {
    var contents = {
        DeletionTaskId: undefined,
    };
    if (output["DeletionTaskId"] !== undefined) {
        contents.DeletionTaskId = output["DeletionTaskId"];
    }
    return contents;
};
var deserializeAws_queryDeletionTaskFailureReasonType = function (output, context) {
    var contents = {
        Reason: undefined,
        RoleUsageList: undefined,
    };
    if (output["Reason"] !== undefined) {
        contents.Reason = output["Reason"];
    }
    if (output.RoleUsageList === "") {
        contents.RoleUsageList = [];
    }
    if (output["RoleUsageList"] !== undefined && output["RoleUsageList"]["member"] !== undefined) {
        contents.RoleUsageList = deserializeAws_queryRoleUsageListType(__getArrayIfSingleItem(output["RoleUsageList"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDuplicateCertificateException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDuplicateSSHPublicKeyException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryEntityAlreadyExistsException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryEntityDetails = function (output, context) {
    var contents = {
        EntityInfo: undefined,
        LastAuthenticated: undefined,
    };
    if (output["EntityInfo"] !== undefined) {
        contents.EntityInfo = deserializeAws_queryEntityInfo(output["EntityInfo"], context);
    }
    if (output["LastAuthenticated"] !== undefined) {
        contents.LastAuthenticated = new Date(output["LastAuthenticated"]);
    }
    return contents;
};
var deserializeAws_queryentityDetailsListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEntityDetails(entry, context);
    });
};
var deserializeAws_queryEntityInfo = function (output, context) {
    var contents = {
        Arn: undefined,
        Name: undefined,
        Type: undefined,
        Id: undefined,
        Path: undefined,
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    return contents;
};
var deserializeAws_queryEntityTemporarilyUnmodifiableException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryErrorDetails = function (output, context) {
    var contents = {
        Message: undefined,
        Code: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    return contents;
};
var deserializeAws_queryEvalDecisionDetailsType = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["key"]] = pair["value"], _a));
    }, {});
};
var deserializeAws_queryEvaluationResult = function (output, context) {
    var contents = {
        EvalActionName: undefined,
        EvalResourceName: undefined,
        EvalDecision: undefined,
        MatchedStatements: undefined,
        MissingContextValues: undefined,
        OrganizationsDecisionDetail: undefined,
        PermissionsBoundaryDecisionDetail: undefined,
        EvalDecisionDetails: undefined,
        ResourceSpecificResults: undefined,
    };
    if (output["EvalActionName"] !== undefined) {
        contents.EvalActionName = output["EvalActionName"];
    }
    if (output["EvalResourceName"] !== undefined) {
        contents.EvalResourceName = output["EvalResourceName"];
    }
    if (output["EvalDecision"] !== undefined) {
        contents.EvalDecision = output["EvalDecision"];
    }
    if (output.MatchedStatements === "") {
        contents.MatchedStatements = [];
    }
    if (output["MatchedStatements"] !== undefined && output["MatchedStatements"]["member"] !== undefined) {
        contents.MatchedStatements = deserializeAws_queryStatementListType(__getArrayIfSingleItem(output["MatchedStatements"]["member"]), context);
    }
    if (output.MissingContextValues === "") {
        contents.MissingContextValues = [];
    }
    if (output["MissingContextValues"] !== undefined && output["MissingContextValues"]["member"] !== undefined) {
        contents.MissingContextValues = deserializeAws_queryContextKeyNamesResultListType(__getArrayIfSingleItem(output["MissingContextValues"]["member"]), context);
    }
    if (output["OrganizationsDecisionDetail"] !== undefined) {
        contents.OrganizationsDecisionDetail = deserializeAws_queryOrganizationsDecisionDetail(output["OrganizationsDecisionDetail"], context);
    }
    if (output["PermissionsBoundaryDecisionDetail"] !== undefined) {
        contents.PermissionsBoundaryDecisionDetail = deserializeAws_queryPermissionsBoundaryDecisionDetail(output["PermissionsBoundaryDecisionDetail"], context);
    }
    if (output.EvalDecisionDetails === "") {
        contents.EvalDecisionDetails = {};
    }
    if (output["EvalDecisionDetails"] !== undefined && output["EvalDecisionDetails"]["entry"] !== undefined) {
        contents.EvalDecisionDetails = deserializeAws_queryEvalDecisionDetailsType(__getArrayIfSingleItem(output["EvalDecisionDetails"]["entry"]), context);
    }
    if (output.ResourceSpecificResults === "") {
        contents.ResourceSpecificResults = [];
    }
    if (output["ResourceSpecificResults"] !== undefined && output["ResourceSpecificResults"]["member"] !== undefined) {
        contents.ResourceSpecificResults = deserializeAws_queryResourceSpecificResultListType(__getArrayIfSingleItem(output["ResourceSpecificResults"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryEvaluationResultsListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEvaluationResult(entry, context);
    });
};
var deserializeAws_queryGenerateCredentialReportResponse = function (output, context) {
    var contents = {
        State: undefined,
        Description: undefined,
    };
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    return contents;
};
var deserializeAws_queryGenerateOrganizationsAccessReportResponse = function (output, context) {
    var contents = {
        JobId: undefined,
    };
    if (output["JobId"] !== undefined) {
        contents.JobId = output["JobId"];
    }
    return contents;
};
var deserializeAws_queryGenerateServiceLastAccessedDetailsResponse = function (output, context) {
    var contents = {
        JobId: undefined,
    };
    if (output["JobId"] !== undefined) {
        contents.JobId = output["JobId"];
    }
    return contents;
};
var deserializeAws_queryGetAccessKeyLastUsedResponse = function (output, context) {
    var contents = {
        UserName: undefined,
        AccessKeyLastUsed: undefined,
    };
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["AccessKeyLastUsed"] !== undefined) {
        contents.AccessKeyLastUsed = deserializeAws_queryAccessKeyLastUsed(output["AccessKeyLastUsed"], context);
    }
    return contents;
};
var deserializeAws_queryGetAccountAuthorizationDetailsResponse = function (output, context) {
    var contents = {
        UserDetailList: undefined,
        GroupDetailList: undefined,
        RoleDetailList: undefined,
        Policies: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.UserDetailList === "") {
        contents.UserDetailList = [];
    }
    if (output["UserDetailList"] !== undefined && output["UserDetailList"]["member"] !== undefined) {
        contents.UserDetailList = deserializeAws_queryuserDetailListType(__getArrayIfSingleItem(output["UserDetailList"]["member"]), context);
    }
    if (output.GroupDetailList === "") {
        contents.GroupDetailList = [];
    }
    if (output["GroupDetailList"] !== undefined && output["GroupDetailList"]["member"] !== undefined) {
        contents.GroupDetailList = deserializeAws_querygroupDetailListType(__getArrayIfSingleItem(output["GroupDetailList"]["member"]), context);
    }
    if (output.RoleDetailList === "") {
        contents.RoleDetailList = [];
    }
    if (output["RoleDetailList"] !== undefined && output["RoleDetailList"]["member"] !== undefined) {
        contents.RoleDetailList = deserializeAws_queryroleDetailListType(__getArrayIfSingleItem(output["RoleDetailList"]["member"]), context);
    }
    if (output.Policies === "") {
        contents.Policies = [];
    }
    if (output["Policies"] !== undefined && output["Policies"]["member"] !== undefined) {
        contents.Policies = deserializeAws_queryManagedPolicyDetailListType(__getArrayIfSingleItem(output["Policies"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryGetAccountPasswordPolicyResponse = function (output, context) {
    var contents = {
        PasswordPolicy: undefined,
    };
    if (output["PasswordPolicy"] !== undefined) {
        contents.PasswordPolicy = deserializeAws_queryPasswordPolicy(output["PasswordPolicy"], context);
    }
    return contents;
};
var deserializeAws_queryGetAccountSummaryResponse = function (output, context) {
    var contents = {
        SummaryMap: undefined,
    };
    if (output.SummaryMap === "") {
        contents.SummaryMap = {};
    }
    if (output["SummaryMap"] !== undefined && output["SummaryMap"]["entry"] !== undefined) {
        contents.SummaryMap = deserializeAws_querysummaryMapType(__getArrayIfSingleItem(output["SummaryMap"]["entry"]), context);
    }
    return contents;
};
var deserializeAws_queryGetContextKeysForPolicyResponse = function (output, context) {
    var contents = {
        ContextKeyNames: undefined,
    };
    if (output.ContextKeyNames === "") {
        contents.ContextKeyNames = [];
    }
    if (output["ContextKeyNames"] !== undefined && output["ContextKeyNames"]["member"] !== undefined) {
        contents.ContextKeyNames = deserializeAws_queryContextKeyNamesResultListType(__getArrayIfSingleItem(output["ContextKeyNames"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryGetCredentialReportResponse = function (output, context) {
    var contents = {
        Content: undefined,
        ReportFormat: undefined,
        GeneratedTime: undefined,
    };
    if (output["Content"] !== undefined) {
        contents.Content = context.base64Decoder(output["Content"]);
    }
    if (output["ReportFormat"] !== undefined) {
        contents.ReportFormat = output["ReportFormat"];
    }
    if (output["GeneratedTime"] !== undefined) {
        contents.GeneratedTime = new Date(output["GeneratedTime"]);
    }
    return contents;
};
var deserializeAws_queryGetGroupPolicyResponse = function (output, context) {
    var contents = {
        GroupName: undefined,
        PolicyName: undefined,
        PolicyDocument: undefined,
    };
    if (output["GroupName"] !== undefined) {
        contents.GroupName = output["GroupName"];
    }
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["PolicyDocument"] !== undefined) {
        contents.PolicyDocument = output["PolicyDocument"];
    }
    return contents;
};
var deserializeAws_queryGetGroupResponse = function (output, context) {
    var contents = {
        Group: undefined,
        Users: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output["Group"] !== undefined) {
        contents.Group = deserializeAws_queryGroup(output["Group"], context);
    }
    if (output.Users === "") {
        contents.Users = [];
    }
    if (output["Users"] !== undefined && output["Users"]["member"] !== undefined) {
        contents.Users = deserializeAws_queryuserListType(__getArrayIfSingleItem(output["Users"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryGetInstanceProfileResponse = function (output, context) {
    var contents = {
        InstanceProfile: undefined,
    };
    if (output["InstanceProfile"] !== undefined) {
        contents.InstanceProfile = deserializeAws_queryInstanceProfile(output["InstanceProfile"], context);
    }
    return contents;
};
var deserializeAws_queryGetLoginProfileResponse = function (output, context) {
    var contents = {
        LoginProfile: undefined,
    };
    if (output["LoginProfile"] !== undefined) {
        contents.LoginProfile = deserializeAws_queryLoginProfile(output["LoginProfile"], context);
    }
    return contents;
};
var deserializeAws_queryGetOpenIDConnectProviderResponse = function (output, context) {
    var contents = {
        Url: undefined,
        ClientIDList: undefined,
        ThumbprintList: undefined,
        CreateDate: undefined,
        Tags: undefined,
    };
    if (output["Url"] !== undefined) {
        contents.Url = output["Url"];
    }
    if (output.ClientIDList === "") {
        contents.ClientIDList = [];
    }
    if (output["ClientIDList"] !== undefined && output["ClientIDList"]["member"] !== undefined) {
        contents.ClientIDList = deserializeAws_queryclientIDListType(__getArrayIfSingleItem(output["ClientIDList"]["member"]), context);
    }
    if (output.ThumbprintList === "") {
        contents.ThumbprintList = [];
    }
    if (output["ThumbprintList"] !== undefined && output["ThumbprintList"]["member"] !== undefined) {
        contents.ThumbprintList = deserializeAws_querythumbprintListType(__getArrayIfSingleItem(output["ThumbprintList"]["member"]), context);
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryGetOrganizationsAccessReportResponse = function (output, context) {
    var contents = {
        JobStatus: undefined,
        JobCreationDate: undefined,
        JobCompletionDate: undefined,
        NumberOfServicesAccessible: undefined,
        NumberOfServicesNotAccessed: undefined,
        AccessDetails: undefined,
        IsTruncated: undefined,
        Marker: undefined,
        ErrorDetails: undefined,
    };
    if (output["JobStatus"] !== undefined) {
        contents.JobStatus = output["JobStatus"];
    }
    if (output["JobCreationDate"] !== undefined) {
        contents.JobCreationDate = new Date(output["JobCreationDate"]);
    }
    if (output["JobCompletionDate"] !== undefined) {
        contents.JobCompletionDate = new Date(output["JobCompletionDate"]);
    }
    if (output["NumberOfServicesAccessible"] !== undefined) {
        contents.NumberOfServicesAccessible = parseInt(output["NumberOfServicesAccessible"]);
    }
    if (output["NumberOfServicesNotAccessed"] !== undefined) {
        contents.NumberOfServicesNotAccessed = parseInt(output["NumberOfServicesNotAccessed"]);
    }
    if (output.AccessDetails === "") {
        contents.AccessDetails = [];
    }
    if (output["AccessDetails"] !== undefined && output["AccessDetails"]["member"] !== undefined) {
        contents.AccessDetails = deserializeAws_queryAccessDetails(__getArrayIfSingleItem(output["AccessDetails"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output["ErrorDetails"] !== undefined) {
        contents.ErrorDetails = deserializeAws_queryErrorDetails(output["ErrorDetails"], context);
    }
    return contents;
};
var deserializeAws_queryGetPolicyResponse = function (output, context) {
    var contents = {
        Policy: undefined,
    };
    if (output["Policy"] !== undefined) {
        contents.Policy = deserializeAws_queryPolicy(output["Policy"], context);
    }
    return contents;
};
var deserializeAws_queryGetPolicyVersionResponse = function (output, context) {
    var contents = {
        PolicyVersion: undefined,
    };
    if (output["PolicyVersion"] !== undefined) {
        contents.PolicyVersion = deserializeAws_queryPolicyVersion(output["PolicyVersion"], context);
    }
    return contents;
};
var deserializeAws_queryGetRolePolicyResponse = function (output, context) {
    var contents = {
        RoleName: undefined,
        PolicyName: undefined,
        PolicyDocument: undefined,
    };
    if (output["RoleName"] !== undefined) {
        contents.RoleName = output["RoleName"];
    }
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["PolicyDocument"] !== undefined) {
        contents.PolicyDocument = output["PolicyDocument"];
    }
    return contents;
};
var deserializeAws_queryGetRoleResponse = function (output, context) {
    var contents = {
        Role: undefined,
    };
    if (output["Role"] !== undefined) {
        contents.Role = deserializeAws_queryRole(output["Role"], context);
    }
    return contents;
};
var deserializeAws_queryGetSAMLProviderResponse = function (output, context) {
    var contents = {
        SAMLMetadataDocument: undefined,
        CreateDate: undefined,
        ValidUntil: undefined,
        Tags: undefined,
    };
    if (output["SAMLMetadataDocument"] !== undefined) {
        contents.SAMLMetadataDocument = output["SAMLMetadataDocument"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["ValidUntil"] !== undefined) {
        contents.ValidUntil = new Date(output["ValidUntil"]);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryGetServerCertificateResponse = function (output, context) {
    var contents = {
        ServerCertificate: undefined,
    };
    if (output["ServerCertificate"] !== undefined) {
        contents.ServerCertificate = deserializeAws_queryServerCertificate(output["ServerCertificate"], context);
    }
    return contents;
};
var deserializeAws_queryGetServiceLastAccessedDetailsResponse = function (output, context) {
    var contents = {
        JobStatus: undefined,
        JobType: undefined,
        JobCreationDate: undefined,
        ServicesLastAccessed: undefined,
        JobCompletionDate: undefined,
        IsTruncated: undefined,
        Marker: undefined,
        Error: undefined,
    };
    if (output["JobStatus"] !== undefined) {
        contents.JobStatus = output["JobStatus"];
    }
    if (output["JobType"] !== undefined) {
        contents.JobType = output["JobType"];
    }
    if (output["JobCreationDate"] !== undefined) {
        contents.JobCreationDate = new Date(output["JobCreationDate"]);
    }
    if (output.ServicesLastAccessed === "") {
        contents.ServicesLastAccessed = [];
    }
    if (output["ServicesLastAccessed"] !== undefined && output["ServicesLastAccessed"]["member"] !== undefined) {
        contents.ServicesLastAccessed = deserializeAws_queryServicesLastAccessed(__getArrayIfSingleItem(output["ServicesLastAccessed"]["member"]), context);
    }
    if (output["JobCompletionDate"] !== undefined) {
        contents.JobCompletionDate = new Date(output["JobCompletionDate"]);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output["Error"] !== undefined) {
        contents.Error = deserializeAws_queryErrorDetails(output["Error"], context);
    }
    return contents;
};
var deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesResponse = function (output, context) {
    var contents = {
        JobStatus: undefined,
        JobCreationDate: undefined,
        JobCompletionDate: undefined,
        EntityDetailsList: undefined,
        IsTruncated: undefined,
        Marker: undefined,
        Error: undefined,
    };
    if (output["JobStatus"] !== undefined) {
        contents.JobStatus = output["JobStatus"];
    }
    if (output["JobCreationDate"] !== undefined) {
        contents.JobCreationDate = new Date(output["JobCreationDate"]);
    }
    if (output["JobCompletionDate"] !== undefined) {
        contents.JobCompletionDate = new Date(output["JobCompletionDate"]);
    }
    if (output.EntityDetailsList === "") {
        contents.EntityDetailsList = [];
    }
    if (output["EntityDetailsList"] !== undefined && output["EntityDetailsList"]["member"] !== undefined) {
        contents.EntityDetailsList = deserializeAws_queryentityDetailsListType(__getArrayIfSingleItem(output["EntityDetailsList"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output["Error"] !== undefined) {
        contents.Error = deserializeAws_queryErrorDetails(output["Error"], context);
    }
    return contents;
};
var deserializeAws_queryGetServiceLinkedRoleDeletionStatusResponse = function (output, context) {
    var contents = {
        Status: undefined,
        Reason: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Reason"] !== undefined) {
        contents.Reason = deserializeAws_queryDeletionTaskFailureReasonType(output["Reason"], context);
    }
    return contents;
};
var deserializeAws_queryGetSSHPublicKeyResponse = function (output, context) {
    var contents = {
        SSHPublicKey: undefined,
    };
    if (output["SSHPublicKey"] !== undefined) {
        contents.SSHPublicKey = deserializeAws_querySSHPublicKey(output["SSHPublicKey"], context);
    }
    return contents;
};
var deserializeAws_queryGetUserPolicyResponse = function (output, context) {
    var contents = {
        UserName: undefined,
        PolicyName: undefined,
        PolicyDocument: undefined,
    };
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["PolicyDocument"] !== undefined) {
        contents.PolicyDocument = output["PolicyDocument"];
    }
    return contents;
};
var deserializeAws_queryGetUserResponse = function (output, context) {
    var contents = {
        User: undefined,
    };
    if (output["User"] !== undefined) {
        contents.User = deserializeAws_queryUser(output["User"], context);
    }
    return contents;
};
var deserializeAws_queryGroup = function (output, context) {
    var contents = {
        Path: undefined,
        GroupName: undefined,
        GroupId: undefined,
        Arn: undefined,
        CreateDate: undefined,
    };
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["GroupName"] !== undefined) {
        contents.GroupName = output["GroupName"];
    }
    if (output["GroupId"] !== undefined) {
        contents.GroupId = output["GroupId"];
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    return contents;
};
var deserializeAws_queryGroupDetail = function (output, context) {
    var contents = {
        Path: undefined,
        GroupName: undefined,
        GroupId: undefined,
        Arn: undefined,
        CreateDate: undefined,
        GroupPolicyList: undefined,
        AttachedManagedPolicies: undefined,
    };
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["GroupName"] !== undefined) {
        contents.GroupName = output["GroupName"];
    }
    if (output["GroupId"] !== undefined) {
        contents.GroupId = output["GroupId"];
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output.GroupPolicyList === "") {
        contents.GroupPolicyList = [];
    }
    if (output["GroupPolicyList"] !== undefined && output["GroupPolicyList"]["member"] !== undefined) {
        contents.GroupPolicyList = deserializeAws_querypolicyDetailListType(__getArrayIfSingleItem(output["GroupPolicyList"]["member"]), context);
    }
    if (output.AttachedManagedPolicies === "") {
        contents.AttachedManagedPolicies = [];
    }
    if (output["AttachedManagedPolicies"] !== undefined && output["AttachedManagedPolicies"]["member"] !== undefined) {
        contents.AttachedManagedPolicies = deserializeAws_queryattachedPoliciesListType(__getArrayIfSingleItem(output["AttachedManagedPolicies"]["member"]), context);
    }
    return contents;
};
var deserializeAws_querygroupDetailListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryGroupDetail(entry, context);
    });
};
var deserializeAws_querygroupListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryGroup(entry, context);
    });
};
var deserializeAws_querygroupNameListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryInstanceProfile = function (output, context) {
    var contents = {
        Path: undefined,
        InstanceProfileName: undefined,
        InstanceProfileId: undefined,
        Arn: undefined,
        CreateDate: undefined,
        Roles: undefined,
        Tags: undefined,
    };
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["InstanceProfileName"] !== undefined) {
        contents.InstanceProfileName = output["InstanceProfileName"];
    }
    if (output["InstanceProfileId"] !== undefined) {
        contents.InstanceProfileId = output["InstanceProfileId"];
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output.Roles === "") {
        contents.Roles = [];
    }
    if (output["Roles"] !== undefined && output["Roles"]["member"] !== undefined) {
        contents.Roles = deserializeAws_queryroleListType(__getArrayIfSingleItem(output["Roles"]["member"]), context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryinstanceProfileListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInstanceProfile(entry, context);
    });
};
var deserializeAws_queryInvalidAuthenticationCodeException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidCertificateException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidInputException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidPublicKeyException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidUserTypeException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryKeyPairMismatchException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryLimitExceededException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryListAccessKeysResponse = function (output, context) {
    var contents = {
        AccessKeyMetadata: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.AccessKeyMetadata === "") {
        contents.AccessKeyMetadata = [];
    }
    if (output["AccessKeyMetadata"] !== undefined && output["AccessKeyMetadata"]["member"] !== undefined) {
        contents.AccessKeyMetadata = deserializeAws_queryaccessKeyMetadataListType(__getArrayIfSingleItem(output["AccessKeyMetadata"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListAccountAliasesResponse = function (output, context) {
    var contents = {
        AccountAliases: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.AccountAliases === "") {
        contents.AccountAliases = [];
    }
    if (output["AccountAliases"] !== undefined && output["AccountAliases"]["member"] !== undefined) {
        contents.AccountAliases = deserializeAws_queryaccountAliasListType(__getArrayIfSingleItem(output["AccountAliases"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListAttachedGroupPoliciesResponse = function (output, context) {
    var contents = {
        AttachedPolicies: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.AttachedPolicies === "") {
        contents.AttachedPolicies = [];
    }
    if (output["AttachedPolicies"] !== undefined && output["AttachedPolicies"]["member"] !== undefined) {
        contents.AttachedPolicies = deserializeAws_queryattachedPoliciesListType(__getArrayIfSingleItem(output["AttachedPolicies"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListAttachedRolePoliciesResponse = function (output, context) {
    var contents = {
        AttachedPolicies: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.AttachedPolicies === "") {
        contents.AttachedPolicies = [];
    }
    if (output["AttachedPolicies"] !== undefined && output["AttachedPolicies"]["member"] !== undefined) {
        contents.AttachedPolicies = deserializeAws_queryattachedPoliciesListType(__getArrayIfSingleItem(output["AttachedPolicies"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListAttachedUserPoliciesResponse = function (output, context) {
    var contents = {
        AttachedPolicies: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.AttachedPolicies === "") {
        contents.AttachedPolicies = [];
    }
    if (output["AttachedPolicies"] !== undefined && output["AttachedPolicies"]["member"] !== undefined) {
        contents.AttachedPolicies = deserializeAws_queryattachedPoliciesListType(__getArrayIfSingleItem(output["AttachedPolicies"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListEntitiesForPolicyResponse = function (output, context) {
    var contents = {
        PolicyGroups: undefined,
        PolicyUsers: undefined,
        PolicyRoles: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.PolicyGroups === "") {
        contents.PolicyGroups = [];
    }
    if (output["PolicyGroups"] !== undefined && output["PolicyGroups"]["member"] !== undefined) {
        contents.PolicyGroups = deserializeAws_queryPolicyGroupListType(__getArrayIfSingleItem(output["PolicyGroups"]["member"]), context);
    }
    if (output.PolicyUsers === "") {
        contents.PolicyUsers = [];
    }
    if (output["PolicyUsers"] !== undefined && output["PolicyUsers"]["member"] !== undefined) {
        contents.PolicyUsers = deserializeAws_queryPolicyUserListType(__getArrayIfSingleItem(output["PolicyUsers"]["member"]), context);
    }
    if (output.PolicyRoles === "") {
        contents.PolicyRoles = [];
    }
    if (output["PolicyRoles"] !== undefined && output["PolicyRoles"]["member"] !== undefined) {
        contents.PolicyRoles = deserializeAws_queryPolicyRoleListType(__getArrayIfSingleItem(output["PolicyRoles"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListGroupPoliciesResponse = function (output, context) {
    var contents = {
        PolicyNames: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
        contents.PolicyNames = deserializeAws_querypolicyNameListType(__getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListGroupsForUserResponse = function (output, context) {
    var contents = {
        Groups: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Groups === "") {
        contents.Groups = [];
    }
    if (output["Groups"] !== undefined && output["Groups"]["member"] !== undefined) {
        contents.Groups = deserializeAws_querygroupListType(__getArrayIfSingleItem(output["Groups"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListGroupsResponse = function (output, context) {
    var contents = {
        Groups: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Groups === "") {
        contents.Groups = [];
    }
    if (output["Groups"] !== undefined && output["Groups"]["member"] !== undefined) {
        contents.Groups = deserializeAws_querygroupListType(__getArrayIfSingleItem(output["Groups"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListInstanceProfilesForRoleResponse = function (output, context) {
    var contents = {
        InstanceProfiles: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.InstanceProfiles === "") {
        contents.InstanceProfiles = [];
    }
    if (output["InstanceProfiles"] !== undefined && output["InstanceProfiles"]["member"] !== undefined) {
        contents.InstanceProfiles = deserializeAws_queryinstanceProfileListType(__getArrayIfSingleItem(output["InstanceProfiles"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListInstanceProfilesResponse = function (output, context) {
    var contents = {
        InstanceProfiles: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.InstanceProfiles === "") {
        contents.InstanceProfiles = [];
    }
    if (output["InstanceProfiles"] !== undefined && output["InstanceProfiles"]["member"] !== undefined) {
        contents.InstanceProfiles = deserializeAws_queryinstanceProfileListType(__getArrayIfSingleItem(output["InstanceProfiles"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListInstanceProfileTagsResponse = function (output, context) {
    var contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListMFADevicesResponse = function (output, context) {
    var contents = {
        MFADevices: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.MFADevices === "") {
        contents.MFADevices = [];
    }
    if (output["MFADevices"] !== undefined && output["MFADevices"]["member"] !== undefined) {
        contents.MFADevices = deserializeAws_querymfaDeviceListType(__getArrayIfSingleItem(output["MFADevices"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListMFADeviceTagsResponse = function (output, context) {
    var contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListOpenIDConnectProvidersResponse = function (output, context) {
    var contents = {
        OpenIDConnectProviderList: undefined,
    };
    if (output.OpenIDConnectProviderList === "") {
        contents.OpenIDConnectProviderList = [];
    }
    if (output["OpenIDConnectProviderList"] !== undefined &&
        output["OpenIDConnectProviderList"]["member"] !== undefined) {
        contents.OpenIDConnectProviderList = deserializeAws_queryOpenIDConnectProviderListType(__getArrayIfSingleItem(output["OpenIDConnectProviderList"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryListOpenIDConnectProviderTagsResponse = function (output, context) {
    var contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListPoliciesGrantingServiceAccessEntry = function (output, context) {
    var contents = {
        ServiceNamespace: undefined,
        Policies: undefined,
    };
    if (output["ServiceNamespace"] !== undefined) {
        contents.ServiceNamespace = output["ServiceNamespace"];
    }
    if (output.Policies === "") {
        contents.Policies = [];
    }
    if (output["Policies"] !== undefined && output["Policies"]["member"] !== undefined) {
        contents.Policies = deserializeAws_querypolicyGrantingServiceAccessListType(__getArrayIfSingleItem(output["Policies"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryListPoliciesGrantingServiceAccessResponse = function (output, context) {
    var contents = {
        PoliciesGrantingServiceAccess: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.PoliciesGrantingServiceAccess === "") {
        contents.PoliciesGrantingServiceAccess = [];
    }
    if (output["PoliciesGrantingServiceAccess"] !== undefined &&
        output["PoliciesGrantingServiceAccess"]["member"] !== undefined) {
        contents.PoliciesGrantingServiceAccess = deserializeAws_querylistPolicyGrantingServiceAccessResponseListType(__getArrayIfSingleItem(output["PoliciesGrantingServiceAccess"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListPoliciesResponse = function (output, context) {
    var contents = {
        Policies: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Policies === "") {
        contents.Policies = [];
    }
    if (output["Policies"] !== undefined && output["Policies"]["member"] !== undefined) {
        contents.Policies = deserializeAws_querypolicyListType(__getArrayIfSingleItem(output["Policies"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_querylistPolicyGrantingServiceAccessResponseListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryListPoliciesGrantingServiceAccessEntry(entry, context);
    });
};
var deserializeAws_queryListPolicyTagsResponse = function (output, context) {
    var contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListPolicyVersionsResponse = function (output, context) {
    var contents = {
        Versions: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Versions === "") {
        contents.Versions = [];
    }
    if (output["Versions"] !== undefined && output["Versions"]["member"] !== undefined) {
        contents.Versions = deserializeAws_querypolicyDocumentVersionListType(__getArrayIfSingleItem(output["Versions"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListRolePoliciesResponse = function (output, context) {
    var contents = {
        PolicyNames: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
        contents.PolicyNames = deserializeAws_querypolicyNameListType(__getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListRolesResponse = function (output, context) {
    var contents = {
        Roles: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Roles === "") {
        contents.Roles = [];
    }
    if (output["Roles"] !== undefined && output["Roles"]["member"] !== undefined) {
        contents.Roles = deserializeAws_queryroleListType(__getArrayIfSingleItem(output["Roles"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListRoleTagsResponse = function (output, context) {
    var contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListSAMLProvidersResponse = function (output, context) {
    var contents = {
        SAMLProviderList: undefined,
    };
    if (output.SAMLProviderList === "") {
        contents.SAMLProviderList = [];
    }
    if (output["SAMLProviderList"] !== undefined && output["SAMLProviderList"]["member"] !== undefined) {
        contents.SAMLProviderList = deserializeAws_querySAMLProviderListType(__getArrayIfSingleItem(output["SAMLProviderList"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryListSAMLProviderTagsResponse = function (output, context) {
    var contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListServerCertificatesResponse = function (output, context) {
    var contents = {
        ServerCertificateMetadataList: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.ServerCertificateMetadataList === "") {
        contents.ServerCertificateMetadataList = [];
    }
    if (output["ServerCertificateMetadataList"] !== undefined &&
        output["ServerCertificateMetadataList"]["member"] !== undefined) {
        contents.ServerCertificateMetadataList = deserializeAws_queryserverCertificateMetadataListType(__getArrayIfSingleItem(output["ServerCertificateMetadataList"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListServerCertificateTagsResponse = function (output, context) {
    var contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListServiceSpecificCredentialsResponse = function (output, context) {
    var contents = {
        ServiceSpecificCredentials: undefined,
    };
    if (output.ServiceSpecificCredentials === "") {
        contents.ServiceSpecificCredentials = [];
    }
    if (output["ServiceSpecificCredentials"] !== undefined &&
        output["ServiceSpecificCredentials"]["member"] !== undefined) {
        contents.ServiceSpecificCredentials = deserializeAws_queryServiceSpecificCredentialsListType(__getArrayIfSingleItem(output["ServiceSpecificCredentials"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryListSigningCertificatesResponse = function (output, context) {
    var contents = {
        Certificates: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Certificates === "") {
        contents.Certificates = [];
    }
    if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
        contents.Certificates = deserializeAws_querycertificateListType(__getArrayIfSingleItem(output["Certificates"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListSSHPublicKeysResponse = function (output, context) {
    var contents = {
        SSHPublicKeys: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.SSHPublicKeys === "") {
        contents.SSHPublicKeys = [];
    }
    if (output["SSHPublicKeys"] !== undefined && output["SSHPublicKeys"]["member"] !== undefined) {
        contents.SSHPublicKeys = deserializeAws_querySSHPublicKeyListType(__getArrayIfSingleItem(output["SSHPublicKeys"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListUserPoliciesResponse = function (output, context) {
    var contents = {
        PolicyNames: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
        contents.PolicyNames = deserializeAws_querypolicyNameListType(__getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListUsersResponse = function (output, context) {
    var contents = {
        Users: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Users === "") {
        contents.Users = [];
    }
    if (output["Users"] !== undefined && output["Users"]["member"] !== undefined) {
        contents.Users = deserializeAws_queryuserListType(__getArrayIfSingleItem(output["Users"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListUserTagsResponse = function (output, context) {
    var contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryListVirtualMFADevicesResponse = function (output, context) {
    var contents = {
        VirtualMFADevices: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.VirtualMFADevices === "") {
        contents.VirtualMFADevices = [];
    }
    if (output["VirtualMFADevices"] !== undefined && output["VirtualMFADevices"]["member"] !== undefined) {
        contents.VirtualMFADevices = deserializeAws_queryvirtualMFADeviceListType(__getArrayIfSingleItem(output["VirtualMFADevices"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryLoginProfile = function (output, context) {
    var contents = {
        UserName: undefined,
        CreateDate: undefined,
        PasswordResetRequired: undefined,
    };
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["PasswordResetRequired"] !== undefined) {
        contents.PasswordResetRequired = output["PasswordResetRequired"] == "true";
    }
    return contents;
};
var deserializeAws_queryMalformedCertificateException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryMalformedPolicyDocumentException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryManagedPolicyDetail = function (output, context) {
    var contents = {
        PolicyName: undefined,
        PolicyId: undefined,
        Arn: undefined,
        Path: undefined,
        DefaultVersionId: undefined,
        AttachmentCount: undefined,
        PermissionsBoundaryUsageCount: undefined,
        IsAttachable: undefined,
        Description: undefined,
        CreateDate: undefined,
        UpdateDate: undefined,
        PolicyVersionList: undefined,
    };
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["PolicyId"] !== undefined) {
        contents.PolicyId = output["PolicyId"];
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["DefaultVersionId"] !== undefined) {
        contents.DefaultVersionId = output["DefaultVersionId"];
    }
    if (output["AttachmentCount"] !== undefined) {
        contents.AttachmentCount = parseInt(output["AttachmentCount"]);
    }
    if (output["PermissionsBoundaryUsageCount"] !== undefined) {
        contents.PermissionsBoundaryUsageCount = parseInt(output["PermissionsBoundaryUsageCount"]);
    }
    if (output["IsAttachable"] !== undefined) {
        contents.IsAttachable = output["IsAttachable"] == "true";
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["UpdateDate"] !== undefined) {
        contents.UpdateDate = new Date(output["UpdateDate"]);
    }
    if (output.PolicyVersionList === "") {
        contents.PolicyVersionList = [];
    }
    if (output["PolicyVersionList"] !== undefined && output["PolicyVersionList"]["member"] !== undefined) {
        contents.PolicyVersionList = deserializeAws_querypolicyDocumentVersionListType(__getArrayIfSingleItem(output["PolicyVersionList"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryManagedPolicyDetailListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryManagedPolicyDetail(entry, context);
    });
};
var deserializeAws_queryMFADevice = function (output, context) {
    var contents = {
        UserName: undefined,
        SerialNumber: undefined,
        EnableDate: undefined,
    };
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["SerialNumber"] !== undefined) {
        contents.SerialNumber = output["SerialNumber"];
    }
    if (output["EnableDate"] !== undefined) {
        contents.EnableDate = new Date(output["EnableDate"]);
    }
    return contents;
};
var deserializeAws_querymfaDeviceListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMFADevice(entry, context);
    });
};
var deserializeAws_queryNoSuchEntityException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryOpenIDConnectProviderListEntry = function (output, context) {
    var contents = {
        Arn: undefined,
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    return contents;
};
var deserializeAws_queryOpenIDConnectProviderListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryOpenIDConnectProviderListEntry(entry, context);
    });
};
var deserializeAws_queryOrganizationsDecisionDetail = function (output, context) {
    var contents = {
        AllowedByOrganizations: undefined,
    };
    if (output["AllowedByOrganizations"] !== undefined) {
        contents.AllowedByOrganizations = output["AllowedByOrganizations"] == "true";
    }
    return contents;
};
var deserializeAws_queryPasswordPolicy = function (output, context) {
    var contents = {
        MinimumPasswordLength: undefined,
        RequireSymbols: undefined,
        RequireNumbers: undefined,
        RequireUppercaseCharacters: undefined,
        RequireLowercaseCharacters: undefined,
        AllowUsersToChangePassword: undefined,
        ExpirePasswords: undefined,
        MaxPasswordAge: undefined,
        PasswordReusePrevention: undefined,
        HardExpiry: undefined,
    };
    if (output["MinimumPasswordLength"] !== undefined) {
        contents.MinimumPasswordLength = parseInt(output["MinimumPasswordLength"]);
    }
    if (output["RequireSymbols"] !== undefined) {
        contents.RequireSymbols = output["RequireSymbols"] == "true";
    }
    if (output["RequireNumbers"] !== undefined) {
        contents.RequireNumbers = output["RequireNumbers"] == "true";
    }
    if (output["RequireUppercaseCharacters"] !== undefined) {
        contents.RequireUppercaseCharacters = output["RequireUppercaseCharacters"] == "true";
    }
    if (output["RequireLowercaseCharacters"] !== undefined) {
        contents.RequireLowercaseCharacters = output["RequireLowercaseCharacters"] == "true";
    }
    if (output["AllowUsersToChangePassword"] !== undefined) {
        contents.AllowUsersToChangePassword = output["AllowUsersToChangePassword"] == "true";
    }
    if (output["ExpirePasswords"] !== undefined) {
        contents.ExpirePasswords = output["ExpirePasswords"] == "true";
    }
    if (output["MaxPasswordAge"] !== undefined) {
        contents.MaxPasswordAge = parseInt(output["MaxPasswordAge"]);
    }
    if (output["PasswordReusePrevention"] !== undefined) {
        contents.PasswordReusePrevention = parseInt(output["PasswordReusePrevention"]);
    }
    if (output["HardExpiry"] !== undefined) {
        contents.HardExpiry = output["HardExpiry"] == "true";
    }
    return contents;
};
var deserializeAws_queryPasswordPolicyViolationException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryPermissionsBoundaryDecisionDetail = function (output, context) {
    var contents = {
        AllowedByPermissionsBoundary: undefined,
    };
    if (output["AllowedByPermissionsBoundary"] !== undefined) {
        contents.AllowedByPermissionsBoundary = output["AllowedByPermissionsBoundary"] == "true";
    }
    return contents;
};
var deserializeAws_queryPolicy = function (output, context) {
    var contents = {
        PolicyName: undefined,
        PolicyId: undefined,
        Arn: undefined,
        Path: undefined,
        DefaultVersionId: undefined,
        AttachmentCount: undefined,
        PermissionsBoundaryUsageCount: undefined,
        IsAttachable: undefined,
        Description: undefined,
        CreateDate: undefined,
        UpdateDate: undefined,
        Tags: undefined,
    };
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["PolicyId"] !== undefined) {
        contents.PolicyId = output["PolicyId"];
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["DefaultVersionId"] !== undefined) {
        contents.DefaultVersionId = output["DefaultVersionId"];
    }
    if (output["AttachmentCount"] !== undefined) {
        contents.AttachmentCount = parseInt(output["AttachmentCount"]);
    }
    if (output["PermissionsBoundaryUsageCount"] !== undefined) {
        contents.PermissionsBoundaryUsageCount = parseInt(output["PermissionsBoundaryUsageCount"]);
    }
    if (output["IsAttachable"] !== undefined) {
        contents.IsAttachable = output["IsAttachable"] == "true";
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["UpdateDate"] !== undefined) {
        contents.UpdateDate = new Date(output["UpdateDate"]);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryPolicyDetail = function (output, context) {
    var contents = {
        PolicyName: undefined,
        PolicyDocument: undefined,
    };
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["PolicyDocument"] !== undefined) {
        contents.PolicyDocument = output["PolicyDocument"];
    }
    return contents;
};
var deserializeAws_querypolicyDetailListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyDetail(entry, context);
    });
};
var deserializeAws_querypolicyDocumentVersionListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyVersion(entry, context);
    });
};
var deserializeAws_queryPolicyEvaluationException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryPolicyGrantingServiceAccess = function (output, context) {
    var contents = {
        PolicyName: undefined,
        PolicyType: undefined,
        PolicyArn: undefined,
        EntityType: undefined,
        EntityName: undefined,
    };
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["PolicyType"] !== undefined) {
        contents.PolicyType = output["PolicyType"];
    }
    if (output["PolicyArn"] !== undefined) {
        contents.PolicyArn = output["PolicyArn"];
    }
    if (output["EntityType"] !== undefined) {
        contents.EntityType = output["EntityType"];
    }
    if (output["EntityName"] !== undefined) {
        contents.EntityName = output["EntityName"];
    }
    return contents;
};
var deserializeAws_querypolicyGrantingServiceAccessListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyGrantingServiceAccess(entry, context);
    });
};
var deserializeAws_queryPolicyGroup = function (output, context) {
    var contents = {
        GroupName: undefined,
        GroupId: undefined,
    };
    if (output["GroupName"] !== undefined) {
        contents.GroupName = output["GroupName"];
    }
    if (output["GroupId"] !== undefined) {
        contents.GroupId = output["GroupId"];
    }
    return contents;
};
var deserializeAws_queryPolicyGroupListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyGroup(entry, context);
    });
};
var deserializeAws_querypolicyListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicy(entry, context);
    });
};
var deserializeAws_querypolicyNameListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryPolicyNotAttachableException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryPolicyRole = function (output, context) {
    var contents = {
        RoleName: undefined,
        RoleId: undefined,
    };
    if (output["RoleName"] !== undefined) {
        contents.RoleName = output["RoleName"];
    }
    if (output["RoleId"] !== undefined) {
        contents.RoleId = output["RoleId"];
    }
    return contents;
};
var deserializeAws_queryPolicyRoleListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyRole(entry, context);
    });
};
var deserializeAws_queryPolicyUser = function (output, context) {
    var contents = {
        UserName: undefined,
        UserId: undefined,
    };
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["UserId"] !== undefined) {
        contents.UserId = output["UserId"];
    }
    return contents;
};
var deserializeAws_queryPolicyUserListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyUser(entry, context);
    });
};
var deserializeAws_queryPolicyVersion = function (output, context) {
    var contents = {
        Document: undefined,
        VersionId: undefined,
        IsDefaultVersion: undefined,
        CreateDate: undefined,
    };
    if (output["Document"] !== undefined) {
        contents.Document = output["Document"];
    }
    if (output["VersionId"] !== undefined) {
        contents.VersionId = output["VersionId"];
    }
    if (output["IsDefaultVersion"] !== undefined) {
        contents.IsDefaultVersion = output["IsDefaultVersion"] == "true";
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    return contents;
};
var deserializeAws_queryPosition = function (output, context) {
    var contents = {
        Line: undefined,
        Column: undefined,
    };
    if (output["Line"] !== undefined) {
        contents.Line = parseInt(output["Line"]);
    }
    if (output["Column"] !== undefined) {
        contents.Column = parseInt(output["Column"]);
    }
    return contents;
};
var deserializeAws_queryReportGenerationLimitExceededException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryResetServiceSpecificCredentialResponse = function (output, context) {
    var contents = {
        ServiceSpecificCredential: undefined,
    };
    if (output["ServiceSpecificCredential"] !== undefined) {
        contents.ServiceSpecificCredential = deserializeAws_queryServiceSpecificCredential(output["ServiceSpecificCredential"], context);
    }
    return contents;
};
var deserializeAws_queryResourceSpecificResult = function (output, context) {
    var contents = {
        EvalResourceName: undefined,
        EvalResourceDecision: undefined,
        MatchedStatements: undefined,
        MissingContextValues: undefined,
        EvalDecisionDetails: undefined,
        PermissionsBoundaryDecisionDetail: undefined,
    };
    if (output["EvalResourceName"] !== undefined) {
        contents.EvalResourceName = output["EvalResourceName"];
    }
    if (output["EvalResourceDecision"] !== undefined) {
        contents.EvalResourceDecision = output["EvalResourceDecision"];
    }
    if (output.MatchedStatements === "") {
        contents.MatchedStatements = [];
    }
    if (output["MatchedStatements"] !== undefined && output["MatchedStatements"]["member"] !== undefined) {
        contents.MatchedStatements = deserializeAws_queryStatementListType(__getArrayIfSingleItem(output["MatchedStatements"]["member"]), context);
    }
    if (output.MissingContextValues === "") {
        contents.MissingContextValues = [];
    }
    if (output["MissingContextValues"] !== undefined && output["MissingContextValues"]["member"] !== undefined) {
        contents.MissingContextValues = deserializeAws_queryContextKeyNamesResultListType(__getArrayIfSingleItem(output["MissingContextValues"]["member"]), context);
    }
    if (output.EvalDecisionDetails === "") {
        contents.EvalDecisionDetails = {};
    }
    if (output["EvalDecisionDetails"] !== undefined && output["EvalDecisionDetails"]["entry"] !== undefined) {
        contents.EvalDecisionDetails = deserializeAws_queryEvalDecisionDetailsType(__getArrayIfSingleItem(output["EvalDecisionDetails"]["entry"]), context);
    }
    if (output["PermissionsBoundaryDecisionDetail"] !== undefined) {
        contents.PermissionsBoundaryDecisionDetail = deserializeAws_queryPermissionsBoundaryDecisionDetail(output["PermissionsBoundaryDecisionDetail"], context);
    }
    return contents;
};
var deserializeAws_queryResourceSpecificResultListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryResourceSpecificResult(entry, context);
    });
};
var deserializeAws_queryRole = function (output, context) {
    var contents = {
        Path: undefined,
        RoleName: undefined,
        RoleId: undefined,
        Arn: undefined,
        CreateDate: undefined,
        AssumeRolePolicyDocument: undefined,
        Description: undefined,
        MaxSessionDuration: undefined,
        PermissionsBoundary: undefined,
        Tags: undefined,
        RoleLastUsed: undefined,
    };
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["RoleName"] !== undefined) {
        contents.RoleName = output["RoleName"];
    }
    if (output["RoleId"] !== undefined) {
        contents.RoleId = output["RoleId"];
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["AssumeRolePolicyDocument"] !== undefined) {
        contents.AssumeRolePolicyDocument = output["AssumeRolePolicyDocument"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["MaxSessionDuration"] !== undefined) {
        contents.MaxSessionDuration = parseInt(output["MaxSessionDuration"]);
    }
    if (output["PermissionsBoundary"] !== undefined) {
        contents.PermissionsBoundary = deserializeAws_queryAttachedPermissionsBoundary(output["PermissionsBoundary"], context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["RoleLastUsed"] !== undefined) {
        contents.RoleLastUsed = deserializeAws_queryRoleLastUsed(output["RoleLastUsed"], context);
    }
    return contents;
};
var deserializeAws_queryRoleDetail = function (output, context) {
    var contents = {
        Path: undefined,
        RoleName: undefined,
        RoleId: undefined,
        Arn: undefined,
        CreateDate: undefined,
        AssumeRolePolicyDocument: undefined,
        InstanceProfileList: undefined,
        RolePolicyList: undefined,
        AttachedManagedPolicies: undefined,
        PermissionsBoundary: undefined,
        Tags: undefined,
        RoleLastUsed: undefined,
    };
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["RoleName"] !== undefined) {
        contents.RoleName = output["RoleName"];
    }
    if (output["RoleId"] !== undefined) {
        contents.RoleId = output["RoleId"];
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["AssumeRolePolicyDocument"] !== undefined) {
        contents.AssumeRolePolicyDocument = output["AssumeRolePolicyDocument"];
    }
    if (output.InstanceProfileList === "") {
        contents.InstanceProfileList = [];
    }
    if (output["InstanceProfileList"] !== undefined && output["InstanceProfileList"]["member"] !== undefined) {
        contents.InstanceProfileList = deserializeAws_queryinstanceProfileListType(__getArrayIfSingleItem(output["InstanceProfileList"]["member"]), context);
    }
    if (output.RolePolicyList === "") {
        contents.RolePolicyList = [];
    }
    if (output["RolePolicyList"] !== undefined && output["RolePolicyList"]["member"] !== undefined) {
        contents.RolePolicyList = deserializeAws_querypolicyDetailListType(__getArrayIfSingleItem(output["RolePolicyList"]["member"]), context);
    }
    if (output.AttachedManagedPolicies === "") {
        contents.AttachedManagedPolicies = [];
    }
    if (output["AttachedManagedPolicies"] !== undefined && output["AttachedManagedPolicies"]["member"] !== undefined) {
        contents.AttachedManagedPolicies = deserializeAws_queryattachedPoliciesListType(__getArrayIfSingleItem(output["AttachedManagedPolicies"]["member"]), context);
    }
    if (output["PermissionsBoundary"] !== undefined) {
        contents.PermissionsBoundary = deserializeAws_queryAttachedPermissionsBoundary(output["PermissionsBoundary"], context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["RoleLastUsed"] !== undefined) {
        contents.RoleLastUsed = deserializeAws_queryRoleLastUsed(output["RoleLastUsed"], context);
    }
    return contents;
};
var deserializeAws_queryroleDetailListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRoleDetail(entry, context);
    });
};
var deserializeAws_queryRoleLastUsed = function (output, context) {
    var contents = {
        LastUsedDate: undefined,
        Region: undefined,
    };
    if (output["LastUsedDate"] !== undefined) {
        contents.LastUsedDate = new Date(output["LastUsedDate"]);
    }
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    return contents;
};
var deserializeAws_queryroleListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRole(entry, context);
    });
};
var deserializeAws_queryRoleUsageListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRoleUsageType(entry, context);
    });
};
var deserializeAws_queryRoleUsageType = function (output, context) {
    var contents = {
        Region: undefined,
        Resources: undefined,
    };
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    if (output.Resources === "") {
        contents.Resources = [];
    }
    if (output["Resources"] !== undefined && output["Resources"]["member"] !== undefined) {
        contents.Resources = deserializeAws_queryArnListType(__getArrayIfSingleItem(output["Resources"]["member"]), context);
    }
    return contents;
};
var deserializeAws_querySAMLProviderListEntry = function (output, context) {
    var contents = {
        Arn: undefined,
        ValidUntil: undefined,
        CreateDate: undefined,
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["ValidUntil"] !== undefined) {
        contents.ValidUntil = new Date(output["ValidUntil"]);
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    return contents;
};
var deserializeAws_querySAMLProviderListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySAMLProviderListEntry(entry, context);
    });
};
var deserializeAws_queryServerCertificate = function (output, context) {
    var contents = {
        ServerCertificateMetadata: undefined,
        CertificateBody: undefined,
        CertificateChain: undefined,
        Tags: undefined,
    };
    if (output["ServerCertificateMetadata"] !== undefined) {
        contents.ServerCertificateMetadata = deserializeAws_queryServerCertificateMetadata(output["ServerCertificateMetadata"], context);
    }
    if (output["CertificateBody"] !== undefined) {
        contents.CertificateBody = output["CertificateBody"];
    }
    if (output["CertificateChain"] !== undefined) {
        contents.CertificateChain = output["CertificateChain"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryServerCertificateMetadata = function (output, context) {
    var contents = {
        Path: undefined,
        ServerCertificateName: undefined,
        ServerCertificateId: undefined,
        Arn: undefined,
        UploadDate: undefined,
        Expiration: undefined,
    };
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["ServerCertificateName"] !== undefined) {
        contents.ServerCertificateName = output["ServerCertificateName"];
    }
    if (output["ServerCertificateId"] !== undefined) {
        contents.ServerCertificateId = output["ServerCertificateId"];
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["UploadDate"] !== undefined) {
        contents.UploadDate = new Date(output["UploadDate"]);
    }
    if (output["Expiration"] !== undefined) {
        contents.Expiration = new Date(output["Expiration"]);
    }
    return contents;
};
var deserializeAws_queryserverCertificateMetadataListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryServerCertificateMetadata(entry, context);
    });
};
var deserializeAws_queryServiceFailureException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryServiceLastAccessed = function (output, context) {
    var contents = {
        ServiceName: undefined,
        LastAuthenticated: undefined,
        ServiceNamespace: undefined,
        LastAuthenticatedEntity: undefined,
        LastAuthenticatedRegion: undefined,
        TotalAuthenticatedEntities: undefined,
        TrackedActionsLastAccessed: undefined,
    };
    if (output["ServiceName"] !== undefined) {
        contents.ServiceName = output["ServiceName"];
    }
    if (output["LastAuthenticated"] !== undefined) {
        contents.LastAuthenticated = new Date(output["LastAuthenticated"]);
    }
    if (output["ServiceNamespace"] !== undefined) {
        contents.ServiceNamespace = output["ServiceNamespace"];
    }
    if (output["LastAuthenticatedEntity"] !== undefined) {
        contents.LastAuthenticatedEntity = output["LastAuthenticatedEntity"];
    }
    if (output["LastAuthenticatedRegion"] !== undefined) {
        contents.LastAuthenticatedRegion = output["LastAuthenticatedRegion"];
    }
    if (output["TotalAuthenticatedEntities"] !== undefined) {
        contents.TotalAuthenticatedEntities = parseInt(output["TotalAuthenticatedEntities"]);
    }
    if (output.TrackedActionsLastAccessed === "") {
        contents.TrackedActionsLastAccessed = [];
    }
    if (output["TrackedActionsLastAccessed"] !== undefined &&
        output["TrackedActionsLastAccessed"]["member"] !== undefined) {
        contents.TrackedActionsLastAccessed = deserializeAws_queryTrackedActionsLastAccessed(__getArrayIfSingleItem(output["TrackedActionsLastAccessed"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryServiceNotSupportedException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryServicesLastAccessed = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryServiceLastAccessed(entry, context);
    });
};
var deserializeAws_queryServiceSpecificCredential = function (output, context) {
    var contents = {
        CreateDate: undefined,
        ServiceName: undefined,
        ServiceUserName: undefined,
        ServicePassword: undefined,
        ServiceSpecificCredentialId: undefined,
        UserName: undefined,
        Status: undefined,
    };
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["ServiceName"] !== undefined) {
        contents.ServiceName = output["ServiceName"];
    }
    if (output["ServiceUserName"] !== undefined) {
        contents.ServiceUserName = output["ServiceUserName"];
    }
    if (output["ServicePassword"] !== undefined) {
        contents.ServicePassword = output["ServicePassword"];
    }
    if (output["ServiceSpecificCredentialId"] !== undefined) {
        contents.ServiceSpecificCredentialId = output["ServiceSpecificCredentialId"];
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
var deserializeAws_queryServiceSpecificCredentialMetadata = function (output, context) {
    var contents = {
        UserName: undefined,
        Status: undefined,
        ServiceUserName: undefined,
        CreateDate: undefined,
        ServiceSpecificCredentialId: undefined,
        ServiceName: undefined,
    };
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["ServiceUserName"] !== undefined) {
        contents.ServiceUserName = output["ServiceUserName"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["ServiceSpecificCredentialId"] !== undefined) {
        contents.ServiceSpecificCredentialId = output["ServiceSpecificCredentialId"];
    }
    if (output["ServiceName"] !== undefined) {
        contents.ServiceName = output["ServiceName"];
    }
    return contents;
};
var deserializeAws_queryServiceSpecificCredentialsListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryServiceSpecificCredentialMetadata(entry, context);
    });
};
var deserializeAws_querySigningCertificate = function (output, context) {
    var contents = {
        UserName: undefined,
        CertificateId: undefined,
        CertificateBody: undefined,
        Status: undefined,
        UploadDate: undefined,
    };
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["CertificateId"] !== undefined) {
        contents.CertificateId = output["CertificateId"];
    }
    if (output["CertificateBody"] !== undefined) {
        contents.CertificateBody = output["CertificateBody"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["UploadDate"] !== undefined) {
        contents.UploadDate = new Date(output["UploadDate"]);
    }
    return contents;
};
var deserializeAws_querySimulatePolicyResponse = function (output, context) {
    var contents = {
        EvaluationResults: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.EvaluationResults === "") {
        contents.EvaluationResults = [];
    }
    if (output["EvaluationResults"] !== undefined && output["EvaluationResults"]["member"] !== undefined) {
        contents.EvaluationResults = deserializeAws_queryEvaluationResultsListType(__getArrayIfSingleItem(output["EvaluationResults"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_querySSHPublicKey = function (output, context) {
    var contents = {
        UserName: undefined,
        SSHPublicKeyId: undefined,
        Fingerprint: undefined,
        SSHPublicKeyBody: undefined,
        Status: undefined,
        UploadDate: undefined,
    };
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["SSHPublicKeyId"] !== undefined) {
        contents.SSHPublicKeyId = output["SSHPublicKeyId"];
    }
    if (output["Fingerprint"] !== undefined) {
        contents.Fingerprint = output["Fingerprint"];
    }
    if (output["SSHPublicKeyBody"] !== undefined) {
        contents.SSHPublicKeyBody = output["SSHPublicKeyBody"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["UploadDate"] !== undefined) {
        contents.UploadDate = new Date(output["UploadDate"]);
    }
    return contents;
};
var deserializeAws_querySSHPublicKeyListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySSHPublicKeyMetadata(entry, context);
    });
};
var deserializeAws_querySSHPublicKeyMetadata = function (output, context) {
    var contents = {
        UserName: undefined,
        SSHPublicKeyId: undefined,
        Status: undefined,
        UploadDate: undefined,
    };
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["SSHPublicKeyId"] !== undefined) {
        contents.SSHPublicKeyId = output["SSHPublicKeyId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["UploadDate"] !== undefined) {
        contents.UploadDate = new Date(output["UploadDate"]);
    }
    return contents;
};
var deserializeAws_queryStatement = function (output, context) {
    var contents = {
        SourcePolicyId: undefined,
        SourcePolicyType: undefined,
        StartPosition: undefined,
        EndPosition: undefined,
    };
    if (output["SourcePolicyId"] !== undefined) {
        contents.SourcePolicyId = output["SourcePolicyId"];
    }
    if (output["SourcePolicyType"] !== undefined) {
        contents.SourcePolicyType = output["SourcePolicyType"];
    }
    if (output["StartPosition"] !== undefined) {
        contents.StartPosition = deserializeAws_queryPosition(output["StartPosition"], context);
    }
    if (output["EndPosition"] !== undefined) {
        contents.EndPosition = deserializeAws_queryPosition(output["EndPosition"], context);
    }
    return contents;
};
var deserializeAws_queryStatementListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryStatement(entry, context);
    });
};
var deserializeAws_querysummaryMapType = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["key"]] = parseInt(pair["value"]), _a));
    }, {});
};
var deserializeAws_queryTag = function (output, context) {
    var contents = {
        Key: undefined,
        Value: undefined,
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
var deserializeAws_querytagListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTag(entry, context);
    });
};
var deserializeAws_querythumbprintListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryTrackedActionLastAccessed = function (output, context) {
    var contents = {
        ActionName: undefined,
        LastAccessedEntity: undefined,
        LastAccessedTime: undefined,
        LastAccessedRegion: undefined,
    };
    if (output["ActionName"] !== undefined) {
        contents.ActionName = output["ActionName"];
    }
    if (output["LastAccessedEntity"] !== undefined) {
        contents.LastAccessedEntity = output["LastAccessedEntity"];
    }
    if (output["LastAccessedTime"] !== undefined) {
        contents.LastAccessedTime = new Date(output["LastAccessedTime"]);
    }
    if (output["LastAccessedRegion"] !== undefined) {
        contents.LastAccessedRegion = output["LastAccessedRegion"];
    }
    return contents;
};
var deserializeAws_queryTrackedActionsLastAccessed = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTrackedActionLastAccessed(entry, context);
    });
};
var deserializeAws_queryUnmodifiableEntityException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryUnrecognizedPublicKeyEncodingException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryUpdateRoleDescriptionResponse = function (output, context) {
    var contents = {
        Role: undefined,
    };
    if (output["Role"] !== undefined) {
        contents.Role = deserializeAws_queryRole(output["Role"], context);
    }
    return contents;
};
var deserializeAws_queryUpdateRoleResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryUpdateSAMLProviderResponse = function (output, context) {
    var contents = {
        SAMLProviderArn: undefined,
    };
    if (output["SAMLProviderArn"] !== undefined) {
        contents.SAMLProviderArn = output["SAMLProviderArn"];
    }
    return contents;
};
var deserializeAws_queryUploadServerCertificateResponse = function (output, context) {
    var contents = {
        ServerCertificateMetadata: undefined,
        Tags: undefined,
    };
    if (output["ServerCertificateMetadata"] !== undefined) {
        contents.ServerCertificateMetadata = deserializeAws_queryServerCertificateMetadata(output["ServerCertificateMetadata"], context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryUploadSigningCertificateResponse = function (output, context) {
    var contents = {
        Certificate: undefined,
    };
    if (output["Certificate"] !== undefined) {
        contents.Certificate = deserializeAws_querySigningCertificate(output["Certificate"], context);
    }
    return contents;
};
var deserializeAws_queryUploadSSHPublicKeyResponse = function (output, context) {
    var contents = {
        SSHPublicKey: undefined,
    };
    if (output["SSHPublicKey"] !== undefined) {
        contents.SSHPublicKey = deserializeAws_querySSHPublicKey(output["SSHPublicKey"], context);
    }
    return contents;
};
var deserializeAws_queryUser = function (output, context) {
    var contents = {
        Path: undefined,
        UserName: undefined,
        UserId: undefined,
        Arn: undefined,
        CreateDate: undefined,
        PasswordLastUsed: undefined,
        PermissionsBoundary: undefined,
        Tags: undefined,
    };
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["UserId"] !== undefined) {
        contents.UserId = output["UserId"];
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["PasswordLastUsed"] !== undefined) {
        contents.PasswordLastUsed = new Date(output["PasswordLastUsed"]);
    }
    if (output["PermissionsBoundary"] !== undefined) {
        contents.PermissionsBoundary = deserializeAws_queryAttachedPermissionsBoundary(output["PermissionsBoundary"], context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryUserDetail = function (output, context) {
    var contents = {
        Path: undefined,
        UserName: undefined,
        UserId: undefined,
        Arn: undefined,
        CreateDate: undefined,
        UserPolicyList: undefined,
        GroupList: undefined,
        AttachedManagedPolicies: undefined,
        PermissionsBoundary: undefined,
        Tags: undefined,
    };
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["UserId"] !== undefined) {
        contents.UserId = output["UserId"];
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output.UserPolicyList === "") {
        contents.UserPolicyList = [];
    }
    if (output["UserPolicyList"] !== undefined && output["UserPolicyList"]["member"] !== undefined) {
        contents.UserPolicyList = deserializeAws_querypolicyDetailListType(__getArrayIfSingleItem(output["UserPolicyList"]["member"]), context);
    }
    if (output.GroupList === "") {
        contents.GroupList = [];
    }
    if (output["GroupList"] !== undefined && output["GroupList"]["member"] !== undefined) {
        contents.GroupList = deserializeAws_querygroupNameListType(__getArrayIfSingleItem(output["GroupList"]["member"]), context);
    }
    if (output.AttachedManagedPolicies === "") {
        contents.AttachedManagedPolicies = [];
    }
    if (output["AttachedManagedPolicies"] !== undefined && output["AttachedManagedPolicies"]["member"] !== undefined) {
        contents.AttachedManagedPolicies = deserializeAws_queryattachedPoliciesListType(__getArrayIfSingleItem(output["AttachedManagedPolicies"]["member"]), context);
    }
    if (output["PermissionsBoundary"] !== undefined) {
        contents.PermissionsBoundary = deserializeAws_queryAttachedPermissionsBoundary(output["PermissionsBoundary"], context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryuserDetailListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUserDetail(entry, context);
    });
};
var deserializeAws_queryuserListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUser(entry, context);
    });
};
var deserializeAws_queryVirtualMFADevice = function (output, context) {
    var contents = {
        SerialNumber: undefined,
        Base32StringSeed: undefined,
        QRCodePNG: undefined,
        User: undefined,
        EnableDate: undefined,
        Tags: undefined,
    };
    if (output["SerialNumber"] !== undefined) {
        contents.SerialNumber = output["SerialNumber"];
    }
    if (output["Base32StringSeed"] !== undefined) {
        contents.Base32StringSeed = context.base64Decoder(output["Base32StringSeed"]);
    }
    if (output["QRCodePNG"] !== undefined) {
        contents.QRCodePNG = context.base64Decoder(output["QRCodePNG"]);
    }
    if (output["User"] !== undefined) {
        contents.User = deserializeAws_queryUser(output["User"], context);
    }
    if (output["EnableDate"] !== undefined) {
        contents.EnableDate = new Date(output["EnableDate"]);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryvirtualMFADeviceListType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryVirtualMFADevice(entry, context);
    });
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
            var parsedObj = xmlParse(encoded, {
                attributeNamePrefix: "",
                ignoreAttributes: false,
                parseNodeValue: false,
                trimValues: false,
                tagValueProcessor: function (val, tagName) { return (val.trim() === "" ? "" : decodeHTML(val)); },
            });
            var textNodeName = "#text";
            var key = Object.keys(parsedObj)[0];
            var parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return __getValueFromTextNode(parsedObjToReturn);
        }
        return {};
    });
};
var buildFormUrlencodedString = function (formEntries) {
    return Object.entries(formEntries)
        .map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        return __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value);
    })
        .join("&");
};
var loadQueryErrorCode = function (output, data) {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map