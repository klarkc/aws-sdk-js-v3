import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1CancelKeyDeletionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.CancelKeyDeletion",
        };
        body = JSON.stringify(serializeAws_json1_1CancelKeyDeletionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ConnectCustomKeyStoreCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.ConnectCustomKeyStore",
        };
        body = JSON.stringify(serializeAws_json1_1ConnectCustomKeyStoreRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.CreateAlias",
        };
        body = JSON.stringify(serializeAws_json1_1CreateAliasRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateCustomKeyStoreCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.CreateCustomKeyStore",
        };
        body = JSON.stringify(serializeAws_json1_1CreateCustomKeyStoreRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateGrantCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.CreateGrant",
        };
        body = JSON.stringify(serializeAws_json1_1CreateGrantRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.CreateKey",
        };
        body = JSON.stringify(serializeAws_json1_1CreateKeyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DecryptCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.Decrypt",
        };
        body = JSON.stringify(serializeAws_json1_1DecryptRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.DeleteAlias",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteAliasRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteCustomKeyStoreCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.DeleteCustomKeyStore",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteCustomKeyStoreRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteImportedKeyMaterialCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.DeleteImportedKeyMaterial",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteImportedKeyMaterialRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeCustomKeyStoresCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.DescribeCustomKeyStores",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeCustomKeyStoresRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.DescribeKey",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeKeyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisableKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.DisableKey",
        };
        body = JSON.stringify(serializeAws_json1_1DisableKeyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisableKeyRotationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.DisableKeyRotation",
        };
        body = JSON.stringify(serializeAws_json1_1DisableKeyRotationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisconnectCustomKeyStoreCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.DisconnectCustomKeyStore",
        };
        body = JSON.stringify(serializeAws_json1_1DisconnectCustomKeyStoreRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1EnableKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.EnableKey",
        };
        body = JSON.stringify(serializeAws_json1_1EnableKeyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1EnableKeyRotationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.EnableKeyRotation",
        };
        body = JSON.stringify(serializeAws_json1_1EnableKeyRotationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1EncryptCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.Encrypt",
        };
        body = JSON.stringify(serializeAws_json1_1EncryptRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GenerateDataKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.GenerateDataKey",
        };
        body = JSON.stringify(serializeAws_json1_1GenerateDataKeyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GenerateDataKeyPairCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.GenerateDataKeyPair",
        };
        body = JSON.stringify(serializeAws_json1_1GenerateDataKeyPairRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.GenerateDataKeyPairWithoutPlaintext",
        };
        body = JSON.stringify(serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.GenerateDataKeyWithoutPlaintext",
        };
        body = JSON.stringify(serializeAws_json1_1GenerateDataKeyWithoutPlaintextRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GenerateRandomCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.GenerateRandom",
        };
        body = JSON.stringify(serializeAws_json1_1GenerateRandomRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetKeyPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.GetKeyPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1GetKeyPolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetKeyRotationStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.GetKeyRotationStatus",
        };
        body = JSON.stringify(serializeAws_json1_1GetKeyRotationStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetParametersForImportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.GetParametersForImport",
        };
        body = JSON.stringify(serializeAws_json1_1GetParametersForImportRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetPublicKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.GetPublicKey",
        };
        body = JSON.stringify(serializeAws_json1_1GetPublicKeyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ImportKeyMaterialCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.ImportKeyMaterial",
        };
        body = JSON.stringify(serializeAws_json1_1ImportKeyMaterialRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListAliasesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.ListAliases",
        };
        body = JSON.stringify(serializeAws_json1_1ListAliasesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListGrantsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.ListGrants",
        };
        body = JSON.stringify(serializeAws_json1_1ListGrantsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListKeyPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.ListKeyPolicies",
        };
        body = JSON.stringify(serializeAws_json1_1ListKeyPoliciesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListKeysCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.ListKeys",
        };
        body = JSON.stringify(serializeAws_json1_1ListKeysRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListResourceTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.ListResourceTags",
        };
        body = JSON.stringify(serializeAws_json1_1ListResourceTagsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListRetirableGrantsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.ListRetirableGrants",
        };
        body = JSON.stringify(serializeAws_json1_1ListRetirableGrantsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutKeyPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.PutKeyPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1PutKeyPolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ReEncryptCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.ReEncrypt",
        };
        body = JSON.stringify(serializeAws_json1_1ReEncryptRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RetireGrantCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.RetireGrant",
        };
        body = JSON.stringify(serializeAws_json1_1RetireGrantRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RevokeGrantCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.RevokeGrant",
        };
        body = JSON.stringify(serializeAws_json1_1RevokeGrantRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ScheduleKeyDeletionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.ScheduleKeyDeletion",
        };
        body = JSON.stringify(serializeAws_json1_1ScheduleKeyDeletionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SignCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.Sign",
        };
        body = JSON.stringify(serializeAws_json1_1SignRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.TagResource",
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
            "x-amz-target": "TrentService.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.UpdateAlias",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateAliasRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateCustomKeyStoreCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.UpdateCustomKeyStore",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateCustomKeyStoreRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateKeyDescriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.UpdateKeyDescription",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateKeyDescriptionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1VerifyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "TrentService.Verify",
        };
        body = JSON.stringify(serializeAws_json1_1VerifyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1CancelKeyDeletionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CancelKeyDeletionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CancelKeyDeletionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CancelKeyDeletionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "KMSInternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 6];
                    case "KMSInvalidStateException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ConnectCustomKeyStoreCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ConnectCustomKeyStoreCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ConnectCustomKeyStoreResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ConnectCustomKeyStoreCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CloudHsmClusterInvalidConfigurationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException": return [3 /*break*/, 2];
                    case "CloudHsmClusterNotActiveException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#CloudHsmClusterNotActiveException": return [3 /*break*/, 4];
                    case "CustomKeyStoreInvalidStateException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException": return [3 /*break*/, 6];
                    case "CustomKeyStoreNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#CustomKeyStoreNotFoundException": return [3 /*break*/, 8];
                    case "KMSInternalException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateAliasCommandError(output, context)];
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
var deserializeAws_json1_1CreateAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#AlreadyExistsException": return [3 /*break*/, 2];
                    case "DependencyTimeoutException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 4];
                    case "InvalidAliasNameException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidAliasNameException": return [3 /*break*/, 6];
                    case "KMSInternalException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 8];
                    case "KMSInvalidStateException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 10];
                    case "LimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#LimitExceededException": return [3 /*break*/, 12];
                    case "NotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidAliasNameExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateCustomKeyStoreCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateCustomKeyStoreCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateCustomKeyStoreResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateCustomKeyStoreCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CloudHsmClusterInUseException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#CloudHsmClusterInUseException": return [3 /*break*/, 2];
                    case "CloudHsmClusterInvalidConfigurationException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException": return [3 /*break*/, 4];
                    case "CloudHsmClusterNotActiveException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#CloudHsmClusterNotActiveException": return [3 /*break*/, 6];
                    case "CloudHsmClusterNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#CloudHsmClusterNotFoundException": return [3 /*break*/, 8];
                    case "CustomKeyStoreNameInUseException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#CustomKeyStoreNameInUseException": return [3 /*break*/, 10];
                    case "IncorrectTrustAnchorException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#IncorrectTrustAnchorException": return [3 /*break*/, 12];
                    case "KMSInternalException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudHsmClusterInUseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IncorrectTrustAnchorExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateGrantCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateGrantCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateGrantResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateGrantCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "DisabledException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#DisabledException": return [3 /*break*/, 4];
                    case "InvalidArnException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 6];
                    case "InvalidGrantTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#InvalidGrantTokenException": return [3 /*break*/, 8];
                    case "KMSInternalException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 10];
                    case "KMSInvalidStateException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 12];
                    case "LimitExceededException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#LimitExceededException": return [3 /*break*/, 14];
                    case "NotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateKeyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateKeyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CloudHsmClusterInvalidConfigurationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException": return [3 /*break*/, 2];
                    case "CustomKeyStoreInvalidStateException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException": return [3 /*break*/, 4];
                    case "CustomKeyStoreNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#CustomKeyStoreNotFoundException": return [3 /*break*/, 6];
                    case "DependencyTimeoutException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 8];
                    case "InvalidArnException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 10];
                    case "KMSInternalException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 12];
                    case "LimitExceededException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#LimitExceededException": return [3 /*break*/, 14];
                    case "MalformedPolicyDocumentException": return [3 /*break*/, 16];
                    case "com.amazonaws.kms#MalformedPolicyDocumentException": return [3 /*break*/, 16];
                    case "TagException": return [3 /*break*/, 18];
                    case "com.amazonaws.kms#TagException": return [3 /*break*/, 18];
                    case "UnsupportedOperationException": return [3 /*break*/, 20];
                    case "com.amazonaws.kms#UnsupportedOperationException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DecryptCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DecryptCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DecryptResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DecryptCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "DisabledException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#DisabledException": return [3 /*break*/, 4];
                    case "IncorrectKeyException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#IncorrectKeyException": return [3 /*break*/, 6];
                    case "InvalidCiphertextException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#InvalidCiphertextException": return [3 /*break*/, 8];
                    case "InvalidGrantTokenException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#InvalidGrantTokenException": return [3 /*break*/, 10];
                    case "InvalidKeyUsageException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#InvalidKeyUsageException": return [3 /*break*/, 12];
                    case "KeyUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#KeyUnavailableException": return [3 /*break*/, 14];
                    case "KMSInternalException": return [3 /*break*/, 16];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 16];
                    case "KMSInvalidStateException": return [3 /*break*/, 18];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 18];
                    case "NotFoundException": return [3 /*break*/, 20];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IncorrectKeyExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidCiphertextExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteAliasCommandError(output, context)];
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
var deserializeAws_json1_1DeleteAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "KMSInternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 4];
                    case "KMSInvalidStateException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteCustomKeyStoreCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteCustomKeyStoreCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteCustomKeyStoreResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteCustomKeyStoreCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CustomKeyStoreHasCMKsException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#CustomKeyStoreHasCMKsException": return [3 /*break*/, 2];
                    case "CustomKeyStoreInvalidStateException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException": return [3 /*break*/, 4];
                    case "CustomKeyStoreNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#CustomKeyStoreNotFoundException": return [3 /*break*/, 6];
                    case "KMSInternalException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreHasCMKsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteImportedKeyMaterialCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteImportedKeyMaterialCommandError(output, context)];
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
var deserializeAws_json1_1DeleteImportedKeyMaterialCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "KMSInternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 6];
                    case "KMSInvalidStateException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 10];
                    case "UnsupportedOperationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#UnsupportedOperationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeCustomKeyStoresCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeCustomKeyStoresCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeCustomKeyStoresResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeCustomKeyStoresCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CustomKeyStoreNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#CustomKeyStoreNotFoundException": return [3 /*break*/, 2];
                    case "KMSInternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeKeyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeKeyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "KMSInternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DisableKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisableKeyCommandError(output, context)];
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
var deserializeAws_json1_1DisableKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "KMSInternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 6];
                    case "KMSInvalidStateException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DisableKeyRotationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisableKeyRotationCommandError(output, context)];
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
var deserializeAws_json1_1DisableKeyRotationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "DisabledException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#DisabledException": return [3 /*break*/, 4];
                    case "InvalidArnException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 6];
                    case "KMSInternalException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 8];
                    case "KMSInvalidStateException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 10];
                    case "NotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 12];
                    case "UnsupportedOperationException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#UnsupportedOperationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DisconnectCustomKeyStoreCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisconnectCustomKeyStoreCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DisconnectCustomKeyStoreResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DisconnectCustomKeyStoreCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CustomKeyStoreInvalidStateException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException": return [3 /*break*/, 2];
                    case "CustomKeyStoreNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#CustomKeyStoreNotFoundException": return [3 /*break*/, 4];
                    case "KMSInternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1EnableKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1EnableKeyCommandError(output, context)];
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
var deserializeAws_json1_1EnableKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "KMSInternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 6];
                    case "KMSInvalidStateException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#LimitExceededException": return [3 /*break*/, 10];
                    case "NotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1EnableKeyRotationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1EnableKeyRotationCommandError(output, context)];
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
var deserializeAws_json1_1EnableKeyRotationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "DisabledException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#DisabledException": return [3 /*break*/, 4];
                    case "InvalidArnException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 6];
                    case "KMSInternalException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 8];
                    case "KMSInvalidStateException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 10];
                    case "NotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 12];
                    case "UnsupportedOperationException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#UnsupportedOperationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1EncryptCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1EncryptCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1EncryptResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1EncryptCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "DisabledException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#DisabledException": return [3 /*break*/, 4];
                    case "InvalidGrantTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidGrantTokenException": return [3 /*break*/, 6];
                    case "InvalidKeyUsageException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#InvalidKeyUsageException": return [3 /*break*/, 8];
                    case "KeyUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#KeyUnavailableException": return [3 /*break*/, 10];
                    case "KMSInternalException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 12];
                    case "KMSInvalidStateException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 14];
                    case "NotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GenerateDataKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GenerateDataKeyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GenerateDataKeyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GenerateDataKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "DisabledException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#DisabledException": return [3 /*break*/, 4];
                    case "InvalidGrantTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidGrantTokenException": return [3 /*break*/, 6];
                    case "InvalidKeyUsageException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#InvalidKeyUsageException": return [3 /*break*/, 8];
                    case "KeyUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#KeyUnavailableException": return [3 /*break*/, 10];
                    case "KMSInternalException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 12];
                    case "KMSInvalidStateException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 14];
                    case "NotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GenerateDataKeyPairCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GenerateDataKeyPairCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GenerateDataKeyPairResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GenerateDataKeyPairCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "DisabledException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#DisabledException": return [3 /*break*/, 4];
                    case "InvalidGrantTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidGrantTokenException": return [3 /*break*/, 6];
                    case "InvalidKeyUsageException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#InvalidKeyUsageException": return [3 /*break*/, 8];
                    case "KeyUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#KeyUnavailableException": return [3 /*break*/, 10];
                    case "KMSInternalException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 12];
                    case "KMSInvalidStateException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 14];
                    case "NotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 16];
                    case "UnsupportedOperationException": return [3 /*break*/, 18];
                    case "com.amazonaws.kms#UnsupportedOperationException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "DisabledException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#DisabledException": return [3 /*break*/, 4];
                    case "InvalidGrantTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidGrantTokenException": return [3 /*break*/, 6];
                    case "InvalidKeyUsageException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#InvalidKeyUsageException": return [3 /*break*/, 8];
                    case "KeyUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#KeyUnavailableException": return [3 /*break*/, 10];
                    case "KMSInternalException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 12];
                    case "KMSInvalidStateException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 14];
                    case "NotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 16];
                    case "UnsupportedOperationException": return [3 /*break*/, 18];
                    case "com.amazonaws.kms#UnsupportedOperationException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GenerateDataKeyWithoutPlaintextResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "DisabledException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#DisabledException": return [3 /*break*/, 4];
                    case "InvalidGrantTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidGrantTokenException": return [3 /*break*/, 6];
                    case "InvalidKeyUsageException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#InvalidKeyUsageException": return [3 /*break*/, 8];
                    case "KeyUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#KeyUnavailableException": return [3 /*break*/, 10];
                    case "KMSInternalException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 12];
                    case "KMSInvalidStateException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 14];
                    case "NotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GenerateRandomCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GenerateRandomCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GenerateRandomResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GenerateRandomCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CustomKeyStoreInvalidStateException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException": return [3 /*break*/, 2];
                    case "CustomKeyStoreNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#CustomKeyStoreNotFoundException": return [3 /*break*/, 4];
                    case "DependencyTimeoutException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 6];
                    case "KMSInternalException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetKeyPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetKeyPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetKeyPolicyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetKeyPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "KMSInternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 6];
                    case "KMSInvalidStateException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetKeyRotationStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetKeyRotationStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetKeyRotationStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetKeyRotationStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "KMSInternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 6];
                    case "KMSInvalidStateException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 10];
                    case "UnsupportedOperationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#UnsupportedOperationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetParametersForImportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetParametersForImportCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetParametersForImportResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetParametersForImportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "KMSInternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 6];
                    case "KMSInvalidStateException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 10];
                    case "UnsupportedOperationException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#UnsupportedOperationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetPublicKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetPublicKeyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetPublicKeyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetPublicKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "DisabledException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#DisabledException": return [3 /*break*/, 4];
                    case "InvalidArnException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 6];
                    case "InvalidGrantTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#InvalidGrantTokenException": return [3 /*break*/, 8];
                    case "InvalidKeyUsageException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#InvalidKeyUsageException": return [3 /*break*/, 10];
                    case "KeyUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#KeyUnavailableException": return [3 /*break*/, 12];
                    case "KMSInternalException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 14];
                    case "KMSInvalidStateException": return [3 /*break*/, 16];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 16];
                    case "NotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 18];
                    case "UnsupportedOperationException": return [3 /*break*/, 20];
                    case "com.amazonaws.kms#UnsupportedOperationException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ImportKeyMaterialCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ImportKeyMaterialCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ImportKeyMaterialResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ImportKeyMaterialCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "ExpiredImportTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#ExpiredImportTokenException": return [3 /*break*/, 4];
                    case "IncorrectKeyMaterialException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#IncorrectKeyMaterialException": return [3 /*break*/, 6];
                    case "InvalidArnException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 8];
                    case "InvalidCiphertextException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#InvalidCiphertextException": return [3 /*break*/, 10];
                    case "InvalidImportTokenException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#InvalidImportTokenException": return [3 /*break*/, 12];
                    case "KMSInternalException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 14];
                    case "KMSInvalidStateException": return [3 /*break*/, 16];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 16];
                    case "NotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 18];
                    case "UnsupportedOperationException": return [3 /*break*/, 20];
                    case "com.amazonaws.kms#UnsupportedOperationException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ExpiredImportTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IncorrectKeyMaterialExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidCiphertextExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidImportTokenExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListAliasesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListAliasesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListAliasesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListAliasesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "InvalidMarkerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidMarkerException": return [3 /*break*/, 6];
                    case "KMSInternalException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListGrantsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListGrantsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListGrantsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListGrantsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "InvalidGrantIdException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidGrantIdException": return [3 /*break*/, 6];
                    case "InvalidMarkerException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#InvalidMarkerException": return [3 /*break*/, 8];
                    case "KMSInternalException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 10];
                    case "KMSInvalidStateException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 12];
                    case "NotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGrantIdExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListKeyPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListKeyPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListKeyPoliciesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListKeyPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "KMSInternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 6];
                    case "KMSInvalidStateException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListKeysCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListKeysCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListKeysResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListKeysCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidMarkerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidMarkerException": return [3 /*break*/, 4];
                    case "KMSInternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListResourceTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListResourceTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListResourceTagsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListResourceTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArnException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 2];
                    case "InvalidMarkerException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidMarkerException": return [3 /*break*/, 4];
                    case "KMSInternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListRetirableGrantsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListRetirableGrantsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListGrantsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListRetirableGrantsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "InvalidMarkerException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidMarkerException": return [3 /*break*/, 6];
                    case "KMSInternalException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutKeyPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutKeyPolicyCommandError(output, context)];
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
var deserializeAws_json1_1PutKeyPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "KMSInternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 6];
                    case "KMSInvalidStateException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#LimitExceededException": return [3 /*break*/, 10];
                    case "MalformedPolicyDocumentException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#MalformedPolicyDocumentException": return [3 /*break*/, 12];
                    case "NotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 14];
                    case "UnsupportedOperationException": return [3 /*break*/, 16];
                    case "com.amazonaws.kms#UnsupportedOperationException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ReEncryptCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ReEncryptCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ReEncryptResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ReEncryptCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "DisabledException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#DisabledException": return [3 /*break*/, 4];
                    case "IncorrectKeyException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#IncorrectKeyException": return [3 /*break*/, 6];
                    case "InvalidCiphertextException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#InvalidCiphertextException": return [3 /*break*/, 8];
                    case "InvalidGrantTokenException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#InvalidGrantTokenException": return [3 /*break*/, 10];
                    case "InvalidKeyUsageException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#InvalidKeyUsageException": return [3 /*break*/, 12];
                    case "KeyUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#KeyUnavailableException": return [3 /*break*/, 14];
                    case "KMSInternalException": return [3 /*break*/, 16];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 16];
                    case "KMSInvalidStateException": return [3 /*break*/, 18];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 18];
                    case "NotFoundException": return [3 /*break*/, 20];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IncorrectKeyExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidCiphertextExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RetireGrantCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RetireGrantCommandError(output, context)];
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
var deserializeAws_json1_1RetireGrantCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "InvalidGrantIdException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidGrantIdException": return [3 /*break*/, 6];
                    case "InvalidGrantTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#InvalidGrantTokenException": return [3 /*break*/, 8];
                    case "KMSInternalException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 10];
                    case "KMSInvalidStateException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 12];
                    case "NotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGrantIdExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RevokeGrantCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RevokeGrantCommandError(output, context)];
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
var deserializeAws_json1_1RevokeGrantCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "InvalidGrantIdException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidGrantIdException": return [3 /*break*/, 6];
                    case "KMSInternalException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 8];
                    case "KMSInvalidStateException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 10];
                    case "NotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGrantIdExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ScheduleKeyDeletionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ScheduleKeyDeletionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ScheduleKeyDeletionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ScheduleKeyDeletionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "KMSInternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 6];
                    case "KMSInvalidStateException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1SignCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SignCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SignResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SignCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "DisabledException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#DisabledException": return [3 /*break*/, 4];
                    case "InvalidGrantTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidGrantTokenException": return [3 /*break*/, 6];
                    case "InvalidKeyUsageException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#InvalidKeyUsageException": return [3 /*break*/, 8];
                    case "KeyUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#KeyUnavailableException": return [3 /*break*/, 10];
                    case "KMSInternalException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 12];
                    case "KMSInvalidStateException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 14];
                    case "NotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1TagResourceCommandError(output, context)];
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
var deserializeAws_json1_1TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidArnException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 2];
                    case "KMSInternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 4];
                    case "KMSInvalidStateException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 10];
                    case "TagException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#TagException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UntagResourceCommandError(output, context)];
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
                    case "InvalidArnException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 2];
                    case "KMSInternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 4];
                    case "KMSInvalidStateException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 8];
                    case "TagException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#TagException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateAliasCommandError(output, context)];
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
var deserializeAws_json1_1UpdateAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "KMSInternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 4];
                    case "KMSInvalidStateException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateCustomKeyStoreCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateCustomKeyStoreCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateCustomKeyStoreResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateCustomKeyStoreCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CloudHsmClusterInvalidConfigurationException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException": return [3 /*break*/, 2];
                    case "CloudHsmClusterNotActiveException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#CloudHsmClusterNotActiveException": return [3 /*break*/, 4];
                    case "CloudHsmClusterNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#CloudHsmClusterNotFoundException": return [3 /*break*/, 6];
                    case "CloudHsmClusterNotRelatedException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#CloudHsmClusterNotRelatedException": return [3 /*break*/, 8];
                    case "CustomKeyStoreInvalidStateException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#CustomKeyStoreInvalidStateException": return [3 /*break*/, 10];
                    case "CustomKeyStoreNameInUseException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#CustomKeyStoreNameInUseException": return [3 /*break*/, 12];
                    case "CustomKeyStoreNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#CustomKeyStoreNotFoundException": return [3 /*break*/, 14];
                    case "KMSInternalException": return [3 /*break*/, 16];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudHsmClusterNotRelatedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateKeyDescriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateKeyDescriptionCommandError(output, context)];
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
var deserializeAws_json1_1UpdateKeyDescriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#InvalidArnException": return [3 /*break*/, 4];
                    case "KMSInternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 6];
                    case "KMSInvalidStateException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1VerifyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1VerifyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1VerifyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1VerifyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DependencyTimeoutException": return [3 /*break*/, 2];
                    case "com.amazonaws.kms#DependencyTimeoutException": return [3 /*break*/, 2];
                    case "DisabledException": return [3 /*break*/, 4];
                    case "com.amazonaws.kms#DisabledException": return [3 /*break*/, 4];
                    case "InvalidGrantTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.kms#InvalidGrantTokenException": return [3 /*break*/, 6];
                    case "InvalidKeyUsageException": return [3 /*break*/, 8];
                    case "com.amazonaws.kms#InvalidKeyUsageException": return [3 /*break*/, 8];
                    case "KeyUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kms#KeyUnavailableException": return [3 /*break*/, 10];
                    case "KMSInternalException": return [3 /*break*/, 12];
                    case "com.amazonaws.kms#KMSInternalException": return [3 /*break*/, 12];
                    case "KMSInvalidSignatureException": return [3 /*break*/, 14];
                    case "com.amazonaws.kms#KMSInvalidSignatureException": return [3 /*break*/, 14];
                    case "KMSInvalidStateException": return [3 /*break*/, 16];
                    case "com.amazonaws.kms#KMSInvalidStateException": return [3 /*break*/, 16];
                    case "NotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.kms#NotFoundException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidSignatureExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1AlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1AlreadyExistsException(body, context);
        contents = __assign({ name: "AlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CloudHsmClusterInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CloudHsmClusterInUseException(body, context);
        contents = __assign({ name: "CloudHsmClusterInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CloudHsmClusterInvalidConfigurationException(body, context);
        contents = __assign({ name: "CloudHsmClusterInvalidConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CloudHsmClusterNotActiveException(body, context);
        contents = __assign({ name: "CloudHsmClusterNotActiveException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CloudHsmClusterNotFoundException(body, context);
        contents = __assign({ name: "CloudHsmClusterNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CloudHsmClusterNotRelatedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CloudHsmClusterNotRelatedException(body, context);
        contents = __assign({ name: "CloudHsmClusterNotRelatedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CustomKeyStoreHasCMKsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CustomKeyStoreHasCMKsException(body, context);
        contents = __assign({ name: "CustomKeyStoreHasCMKsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CustomKeyStoreInvalidStateException(body, context);
        contents = __assign({ name: "CustomKeyStoreInvalidStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CustomKeyStoreNameInUseException(body, context);
        contents = __assign({ name: "CustomKeyStoreNameInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CustomKeyStoreNotFoundException(body, context);
        contents = __assign({ name: "CustomKeyStoreNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DependencyTimeoutExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DependencyTimeoutException(body, context);
        contents = __assign({ name: "DependencyTimeoutException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DisabledExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DisabledException(body, context);
        contents = __assign({ name: "DisabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ExpiredImportTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ExpiredImportTokenException(body, context);
        contents = __assign({ name: "ExpiredImportTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1IncorrectKeyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1IncorrectKeyException(body, context);
        contents = __assign({ name: "IncorrectKeyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1IncorrectKeyMaterialExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1IncorrectKeyMaterialException(body, context);
        contents = __assign({ name: "IncorrectKeyMaterialException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1IncorrectTrustAnchorExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1IncorrectTrustAnchorException(body, context);
        contents = __assign({ name: "IncorrectTrustAnchorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidAliasNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidAliasNameException(body, context);
        contents = __assign({ name: "InvalidAliasNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidArnExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidArnException(body, context);
        contents = __assign({ name: "InvalidArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidCiphertextExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidCiphertextException(body, context);
        contents = __assign({ name: "InvalidCiphertextException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidGrantIdExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidGrantIdException(body, context);
        contents = __assign({ name: "InvalidGrantIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidGrantTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidGrantTokenException(body, context);
        contents = __assign({ name: "InvalidGrantTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidImportTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidImportTokenException(body, context);
        contents = __assign({ name: "InvalidImportTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidKeyUsageExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidKeyUsageException(body, context);
        contents = __assign({ name: "InvalidKeyUsageException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidMarkerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidMarkerException(body, context);
        contents = __assign({ name: "InvalidMarkerException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1KeyUnavailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1KeyUnavailableException(body, context);
        contents = __assign({ name: "KeyUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1KMSInternalExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1KMSInternalException(body, context);
        contents = __assign({ name: "KMSInternalException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1KMSInvalidSignatureExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1KMSInvalidSignatureException(body, context);
        contents = __assign({ name: "KMSInvalidSignatureException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1KMSInvalidStateExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1KMSInvalidStateException(body, context);
        contents = __assign({ name: "KMSInvalidStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1MalformedPolicyDocumentException(body, context);
        contents = __assign({ name: "MalformedPolicyDocumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NotFoundException(body, context);
        contents = __assign({ name: "NotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TagExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TagException(body, context);
        contents = __assign({ name: "TagException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnsupportedOperationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnsupportedOperationException(body, context);
        contents = __assign({ name: "UnsupportedOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1CancelKeyDeletionRequest = function (input, context) {
    return __assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }));
};
var serializeAws_json1_1ConnectCustomKeyStoreRequest = function (input, context) {
    return __assign({}, (input.CustomKeyStoreId !== undefined &&
        input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }));
};
var serializeAws_json1_1CreateAliasRequest = function (input, context) {
    return __assign(__assign({}, (input.AliasName !== undefined && input.AliasName !== null && { AliasName: input.AliasName })), (input.TargetKeyId !== undefined && input.TargetKeyId !== null && { TargetKeyId: input.TargetKeyId }));
};
var serializeAws_json1_1CreateCustomKeyStoreRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CloudHsmClusterId !== undefined &&
        input.CloudHsmClusterId !== null && { CloudHsmClusterId: input.CloudHsmClusterId })), (input.CustomKeyStoreName !== undefined &&
        input.CustomKeyStoreName !== null && { CustomKeyStoreName: input.CustomKeyStoreName })), (input.KeyStorePassword !== undefined &&
        input.KeyStorePassword !== null && { KeyStorePassword: input.KeyStorePassword })), (input.TrustAnchorCertificate !== undefined &&
        input.TrustAnchorCertificate !== null && { TrustAnchorCertificate: input.TrustAnchorCertificate }));
};
var serializeAws_json1_1CreateGrantRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Constraints !== undefined &&
        input.Constraints !== null && { Constraints: serializeAws_json1_1GrantConstraints(input.Constraints, context) })), (input.GrantTokens !== undefined &&
        input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) })), (input.GranteePrincipal !== undefined &&
        input.GranteePrincipal !== null && { GranteePrincipal: input.GranteePrincipal })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Operations !== undefined &&
        input.Operations !== null && { Operations: serializeAws_json1_1GrantOperationList(input.Operations, context) })), (input.RetiringPrincipal !== undefined &&
        input.RetiringPrincipal !== null && { RetiringPrincipal: input.RetiringPrincipal }));
};
var serializeAws_json1_1CreateKeyRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.BypassPolicyLockoutSafetyCheck !== undefined &&
        input.BypassPolicyLockoutSafetyCheck !== null && {
        BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck,
    })), (input.CustomKeyStoreId !== undefined &&
        input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId })), (input.CustomerMasterKeySpec !== undefined &&
        input.CustomerMasterKeySpec !== null && { CustomerMasterKeySpec: input.CustomerMasterKeySpec })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.KeyUsage !== undefined && input.KeyUsage !== null && { KeyUsage: input.KeyUsage })), (input.Origin !== undefined && input.Origin !== null && { Origin: input.Origin })), (input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1DecryptRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.CiphertextBlob !== undefined &&
        input.CiphertextBlob !== null && { CiphertextBlob: context.base64Encoder(input.CiphertextBlob) })), (input.EncryptionAlgorithm !== undefined &&
        input.EncryptionAlgorithm !== null && { EncryptionAlgorithm: input.EncryptionAlgorithm })), (input.EncryptionContext !== undefined &&
        input.EncryptionContext !== null && {
        EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
    })), (input.GrantTokens !== undefined &&
        input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }));
};
var serializeAws_json1_1DeleteAliasRequest = function (input, context) {
    return __assign({}, (input.AliasName !== undefined && input.AliasName !== null && { AliasName: input.AliasName }));
};
var serializeAws_json1_1DeleteCustomKeyStoreRequest = function (input, context) {
    return __assign({}, (input.CustomKeyStoreId !== undefined &&
        input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }));
};
var serializeAws_json1_1DeleteImportedKeyMaterialRequest = function (input, context) {
    return __assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }));
};
var serializeAws_json1_1DescribeCustomKeyStoresRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CustomKeyStoreId !== undefined &&
        input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId })), (input.CustomKeyStoreName !== undefined &&
        input.CustomKeyStoreName !== null && { CustomKeyStoreName: input.CustomKeyStoreName })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1DescribeKeyRequest = function (input, context) {
    return __assign(__assign({}, (input.GrantTokens !== undefined &&
        input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }));
};
var serializeAws_json1_1DisableKeyRequest = function (input, context) {
    return __assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }));
};
var serializeAws_json1_1DisableKeyRotationRequest = function (input, context) {
    return __assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }));
};
var serializeAws_json1_1DisconnectCustomKeyStoreRequest = function (input, context) {
    return __assign({}, (input.CustomKeyStoreId !== undefined &&
        input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }));
};
var serializeAws_json1_1EnableKeyRequest = function (input, context) {
    return __assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }));
};
var serializeAws_json1_1EnableKeyRotationRequest = function (input, context) {
    return __assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }));
};
var serializeAws_json1_1EncryptionContextType = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1EncryptRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.EncryptionAlgorithm !== undefined &&
        input.EncryptionAlgorithm !== null && { EncryptionAlgorithm: input.EncryptionAlgorithm })), (input.EncryptionContext !== undefined &&
        input.EncryptionContext !== null && {
        EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
    })), (input.GrantTokens !== undefined &&
        input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.Plaintext !== undefined &&
        input.Plaintext !== null && { Plaintext: context.base64Encoder(input.Plaintext) }));
};
var serializeAws_json1_1GenerateDataKeyPairRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.EncryptionContext !== undefined &&
        input.EncryptionContext !== null && {
        EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
    })), (input.GrantTokens !== undefined &&
        input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.KeyPairSpec !== undefined && input.KeyPairSpec !== null && { KeyPairSpec: input.KeyPairSpec }));
};
var serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.EncryptionContext !== undefined &&
        input.EncryptionContext !== null && {
        EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
    })), (input.GrantTokens !== undefined &&
        input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.KeyPairSpec !== undefined && input.KeyPairSpec !== null && { KeyPairSpec: input.KeyPairSpec }));
};
var serializeAws_json1_1GenerateDataKeyRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.EncryptionContext !== undefined &&
        input.EncryptionContext !== null && {
        EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
    })), (input.GrantTokens !== undefined &&
        input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.KeySpec !== undefined && input.KeySpec !== null && { KeySpec: input.KeySpec })), (input.NumberOfBytes !== undefined && input.NumberOfBytes !== null && { NumberOfBytes: input.NumberOfBytes }));
};
var serializeAws_json1_1GenerateDataKeyWithoutPlaintextRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.EncryptionContext !== undefined &&
        input.EncryptionContext !== null && {
        EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
    })), (input.GrantTokens !== undefined &&
        input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.KeySpec !== undefined && input.KeySpec !== null && { KeySpec: input.KeySpec })), (input.NumberOfBytes !== undefined && input.NumberOfBytes !== null && { NumberOfBytes: input.NumberOfBytes }));
};
var serializeAws_json1_1GenerateRandomRequest = function (input, context) {
    return __assign(__assign({}, (input.CustomKeyStoreId !== undefined &&
        input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId })), (input.NumberOfBytes !== undefined && input.NumberOfBytes !== null && { NumberOfBytes: input.NumberOfBytes }));
};
var serializeAws_json1_1GetKeyPolicyRequest = function (input, context) {
    return __assign(__assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }));
};
var serializeAws_json1_1GetKeyRotationStatusRequest = function (input, context) {
    return __assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }));
};
var serializeAws_json1_1GetParametersForImportRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.WrappingAlgorithm !== undefined &&
        input.WrappingAlgorithm !== null && { WrappingAlgorithm: input.WrappingAlgorithm })), (input.WrappingKeySpec !== undefined &&
        input.WrappingKeySpec !== null && { WrappingKeySpec: input.WrappingKeySpec }));
};
var serializeAws_json1_1GetPublicKeyRequest = function (input, context) {
    return __assign(__assign({}, (input.GrantTokens !== undefined &&
        input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }));
};
var serializeAws_json1_1GrantConstraints = function (input, context) {
    return __assign(__assign({}, (input.EncryptionContextEquals !== undefined &&
        input.EncryptionContextEquals !== null && {
        EncryptionContextEquals: serializeAws_json1_1EncryptionContextType(input.EncryptionContextEquals, context),
    })), (input.EncryptionContextSubset !== undefined &&
        input.EncryptionContextSubset !== null && {
        EncryptionContextSubset: serializeAws_json1_1EncryptionContextType(input.EncryptionContextSubset, context),
    }));
};
var serializeAws_json1_1GrantOperationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1GrantTokenList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ImportKeyMaterialRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.EncryptedKeyMaterial !== undefined &&
        input.EncryptedKeyMaterial !== null && {
        EncryptedKeyMaterial: context.base64Encoder(input.EncryptedKeyMaterial),
    })), (input.ExpirationModel !== undefined &&
        input.ExpirationModel !== null && { ExpirationModel: input.ExpirationModel })), (input.ImportToken !== undefined &&
        input.ImportToken !== null && { ImportToken: context.base64Encoder(input.ImportToken) })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.ValidTo !== undefined &&
        input.ValidTo !== null && { ValidTo: Math.round(input.ValidTo.getTime() / 1000) }));
};
var serializeAws_json1_1ListAliasesRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1ListGrantsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.GrantId !== undefined && input.GrantId !== null && { GrantId: input.GrantId })), (input.GranteePrincipal !== undefined &&
        input.GranteePrincipal !== null && { GranteePrincipal: input.GranteePrincipal })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1ListKeyPoliciesRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1ListKeysRequest = function (input, context) {
    return __assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1ListResourceTagsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1ListRetirableGrantsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.RetiringPrincipal !== undefined &&
        input.RetiringPrincipal !== null && { RetiringPrincipal: input.RetiringPrincipal }));
};
var serializeAws_json1_1PutKeyPolicyRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.BypassPolicyLockoutSafetyCheck !== undefined &&
        input.BypassPolicyLockoutSafetyCheck !== null && {
        BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck,
    })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy })), (input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }));
};
var serializeAws_json1_1ReEncryptRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CiphertextBlob !== undefined &&
        input.CiphertextBlob !== null && { CiphertextBlob: context.base64Encoder(input.CiphertextBlob) })), (input.DestinationEncryptionAlgorithm !== undefined &&
        input.DestinationEncryptionAlgorithm !== null && {
        DestinationEncryptionAlgorithm: input.DestinationEncryptionAlgorithm,
    })), (input.DestinationEncryptionContext !== undefined &&
        input.DestinationEncryptionContext !== null && {
        DestinationEncryptionContext: serializeAws_json1_1EncryptionContextType(input.DestinationEncryptionContext, context),
    })), (input.DestinationKeyId !== undefined &&
        input.DestinationKeyId !== null && { DestinationKeyId: input.DestinationKeyId })), (input.GrantTokens !== undefined &&
        input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) })), (input.SourceEncryptionAlgorithm !== undefined &&
        input.SourceEncryptionAlgorithm !== null && { SourceEncryptionAlgorithm: input.SourceEncryptionAlgorithm })), (input.SourceEncryptionContext !== undefined &&
        input.SourceEncryptionContext !== null && {
        SourceEncryptionContext: serializeAws_json1_1EncryptionContextType(input.SourceEncryptionContext, context),
    })), (input.SourceKeyId !== undefined && input.SourceKeyId !== null && { SourceKeyId: input.SourceKeyId }));
};
var serializeAws_json1_1RetireGrantRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.GrantId !== undefined && input.GrantId !== null && { GrantId: input.GrantId })), (input.GrantToken !== undefined && input.GrantToken !== null && { GrantToken: input.GrantToken })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }));
};
var serializeAws_json1_1RevokeGrantRequest = function (input, context) {
    return __assign(__assign({}, (input.GrantId !== undefined && input.GrantId !== null && { GrantId: input.GrantId })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }));
};
var serializeAws_json1_1ScheduleKeyDeletionRequest = function (input, context) {
    return __assign(__assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.PendingWindowInDays !== undefined &&
        input.PendingWindowInDays !== null && { PendingWindowInDays: input.PendingWindowInDays }));
};
var serializeAws_json1_1SignRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.GrantTokens !== undefined &&
        input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.Message !== undefined && input.Message !== null && { Message: context.base64Encoder(input.Message) })), (input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType })), (input.SigningAlgorithm !== undefined &&
        input.SigningAlgorithm !== null && { SigningAlgorithm: input.SigningAlgorithm }));
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey })), (input.TagValue !== undefined && input.TagValue !== null && { TagValue: input.TagValue }));
};
var serializeAws_json1_1TagKeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1TagList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1TagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1UntagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }));
};
var serializeAws_json1_1UpdateAliasRequest = function (input, context) {
    return __assign(__assign({}, (input.AliasName !== undefined && input.AliasName !== null && { AliasName: input.AliasName })), (input.TargetKeyId !== undefined && input.TargetKeyId !== null && { TargetKeyId: input.TargetKeyId }));
};
var serializeAws_json1_1UpdateCustomKeyStoreRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CloudHsmClusterId !== undefined &&
        input.CloudHsmClusterId !== null && { CloudHsmClusterId: input.CloudHsmClusterId })), (input.CustomKeyStoreId !== undefined &&
        input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId })), (input.KeyStorePassword !== undefined &&
        input.KeyStorePassword !== null && { KeyStorePassword: input.KeyStorePassword })), (input.NewCustomKeyStoreName !== undefined &&
        input.NewCustomKeyStoreName !== null && { NewCustomKeyStoreName: input.NewCustomKeyStoreName }));
};
var serializeAws_json1_1UpdateKeyDescriptionRequest = function (input, context) {
    return __assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }));
};
var serializeAws_json1_1VerifyRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.GrantTokens !== undefined &&
        input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.Message !== undefined && input.Message !== null && { Message: context.base64Encoder(input.Message) })), (input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType })), (input.Signature !== undefined &&
        input.Signature !== null && { Signature: context.base64Encoder(input.Signature) })), (input.SigningAlgorithm !== undefined &&
        input.SigningAlgorithm !== null && { SigningAlgorithm: input.SigningAlgorithm }));
};
var deserializeAws_json1_1AliasList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AliasListEntry(entry, context);
    });
};
var deserializeAws_json1_1AliasListEntry = function (output, context) {
    return {
        AliasArn: output.AliasArn !== undefined && output.AliasArn !== null ? output.AliasArn : undefined,
        AliasName: output.AliasName !== undefined && output.AliasName !== null ? output.AliasName : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        LastUpdatedDate: output.LastUpdatedDate !== undefined && output.LastUpdatedDate !== null
            ? new Date(Math.round(output.LastUpdatedDate * 1000))
            : undefined,
        TargetKeyId: output.TargetKeyId !== undefined && output.TargetKeyId !== null ? output.TargetKeyId : undefined,
    };
};
var deserializeAws_json1_1AlreadyExistsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CancelKeyDeletionResponse = function (output, context) {
    return {
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    };
};
var deserializeAws_json1_1CloudHsmClusterInUseException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CloudHsmClusterInvalidConfigurationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CloudHsmClusterNotActiveException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CloudHsmClusterNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CloudHsmClusterNotRelatedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ConnectCustomKeyStoreResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1CreateCustomKeyStoreResponse = function (output, context) {
    return {
        CustomKeyStoreId: output.CustomKeyStoreId !== undefined && output.CustomKeyStoreId !== null ? output.CustomKeyStoreId : undefined,
    };
};
var deserializeAws_json1_1CreateGrantResponse = function (output, context) {
    return {
        GrantId: output.GrantId !== undefined && output.GrantId !== null ? output.GrantId : undefined,
        GrantToken: output.GrantToken !== undefined && output.GrantToken !== null ? output.GrantToken : undefined,
    };
};
var deserializeAws_json1_1CreateKeyResponse = function (output, context) {
    return {
        KeyMetadata: output.KeyMetadata !== undefined && output.KeyMetadata !== null
            ? deserializeAws_json1_1KeyMetadata(output.KeyMetadata, context)
            : undefined,
    };
};
var deserializeAws_json1_1CustomKeyStoreHasCMKsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CustomKeyStoreInvalidStateException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CustomKeyStoreNameInUseException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CustomKeyStoreNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CustomKeyStoresList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CustomKeyStoresListEntry(entry, context);
    });
};
var deserializeAws_json1_1CustomKeyStoresListEntry = function (output, context) {
    return {
        CloudHsmClusterId: output.CloudHsmClusterId !== undefined && output.CloudHsmClusterId !== null
            ? output.CloudHsmClusterId
            : undefined,
        ConnectionErrorCode: output.ConnectionErrorCode !== undefined && output.ConnectionErrorCode !== null
            ? output.ConnectionErrorCode
            : undefined,
        ConnectionState: output.ConnectionState !== undefined && output.ConnectionState !== null ? output.ConnectionState : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        CustomKeyStoreId: output.CustomKeyStoreId !== undefined && output.CustomKeyStoreId !== null ? output.CustomKeyStoreId : undefined,
        CustomKeyStoreName: output.CustomKeyStoreName !== undefined && output.CustomKeyStoreName !== null
            ? output.CustomKeyStoreName
            : undefined,
        TrustAnchorCertificate: output.TrustAnchorCertificate !== undefined && output.TrustAnchorCertificate !== null
            ? output.TrustAnchorCertificate
            : undefined,
    };
};
var deserializeAws_json1_1DecryptResponse = function (output, context) {
    return {
        EncryptionAlgorithm: output.EncryptionAlgorithm !== undefined && output.EncryptionAlgorithm !== null
            ? output.EncryptionAlgorithm
            : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        Plaintext: output.Plaintext !== undefined && output.Plaintext !== null ? context.base64Decoder(output.Plaintext) : undefined,
    };
};
var deserializeAws_json1_1DeleteCustomKeyStoreResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DependencyTimeoutException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DescribeCustomKeyStoresResponse = function (output, context) {
    return {
        CustomKeyStores: output.CustomKeyStores !== undefined && output.CustomKeyStores !== null
            ? deserializeAws_json1_1CustomKeyStoresList(output.CustomKeyStores, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
    };
};
var deserializeAws_json1_1DescribeKeyResponse = function (output, context) {
    return {
        KeyMetadata: output.KeyMetadata !== undefined && output.KeyMetadata !== null
            ? deserializeAws_json1_1KeyMetadata(output.KeyMetadata, context)
            : undefined,
    };
};
var deserializeAws_json1_1DisabledException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DisconnectCustomKeyStoreResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1EncryptionAlgorithmSpecList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1EncryptionContextType = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1EncryptResponse = function (output, context) {
    return {
        CiphertextBlob: output.CiphertextBlob !== undefined && output.CiphertextBlob !== null
            ? context.base64Decoder(output.CiphertextBlob)
            : undefined,
        EncryptionAlgorithm: output.EncryptionAlgorithm !== undefined && output.EncryptionAlgorithm !== null
            ? output.EncryptionAlgorithm
            : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    };
};
var deserializeAws_json1_1ExpiredImportTokenException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1GenerateDataKeyPairResponse = function (output, context) {
    return {
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        KeyPairSpec: output.KeyPairSpec !== undefined && output.KeyPairSpec !== null ? output.KeyPairSpec : undefined,
        PrivateKeyCiphertextBlob: output.PrivateKeyCiphertextBlob !== undefined && output.PrivateKeyCiphertextBlob !== null
            ? context.base64Decoder(output.PrivateKeyCiphertextBlob)
            : undefined,
        PrivateKeyPlaintext: output.PrivateKeyPlaintext !== undefined && output.PrivateKeyPlaintext !== null
            ? context.base64Decoder(output.PrivateKeyPlaintext)
            : undefined,
        PublicKey: output.PublicKey !== undefined && output.PublicKey !== null ? context.base64Decoder(output.PublicKey) : undefined,
    };
};
var deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextResponse = function (output, context) {
    return {
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        KeyPairSpec: output.KeyPairSpec !== undefined && output.KeyPairSpec !== null ? output.KeyPairSpec : undefined,
        PrivateKeyCiphertextBlob: output.PrivateKeyCiphertextBlob !== undefined && output.PrivateKeyCiphertextBlob !== null
            ? context.base64Decoder(output.PrivateKeyCiphertextBlob)
            : undefined,
        PublicKey: output.PublicKey !== undefined && output.PublicKey !== null ? context.base64Decoder(output.PublicKey) : undefined,
    };
};
var deserializeAws_json1_1GenerateDataKeyResponse = function (output, context) {
    return {
        CiphertextBlob: output.CiphertextBlob !== undefined && output.CiphertextBlob !== null
            ? context.base64Decoder(output.CiphertextBlob)
            : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        Plaintext: output.Plaintext !== undefined && output.Plaintext !== null ? context.base64Decoder(output.Plaintext) : undefined,
    };
};
var deserializeAws_json1_1GenerateDataKeyWithoutPlaintextResponse = function (output, context) {
    return {
        CiphertextBlob: output.CiphertextBlob !== undefined && output.CiphertextBlob !== null
            ? context.base64Decoder(output.CiphertextBlob)
            : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    };
};
var deserializeAws_json1_1GenerateRandomResponse = function (output, context) {
    return {
        Plaintext: output.Plaintext !== undefined && output.Plaintext !== null ? context.base64Decoder(output.Plaintext) : undefined,
    };
};
var deserializeAws_json1_1GetKeyPolicyResponse = function (output, context) {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
    };
};
var deserializeAws_json1_1GetKeyRotationStatusResponse = function (output, context) {
    return {
        KeyRotationEnabled: output.KeyRotationEnabled !== undefined && output.KeyRotationEnabled !== null
            ? output.KeyRotationEnabled
            : undefined,
    };
};
var deserializeAws_json1_1GetParametersForImportResponse = function (output, context) {
    return {
        ImportToken: output.ImportToken !== undefined && output.ImportToken !== null
            ? context.base64Decoder(output.ImportToken)
            : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        ParametersValidTo: output.ParametersValidTo !== undefined && output.ParametersValidTo !== null
            ? new Date(Math.round(output.ParametersValidTo * 1000))
            : undefined,
        PublicKey: output.PublicKey !== undefined && output.PublicKey !== null ? context.base64Decoder(output.PublicKey) : undefined,
    };
};
var deserializeAws_json1_1GetPublicKeyResponse = function (output, context) {
    return {
        CustomerMasterKeySpec: output.CustomerMasterKeySpec !== undefined && output.CustomerMasterKeySpec !== null
            ? output.CustomerMasterKeySpec
            : undefined,
        EncryptionAlgorithms: output.EncryptionAlgorithms !== undefined && output.EncryptionAlgorithms !== null
            ? deserializeAws_json1_1EncryptionAlgorithmSpecList(output.EncryptionAlgorithms, context)
            : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        KeyUsage: output.KeyUsage !== undefined && output.KeyUsage !== null ? output.KeyUsage : undefined,
        PublicKey: output.PublicKey !== undefined && output.PublicKey !== null ? context.base64Decoder(output.PublicKey) : undefined,
        SigningAlgorithms: output.SigningAlgorithms !== undefined && output.SigningAlgorithms !== null
            ? deserializeAws_json1_1SigningAlgorithmSpecList(output.SigningAlgorithms, context)
            : undefined,
    };
};
var deserializeAws_json1_1GrantConstraints = function (output, context) {
    return {
        EncryptionContextEquals: output.EncryptionContextEquals !== undefined && output.EncryptionContextEquals !== null
            ? deserializeAws_json1_1EncryptionContextType(output.EncryptionContextEquals, context)
            : undefined,
        EncryptionContextSubset: output.EncryptionContextSubset !== undefined && output.EncryptionContextSubset !== null
            ? deserializeAws_json1_1EncryptionContextType(output.EncryptionContextSubset, context)
            : undefined,
    };
};
var deserializeAws_json1_1GrantList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GrantListEntry(entry, context);
    });
};
var deserializeAws_json1_1GrantListEntry = function (output, context) {
    return {
        Constraints: output.Constraints !== undefined && output.Constraints !== null
            ? deserializeAws_json1_1GrantConstraints(output.Constraints, context)
            : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        GrantId: output.GrantId !== undefined && output.GrantId !== null ? output.GrantId : undefined,
        GranteePrincipal: output.GranteePrincipal !== undefined && output.GranteePrincipal !== null ? output.GranteePrincipal : undefined,
        IssuingAccount: output.IssuingAccount !== undefined && output.IssuingAccount !== null ? output.IssuingAccount : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Operations: output.Operations !== undefined && output.Operations !== null
            ? deserializeAws_json1_1GrantOperationList(output.Operations, context)
            : undefined,
        RetiringPrincipal: output.RetiringPrincipal !== undefined && output.RetiringPrincipal !== null
            ? output.RetiringPrincipal
            : undefined,
    };
};
var deserializeAws_json1_1GrantOperationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ImportKeyMaterialResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1IncorrectKeyException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1IncorrectKeyMaterialException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1IncorrectTrustAnchorException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidAliasNameException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidArnException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidCiphertextException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidGrantIdException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidGrantTokenException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidImportTokenException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidKeyUsageException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidMarkerException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1KeyList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1KeyListEntry(entry, context);
    });
};
var deserializeAws_json1_1KeyListEntry = function (output, context) {
    return {
        KeyArn: output.KeyArn !== undefined && output.KeyArn !== null ? output.KeyArn : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    };
};
var deserializeAws_json1_1KeyMetadata = function (output, context) {
    return {
        AWSAccountId: output.AWSAccountId !== undefined && output.AWSAccountId !== null ? output.AWSAccountId : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CloudHsmClusterId: output.CloudHsmClusterId !== undefined && output.CloudHsmClusterId !== null
            ? output.CloudHsmClusterId
            : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        CustomKeyStoreId: output.CustomKeyStoreId !== undefined && output.CustomKeyStoreId !== null ? output.CustomKeyStoreId : undefined,
        CustomerMasterKeySpec: output.CustomerMasterKeySpec !== undefined && output.CustomerMasterKeySpec !== null
            ? output.CustomerMasterKeySpec
            : undefined,
        DeletionDate: output.DeletionDate !== undefined && output.DeletionDate !== null
            ? new Date(Math.round(output.DeletionDate * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        EncryptionAlgorithms: output.EncryptionAlgorithms !== undefined && output.EncryptionAlgorithms !== null
            ? deserializeAws_json1_1EncryptionAlgorithmSpecList(output.EncryptionAlgorithms, context)
            : undefined,
        ExpirationModel: output.ExpirationModel !== undefined && output.ExpirationModel !== null ? output.ExpirationModel : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        KeyManager: output.KeyManager !== undefined && output.KeyManager !== null ? output.KeyManager : undefined,
        KeyState: output.KeyState !== undefined && output.KeyState !== null ? output.KeyState : undefined,
        KeyUsage: output.KeyUsage !== undefined && output.KeyUsage !== null ? output.KeyUsage : undefined,
        Origin: output.Origin !== undefined && output.Origin !== null ? output.Origin : undefined,
        SigningAlgorithms: output.SigningAlgorithms !== undefined && output.SigningAlgorithms !== null
            ? deserializeAws_json1_1SigningAlgorithmSpecList(output.SigningAlgorithms, context)
            : undefined,
        ValidTo: output.ValidTo !== undefined && output.ValidTo !== null ? new Date(Math.round(output.ValidTo * 1000)) : undefined,
    };
};
var deserializeAws_json1_1KeyUnavailableException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1KMSInternalException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1KMSInvalidSignatureException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1KMSInvalidStateException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ListAliasesResponse = function (output, context) {
    return {
        Aliases: output.Aliases !== undefined && output.Aliases !== null
            ? deserializeAws_json1_1AliasList(output.Aliases, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
    };
};
var deserializeAws_json1_1ListGrantsResponse = function (output, context) {
    return {
        Grants: output.Grants !== undefined && output.Grants !== null
            ? deserializeAws_json1_1GrantList(output.Grants, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
    };
};
var deserializeAws_json1_1ListKeyPoliciesResponse = function (output, context) {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        PolicyNames: output.PolicyNames !== undefined && output.PolicyNames !== null
            ? deserializeAws_json1_1PolicyNameList(output.PolicyNames, context)
            : undefined,
        Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
    };
};
var deserializeAws_json1_1ListKeysResponse = function (output, context) {
    return {
        Keys: output.Keys !== undefined && output.Keys !== null
            ? deserializeAws_json1_1KeyList(output.Keys, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
    };
};
var deserializeAws_json1_1ListResourceTagsResponse = function (output, context) {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
        Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
    };
};
var deserializeAws_json1_1MalformedPolicyDocumentException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1PolicyNameList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ReEncryptResponse = function (output, context) {
    return {
        CiphertextBlob: output.CiphertextBlob !== undefined && output.CiphertextBlob !== null
            ? context.base64Decoder(output.CiphertextBlob)
            : undefined,
        DestinationEncryptionAlgorithm: output.DestinationEncryptionAlgorithm !== undefined && output.DestinationEncryptionAlgorithm !== null
            ? output.DestinationEncryptionAlgorithm
            : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        SourceEncryptionAlgorithm: output.SourceEncryptionAlgorithm !== undefined && output.SourceEncryptionAlgorithm !== null
            ? output.SourceEncryptionAlgorithm
            : undefined,
        SourceKeyId: output.SourceKeyId !== undefined && output.SourceKeyId !== null ? output.SourceKeyId : undefined,
    };
};
var deserializeAws_json1_1ScheduleKeyDeletionResponse = function (output, context) {
    return {
        DeletionDate: output.DeletionDate !== undefined && output.DeletionDate !== null
            ? new Date(Math.round(output.DeletionDate * 1000))
            : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    };
};
var deserializeAws_json1_1SigningAlgorithmSpecList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1SignResponse = function (output, context) {
    return {
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        Signature: output.Signature !== undefined && output.Signature !== null ? context.base64Decoder(output.Signature) : undefined,
        SigningAlgorithm: output.SigningAlgorithm !== undefined && output.SigningAlgorithm !== null ? output.SigningAlgorithm : undefined,
    };
};
var deserializeAws_json1_1Tag = function (output, context) {
    return {
        TagKey: output.TagKey !== undefined && output.TagKey !== null ? output.TagKey : undefined,
        TagValue: output.TagValue !== undefined && output.TagValue !== null ? output.TagValue : undefined,
    };
};
var deserializeAws_json1_1TagException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1TagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
var deserializeAws_json1_1UnsupportedOperationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UpdateCustomKeyStoreResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1VerifyResponse = function (output, context) {
    return {
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        SignatureValid: output.SignatureValid !== undefined && output.SignatureValid !== null ? output.SignatureValid : undefined,
        SigningAlgorithm: output.SigningAlgorithm !== undefined && output.SigningAlgorithm !== null ? output.SigningAlgorithm : undefined,
    };
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