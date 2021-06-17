"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1CreateCustomKeyStoreCommand = exports.deserializeAws_json1_1CreateAliasCommand = exports.deserializeAws_json1_1ConnectCustomKeyStoreCommand = exports.deserializeAws_json1_1CancelKeyDeletionCommand = exports.serializeAws_json1_1VerifyCommand = exports.serializeAws_json1_1UpdateKeyDescriptionCommand = exports.serializeAws_json1_1UpdateCustomKeyStoreCommand = exports.serializeAws_json1_1UpdateAliasCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1SignCommand = exports.serializeAws_json1_1ScheduleKeyDeletionCommand = exports.serializeAws_json1_1RevokeGrantCommand = exports.serializeAws_json1_1RetireGrantCommand = exports.serializeAws_json1_1ReEncryptCommand = exports.serializeAws_json1_1PutKeyPolicyCommand = exports.serializeAws_json1_1ListRetirableGrantsCommand = exports.serializeAws_json1_1ListResourceTagsCommand = exports.serializeAws_json1_1ListKeysCommand = exports.serializeAws_json1_1ListKeyPoliciesCommand = exports.serializeAws_json1_1ListGrantsCommand = exports.serializeAws_json1_1ListAliasesCommand = exports.serializeAws_json1_1ImportKeyMaterialCommand = exports.serializeAws_json1_1GetPublicKeyCommand = exports.serializeAws_json1_1GetParametersForImportCommand = exports.serializeAws_json1_1GetKeyRotationStatusCommand = exports.serializeAws_json1_1GetKeyPolicyCommand = exports.serializeAws_json1_1GenerateRandomCommand = exports.serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand = exports.serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand = exports.serializeAws_json1_1GenerateDataKeyPairCommand = exports.serializeAws_json1_1GenerateDataKeyCommand = exports.serializeAws_json1_1EncryptCommand = exports.serializeAws_json1_1EnableKeyRotationCommand = exports.serializeAws_json1_1EnableKeyCommand = exports.serializeAws_json1_1DisconnectCustomKeyStoreCommand = exports.serializeAws_json1_1DisableKeyRotationCommand = exports.serializeAws_json1_1DisableKeyCommand = exports.serializeAws_json1_1DescribeKeyCommand = exports.serializeAws_json1_1DescribeCustomKeyStoresCommand = exports.serializeAws_json1_1DeleteImportedKeyMaterialCommand = exports.serializeAws_json1_1DeleteCustomKeyStoreCommand = exports.serializeAws_json1_1DeleteAliasCommand = exports.serializeAws_json1_1DecryptCommand = exports.serializeAws_json1_1CreateKeyCommand = exports.serializeAws_json1_1CreateGrantCommand = exports.serializeAws_json1_1CreateCustomKeyStoreCommand = exports.serializeAws_json1_1CreateAliasCommand = exports.serializeAws_json1_1ConnectCustomKeyStoreCommand = exports.serializeAws_json1_1CancelKeyDeletionCommand = void 0;
exports.deserializeAws_json1_1VerifyCommand = exports.deserializeAws_json1_1UpdateKeyDescriptionCommand = exports.deserializeAws_json1_1UpdateCustomKeyStoreCommand = exports.deserializeAws_json1_1UpdateAliasCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1SignCommand = exports.deserializeAws_json1_1ScheduleKeyDeletionCommand = exports.deserializeAws_json1_1RevokeGrantCommand = exports.deserializeAws_json1_1RetireGrantCommand = exports.deserializeAws_json1_1ReEncryptCommand = exports.deserializeAws_json1_1PutKeyPolicyCommand = exports.deserializeAws_json1_1ListRetirableGrantsCommand = exports.deserializeAws_json1_1ListResourceTagsCommand = exports.deserializeAws_json1_1ListKeysCommand = exports.deserializeAws_json1_1ListKeyPoliciesCommand = exports.deserializeAws_json1_1ListGrantsCommand = exports.deserializeAws_json1_1ListAliasesCommand = exports.deserializeAws_json1_1ImportKeyMaterialCommand = exports.deserializeAws_json1_1GetPublicKeyCommand = exports.deserializeAws_json1_1GetParametersForImportCommand = exports.deserializeAws_json1_1GetKeyRotationStatusCommand = exports.deserializeAws_json1_1GetKeyPolicyCommand = exports.deserializeAws_json1_1GenerateRandomCommand = exports.deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand = exports.deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand = exports.deserializeAws_json1_1GenerateDataKeyPairCommand = exports.deserializeAws_json1_1GenerateDataKeyCommand = exports.deserializeAws_json1_1EncryptCommand = exports.deserializeAws_json1_1EnableKeyRotationCommand = exports.deserializeAws_json1_1EnableKeyCommand = exports.deserializeAws_json1_1DisconnectCustomKeyStoreCommand = exports.deserializeAws_json1_1DisableKeyRotationCommand = exports.deserializeAws_json1_1DisableKeyCommand = exports.deserializeAws_json1_1DescribeKeyCommand = exports.deserializeAws_json1_1DescribeCustomKeyStoresCommand = exports.deserializeAws_json1_1DeleteImportedKeyMaterialCommand = exports.deserializeAws_json1_1DeleteCustomKeyStoreCommand = exports.deserializeAws_json1_1DeleteAliasCommand = exports.deserializeAws_json1_1DecryptCommand = exports.deserializeAws_json1_1CreateKeyCommand = exports.deserializeAws_json1_1CreateGrantCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CancelKeyDeletionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.CancelKeyDeletion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelKeyDeletionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelKeyDeletionCommand = serializeAws_json1_1CancelKeyDeletionCommand;
const serializeAws_json1_1ConnectCustomKeyStoreCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.ConnectCustomKeyStore",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ConnectCustomKeyStoreRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ConnectCustomKeyStoreCommand = serializeAws_json1_1ConnectCustomKeyStoreCommand;
const serializeAws_json1_1CreateAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.CreateAlias",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAliasCommand = serializeAws_json1_1CreateAliasCommand;
const serializeAws_json1_1CreateCustomKeyStoreCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.CreateCustomKeyStore",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCustomKeyStoreRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCustomKeyStoreCommand = serializeAws_json1_1CreateCustomKeyStoreCommand;
const serializeAws_json1_1CreateGrantCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.CreateGrant",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGrantRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateGrantCommand = serializeAws_json1_1CreateGrantCommand;
const serializeAws_json1_1CreateKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.CreateKey",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateKeyCommand = serializeAws_json1_1CreateKeyCommand;
const serializeAws_json1_1DecryptCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.Decrypt",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DecryptRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DecryptCommand = serializeAws_json1_1DecryptCommand;
const serializeAws_json1_1DeleteAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.DeleteAlias",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAliasCommand = serializeAws_json1_1DeleteAliasCommand;
const serializeAws_json1_1DeleteCustomKeyStoreCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.DeleteCustomKeyStore",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCustomKeyStoreRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteCustomKeyStoreCommand = serializeAws_json1_1DeleteCustomKeyStoreCommand;
const serializeAws_json1_1DeleteImportedKeyMaterialCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.DeleteImportedKeyMaterial",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteImportedKeyMaterialRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteImportedKeyMaterialCommand = serializeAws_json1_1DeleteImportedKeyMaterialCommand;
const serializeAws_json1_1DescribeCustomKeyStoresCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.DescribeCustomKeyStores",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCustomKeyStoresRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCustomKeyStoresCommand = serializeAws_json1_1DescribeCustomKeyStoresCommand;
const serializeAws_json1_1DescribeKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.DescribeKey",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeKeyCommand = serializeAws_json1_1DescribeKeyCommand;
const serializeAws_json1_1DisableKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.DisableKey",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableKeyCommand = serializeAws_json1_1DisableKeyCommand;
const serializeAws_json1_1DisableKeyRotationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.DisableKeyRotation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableKeyRotationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableKeyRotationCommand = serializeAws_json1_1DisableKeyRotationCommand;
const serializeAws_json1_1DisconnectCustomKeyStoreCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.DisconnectCustomKeyStore",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisconnectCustomKeyStoreRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisconnectCustomKeyStoreCommand = serializeAws_json1_1DisconnectCustomKeyStoreCommand;
const serializeAws_json1_1EnableKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.EnableKey",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableKeyCommand = serializeAws_json1_1EnableKeyCommand;
const serializeAws_json1_1EnableKeyRotationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.EnableKeyRotation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableKeyRotationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableKeyRotationCommand = serializeAws_json1_1EnableKeyRotationCommand;
const serializeAws_json1_1EncryptCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.Encrypt",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EncryptRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EncryptCommand = serializeAws_json1_1EncryptCommand;
const serializeAws_json1_1GenerateDataKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.GenerateDataKey",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateDataKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GenerateDataKeyCommand = serializeAws_json1_1GenerateDataKeyCommand;
const serializeAws_json1_1GenerateDataKeyPairCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.GenerateDataKeyPair",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateDataKeyPairRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GenerateDataKeyPairCommand = serializeAws_json1_1GenerateDataKeyPairCommand;
const serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.GenerateDataKeyPairWithoutPlaintext",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand = serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand;
const serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.GenerateDataKeyWithoutPlaintext",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateDataKeyWithoutPlaintextRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand = serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand;
const serializeAws_json1_1GenerateRandomCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.GenerateRandom",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateRandomRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GenerateRandomCommand = serializeAws_json1_1GenerateRandomCommand;
const serializeAws_json1_1GetKeyPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.GetKeyPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetKeyPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetKeyPolicyCommand = serializeAws_json1_1GetKeyPolicyCommand;
const serializeAws_json1_1GetKeyRotationStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.GetKeyRotationStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetKeyRotationStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetKeyRotationStatusCommand = serializeAws_json1_1GetKeyRotationStatusCommand;
const serializeAws_json1_1GetParametersForImportCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.GetParametersForImport",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetParametersForImportRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetParametersForImportCommand = serializeAws_json1_1GetParametersForImportCommand;
const serializeAws_json1_1GetPublicKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.GetPublicKey",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPublicKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPublicKeyCommand = serializeAws_json1_1GetPublicKeyCommand;
const serializeAws_json1_1ImportKeyMaterialCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.ImportKeyMaterial",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportKeyMaterialRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ImportKeyMaterialCommand = serializeAws_json1_1ImportKeyMaterialCommand;
const serializeAws_json1_1ListAliasesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.ListAliases",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAliasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAliasesCommand = serializeAws_json1_1ListAliasesCommand;
const serializeAws_json1_1ListGrantsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.ListGrants",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGrantsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListGrantsCommand = serializeAws_json1_1ListGrantsCommand;
const serializeAws_json1_1ListKeyPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.ListKeyPolicies",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListKeyPoliciesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListKeyPoliciesCommand = serializeAws_json1_1ListKeyPoliciesCommand;
const serializeAws_json1_1ListKeysCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.ListKeys",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListKeysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListKeysCommand = serializeAws_json1_1ListKeysCommand;
const serializeAws_json1_1ListResourceTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.ListResourceTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourceTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResourceTagsCommand = serializeAws_json1_1ListResourceTagsCommand;
const serializeAws_json1_1ListRetirableGrantsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.ListRetirableGrants",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRetirableGrantsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRetirableGrantsCommand = serializeAws_json1_1ListRetirableGrantsCommand;
const serializeAws_json1_1PutKeyPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.PutKeyPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutKeyPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutKeyPolicyCommand = serializeAws_json1_1PutKeyPolicyCommand;
const serializeAws_json1_1ReEncryptCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.ReEncrypt",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ReEncryptRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ReEncryptCommand = serializeAws_json1_1ReEncryptCommand;
const serializeAws_json1_1RetireGrantCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.RetireGrant",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RetireGrantRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RetireGrantCommand = serializeAws_json1_1RetireGrantCommand;
const serializeAws_json1_1RevokeGrantCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.RevokeGrant",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RevokeGrantRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RevokeGrantCommand = serializeAws_json1_1RevokeGrantCommand;
const serializeAws_json1_1ScheduleKeyDeletionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.ScheduleKeyDeletion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ScheduleKeyDeletionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ScheduleKeyDeletionCommand = serializeAws_json1_1ScheduleKeyDeletionCommand;
const serializeAws_json1_1SignCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.Sign",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SignRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SignCommand = serializeAws_json1_1SignCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.UpdateAlias",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAliasCommand = serializeAws_json1_1UpdateAliasCommand;
const serializeAws_json1_1UpdateCustomKeyStoreCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.UpdateCustomKeyStore",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCustomKeyStoreRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateCustomKeyStoreCommand = serializeAws_json1_1UpdateCustomKeyStoreCommand;
const serializeAws_json1_1UpdateKeyDescriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.UpdateKeyDescription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateKeyDescriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateKeyDescriptionCommand = serializeAws_json1_1UpdateKeyDescriptionCommand;
const serializeAws_json1_1VerifyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "TrentService.Verify",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1VerifyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1VerifyCommand = serializeAws_json1_1VerifyCommand;
const deserializeAws_json1_1CancelKeyDeletionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelKeyDeletionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelKeyDeletionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelKeyDeletionCommand = deserializeAws_json1_1CancelKeyDeletionCommand;
const deserializeAws_json1_1CancelKeyDeletionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ConnectCustomKeyStoreCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ConnectCustomKeyStoreCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConnectCustomKeyStoreResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ConnectCustomKeyStoreCommand = deserializeAws_json1_1ConnectCustomKeyStoreCommand;
const deserializeAws_json1_1ConnectCustomKeyStoreCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmClusterInvalidConfigurationException":
        case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmClusterNotActiveException":
        case "com.amazonaws.kms#CloudHsmClusterNotActiveException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomKeyStoreInvalidStateException":
        case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomKeyStoreNotFoundException":
        case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAliasCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAliasCommand = deserializeAws_json1_1CreateAliasCommand;
