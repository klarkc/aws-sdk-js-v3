"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_queryGenerateCredentialReportCommand = exports.serializeAws_queryEnableMFADeviceCommand = exports.serializeAws_queryDetachUserPolicyCommand = exports.serializeAws_queryDetachRolePolicyCommand = exports.serializeAws_queryDetachGroupPolicyCommand = exports.serializeAws_queryDeleteVirtualMFADeviceCommand = exports.serializeAws_queryDeleteUserPolicyCommand = exports.serializeAws_queryDeleteUserPermissionsBoundaryCommand = exports.serializeAws_queryDeleteUserCommand = exports.serializeAws_queryDeleteSSHPublicKeyCommand = exports.serializeAws_queryDeleteSigningCertificateCommand = exports.serializeAws_queryDeleteServiceSpecificCredentialCommand = exports.serializeAws_queryDeleteServiceLinkedRoleCommand = exports.serializeAws_queryDeleteServerCertificateCommand = exports.serializeAws_queryDeleteSAMLProviderCommand = exports.serializeAws_queryDeleteRolePolicyCommand = exports.serializeAws_queryDeleteRolePermissionsBoundaryCommand = exports.serializeAws_queryDeleteRoleCommand = exports.serializeAws_queryDeletePolicyVersionCommand = exports.serializeAws_queryDeletePolicyCommand = exports.serializeAws_queryDeleteOpenIDConnectProviderCommand = exports.serializeAws_queryDeleteLoginProfileCommand = exports.serializeAws_queryDeleteInstanceProfileCommand = exports.serializeAws_queryDeleteGroupPolicyCommand = exports.serializeAws_queryDeleteGroupCommand = exports.serializeAws_queryDeleteAccountPasswordPolicyCommand = exports.serializeAws_queryDeleteAccountAliasCommand = exports.serializeAws_queryDeleteAccessKeyCommand = exports.serializeAws_queryDeactivateMFADeviceCommand = exports.serializeAws_queryCreateVirtualMFADeviceCommand = exports.serializeAws_queryCreateUserCommand = exports.serializeAws_queryCreateServiceSpecificCredentialCommand = exports.serializeAws_queryCreateServiceLinkedRoleCommand = exports.serializeAws_queryCreateSAMLProviderCommand = exports.serializeAws_queryCreateRoleCommand = exports.serializeAws_queryCreatePolicyVersionCommand = exports.serializeAws_queryCreatePolicyCommand = exports.serializeAws_queryCreateOpenIDConnectProviderCommand = exports.serializeAws_queryCreateLoginProfileCommand = exports.serializeAws_queryCreateInstanceProfileCommand = exports.serializeAws_queryCreateGroupCommand = exports.serializeAws_queryCreateAccountAliasCommand = exports.serializeAws_queryCreateAccessKeyCommand = exports.serializeAws_queryChangePasswordCommand = exports.serializeAws_queryAttachUserPolicyCommand = exports.serializeAws_queryAttachRolePolicyCommand = exports.serializeAws_queryAttachGroupPolicyCommand = exports.serializeAws_queryAddUserToGroupCommand = exports.serializeAws_queryAddRoleToInstanceProfileCommand = exports.serializeAws_queryAddClientIDToOpenIDConnectProviderCommand = void 0;
exports.serializeAws_queryListRoleTagsCommand = exports.serializeAws_queryListRolesCommand = exports.serializeAws_queryListRolePoliciesCommand = exports.serializeAws_queryListPolicyVersionsCommand = exports.serializeAws_queryListPolicyTagsCommand = exports.serializeAws_queryListPoliciesGrantingServiceAccessCommand = exports.serializeAws_queryListPoliciesCommand = exports.serializeAws_queryListOpenIDConnectProviderTagsCommand = exports.serializeAws_queryListOpenIDConnectProvidersCommand = exports.serializeAws_queryListMFADeviceTagsCommand = exports.serializeAws_queryListMFADevicesCommand = exports.serializeAws_queryListInstanceProfileTagsCommand = exports.serializeAws_queryListInstanceProfilesForRoleCommand = exports.serializeAws_queryListInstanceProfilesCommand = exports.serializeAws_queryListGroupsForUserCommand = exports.serializeAws_queryListGroupsCommand = exports.serializeAws_queryListGroupPoliciesCommand = exports.serializeAws_queryListEntitiesForPolicyCommand = exports.serializeAws_queryListAttachedUserPoliciesCommand = exports.serializeAws_queryListAttachedRolePoliciesCommand = exports.serializeAws_queryListAttachedGroupPoliciesCommand = exports.serializeAws_queryListAccountAliasesCommand = exports.serializeAws_queryListAccessKeysCommand = exports.serializeAws_queryGetUserPolicyCommand = exports.serializeAws_queryGetUserCommand = exports.serializeAws_queryGetSSHPublicKeyCommand = exports.serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand = exports.serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand = exports.serializeAws_queryGetServiceLastAccessedDetailsCommand = exports.serializeAws_queryGetServerCertificateCommand = exports.serializeAws_queryGetSAMLProviderCommand = exports.serializeAws_queryGetRolePolicyCommand = exports.serializeAws_queryGetRoleCommand = exports.serializeAws_queryGetPolicyVersionCommand = exports.serializeAws_queryGetPolicyCommand = exports.serializeAws_queryGetOrganizationsAccessReportCommand = exports.serializeAws_queryGetOpenIDConnectProviderCommand = exports.serializeAws_queryGetLoginProfileCommand = exports.serializeAws_queryGetInstanceProfileCommand = exports.serializeAws_queryGetGroupPolicyCommand = exports.serializeAws_queryGetGroupCommand = exports.serializeAws_queryGetCredentialReportCommand = exports.serializeAws_queryGetContextKeysForPrincipalPolicyCommand = exports.serializeAws_queryGetContextKeysForCustomPolicyCommand = exports.serializeAws_queryGetAccountSummaryCommand = exports.serializeAws_queryGetAccountPasswordPolicyCommand = exports.serializeAws_queryGetAccountAuthorizationDetailsCommand = exports.serializeAws_queryGetAccessKeyLastUsedCommand = exports.serializeAws_queryGenerateServiceLastAccessedDetailsCommand = exports.serializeAws_queryGenerateOrganizationsAccessReportCommand = void 0;
exports.serializeAws_queryUpdateSAMLProviderCommand = exports.serializeAws_queryUpdateRoleDescriptionCommand = exports.serializeAws_queryUpdateRoleCommand = exports.serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand = exports.serializeAws_queryUpdateLoginProfileCommand = exports.serializeAws_queryUpdateGroupCommand = exports.serializeAws_queryUpdateAssumeRolePolicyCommand = exports.serializeAws_queryUpdateAccountPasswordPolicyCommand = exports.serializeAws_queryUpdateAccessKeyCommand = exports.serializeAws_queryUntagUserCommand = exports.serializeAws_queryUntagServerCertificateCommand = exports.serializeAws_queryUntagSAMLProviderCommand = exports.serializeAws_queryUntagRoleCommand = exports.serializeAws_queryUntagPolicyCommand = exports.serializeAws_queryUntagOpenIDConnectProviderCommand = exports.serializeAws_queryUntagMFADeviceCommand = exports.serializeAws_queryUntagInstanceProfileCommand = exports.serializeAws_queryTagUserCommand = exports.serializeAws_queryTagServerCertificateCommand = exports.serializeAws_queryTagSAMLProviderCommand = exports.serializeAws_queryTagRoleCommand = exports.serializeAws_queryTagPolicyCommand = exports.serializeAws_queryTagOpenIDConnectProviderCommand = exports.serializeAws_queryTagMFADeviceCommand = exports.serializeAws_queryTagInstanceProfileCommand = exports.serializeAws_querySimulatePrincipalPolicyCommand = exports.serializeAws_querySimulateCustomPolicyCommand = exports.serializeAws_querySetSecurityTokenServicePreferencesCommand = exports.serializeAws_querySetDefaultPolicyVersionCommand = exports.serializeAws_queryResyncMFADeviceCommand = exports.serializeAws_queryResetServiceSpecificCredentialCommand = exports.serializeAws_queryRemoveUserFromGroupCommand = exports.serializeAws_queryRemoveRoleFromInstanceProfileCommand = exports.serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand = exports.serializeAws_queryPutUserPolicyCommand = exports.serializeAws_queryPutUserPermissionsBoundaryCommand = exports.serializeAws_queryPutRolePolicyCommand = exports.serializeAws_queryPutRolePermissionsBoundaryCommand = exports.serializeAws_queryPutGroupPolicyCommand = exports.serializeAws_queryListVirtualMFADevicesCommand = exports.serializeAws_queryListUserTagsCommand = exports.serializeAws_queryListUsersCommand = exports.serializeAws_queryListUserPoliciesCommand = exports.serializeAws_queryListSSHPublicKeysCommand = exports.serializeAws_queryListSigningCertificatesCommand = exports.serializeAws_queryListServiceSpecificCredentialsCommand = exports.serializeAws_queryListServerCertificateTagsCommand = exports.serializeAws_queryListServerCertificatesCommand = exports.serializeAws_queryListSAMLProviderTagsCommand = exports.serializeAws_queryListSAMLProvidersCommand = void 0;
exports.deserializeAws_queryDeleteUserCommand = exports.deserializeAws_queryDeleteSSHPublicKeyCommand = exports.deserializeAws_queryDeleteSigningCertificateCommand = exports.deserializeAws_queryDeleteServiceSpecificCredentialCommand = exports.deserializeAws_queryDeleteServiceLinkedRoleCommand = exports.deserializeAws_queryDeleteServerCertificateCommand = exports.deserializeAws_queryDeleteSAMLProviderCommand = exports.deserializeAws_queryDeleteRolePolicyCommand = exports.deserializeAws_queryDeleteRolePermissionsBoundaryCommand = exports.deserializeAws_queryDeleteRoleCommand = exports.deserializeAws_queryDeletePolicyVersionCommand = exports.deserializeAws_queryDeletePolicyCommand = exports.deserializeAws_queryDeleteOpenIDConnectProviderCommand = exports.deserializeAws_queryDeleteLoginProfileCommand = exports.deserializeAws_queryDeleteInstanceProfileCommand = exports.deserializeAws_queryDeleteGroupPolicyCommand = exports.deserializeAws_queryDeleteGroupCommand = exports.deserializeAws_queryDeleteAccountPasswordPolicyCommand = exports.deserializeAws_queryDeleteAccountAliasCommand = exports.deserializeAws_queryDeleteAccessKeyCommand = exports.deserializeAws_queryDeactivateMFADeviceCommand = exports.deserializeAws_queryCreateVirtualMFADeviceCommand = exports.deserializeAws_queryCreateUserCommand = exports.deserializeAws_queryCreateServiceSpecificCredentialCommand = exports.deserializeAws_queryCreateServiceLinkedRoleCommand = exports.deserializeAws_queryCreateSAMLProviderCommand = exports.deserializeAws_queryCreateRoleCommand = exports.deserializeAws_queryCreatePolicyVersionCommand = exports.deserializeAws_queryCreatePolicyCommand = exports.deserializeAws_queryCreateOpenIDConnectProviderCommand = exports.deserializeAws_queryCreateLoginProfileCommand = exports.deserializeAws_queryCreateInstanceProfileCommand = exports.deserializeAws_queryCreateGroupCommand = exports.deserializeAws_queryCreateAccountAliasCommand = exports.deserializeAws_queryCreateAccessKeyCommand = exports.deserializeAws_queryChangePasswordCommand = exports.deserializeAws_queryAttachUserPolicyCommand = exports.deserializeAws_queryAttachRolePolicyCommand = exports.deserializeAws_queryAttachGroupPolicyCommand = exports.deserializeAws_queryAddUserToGroupCommand = exports.deserializeAws_queryAddRoleToInstanceProfileCommand = exports.deserializeAws_queryAddClientIDToOpenIDConnectProviderCommand = exports.serializeAws_queryUploadSSHPublicKeyCommand = exports.serializeAws_queryUploadSigningCertificateCommand = exports.serializeAws_queryUploadServerCertificateCommand = exports.serializeAws_queryUpdateUserCommand = exports.serializeAws_queryUpdateSSHPublicKeyCommand = exports.serializeAws_queryUpdateSigningCertificateCommand = exports.serializeAws_queryUpdateServiceSpecificCredentialCommand = exports.serializeAws_queryUpdateServerCertificateCommand = void 0;
exports.deserializeAws_queryListOpenIDConnectProvidersCommand = exports.deserializeAws_queryListMFADeviceTagsCommand = exports.deserializeAws_queryListMFADevicesCommand = exports.deserializeAws_queryListInstanceProfileTagsCommand = exports.deserializeAws_queryListInstanceProfilesForRoleCommand = exports.deserializeAws_queryListInstanceProfilesCommand = exports.deserializeAws_queryListGroupsForUserCommand = exports.deserializeAws_queryListGroupsCommand = exports.deserializeAws_queryListGroupPoliciesCommand = exports.deserializeAws_queryListEntitiesForPolicyCommand = exports.deserializeAws_queryListAttachedUserPoliciesCommand = exports.deserializeAws_queryListAttachedRolePoliciesCommand = exports.deserializeAws_queryListAttachedGroupPoliciesCommand = exports.deserializeAws_queryListAccountAliasesCommand = exports.deserializeAws_queryListAccessKeysCommand = exports.deserializeAws_queryGetUserPolicyCommand = exports.deserializeAws_queryGetUserCommand = exports.deserializeAws_queryGetSSHPublicKeyCommand = exports.deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand = exports.deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand = exports.deserializeAws_queryGetServiceLastAccessedDetailsCommand = exports.deserializeAws_queryGetServerCertificateCommand = exports.deserializeAws_queryGetSAMLProviderCommand = exports.deserializeAws_queryGetRolePolicyCommand = exports.deserializeAws_queryGetRoleCommand = exports.deserializeAws_queryGetPolicyVersionCommand = exports.deserializeAws_queryGetPolicyCommand = exports.deserializeAws_queryGetOrganizationsAccessReportCommand = exports.deserializeAws_queryGetOpenIDConnectProviderCommand = exports.deserializeAws_queryGetLoginProfileCommand = exports.deserializeAws_queryGetInstanceProfileCommand = exports.deserializeAws_queryGetGroupPolicyCommand = exports.deserializeAws_queryGetGroupCommand = exports.deserializeAws_queryGetCredentialReportCommand = exports.deserializeAws_queryGetContextKeysForPrincipalPolicyCommand = exports.deserializeAws_queryGetContextKeysForCustomPolicyCommand = exports.deserializeAws_queryGetAccountSummaryCommand = exports.deserializeAws_queryGetAccountPasswordPolicyCommand = exports.deserializeAws_queryGetAccountAuthorizationDetailsCommand = exports.deserializeAws_queryGetAccessKeyLastUsedCommand = exports.deserializeAws_queryGenerateServiceLastAccessedDetailsCommand = exports.deserializeAws_queryGenerateOrganizationsAccessReportCommand = exports.deserializeAws_queryGenerateCredentialReportCommand = exports.deserializeAws_queryEnableMFADeviceCommand = exports.deserializeAws_queryDetachUserPolicyCommand = exports.deserializeAws_queryDetachRolePolicyCommand = exports.deserializeAws_queryDetachGroupPolicyCommand = exports.deserializeAws_queryDeleteVirtualMFADeviceCommand = exports.deserializeAws_queryDeleteUserPolicyCommand = exports.deserializeAws_queryDeleteUserPermissionsBoundaryCommand = void 0;
exports.deserializeAws_queryUpdateAccessKeyCommand = exports.deserializeAws_queryUntagUserCommand = exports.deserializeAws_queryUntagServerCertificateCommand = exports.deserializeAws_queryUntagSAMLProviderCommand = exports.deserializeAws_queryUntagRoleCommand = exports.deserializeAws_queryUntagPolicyCommand = exports.deserializeAws_queryUntagOpenIDConnectProviderCommand = exports.deserializeAws_queryUntagMFADeviceCommand = exports.deserializeAws_queryUntagInstanceProfileCommand = exports.deserializeAws_queryTagUserCommand = exports.deserializeAws_queryTagServerCertificateCommand = exports.deserializeAws_queryTagSAMLProviderCommand = exports.deserializeAws_queryTagRoleCommand = exports.deserializeAws_queryTagPolicyCommand = exports.deserializeAws_queryTagOpenIDConnectProviderCommand = exports.deserializeAws_queryTagMFADeviceCommand = exports.deserializeAws_queryTagInstanceProfileCommand = exports.deserializeAws_querySimulatePrincipalPolicyCommand = exports.deserializeAws_querySimulateCustomPolicyCommand = exports.deserializeAws_querySetSecurityTokenServicePreferencesCommand = exports.deserializeAws_querySetDefaultPolicyVersionCommand = exports.deserializeAws_queryResyncMFADeviceCommand = exports.deserializeAws_queryResetServiceSpecificCredentialCommand = exports.deserializeAws_queryRemoveUserFromGroupCommand = exports.deserializeAws_queryRemoveRoleFromInstanceProfileCommand = exports.deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand = exports.deserializeAws_queryPutUserPolicyCommand = exports.deserializeAws_queryPutUserPermissionsBoundaryCommand = exports.deserializeAws_queryPutRolePolicyCommand = exports.deserializeAws_queryPutRolePermissionsBoundaryCommand = exports.deserializeAws_queryPutGroupPolicyCommand = exports.deserializeAws_queryListVirtualMFADevicesCommand = exports.deserializeAws_queryListUserTagsCommand = exports.deserializeAws_queryListUsersCommand = exports.deserializeAws_queryListUserPoliciesCommand = exports.deserializeAws_queryListSSHPublicKeysCommand = exports.deserializeAws_queryListSigningCertificatesCommand = exports.deserializeAws_queryListServiceSpecificCredentialsCommand = exports.deserializeAws_queryListServerCertificateTagsCommand = exports.deserializeAws_queryListServerCertificatesCommand = exports.deserializeAws_queryListSAMLProviderTagsCommand = exports.deserializeAws_queryListSAMLProvidersCommand = exports.deserializeAws_queryListRoleTagsCommand = exports.deserializeAws_queryListRolesCommand = exports.deserializeAws_queryListRolePoliciesCommand = exports.deserializeAws_queryListPolicyVersionsCommand = exports.deserializeAws_queryListPolicyTagsCommand = exports.deserializeAws_queryListPoliciesGrantingServiceAccessCommand = exports.deserializeAws_queryListPoliciesCommand = exports.deserializeAws_queryListOpenIDConnectProviderTagsCommand = void 0;
exports.deserializeAws_queryUploadSSHPublicKeyCommand = exports.deserializeAws_queryUploadSigningCertificateCommand = exports.deserializeAws_queryUploadServerCertificateCommand = exports.deserializeAws_queryUpdateUserCommand = exports.deserializeAws_queryUpdateSSHPublicKeyCommand = exports.deserializeAws_queryUpdateSigningCertificateCommand = exports.deserializeAws_queryUpdateServiceSpecificCredentialCommand = exports.deserializeAws_queryUpdateServerCertificateCommand = exports.deserializeAws_queryUpdateSAMLProviderCommand = exports.deserializeAws_queryUpdateRoleDescriptionCommand = exports.deserializeAws_queryUpdateRoleCommand = exports.deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand = exports.deserializeAws_queryUpdateLoginProfileCommand = exports.deserializeAws_queryUpdateGroupCommand = exports.deserializeAws_queryUpdateAssumeRolePolicyCommand = exports.deserializeAws_queryUpdateAccountPasswordPolicyCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const serializeAws_queryAddClientIDToOpenIDConnectProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAddClientIDToOpenIDConnectProviderRequest(input, context),
        Action: "AddClientIDToOpenIDConnectProvider",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAddClientIDToOpenIDConnectProviderCommand = serializeAws_queryAddClientIDToOpenIDConnectProviderCommand;
const serializeAws_queryAddRoleToInstanceProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAddRoleToInstanceProfileRequest(input, context),
        Action: "AddRoleToInstanceProfile",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAddRoleToInstanceProfileCommand = serializeAws_queryAddRoleToInstanceProfileCommand;
const serializeAws_queryAddUserToGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAddUserToGroupRequest(input, context),
        Action: "AddUserToGroup",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAddUserToGroupCommand = serializeAws_queryAddUserToGroupCommand;
const serializeAws_queryAttachGroupPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAttachGroupPolicyRequest(input, context),
        Action: "AttachGroupPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAttachGroupPolicyCommand = serializeAws_queryAttachGroupPolicyCommand;
const serializeAws_queryAttachRolePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAttachRolePolicyRequest(input, context),
        Action: "AttachRolePolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAttachRolePolicyCommand = serializeAws_queryAttachRolePolicyCommand;
const serializeAws_queryAttachUserPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAttachUserPolicyRequest(input, context),
        Action: "AttachUserPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAttachUserPolicyCommand = serializeAws_queryAttachUserPolicyCommand;
const serializeAws_queryChangePasswordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryChangePasswordRequest(input, context),
        Action: "ChangePassword",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryChangePasswordCommand = serializeAws_queryChangePasswordCommand;
const serializeAws_queryCreateAccessKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateAccessKeyRequest(input, context),
        Action: "CreateAccessKey",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateAccessKeyCommand = serializeAws_queryCreateAccessKeyCommand;
const serializeAws_queryCreateAccountAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateAccountAliasRequest(input, context),
        Action: "CreateAccountAlias",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateAccountAliasCommand = serializeAws_queryCreateAccountAliasCommand;
const serializeAws_queryCreateGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateGroupRequest(input, context),
        Action: "CreateGroup",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateGroupCommand = serializeAws_queryCreateGroupCommand;
const serializeAws_queryCreateInstanceProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateInstanceProfileRequest(input, context),
        Action: "CreateInstanceProfile",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateInstanceProfileCommand = serializeAws_queryCreateInstanceProfileCommand;
const serializeAws_queryCreateLoginProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateLoginProfileRequest(input, context),
        Action: "CreateLoginProfile",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateLoginProfileCommand = serializeAws_queryCreateLoginProfileCommand;
const serializeAws_queryCreateOpenIDConnectProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateOpenIDConnectProviderRequest(input, context),
        Action: "CreateOpenIDConnectProvider",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateOpenIDConnectProviderCommand = serializeAws_queryCreateOpenIDConnectProviderCommand;
const serializeAws_queryCreatePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreatePolicyRequest(input, context),
        Action: "CreatePolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreatePolicyCommand = serializeAws_queryCreatePolicyCommand;
const serializeAws_queryCreatePolicyVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreatePolicyVersionRequest(input, context),
        Action: "CreatePolicyVersion",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreatePolicyVersionCommand = serializeAws_queryCreatePolicyVersionCommand;
const serializeAws_queryCreateRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateRoleRequest(input, context),
        Action: "CreateRole",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateRoleCommand = serializeAws_queryCreateRoleCommand;
const serializeAws_queryCreateSAMLProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateSAMLProviderRequest(input, context),
        Action: "CreateSAMLProvider",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateSAMLProviderCommand = serializeAws_queryCreateSAMLProviderCommand;
const serializeAws_queryCreateServiceLinkedRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateServiceLinkedRoleRequest(input, context),
        Action: "CreateServiceLinkedRole",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateServiceLinkedRoleCommand = serializeAws_queryCreateServiceLinkedRoleCommand;
const serializeAws_queryCreateServiceSpecificCredentialCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateServiceSpecificCredentialRequest(input, context),
        Action: "CreateServiceSpecificCredential",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateServiceSpecificCredentialCommand = serializeAws_queryCreateServiceSpecificCredentialCommand;
const serializeAws_queryCreateUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateUserRequest(input, context),
        Action: "CreateUser",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateUserCommand = serializeAws_queryCreateUserCommand;
const serializeAws_queryCreateVirtualMFADeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateVirtualMFADeviceRequest(input, context),
        Action: "CreateVirtualMFADevice",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateVirtualMFADeviceCommand = serializeAws_queryCreateVirtualMFADeviceCommand;
const serializeAws_queryDeactivateMFADeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeactivateMFADeviceRequest(input, context),
        Action: "DeactivateMFADevice",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeactivateMFADeviceCommand = serializeAws_queryDeactivateMFADeviceCommand;
const serializeAws_queryDeleteAccessKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteAccessKeyRequest(input, context),
        Action: "DeleteAccessKey",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteAccessKeyCommand = serializeAws_queryDeleteAccessKeyCommand;
const serializeAws_queryDeleteAccountAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteAccountAliasRequest(input, context),
        Action: "DeleteAccountAlias",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteAccountAliasCommand = serializeAws_queryDeleteAccountAliasCommand;
const serializeAws_queryDeleteAccountPasswordPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    const body = buildFormUrlencodedString({
        Action: "DeleteAccountPasswordPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteAccountPasswordPolicyCommand = serializeAws_queryDeleteAccountPasswordPolicyCommand;
const serializeAws_queryDeleteGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteGroupRequest(input, context),
        Action: "DeleteGroup",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteGroupCommand = serializeAws_queryDeleteGroupCommand;
const serializeAws_queryDeleteGroupPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteGroupPolicyRequest(input, context),
        Action: "DeleteGroupPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteGroupPolicyCommand = serializeAws_queryDeleteGroupPolicyCommand;
const serializeAws_queryDeleteInstanceProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteInstanceProfileRequest(input, context),
        Action: "DeleteInstanceProfile",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteInstanceProfileCommand = serializeAws_queryDeleteInstanceProfileCommand;
const serializeAws_queryDeleteLoginProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteLoginProfileRequest(input, context),
        Action: "DeleteLoginProfile",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteLoginProfileCommand = serializeAws_queryDeleteLoginProfileCommand;
const serializeAws_queryDeleteOpenIDConnectProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteOpenIDConnectProviderRequest(input, context),
        Action: "DeleteOpenIDConnectProvider",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteOpenIDConnectProviderCommand = serializeAws_queryDeleteOpenIDConnectProviderCommand;
const serializeAws_queryDeletePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeletePolicyRequest(input, context),
        Action: "DeletePolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeletePolicyCommand = serializeAws_queryDeletePolicyCommand;
const serializeAws_queryDeletePolicyVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeletePolicyVersionRequest(input, context),
        Action: "DeletePolicyVersion",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeletePolicyVersionCommand = serializeAws_queryDeletePolicyVersionCommand;
const serializeAws_queryDeleteRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteRoleRequest(input, context),
        Action: "DeleteRole",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteRoleCommand = serializeAws_queryDeleteRoleCommand;
const serializeAws_queryDeleteRolePermissionsBoundaryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteRolePermissionsBoundaryRequest(input, context),
        Action: "DeleteRolePermissionsBoundary",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteRolePermissionsBoundaryCommand = serializeAws_queryDeleteRolePermissionsBoundaryCommand;
const serializeAws_queryDeleteRolePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteRolePolicyRequest(input, context),
        Action: "DeleteRolePolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteRolePolicyCommand = serializeAws_queryDeleteRolePolicyCommand;
const serializeAws_queryDeleteSAMLProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteSAMLProviderRequest(input, context),
        Action: "DeleteSAMLProvider",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteSAMLProviderCommand = serializeAws_queryDeleteSAMLProviderCommand;
const serializeAws_queryDeleteServerCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteServerCertificateRequest(input, context),
        Action: "DeleteServerCertificate",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteServerCertificateCommand = serializeAws_queryDeleteServerCertificateCommand;
const serializeAws_queryDeleteServiceLinkedRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteServiceLinkedRoleRequest(input, context),
        Action: "DeleteServiceLinkedRole",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteServiceLinkedRoleCommand = serializeAws_queryDeleteServiceLinkedRoleCommand;
const serializeAws_queryDeleteServiceSpecificCredentialCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteServiceSpecificCredentialRequest(input, context),
        Action: "DeleteServiceSpecificCredential",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteServiceSpecificCredentialCommand = serializeAws_queryDeleteServiceSpecificCredentialCommand;
const serializeAws_queryDeleteSigningCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteSigningCertificateRequest(input, context),
        Action: "DeleteSigningCertificate",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteSigningCertificateCommand = serializeAws_queryDeleteSigningCertificateCommand;
const serializeAws_queryDeleteSSHPublicKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteSSHPublicKeyRequest(input, context),
        Action: "DeleteSSHPublicKey",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteSSHPublicKeyCommand = serializeAws_queryDeleteSSHPublicKeyCommand;
const serializeAws_queryDeleteUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteUserRequest(input, context),
        Action: "DeleteUser",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteUserCommand = serializeAws_queryDeleteUserCommand;
const serializeAws_queryDeleteUserPermissionsBoundaryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteUserPermissionsBoundaryRequest(input, context),
        Action: "DeleteUserPermissionsBoundary",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteUserPermissionsBoundaryCommand = serializeAws_queryDeleteUserPermissionsBoundaryCommand;
const serializeAws_queryDeleteUserPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteUserPolicyRequest(input, context),
        Action: "DeleteUserPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteUserPolicyCommand = serializeAws_queryDeleteUserPolicyCommand;
const serializeAws_queryDeleteVirtualMFADeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteVirtualMFADeviceRequest(input, context),
        Action: "DeleteVirtualMFADevice",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteVirtualMFADeviceCommand = serializeAws_queryDeleteVirtualMFADeviceCommand;
const serializeAws_queryDetachGroupPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDetachGroupPolicyRequest(input, context),
        Action: "DetachGroupPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDetachGroupPolicyCommand = serializeAws_queryDetachGroupPolicyCommand;
const serializeAws_queryDetachRolePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDetachRolePolicyRequest(input, context),
        Action: "DetachRolePolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDetachRolePolicyCommand = serializeAws_queryDetachRolePolicyCommand;
const serializeAws_queryDetachUserPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDetachUserPolicyRequest(input, context),
        Action: "DetachUserPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDetachUserPolicyCommand = serializeAws_queryDetachUserPolicyCommand;
const serializeAws_queryEnableMFADeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryEnableMFADeviceRequest(input, context),
        Action: "EnableMFADevice",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryEnableMFADeviceCommand = serializeAws_queryEnableMFADeviceCommand;
const serializeAws_queryGenerateCredentialReportCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    const body = buildFormUrlencodedString({
        Action: "GenerateCredentialReport",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGenerateCredentialReportCommand = serializeAws_queryGenerateCredentialReportCommand;
const serializeAws_queryGenerateOrganizationsAccessReportCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGenerateOrganizationsAccessReportRequest(input, context),
        Action: "GenerateOrganizationsAccessReport",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGenerateOrganizationsAccessReportCommand = serializeAws_queryGenerateOrganizationsAccessReportCommand;
const serializeAws_queryGenerateServiceLastAccessedDetailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGenerateServiceLastAccessedDetailsRequest(input, context),
        Action: "GenerateServiceLastAccessedDetails",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGenerateServiceLastAccessedDetailsCommand = serializeAws_queryGenerateServiceLastAccessedDetailsCommand;
const serializeAws_queryGetAccessKeyLastUsedCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetAccessKeyLastUsedRequest(input, context),
        Action: "GetAccessKeyLastUsed",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetAccessKeyLastUsedCommand = serializeAws_queryGetAccessKeyLastUsedCommand;
const serializeAws_queryGetAccountAuthorizationDetailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetAccountAuthorizationDetailsRequest(input, context),
        Action: "GetAccountAuthorizationDetails",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetAccountAuthorizationDetailsCommand = serializeAws_queryGetAccountAuthorizationDetailsCommand;
const serializeAws_queryGetAccountPasswordPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    const body = buildFormUrlencodedString({
        Action: "GetAccountPasswordPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetAccountPasswordPolicyCommand = serializeAws_queryGetAccountPasswordPolicyCommand;
const serializeAws_queryGetAccountSummaryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    const body = buildFormUrlencodedString({
        Action: "GetAccountSummary",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetAccountSummaryCommand = serializeAws_queryGetAccountSummaryCommand;
const serializeAws_queryGetContextKeysForCustomPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetContextKeysForCustomPolicyRequest(input, context),
        Action: "GetContextKeysForCustomPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetContextKeysForCustomPolicyCommand = serializeAws_queryGetContextKeysForCustomPolicyCommand;
const serializeAws_queryGetContextKeysForPrincipalPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetContextKeysForPrincipalPolicyRequest(input, context),
        Action: "GetContextKeysForPrincipalPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetContextKeysForPrincipalPolicyCommand = serializeAws_queryGetContextKeysForPrincipalPolicyCommand;
const serializeAws_queryGetCredentialReportCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    const body = buildFormUrlencodedString({
        Action: "GetCredentialReport",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetCredentialReportCommand = serializeAws_queryGetCredentialReportCommand;
const serializeAws_queryGetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetGroupRequest(input, context),
        Action: "GetGroup",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetGroupCommand = serializeAws_queryGetGroupCommand;
const serializeAws_queryGetGroupPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetGroupPolicyRequest(input, context),
        Action: "GetGroupPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetGroupPolicyCommand = serializeAws_queryGetGroupPolicyCommand;
const serializeAws_queryGetInstanceProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetInstanceProfileRequest(input, context),
        Action: "GetInstanceProfile",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetInstanceProfileCommand = serializeAws_queryGetInstanceProfileCommand;
const serializeAws_queryGetLoginProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetLoginProfileRequest(input, context),
        Action: "GetLoginProfile",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetLoginProfileCommand = serializeAws_queryGetLoginProfileCommand;
const serializeAws_queryGetOpenIDConnectProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetOpenIDConnectProviderRequest(input, context),
        Action: "GetOpenIDConnectProvider",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetOpenIDConnectProviderCommand = serializeAws_queryGetOpenIDConnectProviderCommand;
const serializeAws_queryGetOrganizationsAccessReportCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetOrganizationsAccessReportRequest(input, context),
        Action: "GetOrganizationsAccessReport",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetOrganizationsAccessReportCommand = serializeAws_queryGetOrganizationsAccessReportCommand;
const serializeAws_queryGetPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetPolicyRequest(input, context),
        Action: "GetPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetPolicyCommand = serializeAws_queryGetPolicyCommand;
const serializeAws_queryGetPolicyVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetPolicyVersionRequest(input, context),
        Action: "GetPolicyVersion",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetPolicyVersionCommand = serializeAws_queryGetPolicyVersionCommand;
const serializeAws_queryGetRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetRoleRequest(input, context),
        Action: "GetRole",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetRoleCommand = serializeAws_queryGetRoleCommand;
const serializeAws_queryGetRolePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetRolePolicyRequest(input, context),
        Action: "GetRolePolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetRolePolicyCommand = serializeAws_queryGetRolePolicyCommand;
const serializeAws_queryGetSAMLProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetSAMLProviderRequest(input, context),
        Action: "GetSAMLProvider",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetSAMLProviderCommand = serializeAws_queryGetSAMLProviderCommand;
const serializeAws_queryGetServerCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetServerCertificateRequest(input, context),
        Action: "GetServerCertificate",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetServerCertificateCommand = serializeAws_queryGetServerCertificateCommand;
const serializeAws_queryGetServiceLastAccessedDetailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetServiceLastAccessedDetailsRequest(input, context),
        Action: "GetServiceLastAccessedDetails",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetServiceLastAccessedDetailsCommand = serializeAws_queryGetServiceLastAccessedDetailsCommand;
const serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesRequest(input, context),
        Action: "GetServiceLastAccessedDetailsWithEntities",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand = serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand;
const serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetServiceLinkedRoleDeletionStatusRequest(input, context),
        Action: "GetServiceLinkedRoleDeletionStatus",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand = serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand;
const serializeAws_queryGetSSHPublicKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetSSHPublicKeyRequest(input, context),
        Action: "GetSSHPublicKey",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetSSHPublicKeyCommand = serializeAws_queryGetSSHPublicKeyCommand;
const serializeAws_queryGetUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetUserRequest(input, context),
        Action: "GetUser",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetUserCommand = serializeAws_queryGetUserCommand;
const serializeAws_queryGetUserPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetUserPolicyRequest(input, context),
        Action: "GetUserPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetUserPolicyCommand = serializeAws_queryGetUserPolicyCommand;
const serializeAws_queryListAccessKeysCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListAccessKeysRequest(input, context),
        Action: "ListAccessKeys",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListAccessKeysCommand = serializeAws_queryListAccessKeysCommand;
const serializeAws_queryListAccountAliasesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListAccountAliasesRequest(input, context),
        Action: "ListAccountAliases",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListAccountAliasesCommand = serializeAws_queryListAccountAliasesCommand;
const serializeAws_queryListAttachedGroupPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListAttachedGroupPoliciesRequest(input, context),
        Action: "ListAttachedGroupPolicies",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListAttachedGroupPoliciesCommand = serializeAws_queryListAttachedGroupPoliciesCommand;
const serializeAws_queryListAttachedRolePoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListAttachedRolePoliciesRequest(input, context),
        Action: "ListAttachedRolePolicies",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListAttachedRolePoliciesCommand = serializeAws_queryListAttachedRolePoliciesCommand;
const serializeAws_queryListAttachedUserPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListAttachedUserPoliciesRequest(input, context),
        Action: "ListAttachedUserPolicies",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListAttachedUserPoliciesCommand = serializeAws_queryListAttachedUserPoliciesCommand;
const serializeAws_queryListEntitiesForPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListEntitiesForPolicyRequest(input, context),
        Action: "ListEntitiesForPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListEntitiesForPolicyCommand = serializeAws_queryListEntitiesForPolicyCommand;
const serializeAws_queryListGroupPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListGroupPoliciesRequest(input, context),
        Action: "ListGroupPolicies",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListGroupPoliciesCommand = serializeAws_queryListGroupPoliciesCommand;
const serializeAws_queryListGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListGroupsRequest(input, context),
        Action: "ListGroups",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListGroupsCommand = serializeAws_queryListGroupsCommand;
const serializeAws_queryListGroupsForUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListGroupsForUserRequest(input, context),
        Action: "ListGroupsForUser",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListGroupsForUserCommand = serializeAws_queryListGroupsForUserCommand;
const serializeAws_queryListInstanceProfilesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListInstanceProfilesRequest(input, context),
        Action: "ListInstanceProfiles",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListInstanceProfilesCommand = serializeAws_queryListInstanceProfilesCommand;
const serializeAws_queryListInstanceProfilesForRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListInstanceProfilesForRoleRequest(input, context),
        Action: "ListInstanceProfilesForRole",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListInstanceProfilesForRoleCommand = serializeAws_queryListInstanceProfilesForRoleCommand;
const serializeAws_queryListInstanceProfileTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListInstanceProfileTagsRequest(input, context),
        Action: "ListInstanceProfileTags",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListInstanceProfileTagsCommand = serializeAws_queryListInstanceProfileTagsCommand;
const serializeAws_queryListMFADevicesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListMFADevicesRequest(input, context),
        Action: "ListMFADevices",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListMFADevicesCommand = serializeAws_queryListMFADevicesCommand;
const serializeAws_queryListMFADeviceTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListMFADeviceTagsRequest(input, context),
        Action: "ListMFADeviceTags",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListMFADeviceTagsCommand = serializeAws_queryListMFADeviceTagsCommand;
const serializeAws_queryListOpenIDConnectProvidersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListOpenIDConnectProvidersRequest(input, context),
        Action: "ListOpenIDConnectProviders",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListOpenIDConnectProvidersCommand = serializeAws_queryListOpenIDConnectProvidersCommand;
const serializeAws_queryListOpenIDConnectProviderTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListOpenIDConnectProviderTagsRequest(input, context),
        Action: "ListOpenIDConnectProviderTags",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListOpenIDConnectProviderTagsCommand = serializeAws_queryListOpenIDConnectProviderTagsCommand;
const serializeAws_queryListPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListPoliciesRequest(input, context),
        Action: "ListPolicies",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListPoliciesCommand = serializeAws_queryListPoliciesCommand;
const serializeAws_queryListPoliciesGrantingServiceAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListPoliciesGrantingServiceAccessRequest(input, context),
        Action: "ListPoliciesGrantingServiceAccess",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListPoliciesGrantingServiceAccessCommand = serializeAws_queryListPoliciesGrantingServiceAccessCommand;
const serializeAws_queryListPolicyTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListPolicyTagsRequest(input, context),
        Action: "ListPolicyTags",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListPolicyTagsCommand = serializeAws_queryListPolicyTagsCommand;
const serializeAws_queryListPolicyVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListPolicyVersionsRequest(input, context),
        Action: "ListPolicyVersions",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListPolicyVersionsCommand = serializeAws_queryListPolicyVersionsCommand;
const serializeAws_queryListRolePoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListRolePoliciesRequest(input, context),
        Action: "ListRolePolicies",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListRolePoliciesCommand = serializeAws_queryListRolePoliciesCommand;
const serializeAws_queryListRolesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListRolesRequest(input, context),
        Action: "ListRoles",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListRolesCommand = serializeAws_queryListRolesCommand;
const serializeAws_queryListRoleTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListRoleTagsRequest(input, context),
        Action: "ListRoleTags",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListRoleTagsCommand = serializeAws_queryListRoleTagsCommand;
const serializeAws_queryListSAMLProvidersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListSAMLProvidersRequest(input, context),
        Action: "ListSAMLProviders",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListSAMLProvidersCommand = serializeAws_queryListSAMLProvidersCommand;
const serializeAws_queryListSAMLProviderTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListSAMLProviderTagsRequest(input, context),
        Action: "ListSAMLProviderTags",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListSAMLProviderTagsCommand = serializeAws_queryListSAMLProviderTagsCommand;
const serializeAws_queryListServerCertificatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListServerCertificatesRequest(input, context),
        Action: "ListServerCertificates",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListServerCertificatesCommand = serializeAws_queryListServerCertificatesCommand;
const serializeAws_queryListServerCertificateTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListServerCertificateTagsRequest(input, context),
        Action: "ListServerCertificateTags",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListServerCertificateTagsCommand = serializeAws_queryListServerCertificateTagsCommand;
const serializeAws_queryListServiceSpecificCredentialsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListServiceSpecificCredentialsRequest(input, context),
        Action: "ListServiceSpecificCredentials",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListServiceSpecificCredentialsCommand = serializeAws_queryListServiceSpecificCredentialsCommand;
const serializeAws_queryListSigningCertificatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListSigningCertificatesRequest(input, context),
        Action: "ListSigningCertificates",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListSigningCertificatesCommand = serializeAws_queryListSigningCertificatesCommand;
const serializeAws_queryListSSHPublicKeysCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListSSHPublicKeysRequest(input, context),
        Action: "ListSSHPublicKeys",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListSSHPublicKeysCommand = serializeAws_queryListSSHPublicKeysCommand;
const serializeAws_queryListUserPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListUserPoliciesRequest(input, context),
        Action: "ListUserPolicies",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListUserPoliciesCommand = serializeAws_queryListUserPoliciesCommand;
const serializeAws_queryListUsersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListUsersRequest(input, context),
        Action: "ListUsers",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListUsersCommand = serializeAws_queryListUsersCommand;
const serializeAws_queryListUserTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListUserTagsRequest(input, context),
        Action: "ListUserTags",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListUserTagsCommand = serializeAws_queryListUserTagsCommand;
const serializeAws_queryListVirtualMFADevicesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListVirtualMFADevicesRequest(input, context),
        Action: "ListVirtualMFADevices",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListVirtualMFADevicesCommand = serializeAws_queryListVirtualMFADevicesCommand;
const serializeAws_queryPutGroupPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPutGroupPolicyRequest(input, context),
        Action: "PutGroupPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutGroupPolicyCommand = serializeAws_queryPutGroupPolicyCommand;
const serializeAws_queryPutRolePermissionsBoundaryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPutRolePermissionsBoundaryRequest(input, context),
        Action: "PutRolePermissionsBoundary",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutRolePermissionsBoundaryCommand = serializeAws_queryPutRolePermissionsBoundaryCommand;
const serializeAws_queryPutRolePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPutRolePolicyRequest(input, context),
        Action: "PutRolePolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutRolePolicyCommand = serializeAws_queryPutRolePolicyCommand;
const serializeAws_queryPutUserPermissionsBoundaryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPutUserPermissionsBoundaryRequest(input, context),
        Action: "PutUserPermissionsBoundary",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutUserPermissionsBoundaryCommand = serializeAws_queryPutUserPermissionsBoundaryCommand;
const serializeAws_queryPutUserPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPutUserPolicyRequest(input, context),
        Action: "PutUserPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutUserPolicyCommand = serializeAws_queryPutUserPolicyCommand;
const serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRemoveClientIDFromOpenIDConnectProviderRequest(input, context),
        Action: "RemoveClientIDFromOpenIDConnectProvider",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand = serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand;
const serializeAws_queryRemoveRoleFromInstanceProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRemoveRoleFromInstanceProfileRequest(input, context),
        Action: "RemoveRoleFromInstanceProfile",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRemoveRoleFromInstanceProfileCommand = serializeAws_queryRemoveRoleFromInstanceProfileCommand;
const serializeAws_queryRemoveUserFromGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRemoveUserFromGroupRequest(input, context),
        Action: "RemoveUserFromGroup",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRemoveUserFromGroupCommand = serializeAws_queryRemoveUserFromGroupCommand;
const serializeAws_queryResetServiceSpecificCredentialCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryResetServiceSpecificCredentialRequest(input, context),
        Action: "ResetServiceSpecificCredential",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryResetServiceSpecificCredentialCommand = serializeAws_queryResetServiceSpecificCredentialCommand;
const serializeAws_queryResyncMFADeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryResyncMFADeviceRequest(input, context),
        Action: "ResyncMFADevice",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryResyncMFADeviceCommand = serializeAws_queryResyncMFADeviceCommand;
const serializeAws_querySetDefaultPolicyVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetDefaultPolicyVersionRequest(input, context),
        Action: "SetDefaultPolicyVersion",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetDefaultPolicyVersionCommand = serializeAws_querySetDefaultPolicyVersionCommand;
const serializeAws_querySetSecurityTokenServicePreferencesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetSecurityTokenServicePreferencesRequest(input, context),
        Action: "SetSecurityTokenServicePreferences",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetSecurityTokenServicePreferencesCommand = serializeAws_querySetSecurityTokenServicePreferencesCommand;
const serializeAws_querySimulateCustomPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySimulateCustomPolicyRequest(input, context),
        Action: "SimulateCustomPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySimulateCustomPolicyCommand = serializeAws_querySimulateCustomPolicyCommand;
const serializeAws_querySimulatePrincipalPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySimulatePrincipalPolicyRequest(input, context),
        Action: "SimulatePrincipalPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySimulatePrincipalPolicyCommand = serializeAws_querySimulatePrincipalPolicyCommand;
const serializeAws_queryTagInstanceProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryTagInstanceProfileRequest(input, context),
        Action: "TagInstanceProfile",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryTagInstanceProfileCommand = serializeAws_queryTagInstanceProfileCommand;
const serializeAws_queryTagMFADeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryTagMFADeviceRequest(input, context),
        Action: "TagMFADevice",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryTagMFADeviceCommand = serializeAws_queryTagMFADeviceCommand;
const serializeAws_queryTagOpenIDConnectProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryTagOpenIDConnectProviderRequest(input, context),
        Action: "TagOpenIDConnectProvider",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryTagOpenIDConnectProviderCommand = serializeAws_queryTagOpenIDConnectProviderCommand;
const serializeAws_queryTagPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryTagPolicyRequest(input, context),
        Action: "TagPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryTagPolicyCommand = serializeAws_queryTagPolicyCommand;
const serializeAws_queryTagRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryTagRoleRequest(input, context),
        Action: "TagRole",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryTagRoleCommand = serializeAws_queryTagRoleCommand;
const serializeAws_queryTagSAMLProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryTagSAMLProviderRequest(input, context),
        Action: "TagSAMLProvider",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryTagSAMLProviderCommand = serializeAws_queryTagSAMLProviderCommand;
const serializeAws_queryTagServerCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryTagServerCertificateRequest(input, context),
        Action: "TagServerCertificate",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryTagServerCertificateCommand = serializeAws_queryTagServerCertificateCommand;
const serializeAws_queryTagUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryTagUserRequest(input, context),
        Action: "TagUser",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryTagUserCommand = serializeAws_queryTagUserCommand;
const serializeAws_queryUntagInstanceProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUntagInstanceProfileRequest(input, context),
        Action: "UntagInstanceProfile",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUntagInstanceProfileCommand = serializeAws_queryUntagInstanceProfileCommand;
const serializeAws_queryUntagMFADeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUntagMFADeviceRequest(input, context),
        Action: "UntagMFADevice",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUntagMFADeviceCommand = serializeAws_queryUntagMFADeviceCommand;
const serializeAws_queryUntagOpenIDConnectProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUntagOpenIDConnectProviderRequest(input, context),
        Action: "UntagOpenIDConnectProvider",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUntagOpenIDConnectProviderCommand = serializeAws_queryUntagOpenIDConnectProviderCommand;
const serializeAws_queryUntagPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUntagPolicyRequest(input, context),
        Action: "UntagPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUntagPolicyCommand = serializeAws_queryUntagPolicyCommand;
const serializeAws_queryUntagRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUntagRoleRequest(input, context),
        Action: "UntagRole",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUntagRoleCommand = serializeAws_queryUntagRoleCommand;
const serializeAws_queryUntagSAMLProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUntagSAMLProviderRequest(input, context),
        Action: "UntagSAMLProvider",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUntagSAMLProviderCommand = serializeAws_queryUntagSAMLProviderCommand;
const serializeAws_queryUntagServerCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUntagServerCertificateRequest(input, context),
        Action: "UntagServerCertificate",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUntagServerCertificateCommand = serializeAws_queryUntagServerCertificateCommand;
const serializeAws_queryUntagUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUntagUserRequest(input, context),
        Action: "UntagUser",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUntagUserCommand = serializeAws_queryUntagUserCommand;
const serializeAws_queryUpdateAccessKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateAccessKeyRequest(input, context),
        Action: "UpdateAccessKey",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateAccessKeyCommand = serializeAws_queryUpdateAccessKeyCommand;
const serializeAws_queryUpdateAccountPasswordPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateAccountPasswordPolicyRequest(input, context),
        Action: "UpdateAccountPasswordPolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateAccountPasswordPolicyCommand = serializeAws_queryUpdateAccountPasswordPolicyCommand;
const serializeAws_queryUpdateAssumeRolePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateAssumeRolePolicyRequest(input, context),
        Action: "UpdateAssumeRolePolicy",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateAssumeRolePolicyCommand = serializeAws_queryUpdateAssumeRolePolicyCommand;
const serializeAws_queryUpdateGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateGroupRequest(input, context),
        Action: "UpdateGroup",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateGroupCommand = serializeAws_queryUpdateGroupCommand;
const serializeAws_queryUpdateLoginProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateLoginProfileRequest(input, context),
        Action: "UpdateLoginProfile",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateLoginProfileCommand = serializeAws_queryUpdateLoginProfileCommand;
const serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateOpenIDConnectProviderThumbprintRequest(input, context),
        Action: "UpdateOpenIDConnectProviderThumbprint",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand = serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand;
const serializeAws_queryUpdateRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateRoleRequest(input, context),
        Action: "UpdateRole",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateRoleCommand = serializeAws_queryUpdateRoleCommand;
const serializeAws_queryUpdateRoleDescriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateRoleDescriptionRequest(input, context),
        Action: "UpdateRoleDescription",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateRoleDescriptionCommand = serializeAws_queryUpdateRoleDescriptionCommand;
const serializeAws_queryUpdateSAMLProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateSAMLProviderRequest(input, context),
        Action: "UpdateSAMLProvider",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateSAMLProviderCommand = serializeAws_queryUpdateSAMLProviderCommand;
const serializeAws_queryUpdateServerCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateServerCertificateRequest(input, context),
        Action: "UpdateServerCertificate",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateServerCertificateCommand = serializeAws_queryUpdateServerCertificateCommand;
const serializeAws_queryUpdateServiceSpecificCredentialCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateServiceSpecificCredentialRequest(input, context),
        Action: "UpdateServiceSpecificCredential",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateServiceSpecificCredentialCommand = serializeAws_queryUpdateServiceSpecificCredentialCommand;
const serializeAws_queryUpdateSigningCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateSigningCertificateRequest(input, context),
        Action: "UpdateSigningCertificate",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateSigningCertificateCommand = serializeAws_queryUpdateSigningCertificateCommand;
const serializeAws_queryUpdateSSHPublicKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateSSHPublicKeyRequest(input, context),
        Action: "UpdateSSHPublicKey",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateSSHPublicKeyCommand = serializeAws_queryUpdateSSHPublicKeyCommand;
const serializeAws_queryUpdateUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateUserRequest(input, context),
        Action: "UpdateUser",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateUserCommand = serializeAws_queryUpdateUserCommand;
const serializeAws_queryUploadServerCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUploadServerCertificateRequest(input, context),
        Action: "UploadServerCertificate",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUploadServerCertificateCommand = serializeAws_queryUploadServerCertificateCommand;
const serializeAws_queryUploadSigningCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUploadSigningCertificateRequest(input, context),
        Action: "UploadSigningCertificate",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUploadSigningCertificateCommand = serializeAws_queryUploadSigningCertificateCommand;
const serializeAws_queryUploadSSHPublicKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUploadSSHPublicKeyRequest(input, context),
        Action: "UploadSSHPublicKey",
        Version: "2010-05-08",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUploadSSHPublicKeyCommand = serializeAws_queryUploadSSHPublicKeyCommand;
const deserializeAws_queryAddClientIDToOpenIDConnectProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAddClientIDToOpenIDConnectProviderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAddClientIDToOpenIDConnectProviderCommand = deserializeAws_queryAddClientIDToOpenIDConnectProviderCommand;
const deserializeAws_queryAddClientIDToOpenIDConnectProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryAddRoleToInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAddRoleToInstanceProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAddRoleToInstanceProfileCommand = deserializeAws_queryAddRoleToInstanceProfileCommand;
const deserializeAws_queryAddRoleToInstanceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnmodifiableEntityException":
        case "com.amazonaws.iam#UnmodifiableEntityException":
            response = {
                ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryAddUserToGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAddUserToGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAddUserToGroupCommand = deserializeAws_queryAddUserToGroupCommand;
const deserializeAws_queryAddUserToGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryAttachGroupPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAttachGroupPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAttachGroupPolicyCommand = deserializeAws_queryAttachGroupPolicyCommand;
const deserializeAws_queryAttachGroupPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotAttachableException":
        case "com.amazonaws.iam#PolicyNotAttachableException":
            response = {
                ...(await deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryAttachRolePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAttachRolePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAttachRolePolicyCommand = deserializeAws_queryAttachRolePolicyCommand;
const deserializeAws_queryAttachRolePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotAttachableException":
        case "com.amazonaws.iam#PolicyNotAttachableException":
            response = {
                ...(await deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnmodifiableEntityException":
        case "com.amazonaws.iam#UnmodifiableEntityException":
            response = {
                ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryAttachUserPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAttachUserPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAttachUserPolicyCommand = deserializeAws_queryAttachUserPolicyCommand;
const deserializeAws_queryAttachUserPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotAttachableException":
        case "com.amazonaws.iam#PolicyNotAttachableException":
            response = {
                ...(await deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryChangePasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryChangePasswordCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryChangePasswordCommand = deserializeAws_queryChangePasswordCommand;
const deserializeAws_queryChangePasswordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityTemporarilyUnmodifiableException":
        case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
            response = {
                ...(await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserTypeException":
        case "com.amazonaws.iam#InvalidUserTypeException":
            response = {
                ...(await deserializeAws_queryInvalidUserTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordPolicyViolationException":
        case "com.amazonaws.iam#PasswordPolicyViolationException":
            response = {
                ...(await deserializeAws_queryPasswordPolicyViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateAccessKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateAccessKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateAccessKeyResponse(data.CreateAccessKeyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateAccessKeyCommand = deserializeAws_queryCreateAccessKeyCommand;
const deserializeAws_queryCreateAccessKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateAccountAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateAccountAliasCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateAccountAliasCommand = deserializeAws_queryCreateAccountAliasCommand;
const deserializeAws_queryCreateAccountAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateGroupResponse(data.CreateGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateGroupCommand = deserializeAws_queryCreateGroupCommand;
const deserializeAws_queryCreateGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateInstanceProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateInstanceProfileResponse(data.CreateInstanceProfileResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateInstanceProfileCommand = deserializeAws_queryCreateInstanceProfileCommand;
const deserializeAws_queryCreateInstanceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateLoginProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateLoginProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateLoginProfileResponse(data.CreateLoginProfileResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateLoginProfileCommand = deserializeAws_queryCreateLoginProfileCommand;
const deserializeAws_queryCreateLoginProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordPolicyViolationException":
        case "com.amazonaws.iam#PasswordPolicyViolationException":
            response = {
                ...(await deserializeAws_queryPasswordPolicyViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateOpenIDConnectProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateOpenIDConnectProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateOpenIDConnectProviderResponse(data.CreateOpenIDConnectProviderResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateOpenIDConnectProviderCommand = deserializeAws_queryCreateOpenIDConnectProviderCommand;
const deserializeAws_queryCreateOpenIDConnectProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreatePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreatePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreatePolicyResponse(data.CreatePolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreatePolicyCommand = deserializeAws_queryCreatePolicyCommand;
const deserializeAws_queryCreatePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.iam#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreatePolicyVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreatePolicyVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreatePolicyVersionResponse(data.CreatePolicyVersionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreatePolicyVersionCommand = deserializeAws_queryCreatePolicyVersionCommand;
const deserializeAws_queryCreatePolicyVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.iam#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateRoleResponse(data.CreateRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateRoleCommand = deserializeAws_queryCreateRoleCommand;
const deserializeAws_queryCreateRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.iam#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateSAMLProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateSAMLProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateSAMLProviderResponse(data.CreateSAMLProviderResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateSAMLProviderCommand = deserializeAws_queryCreateSAMLProviderCommand;
const deserializeAws_queryCreateSAMLProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateServiceLinkedRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateServiceLinkedRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateServiceLinkedRoleResponse(data.CreateServiceLinkedRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateServiceLinkedRoleCommand = deserializeAws_queryCreateServiceLinkedRoleCommand;
const deserializeAws_queryCreateServiceLinkedRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateServiceSpecificCredentialCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateServiceSpecificCredentialCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateServiceSpecificCredentialResponse(data.CreateServiceSpecificCredentialResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateServiceSpecificCredentialCommand = deserializeAws_queryCreateServiceSpecificCredentialCommand;
const deserializeAws_queryCreateServiceSpecificCredentialCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotSupportedException":
        case "com.amazonaws.iam#ServiceNotSupportedException":
            response = {
                ...(await deserializeAws_queryServiceNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateUserResponse(data.CreateUserResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateUserCommand = deserializeAws_queryCreateUserCommand;
const deserializeAws_queryCreateUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateVirtualMFADeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateVirtualMFADeviceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateVirtualMFADeviceResponse(data.CreateVirtualMFADeviceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateVirtualMFADeviceCommand = deserializeAws_queryCreateVirtualMFADeviceCommand;
const deserializeAws_queryCreateVirtualMFADeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeactivateMFADeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeactivateMFADeviceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeactivateMFADeviceCommand = deserializeAws_queryDeactivateMFADeviceCommand;
const deserializeAws_queryDeactivateMFADeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityTemporarilyUnmodifiableException":
        case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
            response = {
                ...(await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteAccessKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteAccessKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteAccessKeyCommand = deserializeAws_queryDeleteAccessKeyCommand;
const deserializeAws_queryDeleteAccessKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteAccountAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteAccountAliasCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteAccountAliasCommand = deserializeAws_queryDeleteAccountAliasCommand;
const deserializeAws_queryDeleteAccountAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteAccountPasswordPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteAccountPasswordPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteAccountPasswordPolicyCommand = deserializeAws_queryDeleteAccountPasswordPolicyCommand;
const deserializeAws_queryDeleteAccountPasswordPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteGroupCommand = deserializeAws_queryDeleteGroupCommand;
const deserializeAws_queryDeleteGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeleteConflictException":
        case "com.amazonaws.iam#DeleteConflictException":
            response = {
                ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteGroupPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteGroupPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteGroupPolicyCommand = deserializeAws_queryDeleteGroupPolicyCommand;
const deserializeAws_queryDeleteGroupPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteInstanceProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteInstanceProfileCommand = deserializeAws_queryDeleteInstanceProfileCommand;
const deserializeAws_queryDeleteInstanceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeleteConflictException":
        case "com.amazonaws.iam#DeleteConflictException":
            response = {
                ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteLoginProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteLoginProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteLoginProfileCommand = deserializeAws_queryDeleteLoginProfileCommand;
const deserializeAws_queryDeleteLoginProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityTemporarilyUnmodifiableException":
        case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
            response = {
                ...(await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteOpenIDConnectProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteOpenIDConnectProviderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteOpenIDConnectProviderCommand = deserializeAws_queryDeleteOpenIDConnectProviderCommand;
const deserializeAws_queryDeleteOpenIDConnectProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeletePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeletePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeletePolicyCommand = deserializeAws_queryDeletePolicyCommand;
const deserializeAws_queryDeletePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeleteConflictException":
        case "com.amazonaws.iam#DeleteConflictException":
            response = {
                ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeletePolicyVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeletePolicyVersionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeletePolicyVersionCommand = deserializeAws_queryDeletePolicyVersionCommand;
const deserializeAws_queryDeletePolicyVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeleteConflictException":
        case "com.amazonaws.iam#DeleteConflictException":
            response = {
                ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteRoleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteRoleCommand = deserializeAws_queryDeleteRoleCommand;
const deserializeAws_queryDeleteRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeleteConflictException":
        case "com.amazonaws.iam#DeleteConflictException":
            response = {
                ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnmodifiableEntityException":
        case "com.amazonaws.iam#UnmodifiableEntityException":
            response = {
                ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteRolePermissionsBoundaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteRolePermissionsBoundaryCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteRolePermissionsBoundaryCommand = deserializeAws_queryDeleteRolePermissionsBoundaryCommand;
const deserializeAws_queryDeleteRolePermissionsBoundaryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnmodifiableEntityException":
        case "com.amazonaws.iam#UnmodifiableEntityException":
            response = {
                ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteRolePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteRolePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteRolePolicyCommand = deserializeAws_queryDeleteRolePolicyCommand;
const deserializeAws_queryDeleteRolePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnmodifiableEntityException":
        case "com.amazonaws.iam#UnmodifiableEntityException":
            response = {
                ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteSAMLProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteSAMLProviderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteSAMLProviderCommand = deserializeAws_queryDeleteSAMLProviderCommand;
const deserializeAws_queryDeleteSAMLProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteServerCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteServerCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteServerCertificateCommand = deserializeAws_queryDeleteServerCertificateCommand;
const deserializeAws_queryDeleteServerCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeleteConflictException":
        case "com.amazonaws.iam#DeleteConflictException":
            response = {
                ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteServiceLinkedRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteServiceLinkedRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteServiceLinkedRoleResponse(data.DeleteServiceLinkedRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteServiceLinkedRoleCommand = deserializeAws_queryDeleteServiceLinkedRoleCommand;
const deserializeAws_queryDeleteServiceLinkedRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteServiceSpecificCredentialCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteServiceSpecificCredentialCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteServiceSpecificCredentialCommand = deserializeAws_queryDeleteServiceSpecificCredentialCommand;
const deserializeAws_queryDeleteServiceSpecificCredentialCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteSigningCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteSigningCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteSigningCertificateCommand = deserializeAws_queryDeleteSigningCertificateCommand;
const deserializeAws_queryDeleteSigningCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteSSHPublicKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteSSHPublicKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteSSHPublicKeyCommand = deserializeAws_queryDeleteSSHPublicKeyCommand;
const deserializeAws_queryDeleteSSHPublicKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteUserCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteUserCommand = deserializeAws_queryDeleteUserCommand;
const deserializeAws_queryDeleteUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeleteConflictException":
        case "com.amazonaws.iam#DeleteConflictException":
            response = {
                ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteUserPermissionsBoundaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteUserPermissionsBoundaryCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteUserPermissionsBoundaryCommand = deserializeAws_queryDeleteUserPermissionsBoundaryCommand;
const deserializeAws_queryDeleteUserPermissionsBoundaryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteUserPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteUserPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteUserPolicyCommand = deserializeAws_queryDeleteUserPolicyCommand;
const deserializeAws_queryDeleteUserPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteVirtualMFADeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteVirtualMFADeviceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteVirtualMFADeviceCommand = deserializeAws_queryDeleteVirtualMFADeviceCommand;
const deserializeAws_queryDeleteVirtualMFADeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeleteConflictException":
        case "com.amazonaws.iam#DeleteConflictException":
            response = {
                ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDetachGroupPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDetachGroupPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDetachGroupPolicyCommand = deserializeAws_queryDetachGroupPolicyCommand;
const deserializeAws_queryDetachGroupPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDetachRolePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDetachRolePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDetachRolePolicyCommand = deserializeAws_queryDetachRolePolicyCommand;
const deserializeAws_queryDetachRolePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnmodifiableEntityException":
        case "com.amazonaws.iam#UnmodifiableEntityException":
            response = {
                ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDetachUserPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDetachUserPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDetachUserPolicyCommand = deserializeAws_queryDetachUserPolicyCommand;
const deserializeAws_queryDetachUserPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryEnableMFADeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryEnableMFADeviceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryEnableMFADeviceCommand = deserializeAws_queryEnableMFADeviceCommand;
const deserializeAws_queryEnableMFADeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityTemporarilyUnmodifiableException":
        case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
            response = {
                ...(await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAuthenticationCodeException":
        case "com.amazonaws.iam#InvalidAuthenticationCodeException":
            response = {
                ...(await deserializeAws_queryInvalidAuthenticationCodeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGenerateCredentialReportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGenerateCredentialReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGenerateCredentialReportResponse(data.GenerateCredentialReportResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGenerateCredentialReportCommand = deserializeAws_queryGenerateCredentialReportCommand;
const deserializeAws_queryGenerateCredentialReportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGenerateOrganizationsAccessReportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGenerateOrganizationsAccessReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGenerateOrganizationsAccessReportResponse(data.GenerateOrganizationsAccessReportResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGenerateOrganizationsAccessReportCommand = deserializeAws_queryGenerateOrganizationsAccessReportCommand;
const deserializeAws_queryGenerateOrganizationsAccessReportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ReportGenerationLimitExceededException":
        case "com.amazonaws.iam#ReportGenerationLimitExceededException":
            response = {
                ...(await deserializeAws_queryReportGenerationLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGenerateServiceLastAccessedDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGenerateServiceLastAccessedDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGenerateServiceLastAccessedDetailsResponse(data.GenerateServiceLastAccessedDetailsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGenerateServiceLastAccessedDetailsCommand = deserializeAws_queryGenerateServiceLastAccessedDetailsCommand;
const deserializeAws_queryGenerateServiceLastAccessedDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetAccessKeyLastUsedCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetAccessKeyLastUsedCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetAccessKeyLastUsedResponse(data.GetAccessKeyLastUsedResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetAccessKeyLastUsedCommand = deserializeAws_queryGetAccessKeyLastUsedCommand;
const deserializeAws_queryGetAccessKeyLastUsedCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetAccountAuthorizationDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetAccountAuthorizationDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetAccountAuthorizationDetailsResponse(data.GetAccountAuthorizationDetailsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetAccountAuthorizationDetailsCommand = deserializeAws_queryGetAccountAuthorizationDetailsCommand;
const deserializeAws_queryGetAccountAuthorizationDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetAccountPasswordPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetAccountPasswordPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetAccountPasswordPolicyResponse(data.GetAccountPasswordPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetAccountPasswordPolicyCommand = deserializeAws_queryGetAccountPasswordPolicyCommand;
const deserializeAws_queryGetAccountPasswordPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetAccountSummaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetAccountSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetAccountSummaryResponse(data.GetAccountSummaryResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetAccountSummaryCommand = deserializeAws_queryGetAccountSummaryCommand;
const deserializeAws_queryGetAccountSummaryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetContextKeysForCustomPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetContextKeysForCustomPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetContextKeysForPolicyResponse(data.GetContextKeysForCustomPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetContextKeysForCustomPolicyCommand = deserializeAws_queryGetContextKeysForCustomPolicyCommand;
const deserializeAws_queryGetContextKeysForCustomPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetContextKeysForPrincipalPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetContextKeysForPrincipalPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetContextKeysForPolicyResponse(data.GetContextKeysForPrincipalPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetContextKeysForPrincipalPolicyCommand = deserializeAws_queryGetContextKeysForPrincipalPolicyCommand;
const deserializeAws_queryGetContextKeysForPrincipalPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetCredentialReportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetCredentialReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetCredentialReportResponse(data.GetCredentialReportResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetCredentialReportCommand = deserializeAws_queryGetCredentialReportCommand;
const deserializeAws_queryGetCredentialReportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CredentialReportExpiredException":
        case "com.amazonaws.iam#CredentialReportExpiredException":
            response = {
                ...(await deserializeAws_queryCredentialReportExpiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CredentialReportNotPresentException":
        case "com.amazonaws.iam#CredentialReportNotPresentException":
            response = {
                ...(await deserializeAws_queryCredentialReportNotPresentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CredentialReportNotReadyException":
        case "com.amazonaws.iam#CredentialReportNotReadyException":
            response = {
                ...(await deserializeAws_queryCredentialReportNotReadyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetGroupResponse(data.GetGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetGroupCommand = deserializeAws_queryGetGroupCommand;
const deserializeAws_queryGetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetGroupPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetGroupPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetGroupPolicyResponse(data.GetGroupPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetGroupPolicyCommand = deserializeAws_queryGetGroupPolicyCommand;
const deserializeAws_queryGetGroupPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetInstanceProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetInstanceProfileResponse(data.GetInstanceProfileResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetInstanceProfileCommand = deserializeAws_queryGetInstanceProfileCommand;
const deserializeAws_queryGetInstanceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetLoginProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetLoginProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetLoginProfileResponse(data.GetLoginProfileResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetLoginProfileCommand = deserializeAws_queryGetLoginProfileCommand;
const deserializeAws_queryGetLoginProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetOpenIDConnectProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetOpenIDConnectProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetOpenIDConnectProviderResponse(data.GetOpenIDConnectProviderResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetOpenIDConnectProviderCommand = deserializeAws_queryGetOpenIDConnectProviderCommand;
const deserializeAws_queryGetOpenIDConnectProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetOrganizationsAccessReportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetOrganizationsAccessReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetOrganizationsAccessReportResponse(data.GetOrganizationsAccessReportResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetOrganizationsAccessReportCommand = deserializeAws_queryGetOrganizationsAccessReportCommand;
const deserializeAws_queryGetOrganizationsAccessReportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetPolicyResponse(data.GetPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetPolicyCommand = deserializeAws_queryGetPolicyCommand;
const deserializeAws_queryGetPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetPolicyVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetPolicyVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetPolicyVersionResponse(data.GetPolicyVersionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetPolicyVersionCommand = deserializeAws_queryGetPolicyVersionCommand;
const deserializeAws_queryGetPolicyVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetRoleResponse(data.GetRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetRoleCommand = deserializeAws_queryGetRoleCommand;
const deserializeAws_queryGetRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetRolePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetRolePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetRolePolicyResponse(data.GetRolePolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetRolePolicyCommand = deserializeAws_queryGetRolePolicyCommand;
const deserializeAws_queryGetRolePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetSAMLProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetSAMLProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSAMLProviderResponse(data.GetSAMLProviderResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetSAMLProviderCommand = deserializeAws_queryGetSAMLProviderCommand;
const deserializeAws_queryGetSAMLProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetServerCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetServerCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetServerCertificateResponse(data.GetServerCertificateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetServerCertificateCommand = deserializeAws_queryGetServerCertificateCommand;
const deserializeAws_queryGetServerCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetServiceLastAccessedDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetServiceLastAccessedDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetServiceLastAccessedDetailsResponse(data.GetServiceLastAccessedDetailsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetServiceLastAccessedDetailsCommand = deserializeAws_queryGetServiceLastAccessedDetailsCommand;
const deserializeAws_queryGetServiceLastAccessedDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesResponse(data.GetServiceLastAccessedDetailsWithEntitiesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand = deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand;
const deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetServiceLinkedRoleDeletionStatusResponse(data.GetServiceLinkedRoleDeletionStatusResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand = deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand;
const deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetSSHPublicKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetSSHPublicKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSSHPublicKeyResponse(data.GetSSHPublicKeyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetSSHPublicKeyCommand = deserializeAws_queryGetSSHPublicKeyCommand;
const deserializeAws_queryGetSSHPublicKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnrecognizedPublicKeyEncodingException":
        case "com.amazonaws.iam#UnrecognizedPublicKeyEncodingException":
            response = {
                ...(await deserializeAws_queryUnrecognizedPublicKeyEncodingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetUserResponse(data.GetUserResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetUserCommand = deserializeAws_queryGetUserCommand;
const deserializeAws_queryGetUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetUserPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetUserPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetUserPolicyResponse(data.GetUserPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetUserPolicyCommand = deserializeAws_queryGetUserPolicyCommand;
const deserializeAws_queryGetUserPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListAccessKeysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListAccessKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListAccessKeysResponse(data.ListAccessKeysResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListAccessKeysCommand = deserializeAws_queryListAccessKeysCommand;
const deserializeAws_queryListAccessKeysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListAccountAliasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListAccountAliasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListAccountAliasesResponse(data.ListAccountAliasesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListAccountAliasesCommand = deserializeAws_queryListAccountAliasesCommand;
const deserializeAws_queryListAccountAliasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListAttachedGroupPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListAttachedGroupPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListAttachedGroupPoliciesResponse(data.ListAttachedGroupPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListAttachedGroupPoliciesCommand = deserializeAws_queryListAttachedGroupPoliciesCommand;
const deserializeAws_queryListAttachedGroupPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListAttachedRolePoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListAttachedRolePoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListAttachedRolePoliciesResponse(data.ListAttachedRolePoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListAttachedRolePoliciesCommand = deserializeAws_queryListAttachedRolePoliciesCommand;
const deserializeAws_queryListAttachedRolePoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListAttachedUserPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListAttachedUserPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListAttachedUserPoliciesResponse(data.ListAttachedUserPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListAttachedUserPoliciesCommand = deserializeAws_queryListAttachedUserPoliciesCommand;
const deserializeAws_queryListAttachedUserPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListEntitiesForPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListEntitiesForPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListEntitiesForPolicyResponse(data.ListEntitiesForPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListEntitiesForPolicyCommand = deserializeAws_queryListEntitiesForPolicyCommand;
const deserializeAws_queryListEntitiesForPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListGroupPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListGroupPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListGroupPoliciesResponse(data.ListGroupPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListGroupPoliciesCommand = deserializeAws_queryListGroupPoliciesCommand;
const deserializeAws_queryListGroupPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListGroupsResponse(data.ListGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListGroupsCommand = deserializeAws_queryListGroupsCommand;
const deserializeAws_queryListGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListGroupsForUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListGroupsForUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListGroupsForUserResponse(data.ListGroupsForUserResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListGroupsForUserCommand = deserializeAws_queryListGroupsForUserCommand;
const deserializeAws_queryListGroupsForUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListInstanceProfilesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListInstanceProfilesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListInstanceProfilesResponse(data.ListInstanceProfilesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListInstanceProfilesCommand = deserializeAws_queryListInstanceProfilesCommand;
const deserializeAws_queryListInstanceProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListInstanceProfilesForRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListInstanceProfilesForRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListInstanceProfilesForRoleResponse(data.ListInstanceProfilesForRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListInstanceProfilesForRoleCommand = deserializeAws_queryListInstanceProfilesForRoleCommand;
const deserializeAws_queryListInstanceProfilesForRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListInstanceProfileTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListInstanceProfileTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListInstanceProfileTagsResponse(data.ListInstanceProfileTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListInstanceProfileTagsCommand = deserializeAws_queryListInstanceProfileTagsCommand;
const deserializeAws_queryListInstanceProfileTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListMFADevicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListMFADevicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListMFADevicesResponse(data.ListMFADevicesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListMFADevicesCommand = deserializeAws_queryListMFADevicesCommand;
const deserializeAws_queryListMFADevicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListMFADeviceTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListMFADeviceTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListMFADeviceTagsResponse(data.ListMFADeviceTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListMFADeviceTagsCommand = deserializeAws_queryListMFADeviceTagsCommand;
const deserializeAws_queryListMFADeviceTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListOpenIDConnectProvidersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListOpenIDConnectProvidersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListOpenIDConnectProvidersResponse(data.ListOpenIDConnectProvidersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListOpenIDConnectProvidersCommand = deserializeAws_queryListOpenIDConnectProvidersCommand;
const deserializeAws_queryListOpenIDConnectProvidersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListOpenIDConnectProviderTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListOpenIDConnectProviderTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListOpenIDConnectProviderTagsResponse(data.ListOpenIDConnectProviderTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListOpenIDConnectProviderTagsCommand = deserializeAws_queryListOpenIDConnectProviderTagsCommand;
const deserializeAws_queryListOpenIDConnectProviderTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListPoliciesResponse(data.ListPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListPoliciesCommand = deserializeAws_queryListPoliciesCommand;
const deserializeAws_queryListPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListPoliciesGrantingServiceAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListPoliciesGrantingServiceAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListPoliciesGrantingServiceAccessResponse(data.ListPoliciesGrantingServiceAccessResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListPoliciesGrantingServiceAccessCommand = deserializeAws_queryListPoliciesGrantingServiceAccessCommand;
const deserializeAws_queryListPoliciesGrantingServiceAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListPolicyTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListPolicyTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListPolicyTagsResponse(data.ListPolicyTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListPolicyTagsCommand = deserializeAws_queryListPolicyTagsCommand;
const deserializeAws_queryListPolicyTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListPolicyVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListPolicyVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListPolicyVersionsResponse(data.ListPolicyVersionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListPolicyVersionsCommand = deserializeAws_queryListPolicyVersionsCommand;
const deserializeAws_queryListPolicyVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListRolePoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListRolePoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListRolePoliciesResponse(data.ListRolePoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListRolePoliciesCommand = deserializeAws_queryListRolePoliciesCommand;
const deserializeAws_queryListRolePoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListRolesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListRolesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListRolesResponse(data.ListRolesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListRolesCommand = deserializeAws_queryListRolesCommand;
const deserializeAws_queryListRolesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListRoleTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListRoleTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListRoleTagsResponse(data.ListRoleTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListRoleTagsCommand = deserializeAws_queryListRoleTagsCommand;
const deserializeAws_queryListRoleTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListSAMLProvidersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListSAMLProvidersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListSAMLProvidersResponse(data.ListSAMLProvidersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListSAMLProvidersCommand = deserializeAws_queryListSAMLProvidersCommand;
const deserializeAws_queryListSAMLProvidersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListSAMLProviderTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListSAMLProviderTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListSAMLProviderTagsResponse(data.ListSAMLProviderTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListSAMLProviderTagsCommand = deserializeAws_queryListSAMLProviderTagsCommand;
const deserializeAws_queryListSAMLProviderTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListServerCertificatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListServerCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListServerCertificatesResponse(data.ListServerCertificatesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListServerCertificatesCommand = deserializeAws_queryListServerCertificatesCommand;
const deserializeAws_queryListServerCertificatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListServerCertificateTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListServerCertificateTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListServerCertificateTagsResponse(data.ListServerCertificateTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListServerCertificateTagsCommand = deserializeAws_queryListServerCertificateTagsCommand;
const deserializeAws_queryListServerCertificateTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListServiceSpecificCredentialsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListServiceSpecificCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListServiceSpecificCredentialsResponse(data.ListServiceSpecificCredentialsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListServiceSpecificCredentialsCommand = deserializeAws_queryListServiceSpecificCredentialsCommand;
const deserializeAws_queryListServiceSpecificCredentialsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotSupportedException":
        case "com.amazonaws.iam#ServiceNotSupportedException":
            response = {
                ...(await deserializeAws_queryServiceNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListSigningCertificatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListSigningCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListSigningCertificatesResponse(data.ListSigningCertificatesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListSigningCertificatesCommand = deserializeAws_queryListSigningCertificatesCommand;
const deserializeAws_queryListSigningCertificatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListSSHPublicKeysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListSSHPublicKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListSSHPublicKeysResponse(data.ListSSHPublicKeysResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListSSHPublicKeysCommand = deserializeAws_queryListSSHPublicKeysCommand;
const deserializeAws_queryListSSHPublicKeysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListUserPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListUserPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListUserPoliciesResponse(data.ListUserPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListUserPoliciesCommand = deserializeAws_queryListUserPoliciesCommand;
const deserializeAws_queryListUserPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListUsersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListUsersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListUsersResponse(data.ListUsersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListUsersCommand = deserializeAws_queryListUsersCommand;
const deserializeAws_queryListUsersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListUserTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListUserTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListUserTagsResponse(data.ListUserTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListUserTagsCommand = deserializeAws_queryListUserTagsCommand;
const deserializeAws_queryListUserTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListVirtualMFADevicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListVirtualMFADevicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListVirtualMFADevicesResponse(data.ListVirtualMFADevicesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListVirtualMFADevicesCommand = deserializeAws_queryListVirtualMFADevicesCommand;
const deserializeAws_queryListVirtualMFADevicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPutGroupPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPutGroupPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPutGroupPolicyCommand = deserializeAws_queryPutGroupPolicyCommand;
const deserializeAws_queryPutGroupPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.iam#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPutRolePermissionsBoundaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPutRolePermissionsBoundaryCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPutRolePermissionsBoundaryCommand = deserializeAws_queryPutRolePermissionsBoundaryCommand;
const deserializeAws_queryPutRolePermissionsBoundaryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotAttachableException":
        case "com.amazonaws.iam#PolicyNotAttachableException":
            response = {
                ...(await deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnmodifiableEntityException":
        case "com.amazonaws.iam#UnmodifiableEntityException":
            response = {
                ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPutRolePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPutRolePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPutRolePolicyCommand = deserializeAws_queryPutRolePolicyCommand;
const deserializeAws_queryPutRolePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.iam#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnmodifiableEntityException":
        case "com.amazonaws.iam#UnmodifiableEntityException":
            response = {
                ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPutUserPermissionsBoundaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPutUserPermissionsBoundaryCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPutUserPermissionsBoundaryCommand = deserializeAws_queryPutUserPermissionsBoundaryCommand;
const deserializeAws_queryPutUserPermissionsBoundaryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotAttachableException":
        case "com.amazonaws.iam#PolicyNotAttachableException":
            response = {
                ...(await deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPutUserPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPutUserPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPutUserPolicyCommand = deserializeAws_queryPutUserPolicyCommand;
const deserializeAws_queryPutUserPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.iam#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand = deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand;
const deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryRemoveRoleFromInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRemoveRoleFromInstanceProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRemoveRoleFromInstanceProfileCommand = deserializeAws_queryRemoveRoleFromInstanceProfileCommand;
const deserializeAws_queryRemoveRoleFromInstanceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnmodifiableEntityException":
        case "com.amazonaws.iam#UnmodifiableEntityException":
            response = {
                ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryRemoveUserFromGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRemoveUserFromGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRemoveUserFromGroupCommand = deserializeAws_queryRemoveUserFromGroupCommand;
const deserializeAws_queryRemoveUserFromGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryResetServiceSpecificCredentialCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryResetServiceSpecificCredentialCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryResetServiceSpecificCredentialResponse(data.ResetServiceSpecificCredentialResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryResetServiceSpecificCredentialCommand = deserializeAws_queryResetServiceSpecificCredentialCommand;
const deserializeAws_queryResetServiceSpecificCredentialCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryResyncMFADeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryResyncMFADeviceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryResyncMFADeviceCommand = deserializeAws_queryResyncMFADeviceCommand;
const deserializeAws_queryResyncMFADeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidAuthenticationCodeException":
        case "com.amazonaws.iam#InvalidAuthenticationCodeException":
            response = {
                ...(await deserializeAws_queryInvalidAuthenticationCodeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetDefaultPolicyVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetDefaultPolicyVersionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetDefaultPolicyVersionCommand = deserializeAws_querySetDefaultPolicyVersionCommand;
const deserializeAws_querySetDefaultPolicyVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetSecurityTokenServicePreferencesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetSecurityTokenServicePreferencesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetSecurityTokenServicePreferencesCommand = deserializeAws_querySetSecurityTokenServicePreferencesCommand;
const deserializeAws_querySetSecurityTokenServicePreferencesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySimulateCustomPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySimulateCustomPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySimulatePolicyResponse(data.SimulateCustomPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySimulateCustomPolicyCommand = deserializeAws_querySimulateCustomPolicyCommand;
const deserializeAws_querySimulateCustomPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyEvaluationException":
        case "com.amazonaws.iam#PolicyEvaluationException":
            response = {
                ...(await deserializeAws_queryPolicyEvaluationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySimulatePrincipalPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySimulatePrincipalPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySimulatePolicyResponse(data.SimulatePrincipalPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySimulatePrincipalPolicyCommand = deserializeAws_querySimulatePrincipalPolicyCommand;
const deserializeAws_querySimulatePrincipalPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyEvaluationException":
        case "com.amazonaws.iam#PolicyEvaluationException":
            response = {
                ...(await deserializeAws_queryPolicyEvaluationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryTagInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryTagInstanceProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryTagInstanceProfileCommand = deserializeAws_queryTagInstanceProfileCommand;
const deserializeAws_queryTagInstanceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryTagMFADeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryTagMFADeviceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryTagMFADeviceCommand = deserializeAws_queryTagMFADeviceCommand;
const deserializeAws_queryTagMFADeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryTagOpenIDConnectProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryTagOpenIDConnectProviderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryTagOpenIDConnectProviderCommand = deserializeAws_queryTagOpenIDConnectProviderCommand;
const deserializeAws_queryTagOpenIDConnectProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryTagPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryTagPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryTagPolicyCommand = deserializeAws_queryTagPolicyCommand;
const deserializeAws_queryTagPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryTagRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryTagRoleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryTagRoleCommand = deserializeAws_queryTagRoleCommand;
const deserializeAws_queryTagRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryTagSAMLProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryTagSAMLProviderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryTagSAMLProviderCommand = deserializeAws_queryTagSAMLProviderCommand;
const deserializeAws_queryTagSAMLProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryTagServerCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryTagServerCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryTagServerCertificateCommand = deserializeAws_queryTagServerCertificateCommand;
const deserializeAws_queryTagServerCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryTagUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryTagUserCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryTagUserCommand = deserializeAws_queryTagUserCommand;
const deserializeAws_queryTagUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUntagInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUntagInstanceProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUntagInstanceProfileCommand = deserializeAws_queryUntagInstanceProfileCommand;
const deserializeAws_queryUntagInstanceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUntagMFADeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUntagMFADeviceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUntagMFADeviceCommand = deserializeAws_queryUntagMFADeviceCommand;
const deserializeAws_queryUntagMFADeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUntagOpenIDConnectProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUntagOpenIDConnectProviderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUntagOpenIDConnectProviderCommand = deserializeAws_queryUntagOpenIDConnectProviderCommand;
const deserializeAws_queryUntagOpenIDConnectProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUntagPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUntagPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUntagPolicyCommand = deserializeAws_queryUntagPolicyCommand;
const deserializeAws_queryUntagPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUntagRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUntagRoleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUntagRoleCommand = deserializeAws_queryUntagRoleCommand;
const deserializeAws_queryUntagRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUntagSAMLProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUntagSAMLProviderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUntagSAMLProviderCommand = deserializeAws_queryUntagSAMLProviderCommand;
const deserializeAws_queryUntagSAMLProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUntagServerCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUntagServerCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUntagServerCertificateCommand = deserializeAws_queryUntagServerCertificateCommand;
const deserializeAws_queryUntagServerCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUntagUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUntagUserCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUntagUserCommand = deserializeAws_queryUntagUserCommand;
const deserializeAws_queryUntagUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateAccessKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateAccessKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateAccessKeyCommand = deserializeAws_queryUpdateAccessKeyCommand;
const deserializeAws_queryUpdateAccessKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateAccountPasswordPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateAccountPasswordPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateAccountPasswordPolicyCommand = deserializeAws_queryUpdateAccountPasswordPolicyCommand;
const deserializeAws_queryUpdateAccountPasswordPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.iam#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateAssumeRolePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateAssumeRolePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateAssumeRolePolicyCommand = deserializeAws_queryUpdateAssumeRolePolicyCommand;
const deserializeAws_queryUpdateAssumeRolePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.iam#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnmodifiableEntityException":
        case "com.amazonaws.iam#UnmodifiableEntityException":
            response = {
                ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateGroupCommand = deserializeAws_queryUpdateGroupCommand;
const deserializeAws_queryUpdateGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateLoginProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateLoginProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateLoginProfileCommand = deserializeAws_queryUpdateLoginProfileCommand;
const deserializeAws_queryUpdateLoginProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityTemporarilyUnmodifiableException":
        case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
            response = {
                ...(await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordPolicyViolationException":
        case "com.amazonaws.iam#PasswordPolicyViolationException":
            response = {
                ...(await deserializeAws_queryPasswordPolicyViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand = deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand;
const deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateRoleResponse(data.UpdateRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateRoleCommand = deserializeAws_queryUpdateRoleCommand;
const deserializeAws_queryUpdateRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnmodifiableEntityException":
        case "com.amazonaws.iam#UnmodifiableEntityException":
            response = {
                ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateRoleDescriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateRoleDescriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateRoleDescriptionResponse(data.UpdateRoleDescriptionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateRoleDescriptionCommand = deserializeAws_queryUpdateRoleDescriptionCommand;
const deserializeAws_queryUpdateRoleDescriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnmodifiableEntityException":
        case "com.amazonaws.iam#UnmodifiableEntityException":
            response = {
                ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateSAMLProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateSAMLProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateSAMLProviderResponse(data.UpdateSAMLProviderResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateSAMLProviderCommand = deserializeAws_queryUpdateSAMLProviderCommand;
const deserializeAws_queryUpdateSAMLProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateServerCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateServerCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateServerCertificateCommand = deserializeAws_queryUpdateServerCertificateCommand;
const deserializeAws_queryUpdateServerCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateServiceSpecificCredentialCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateServiceSpecificCredentialCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateServiceSpecificCredentialCommand = deserializeAws_queryUpdateServiceSpecificCredentialCommand;
const deserializeAws_queryUpdateServiceSpecificCredentialCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateSigningCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateSigningCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateSigningCertificateCommand = deserializeAws_queryUpdateSigningCertificateCommand;
const deserializeAws_queryUpdateSigningCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateSSHPublicKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateSSHPublicKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateSSHPublicKeyCommand = deserializeAws_queryUpdateSSHPublicKeyCommand;
const deserializeAws_queryUpdateSSHPublicKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateUserCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateUserCommand = deserializeAws_queryUpdateUserCommand;
const deserializeAws_queryUpdateUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityTemporarilyUnmodifiableException":
        case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
            response = {
                ...(await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUploadServerCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUploadServerCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUploadServerCertificateResponse(data.UploadServerCertificateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUploadServerCertificateCommand = deserializeAws_queryUploadServerCertificateCommand;
const deserializeAws_queryUploadServerCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.iam#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.iam#InvalidInputException":
            response = {
                ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KeyPairMismatchException":
        case "com.amazonaws.iam#KeyPairMismatchException":
            response = {
                ...(await deserializeAws_queryKeyPairMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedCertificateException":
        case "com.amazonaws.iam#MalformedCertificateException":
            response = {
                ...(await deserializeAws_queryMalformedCertificateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUploadSigningCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUploadSigningCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUploadSigningCertificateResponse(data.UploadSigningCertificateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUploadSigningCertificateCommand = deserializeAws_queryUploadSigningCertificateCommand;
const deserializeAws_queryUploadSigningCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateCertificateException":
        case "com.amazonaws.iam#DuplicateCertificateException":
            response = {
                ...(await deserializeAws_queryDuplicateCertificateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCertificateException":
        case "com.amazonaws.iam#InvalidCertificateException":
            response = {
                ...(await deserializeAws_queryInvalidCertificateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedCertificateException":
        case "com.amazonaws.iam#MalformedCertificateException":
            response = {
                ...(await deserializeAws_queryMalformedCertificateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceFailureException":
        case "com.amazonaws.iam#ServiceFailureException":
            response = {
                ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUploadSSHPublicKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUploadSSHPublicKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUploadSSHPublicKeyResponse(data.UploadSSHPublicKeyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUploadSSHPublicKeyCommand = deserializeAws_queryUploadSSHPublicKeyCommand;
const deserializeAws_queryUploadSSHPublicKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateSSHPublicKeyException":
        case "com.amazonaws.iam#DuplicateSSHPublicKeyException":
            response = {
                ...(await deserializeAws_queryDuplicateSSHPublicKeyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPublicKeyException":
        case "com.amazonaws.iam#InvalidPublicKeyException":
            response = {
                ...(await deserializeAws_queryInvalidPublicKeyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iam#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.iam#NoSuchEntityException":
            response = {
                ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnrecognizedPublicKeyEncodingException":
        case "com.amazonaws.iam#UnrecognizedPublicKeyEncodingException":
            response = {
                ...(await deserializeAws_queryUnrecognizedPublicKeyEncodingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryConcurrentModificationException(body.Error, context);
    const contents = {
        name: "ConcurrentModificationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCredentialReportExpiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCredentialReportExpiredException(body.Error, context);
    const contents = {
        name: "CredentialReportExpiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCredentialReportNotPresentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCredentialReportNotPresentException(body.Error, context);
    const contents = {
        name: "CredentialReportNotPresentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCredentialReportNotReadyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCredentialReportNotReadyException(body.Error, context);
    const contents = {
        name: "CredentialReportNotReadyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDeleteConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDeleteConflictException(body.Error, context);
    const contents = {
        name: "DeleteConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDuplicateCertificateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateCertificateException(body.Error, context);
    const contents = {
        name: "DuplicateCertificateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDuplicateSSHPublicKeyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateSSHPublicKeyException(body.Error, context);
    const contents = {
        name: "DuplicateSSHPublicKeyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryEntityAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEntityAlreadyExistsException(body.Error, context);
    const contents = {
        name: "EntityAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEntityTemporarilyUnmodifiableException(body.Error, context);
    const contents = {
        name: "EntityTemporarilyUnmodifiableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidAuthenticationCodeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidAuthenticationCodeException(body.Error, context);
    const contents = {
        name: "InvalidAuthenticationCodeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidCertificateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidCertificateException(body.Error, context);
    const contents = {
        name: "InvalidCertificateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidInputException(body.Error, context);
    const contents = {
        name: "InvalidInputException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidPublicKeyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidPublicKeyException(body.Error, context);
    const contents = {
        name: "InvalidPublicKeyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidUserTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidUserTypeException(body.Error, context);
    const contents = {
        name: "InvalidUserTypeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryKeyPairMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKeyPairMismatchException(body.Error, context);
    const contents = {
        name: "KeyPairMismatchException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLimitExceededException(body.Error, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryMalformedCertificateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMalformedCertificateException(body.Error, context);
    const contents = {
        name: "MalformedCertificateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryMalformedPolicyDocumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMalformedPolicyDocumentException(body.Error, context);
    const contents = {
        name: "MalformedPolicyDocumentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryNoSuchEntityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNoSuchEntityException(body.Error, context);
    const contents = {
        name: "NoSuchEntityException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryPasswordPolicyViolationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPasswordPolicyViolationException(body.Error, context);
    const contents = {
        name: "PasswordPolicyViolationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryPolicyEvaluationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPolicyEvaluationException(body.Error, context);
    const contents = {
        name: "PolicyEvaluationException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryPolicyNotAttachableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPolicyNotAttachableException(body.Error, context);
    const contents = {
        name: "PolicyNotAttachableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReportGenerationLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReportGenerationLimitExceededException(body.Error, context);
    const contents = {
        name: "ReportGenerationLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryServiceFailureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryServiceFailureException(body.Error, context);
    const contents = {
        name: "ServiceFailureException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryServiceNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryServiceNotSupportedException(body.Error, context);
    const contents = {
        name: "ServiceNotSupportedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUnmodifiableEntityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnmodifiableEntityException(body.Error, context);
    const contents = {
        name: "UnmodifiableEntityException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUnrecognizedPublicKeyEncodingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnrecognizedPublicKeyEncodingException(body.Error, context);
    const contents = {
        name: "UnrecognizedPublicKeyEncodingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_queryActionNameListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAddClientIDToOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input.OpenIDConnectProviderArn !== undefined && input.OpenIDConnectProviderArn !== null) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    if (input.ClientID !== undefined && input.ClientID !== null) {
        entries["ClientID"] = input.ClientID;
    }
    return entries;
};
const serializeAws_queryAddRoleToInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input.InstanceProfileName !== undefined && input.InstanceProfileName !== null) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryAddUserToGroupRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryAttachGroupPolicyRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
const serializeAws_queryAttachRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
const serializeAws_queryAttachUserPolicyRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
const serializeAws_queryChangePasswordRequest = (input, context) => {
    const entries = {};
    if (input.OldPassword !== undefined && input.OldPassword !== null) {
        entries["OldPassword"] = input.OldPassword;
    }
    if (input.NewPassword !== undefined && input.NewPassword !== null) {
        entries["NewPassword"] = input.NewPassword;
    }
    return entries;
};
const serializeAws_queryclientIDListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryContextEntry = (input, context) => {
    const entries = {};
    if (input.ContextKeyName !== undefined && input.ContextKeyName !== null) {
        entries["ContextKeyName"] = input.ContextKeyName;
    }
    if (input.ContextKeyValues !== undefined && input.ContextKeyValues !== null) {
        const memberEntries = serializeAws_queryContextKeyValueListType(input.ContextKeyValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ContextKeyValues.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ContextKeyType !== undefined && input.ContextKeyType !== null) {
        entries["ContextKeyType"] = input.ContextKeyType;
    }
    return entries;
};
const serializeAws_queryContextEntryListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryContextEntry(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryContextKeyValueListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryCreateAccessKeyRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryCreateAccountAliasRequest = (input, context) => {
    const entries = {};
    if (input.AccountAlias !== undefined && input.AccountAlias !== null) {
        entries["AccountAlias"] = input.AccountAlias;
    }
    return entries;
};
const serializeAws_queryCreateGroupRequest = (input, context) => {
    const entries = {};
    if (input.Path !== undefined && input.Path !== null) {
        entries["Path"] = input.Path;
    }
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    return entries;
};
const serializeAws_queryCreateInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input.InstanceProfileName !== undefined && input.InstanceProfileName !== null) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    if (input.Path !== undefined && input.Path !== null) {
        entries["Path"] = input.Path;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateLoginProfileRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryCreateOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input.Url !== undefined && input.Url !== null) {
        entries["Url"] = input.Url;
    }
    if (input.ClientIDList !== undefined && input.ClientIDList !== null) {
        const memberEntries = serializeAws_queryclientIDListType(input.ClientIDList, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ClientIDList.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ThumbprintList !== undefined && input.ThumbprintList !== null) {
        const memberEntries = serializeAws_querythumbprintListType(input.ThumbprintList, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ThumbprintList.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreatePolicyRequest = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreatePolicyVersionRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryCreateRoleRequest = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input.SAMLMetadataDocument !== undefined && input.SAMLMetadataDocument !== null) {
        entries["SAMLMetadataDocument"] = input.SAMLMetadataDocument;
    }
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateServiceLinkedRoleRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryCreateServiceSpecificCredentialRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.ServiceName !== undefined && input.ServiceName !== null) {
        entries["ServiceName"] = input.ServiceName;
    }
    return entries;
};
const serializeAws_queryCreateUserRequest = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateVirtualMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input.Path !== undefined && input.Path !== null) {
        entries["Path"] = input.Path;
    }
    if (input.VirtualMFADeviceName !== undefined && input.VirtualMFADeviceName !== null) {
        entries["VirtualMFADeviceName"] = input.VirtualMFADeviceName;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDeactivateMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    return entries;
};
const serializeAws_queryDeleteAccessKeyRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.AccessKeyId !== undefined && input.AccessKeyId !== null) {
        entries["AccessKeyId"] = input.AccessKeyId;
    }
    return entries;
};
const serializeAws_queryDeleteAccountAliasRequest = (input, context) => {
    const entries = {};
    if (input.AccountAlias !== undefined && input.AccountAlias !== null) {
        entries["AccountAlias"] = input.AccountAlias;
    }
    return entries;
};
const serializeAws_queryDeleteGroupPolicyRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryDeleteGroupRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    return entries;
};
const serializeAws_queryDeleteInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input.InstanceProfileName !== undefined && input.InstanceProfileName !== null) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    return entries;
};
const serializeAws_queryDeleteLoginProfileRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryDeleteOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input.OpenIDConnectProviderArn !== undefined && input.OpenIDConnectProviderArn !== null) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    return entries;
};
const serializeAws_queryDeletePolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
const serializeAws_queryDeletePolicyVersionRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.VersionId !== undefined && input.VersionId !== null) {
        entries["VersionId"] = input.VersionId;
    }
    return entries;
};
const serializeAws_queryDeleteRolePermissionsBoundaryRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryDeleteRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryDeleteRoleRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryDeleteSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input.SAMLProviderArn !== undefined && input.SAMLProviderArn !== null) {
        entries["SAMLProviderArn"] = input.SAMLProviderArn;
    }
    return entries;
};
const serializeAws_queryDeleteServerCertificateRequest = (input, context) => {
    const entries = {};
    if (input.ServerCertificateName !== undefined && input.ServerCertificateName !== null) {
        entries["ServerCertificateName"] = input.ServerCertificateName;
    }
    return entries;
};
const serializeAws_queryDeleteServiceLinkedRoleRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryDeleteServiceSpecificCredentialRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.ServiceSpecificCredentialId !== undefined && input.ServiceSpecificCredentialId !== null) {
        entries["ServiceSpecificCredentialId"] = input.ServiceSpecificCredentialId;
    }
    return entries;
};
const serializeAws_queryDeleteSigningCertificateRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.CertificateId !== undefined && input.CertificateId !== null) {
        entries["CertificateId"] = input.CertificateId;
    }
    return entries;
};
const serializeAws_queryDeleteSSHPublicKeyRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.SSHPublicKeyId !== undefined && input.SSHPublicKeyId !== null) {
        entries["SSHPublicKeyId"] = input.SSHPublicKeyId;
    }
    return entries;
};
const serializeAws_queryDeleteUserPermissionsBoundaryRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryDeleteUserPolicyRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryDeleteUserRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryDeleteVirtualMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    return entries;
};
const serializeAws_queryDetachGroupPolicyRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
const serializeAws_queryDetachRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
const serializeAws_queryDetachUserPolicyRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
const serializeAws_queryEnableMFADeviceRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryentityListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryGenerateOrganizationsAccessReportRequest = (input, context) => {
    const entries = {};
    if (input.EntityPath !== undefined && input.EntityPath !== null) {
        entries["EntityPath"] = input.EntityPath;
    }
    if (input.OrganizationsPolicyId !== undefined && input.OrganizationsPolicyId !== null) {
        entries["OrganizationsPolicyId"] = input.OrganizationsPolicyId;
    }
    return entries;
};
const serializeAws_queryGenerateServiceLastAccessedDetailsRequest = (input, context) => {
    const entries = {};
    if (input.Arn !== undefined && input.Arn !== null) {
        entries["Arn"] = input.Arn;
    }
    if (input.Granularity !== undefined && input.Granularity !== null) {
        entries["Granularity"] = input.Granularity;
    }
    return entries;
};
const serializeAws_queryGetAccessKeyLastUsedRequest = (input, context) => {
    const entries = {};
    if (input.AccessKeyId !== undefined && input.AccessKeyId !== null) {
        entries["AccessKeyId"] = input.AccessKeyId;
    }
    return entries;
};
const serializeAws_queryGetAccountAuthorizationDetailsRequest = (input, context) => {
    const entries = {};
    if (input.Filter !== undefined && input.Filter !== null) {
        const memberEntries = serializeAws_queryentityListType(input.Filter, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Filter.${key}`;
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
const serializeAws_queryGetContextKeysForCustomPolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyInputList !== undefined && input.PolicyInputList !== null) {
        const memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyInputList.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryGetContextKeysForPrincipalPolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicySourceArn !== undefined && input.PolicySourceArn !== null) {
        entries["PolicySourceArn"] = input.PolicySourceArn;
    }
    if (input.PolicyInputList !== undefined && input.PolicyInputList !== null) {
        const memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyInputList.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryGetGroupPolicyRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryGetGroupRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryGetInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input.InstanceProfileName !== undefined && input.InstanceProfileName !== null) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    return entries;
};
const serializeAws_queryGetLoginProfileRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryGetOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input.OpenIDConnectProviderArn !== undefined && input.OpenIDConnectProviderArn !== null) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    return entries;
};
const serializeAws_queryGetOrganizationsAccessReportRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryGetPolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
const serializeAws_queryGetPolicyVersionRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.VersionId !== undefined && input.VersionId !== null) {
        entries["VersionId"] = input.VersionId;
    }
    return entries;
};
const serializeAws_queryGetRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryGetRoleRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryGetSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input.SAMLProviderArn !== undefined && input.SAMLProviderArn !== null) {
        entries["SAMLProviderArn"] = input.SAMLProviderArn;
    }
    return entries;
};
const serializeAws_queryGetServerCertificateRequest = (input, context) => {
    const entries = {};
    if (input.ServerCertificateName !== undefined && input.ServerCertificateName !== null) {
        entries["ServerCertificateName"] = input.ServerCertificateName;
    }
    return entries;
};
const serializeAws_queryGetServiceLastAccessedDetailsRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryGetServiceLinkedRoleDeletionStatusRequest = (input, context) => {
    const entries = {};
    if (input.DeletionTaskId !== undefined && input.DeletionTaskId !== null) {
        entries["DeletionTaskId"] = input.DeletionTaskId;
    }
    return entries;
};
const serializeAws_queryGetSSHPublicKeyRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryGetUserPolicyRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryGetUserRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryListAccessKeysRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListAccountAliasesRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
const serializeAws_queryListAttachedGroupPoliciesRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListAttachedRolePoliciesRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListAttachedUserPoliciesRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListEntitiesForPolicyRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListGroupPoliciesRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListGroupsForUserRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListGroupsRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListInstanceProfilesForRoleRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListInstanceProfilesRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListInstanceProfileTagsRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListMFADevicesRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListMFADeviceTagsRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListOpenIDConnectProvidersRequest = (input, context) => {
    const entries = {};
    return entries;
};
const serializeAws_queryListOpenIDConnectProviderTagsRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListPoliciesGrantingServiceAccessRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.Arn !== undefined && input.Arn !== null) {
        entries["Arn"] = input.Arn;
    }
    if (input.ServiceNamespaces !== undefined && input.ServiceNamespaces !== null) {
        const memberEntries = serializeAws_queryserviceNamespaceListType(input.ServiceNamespaces, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ServiceNamespaces.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryListPoliciesRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListPolicyTagsRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListPolicyVersionsRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListRolePoliciesRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListRolesRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListRoleTagsRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListSAMLProvidersRequest = (input, context) => {
    const entries = {};
    return entries;
};
const serializeAws_queryListSAMLProviderTagsRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListServerCertificatesRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListServerCertificateTagsRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListServiceSpecificCredentialsRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.ServiceName !== undefined && input.ServiceName !== null) {
        entries["ServiceName"] = input.ServiceName;
    }
    return entries;
};
const serializeAws_queryListSigningCertificatesRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListSSHPublicKeysRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListUserPoliciesRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListUsersRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListUserTagsRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryListVirtualMFADevicesRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryPutGroupPolicyRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryPutRolePermissionsBoundaryRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.PermissionsBoundary !== undefined && input.PermissionsBoundary !== null) {
        entries["PermissionsBoundary"] = input.PermissionsBoundary;
    }
    return entries;
};
const serializeAws_queryPutRolePolicyRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryPutUserPermissionsBoundaryRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.PermissionsBoundary !== undefined && input.PermissionsBoundary !== null) {
        entries["PermissionsBoundary"] = input.PermissionsBoundary;
    }
    return entries;
};
const serializeAws_queryPutUserPolicyRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryRemoveClientIDFromOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input.OpenIDConnectProviderArn !== undefined && input.OpenIDConnectProviderArn !== null) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    if (input.ClientID !== undefined && input.ClientID !== null) {
        entries["ClientID"] = input.ClientID;
    }
    return entries;
};
const serializeAws_queryRemoveRoleFromInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input.InstanceProfileName !== undefined && input.InstanceProfileName !== null) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryRemoveUserFromGroupRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryResetServiceSpecificCredentialRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.ServiceSpecificCredentialId !== undefined && input.ServiceSpecificCredentialId !== null) {
        entries["ServiceSpecificCredentialId"] = input.ServiceSpecificCredentialId;
    }
    return entries;
};
const serializeAws_queryResourceNameListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryResyncMFADeviceRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryserviceNamespaceListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querySetDefaultPolicyVersionRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.VersionId !== undefined && input.VersionId !== null) {
        entries["VersionId"] = input.VersionId;
    }
    return entries;
};
const serializeAws_querySetSecurityTokenServicePreferencesRequest = (input, context) => {
    const entries = {};
    if (input.GlobalEndpointTokenVersion !== undefined && input.GlobalEndpointTokenVersion !== null) {
        entries["GlobalEndpointTokenVersion"] = input.GlobalEndpointTokenVersion;
    }
    return entries;
};
const serializeAws_querySimulateCustomPolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyInputList !== undefined && input.PolicyInputList !== null) {
        const memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyInputList.${key}`;
            entries[loc] = value;
        });
    }
    if (input.PermissionsBoundaryPolicyInputList !== undefined && input.PermissionsBoundaryPolicyInputList !== null) {
        const memberEntries = serializeAws_querySimulationPolicyListType(input.PermissionsBoundaryPolicyInputList, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PermissionsBoundaryPolicyInputList.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ActionNames !== undefined && input.ActionNames !== null) {
        const memberEntries = serializeAws_queryActionNameListType(input.ActionNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ActionNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ResourceArns !== undefined && input.ResourceArns !== null) {
        const memberEntries = serializeAws_queryResourceNameListType(input.ResourceArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ResourceArns.${key}`;
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
        const memberEntries = serializeAws_queryContextEntryListType(input.ContextEntries, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ContextEntries.${key}`;
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
const serializeAws_querySimulatePrincipalPolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicySourceArn !== undefined && input.PolicySourceArn !== null) {
        entries["PolicySourceArn"] = input.PolicySourceArn;
    }
    if (input.PolicyInputList !== undefined && input.PolicyInputList !== null) {
        const memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyInputList.${key}`;
            entries[loc] = value;
        });
    }
    if (input.PermissionsBoundaryPolicyInputList !== undefined && input.PermissionsBoundaryPolicyInputList !== null) {
        const memberEntries = serializeAws_querySimulationPolicyListType(input.PermissionsBoundaryPolicyInputList, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PermissionsBoundaryPolicyInputList.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ActionNames !== undefined && input.ActionNames !== null) {
        const memberEntries = serializeAws_queryActionNameListType(input.ActionNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ActionNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ResourceArns !== undefined && input.ResourceArns !== null) {
        const memberEntries = serializeAws_queryResourceNameListType(input.ResourceArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ResourceArns.${key}`;
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
        const memberEntries = serializeAws_queryContextEntryListType(input.ContextEntries, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ContextEntries.${key}`;
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
const serializeAws_querySimulationPolicyListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTag = (input, context) => {
    const entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryTagInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input.InstanceProfileName !== undefined && input.InstanceProfileName !== null) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_querytagKeyListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querytagListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryTag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTagMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryTagOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input.OpenIDConnectProviderArn !== undefined && input.OpenIDConnectProviderArn !== null) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryTagPolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryTagRoleRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryTagSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input.SAMLProviderArn !== undefined && input.SAMLProviderArn !== null) {
        entries["SAMLProviderArn"] = input.SAMLProviderArn;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryTagServerCertificateRequest = (input, context) => {
    const entries = {};
    if (input.ServerCertificateName !== undefined && input.ServerCertificateName !== null) {
        entries["ServerCertificateName"] = input.ServerCertificateName;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryTagUserRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_querythumbprintListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryUntagInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input.InstanceProfileName !== undefined && input.InstanceProfileName !== null) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        const memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUntagMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        const memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUntagOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input.OpenIDConnectProviderArn !== undefined && input.OpenIDConnectProviderArn !== null) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        const memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUntagPolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined && input.PolicyArn !== null) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        const memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUntagRoleRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        const memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUntagSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input.SAMLProviderArn !== undefined && input.SAMLProviderArn !== null) {
        entries["SAMLProviderArn"] = input.SAMLProviderArn;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        const memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUntagServerCertificateRequest = (input, context) => {
    const entries = {};
    if (input.ServerCertificateName !== undefined && input.ServerCertificateName !== null) {
        entries["ServerCertificateName"] = input.ServerCertificateName;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        const memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUntagUserRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        const memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUpdateAccessKeyRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryUpdateAccountPasswordPolicyRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryUpdateAssumeRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.PolicyDocument !== undefined && input.PolicyDocument !== null) {
        entries["PolicyDocument"] = input.PolicyDocument;
    }
    return entries;
};
const serializeAws_queryUpdateGroupRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryUpdateLoginProfileRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryUpdateOpenIDConnectProviderThumbprintRequest = (input, context) => {
    const entries = {};
    if (input.OpenIDConnectProviderArn !== undefined && input.OpenIDConnectProviderArn !== null) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    if (input.ThumbprintList !== undefined && input.ThumbprintList !== null) {
        const memberEntries = serializeAws_querythumbprintListType(input.ThumbprintList, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ThumbprintList.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUpdateRoleDescriptionRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined && input.RoleName !== null) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    return entries;
};
const serializeAws_queryUpdateRoleRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryUpdateSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input.SAMLMetadataDocument !== undefined && input.SAMLMetadataDocument !== null) {
        entries["SAMLMetadataDocument"] = input.SAMLMetadataDocument;
    }
    if (input.SAMLProviderArn !== undefined && input.SAMLProviderArn !== null) {
        entries["SAMLProviderArn"] = input.SAMLProviderArn;
    }
    return entries;
};
const serializeAws_queryUpdateServerCertificateRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryUpdateServiceSpecificCredentialRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryUpdateSigningCertificateRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryUpdateSSHPublicKeyRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryUpdateUserRequest = (input, context) => {
    const entries = {};
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
const serializeAws_queryUploadServerCertificateRequest = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUploadSigningCertificateRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.CertificateBody !== undefined && input.CertificateBody !== null) {
        entries["CertificateBody"] = input.CertificateBody;
    }
    return entries;
};
const serializeAws_queryUploadSSHPublicKeyRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.SSHPublicKeyBody !== undefined && input.SSHPublicKeyBody !== null) {
        entries["SSHPublicKeyBody"] = input.SSHPublicKeyBody;
    }
    return entries;
};
const deserializeAws_queryAccessDetail = (output, context) => {
    let contents = {
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
const deserializeAws_queryAccessDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAccessDetail(entry, context);
    });
};
const deserializeAws_queryAccessKey = (output, context) => {
    let contents = {
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
const deserializeAws_queryAccessKeyLastUsed = (output, context) => {
    let contents = {
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
const deserializeAws_queryAccessKeyMetadata = (output, context) => {
    let contents = {
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
const deserializeAws_queryaccessKeyMetadataListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAccessKeyMetadata(entry, context);
    });
};
const deserializeAws_queryaccountAliasListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryArnListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryAttachedPermissionsBoundary = (output, context) => {
    let contents = {
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
const deserializeAws_queryattachedPoliciesListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAttachedPolicy(entry, context);
    });
};
const deserializeAws_queryAttachedPolicy = (output, context) => {
    let contents = {
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
const deserializeAws_querycertificateListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySigningCertificate(entry, context);
    });
};
const deserializeAws_queryclientIDListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryConcurrentModificationException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryContextKeyNamesResultListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryCreateAccessKeyResponse = (output, context) => {
    let contents = {
        AccessKey: undefined,
    };
    if (output["AccessKey"] !== undefined) {
        contents.AccessKey = deserializeAws_queryAccessKey(output["AccessKey"], context);
    }
    return contents;
};
const deserializeAws_queryCreateGroupResponse = (output, context) => {
    let contents = {
        Group: undefined,
    };
    if (output["Group"] !== undefined) {
        contents.Group = deserializeAws_queryGroup(output["Group"], context);
    }
    return contents;
};
const deserializeAws_queryCreateInstanceProfileResponse = (output, context) => {
    let contents = {
        InstanceProfile: undefined,
    };
    if (output["InstanceProfile"] !== undefined) {
        contents.InstanceProfile = deserializeAws_queryInstanceProfile(output["InstanceProfile"], context);
    }
    return contents;
};
const deserializeAws_queryCreateLoginProfileResponse = (output, context) => {
    let contents = {
        LoginProfile: undefined,
    };
    if (output["LoginProfile"] !== undefined) {
        contents.LoginProfile = deserializeAws_queryLoginProfile(output["LoginProfile"], context);
    }
    return contents;
};
const deserializeAws_queryCreateOpenIDConnectProviderResponse = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryCreatePolicyResponse = (output, context) => {
    let contents = {
        Policy: undefined,
    };
    if (output["Policy"] !== undefined) {
        contents.Policy = deserializeAws_queryPolicy(output["Policy"], context);
    }
    return contents;
};
const deserializeAws_queryCreatePolicyVersionResponse = (output, context) => {
    let contents = {
        PolicyVersion: undefined,
    };
    if (output["PolicyVersion"] !== undefined) {
        contents.PolicyVersion = deserializeAws_queryPolicyVersion(output["PolicyVersion"], context);
    }
    return contents;
};
const deserializeAws_queryCreateRoleResponse = (output, context) => {
    let contents = {
        Role: undefined,
    };
    if (output["Role"] !== undefined) {
        contents.Role = deserializeAws_queryRole(output["Role"], context);
    }
    return contents;
};
const deserializeAws_queryCreateSAMLProviderResponse = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryCreateServiceLinkedRoleResponse = (output, context) => {
    let contents = {
        Role: undefined,
    };
    if (output["Role"] !== undefined) {
        contents.Role = deserializeAws_queryRole(output["Role"], context);
    }
    return contents;
};
const deserializeAws_queryCreateServiceSpecificCredentialResponse = (output, context) => {
    let contents = {
        ServiceSpecificCredential: undefined,
    };
    if (output["ServiceSpecificCredential"] !== undefined) {
        contents.ServiceSpecificCredential = deserializeAws_queryServiceSpecificCredential(output["ServiceSpecificCredential"], context);
    }
    return contents;
};
const deserializeAws_queryCreateUserResponse = (output, context) => {
    let contents = {
        User: undefined,
    };
    if (output["User"] !== undefined) {
        contents.User = deserializeAws_queryUser(output["User"], context);
    }
    return contents;
};
const deserializeAws_queryCreateVirtualMFADeviceResponse = (output, context) => {
    let contents = {
        VirtualMFADevice: undefined,
    };
    if (output["VirtualMFADevice"] !== undefined) {
        contents.VirtualMFADevice = deserializeAws_queryVirtualMFADevice(output["VirtualMFADevice"], context);
    }
    return contents;
};
const deserializeAws_queryCredentialReportExpiredException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCredentialReportNotPresentException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCredentialReportNotReadyException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDeleteConflictException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDeleteServiceLinkedRoleResponse = (output, context) => {
    let contents = {
        DeletionTaskId: undefined,
    };
    if (output["DeletionTaskId"] !== undefined) {
        contents.DeletionTaskId = output["DeletionTaskId"];
    }
    return contents;
};
const deserializeAws_queryDeletionTaskFailureReasonType = (output, context) => {
    let contents = {
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
        contents.RoleUsageList = deserializeAws_queryRoleUsageListType(smithy_client_1.getArrayIfSingleItem(output["RoleUsageList"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDuplicateCertificateException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDuplicateSSHPublicKeyException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEntityAlreadyExistsException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEntityDetails = (output, context) => {
    let contents = {
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
const deserializeAws_queryentityDetailsListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEntityDetails(entry, context);
    });
};
const deserializeAws_queryEntityInfo = (output, context) => {
    let contents = {
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
const deserializeAws_queryEntityTemporarilyUnmodifiableException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryErrorDetails = (output, context) => {
    let contents = {
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
const deserializeAws_queryEvalDecisionDetailsType = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        return {
            ...acc,
            [pair["key"]]: pair["value"],
        };
    }, {});
};
const deserializeAws_queryEvaluationResult = (output, context) => {
    let contents = {
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
        contents.MatchedStatements = deserializeAws_queryStatementListType(smithy_client_1.getArrayIfSingleItem(output["MatchedStatements"]["member"]), context);
    }
    if (output.MissingContextValues === "") {
        contents.MissingContextValues = [];
    }
    if (output["MissingContextValues"] !== undefined && output["MissingContextValues"]["member"] !== undefined) {
        contents.MissingContextValues = deserializeAws_queryContextKeyNamesResultListType(smithy_client_1.getArrayIfSingleItem(output["MissingContextValues"]["member"]), context);
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
        contents.EvalDecisionDetails = deserializeAws_queryEvalDecisionDetailsType(smithy_client_1.getArrayIfSingleItem(output["EvalDecisionDetails"]["entry"]), context);
    }
    if (output.ResourceSpecificResults === "") {
        contents.ResourceSpecificResults = [];
    }
    if (output["ResourceSpecificResults"] !== undefined && output["ResourceSpecificResults"]["member"] !== undefined) {
        contents.ResourceSpecificResults = deserializeAws_queryResourceSpecificResultListType(smithy_client_1.getArrayIfSingleItem(output["ResourceSpecificResults"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryEvaluationResultsListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEvaluationResult(entry, context);
    });
};
const deserializeAws_queryGenerateCredentialReportResponse = (output, context) => {
    let contents = {
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
const deserializeAws_queryGenerateOrganizationsAccessReportResponse = (output, context) => {
    let contents = {
        JobId: undefined,
    };
    if (output["JobId"] !== undefined) {
        contents.JobId = output["JobId"];
    }
    return contents;
};
const deserializeAws_queryGenerateServiceLastAccessedDetailsResponse = (output, context) => {
    let contents = {
        JobId: undefined,
    };
    if (output["JobId"] !== undefined) {
        contents.JobId = output["JobId"];
    }
    return contents;
};
const deserializeAws_queryGetAccessKeyLastUsedResponse = (output, context) => {
    let contents = {
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
const deserializeAws_queryGetAccountAuthorizationDetailsResponse = (output, context) => {
    let contents = {
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
        contents.UserDetailList = deserializeAws_queryuserDetailListType(smithy_client_1.getArrayIfSingleItem(output["UserDetailList"]["member"]), context);
    }
    if (output.GroupDetailList === "") {
        contents.GroupDetailList = [];
    }
    if (output["GroupDetailList"] !== undefined && output["GroupDetailList"]["member"] !== undefined) {
        contents.GroupDetailList = deserializeAws_querygroupDetailListType(smithy_client_1.getArrayIfSingleItem(output["GroupDetailList"]["member"]), context);
    }
    if (output.RoleDetailList === "") {
        contents.RoleDetailList = [];
    }
    if (output["RoleDetailList"] !== undefined && output["RoleDetailList"]["member"] !== undefined) {
        contents.RoleDetailList = deserializeAws_queryroleDetailListType(smithy_client_1.getArrayIfSingleItem(output["RoleDetailList"]["member"]), context);
    }
    if (output.Policies === "") {
        contents.Policies = [];
    }
    if (output["Policies"] !== undefined && output["Policies"]["member"] !== undefined) {
        contents.Policies = deserializeAws_queryManagedPolicyDetailListType(smithy_client_1.getArrayIfSingleItem(output["Policies"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryGetAccountPasswordPolicyResponse = (output, context) => {
    let contents = {
        PasswordPolicy: undefined,
    };
    if (output["PasswordPolicy"] !== undefined) {
        contents.PasswordPolicy = deserializeAws_queryPasswordPolicy(output["PasswordPolicy"], context);
    }
    return contents;
};
const deserializeAws_queryGetAccountSummaryResponse = (output, context) => {
    let contents = {
        SummaryMap: undefined,
    };
    if (output.SummaryMap === "") {
        contents.SummaryMap = {};
    }
    if (output["SummaryMap"] !== undefined && output["SummaryMap"]["entry"] !== undefined) {
        contents.SummaryMap = deserializeAws_querysummaryMapType(smithy_client_1.getArrayIfSingleItem(output["SummaryMap"]["entry"]), context);
    }
    return contents;
};
const deserializeAws_queryGetContextKeysForPolicyResponse = (output, context) => {
    let contents = {
        ContextKeyNames: undefined,
    };
    if (output.ContextKeyNames === "") {
        contents.ContextKeyNames = [];
    }
    if (output["ContextKeyNames"] !== undefined && output["ContextKeyNames"]["member"] !== undefined) {
        contents.ContextKeyNames = deserializeAws_queryContextKeyNamesResultListType(smithy_client_1.getArrayIfSingleItem(output["ContextKeyNames"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryGetCredentialReportResponse = (output, context) => {
    let contents = {
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
const deserializeAws_queryGetGroupPolicyResponse = (output, context) => {
    let contents = {
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
const deserializeAws_queryGetGroupResponse = (output, context) => {
    let contents = {
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
        contents.Users = deserializeAws_queryuserListType(smithy_client_1.getArrayIfSingleItem(output["Users"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryGetInstanceProfileResponse = (output, context) => {
    let contents = {
        InstanceProfile: undefined,
    };
    if (output["InstanceProfile"] !== undefined) {
        contents.InstanceProfile = deserializeAws_queryInstanceProfile(output["InstanceProfile"], context);
    }
    return contents;
};
const deserializeAws_queryGetLoginProfileResponse = (output, context) => {
    let contents = {
        LoginProfile: undefined,
    };
    if (output["LoginProfile"] !== undefined) {
        contents.LoginProfile = deserializeAws_queryLoginProfile(output["LoginProfile"], context);
    }
    return contents;
};
const deserializeAws_queryGetOpenIDConnectProviderResponse = (output, context) => {
    let contents = {
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
        contents.ClientIDList = deserializeAws_queryclientIDListType(smithy_client_1.getArrayIfSingleItem(output["ClientIDList"]["member"]), context);
    }
    if (output.ThumbprintList === "") {
        contents.ThumbprintList = [];
    }
    if (output["ThumbprintList"] !== undefined && output["ThumbprintList"]["member"] !== undefined) {
        contents.ThumbprintList = deserializeAws_querythumbprintListType(smithy_client_1.getArrayIfSingleItem(output["ThumbprintList"]["member"]), context);
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryGetOrganizationsAccessReportResponse = (output, context) => {
    let contents = {
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
        contents.AccessDetails = deserializeAws_queryAccessDetails(smithy_client_1.getArrayIfSingleItem(output["AccessDetails"]["member"]), context);
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
const deserializeAws_queryGetPolicyResponse = (output, context) => {
    let contents = {
        Policy: undefined,
    };
    if (output["Policy"] !== undefined) {
        contents.Policy = deserializeAws_queryPolicy(output["Policy"], context);
    }
    return contents;
};
const deserializeAws_queryGetPolicyVersionResponse = (output, context) => {
    let contents = {
        PolicyVersion: undefined,
    };
    if (output["PolicyVersion"] !== undefined) {
        contents.PolicyVersion = deserializeAws_queryPolicyVersion(output["PolicyVersion"], context);
    }
    return contents;
};
const deserializeAws_queryGetRolePolicyResponse = (output, context) => {
    let contents = {
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
const deserializeAws_queryGetRoleResponse = (output, context) => {
    let contents = {
        Role: undefined,
    };
    if (output["Role"] !== undefined) {
        contents.Role = deserializeAws_queryRole(output["Role"], context);
    }
    return contents;
};
const deserializeAws_queryGetSAMLProviderResponse = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryGetServerCertificateResponse = (output, context) => {
    let contents = {
        ServerCertificate: undefined,
    };
    if (output["ServerCertificate"] !== undefined) {
        contents.ServerCertificate = deserializeAws_queryServerCertificate(output["ServerCertificate"], context);
    }
    return contents;
};
const deserializeAws_queryGetServiceLastAccessedDetailsResponse = (output, context) => {
    let contents = {
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
        contents.ServicesLastAccessed = deserializeAws_queryServicesLastAccessed(smithy_client_1.getArrayIfSingleItem(output["ServicesLastAccessed"]["member"]), context);
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
const deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesResponse = (output, context) => {
    let contents = {
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
        contents.EntityDetailsList = deserializeAws_queryentityDetailsListType(smithy_client_1.getArrayIfSingleItem(output["EntityDetailsList"]["member"]), context);
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
const deserializeAws_queryGetServiceLinkedRoleDeletionStatusResponse = (output, context) => {
    let contents = {
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
const deserializeAws_queryGetSSHPublicKeyResponse = (output, context) => {
    let contents = {
        SSHPublicKey: undefined,
    };
    if (output["SSHPublicKey"] !== undefined) {
        contents.SSHPublicKey = deserializeAws_querySSHPublicKey(output["SSHPublicKey"], context);
    }
    return contents;
};
const deserializeAws_queryGetUserPolicyResponse = (output, context) => {
    let contents = {
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
const deserializeAws_queryGetUserResponse = (output, context) => {
    let contents = {
        User: undefined,
    };
    if (output["User"] !== undefined) {
        contents.User = deserializeAws_queryUser(output["User"], context);
    }
    return contents;
};
const deserializeAws_queryGroup = (output, context) => {
    let contents = {
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
const deserializeAws_queryGroupDetail = (output, context) => {
    let contents = {
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
        contents.GroupPolicyList = deserializeAws_querypolicyDetailListType(smithy_client_1.getArrayIfSingleItem(output["GroupPolicyList"]["member"]), context);
    }
    if (output.AttachedManagedPolicies === "") {
        contents.AttachedManagedPolicies = [];
    }
    if (output["AttachedManagedPolicies"] !== undefined && output["AttachedManagedPolicies"]["member"] !== undefined) {
        contents.AttachedManagedPolicies = deserializeAws_queryattachedPoliciesListType(smithy_client_1.getArrayIfSingleItem(output["AttachedManagedPolicies"]["member"]), context);
    }
    return contents;
};
const deserializeAws_querygroupDetailListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryGroupDetail(entry, context);
    });
};
const deserializeAws_querygroupListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryGroup(entry, context);
    });
};
const deserializeAws_querygroupNameListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryInstanceProfile = (output, context) => {
    let contents = {
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
        contents.Roles = deserializeAws_queryroleListType(smithy_client_1.getArrayIfSingleItem(output["Roles"]["member"]), context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryinstanceProfileListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInstanceProfile(entry, context);
    });
};
const deserializeAws_queryInvalidAuthenticationCodeException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidCertificateException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidInputException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidPublicKeyException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidUserTypeException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKeyPairMismatchException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryLimitExceededException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryListAccessKeysResponse = (output, context) => {
    let contents = {
        AccessKeyMetadata: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.AccessKeyMetadata === "") {
        contents.AccessKeyMetadata = [];
    }
    if (output["AccessKeyMetadata"] !== undefined && output["AccessKeyMetadata"]["member"] !== undefined) {
        contents.AccessKeyMetadata = deserializeAws_queryaccessKeyMetadataListType(smithy_client_1.getArrayIfSingleItem(output["AccessKeyMetadata"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListAccountAliasesResponse = (output, context) => {
    let contents = {
        AccountAliases: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.AccountAliases === "") {
        contents.AccountAliases = [];
    }
    if (output["AccountAliases"] !== undefined && output["AccountAliases"]["member"] !== undefined) {
        contents.AccountAliases = deserializeAws_queryaccountAliasListType(smithy_client_1.getArrayIfSingleItem(output["AccountAliases"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListAttachedGroupPoliciesResponse = (output, context) => {
    let contents = {
        AttachedPolicies: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.AttachedPolicies === "") {
        contents.AttachedPolicies = [];
    }
    if (output["AttachedPolicies"] !== undefined && output["AttachedPolicies"]["member"] !== undefined) {
        contents.AttachedPolicies = deserializeAws_queryattachedPoliciesListType(smithy_client_1.getArrayIfSingleItem(output["AttachedPolicies"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListAttachedRolePoliciesResponse = (output, context) => {
    let contents = {
        AttachedPolicies: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.AttachedPolicies === "") {
        contents.AttachedPolicies = [];
    }
    if (output["AttachedPolicies"] !== undefined && output["AttachedPolicies"]["member"] !== undefined) {
        contents.AttachedPolicies = deserializeAws_queryattachedPoliciesListType(smithy_client_1.getArrayIfSingleItem(output["AttachedPolicies"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListAttachedUserPoliciesResponse = (output, context) => {
    let contents = {
        AttachedPolicies: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.AttachedPolicies === "") {
        contents.AttachedPolicies = [];
    }
    if (output["AttachedPolicies"] !== undefined && output["AttachedPolicies"]["member"] !== undefined) {
        contents.AttachedPolicies = deserializeAws_queryattachedPoliciesListType(smithy_client_1.getArrayIfSingleItem(output["AttachedPolicies"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListEntitiesForPolicyResponse = (output, context) => {
    let contents = {
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
        contents.PolicyGroups = deserializeAws_queryPolicyGroupListType(smithy_client_1.getArrayIfSingleItem(output["PolicyGroups"]["member"]), context);
    }
    if (output.PolicyUsers === "") {
        contents.PolicyUsers = [];
    }
    if (output["PolicyUsers"] !== undefined && output["PolicyUsers"]["member"] !== undefined) {
        contents.PolicyUsers = deserializeAws_queryPolicyUserListType(smithy_client_1.getArrayIfSingleItem(output["PolicyUsers"]["member"]), context);
    }
    if (output.PolicyRoles === "") {
        contents.PolicyRoles = [];
    }
    if (output["PolicyRoles"] !== undefined && output["PolicyRoles"]["member"] !== undefined) {
        contents.PolicyRoles = deserializeAws_queryPolicyRoleListType(smithy_client_1.getArrayIfSingleItem(output["PolicyRoles"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListGroupPoliciesResponse = (output, context) => {
    let contents = {
        PolicyNames: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
        contents.PolicyNames = deserializeAws_querypolicyNameListType(smithy_client_1.getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListGroupsForUserResponse = (output, context) => {
    let contents = {
        Groups: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Groups === "") {
        contents.Groups = [];
    }
    if (output["Groups"] !== undefined && output["Groups"]["member"] !== undefined) {
        contents.Groups = deserializeAws_querygroupListType(smithy_client_1.getArrayIfSingleItem(output["Groups"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListGroupsResponse = (output, context) => {
    let contents = {
        Groups: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Groups === "") {
        contents.Groups = [];
    }
    if (output["Groups"] !== undefined && output["Groups"]["member"] !== undefined) {
        contents.Groups = deserializeAws_querygroupListType(smithy_client_1.getArrayIfSingleItem(output["Groups"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListInstanceProfilesForRoleResponse = (output, context) => {
    let contents = {
        InstanceProfiles: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.InstanceProfiles === "") {
        contents.InstanceProfiles = [];
    }
    if (output["InstanceProfiles"] !== undefined && output["InstanceProfiles"]["member"] !== undefined) {
        contents.InstanceProfiles = deserializeAws_queryinstanceProfileListType(smithy_client_1.getArrayIfSingleItem(output["InstanceProfiles"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListInstanceProfilesResponse = (output, context) => {
    let contents = {
        InstanceProfiles: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.InstanceProfiles === "") {
        contents.InstanceProfiles = [];
    }
    if (output["InstanceProfiles"] !== undefined && output["InstanceProfiles"]["member"] !== undefined) {
        contents.InstanceProfiles = deserializeAws_queryinstanceProfileListType(smithy_client_1.getArrayIfSingleItem(output["InstanceProfiles"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListInstanceProfileTagsResponse = (output, context) => {
    let contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListMFADevicesResponse = (output, context) => {
    let contents = {
        MFADevices: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.MFADevices === "") {
        contents.MFADevices = [];
    }
    if (output["MFADevices"] !== undefined && output["MFADevices"]["member"] !== undefined) {
        contents.MFADevices = deserializeAws_querymfaDeviceListType(smithy_client_1.getArrayIfSingleItem(output["MFADevices"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListMFADeviceTagsResponse = (output, context) => {
    let contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListOpenIDConnectProvidersResponse = (output, context) => {
    let contents = {
        OpenIDConnectProviderList: undefined,
    };
    if (output.OpenIDConnectProviderList === "") {
        contents.OpenIDConnectProviderList = [];
    }
    if (output["OpenIDConnectProviderList"] !== undefined &&
        output["OpenIDConnectProviderList"]["member"] !== undefined) {
        contents.OpenIDConnectProviderList = deserializeAws_queryOpenIDConnectProviderListType(smithy_client_1.getArrayIfSingleItem(output["OpenIDConnectProviderList"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryListOpenIDConnectProviderTagsResponse = (output, context) => {
    let contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListPoliciesGrantingServiceAccessEntry = (output, context) => {
    let contents = {
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
        contents.Policies = deserializeAws_querypolicyGrantingServiceAccessListType(smithy_client_1.getArrayIfSingleItem(output["Policies"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryListPoliciesGrantingServiceAccessResponse = (output, context) => {
    let contents = {
        PoliciesGrantingServiceAccess: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.PoliciesGrantingServiceAccess === "") {
        contents.PoliciesGrantingServiceAccess = [];
    }
    if (output["PoliciesGrantingServiceAccess"] !== undefined &&
        output["PoliciesGrantingServiceAccess"]["member"] !== undefined) {
        contents.PoliciesGrantingServiceAccess = deserializeAws_querylistPolicyGrantingServiceAccessResponseListType(smithy_client_1.getArrayIfSingleItem(output["PoliciesGrantingServiceAccess"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListPoliciesResponse = (output, context) => {
    let contents = {
        Policies: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Policies === "") {
        contents.Policies = [];
    }
    if (output["Policies"] !== undefined && output["Policies"]["member"] !== undefined) {
        contents.Policies = deserializeAws_querypolicyListType(smithy_client_1.getArrayIfSingleItem(output["Policies"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_querylistPolicyGrantingServiceAccessResponseListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryListPoliciesGrantingServiceAccessEntry(entry, context);
    });
};
const deserializeAws_queryListPolicyTagsResponse = (output, context) => {
    let contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListPolicyVersionsResponse = (output, context) => {
    let contents = {
        Versions: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Versions === "") {
        contents.Versions = [];
    }
    if (output["Versions"] !== undefined && output["Versions"]["member"] !== undefined) {
        contents.Versions = deserializeAws_querypolicyDocumentVersionListType(smithy_client_1.getArrayIfSingleItem(output["Versions"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListRolePoliciesResponse = (output, context) => {
    let contents = {
        PolicyNames: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
        contents.PolicyNames = deserializeAws_querypolicyNameListType(smithy_client_1.getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListRolesResponse = (output, context) => {
    let contents = {
        Roles: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Roles === "") {
        contents.Roles = [];
    }
    if (output["Roles"] !== undefined && output["Roles"]["member"] !== undefined) {
        contents.Roles = deserializeAws_queryroleListType(smithy_client_1.getArrayIfSingleItem(output["Roles"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListRoleTagsResponse = (output, context) => {
    let contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListSAMLProvidersResponse = (output, context) => {
    let contents = {
        SAMLProviderList: undefined,
    };
    if (output.SAMLProviderList === "") {
        contents.SAMLProviderList = [];
    }
    if (output["SAMLProviderList"] !== undefined && output["SAMLProviderList"]["member"] !== undefined) {
        contents.SAMLProviderList = deserializeAws_querySAMLProviderListType(smithy_client_1.getArrayIfSingleItem(output["SAMLProviderList"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryListSAMLProviderTagsResponse = (output, context) => {
    let contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListServerCertificatesResponse = (output, context) => {
    let contents = {
        ServerCertificateMetadataList: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.ServerCertificateMetadataList === "") {
        contents.ServerCertificateMetadataList = [];
    }
    if (output["ServerCertificateMetadataList"] !== undefined &&
        output["ServerCertificateMetadataList"]["member"] !== undefined) {
        contents.ServerCertificateMetadataList = deserializeAws_queryserverCertificateMetadataListType(smithy_client_1.getArrayIfSingleItem(output["ServerCertificateMetadataList"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListServerCertificateTagsResponse = (output, context) => {
    let contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListServiceSpecificCredentialsResponse = (output, context) => {
    let contents = {
        ServiceSpecificCredentials: undefined,
    };
    if (output.ServiceSpecificCredentials === "") {
        contents.ServiceSpecificCredentials = [];
    }
    if (output["ServiceSpecificCredentials"] !== undefined &&
        output["ServiceSpecificCredentials"]["member"] !== undefined) {
        contents.ServiceSpecificCredentials = deserializeAws_queryServiceSpecificCredentialsListType(smithy_client_1.getArrayIfSingleItem(output["ServiceSpecificCredentials"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryListSigningCertificatesResponse = (output, context) => {
    let contents = {
        Certificates: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Certificates === "") {
        contents.Certificates = [];
    }
    if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
        contents.Certificates = deserializeAws_querycertificateListType(smithy_client_1.getArrayIfSingleItem(output["Certificates"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListSSHPublicKeysResponse = (output, context) => {
    let contents = {
        SSHPublicKeys: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.SSHPublicKeys === "") {
        contents.SSHPublicKeys = [];
    }
    if (output["SSHPublicKeys"] !== undefined && output["SSHPublicKeys"]["member"] !== undefined) {
        contents.SSHPublicKeys = deserializeAws_querySSHPublicKeyListType(smithy_client_1.getArrayIfSingleItem(output["SSHPublicKeys"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListUserPoliciesResponse = (output, context) => {
    let contents = {
        PolicyNames: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
        contents.PolicyNames = deserializeAws_querypolicyNameListType(smithy_client_1.getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListUsersResponse = (output, context) => {
    let contents = {
        Users: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Users === "") {
        contents.Users = [];
    }
    if (output["Users"] !== undefined && output["Users"]["member"] !== undefined) {
        contents.Users = deserializeAws_queryuserListType(smithy_client_1.getArrayIfSingleItem(output["Users"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListUserTagsResponse = (output, context) => {
    let contents = {
        Tags: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListVirtualMFADevicesResponse = (output, context) => {
    let contents = {
        VirtualMFADevices: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.VirtualMFADevices === "") {
        contents.VirtualMFADevices = [];
    }
    if (output["VirtualMFADevices"] !== undefined && output["VirtualMFADevices"]["member"] !== undefined) {
        contents.VirtualMFADevices = deserializeAws_queryvirtualMFADeviceListType(smithy_client_1.getArrayIfSingleItem(output["VirtualMFADevices"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryLoginProfile = (output, context) => {
    let contents = {
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
const deserializeAws_queryMalformedCertificateException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryMalformedPolicyDocumentException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryManagedPolicyDetail = (output, context) => {
    let contents = {
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
        contents.PolicyVersionList = deserializeAws_querypolicyDocumentVersionListType(smithy_client_1.getArrayIfSingleItem(output["PolicyVersionList"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryManagedPolicyDetailListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryManagedPolicyDetail(entry, context);
    });
};
const deserializeAws_queryMFADevice = (output, context) => {
    let contents = {
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
const deserializeAws_querymfaDeviceListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMFADevice(entry, context);
    });
};
const deserializeAws_queryNoSuchEntityException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryOpenIDConnectProviderListEntry = (output, context) => {
    let contents = {
        Arn: undefined,
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    return contents;
};
const deserializeAws_queryOpenIDConnectProviderListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryOpenIDConnectProviderListEntry(entry, context);
    });
};
const deserializeAws_queryOrganizationsDecisionDetail = (output, context) => {
    let contents = {
        AllowedByOrganizations: undefined,
    };
    if (output["AllowedByOrganizations"] !== undefined) {
        contents.AllowedByOrganizations = output["AllowedByOrganizations"] == "true";
    }
    return contents;
};
const deserializeAws_queryPasswordPolicy = (output, context) => {
    let contents = {
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
const deserializeAws_queryPasswordPolicyViolationException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryPermissionsBoundaryDecisionDetail = (output, context) => {
    let contents = {
        AllowedByPermissionsBoundary: undefined,
    };
    if (output["AllowedByPermissionsBoundary"] !== undefined) {
        contents.AllowedByPermissionsBoundary = output["AllowedByPermissionsBoundary"] == "true";
    }
    return contents;
};
const deserializeAws_queryPolicy = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryPolicyDetail = (output, context) => {
    let contents = {
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
const deserializeAws_querypolicyDetailListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyDetail(entry, context);
    });
};
const deserializeAws_querypolicyDocumentVersionListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyVersion(entry, context);
    });
};
const deserializeAws_queryPolicyEvaluationException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryPolicyGrantingServiceAccess = (output, context) => {
    let contents = {
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
const deserializeAws_querypolicyGrantingServiceAccessListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyGrantingServiceAccess(entry, context);
    });
};
const deserializeAws_queryPolicyGroup = (output, context) => {
    let contents = {
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
const deserializeAws_queryPolicyGroupListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyGroup(entry, context);
    });
};
const deserializeAws_querypolicyListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicy(entry, context);
    });
};
const deserializeAws_querypolicyNameListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryPolicyNotAttachableException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryPolicyRole = (output, context) => {
    let contents = {
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
const deserializeAws_queryPolicyRoleListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyRole(entry, context);
    });
};
const deserializeAws_queryPolicyUser = (output, context) => {
    let contents = {
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
const deserializeAws_queryPolicyUserListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyUser(entry, context);
    });
};
const deserializeAws_queryPolicyVersion = (output, context) => {
    let contents = {
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
const deserializeAws_queryPosition = (output, context) => {
    let contents = {
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
const deserializeAws_queryReportGenerationLimitExceededException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryResetServiceSpecificCredentialResponse = (output, context) => {
    let contents = {
        ServiceSpecificCredential: undefined,
    };
    if (output["ServiceSpecificCredential"] !== undefined) {
        contents.ServiceSpecificCredential = deserializeAws_queryServiceSpecificCredential(output["ServiceSpecificCredential"], context);
    }
    return contents;
};
const deserializeAws_queryResourceSpecificResult = (output, context) => {
    let contents = {
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
        contents.MatchedStatements = deserializeAws_queryStatementListType(smithy_client_1.getArrayIfSingleItem(output["MatchedStatements"]["member"]), context);
    }
    if (output.MissingContextValues === "") {
        contents.MissingContextValues = [];
    }
    if (output["MissingContextValues"] !== undefined && output["MissingContextValues"]["member"] !== undefined) {
        contents.MissingContextValues = deserializeAws_queryContextKeyNamesResultListType(smithy_client_1.getArrayIfSingleItem(output["MissingContextValues"]["member"]), context);
    }
    if (output.EvalDecisionDetails === "") {
        contents.EvalDecisionDetails = {};
    }
    if (output["EvalDecisionDetails"] !== undefined && output["EvalDecisionDetails"]["entry"] !== undefined) {
        contents.EvalDecisionDetails = deserializeAws_queryEvalDecisionDetailsType(smithy_client_1.getArrayIfSingleItem(output["EvalDecisionDetails"]["entry"]), context);
    }
    if (output["PermissionsBoundaryDecisionDetail"] !== undefined) {
        contents.PermissionsBoundaryDecisionDetail = deserializeAws_queryPermissionsBoundaryDecisionDetail(output["PermissionsBoundaryDecisionDetail"], context);
    }
    return contents;
};
const deserializeAws_queryResourceSpecificResultListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryResourceSpecificResult(entry, context);
    });
};
const deserializeAws_queryRole = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["RoleLastUsed"] !== undefined) {
        contents.RoleLastUsed = deserializeAws_queryRoleLastUsed(output["RoleLastUsed"], context);
    }
    return contents;
};
const deserializeAws_queryRoleDetail = (output, context) => {
    let contents = {
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
        contents.InstanceProfileList = deserializeAws_queryinstanceProfileListType(smithy_client_1.getArrayIfSingleItem(output["InstanceProfileList"]["member"]), context);
    }
    if (output.RolePolicyList === "") {
        contents.RolePolicyList = [];
    }
    if (output["RolePolicyList"] !== undefined && output["RolePolicyList"]["member"] !== undefined) {
        contents.RolePolicyList = deserializeAws_querypolicyDetailListType(smithy_client_1.getArrayIfSingleItem(output["RolePolicyList"]["member"]), context);
    }
    if (output.AttachedManagedPolicies === "") {
        contents.AttachedManagedPolicies = [];
    }
    if (output["AttachedManagedPolicies"] !== undefined && output["AttachedManagedPolicies"]["member"] !== undefined) {
        contents.AttachedManagedPolicies = deserializeAws_queryattachedPoliciesListType(smithy_client_1.getArrayIfSingleItem(output["AttachedManagedPolicies"]["member"]), context);
    }
    if (output["PermissionsBoundary"] !== undefined) {
        contents.PermissionsBoundary = deserializeAws_queryAttachedPermissionsBoundary(output["PermissionsBoundary"], context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    if (output["RoleLastUsed"] !== undefined) {
        contents.RoleLastUsed = deserializeAws_queryRoleLastUsed(output["RoleLastUsed"], context);
    }
    return contents;
};
const deserializeAws_queryroleDetailListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRoleDetail(entry, context);
    });
};
const deserializeAws_queryRoleLastUsed = (output, context) => {
    let contents = {
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
const deserializeAws_queryroleListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRole(entry, context);
    });
};
const deserializeAws_queryRoleUsageListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRoleUsageType(entry, context);
    });
};
const deserializeAws_queryRoleUsageType = (output, context) => {
    let contents = {
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
        contents.Resources = deserializeAws_queryArnListType(smithy_client_1.getArrayIfSingleItem(output["Resources"]["member"]), context);
    }
    return contents;
};
const deserializeAws_querySAMLProviderListEntry = (output, context) => {
    let contents = {
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
const deserializeAws_querySAMLProviderListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySAMLProviderListEntry(entry, context);
    });
};
const deserializeAws_queryServerCertificate = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryServerCertificateMetadata = (output, context) => {
    let contents = {
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
const deserializeAws_queryserverCertificateMetadataListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryServerCertificateMetadata(entry, context);
    });
};
const deserializeAws_queryServiceFailureException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryServiceLastAccessed = (output, context) => {
    let contents = {
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
        contents.TrackedActionsLastAccessed = deserializeAws_queryTrackedActionsLastAccessed(smithy_client_1.getArrayIfSingleItem(output["TrackedActionsLastAccessed"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryServiceNotSupportedException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryServicesLastAccessed = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryServiceLastAccessed(entry, context);
    });
};
const deserializeAws_queryServiceSpecificCredential = (output, context) => {
    let contents = {
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
const deserializeAws_queryServiceSpecificCredentialMetadata = (output, context) => {
    let contents = {
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
const deserializeAws_queryServiceSpecificCredentialsListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryServiceSpecificCredentialMetadata(entry, context);
    });
};
const deserializeAws_querySigningCertificate = (output, context) => {
    let contents = {
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
const deserializeAws_querySimulatePolicyResponse = (output, context) => {
    let contents = {
        EvaluationResults: undefined,
        IsTruncated: undefined,
        Marker: undefined,
    };
    if (output.EvaluationResults === "") {
        contents.EvaluationResults = [];
    }
    if (output["EvaluationResults"] !== undefined && output["EvaluationResults"]["member"] !== undefined) {
        contents.EvaluationResults = deserializeAws_queryEvaluationResultsListType(smithy_client_1.getArrayIfSingleItem(output["EvaluationResults"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_querySSHPublicKey = (output, context) => {
    let contents = {
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
const deserializeAws_querySSHPublicKeyListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySSHPublicKeyMetadata(entry, context);
    });
};
const deserializeAws_querySSHPublicKeyMetadata = (output, context) => {
    let contents = {
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
const deserializeAws_queryStatement = (output, context) => {
    let contents = {
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
const deserializeAws_queryStatementListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryStatement(entry, context);
    });
};
const deserializeAws_querysummaryMapType = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        return {
            ...acc,
            [pair["key"]]: parseInt(pair["value"]),
        };
    }, {});
};
const deserializeAws_queryTag = (output, context) => {
    let contents = {
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
const deserializeAws_querytagListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTag(entry, context);
    });
};
const deserializeAws_querythumbprintListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryTrackedActionLastAccessed = (output, context) => {
    let contents = {
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
const deserializeAws_queryTrackedActionsLastAccessed = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTrackedActionLastAccessed(entry, context);
    });
};
const deserializeAws_queryUnmodifiableEntityException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUnrecognizedPublicKeyEncodingException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUpdateRoleDescriptionResponse = (output, context) => {
    let contents = {
        Role: undefined,
    };
    if (output["Role"] !== undefined) {
        contents.Role = deserializeAws_queryRole(output["Role"], context);
    }
    return contents;
};
const deserializeAws_queryUpdateRoleResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryUpdateSAMLProviderResponse = (output, context) => {
    let contents = {
        SAMLProviderArn: undefined,
    };
    if (output["SAMLProviderArn"] !== undefined) {
        contents.SAMLProviderArn = output["SAMLProviderArn"];
    }
    return contents;
};
const deserializeAws_queryUploadServerCertificateResponse = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryUploadSigningCertificateResponse = (output, context) => {
    let contents = {
        Certificate: undefined,
    };
    if (output["Certificate"] !== undefined) {
        contents.Certificate = deserializeAws_querySigningCertificate(output["Certificate"], context);
    }
    return contents;
};
const deserializeAws_queryUploadSSHPublicKeyResponse = (output, context) => {
    let contents = {
        SSHPublicKey: undefined,
    };
    if (output["SSHPublicKey"] !== undefined) {
        contents.SSHPublicKey = deserializeAws_querySSHPublicKey(output["SSHPublicKey"], context);
    }
    return contents;
};
const deserializeAws_queryUser = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryUserDetail = (output, context) => {
    let contents = {
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
        contents.UserPolicyList = deserializeAws_querypolicyDetailListType(smithy_client_1.getArrayIfSingleItem(output["UserPolicyList"]["member"]), context);
    }
    if (output.GroupList === "") {
        contents.GroupList = [];
    }
    if (output["GroupList"] !== undefined && output["GroupList"]["member"] !== undefined) {
        contents.GroupList = deserializeAws_querygroupNameListType(smithy_client_1.getArrayIfSingleItem(output["GroupList"]["member"]), context);
    }
    if (output.AttachedManagedPolicies === "") {
        contents.AttachedManagedPolicies = [];
    }
    if (output["AttachedManagedPolicies"] !== undefined && output["AttachedManagedPolicies"]["member"] !== undefined) {
        contents.AttachedManagedPolicies = deserializeAws_queryattachedPoliciesListType(smithy_client_1.getArrayIfSingleItem(output["AttachedManagedPolicies"]["member"]), context);
    }
    if (output["PermissionsBoundary"] !== undefined) {
        contents.PermissionsBoundary = deserializeAws_queryAttachedPermissionsBoundary(output["PermissionsBoundary"], context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryuserDetailListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUserDetail(entry, context);
    });
};
const deserializeAws_queryuserListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUser(entry, context);
    });
};
const deserializeAws_queryVirtualMFADevice = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_querytagListType(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryvirtualMFADeviceListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryVirtualMFADevice(entry, context);
    });
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
        const parsedObj = fast_xml_parser_1.parse(encoded, {
            attributeNamePrefix: "",
            ignoreAttributes: false,
            parseNodeValue: false,
            trimValues: false,
            tagValueProcessor: (val, tagName) => (val.trim() === "" ? "" : entities_1.decodeHTML(val)),
        });
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return smithy_client_1.getValueFromTextNode(parsedObjToReturn);
    }
    return {};
});
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => smithy_client_1.extendedEncodeURIComponent(key) + "=" + smithy_client_1.extendedEncodeURIComponent(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map