const deserializeAws_json1_1CreateAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.kms#AlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAliasNameException":
        case "com.amazonaws.kms#InvalidAliasNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidAliasNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.kms#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateCustomKeyStoreCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateCustomKeyStoreCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCustomKeyStoreResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCustomKeyStoreCommand = deserializeAws_json1_1CreateCustomKeyStoreCommand;
const deserializeAws_json1_1CreateCustomKeyStoreCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmClusterInUseException":
        case "com.amazonaws.kms#CloudHsmClusterInUseException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmClusterInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmClusterInvalidConfigurationException":
        case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmClusterNotActiveException":
        case "com.amazonaws.kms#CloudHsmClusterNotActiveException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmClusterNotFoundException":
        case "com.amazonaws.kms#CloudHsmClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomKeyStoreNameInUseException":
        case "com.amazonaws.kms#CustomKeyStoreNameInUseException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectTrustAnchorException":
        case "com.amazonaws.kms#IncorrectTrustAnchorException":
            response = {
                ...(await deserializeAws_json1_1IncorrectTrustAnchorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateGrantCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateGrantCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGrantResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateGrantCommand = deserializeAws_json1_1CreateGrantCommand;
const deserializeAws_json1_1CreateGrantCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledException":
        case "com.amazonaws.kms#DisabledException":
            response = {
                ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGrantTokenException":
        case "com.amazonaws.kms#InvalidGrantTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.kms#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateKeyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateKeyCommand = deserializeAws_json1_1CreateKeyCommand;
const deserializeAws_json1_1CreateKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmClusterInvalidConfigurationException":
        case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomKeyStoreInvalidStateException":
        case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomKeyStoreNotFoundException":
        case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.kms#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.kms#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagException":
        case "com.amazonaws.kms#TagException":
            response = {
                ...(await deserializeAws_json1_1TagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kms#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DecryptCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DecryptCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DecryptResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DecryptCommand = deserializeAws_json1_1DecryptCommand;
const deserializeAws_json1_1DecryptCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledException":
        case "com.amazonaws.kms#DisabledException":
            response = {
                ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectKeyException":
        case "com.amazonaws.kms#IncorrectKeyException":
            response = {
                ...(await deserializeAws_json1_1IncorrectKeyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCiphertextException":
        case "com.amazonaws.kms#InvalidCiphertextException":
            response = {
                ...(await deserializeAws_json1_1InvalidCiphertextExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGrantTokenException":
        case "com.amazonaws.kms#InvalidGrantTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyUsageException":
        case "com.amazonaws.kms#InvalidKeyUsageException":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeyUnavailableException":
        case "com.amazonaws.kms#KeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAliasCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAliasCommand = deserializeAws_json1_1DeleteAliasCommand;
const deserializeAws_json1_1DeleteAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteCustomKeyStoreCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteCustomKeyStoreCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteCustomKeyStoreResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteCustomKeyStoreCommand = deserializeAws_json1_1DeleteCustomKeyStoreCommand;
const deserializeAws_json1_1DeleteCustomKeyStoreCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomKeyStoreHasCMKsException":
        case "com.amazonaws.kms#CustomKeyStoreHasCMKsException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreHasCMKsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomKeyStoreInvalidStateException":
        case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomKeyStoreNotFoundException":
        case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteImportedKeyMaterialCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteImportedKeyMaterialCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteImportedKeyMaterialCommand = deserializeAws_json1_1DeleteImportedKeyMaterialCommand;
const deserializeAws_json1_1DeleteImportedKeyMaterialCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kms#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeCustomKeyStoresCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCustomKeyStoresCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCustomKeyStoresResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCustomKeyStoresCommand = deserializeAws_json1_1DescribeCustomKeyStoresCommand;
const deserializeAws_json1_1DescribeCustomKeyStoresCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomKeyStoreNotFoundException":
        case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeKeyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeKeyCommand = deserializeAws_json1_1DescribeKeyCommand;
const deserializeAws_json1_1DescribeKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisableKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableKeyCommand = deserializeAws_json1_1DisableKeyCommand;
const deserializeAws_json1_1DisableKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisableKeyRotationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableKeyRotationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableKeyRotationCommand = deserializeAws_json1_1DisableKeyRotationCommand;
const deserializeAws_json1_1DisableKeyRotationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledException":
        case "com.amazonaws.kms#DisabledException":
            response = {
                ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kms#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisconnectCustomKeyStoreCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisconnectCustomKeyStoreCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisconnectCustomKeyStoreResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisconnectCustomKeyStoreCommand = deserializeAws_json1_1DisconnectCustomKeyStoreCommand;
const deserializeAws_json1_1DisconnectCustomKeyStoreCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomKeyStoreInvalidStateException":
        case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomKeyStoreNotFoundException":
        case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1EnableKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableKeyCommand = deserializeAws_json1_1EnableKeyCommand;
const deserializeAws_json1_1EnableKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.kms#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1EnableKeyRotationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableKeyRotationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableKeyRotationCommand = deserializeAws_json1_1EnableKeyRotationCommand;
const deserializeAws_json1_1EnableKeyRotationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledException":
        case "com.amazonaws.kms#DisabledException":
            response = {
                ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kms#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1EncryptCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EncryptCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EncryptResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EncryptCommand = deserializeAws_json1_1EncryptCommand;
const deserializeAws_json1_1EncryptCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledException":
        case "com.amazonaws.kms#DisabledException":
            response = {
                ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGrantTokenException":
        case "com.amazonaws.kms#InvalidGrantTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyUsageException":
        case "com.amazonaws.kms#InvalidKeyUsageException":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeyUnavailableException":
        case "com.amazonaws.kms#KeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GenerateDataKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GenerateDataKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateDataKeyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GenerateDataKeyCommand = deserializeAws_json1_1GenerateDataKeyCommand;
const deserializeAws_json1_1GenerateDataKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledException":
        case "com.amazonaws.kms#DisabledException":
            response = {
                ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGrantTokenException":
        case "com.amazonaws.kms#InvalidGrantTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyUsageException":
        case "com.amazonaws.kms#InvalidKeyUsageException":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeyUnavailableException":
        case "com.amazonaws.kms#KeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GenerateDataKeyPairCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GenerateDataKeyPairCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateDataKeyPairResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GenerateDataKeyPairCommand = deserializeAws_json1_1GenerateDataKeyPairCommand;
const deserializeAws_json1_1GenerateDataKeyPairCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledException":
        case "com.amazonaws.kms#DisabledException":
            response = {
                ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGrantTokenException":
        case "com.amazonaws.kms#InvalidGrantTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyUsageException":
        case "com.amazonaws.kms#InvalidKeyUsageException":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeyUnavailableException":
        case "com.amazonaws.kms#KeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kms#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand = deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand;
const deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledException":
        case "com.amazonaws.kms#DisabledException":
            response = {
                ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGrantTokenException":
        case "com.amazonaws.kms#InvalidGrantTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyUsageException":
        case "com.amazonaws.kms#InvalidKeyUsageException":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeyUnavailableException":
        case "com.amazonaws.kms#KeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kms#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateDataKeyWithoutPlaintextResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand = deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand;
const deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledException":
        case "com.amazonaws.kms#DisabledException":
            response = {
                ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGrantTokenException":
        case "com.amazonaws.kms#InvalidGrantTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyUsageException":
        case "com.amazonaws.kms#InvalidKeyUsageException":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeyUnavailableException":
        case "com.amazonaws.kms#KeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GenerateRandomCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GenerateRandomCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateRandomResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GenerateRandomCommand = deserializeAws_json1_1GenerateRandomCommand;
const deserializeAws_json1_1GenerateRandomCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomKeyStoreInvalidStateException":
        case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomKeyStoreNotFoundException":
        case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetKeyPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetKeyPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetKeyPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetKeyPolicyCommand = deserializeAws_json1_1GetKeyPolicyCommand;
const deserializeAws_json1_1GetKeyPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetKeyRotationStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetKeyRotationStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetKeyRotationStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetKeyRotationStatusCommand = deserializeAws_json1_1GetKeyRotationStatusCommand;
const deserializeAws_json1_1GetKeyRotationStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kms#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetParametersForImportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetParametersForImportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetParametersForImportResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetParametersForImportCommand = deserializeAws_json1_1GetParametersForImportCommand;
const deserializeAws_json1_1GetParametersForImportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kms#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetPublicKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPublicKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPublicKeyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPublicKeyCommand = deserializeAws_json1_1GetPublicKeyCommand;
const deserializeAws_json1_1GetPublicKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledException":
        case "com.amazonaws.kms#DisabledException":
            response = {
                ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGrantTokenException":
        case "com.amazonaws.kms#InvalidGrantTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyUsageException":
        case "com.amazonaws.kms#InvalidKeyUsageException":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeyUnavailableException":
        case "com.amazonaws.kms#KeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kms#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ImportKeyMaterialCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ImportKeyMaterialCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportKeyMaterialResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ImportKeyMaterialCommand = deserializeAws_json1_1ImportKeyMaterialCommand;
const deserializeAws_json1_1ImportKeyMaterialCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ExpiredImportTokenException":
        case "com.amazonaws.kms#ExpiredImportTokenException":
            response = {
                ...(await deserializeAws_json1_1ExpiredImportTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectKeyMaterialException":
        case "com.amazonaws.kms#IncorrectKeyMaterialException":
            response = {
                ...(await deserializeAws_json1_1IncorrectKeyMaterialExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCiphertextException":
        case "com.amazonaws.kms#InvalidCiphertextException":
            response = {
                ...(await deserializeAws_json1_1InvalidCiphertextExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidImportTokenException":
        case "com.amazonaws.kms#InvalidImportTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidImportTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kms#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListAliasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAliasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAliasesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAliasesCommand = deserializeAws_json1_1ListAliasesCommand;
const deserializeAws_json1_1ListAliasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMarkerException":
        case "com.amazonaws.kms#InvalidMarkerException":
            response = {
                ...(await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListGrantsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListGrantsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGrantsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListGrantsCommand = deserializeAws_json1_1ListGrantsCommand;
const deserializeAws_json1_1ListGrantsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGrantIdException":
        case "com.amazonaws.kms#InvalidGrantIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidGrantIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMarkerException":
        case "com.amazonaws.kms#InvalidMarkerException":
            response = {
                ...(await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListKeyPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListKeyPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListKeyPoliciesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListKeyPoliciesCommand = deserializeAws_json1_1ListKeyPoliciesCommand;
const deserializeAws_json1_1ListKeyPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListKeysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListKeysResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListKeysCommand = deserializeAws_json1_1ListKeysCommand;
const deserializeAws_json1_1ListKeysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMarkerException":
        case "com.amazonaws.kms#InvalidMarkerException":
            response = {
                ...(await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListResourceTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResourceTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourceTagsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResourceTagsCommand = deserializeAws_json1_1ListResourceTagsCommand;
const deserializeAws_json1_1ListResourceTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMarkerException":
        case "com.amazonaws.kms#InvalidMarkerException":
            response = {
                ...(await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListRetirableGrantsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRetirableGrantsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGrantsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRetirableGrantsCommand = deserializeAws_json1_1ListRetirableGrantsCommand;
const deserializeAws_json1_1ListRetirableGrantsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMarkerException":
        case "com.amazonaws.kms#InvalidMarkerException":
            response = {
                ...(await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutKeyPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutKeyPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutKeyPolicyCommand = deserializeAws_json1_1PutKeyPolicyCommand;
const deserializeAws_json1_1PutKeyPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.kms#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.kms#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.kms#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ReEncryptCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ReEncryptCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ReEncryptResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ReEncryptCommand = deserializeAws_json1_1ReEncryptCommand;
const deserializeAws_json1_1ReEncryptCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledException":
        case "com.amazonaws.kms#DisabledException":
            response = {
                ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectKeyException":
        case "com.amazonaws.kms#IncorrectKeyException":
            response = {
                ...(await deserializeAws_json1_1IncorrectKeyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCiphertextException":
        case "com.amazonaws.kms#InvalidCiphertextException":
            response = {
                ...(await deserializeAws_json1_1InvalidCiphertextExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGrantTokenException":
        case "com.amazonaws.kms#InvalidGrantTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyUsageException":
        case "com.amazonaws.kms#InvalidKeyUsageException":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeyUnavailableException":
        case "com.amazonaws.kms#KeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RetireGrantCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RetireGrantCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RetireGrantCommand = deserializeAws_json1_1RetireGrantCommand;
const deserializeAws_json1_1RetireGrantCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGrantIdException":
        case "com.amazonaws.kms#InvalidGrantIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidGrantIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGrantTokenException":
        case "com.amazonaws.kms#InvalidGrantTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RevokeGrantCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RevokeGrantCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RevokeGrantCommand = deserializeAws_json1_1RevokeGrantCommand;
const deserializeAws_json1_1RevokeGrantCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGrantIdException":
        case "com.amazonaws.kms#InvalidGrantIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidGrantIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ScheduleKeyDeletionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ScheduleKeyDeletionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ScheduleKeyDeletionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ScheduleKeyDeletionCommand = deserializeAws_json1_1ScheduleKeyDeletionCommand;
const deserializeAws_json1_1ScheduleKeyDeletionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SignCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SignCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SignResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SignCommand = deserializeAws_json1_1SignCommand;
const deserializeAws_json1_1SignCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledException":
        case "com.amazonaws.kms#DisabledException":
            response = {
                ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGrantTokenException":
        case "com.amazonaws.kms#InvalidGrantTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyUsageException":
        case "com.amazonaws.kms#InvalidKeyUsageException":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeyUnavailableException":
        case "com.amazonaws.kms#KeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
const deserializeAws_json1_1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.kms#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagException":
        case "com.amazonaws.kms#TagException":
            response = {
                ...(await deserializeAws_json1_1TagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagException":
        case "com.amazonaws.kms#TagException":
            response = {
                ...(await deserializeAws_json1_1TagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateAliasCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAliasCommand = deserializeAws_json1_1UpdateAliasCommand;
const deserializeAws_json1_1UpdateAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.kms#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateCustomKeyStoreCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateCustomKeyStoreCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCustomKeyStoreResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateCustomKeyStoreCommand = deserializeAws_json1_1UpdateCustomKeyStoreCommand;
const deserializeAws_json1_1UpdateCustomKeyStoreCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudHsmClusterInvalidConfigurationException":
        case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmClusterNotActiveException":
        case "com.amazonaws.kms#CloudHsmClusterNotActiveException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmClusterNotFoundException":
        case "com.amazonaws.kms#CloudHsmClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudHsmClusterNotRelatedException":
        case "com.amazonaws.kms#CloudHsmClusterNotRelatedException":
            response = {
                ...(await deserializeAws_json1_1CloudHsmClusterNotRelatedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomKeyStoreInvalidStateException":
        case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomKeyStoreNameInUseException":
        case "com.amazonaws.kms#CustomKeyStoreNameInUseException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomKeyStoreNotFoundException":
        case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
            response = {
                ...(await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateKeyDescriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateKeyDescriptionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateKeyDescriptionCommand = deserializeAws_json1_1UpdateKeyDescriptionCommand;
const deserializeAws_json1_1UpdateKeyDescriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.kms#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1VerifyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1VerifyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VerifyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1VerifyCommand = deserializeAws_json1_1VerifyCommand;
const deserializeAws_json1_1VerifyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazonaws.kms#DependencyTimeoutException":
            response = {
                ...(await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledException":
        case "com.amazonaws.kms#DisabledException":
            response = {
                ...(await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGrantTokenException":
        case "com.amazonaws.kms#InvalidGrantTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyUsageException":
        case "com.amazonaws.kms#InvalidKeyUsageException":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeyUnavailableException":
        case "com.amazonaws.kms#KeyUnavailableException":
            response = {
                ...(await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInternalException":
        case "com.amazonaws.kms#KMSInternalException":
            response = {
                ...(await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidSignatureException":
        case "com.amazonaws.kms#KMSInvalidSignatureException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidSignatureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.kms#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.kms#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AlreadyExistsException(body, context);
    const contents = {
        name: "AlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CloudHsmClusterInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmClusterInUseException(body, context);
    const contents = {
        name: "CloudHsmClusterInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmClusterInvalidConfigurationException(body, context);
    const contents = {
        name: "CloudHsmClusterInvalidConfigurationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmClusterNotActiveException(body, context);
    const contents = {
        name: "CloudHsmClusterNotActiveException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmClusterNotFoundException(body, context);
    const contents = {
        name: "CloudHsmClusterNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CloudHsmClusterNotRelatedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmClusterNotRelatedException(body, context);
    const contents = {
        name: "CloudHsmClusterNotRelatedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CustomKeyStoreHasCMKsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CustomKeyStoreHasCMKsException(body, context);
    const contents = {
        name: "CustomKeyStoreHasCMKsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CustomKeyStoreInvalidStateException(body, context);
    const contents = {
        name: "CustomKeyStoreInvalidStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CustomKeyStoreNameInUseException(body, context);
    const contents = {
        name: "CustomKeyStoreNameInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CustomKeyStoreNotFoundException(body, context);
    const contents = {
        name: "CustomKeyStoreNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DependencyTimeoutExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DependencyTimeoutException(body, context);
    const contents = {
        name: "DependencyTimeoutException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DisabledException(body, context);
    const contents = {
        name: "DisabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ExpiredImportTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExpiredImportTokenException(body, context);
    const contents = {
        name: "ExpiredImportTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IncorrectKeyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IncorrectKeyException(body, context);
    const contents = {
        name: "IncorrectKeyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IncorrectKeyMaterialExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IncorrectKeyMaterialException(body, context);
    const contents = {
        name: "IncorrectKeyMaterialException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IncorrectTrustAnchorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IncorrectTrustAnchorException(body, context);
    const contents = {
        name: "IncorrectTrustAnchorException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidAliasNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAliasNameException(body, context);
    const contents = {
        name: "InvalidAliasNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArnException(body, context);
    const contents = {
        name: "InvalidArnException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidCiphertextExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCiphertextException(body, context);
    const contents = {
        name: "InvalidCiphertextException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidGrantIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidGrantIdException(body, context);
    const contents = {
        name: "InvalidGrantIdException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidGrantTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidGrantTokenException(body, context);
    const contents = {
        name: "InvalidGrantTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidImportTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidImportTokenException(body, context);
    const contents = {
        name: "InvalidImportTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidKeyUsageExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidKeyUsageException(body, context);
    const contents = {
        name: "InvalidKeyUsageException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidMarkerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidMarkerException(body, context);
    const contents = {
        name: "InvalidMarkerException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1KeyUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KeyUnavailableException(body, context);
    const contents = {
        name: "KeyUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1KMSInternalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSInternalException(body, context);
    const contents = {
        name: "KMSInternalException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1KMSInvalidSignatureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSInvalidSignatureException(body, context);
    const contents = {
        name: "KMSInvalidSignatureException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1KMSInvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSInvalidStateException(body, context);
    const contents = {
        name: "KMSInvalidStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MalformedPolicyDocumentException(body, context);
    const contents = {
        name: "MalformedPolicyDocumentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotFoundException(body, context);
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TagExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagException(body, context);
    const contents = {
        name: "TagException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedOperationException(body, context);
    const contents = {
        name: "UnsupportedOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1CancelKeyDeletionRequest = (input, context) => {
    return {
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    };
};
const serializeAws_json1_1ConnectCustomKeyStoreRequest = (input, context) => {
    return {
        ...(input.CustomKeyStoreId !== undefined &&
            input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }),
    };
};
const serializeAws_json1_1CreateAliasRequest = (input, context) => {
    return {
        ...(input.AliasName !== undefined && input.AliasName !== null && { AliasName: input.AliasName }),
        ...(input.TargetKeyId !== undefined && input.TargetKeyId !== null && { TargetKeyId: input.TargetKeyId }),
    };
};
const serializeAws_json1_1CreateCustomKeyStoreRequest = (input, context) => {
    return {
        ...(input.CloudHsmClusterId !== undefined &&
            input.CloudHsmClusterId !== null && { CloudHsmClusterId: input.CloudHsmClusterId }),
        ...(input.CustomKeyStoreName !== undefined &&
            input.CustomKeyStoreName !== null && { CustomKeyStoreName: input.CustomKeyStoreName }),
        ...(input.KeyStorePassword !== undefined &&
            input.KeyStorePassword !== null && { KeyStorePassword: input.KeyStorePassword }),
        ...(input.TrustAnchorCertificate !== undefined &&
            input.TrustAnchorCertificate !== null && { TrustAnchorCertificate: input.TrustAnchorCertificate }),
    };
};
const serializeAws_json1_1CreateGrantRequest = (input, context) => {
    return {
        ...(input.Constraints !== undefined &&
            input.Constraints !== null && { Constraints: serializeAws_json1_1GrantConstraints(input.Constraints, context) }),
        ...(input.GrantTokens !== undefined &&
            input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
        ...(input.GranteePrincipal !== undefined &&
            input.GranteePrincipal !== null && { GranteePrincipal: input.GranteePrincipal }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Operations !== undefined &&
            input.Operations !== null && { Operations: serializeAws_json1_1GrantOperationList(input.Operations, context) }),
        ...(input.RetiringPrincipal !== undefined &&
            input.RetiringPrincipal !== null && { RetiringPrincipal: input.RetiringPrincipal }),
    };
};
const serializeAws_json1_1CreateKeyRequest = (input, context) => {
    return {
        ...(input.BypassPolicyLockoutSafetyCheck !== undefined &&
            input.BypassPolicyLockoutSafetyCheck !== null && {
            BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck,
        }),
        ...(input.CustomKeyStoreId !== undefined &&
            input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }),
        ...(input.CustomerMasterKeySpec !== undefined &&
            input.CustomerMasterKeySpec !== null && { CustomerMasterKeySpec: input.CustomerMasterKeySpec }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.KeyUsage !== undefined && input.KeyUsage !== null && { KeyUsage: input.KeyUsage }),
        ...(input.Origin !== undefined && input.Origin !== null && { Origin: input.Origin }),
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1DecryptRequest = (input, context) => {
    return {
        ...(input.CiphertextBlob !== undefined &&
            input.CiphertextBlob !== null && { CiphertextBlob: context.base64Encoder(input.CiphertextBlob) }),
        ...(input.EncryptionAlgorithm !== undefined &&
            input.EncryptionAlgorithm !== null && { EncryptionAlgorithm: input.EncryptionAlgorithm }),
        ...(input.EncryptionContext !== undefined &&
            input.EncryptionContext !== null && {
            EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
        }),
        ...(input.GrantTokens !== undefined &&
            input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    };
};
const serializeAws_json1_1DeleteAliasRequest = (input, context) => {
    return {
        ...(input.AliasName !== undefined && input.AliasName !== null && { AliasName: input.AliasName }),
    };
};
const serializeAws_json1_1DeleteCustomKeyStoreRequest = (input, context) => {
    return {
        ...(input.CustomKeyStoreId !== undefined &&
            input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }),
    };
};
const serializeAws_json1_1DeleteImportedKeyMaterialRequest = (input, context) => {
    return {
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    };
};
const serializeAws_json1_1DescribeCustomKeyStoresRequest = (input, context) => {
    return {
        ...(input.CustomKeyStoreId !== undefined &&
            input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }),
        ...(input.CustomKeyStoreName !== undefined &&
            input.CustomKeyStoreName !== null && { CustomKeyStoreName: input.CustomKeyStoreName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1DescribeKeyRequest = (input, context) => {
    return {
        ...(input.GrantTokens !== undefined &&
            input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    };
};
const serializeAws_json1_1DisableKeyRequest = (input, context) => {
    return {
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    };
};
const serializeAws_json1_1DisableKeyRotationRequest = (input, context) => {
    return {
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    };
};
const serializeAws_json1_1DisconnectCustomKeyStoreRequest = (input, context) => {
    return {
        ...(input.CustomKeyStoreId !== undefined &&
            input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }),
    };
};
const serializeAws_json1_1EnableKeyRequest = (input, context) => {
    return {
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    };
};
const serializeAws_json1_1EnableKeyRotationRequest = (input, context) => {
    return {
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    };
};
const serializeAws_json1_1EncryptionContextType = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1EncryptRequest = (input, context) => {
    return {
        ...(input.EncryptionAlgorithm !== undefined &&
            input.EncryptionAlgorithm !== null && { EncryptionAlgorithm: input.EncryptionAlgorithm }),
        ...(input.EncryptionContext !== undefined &&
            input.EncryptionContext !== null && {
            EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
        }),
        ...(input.GrantTokens !== undefined &&
            input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.Plaintext !== undefined &&
            input.Plaintext !== null && { Plaintext: context.base64Encoder(input.Plaintext) }),
    };
};
const serializeAws_json1_1GenerateDataKeyPairRequest = (input, context) => {
    return {
        ...(input.EncryptionContext !== undefined &&
            input.EncryptionContext !== null && {
            EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
        }),
        ...(input.GrantTokens !== undefined &&
            input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.KeyPairSpec !== undefined && input.KeyPairSpec !== null && { KeyPairSpec: input.KeyPairSpec }),
    };
};
const serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextRequest = (input, context) => {
    return {
        ...(input.EncryptionContext !== undefined &&
            input.EncryptionContext !== null && {
            EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
        }),
        ...(input.GrantTokens !== undefined &&
            input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.KeyPairSpec !== undefined && input.KeyPairSpec !== null && { KeyPairSpec: input.KeyPairSpec }),
    };
};
const serializeAws_json1_1GenerateDataKeyRequest = (input, context) => {
    return {
        ...(input.EncryptionContext !== undefined &&
            input.EncryptionContext !== null && {
            EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
        }),
        ...(input.GrantTokens !== undefined &&
            input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.KeySpec !== undefined && input.KeySpec !== null && { KeySpec: input.KeySpec }),
        ...(input.NumberOfBytes !== undefined && input.NumberOfBytes !== null && { NumberOfBytes: input.NumberOfBytes }),
    };
};
const serializeAws_json1_1GenerateDataKeyWithoutPlaintextRequest = (input, context) => {
    return {
        ...(input.EncryptionContext !== undefined &&
            input.EncryptionContext !== null && {
            EncryptionContext: serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context),
        }),
        ...(input.GrantTokens !== undefined &&
            input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.KeySpec !== undefined && input.KeySpec !== null && { KeySpec: input.KeySpec }),
        ...(input.NumberOfBytes !== undefined && input.NumberOfBytes !== null && { NumberOfBytes: input.NumberOfBytes }),
    };
};
const serializeAws_json1_1GenerateRandomRequest = (input, context) => {
    return {
        ...(input.CustomKeyStoreId !== undefined &&
            input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }),
        ...(input.NumberOfBytes !== undefined && input.NumberOfBytes !== null && { NumberOfBytes: input.NumberOfBytes }),
    };
};
const serializeAws_json1_1GetKeyPolicyRequest = (input, context) => {
    return {
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
    };
};
const serializeAws_json1_1GetKeyRotationStatusRequest = (input, context) => {
    return {
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    };
};
const serializeAws_json1_1GetParametersForImportRequest = (input, context) => {
    return {
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.WrappingAlgorithm !== undefined &&
            input.WrappingAlgorithm !== null && { WrappingAlgorithm: input.WrappingAlgorithm }),
        ...(input.WrappingKeySpec !== undefined &&
            input.WrappingKeySpec !== null && { WrappingKeySpec: input.WrappingKeySpec }),
    };
};
const serializeAws_json1_1GetPublicKeyRequest = (input, context) => {
    return {
        ...(input.GrantTokens !== undefined &&
            input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    };
};
const serializeAws_json1_1GrantConstraints = (input, context) => {
    return {
        ...(input.EncryptionContextEquals !== undefined &&
            input.EncryptionContextEquals !== null && {
            EncryptionContextEquals: serializeAws_json1_1EncryptionContextType(input.EncryptionContextEquals, context),
        }),
        ...(input.EncryptionContextSubset !== undefined &&
            input.EncryptionContextSubset !== null && {
            EncryptionContextSubset: serializeAws_json1_1EncryptionContextType(input.EncryptionContextSubset, context),
        }),
    };
};
const serializeAws_json1_1GrantOperationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GrantTokenList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ImportKeyMaterialRequest = (input, context) => {
    return {
        ...(input.EncryptedKeyMaterial !== undefined &&
            input.EncryptedKeyMaterial !== null && {
            EncryptedKeyMaterial: context.base64Encoder(input.EncryptedKeyMaterial),
        }),
        ...(input.ExpirationModel !== undefined &&
            input.ExpirationModel !== null && { ExpirationModel: input.ExpirationModel }),
        ...(input.ImportToken !== undefined &&
            input.ImportToken !== null && { ImportToken: context.base64Encoder(input.ImportToken) }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.ValidTo !== undefined &&
            input.ValidTo !== null && { ValidTo: Math.round(input.ValidTo.getTime() / 1000) }),
    };
};
const serializeAws_json1_1ListAliasesRequest = (input, context) => {
    return {
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1ListGrantsRequest = (input, context) => {
    return {
        ...(input.GrantId !== undefined && input.GrantId !== null && { GrantId: input.GrantId }),
        ...(input.GranteePrincipal !== undefined &&
            input.GranteePrincipal !== null && { GranteePrincipal: input.GranteePrincipal }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1ListKeyPoliciesRequest = (input, context) => {
    return {
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1ListKeysRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1ListResourceTagsRequest = (input, context) => {
    return {
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1ListRetirableGrantsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.RetiringPrincipal !== undefined &&
            input.RetiringPrincipal !== null && { RetiringPrincipal: input.RetiringPrincipal }),
    };
};
const serializeAws_json1_1PutKeyPolicyRequest = (input, context) => {
    return {
        ...(input.BypassPolicyLockoutSafetyCheck !== undefined &&
            input.BypassPolicyLockoutSafetyCheck !== null && {
            BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck,
        }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
        ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
    };
};
const serializeAws_json1_1ReEncryptRequest = (input, context) => {
    return {
        ...(input.CiphertextBlob !== undefined &&
            input.CiphertextBlob !== null && { CiphertextBlob: context.base64Encoder(input.CiphertextBlob) }),
        ...(input.DestinationEncryptionAlgorithm !== undefined &&
            input.DestinationEncryptionAlgorithm !== null && {
            DestinationEncryptionAlgorithm: input.DestinationEncryptionAlgorithm,
        }),
        ...(input.DestinationEncryptionContext !== undefined &&
            input.DestinationEncryptionContext !== null && {
            DestinationEncryptionContext: serializeAws_json1_1EncryptionContextType(input.DestinationEncryptionContext, context),
        }),
        ...(input.DestinationKeyId !== undefined &&
            input.DestinationKeyId !== null && { DestinationKeyId: input.DestinationKeyId }),
        ...(input.GrantTokens !== undefined &&
            input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
        ...(input.SourceEncryptionAlgorithm !== undefined &&
            input.SourceEncryptionAlgorithm !== null && { SourceEncryptionAlgorithm: input.SourceEncryptionAlgorithm }),
        ...(input.SourceEncryptionContext !== undefined &&
            input.SourceEncryptionContext !== null && {
            SourceEncryptionContext: serializeAws_json1_1EncryptionContextType(input.SourceEncryptionContext, context),
        }),
        ...(input.SourceKeyId !== undefined && input.SourceKeyId !== null && { SourceKeyId: input.SourceKeyId }),
    };
};
const serializeAws_json1_1RetireGrantRequest = (input, context) => {
    return {
        ...(input.GrantId !== undefined && input.GrantId !== null && { GrantId: input.GrantId }),
        ...(input.GrantToken !== undefined && input.GrantToken !== null && { GrantToken: input.GrantToken }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    };
};
const serializeAws_json1_1RevokeGrantRequest = (input, context) => {
    return {
        ...(input.GrantId !== undefined && input.GrantId !== null && { GrantId: input.GrantId }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    };
};
const serializeAws_json1_1ScheduleKeyDeletionRequest = (input, context) => {
    return {
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.PendingWindowInDays !== undefined &&
            input.PendingWindowInDays !== null && { PendingWindowInDays: input.PendingWindowInDays }),
    };
};
const serializeAws_json1_1SignRequest = (input, context) => {
    return {
        ...(input.GrantTokens !== undefined &&
            input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.Message !== undefined && input.Message !== null && { Message: context.base64Encoder(input.Message) }),
        ...(input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType }),
        ...(input.SigningAlgorithm !== undefined &&
            input.SigningAlgorithm !== null && { SigningAlgorithm: input.SigningAlgorithm }),
    };
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
        ...(input.TagValue !== undefined && input.TagValue !== null && { TagValue: input.TagValue }),
    };
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateAliasRequest = (input, context) => {
    return {
        ...(input.AliasName !== undefined && input.AliasName !== null && { AliasName: input.AliasName }),
        ...(input.TargetKeyId !== undefined && input.TargetKeyId !== null && { TargetKeyId: input.TargetKeyId }),
    };
};
const serializeAws_json1_1UpdateCustomKeyStoreRequest = (input, context) => {
    return {
        ...(input.CloudHsmClusterId !== undefined &&
            input.CloudHsmClusterId !== null && { CloudHsmClusterId: input.CloudHsmClusterId }),
        ...(input.CustomKeyStoreId !== undefined &&
            input.CustomKeyStoreId !== null && { CustomKeyStoreId: input.CustomKeyStoreId }),
        ...(input.KeyStorePassword !== undefined &&
            input.KeyStorePassword !== null && { KeyStorePassword: input.KeyStorePassword }),
        ...(input.NewCustomKeyStoreName !== undefined &&
            input.NewCustomKeyStoreName !== null && { NewCustomKeyStoreName: input.NewCustomKeyStoreName }),
    };
};
const serializeAws_json1_1UpdateKeyDescriptionRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    };
};
const serializeAws_json1_1VerifyRequest = (input, context) => {
    return {
        ...(input.GrantTokens !== undefined &&
            input.GrantTokens !== null && { GrantTokens: serializeAws_json1_1GrantTokenList(input.GrantTokens, context) }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.Message !== undefined && input.Message !== null && { Message: context.base64Encoder(input.Message) }),
        ...(input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType }),
        ...(input.Signature !== undefined &&
            input.Signature !== null && { Signature: context.base64Encoder(input.Signature) }),
        ...(input.SigningAlgorithm !== undefined &&
            input.SigningAlgorithm !== null && { SigningAlgorithm: input.SigningAlgorithm }),
    };
};
const deserializeAws_json1_1AliasList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AliasListEntry(entry, context);
    });
};
const deserializeAws_json1_1AliasListEntry = (output, context) => {
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
const deserializeAws_json1_1AlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CancelKeyDeletionResponse = (output, context) => {
    return {
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    };
};
const deserializeAws_json1_1CloudHsmClusterInUseException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CloudHsmClusterInvalidConfigurationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CloudHsmClusterNotActiveException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CloudHsmClusterNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CloudHsmClusterNotRelatedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ConnectCustomKeyStoreResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateCustomKeyStoreResponse = (output, context) => {
    return {
        CustomKeyStoreId: output.CustomKeyStoreId !== undefined && output.CustomKeyStoreId !== null ? output.CustomKeyStoreId : undefined,
    };
};
const deserializeAws_json1_1CreateGrantResponse = (output, context) => {
    return {
        GrantId: output.GrantId !== undefined && output.GrantId !== null ? output.GrantId : undefined,
        GrantToken: output.GrantToken !== undefined && output.GrantToken !== null ? output.GrantToken : undefined,
    };
};
const deserializeAws_json1_1CreateKeyResponse = (output, context) => {
    return {
        KeyMetadata: output.KeyMetadata !== undefined && output.KeyMetadata !== null
            ? deserializeAws_json1_1KeyMetadata(output.KeyMetadata, context)
            : undefined,
    };
};
const deserializeAws_json1_1CustomKeyStoreHasCMKsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CustomKeyStoreInvalidStateException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CustomKeyStoreNameInUseException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CustomKeyStoreNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CustomKeyStoresList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CustomKeyStoresListEntry(entry, context);
    });
};
const deserializeAws_json1_1CustomKeyStoresListEntry = (output, context) => {
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
const deserializeAws_json1_1DecryptResponse = (output, context) => {
    return {
        EncryptionAlgorithm: output.EncryptionAlgorithm !== undefined && output.EncryptionAlgorithm !== null
            ? output.EncryptionAlgorithm
            : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        Plaintext: output.Plaintext !== undefined && output.Plaintext !== null ? context.base64Decoder(output.Plaintext) : undefined,
    };
};
const deserializeAws_json1_1DeleteCustomKeyStoreResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DependencyTimeoutException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DescribeCustomKeyStoresResponse = (output, context) => {
    return {
        CustomKeyStores: output.CustomKeyStores !== undefined && output.CustomKeyStores !== null
            ? deserializeAws_json1_1CustomKeyStoresList(output.CustomKeyStores, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
    };
};
const deserializeAws_json1_1DescribeKeyResponse = (output, context) => {
    return {
        KeyMetadata: output.KeyMetadata !== undefined && output.KeyMetadata !== null
            ? deserializeAws_json1_1KeyMetadata(output.KeyMetadata, context)
            : undefined,
    };
};
const deserializeAws_json1_1DisabledException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DisconnectCustomKeyStoreResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1EncryptionAlgorithmSpecList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1EncryptionContextType = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1EncryptResponse = (output, context) => {
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
const deserializeAws_json1_1ExpiredImportTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1GenerateDataKeyPairResponse = (output, context) => {
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
const deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextResponse = (output, context) => {
    return {
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        KeyPairSpec: output.KeyPairSpec !== undefined && output.KeyPairSpec !== null ? output.KeyPairSpec : undefined,
        PrivateKeyCiphertextBlob: output.PrivateKeyCiphertextBlob !== undefined && output.PrivateKeyCiphertextBlob !== null
            ? context.base64Decoder(output.PrivateKeyCiphertextBlob)
            : undefined,
        PublicKey: output.PublicKey !== undefined && output.PublicKey !== null ? context.base64Decoder(output.PublicKey) : undefined,
    };
};
const deserializeAws_json1_1GenerateDataKeyResponse = (output, context) => {
    return {
        CiphertextBlob: output.CiphertextBlob !== undefined && output.CiphertextBlob !== null
            ? context.base64Decoder(output.CiphertextBlob)
            : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        Plaintext: output.Plaintext !== undefined && output.Plaintext !== null ? context.base64Decoder(output.Plaintext) : undefined,
    };
};
const deserializeAws_json1_1GenerateDataKeyWithoutPlaintextResponse = (output, context) => {
    return {
        CiphertextBlob: output.CiphertextBlob !== undefined && output.CiphertextBlob !== null
            ? context.base64Decoder(output.CiphertextBlob)
            : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    };
};
const deserializeAws_json1_1GenerateRandomResponse = (output, context) => {
    return {
        Plaintext: output.Plaintext !== undefined && output.Plaintext !== null ? context.base64Decoder(output.Plaintext) : undefined,
    };
};
const deserializeAws_json1_1GetKeyPolicyResponse = (output, context) => {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
    };
};
const deserializeAws_json1_1GetKeyRotationStatusResponse = (output, context) => {
    return {
        KeyRotationEnabled: output.KeyRotationEnabled !== undefined && output.KeyRotationEnabled !== null
            ? output.KeyRotationEnabled
            : undefined,
    };
};
const deserializeAws_json1_1GetParametersForImportResponse = (output, context) => {
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
const deserializeAws_json1_1GetPublicKeyResponse = (output, context) => {
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
const deserializeAws_json1_1GrantConstraints = (output, context) => {
    return {
        EncryptionContextEquals: output.EncryptionContextEquals !== undefined && output.EncryptionContextEquals !== null
            ? deserializeAws_json1_1EncryptionContextType(output.EncryptionContextEquals, context)
            : undefined,
        EncryptionContextSubset: output.EncryptionContextSubset !== undefined && output.EncryptionContextSubset !== null
            ? deserializeAws_json1_1EncryptionContextType(output.EncryptionContextSubset, context)
            : undefined,
    };
};
const deserializeAws_json1_1GrantList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GrantListEntry(entry, context);
    });
};
const deserializeAws_json1_1GrantListEntry = (output, context) => {
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
const deserializeAws_json1_1GrantOperationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ImportKeyMaterialResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1IncorrectKeyException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1IncorrectKeyMaterialException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1IncorrectTrustAnchorException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidAliasNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidArnException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidCiphertextException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidGrantIdException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidGrantTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidImportTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidKeyUsageException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidMarkerException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1KeyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1KeyListEntry(entry, context);
    });
};
const deserializeAws_json1_1KeyListEntry = (output, context) => {
    return {
        KeyArn: output.KeyArn !== undefined && output.KeyArn !== null ? output.KeyArn : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    };
};
const deserializeAws_json1_1KeyMetadata = (output, context) => {
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
const deserializeAws_json1_1KeyUnavailableException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1KMSInternalException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1KMSInvalidSignatureException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1KMSInvalidStateException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListAliasesResponse = (output, context) => {
    return {
        Aliases: output.Aliases !== undefined && output.Aliases !== null
            ? deserializeAws_json1_1AliasList(output.Aliases, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
    };
};
const deserializeAws_json1_1ListGrantsResponse = (output, context) => {
    return {
        Grants: output.Grants !== undefined && output.Grants !== null
            ? deserializeAws_json1_1GrantList(output.Grants, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
    };
};
const deserializeAws_json1_1ListKeyPoliciesResponse = (output, context) => {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        PolicyNames: output.PolicyNames !== undefined && output.PolicyNames !== null
            ? deserializeAws_json1_1PolicyNameList(output.PolicyNames, context)
            : undefined,
        Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
    };
};
const deserializeAws_json1_1ListKeysResponse = (output, context) => {
    return {
        Keys: output.Keys !== undefined && output.Keys !== null
            ? deserializeAws_json1_1KeyList(output.Keys, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
    };
};
const deserializeAws_json1_1ListResourceTagsResponse = (output, context) => {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
        Truncated: output.Truncated !== undefined && output.Truncated !== null ? output.Truncated : undefined,
    };
};
const deserializeAws_json1_1MalformedPolicyDocumentException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PolicyNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ReEncryptResponse = (output, context) => {
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
const deserializeAws_json1_1ScheduleKeyDeletionResponse = (output, context) => {
    return {
        DeletionDate: output.DeletionDate !== undefined && output.DeletionDate !== null
            ? new Date(Math.round(output.DeletionDate * 1000))
            : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    };
};
const deserializeAws_json1_1SigningAlgorithmSpecList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SignResponse = (output, context) => {
    return {
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        Signature: output.Signature !== undefined && output.Signature !== null ? context.base64Decoder(output.Signature) : undefined,
        SigningAlgorithm: output.SigningAlgorithm !== undefined && output.SigningAlgorithm !== null ? output.SigningAlgorithm : undefined,
    };
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        TagKey: output.TagKey !== undefined && output.TagKey !== null ? output.TagKey : undefined,
        TagValue: output.TagValue !== undefined && output.TagValue !== null ? output.TagValue : undefined,
    };
};
const deserializeAws_json1_1TagException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1UnsupportedOperationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UpdateCustomKeyStoreResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1VerifyResponse = (output, context) => {
    return {
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        SignatureValid: output.SignatureValid !== undefined && output.SignatureValid !== null ? output.SignatureValid : undefined,
        SigningAlgorithm: output.SigningAlgorithm !== undefined && output.SigningAlgorithm !== null ? output.SigningAlgorithm : undefined,
    };
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
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