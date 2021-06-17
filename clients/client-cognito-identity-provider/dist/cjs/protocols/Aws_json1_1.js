"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1DescribeRiskConfigurationCommand = exports.serializeAws_json1_1DescribeResourceServerCommand = exports.serializeAws_json1_1DescribeIdentityProviderCommand = exports.serializeAws_json1_1DeleteUserPoolDomainCommand = exports.serializeAws_json1_1DeleteUserPoolClientCommand = exports.serializeAws_json1_1DeleteUserPoolCommand = exports.serializeAws_json1_1DeleteUserAttributesCommand = exports.serializeAws_json1_1DeleteUserCommand = exports.serializeAws_json1_1DeleteResourceServerCommand = exports.serializeAws_json1_1DeleteIdentityProviderCommand = exports.serializeAws_json1_1DeleteGroupCommand = exports.serializeAws_json1_1CreateUserPoolDomainCommand = exports.serializeAws_json1_1CreateUserPoolClientCommand = exports.serializeAws_json1_1CreateUserPoolCommand = exports.serializeAws_json1_1CreateUserImportJobCommand = exports.serializeAws_json1_1CreateResourceServerCommand = exports.serializeAws_json1_1CreateIdentityProviderCommand = exports.serializeAws_json1_1CreateGroupCommand = exports.serializeAws_json1_1ConfirmSignUpCommand = exports.serializeAws_json1_1ConfirmForgotPasswordCommand = exports.serializeAws_json1_1ConfirmDeviceCommand = exports.serializeAws_json1_1ChangePasswordCommand = exports.serializeAws_json1_1AssociateSoftwareTokenCommand = exports.serializeAws_json1_1AdminUserGlobalSignOutCommand = exports.serializeAws_json1_1AdminUpdateUserAttributesCommand = exports.serializeAws_json1_1AdminUpdateDeviceStatusCommand = exports.serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand = exports.serializeAws_json1_1AdminSetUserSettingsCommand = exports.serializeAws_json1_1AdminSetUserPasswordCommand = exports.serializeAws_json1_1AdminSetUserMFAPreferenceCommand = exports.serializeAws_json1_1AdminRespondToAuthChallengeCommand = exports.serializeAws_json1_1AdminResetUserPasswordCommand = exports.serializeAws_json1_1AdminRemoveUserFromGroupCommand = exports.serializeAws_json1_1AdminListUserAuthEventsCommand = exports.serializeAws_json1_1AdminListGroupsForUserCommand = exports.serializeAws_json1_1AdminListDevicesCommand = exports.serializeAws_json1_1AdminLinkProviderForUserCommand = exports.serializeAws_json1_1AdminInitiateAuthCommand = exports.serializeAws_json1_1AdminGetUserCommand = exports.serializeAws_json1_1AdminGetDeviceCommand = exports.serializeAws_json1_1AdminForgetDeviceCommand = exports.serializeAws_json1_1AdminEnableUserCommand = exports.serializeAws_json1_1AdminDisableUserCommand = exports.serializeAws_json1_1AdminDisableProviderForUserCommand = exports.serializeAws_json1_1AdminDeleteUserAttributesCommand = exports.serializeAws_json1_1AdminDeleteUserCommand = exports.serializeAws_json1_1AdminCreateUserCommand = exports.serializeAws_json1_1AdminConfirmSignUpCommand = exports.serializeAws_json1_1AdminAddUserToGroupCommand = exports.serializeAws_json1_1AddCustomAttributesCommand = void 0;
exports.serializeAws_json1_1VerifyUserAttributeCommand = exports.serializeAws_json1_1VerifySoftwareTokenCommand = exports.serializeAws_json1_1UpdateUserPoolDomainCommand = exports.serializeAws_json1_1UpdateUserPoolClientCommand = exports.serializeAws_json1_1UpdateUserPoolCommand = exports.serializeAws_json1_1UpdateUserAttributesCommand = exports.serializeAws_json1_1UpdateResourceServerCommand = exports.serializeAws_json1_1UpdateIdentityProviderCommand = exports.serializeAws_json1_1UpdateGroupCommand = exports.serializeAws_json1_1UpdateDeviceStatusCommand = exports.serializeAws_json1_1UpdateAuthEventFeedbackCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopUserImportJobCommand = exports.serializeAws_json1_1StartUserImportJobCommand = exports.serializeAws_json1_1SignUpCommand = exports.serializeAws_json1_1SetUserSettingsCommand = exports.serializeAws_json1_1SetUserPoolMfaConfigCommand = exports.serializeAws_json1_1SetUserMFAPreferenceCommand = exports.serializeAws_json1_1SetUICustomizationCommand = exports.serializeAws_json1_1SetRiskConfigurationCommand = exports.serializeAws_json1_1RespondToAuthChallengeCommand = exports.serializeAws_json1_1ResendConfirmationCodeCommand = exports.serializeAws_json1_1ListUsersInGroupCommand = exports.serializeAws_json1_1ListUsersCommand = exports.serializeAws_json1_1ListUserPoolsCommand = exports.serializeAws_json1_1ListUserPoolClientsCommand = exports.serializeAws_json1_1ListUserImportJobsCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListResourceServersCommand = exports.serializeAws_json1_1ListIdentityProvidersCommand = exports.serializeAws_json1_1ListGroupsCommand = exports.serializeAws_json1_1ListDevicesCommand = exports.serializeAws_json1_1InitiateAuthCommand = exports.serializeAws_json1_1GlobalSignOutCommand = exports.serializeAws_json1_1GetUserPoolMfaConfigCommand = exports.serializeAws_json1_1GetUserAttributeVerificationCodeCommand = exports.serializeAws_json1_1GetUserCommand = exports.serializeAws_json1_1GetUICustomizationCommand = exports.serializeAws_json1_1GetSigningCertificateCommand = exports.serializeAws_json1_1GetIdentityProviderByIdentifierCommand = exports.serializeAws_json1_1GetGroupCommand = exports.serializeAws_json1_1GetDeviceCommand = exports.serializeAws_json1_1GetCSVHeaderCommand = exports.serializeAws_json1_1ForgotPasswordCommand = exports.serializeAws_json1_1ForgetDeviceCommand = exports.serializeAws_json1_1DescribeUserPoolDomainCommand = exports.serializeAws_json1_1DescribeUserPoolClientCommand = exports.serializeAws_json1_1DescribeUserPoolCommand = exports.serializeAws_json1_1DescribeUserImportJobCommand = void 0;
exports.deserializeAws_json1_1DescribeRiskConfigurationCommand = exports.deserializeAws_json1_1DescribeResourceServerCommand = exports.deserializeAws_json1_1DescribeIdentityProviderCommand = exports.deserializeAws_json1_1DeleteUserPoolDomainCommand = exports.deserializeAws_json1_1DeleteUserPoolClientCommand = exports.deserializeAws_json1_1DeleteUserPoolCommand = exports.deserializeAws_json1_1DeleteUserAttributesCommand = exports.deserializeAws_json1_1DeleteUserCommand = exports.deserializeAws_json1_1DeleteResourceServerCommand = exports.deserializeAws_json1_1DeleteIdentityProviderCommand = exports.deserializeAws_json1_1DeleteGroupCommand = exports.deserializeAws_json1_1CreateUserPoolDomainCommand = exports.deserializeAws_json1_1CreateUserPoolClientCommand = exports.deserializeAws_json1_1CreateUserPoolCommand = exports.deserializeAws_json1_1CreateUserImportJobCommand = exports.deserializeAws_json1_1CreateResourceServerCommand = exports.deserializeAws_json1_1CreateIdentityProviderCommand = exports.deserializeAws_json1_1CreateGroupCommand = exports.deserializeAws_json1_1ConfirmSignUpCommand = exports.deserializeAws_json1_1ConfirmForgotPasswordCommand = exports.deserializeAws_json1_1ConfirmDeviceCommand = exports.deserializeAws_json1_1ChangePasswordCommand = exports.deserializeAws_json1_1AssociateSoftwareTokenCommand = exports.deserializeAws_json1_1AdminUserGlobalSignOutCommand = exports.deserializeAws_json1_1AdminUpdateUserAttributesCommand = exports.deserializeAws_json1_1AdminUpdateDeviceStatusCommand = exports.deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand = exports.deserializeAws_json1_1AdminSetUserSettingsCommand = exports.deserializeAws_json1_1AdminSetUserPasswordCommand = exports.deserializeAws_json1_1AdminSetUserMFAPreferenceCommand = exports.deserializeAws_json1_1AdminRespondToAuthChallengeCommand = exports.deserializeAws_json1_1AdminResetUserPasswordCommand = exports.deserializeAws_json1_1AdminRemoveUserFromGroupCommand = exports.deserializeAws_json1_1AdminListUserAuthEventsCommand = exports.deserializeAws_json1_1AdminListGroupsForUserCommand = exports.deserializeAws_json1_1AdminListDevicesCommand = exports.deserializeAws_json1_1AdminLinkProviderForUserCommand = exports.deserializeAws_json1_1AdminInitiateAuthCommand = exports.deserializeAws_json1_1AdminGetUserCommand = exports.deserializeAws_json1_1AdminGetDeviceCommand = exports.deserializeAws_json1_1AdminForgetDeviceCommand = exports.deserializeAws_json1_1AdminEnableUserCommand = exports.deserializeAws_json1_1AdminDisableUserCommand = exports.deserializeAws_json1_1AdminDisableProviderForUserCommand = exports.deserializeAws_json1_1AdminDeleteUserAttributesCommand = exports.deserializeAws_json1_1AdminDeleteUserCommand = exports.deserializeAws_json1_1AdminCreateUserCommand = exports.deserializeAws_json1_1AdminConfirmSignUpCommand = exports.deserializeAws_json1_1AdminAddUserToGroupCommand = exports.deserializeAws_json1_1AddCustomAttributesCommand = void 0;
exports.deserializeAws_json1_1VerifyUserAttributeCommand = exports.deserializeAws_json1_1VerifySoftwareTokenCommand = exports.deserializeAws_json1_1UpdateUserPoolDomainCommand = exports.deserializeAws_json1_1UpdateUserPoolClientCommand = exports.deserializeAws_json1_1UpdateUserPoolCommand = exports.deserializeAws_json1_1UpdateUserAttributesCommand = exports.deserializeAws_json1_1UpdateResourceServerCommand = exports.deserializeAws_json1_1UpdateIdentityProviderCommand = exports.deserializeAws_json1_1UpdateGroupCommand = exports.deserializeAws_json1_1UpdateDeviceStatusCommand = exports.deserializeAws_json1_1UpdateAuthEventFeedbackCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StopUserImportJobCommand = exports.deserializeAws_json1_1StartUserImportJobCommand = exports.deserializeAws_json1_1SignUpCommand = exports.deserializeAws_json1_1SetUserSettingsCommand = exports.deserializeAws_json1_1SetUserPoolMfaConfigCommand = exports.deserializeAws_json1_1SetUserMFAPreferenceCommand = exports.deserializeAws_json1_1SetUICustomizationCommand = exports.deserializeAws_json1_1SetRiskConfigurationCommand = exports.deserializeAws_json1_1RespondToAuthChallengeCommand = exports.deserializeAws_json1_1ResendConfirmationCodeCommand = exports.deserializeAws_json1_1ListUsersInGroupCommand = exports.deserializeAws_json1_1ListUsersCommand = exports.deserializeAws_json1_1ListUserPoolsCommand = exports.deserializeAws_json1_1ListUserPoolClientsCommand = exports.deserializeAws_json1_1ListUserImportJobsCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListResourceServersCommand = exports.deserializeAws_json1_1ListIdentityProvidersCommand = exports.deserializeAws_json1_1ListGroupsCommand = exports.deserializeAws_json1_1ListDevicesCommand = exports.deserializeAws_json1_1InitiateAuthCommand = exports.deserializeAws_json1_1GlobalSignOutCommand = exports.deserializeAws_json1_1GetUserPoolMfaConfigCommand = exports.deserializeAws_json1_1GetUserAttributeVerificationCodeCommand = exports.deserializeAws_json1_1GetUserCommand = exports.deserializeAws_json1_1GetUICustomizationCommand = exports.deserializeAws_json1_1GetSigningCertificateCommand = exports.deserializeAws_json1_1GetIdentityProviderByIdentifierCommand = exports.deserializeAws_json1_1GetGroupCommand = exports.deserializeAws_json1_1GetDeviceCommand = exports.deserializeAws_json1_1GetCSVHeaderCommand = exports.deserializeAws_json1_1ForgotPasswordCommand = exports.deserializeAws_json1_1ForgetDeviceCommand = exports.deserializeAws_json1_1DescribeUserPoolDomainCommand = exports.deserializeAws_json1_1DescribeUserPoolClientCommand = exports.deserializeAws_json1_1DescribeUserPoolCommand = exports.deserializeAws_json1_1DescribeUserImportJobCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AddCustomAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AddCustomAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddCustomAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddCustomAttributesCommand = serializeAws_json1_1AddCustomAttributesCommand;
const serializeAws_json1_1AdminAddUserToGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminAddUserToGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminAddUserToGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminAddUserToGroupCommand = serializeAws_json1_1AdminAddUserToGroupCommand;
const serializeAws_json1_1AdminConfirmSignUpCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminConfirmSignUp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminConfirmSignUpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminConfirmSignUpCommand = serializeAws_json1_1AdminConfirmSignUpCommand;
const serializeAws_json1_1AdminCreateUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminCreateUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminCreateUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminCreateUserCommand = serializeAws_json1_1AdminCreateUserCommand;
const serializeAws_json1_1AdminDeleteUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminDeleteUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminDeleteUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminDeleteUserCommand = serializeAws_json1_1AdminDeleteUserCommand;
const serializeAws_json1_1AdminDeleteUserAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminDeleteUserAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminDeleteUserAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminDeleteUserAttributesCommand = serializeAws_json1_1AdminDeleteUserAttributesCommand;
const serializeAws_json1_1AdminDisableProviderForUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminDisableProviderForUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminDisableProviderForUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminDisableProviderForUserCommand = serializeAws_json1_1AdminDisableProviderForUserCommand;
const serializeAws_json1_1AdminDisableUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminDisableUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminDisableUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminDisableUserCommand = serializeAws_json1_1AdminDisableUserCommand;
const serializeAws_json1_1AdminEnableUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminEnableUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminEnableUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminEnableUserCommand = serializeAws_json1_1AdminEnableUserCommand;
const serializeAws_json1_1AdminForgetDeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminForgetDevice",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminForgetDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminForgetDeviceCommand = serializeAws_json1_1AdminForgetDeviceCommand;
const serializeAws_json1_1AdminGetDeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminGetDevice",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminGetDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminGetDeviceCommand = serializeAws_json1_1AdminGetDeviceCommand;
const serializeAws_json1_1AdminGetUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminGetUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminGetUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminGetUserCommand = serializeAws_json1_1AdminGetUserCommand;
const serializeAws_json1_1AdminInitiateAuthCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminInitiateAuth",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminInitiateAuthRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminInitiateAuthCommand = serializeAws_json1_1AdminInitiateAuthCommand;
const serializeAws_json1_1AdminLinkProviderForUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminLinkProviderForUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminLinkProviderForUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminLinkProviderForUserCommand = serializeAws_json1_1AdminLinkProviderForUserCommand;
const serializeAws_json1_1AdminListDevicesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminListDevices",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminListDevicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminListDevicesCommand = serializeAws_json1_1AdminListDevicesCommand;
const serializeAws_json1_1AdminListGroupsForUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminListGroupsForUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminListGroupsForUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminListGroupsForUserCommand = serializeAws_json1_1AdminListGroupsForUserCommand;
const serializeAws_json1_1AdminListUserAuthEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminListUserAuthEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminListUserAuthEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminListUserAuthEventsCommand = serializeAws_json1_1AdminListUserAuthEventsCommand;
const serializeAws_json1_1AdminRemoveUserFromGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminRemoveUserFromGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminRemoveUserFromGroupCommand = serializeAws_json1_1AdminRemoveUserFromGroupCommand;
const serializeAws_json1_1AdminResetUserPasswordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminResetUserPassword",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminResetUserPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminResetUserPasswordCommand = serializeAws_json1_1AdminResetUserPasswordCommand;
const serializeAws_json1_1AdminRespondToAuthChallengeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminRespondToAuthChallengeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminRespondToAuthChallengeCommand = serializeAws_json1_1AdminRespondToAuthChallengeCommand;
const serializeAws_json1_1AdminSetUserMFAPreferenceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminSetUserMFAPreference",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminSetUserMFAPreferenceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminSetUserMFAPreferenceCommand = serializeAws_json1_1AdminSetUserMFAPreferenceCommand;
const serializeAws_json1_1AdminSetUserPasswordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminSetUserPassword",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminSetUserPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminSetUserPasswordCommand = serializeAws_json1_1AdminSetUserPasswordCommand;
const serializeAws_json1_1AdminSetUserSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminSetUserSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminSetUserSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminSetUserSettingsCommand = serializeAws_json1_1AdminSetUserSettingsCommand;
const serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminUpdateAuthEventFeedbackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand = serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand;
const serializeAws_json1_1AdminUpdateDeviceStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminUpdateDeviceStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminUpdateDeviceStatusCommand = serializeAws_json1_1AdminUpdateDeviceStatusCommand;
const serializeAws_json1_1AdminUpdateUserAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminUpdateUserAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminUpdateUserAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminUpdateUserAttributesCommand = serializeAws_json1_1AdminUpdateUserAttributesCommand;
const serializeAws_json1_1AdminUserGlobalSignOutCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AdminUserGlobalSignOut",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminUserGlobalSignOutRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AdminUserGlobalSignOutCommand = serializeAws_json1_1AdminUserGlobalSignOutCommand;
const serializeAws_json1_1AssociateSoftwareTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.AssociateSoftwareToken",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateSoftwareTokenRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateSoftwareTokenCommand = serializeAws_json1_1AssociateSoftwareTokenCommand;
const serializeAws_json1_1ChangePasswordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ChangePassword",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ChangePasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ChangePasswordCommand = serializeAws_json1_1ChangePasswordCommand;
const serializeAws_json1_1ConfirmDeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ConfirmDevice",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ConfirmDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ConfirmDeviceCommand = serializeAws_json1_1ConfirmDeviceCommand;
const serializeAws_json1_1ConfirmForgotPasswordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ConfirmForgotPassword",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ConfirmForgotPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ConfirmForgotPasswordCommand = serializeAws_json1_1ConfirmForgotPasswordCommand;
const serializeAws_json1_1ConfirmSignUpCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ConfirmSignUp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ConfirmSignUpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ConfirmSignUpCommand = serializeAws_json1_1ConfirmSignUpCommand;
const serializeAws_json1_1CreateGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.CreateGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateGroupCommand = serializeAws_json1_1CreateGroupCommand;
const serializeAws_json1_1CreateIdentityProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.CreateIdentityProvider",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateIdentityProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateIdentityProviderCommand = serializeAws_json1_1CreateIdentityProviderCommand;
const serializeAws_json1_1CreateResourceServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.CreateResourceServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateResourceServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateResourceServerCommand = serializeAws_json1_1CreateResourceServerCommand;
const serializeAws_json1_1CreateUserImportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.CreateUserImportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateUserImportJobCommand = serializeAws_json1_1CreateUserImportJobCommand;
const serializeAws_json1_1CreateUserPoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.CreateUserPool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserPoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateUserPoolCommand = serializeAws_json1_1CreateUserPoolCommand;
const serializeAws_json1_1CreateUserPoolClientCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.CreateUserPoolClient",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserPoolClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateUserPoolClientCommand = serializeAws_json1_1CreateUserPoolClientCommand;
const serializeAws_json1_1CreateUserPoolDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.CreateUserPoolDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserPoolDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateUserPoolDomainCommand = serializeAws_json1_1CreateUserPoolDomainCommand;
const serializeAws_json1_1DeleteGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.DeleteGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteGroupCommand = serializeAws_json1_1DeleteGroupCommand;
const serializeAws_json1_1DeleteIdentityProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.DeleteIdentityProvider",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIdentityProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteIdentityProviderCommand = serializeAws_json1_1DeleteIdentityProviderCommand;
const serializeAws_json1_1DeleteResourceServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.DeleteResourceServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourceServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteResourceServerCommand = serializeAws_json1_1DeleteResourceServerCommand;
const serializeAws_json1_1DeleteUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.DeleteUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteUserCommand = serializeAws_json1_1DeleteUserCommand;
const serializeAws_json1_1DeleteUserAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.DeleteUserAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteUserAttributesCommand = serializeAws_json1_1DeleteUserAttributesCommand;
const serializeAws_json1_1DeleteUserPoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.DeleteUserPool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserPoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteUserPoolCommand = serializeAws_json1_1DeleteUserPoolCommand;
const serializeAws_json1_1DeleteUserPoolClientCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.DeleteUserPoolClient",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserPoolClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteUserPoolClientCommand = serializeAws_json1_1DeleteUserPoolClientCommand;
const serializeAws_json1_1DeleteUserPoolDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.DeleteUserPoolDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserPoolDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteUserPoolDomainCommand = serializeAws_json1_1DeleteUserPoolDomainCommand;
const serializeAws_json1_1DescribeIdentityProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.DescribeIdentityProvider",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeIdentityProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeIdentityProviderCommand = serializeAws_json1_1DescribeIdentityProviderCommand;
const serializeAws_json1_1DescribeResourceServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.DescribeResourceServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeResourceServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeResourceServerCommand = serializeAws_json1_1DescribeResourceServerCommand;
const serializeAws_json1_1DescribeRiskConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.DescribeRiskConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRiskConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRiskConfigurationCommand = serializeAws_json1_1DescribeRiskConfigurationCommand;
const serializeAws_json1_1DescribeUserImportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.DescribeUserImportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeUserImportJobCommand = serializeAws_json1_1DescribeUserImportJobCommand;
const serializeAws_json1_1DescribeUserPoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.DescribeUserPool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserPoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeUserPoolCommand = serializeAws_json1_1DescribeUserPoolCommand;
const serializeAws_json1_1DescribeUserPoolClientCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.DescribeUserPoolClient",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserPoolClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeUserPoolClientCommand = serializeAws_json1_1DescribeUserPoolClientCommand;
const serializeAws_json1_1DescribeUserPoolDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.DescribeUserPoolDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserPoolDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeUserPoolDomainCommand = serializeAws_json1_1DescribeUserPoolDomainCommand;
const serializeAws_json1_1ForgetDeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ForgetDevice",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ForgetDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ForgetDeviceCommand = serializeAws_json1_1ForgetDeviceCommand;
const serializeAws_json1_1ForgotPasswordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ForgotPassword",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ForgotPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ForgotPasswordCommand = serializeAws_json1_1ForgotPasswordCommand;
const serializeAws_json1_1GetCSVHeaderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.GetCSVHeader",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCSVHeaderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCSVHeaderCommand = serializeAws_json1_1GetCSVHeaderCommand;
const serializeAws_json1_1GetDeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.GetDevice",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDeviceCommand = serializeAws_json1_1GetDeviceCommand;
const serializeAws_json1_1GetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.GetGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetGroupCommand = serializeAws_json1_1GetGroupCommand;
const serializeAws_json1_1GetIdentityProviderByIdentifierCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetIdentityProviderByIdentifierRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetIdentityProviderByIdentifierCommand = serializeAws_json1_1GetIdentityProviderByIdentifierCommand;
const serializeAws_json1_1GetSigningCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.GetSigningCertificate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSigningCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSigningCertificateCommand = serializeAws_json1_1GetSigningCertificateCommand;
const serializeAws_json1_1GetUICustomizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.GetUICustomization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUICustomizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetUICustomizationCommand = serializeAws_json1_1GetUICustomizationCommand;
const serializeAws_json1_1GetUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.GetUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetUserCommand = serializeAws_json1_1GetUserCommand;
const serializeAws_json1_1GetUserAttributeVerificationCodeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUserAttributeVerificationCodeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetUserAttributeVerificationCodeCommand = serializeAws_json1_1GetUserAttributeVerificationCodeCommand;
const serializeAws_json1_1GetUserPoolMfaConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.GetUserPoolMfaConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUserPoolMfaConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetUserPoolMfaConfigCommand = serializeAws_json1_1GetUserPoolMfaConfigCommand;
const serializeAws_json1_1GlobalSignOutCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.GlobalSignOut",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GlobalSignOutRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GlobalSignOutCommand = serializeAws_json1_1GlobalSignOutCommand;
const serializeAws_json1_1InitiateAuthCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.InitiateAuth",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1InitiateAuthRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1InitiateAuthCommand = serializeAws_json1_1InitiateAuthCommand;
const serializeAws_json1_1ListDevicesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ListDevices",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDevicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDevicesCommand = serializeAws_json1_1ListDevicesCommand;
const serializeAws_json1_1ListGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ListGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListGroupsCommand = serializeAws_json1_1ListGroupsCommand;
const serializeAws_json1_1ListIdentityProvidersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ListIdentityProviders",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIdentityProvidersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListIdentityProvidersCommand = serializeAws_json1_1ListIdentityProvidersCommand;
const serializeAws_json1_1ListResourceServersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ListResourceServers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourceServersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResourceServersCommand = serializeAws_json1_1ListResourceServersCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ListUserImportJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ListUserImportJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUserImportJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListUserImportJobsCommand = serializeAws_json1_1ListUserImportJobsCommand;
const serializeAws_json1_1ListUserPoolClientsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ListUserPoolClients",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUserPoolClientsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListUserPoolClientsCommand = serializeAws_json1_1ListUserPoolClientsCommand;
const serializeAws_json1_1ListUserPoolsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ListUserPools",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUserPoolsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListUserPoolsCommand = serializeAws_json1_1ListUserPoolsCommand;
const serializeAws_json1_1ListUsersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ListUsers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUsersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListUsersCommand = serializeAws_json1_1ListUsersCommand;
const serializeAws_json1_1ListUsersInGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ListUsersInGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUsersInGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListUsersInGroupCommand = serializeAws_json1_1ListUsersInGroupCommand;
const serializeAws_json1_1ResendConfirmationCodeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.ResendConfirmationCode",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ResendConfirmationCodeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResendConfirmationCodeCommand = serializeAws_json1_1ResendConfirmationCodeCommand;
const serializeAws_json1_1RespondToAuthChallengeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.RespondToAuthChallenge",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RespondToAuthChallengeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RespondToAuthChallengeCommand = serializeAws_json1_1RespondToAuthChallengeCommand;
const serializeAws_json1_1SetRiskConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.SetRiskConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetRiskConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetRiskConfigurationCommand = serializeAws_json1_1SetRiskConfigurationCommand;
const serializeAws_json1_1SetUICustomizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.SetUICustomization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetUICustomizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetUICustomizationCommand = serializeAws_json1_1SetUICustomizationCommand;
const serializeAws_json1_1SetUserMFAPreferenceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.SetUserMFAPreference",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetUserMFAPreferenceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetUserMFAPreferenceCommand = serializeAws_json1_1SetUserMFAPreferenceCommand;
const serializeAws_json1_1SetUserPoolMfaConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.SetUserPoolMfaConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetUserPoolMfaConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetUserPoolMfaConfigCommand = serializeAws_json1_1SetUserPoolMfaConfigCommand;
const serializeAws_json1_1SetUserSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.SetUserSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetUserSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetUserSettingsCommand = serializeAws_json1_1SetUserSettingsCommand;
const serializeAws_json1_1SignUpCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.SignUp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SignUpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SignUpCommand = serializeAws_json1_1SignUpCommand;
const serializeAws_json1_1StartUserImportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.StartUserImportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartUserImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartUserImportJobCommand = serializeAws_json1_1StartUserImportJobCommand;
const serializeAws_json1_1StopUserImportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.StopUserImportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopUserImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopUserImportJobCommand = serializeAws_json1_1StopUserImportJobCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateAuthEventFeedbackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.UpdateAuthEventFeedback",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAuthEventFeedbackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAuthEventFeedbackCommand = serializeAws_json1_1UpdateAuthEventFeedbackCommand;
const serializeAws_json1_1UpdateDeviceStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.UpdateDeviceStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDeviceStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDeviceStatusCommand = serializeAws_json1_1UpdateDeviceStatusCommand;
const serializeAws_json1_1UpdateGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.UpdateGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateGroupCommand = serializeAws_json1_1UpdateGroupCommand;
const serializeAws_json1_1UpdateIdentityProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.UpdateIdentityProvider",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateIdentityProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateIdentityProviderCommand = serializeAws_json1_1UpdateIdentityProviderCommand;
const serializeAws_json1_1UpdateResourceServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.UpdateResourceServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateResourceServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateResourceServerCommand = serializeAws_json1_1UpdateResourceServerCommand;
const serializeAws_json1_1UpdateUserAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.UpdateUserAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateUserAttributesCommand = serializeAws_json1_1UpdateUserAttributesCommand;
const serializeAws_json1_1UpdateUserPoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.UpdateUserPool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserPoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateUserPoolCommand = serializeAws_json1_1UpdateUserPoolCommand;
const serializeAws_json1_1UpdateUserPoolClientCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.UpdateUserPoolClient",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserPoolClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateUserPoolClientCommand = serializeAws_json1_1UpdateUserPoolClientCommand;
const serializeAws_json1_1UpdateUserPoolDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.UpdateUserPoolDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserPoolDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateUserPoolDomainCommand = serializeAws_json1_1UpdateUserPoolDomainCommand;
const serializeAws_json1_1VerifySoftwareTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.VerifySoftwareToken",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1VerifySoftwareTokenRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1VerifySoftwareTokenCommand = serializeAws_json1_1VerifySoftwareTokenCommand;
const serializeAws_json1_1VerifyUserAttributeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.VerifyUserAttribute",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1VerifyUserAttributeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1VerifyUserAttributeCommand = serializeAws_json1_1VerifyUserAttributeCommand;
const deserializeAws_json1_1AddCustomAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddCustomAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddCustomAttributesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddCustomAttributesCommand = deserializeAws_json1_1AddCustomAttributesCommand;
const deserializeAws_json1_1AddCustomAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserImportInProgressException":
        case "com.amazonaws.cognitoidentityprovider#UserImportInProgressException":
            response = {
                ...(await deserializeAws_json1_1UserImportInProgressExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminAddUserToGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminAddUserToGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminAddUserToGroupCommand = deserializeAws_json1_1AdminAddUserToGroupCommand;
const deserializeAws_json1_1AdminAddUserToGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminConfirmSignUpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminConfirmSignUpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminConfirmSignUpResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminConfirmSignUpCommand = deserializeAws_json1_1AdminConfirmSignUpCommand;
const deserializeAws_json1_1AdminConfirmSignUpCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyFailedAttemptsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyFailedAttemptsException":
            response = {
                ...(await deserializeAws_json1_1TooManyFailedAttemptsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            response = {
                ...(await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            response = {
                ...(await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminCreateUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminCreateUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminCreateUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminCreateUserCommand = deserializeAws_json1_1AdminCreateUserCommand;
const deserializeAws_json1_1AdminCreateUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeDeliveryFailureException":
        case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
            response = {
                ...(await deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
            response = {
                ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.cognitoidentityprovider#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            response = {
                ...(await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserStateException":
        case "com.amazonaws.cognitoidentityprovider#UnsupportedUserStateException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedUserStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            response = {
                ...(await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UsernameExistsException":
        case "com.amazonaws.cognitoidentityprovider#UsernameExistsException":
            response = {
                ...(await deserializeAws_json1_1UsernameExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminDeleteUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminDeleteUserCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminDeleteUserCommand = deserializeAws_json1_1AdminDeleteUserCommand;
const deserializeAws_json1_1AdminDeleteUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminDeleteUserAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminDeleteUserAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminDeleteUserAttributesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminDeleteUserAttributesCommand = deserializeAws_json1_1AdminDeleteUserAttributesCommand;
const deserializeAws_json1_1AdminDeleteUserAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminDisableProviderForUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminDisableProviderForUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminDisableProviderForUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminDisableProviderForUserCommand = deserializeAws_json1_1AdminDisableProviderForUserCommand;
const deserializeAws_json1_1AdminDisableProviderForUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AliasExistsException":
        case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
            response = {
                ...(await deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminDisableUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminDisableUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminDisableUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminDisableUserCommand = deserializeAws_json1_1AdminDisableUserCommand;
const deserializeAws_json1_1AdminDisableUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminEnableUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminEnableUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminEnableUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminEnableUserCommand = deserializeAws_json1_1AdminEnableUserCommand;
const deserializeAws_json1_1AdminEnableUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminForgetDeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminForgetDeviceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminForgetDeviceCommand = deserializeAws_json1_1AdminForgetDeviceCommand;
const deserializeAws_json1_1AdminForgetDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminGetDeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminGetDeviceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminGetDeviceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminGetDeviceCommand = deserializeAws_json1_1AdminGetDeviceCommand;
const deserializeAws_json1_1AdminGetDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminGetUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminGetUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminGetUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminGetUserCommand = deserializeAws_json1_1AdminGetUserCommand;
const deserializeAws_json1_1AdminGetUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminInitiateAuthCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminInitiateAuthCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminInitiateAuthResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminInitiateAuthCommand = deserializeAws_json1_1AdminInitiateAuthCommand;
const deserializeAws_json1_1AdminInitiateAuthCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MFAMethodNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#MFAMethodNotFoundException":
            response = {
                ...(await deserializeAws_json1_1MFAMethodNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            response = {
                ...(await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            response = {
                ...(await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminLinkProviderForUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminLinkProviderForUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminLinkProviderForUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminLinkProviderForUserCommand = deserializeAws_json1_1AdminLinkProviderForUserCommand;
const deserializeAws_json1_1AdminLinkProviderForUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AliasExistsException":
        case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
            response = {
                ...(await deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminListDevicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminListDevicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminListDevicesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminListDevicesCommand = deserializeAws_json1_1AdminListDevicesCommand;
const deserializeAws_json1_1AdminListDevicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminListGroupsForUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminListGroupsForUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminListGroupsForUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminListGroupsForUserCommand = deserializeAws_json1_1AdminListGroupsForUserCommand;
const deserializeAws_json1_1AdminListGroupsForUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminListUserAuthEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminListUserAuthEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminListUserAuthEventsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminListUserAuthEventsCommand = deserializeAws_json1_1AdminListUserAuthEventsCommand;
const deserializeAws_json1_1AdminListUserAuthEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserPoolAddOnNotEnabledException":
        case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminRemoveUserFromGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminRemoveUserFromGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminRemoveUserFromGroupCommand = deserializeAws_json1_1AdminRemoveUserFromGroupCommand;
const deserializeAws_json1_1AdminRemoveUserFromGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminResetUserPasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminResetUserPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminResetUserPasswordResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminResetUserPasswordCommand = deserializeAws_json1_1AdminResetUserPasswordCommand;
const deserializeAws_json1_1AdminResetUserPasswordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            response = {
                ...(await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            response = {
                ...(await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminRespondToAuthChallengeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminRespondToAuthChallengeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminRespondToAuthChallengeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminRespondToAuthChallengeCommand = deserializeAws_json1_1AdminRespondToAuthChallengeCommand;
const deserializeAws_json1_1AdminRespondToAuthChallengeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AliasExistsException":
        case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
            response = {
                ...(await deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CodeMismatchException":
        case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
            response = {
                ...(await deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ExpiredCodeException":
        case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException":
            response = {
                ...(await deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
            response = {
                ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MFAMethodNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#MFAMethodNotFoundException":
            response = {
                ...(await deserializeAws_json1_1MFAMethodNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SoftwareTokenMFANotFoundException":
        case "com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException":
            response = {
                ...(await deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            response = {
                ...(await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            response = {
                ...(await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminSetUserMFAPreferenceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminSetUserMFAPreferenceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminSetUserMFAPreferenceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminSetUserMFAPreferenceCommand = deserializeAws_json1_1AdminSetUserMFAPreferenceCommand;
const deserializeAws_json1_1AdminSetUserMFAPreferenceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminSetUserPasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminSetUserPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminSetUserPasswordResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminSetUserPasswordCommand = deserializeAws_json1_1AdminSetUserPasswordCommand;
const deserializeAws_json1_1AdminSetUserPasswordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
            response = {
                ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminSetUserSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminSetUserSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminSetUserSettingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminSetUserSettingsCommand = deserializeAws_json1_1AdminSetUserSettingsCommand;
const deserializeAws_json1_1AdminSetUserSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminUpdateAuthEventFeedbackResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand = deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand;
const deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserPoolAddOnNotEnabledException":
        case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminUpdateDeviceStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminUpdateDeviceStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminUpdateDeviceStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminUpdateDeviceStatusCommand = deserializeAws_json1_1AdminUpdateDeviceStatusCommand;
const deserializeAws_json1_1AdminUpdateDeviceStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminUpdateUserAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminUpdateUserAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminUpdateUserAttributesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminUpdateUserAttributesCommand = deserializeAws_json1_1AdminUpdateUserAttributesCommand;
const deserializeAws_json1_1AdminUpdateUserAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AliasExistsException":
        case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
            response = {
                ...(await deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            response = {
                ...(await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            response = {
                ...(await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AdminUserGlobalSignOutCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AdminUserGlobalSignOutCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminUserGlobalSignOutResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AdminUserGlobalSignOutCommand = deserializeAws_json1_1AdminUserGlobalSignOutCommand;
const deserializeAws_json1_1AdminUserGlobalSignOutCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AssociateSoftwareTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateSoftwareTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateSoftwareTokenResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateSoftwareTokenCommand = deserializeAws_json1_1AssociateSoftwareTokenCommand;
const deserializeAws_json1_1AssociateSoftwareTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognitoidentityprovider#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SoftwareTokenMFANotFoundException":
        case "com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException":
            response = {
                ...(await deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ChangePasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ChangePasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ChangePasswordResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ChangePasswordCommand = deserializeAws_json1_1ChangePasswordCommand;
const deserializeAws_json1_1ChangePasswordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
            response = {
                ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ConfirmDeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ConfirmDeviceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConfirmDeviceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ConfirmDeviceCommand = deserializeAws_json1_1ConfirmDeviceCommand;
const deserializeAws_json1_1ConfirmDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
            response = {
                ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UsernameExistsException":
        case "com.amazonaws.cognitoidentityprovider#UsernameExistsException":
            response = {
                ...(await deserializeAws_json1_1UsernameExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ConfirmForgotPasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ConfirmForgotPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConfirmForgotPasswordResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ConfirmForgotPasswordCommand = deserializeAws_json1_1ConfirmForgotPasswordCommand;
const deserializeAws_json1_1ConfirmForgotPasswordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeMismatchException":
        case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
            response = {
                ...(await deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ExpiredCodeException":
        case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException":
            response = {
                ...(await deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
            response = {
                ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyFailedAttemptsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyFailedAttemptsException":
            response = {
                ...(await deserializeAws_json1_1TooManyFailedAttemptsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            response = {
                ...(await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            response = {
                ...(await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ConfirmSignUpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ConfirmSignUpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConfirmSignUpResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ConfirmSignUpCommand = deserializeAws_json1_1ConfirmSignUpCommand;
const deserializeAws_json1_1ConfirmSignUpCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AliasExistsException":
        case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
            response = {
                ...(await deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CodeMismatchException":
        case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
            response = {
                ...(await deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ExpiredCodeException":
        case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException":
            response = {
                ...(await deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyFailedAttemptsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyFailedAttemptsException":
            response = {
                ...(await deserializeAws_json1_1TooManyFailedAttemptsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            response = {
                ...(await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            response = {
                ...(await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateGroupCommand = deserializeAws_json1_1CreateGroupCommand;
const deserializeAws_json1_1CreateGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GroupExistsException":
        case "com.amazonaws.cognitoidentityprovider#GroupExistsException":
            response = {
                ...(await deserializeAws_json1_1GroupExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateIdentityProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateIdentityProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateIdentityProviderResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateIdentityProviderCommand = deserializeAws_json1_1CreateIdentityProviderCommand;
const deserializeAws_json1_1CreateIdentityProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateProviderException":
        case "com.amazonaws.cognitoidentityprovider#DuplicateProviderException":
            response = {
                ...(await deserializeAws_json1_1DuplicateProviderExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateResourceServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateResourceServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateResourceServerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateResourceServerCommand = deserializeAws_json1_1CreateResourceServerCommand;
const deserializeAws_json1_1CreateResourceServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateUserImportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateUserImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserImportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateUserImportJobCommand = deserializeAws_json1_1CreateUserImportJobCommand;
const deserializeAws_json1_1CreateUserImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.cognitoidentityprovider#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateUserPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateUserPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserPoolResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateUserPoolCommand = deserializeAws_json1_1CreateUserPoolCommand;
const deserializeAws_json1_1CreateUserPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserPoolTaggingException":
        case "com.amazonaws.cognitoidentityprovider#UserPoolTaggingException":
            response = {
                ...(await deserializeAws_json1_1UserPoolTaggingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateUserPoolClientCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateUserPoolClientCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserPoolClientResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateUserPoolClientCommand = deserializeAws_json1_1CreateUserPoolClientCommand;
const deserializeAws_json1_1CreateUserPoolClientCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOAuthFlowException":
        case "com.amazonaws.cognitoidentityprovider#InvalidOAuthFlowException":
            response = {
                ...(await deserializeAws_json1_1InvalidOAuthFlowExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ScopeDoesNotExistException":
        case "com.amazonaws.cognitoidentityprovider#ScopeDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ScopeDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateUserPoolDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateUserPoolDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserPoolDomainResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateUserPoolDomainCommand = deserializeAws_json1_1CreateUserPoolDomainCommand;
const deserializeAws_json1_1CreateUserPoolDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteGroupCommand = deserializeAws_json1_1DeleteGroupCommand;
const deserializeAws_json1_1DeleteGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteIdentityProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteIdentityProviderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteIdentityProviderCommand = deserializeAws_json1_1DeleteIdentityProviderCommand;
const deserializeAws_json1_1DeleteIdentityProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedIdentityProviderException":
        case "com.amazonaws.cognitoidentityprovider#UnsupportedIdentityProviderException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedIdentityProviderExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteResourceServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteResourceServerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteResourceServerCommand = deserializeAws_json1_1DeleteResourceServerCommand;
const deserializeAws_json1_1DeleteResourceServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteUserCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteUserCommand = deserializeAws_json1_1DeleteUserCommand;
const deserializeAws_json1_1DeleteUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteUserAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteUserAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteUserAttributesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteUserAttributesCommand = deserializeAws_json1_1DeleteUserAttributesCommand;
const deserializeAws_json1_1DeleteUserAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteUserPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteUserPoolCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteUserPoolCommand = deserializeAws_json1_1DeleteUserPoolCommand;
const deserializeAws_json1_1DeleteUserPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserImportInProgressException":
        case "com.amazonaws.cognitoidentityprovider#UserImportInProgressException":
            response = {
                ...(await deserializeAws_json1_1UserImportInProgressExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteUserPoolClientCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteUserPoolClientCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteUserPoolClientCommand = deserializeAws_json1_1DeleteUserPoolClientCommand;
const deserializeAws_json1_1DeleteUserPoolClientCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteUserPoolDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteUserPoolDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteUserPoolDomainResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteUserPoolDomainCommand = deserializeAws_json1_1DeleteUserPoolDomainCommand;
const deserializeAws_json1_1DeleteUserPoolDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeIdentityProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeIdentityProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeIdentityProviderResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeIdentityProviderCommand = deserializeAws_json1_1DescribeIdentityProviderCommand;
const deserializeAws_json1_1DescribeIdentityProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeResourceServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeResourceServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeResourceServerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeResourceServerCommand = deserializeAws_json1_1DescribeResourceServerCommand;
const deserializeAws_json1_1DescribeResourceServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeRiskConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRiskConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRiskConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRiskConfigurationCommand = deserializeAws_json1_1DescribeRiskConfigurationCommand;
const deserializeAws_json1_1DescribeRiskConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserPoolAddOnNotEnabledException":
        case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeUserImportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeUserImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserImportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeUserImportJobCommand = deserializeAws_json1_1DescribeUserImportJobCommand;
const deserializeAws_json1_1DescribeUserImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeUserPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeUserPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserPoolResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeUserPoolCommand = deserializeAws_json1_1DescribeUserPoolCommand;
const deserializeAws_json1_1DescribeUserPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserPoolTaggingException":
        case "com.amazonaws.cognitoidentityprovider#UserPoolTaggingException":
            response = {
                ...(await deserializeAws_json1_1UserPoolTaggingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeUserPoolClientCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeUserPoolClientCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserPoolClientResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeUserPoolClientCommand = deserializeAws_json1_1DescribeUserPoolClientCommand;
const deserializeAws_json1_1DescribeUserPoolClientCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeUserPoolDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeUserPoolDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserPoolDomainResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeUserPoolDomainCommand = deserializeAws_json1_1DescribeUserPoolDomainCommand;
const deserializeAws_json1_1DescribeUserPoolDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ForgetDeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ForgetDeviceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ForgetDeviceCommand = deserializeAws_json1_1ForgetDeviceCommand;
const deserializeAws_json1_1ForgetDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ForgotPasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ForgotPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ForgotPasswordResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ForgotPasswordCommand = deserializeAws_json1_1ForgotPasswordCommand;
const deserializeAws_json1_1ForgotPasswordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeDeliveryFailureException":
        case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
            response = {
                ...(await deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            response = {
                ...(await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            response = {
                ...(await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCSVHeaderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCSVHeaderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCSVHeaderResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCSVHeaderCommand = deserializeAws_json1_1GetCSVHeaderCommand;
const deserializeAws_json1_1GetCSVHeaderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDeviceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeviceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDeviceCommand = deserializeAws_json1_1GetDeviceCommand;
const deserializeAws_json1_1GetDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetGroupCommand = deserializeAws_json1_1GetGroupCommand;
const deserializeAws_json1_1GetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetIdentityProviderByIdentifierCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetIdentityProviderByIdentifierCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetIdentityProviderByIdentifierResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetIdentityProviderByIdentifierCommand = deserializeAws_json1_1GetIdentityProviderByIdentifierCommand;
const deserializeAws_json1_1GetIdentityProviderByIdentifierCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetSigningCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSigningCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSigningCertificateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSigningCertificateCommand = deserializeAws_json1_1GetSigningCertificateCommand;
const deserializeAws_json1_1GetSigningCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetUICustomizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetUICustomizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUICustomizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetUICustomizationCommand = deserializeAws_json1_1GetUICustomizationCommand;
const deserializeAws_json1_1GetUICustomizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetUserCommand = deserializeAws_json1_1GetUserCommand;
const deserializeAws_json1_1GetUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetUserAttributeVerificationCodeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetUserAttributeVerificationCodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUserAttributeVerificationCodeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetUserAttributeVerificationCodeCommand = deserializeAws_json1_1GetUserAttributeVerificationCodeCommand;
const deserializeAws_json1_1GetUserAttributeVerificationCodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeDeliveryFailureException":
        case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
            response = {
                ...(await deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            response = {
                ...(await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            response = {
                ...(await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetUserPoolMfaConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetUserPoolMfaConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUserPoolMfaConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetUserPoolMfaConfigCommand = deserializeAws_json1_1GetUserPoolMfaConfigCommand;
const deserializeAws_json1_1GetUserPoolMfaConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GlobalSignOutCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GlobalSignOutCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GlobalSignOutResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GlobalSignOutCommand = deserializeAws_json1_1GlobalSignOutCommand;
const deserializeAws_json1_1GlobalSignOutCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1InitiateAuthCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1InitiateAuthCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1InitiateAuthResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1InitiateAuthCommand = deserializeAws_json1_1InitiateAuthCommand;
const deserializeAws_json1_1InitiateAuthCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            response = {
                ...(await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            response = {
                ...(await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDevicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDevicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDevicesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDevicesCommand = deserializeAws_json1_1ListDevicesCommand;
const deserializeAws_json1_1ListDevicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListGroupsCommand = deserializeAws_json1_1ListGroupsCommand;
const deserializeAws_json1_1ListGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListIdentityProvidersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListIdentityProvidersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListIdentityProvidersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListIdentityProvidersCommand = deserializeAws_json1_1ListIdentityProvidersCommand;
const deserializeAws_json1_1ListIdentityProvidersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListResourceServersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResourceServersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourceServersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResourceServersCommand = deserializeAws_json1_1ListResourceServersCommand;
const deserializeAws_json1_1ListResourceServersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListUserImportJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListUserImportJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUserImportJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListUserImportJobsCommand = deserializeAws_json1_1ListUserImportJobsCommand;
const deserializeAws_json1_1ListUserImportJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListUserPoolClientsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListUserPoolClientsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUserPoolClientsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListUserPoolClientsCommand = deserializeAws_json1_1ListUserPoolClientsCommand;
const deserializeAws_json1_1ListUserPoolClientsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListUserPoolsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListUserPoolsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUserPoolsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListUserPoolsCommand = deserializeAws_json1_1ListUserPoolsCommand;
const deserializeAws_json1_1ListUserPoolsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListUsersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListUsersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUsersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListUsersCommand = deserializeAws_json1_1ListUsersCommand;
const deserializeAws_json1_1ListUsersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListUsersInGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListUsersInGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUsersInGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListUsersInGroupCommand = deserializeAws_json1_1ListUsersInGroupCommand;
const deserializeAws_json1_1ListUsersInGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ResendConfirmationCodeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ResendConfirmationCodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResendConfirmationCodeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResendConfirmationCodeCommand = deserializeAws_json1_1ResendConfirmationCodeCommand;
const deserializeAws_json1_1ResendConfirmationCodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeDeliveryFailureException":
        case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
            response = {
                ...(await deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            response = {
                ...(await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            response = {
                ...(await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RespondToAuthChallengeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RespondToAuthChallengeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RespondToAuthChallengeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RespondToAuthChallengeCommand = deserializeAws_json1_1RespondToAuthChallengeCommand;
const deserializeAws_json1_1RespondToAuthChallengeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AliasExistsException":
        case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
            response = {
                ...(await deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CodeMismatchException":
        case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
            response = {
                ...(await deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ExpiredCodeException":
        case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException":
            response = {
                ...(await deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
            response = {
                ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MFAMethodNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#MFAMethodNotFoundException":
            response = {
                ...(await deserializeAws_json1_1MFAMethodNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SoftwareTokenMFANotFoundException":
        case "com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException":
            response = {
                ...(await deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            response = {
                ...(await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            response = {
                ...(await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SetRiskConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetRiskConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetRiskConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetRiskConfigurationCommand = deserializeAws_json1_1SetRiskConfigurationCommand;
const deserializeAws_json1_1SetRiskConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeDeliveryFailureException":
        case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
            response = {
                ...(await deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserPoolAddOnNotEnabledException":
        case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SetUICustomizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetUICustomizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetUICustomizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetUICustomizationCommand = deserializeAws_json1_1SetUICustomizationCommand;
const deserializeAws_json1_1SetUICustomizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SetUserMFAPreferenceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetUserMFAPreferenceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetUserMFAPreferenceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetUserMFAPreferenceCommand = deserializeAws_json1_1SetUserMFAPreferenceCommand;
const deserializeAws_json1_1SetUserMFAPreferenceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SetUserPoolMfaConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetUserPoolMfaConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetUserPoolMfaConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetUserPoolMfaConfigCommand = deserializeAws_json1_1SetUserPoolMfaConfigCommand;
const deserializeAws_json1_1SetUserPoolMfaConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SetUserSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetUserSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetUserSettingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetUserSettingsCommand = deserializeAws_json1_1SetUserSettingsCommand;
const deserializeAws_json1_1SetUserSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SignUpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SignUpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SignUpResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SignUpCommand = deserializeAws_json1_1SignUpCommand;
const deserializeAws_json1_1SignUpCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeDeliveryFailureException":
        case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
            response = {
                ...(await deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
            response = {
                ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            response = {
                ...(await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            response = {
                ...(await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UsernameExistsException":
        case "com.amazonaws.cognitoidentityprovider#UsernameExistsException":
            response = {
                ...(await deserializeAws_json1_1UsernameExistsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartUserImportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartUserImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartUserImportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartUserImportJobCommand = deserializeAws_json1_1StartUserImportJobCommand;
const deserializeAws_json1_1StartUserImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.cognitoidentityprovider#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopUserImportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopUserImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopUserImportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopUserImportJobCommand = deserializeAws_json1_1StopUserImportJobCommand;
const deserializeAws_json1_1StopUserImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.cognitoidentityprovider#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
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
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
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
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateAuthEventFeedbackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateAuthEventFeedbackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAuthEventFeedbackResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAuthEventFeedbackCommand = deserializeAws_json1_1UpdateAuthEventFeedbackCommand;
const deserializeAws_json1_1UpdateAuthEventFeedbackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserPoolAddOnNotEnabledException":
        case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateDeviceStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDeviceStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDeviceStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDeviceStatusCommand = deserializeAws_json1_1UpdateDeviceStatusCommand;
const deserializeAws_json1_1UpdateDeviceStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateGroupCommand = deserializeAws_json1_1UpdateGroupCommand;
const deserializeAws_json1_1UpdateGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateIdentityProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateIdentityProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateIdentityProviderResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateIdentityProviderCommand = deserializeAws_json1_1UpdateIdentityProviderCommand;
const deserializeAws_json1_1UpdateIdentityProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedIdentityProviderException":
        case "com.amazonaws.cognitoidentityprovider#UnsupportedIdentityProviderException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedIdentityProviderExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateResourceServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateResourceServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateResourceServerResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateResourceServerCommand = deserializeAws_json1_1UpdateResourceServerCommand;
const deserializeAws_json1_1UpdateResourceServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateUserAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateUserAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUserAttributesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateUserAttributesCommand = deserializeAws_json1_1UpdateUserAttributesCommand;
const deserializeAws_json1_1UpdateUserAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AliasExistsException":
        case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
            response = {
                ...(await deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CodeDeliveryFailureException":
        case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
            response = {
                ...(await deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CodeMismatchException":
        case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
            response = {
                ...(await deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ExpiredCodeException":
        case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException":
            response = {
                ...(await deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            response = {
                ...(await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            response = {
                ...(await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            response = {
                ...(await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateUserPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateUserPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUserPoolResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateUserPoolCommand = deserializeAws_json1_1UpdateUserPoolCommand;
const deserializeAws_json1_1UpdateUserPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognitoidentityprovider#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            response = {
                ...(await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserImportInProgressException":
        case "com.amazonaws.cognitoidentityprovider#UserImportInProgressException":
            response = {
                ...(await deserializeAws_json1_1UserImportInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserPoolTaggingException":
        case "com.amazonaws.cognitoidentityprovider#UserPoolTaggingException":
            response = {
                ...(await deserializeAws_json1_1UserPoolTaggingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateUserPoolClientCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateUserPoolClientCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUserPoolClientResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateUserPoolClientCommand = deserializeAws_json1_1UpdateUserPoolClientCommand;
const deserializeAws_json1_1UpdateUserPoolClientCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognitoidentityprovider#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOAuthFlowException":
        case "com.amazonaws.cognitoidentityprovider#InvalidOAuthFlowException":
            response = {
                ...(await deserializeAws_json1_1InvalidOAuthFlowExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ScopeDoesNotExistException":
        case "com.amazonaws.cognitoidentityprovider#ScopeDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ScopeDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateUserPoolDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateUserPoolDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUserPoolDomainResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateUserPoolDomainCommand = deserializeAws_json1_1UpdateUserPoolDomainCommand;
const deserializeAws_json1_1UpdateUserPoolDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1VerifySoftwareTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1VerifySoftwareTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VerifySoftwareTokenResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1VerifySoftwareTokenCommand = deserializeAws_json1_1VerifySoftwareTokenCommand;
const deserializeAws_json1_1VerifySoftwareTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeMismatchException":
        case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
            response = {
                ...(await deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EnableSoftwareTokenMFAException":
        case "com.amazonaws.cognitoidentityprovider#EnableSoftwareTokenMFAException":
            response = {
                ...(await deserializeAws_json1_1EnableSoftwareTokenMFAExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SoftwareTokenMFANotFoundException":
        case "com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException":
            response = {
                ...(await deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1VerifyUserAttributeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1VerifyUserAttributeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VerifyUserAttributeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1VerifyUserAttributeCommand = deserializeAws_json1_1VerifyUserAttributeCommand;
const deserializeAws_json1_1VerifyUserAttributeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeMismatchException":
        case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
            response = {
                ...(await deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ExpiredCodeException":
        case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException":
            response = {
                ...(await deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            response = {
                ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            response = {
                ...(await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            response = {
                ...(await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AliasExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AliasExistsException(body, context);
    const contents = {
        name: "AliasExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CodeDeliveryFailureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CodeDeliveryFailureException(body, context);
    const contents = {
        name: "CodeDeliveryFailureException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CodeMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CodeMismatchException(body, context);
    const contents = {
        name: "CodeMismatchException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = {
        name: "ConcurrentModificationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DuplicateProviderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateProviderException(body, context);
    const contents = {
        name: "DuplicateProviderException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EnableSoftwareTokenMFAExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EnableSoftwareTokenMFAException(body, context);
    const contents = {
        name: "EnableSoftwareTokenMFAException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ExpiredCodeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExpiredCodeException(body, context);
    const contents = {
        name: "ExpiredCodeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1GroupExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1GroupExistsException(body, context);
    const contents = {
        name: "GroupExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalErrorException(body, context);
    const contents = {
        name: "InternalErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEmailRoleAccessPolicyException(body, context);
    const contents = {
        name: "InvalidEmailRoleAccessPolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidLambdaResponseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLambdaResponseException(body, context);
    const contents = {
        name: "InvalidLambdaResponseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidOAuthFlowExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOAuthFlowException(body, context);
    const contents = {
        name: "InvalidOAuthFlowException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = {
        name: "InvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPasswordExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPasswordException(body, context);
    const contents = {
        name: "InvalidPasswordException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSmsRoleAccessPolicyException(body, context);
    const contents = {
        name: "InvalidSmsRoleAccessPolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSmsRoleTrustRelationshipException(body, context);
    const contents = {
        name: "InvalidSmsRoleTrustRelationshipException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidUserPoolConfigurationException(body, context);
    const contents = {
        name: "InvalidUserPoolConfigurationException",
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
const deserializeAws_json1_1MFAMethodNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MFAMethodNotFoundException(body, context);
    const contents = {
        name: "MFAMethodNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NotAuthorizedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotAuthorizedException(body, context);
    const contents = {
        name: "NotAuthorizedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PasswordResetRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PasswordResetRequiredException(body, context);
    const contents = {
        name: "PasswordResetRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PreconditionNotMetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PreconditionNotMetException(body, context);
    const contents = {
        name: "PreconditionNotMetException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ScopeDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ScopeDoesNotExistException(body, context);
    const contents = {
        name: "ScopeDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SoftwareTokenMFANotFoundException(body, context);
    const contents = {
        name: "SoftwareTokenMFANotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TooManyFailedAttemptsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyFailedAttemptsException(body, context);
    const contents = {
        name: "TooManyFailedAttemptsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
    const contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnexpectedLambdaExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnexpectedLambdaException(body, context);
    const contents = {
        name: "UnexpectedLambdaException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedIdentityProviderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedIdentityProviderException(body, context);
    const contents = {
        name: "UnsupportedIdentityProviderException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedUserStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedUserStateException(body, context);
    const contents = {
        name: "UnsupportedUserStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UserImportInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserImportInProgressException(body, context);
    const contents = {
        name: "UserImportInProgressException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UserLambdaValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserLambdaValidationException(body, context);
    const contents = {
        name: "UserLambdaValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UsernameExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UsernameExistsException(body, context);
    const contents = {
        name: "UsernameExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UserNotConfirmedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserNotConfirmedException(body, context);
    const contents = {
        name: "UserNotConfirmedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UserNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserNotFoundException(body, context);
    const contents = {
        name: "UserNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserPoolAddOnNotEnabledException(body, context);
    const contents = {
        name: "UserPoolAddOnNotEnabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UserPoolTaggingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserPoolTaggingException(body, context);
    const contents = {
        name: "UserPoolTaggingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AccountRecoverySettingType = (input, context) => {
    return {
        ...(input.RecoveryMechanisms !== undefined &&
            input.RecoveryMechanisms !== null && {
            RecoveryMechanisms: serializeAws_json1_1RecoveryMechanismsType(input.RecoveryMechanisms, context),
        }),
    };
};
const serializeAws_json1_1AccountTakeoverActionsType = (input, context) => {
    return {
        ...(input.HighAction !== undefined &&
            input.HighAction !== null && {
            HighAction: serializeAws_json1_1AccountTakeoverActionType(input.HighAction, context),
        }),
        ...(input.LowAction !== undefined &&
            input.LowAction !== null && {
            LowAction: serializeAws_json1_1AccountTakeoverActionType(input.LowAction, context),
        }),
        ...(input.MediumAction !== undefined &&
            input.MediumAction !== null && {
            MediumAction: serializeAws_json1_1AccountTakeoverActionType(input.MediumAction, context),
        }),
    };
};
const serializeAws_json1_1AccountTakeoverActionType = (input, context) => {
    return {
        ...(input.EventAction !== undefined && input.EventAction !== null && { EventAction: input.EventAction }),
        ...(input.Notify !== undefined && input.Notify !== null && { Notify: input.Notify }),
    };
};
const serializeAws_json1_1AccountTakeoverRiskConfigurationType = (input, context) => {
    return {
        ...(input.Actions !== undefined &&
            input.Actions !== null && { Actions: serializeAws_json1_1AccountTakeoverActionsType(input.Actions, context) }),
        ...(input.NotifyConfiguration !== undefined &&
            input.NotifyConfiguration !== null && {
            NotifyConfiguration: serializeAws_json1_1NotifyConfigurationType(input.NotifyConfiguration, context),
        }),
    };
};
const serializeAws_json1_1AddCustomAttributesRequest = (input, context) => {
    return {
        ...(input.CustomAttributes !== undefined &&
            input.CustomAttributes !== null && {
            CustomAttributes: serializeAws_json1_1CustomAttributesListType(input.CustomAttributes, context),
        }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1AdminAddUserToGroupRequest = (input, context) => {
    return {
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminConfirmSignUpRequest = (input, context) => {
    return {
        ...(input.ClientMetadata !== undefined &&
            input.ClientMetadata !== null && {
            ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
        }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminCreateUserConfigType = (input, context) => {
    return {
        ...(input.AllowAdminCreateUserOnly !== undefined &&
            input.AllowAdminCreateUserOnly !== null && { AllowAdminCreateUserOnly: input.AllowAdminCreateUserOnly }),
        ...(input.InviteMessageTemplate !== undefined &&
            input.InviteMessageTemplate !== null && {
            InviteMessageTemplate: serializeAws_json1_1MessageTemplateType(input.InviteMessageTemplate, context),
        }),
        ...(input.UnusedAccountValidityDays !== undefined &&
            input.UnusedAccountValidityDays !== null && { UnusedAccountValidityDays: input.UnusedAccountValidityDays }),
    };
};
const serializeAws_json1_1AdminCreateUserRequest = (input, context) => {
    return {
        ...(input.ClientMetadata !== undefined &&
            input.ClientMetadata !== null && {
            ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
        }),
        ...(input.DesiredDeliveryMediums !== undefined &&
            input.DesiredDeliveryMediums !== null && {
            DesiredDeliveryMediums: serializeAws_json1_1DeliveryMediumListType(input.DesiredDeliveryMediums, context),
        }),
        ...(input.ForceAliasCreation !== undefined &&
            input.ForceAliasCreation !== null && { ForceAliasCreation: input.ForceAliasCreation }),
        ...(input.MessageAction !== undefined && input.MessageAction !== null && { MessageAction: input.MessageAction }),
        ...(input.TemporaryPassword !== undefined &&
            input.TemporaryPassword !== null && { TemporaryPassword: input.TemporaryPassword }),
        ...(input.UserAttributes !== undefined &&
            input.UserAttributes !== null && {
            UserAttributes: serializeAws_json1_1AttributeListType(input.UserAttributes, context),
        }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
        ...(input.ValidationData !== undefined &&
            input.ValidationData !== null && {
            ValidationData: serializeAws_json1_1AttributeListType(input.ValidationData, context),
        }),
    };
};
const serializeAws_json1_1AdminDeleteUserAttributesRequest = (input, context) => {
    return {
        ...(input.UserAttributeNames !== undefined &&
            input.UserAttributeNames !== null && {
            UserAttributeNames: serializeAws_json1_1AttributeNameListType(input.UserAttributeNames, context),
        }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminDeleteUserRequest = (input, context) => {
    return {
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminDisableProviderForUserRequest = (input, context) => {
    return {
        ...(input.User !== undefined &&
            input.User !== null && { User: serializeAws_json1_1ProviderUserIdentifierType(input.User, context) }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1AdminDisableUserRequest = (input, context) => {
    return {
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminEnableUserRequest = (input, context) => {
    return {
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminForgetDeviceRequest = (input, context) => {
    return {
        ...(input.DeviceKey !== undefined && input.DeviceKey !== null && { DeviceKey: input.DeviceKey }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminGetDeviceRequest = (input, context) => {
    return {
        ...(input.DeviceKey !== undefined && input.DeviceKey !== null && { DeviceKey: input.DeviceKey }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminGetUserRequest = (input, context) => {
    return {
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminInitiateAuthRequest = (input, context) => {
    return {
        ...(input.AnalyticsMetadata !== undefined &&
            input.AnalyticsMetadata !== null && {
            AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
        }),
        ...(input.AuthFlow !== undefined && input.AuthFlow !== null && { AuthFlow: input.AuthFlow }),
        ...(input.AuthParameters !== undefined &&
            input.AuthParameters !== null && {
            AuthParameters: serializeAws_json1_1AuthParametersType(input.AuthParameters, context),
        }),
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.ClientMetadata !== undefined &&
            input.ClientMetadata !== null && {
            ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
        }),
        ...(input.ContextData !== undefined &&
            input.ContextData !== null && { ContextData: serializeAws_json1_1ContextDataType(input.ContextData, context) }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1AdminLinkProviderForUserRequest = (input, context) => {
    return {
        ...(input.DestinationUser !== undefined &&
            input.DestinationUser !== null && {
            DestinationUser: serializeAws_json1_1ProviderUserIdentifierType(input.DestinationUser, context),
        }),
        ...(input.SourceUser !== undefined &&
            input.SourceUser !== null && {
            SourceUser: serializeAws_json1_1ProviderUserIdentifierType(input.SourceUser, context),
        }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1AdminListDevicesRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.PaginationToken !== undefined &&
            input.PaginationToken !== null && { PaginationToken: input.PaginationToken }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminListGroupsForUserRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminListUserAuthEventsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminRemoveUserFromGroupRequest = (input, context) => {
    return {
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminResetUserPasswordRequest = (input, context) => {
    return {
        ...(input.ClientMetadata !== undefined &&
            input.ClientMetadata !== null && {
            ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
        }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminRespondToAuthChallengeRequest = (input, context) => {
    return {
        ...(input.AnalyticsMetadata !== undefined &&
            input.AnalyticsMetadata !== null && {
            AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
        }),
        ...(input.ChallengeName !== undefined && input.ChallengeName !== null && { ChallengeName: input.ChallengeName }),
        ...(input.ChallengeResponses !== undefined &&
            input.ChallengeResponses !== null && {
            ChallengeResponses: serializeAws_json1_1ChallengeResponsesType(input.ChallengeResponses, context),
        }),
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.ClientMetadata !== undefined &&
            input.ClientMetadata !== null && {
            ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
        }),
        ...(input.ContextData !== undefined &&
            input.ContextData !== null && { ContextData: serializeAws_json1_1ContextDataType(input.ContextData, context) }),
        ...(input.Session !== undefined && input.Session !== null && { Session: input.Session }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1AdminSetUserMFAPreferenceRequest = (input, context) => {
    return {
        ...(input.SMSMfaSettings !== undefined &&
            input.SMSMfaSettings !== null && {
            SMSMfaSettings: serializeAws_json1_1SMSMfaSettingsType(input.SMSMfaSettings, context),
        }),
        ...(input.SoftwareTokenMfaSettings !== undefined &&
            input.SoftwareTokenMfaSettings !== null && {
            SoftwareTokenMfaSettings: serializeAws_json1_1SoftwareTokenMfaSettingsType(input.SoftwareTokenMfaSettings, context),
        }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminSetUserPasswordRequest = (input, context) => {
    return {
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Permanent !== undefined && input.Permanent !== null && { Permanent: input.Permanent }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminSetUserSettingsRequest = (input, context) => {
    return {
        ...(input.MFAOptions !== undefined &&
            input.MFAOptions !== null && { MFAOptions: serializeAws_json1_1MFAOptionListType(input.MFAOptions, context) }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminUpdateAuthEventFeedbackRequest = (input, context) => {
    return {
        ...(input.EventId !== undefined && input.EventId !== null && { EventId: input.EventId }),
        ...(input.FeedbackValue !== undefined && input.FeedbackValue !== null && { FeedbackValue: input.FeedbackValue }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminUpdateDeviceStatusRequest = (input, context) => {
    return {
        ...(input.DeviceKey !== undefined && input.DeviceKey !== null && { DeviceKey: input.DeviceKey }),
        ...(input.DeviceRememberedStatus !== undefined &&
            input.DeviceRememberedStatus !== null && { DeviceRememberedStatus: input.DeviceRememberedStatus }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminUpdateUserAttributesRequest = (input, context) => {
    return {
        ...(input.ClientMetadata !== undefined &&
            input.ClientMetadata !== null && {
            ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
        }),
        ...(input.UserAttributes !== undefined &&
            input.UserAttributes !== null && {
            UserAttributes: serializeAws_json1_1AttributeListType(input.UserAttributes, context),
        }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AdminUserGlobalSignOutRequest = (input, context) => {
    return {
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1AliasAttributesListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AnalyticsConfigurationType = (input, context) => {
    return {
        ...(input.ApplicationArn !== undefined &&
            input.ApplicationArn !== null && { ApplicationArn: input.ApplicationArn }),
        ...(input.ApplicationId !== undefined && input.ApplicationId !== null && { ApplicationId: input.ApplicationId }),
        ...(input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.UserDataShared !== undefined &&
            input.UserDataShared !== null && { UserDataShared: input.UserDataShared }),
    };
};
const serializeAws_json1_1AnalyticsMetadataType = (input, context) => {
    return {
        ...(input.AnalyticsEndpointId !== undefined &&
            input.AnalyticsEndpointId !== null && { AnalyticsEndpointId: input.AnalyticsEndpointId }),
    };
};
const serializeAws_json1_1AssociateSoftwareTokenRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
        ...(input.Session !== undefined && input.Session !== null && { Session: input.Session }),
    };
};
const serializeAws_json1_1AttributeListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AttributeType(entry, context);
    });
};
const serializeAws_json1_1AttributeMappingType = (input, context) => {
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
const serializeAws_json1_1AttributeNameListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AttributeType = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1AuthParametersType = (input, context) => {
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
const serializeAws_json1_1BlockedIPRangeListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CallbackURLsListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ChallengeResponsesType = (input, context) => {
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
const serializeAws_json1_1ChangePasswordRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
        ...(input.PreviousPassword !== undefined &&
            input.PreviousPassword !== null && { PreviousPassword: input.PreviousPassword }),
        ...(input.ProposedPassword !== undefined &&
            input.ProposedPassword !== null && { ProposedPassword: input.ProposedPassword }),
    };
};
const serializeAws_json1_1ClientMetadataType = (input, context) => {
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
const serializeAws_json1_1ClientPermissionListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CompromisedCredentialsActionsType = (input, context) => {
    return {
        ...(input.EventAction !== undefined && input.EventAction !== null && { EventAction: input.EventAction }),
    };
};
const serializeAws_json1_1CompromisedCredentialsRiskConfigurationType = (input, context) => {
    return {
        ...(input.Actions !== undefined &&
            input.Actions !== null && {
            Actions: serializeAws_json1_1CompromisedCredentialsActionsType(input.Actions, context),
        }),
        ...(input.EventFilter !== undefined &&
            input.EventFilter !== null && { EventFilter: serializeAws_json1_1EventFiltersType(input.EventFilter, context) }),
    };
};
const serializeAws_json1_1ConfirmDeviceRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
        ...(input.DeviceKey !== undefined && input.DeviceKey !== null && { DeviceKey: input.DeviceKey }),
        ...(input.DeviceName !== undefined && input.DeviceName !== null && { DeviceName: input.DeviceName }),
        ...(input.DeviceSecretVerifierConfig !== undefined &&
            input.DeviceSecretVerifierConfig !== null && {
            DeviceSecretVerifierConfig: serializeAws_json1_1DeviceSecretVerifierConfigType(input.DeviceSecretVerifierConfig, context),
        }),
    };
};
const serializeAws_json1_1ConfirmForgotPasswordRequest = (input, context) => {
    return {
        ...(input.AnalyticsMetadata !== undefined &&
            input.AnalyticsMetadata !== null && {
            AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
        }),
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.ClientMetadata !== undefined &&
            input.ClientMetadata !== null && {
            ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
        }),
        ...(input.ConfirmationCode !== undefined &&
            input.ConfirmationCode !== null && { ConfirmationCode: input.ConfirmationCode }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.SecretHash !== undefined && input.SecretHash !== null && { SecretHash: input.SecretHash }),
        ...(input.UserContextData !== undefined &&
            input.UserContextData !== null && {
            UserContextData: serializeAws_json1_1UserContextDataType(input.UserContextData, context),
        }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1ConfirmSignUpRequest = (input, context) => {
    return {
        ...(input.AnalyticsMetadata !== undefined &&
            input.AnalyticsMetadata !== null && {
            AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
        }),
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.ClientMetadata !== undefined &&
            input.ClientMetadata !== null && {
            ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
        }),
        ...(input.ConfirmationCode !== undefined &&
            input.ConfirmationCode !== null && { ConfirmationCode: input.ConfirmationCode }),
        ...(input.ForceAliasCreation !== undefined &&
            input.ForceAliasCreation !== null && { ForceAliasCreation: input.ForceAliasCreation }),
        ...(input.SecretHash !== undefined && input.SecretHash !== null && { SecretHash: input.SecretHash }),
        ...(input.UserContextData !== undefined &&
            input.UserContextData !== null && {
            UserContextData: serializeAws_json1_1UserContextDataType(input.UserContextData, context),
        }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1ContextDataType = (input, context) => {
    return {
        ...(input.EncodedData !== undefined && input.EncodedData !== null && { EncodedData: input.EncodedData }),
        ...(input.HttpHeaders !== undefined &&
            input.HttpHeaders !== null && { HttpHeaders: serializeAws_json1_1HttpHeaderList(input.HttpHeaders, context) }),
        ...(input.IpAddress !== undefined && input.IpAddress !== null && { IpAddress: input.IpAddress }),
        ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
        ...(input.ServerPath !== undefined && input.ServerPath !== null && { ServerPath: input.ServerPath }),
    };
};
const serializeAws_json1_1CreateGroupRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
        ...(input.Precedence !== undefined && input.Precedence !== null && { Precedence: input.Precedence }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1CreateIdentityProviderRequest = (input, context) => {
    return {
        ...(input.AttributeMapping !== undefined &&
            input.AttributeMapping !== null && {
            AttributeMapping: serializeAws_json1_1AttributeMappingType(input.AttributeMapping, context),
        }),
        ...(input.IdpIdentifiers !== undefined &&
            input.IdpIdentifiers !== null && {
            IdpIdentifiers: serializeAws_json1_1IdpIdentifiersListType(input.IdpIdentifiers, context),
        }),
        ...(input.ProviderDetails !== undefined &&
            input.ProviderDetails !== null && {
            ProviderDetails: serializeAws_json1_1ProviderDetailsType(input.ProviderDetails, context),
        }),
        ...(input.ProviderName !== undefined && input.ProviderName !== null && { ProviderName: input.ProviderName }),
        ...(input.ProviderType !== undefined && input.ProviderType !== null && { ProviderType: input.ProviderType }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1CreateResourceServerRequest = (input, context) => {
    return {
        ...(input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Scopes !== undefined &&
            input.Scopes !== null && { Scopes: serializeAws_json1_1ResourceServerScopeListType(input.Scopes, context) }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1CreateUserImportJobRequest = (input, context) => {
    return {
        ...(input.CloudWatchLogsRoleArn !== undefined &&
            input.CloudWatchLogsRoleArn !== null && { CloudWatchLogsRoleArn: input.CloudWatchLogsRoleArn }),
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1CreateUserPoolClientRequest = (input, context) => {
    return {
        ...(input.AccessTokenValidity !== undefined &&
            input.AccessTokenValidity !== null && { AccessTokenValidity: input.AccessTokenValidity }),
        ...(input.AllowedOAuthFlows !== undefined &&
            input.AllowedOAuthFlows !== null && {
            AllowedOAuthFlows: serializeAws_json1_1OAuthFlowsType(input.AllowedOAuthFlows, context),
        }),
        ...(input.AllowedOAuthFlowsUserPoolClient !== undefined &&
            input.AllowedOAuthFlowsUserPoolClient !== null && {
            AllowedOAuthFlowsUserPoolClient: input.AllowedOAuthFlowsUserPoolClient,
        }),
        ...(input.AllowedOAuthScopes !== undefined &&
            input.AllowedOAuthScopes !== null && {
            AllowedOAuthScopes: serializeAws_json1_1ScopeListType(input.AllowedOAuthScopes, context),
        }),
        ...(input.AnalyticsConfiguration !== undefined &&
            input.AnalyticsConfiguration !== null && {
            AnalyticsConfiguration: serializeAws_json1_1AnalyticsConfigurationType(input.AnalyticsConfiguration, context),
        }),
        ...(input.CallbackURLs !== undefined &&
            input.CallbackURLs !== null && {
            CallbackURLs: serializeAws_json1_1CallbackURLsListType(input.CallbackURLs, context),
        }),
        ...(input.ClientName !== undefined && input.ClientName !== null && { ClientName: input.ClientName }),
        ...(input.DefaultRedirectURI !== undefined &&
            input.DefaultRedirectURI !== null && { DefaultRedirectURI: input.DefaultRedirectURI }),
        ...(input.ExplicitAuthFlows !== undefined &&
            input.ExplicitAuthFlows !== null && {
            ExplicitAuthFlows: serializeAws_json1_1ExplicitAuthFlowsListType(input.ExplicitAuthFlows, context),
        }),
        ...(input.GenerateSecret !== undefined &&
            input.GenerateSecret !== null && { GenerateSecret: input.GenerateSecret }),
        ...(input.IdTokenValidity !== undefined &&
            input.IdTokenValidity !== null && { IdTokenValidity: input.IdTokenValidity }),
        ...(input.LogoutURLs !== undefined &&
            input.LogoutURLs !== null && { LogoutURLs: serializeAws_json1_1LogoutURLsListType(input.LogoutURLs, context) }),
        ...(input.PreventUserExistenceErrors !== undefined &&
            input.PreventUserExistenceErrors !== null && { PreventUserExistenceErrors: input.PreventUserExistenceErrors }),
        ...(input.ReadAttributes !== undefined &&
            input.ReadAttributes !== null && {
            ReadAttributes: serializeAws_json1_1ClientPermissionListType(input.ReadAttributes, context),
        }),
        ...(input.RefreshTokenValidity !== undefined &&
            input.RefreshTokenValidity !== null && { RefreshTokenValidity: input.RefreshTokenValidity }),
        ...(input.SupportedIdentityProviders !== undefined &&
            input.SupportedIdentityProviders !== null && {
            SupportedIdentityProviders: serializeAws_json1_1SupportedIdentityProvidersListType(input.SupportedIdentityProviders, context),
        }),
        ...(input.TokenValidityUnits !== undefined &&
            input.TokenValidityUnits !== null && {
            TokenValidityUnits: serializeAws_json1_1TokenValidityUnitsType(input.TokenValidityUnits, context),
        }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.WriteAttributes !== undefined &&
            input.WriteAttributes !== null && {
            WriteAttributes: serializeAws_json1_1ClientPermissionListType(input.WriteAttributes, context),
        }),
    };
};
const serializeAws_json1_1CreateUserPoolDomainRequest = (input, context) => {
    return {
        ...(input.CustomDomainConfig !== undefined &&
            input.CustomDomainConfig !== null && {
            CustomDomainConfig: serializeAws_json1_1CustomDomainConfigType(input.CustomDomainConfig, context),
        }),
        ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1CreateUserPoolRequest = (input, context) => {
    return {
        ...(input.AccountRecoverySetting !== undefined &&
            input.AccountRecoverySetting !== null && {
            AccountRecoverySetting: serializeAws_json1_1AccountRecoverySettingType(input.AccountRecoverySetting, context),
        }),
        ...(input.AdminCreateUserConfig !== undefined &&
            input.AdminCreateUserConfig !== null && {
            AdminCreateUserConfig: serializeAws_json1_1AdminCreateUserConfigType(input.AdminCreateUserConfig, context),
        }),
        ...(input.AliasAttributes !== undefined &&
            input.AliasAttributes !== null && {
            AliasAttributes: serializeAws_json1_1AliasAttributesListType(input.AliasAttributes, context),
        }),
        ...(input.AutoVerifiedAttributes !== undefined &&
            input.AutoVerifiedAttributes !== null && {
            AutoVerifiedAttributes: serializeAws_json1_1VerifiedAttributesListType(input.AutoVerifiedAttributes, context),
        }),
        ...(input.DeviceConfiguration !== undefined &&
            input.DeviceConfiguration !== null && {
            DeviceConfiguration: serializeAws_json1_1DeviceConfigurationType(input.DeviceConfiguration, context),
        }),
        ...(input.EmailConfiguration !== undefined &&
            input.EmailConfiguration !== null && {
            EmailConfiguration: serializeAws_json1_1EmailConfigurationType(input.EmailConfiguration, context),
        }),
        ...(input.EmailVerificationMessage !== undefined &&
            input.EmailVerificationMessage !== null && { EmailVerificationMessage: input.EmailVerificationMessage }),
        ...(input.EmailVerificationSubject !== undefined &&
            input.EmailVerificationSubject !== null && { EmailVerificationSubject: input.EmailVerificationSubject }),
        ...(input.LambdaConfig !== undefined &&
            input.LambdaConfig !== null && {
            LambdaConfig: serializeAws_json1_1LambdaConfigType(input.LambdaConfig, context),
        }),
        ...(input.MfaConfiguration !== undefined &&
            input.MfaConfiguration !== null && { MfaConfiguration: input.MfaConfiguration }),
        ...(input.Policies !== undefined &&
            input.Policies !== null && { Policies: serializeAws_json1_1UserPoolPolicyType(input.Policies, context) }),
        ...(input.PoolName !== undefined && input.PoolName !== null && { PoolName: input.PoolName }),
        ...(input.Schema !== undefined &&
            input.Schema !== null && { Schema: serializeAws_json1_1SchemaAttributesListType(input.Schema, context) }),
        ...(input.SmsAuthenticationMessage !== undefined &&
            input.SmsAuthenticationMessage !== null && { SmsAuthenticationMessage: input.SmsAuthenticationMessage }),
        ...(input.SmsConfiguration !== undefined &&
            input.SmsConfiguration !== null && {
            SmsConfiguration: serializeAws_json1_1SmsConfigurationType(input.SmsConfiguration, context),
        }),
        ...(input.SmsVerificationMessage !== undefined &&
            input.SmsVerificationMessage !== null && { SmsVerificationMessage: input.SmsVerificationMessage }),
        ...(input.UserPoolAddOns !== undefined &&
            input.UserPoolAddOns !== null && {
            UserPoolAddOns: serializeAws_json1_1UserPoolAddOnsType(input.UserPoolAddOns, context),
        }),
        ...(input.UserPoolTags !== undefined &&
            input.UserPoolTags !== null && {
            UserPoolTags: serializeAws_json1_1UserPoolTagsType(input.UserPoolTags, context),
        }),
        ...(input.UsernameAttributes !== undefined &&
            input.UsernameAttributes !== null && {
            UsernameAttributes: serializeAws_json1_1UsernameAttributesListType(input.UsernameAttributes, context),
        }),
        ...(input.UsernameConfiguration !== undefined &&
            input.UsernameConfiguration !== null && {
            UsernameConfiguration: serializeAws_json1_1UsernameConfigurationType(input.UsernameConfiguration, context),
        }),
        ...(input.VerificationMessageTemplate !== undefined &&
            input.VerificationMessageTemplate !== null && {
            VerificationMessageTemplate: serializeAws_json1_1VerificationMessageTemplateType(input.VerificationMessageTemplate, context),
        }),
    };
};
const serializeAws_json1_1CustomAttributesListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SchemaAttributeType(entry, context);
    });
};
const serializeAws_json1_1CustomDomainConfigType = (input, context) => {
    return {
        ...(input.CertificateArn !== undefined &&
            input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
    };
};
const serializeAws_json1_1CustomEmailLambdaVersionConfigType = (input, context) => {
    return {
        ...(input.LambdaArn !== undefined && input.LambdaArn !== null && { LambdaArn: input.LambdaArn }),
        ...(input.LambdaVersion !== undefined && input.LambdaVersion !== null && { LambdaVersion: input.LambdaVersion }),
    };
};
const serializeAws_json1_1CustomSMSLambdaVersionConfigType = (input, context) => {
    return {
        ...(input.LambdaArn !== undefined && input.LambdaArn !== null && { LambdaArn: input.LambdaArn }),
        ...(input.LambdaVersion !== undefined && input.LambdaVersion !== null && { LambdaVersion: input.LambdaVersion }),
    };
};
const serializeAws_json1_1DeleteGroupRequest = (input, context) => {
    return {
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1DeleteIdentityProviderRequest = (input, context) => {
    return {
        ...(input.ProviderName !== undefined && input.ProviderName !== null && { ProviderName: input.ProviderName }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1DeleteResourceServerRequest = (input, context) => {
    return {
        ...(input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1DeleteUserAttributesRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
        ...(input.UserAttributeNames !== undefined &&
            input.UserAttributeNames !== null && {
            UserAttributeNames: serializeAws_json1_1AttributeNameListType(input.UserAttributeNames, context),
        }),
    };
};
const serializeAws_json1_1DeleteUserPoolClientRequest = (input, context) => {
    return {
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1DeleteUserPoolDomainRequest = (input, context) => {
    return {
        ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1DeleteUserPoolRequest = (input, context) => {
    return {
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1DeleteUserRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
    };
};
const serializeAws_json1_1DeliveryMediumListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DescribeIdentityProviderRequest = (input, context) => {
    return {
        ...(input.ProviderName !== undefined && input.ProviderName !== null && { ProviderName: input.ProviderName }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1DescribeResourceServerRequest = (input, context) => {
    return {
        ...(input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1DescribeRiskConfigurationRequest = (input, context) => {
    return {
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1DescribeUserImportJobRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1DescribeUserPoolClientRequest = (input, context) => {
    return {
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1DescribeUserPoolDomainRequest = (input, context) => {
    return {
        ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
    };
};
const serializeAws_json1_1DescribeUserPoolRequest = (input, context) => {
    return {
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1DeviceConfigurationType = (input, context) => {
    return {
        ...(input.ChallengeRequiredOnNewDevice !== undefined &&
            input.ChallengeRequiredOnNewDevice !== null && {
            ChallengeRequiredOnNewDevice: input.ChallengeRequiredOnNewDevice,
        }),
        ...(input.DeviceOnlyRememberedOnUserPrompt !== undefined &&
            input.DeviceOnlyRememberedOnUserPrompt !== null && {
            DeviceOnlyRememberedOnUserPrompt: input.DeviceOnlyRememberedOnUserPrompt,
        }),
    };
};
const serializeAws_json1_1DeviceSecretVerifierConfigType = (input, context) => {
    return {
        ...(input.PasswordVerifier !== undefined &&
            input.PasswordVerifier !== null && { PasswordVerifier: input.PasswordVerifier }),
        ...(input.Salt !== undefined && input.Salt !== null && { Salt: input.Salt }),
    };
};
const serializeAws_json1_1EmailConfigurationType = (input, context) => {
    return {
        ...(input.ConfigurationSet !== undefined &&
            input.ConfigurationSet !== null && { ConfigurationSet: input.ConfigurationSet }),
        ...(input.EmailSendingAccount !== undefined &&
            input.EmailSendingAccount !== null && { EmailSendingAccount: input.EmailSendingAccount }),
        ...(input.From !== undefined && input.From !== null && { From: input.From }),
        ...(input.ReplyToEmailAddress !== undefined &&
            input.ReplyToEmailAddress !== null && { ReplyToEmailAddress: input.ReplyToEmailAddress }),
        ...(input.SourceArn !== undefined && input.SourceArn !== null && { SourceArn: input.SourceArn }),
    };
};
const serializeAws_json1_1EventFiltersType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ExplicitAuthFlowsListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ForgetDeviceRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
        ...(input.DeviceKey !== undefined && input.DeviceKey !== null && { DeviceKey: input.DeviceKey }),
    };
};
const serializeAws_json1_1ForgotPasswordRequest = (input, context) => {
    return {
        ...(input.AnalyticsMetadata !== undefined &&
            input.AnalyticsMetadata !== null && {
            AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
        }),
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.ClientMetadata !== undefined &&
            input.ClientMetadata !== null && {
            ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
        }),
        ...(input.SecretHash !== undefined && input.SecretHash !== null && { SecretHash: input.SecretHash }),
        ...(input.UserContextData !== undefined &&
            input.UserContextData !== null && {
            UserContextData: serializeAws_json1_1UserContextDataType(input.UserContextData, context),
        }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1GetCSVHeaderRequest = (input, context) => {
    return {
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1GetDeviceRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
        ...(input.DeviceKey !== undefined && input.DeviceKey !== null && { DeviceKey: input.DeviceKey }),
    };
};
const serializeAws_json1_1GetGroupRequest = (input, context) => {
    return {
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1GetIdentityProviderByIdentifierRequest = (input, context) => {
    return {
        ...(input.IdpIdentifier !== undefined && input.IdpIdentifier !== null && { IdpIdentifier: input.IdpIdentifier }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1GetSigningCertificateRequest = (input, context) => {
    return {
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1GetUICustomizationRequest = (input, context) => {
    return {
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1GetUserAttributeVerificationCodeRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
        ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
        ...(input.ClientMetadata !== undefined &&
            input.ClientMetadata !== null && {
            ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
        }),
    };
};
const serializeAws_json1_1GetUserPoolMfaConfigRequest = (input, context) => {
    return {
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1GetUserRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
    };
};
const serializeAws_json1_1GlobalSignOutRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
    };
};
const serializeAws_json1_1HttpHeader = (input, context) => {
    return {
        ...(input.headerName !== undefined && input.headerName !== null && { headerName: input.headerName }),
        ...(input.headerValue !== undefined && input.headerValue !== null && { headerValue: input.headerValue }),
    };
};
const serializeAws_json1_1HttpHeaderList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1HttpHeader(entry, context);
    });
};
const serializeAws_json1_1IdpIdentifiersListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1InitiateAuthRequest = (input, context) => {
    return {
        ...(input.AnalyticsMetadata !== undefined &&
            input.AnalyticsMetadata !== null && {
            AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
        }),
        ...(input.AuthFlow !== undefined && input.AuthFlow !== null && { AuthFlow: input.AuthFlow }),
        ...(input.AuthParameters !== undefined &&
            input.AuthParameters !== null && {
            AuthParameters: serializeAws_json1_1AuthParametersType(input.AuthParameters, context),
        }),
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.ClientMetadata !== undefined &&
            input.ClientMetadata !== null && {
            ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
        }),
        ...(input.UserContextData !== undefined &&
            input.UserContextData !== null && {
            UserContextData: serializeAws_json1_1UserContextDataType(input.UserContextData, context),
        }),
    };
};
const serializeAws_json1_1LambdaConfigType = (input, context) => {
    return {
        ...(input.CreateAuthChallenge !== undefined &&
            input.CreateAuthChallenge !== null && { CreateAuthChallenge: input.CreateAuthChallenge }),
        ...(input.CustomEmailSender !== undefined &&
            input.CustomEmailSender !== null && {
            CustomEmailSender: serializeAws_json1_1CustomEmailLambdaVersionConfigType(input.CustomEmailSender, context),
        }),
        ...(input.CustomMessage !== undefined && input.CustomMessage !== null && { CustomMessage: input.CustomMessage }),
        ...(input.CustomSMSSender !== undefined &&
            input.CustomSMSSender !== null && {
            CustomSMSSender: serializeAws_json1_1CustomSMSLambdaVersionConfigType(input.CustomSMSSender, context),
        }),
        ...(input.DefineAuthChallenge !== undefined &&
            input.DefineAuthChallenge !== null && { DefineAuthChallenge: input.DefineAuthChallenge }),
        ...(input.KMSKeyID !== undefined && input.KMSKeyID !== null && { KMSKeyID: input.KMSKeyID }),
        ...(input.PostAuthentication !== undefined &&
            input.PostAuthentication !== null && { PostAuthentication: input.PostAuthentication }),
        ...(input.PostConfirmation !== undefined &&
            input.PostConfirmation !== null && { PostConfirmation: input.PostConfirmation }),
        ...(input.PreAuthentication !== undefined &&
            input.PreAuthentication !== null && { PreAuthentication: input.PreAuthentication }),
        ...(input.PreSignUp !== undefined && input.PreSignUp !== null && { PreSignUp: input.PreSignUp }),
        ...(input.PreTokenGeneration !== undefined &&
            input.PreTokenGeneration !== null && { PreTokenGeneration: input.PreTokenGeneration }),
        ...(input.UserMigration !== undefined && input.UserMigration !== null && { UserMigration: input.UserMigration }),
        ...(input.VerifyAuthChallengeResponse !== undefined &&
            input.VerifyAuthChallengeResponse !== null && { VerifyAuthChallengeResponse: input.VerifyAuthChallengeResponse }),
    };
};
const serializeAws_json1_1ListDevicesRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.PaginationToken !== undefined &&
            input.PaginationToken !== null && { PaginationToken: input.PaginationToken }),
    };
};
const serializeAws_json1_1ListGroupsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1ListIdentityProvidersRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1ListResourceServersRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1ListUserImportJobsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.PaginationToken !== undefined &&
            input.PaginationToken !== null && { PaginationToken: input.PaginationToken }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1ListUserPoolClientsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1ListUserPoolsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListUsersInGroupRequest = (input, context) => {
    return {
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1ListUsersRequest = (input, context) => {
    return {
        ...(input.AttributesToGet !== undefined &&
            input.AttributesToGet !== null && {
            AttributesToGet: serializeAws_json1_1SearchedAttributeNamesListType(input.AttributesToGet, context),
        }),
        ...(input.Filter !== undefined && input.Filter !== null && { Filter: input.Filter }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.PaginationToken !== undefined &&
            input.PaginationToken !== null && { PaginationToken: input.PaginationToken }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1LogoutURLsListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1MessageTemplateType = (input, context) => {
    return {
        ...(input.EmailMessage !== undefined && input.EmailMessage !== null && { EmailMessage: input.EmailMessage }),
        ...(input.EmailSubject !== undefined && input.EmailSubject !== null && { EmailSubject: input.EmailSubject }),
        ...(input.SMSMessage !== undefined && input.SMSMessage !== null && { SMSMessage: input.SMSMessage }),
    };
};
const serializeAws_json1_1MFAOptionListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1MFAOptionType(entry, context);
    });
};
const serializeAws_json1_1MFAOptionType = (input, context) => {
    return {
        ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
        ...(input.DeliveryMedium !== undefined &&
            input.DeliveryMedium !== null && { DeliveryMedium: input.DeliveryMedium }),
    };
};
const serializeAws_json1_1NotifyConfigurationType = (input, context) => {
    return {
        ...(input.BlockEmail !== undefined &&
            input.BlockEmail !== null && { BlockEmail: serializeAws_json1_1NotifyEmailType(input.BlockEmail, context) }),
        ...(input.From !== undefined && input.From !== null && { From: input.From }),
        ...(input.MfaEmail !== undefined &&
            input.MfaEmail !== null && { MfaEmail: serializeAws_json1_1NotifyEmailType(input.MfaEmail, context) }),
        ...(input.NoActionEmail !== undefined &&
            input.NoActionEmail !== null && {
            NoActionEmail: serializeAws_json1_1NotifyEmailType(input.NoActionEmail, context),
        }),
        ...(input.ReplyTo !== undefined && input.ReplyTo !== null && { ReplyTo: input.ReplyTo }),
        ...(input.SourceArn !== undefined && input.SourceArn !== null && { SourceArn: input.SourceArn }),
    };
};
const serializeAws_json1_1NotifyEmailType = (input, context) => {
    return {
        ...(input.HtmlBody !== undefined && input.HtmlBody !== null && { HtmlBody: input.HtmlBody }),
        ...(input.Subject !== undefined && input.Subject !== null && { Subject: input.Subject }),
        ...(input.TextBody !== undefined && input.TextBody !== null && { TextBody: input.TextBody }),
    };
};
const serializeAws_json1_1NumberAttributeConstraintsType = (input, context) => {
    return {
        ...(input.MaxValue !== undefined && input.MaxValue !== null && { MaxValue: input.MaxValue }),
        ...(input.MinValue !== undefined && input.MinValue !== null && { MinValue: input.MinValue }),
    };
};
const serializeAws_json1_1OAuthFlowsType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PasswordPolicyType = (input, context) => {
    return {
        ...(input.MinimumLength !== undefined && input.MinimumLength !== null && { MinimumLength: input.MinimumLength }),
        ...(input.RequireLowercase !== undefined &&
            input.RequireLowercase !== null && { RequireLowercase: input.RequireLowercase }),
        ...(input.RequireNumbers !== undefined &&
            input.RequireNumbers !== null && { RequireNumbers: input.RequireNumbers }),
        ...(input.RequireSymbols !== undefined &&
            input.RequireSymbols !== null && { RequireSymbols: input.RequireSymbols }),
        ...(input.RequireUppercase !== undefined &&
            input.RequireUppercase !== null && { RequireUppercase: input.RequireUppercase }),
        ...(input.TemporaryPasswordValidityDays !== undefined &&
            input.TemporaryPasswordValidityDays !== null && {
            TemporaryPasswordValidityDays: input.TemporaryPasswordValidityDays,
        }),
    };
};
const serializeAws_json1_1ProviderDetailsType = (input, context) => {
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
const serializeAws_json1_1ProviderUserIdentifierType = (input, context) => {
    return {
        ...(input.ProviderAttributeName !== undefined &&
            input.ProviderAttributeName !== null && { ProviderAttributeName: input.ProviderAttributeName }),
        ...(input.ProviderAttributeValue !== undefined &&
            input.ProviderAttributeValue !== null && { ProviderAttributeValue: input.ProviderAttributeValue }),
        ...(input.ProviderName !== undefined && input.ProviderName !== null && { ProviderName: input.ProviderName }),
    };
};
const serializeAws_json1_1RecoveryMechanismsType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RecoveryOptionType(entry, context);
    });
};
const serializeAws_json1_1RecoveryOptionType = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
    };
};
const serializeAws_json1_1ResendConfirmationCodeRequest = (input, context) => {
    return {
        ...(input.AnalyticsMetadata !== undefined &&
            input.AnalyticsMetadata !== null && {
            AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
        }),
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.ClientMetadata !== undefined &&
            input.ClientMetadata !== null && {
            ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
        }),
        ...(input.SecretHash !== undefined && input.SecretHash !== null && { SecretHash: input.SecretHash }),
        ...(input.UserContextData !== undefined &&
            input.UserContextData !== null && {
            UserContextData: serializeAws_json1_1UserContextDataType(input.UserContextData, context),
        }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1ResourceServerScopeListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ResourceServerScopeType(entry, context);
    });
};
const serializeAws_json1_1ResourceServerScopeType = (input, context) => {
    return {
        ...(input.ScopeDescription !== undefined &&
            input.ScopeDescription !== null && { ScopeDescription: input.ScopeDescription }),
        ...(input.ScopeName !== undefined && input.ScopeName !== null && { ScopeName: input.ScopeName }),
    };
};
const serializeAws_json1_1RespondToAuthChallengeRequest = (input, context) => {
    return {
        ...(input.AnalyticsMetadata !== undefined &&
            input.AnalyticsMetadata !== null && {
            AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
        }),
        ...(input.ChallengeName !== undefined && input.ChallengeName !== null && { ChallengeName: input.ChallengeName }),
        ...(input.ChallengeResponses !== undefined &&
            input.ChallengeResponses !== null && {
            ChallengeResponses: serializeAws_json1_1ChallengeResponsesType(input.ChallengeResponses, context),
        }),
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.ClientMetadata !== undefined &&
            input.ClientMetadata !== null && {
            ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
        }),
        ...(input.Session !== undefined && input.Session !== null && { Session: input.Session }),
        ...(input.UserContextData !== undefined &&
            input.UserContextData !== null && {
            UserContextData: serializeAws_json1_1UserContextDataType(input.UserContextData, context),
        }),
    };
};
const serializeAws_json1_1RiskExceptionConfigurationType = (input, context) => {
    return {
        ...(input.BlockedIPRangeList !== undefined &&
            input.BlockedIPRangeList !== null && {
            BlockedIPRangeList: serializeAws_json1_1BlockedIPRangeListType(input.BlockedIPRangeList, context),
        }),
        ...(input.SkippedIPRangeList !== undefined &&
            input.SkippedIPRangeList !== null && {
            SkippedIPRangeList: serializeAws_json1_1SkippedIPRangeListType(input.SkippedIPRangeList, context),
        }),
    };
};
const serializeAws_json1_1SchemaAttributesListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SchemaAttributeType(entry, context);
    });
};
const serializeAws_json1_1SchemaAttributeType = (input, context) => {
    return {
        ...(input.AttributeDataType !== undefined &&
            input.AttributeDataType !== null && { AttributeDataType: input.AttributeDataType }),
        ...(input.DeveloperOnlyAttribute !== undefined &&
            input.DeveloperOnlyAttribute !== null && { DeveloperOnlyAttribute: input.DeveloperOnlyAttribute }),
        ...(input.Mutable !== undefined && input.Mutable !== null && { Mutable: input.Mutable }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NumberAttributeConstraints !== undefined &&
            input.NumberAttributeConstraints !== null && {
            NumberAttributeConstraints: serializeAws_json1_1NumberAttributeConstraintsType(input.NumberAttributeConstraints, context),
        }),
        ...(input.Required !== undefined && input.Required !== null && { Required: input.Required }),
        ...(input.StringAttributeConstraints !== undefined &&
            input.StringAttributeConstraints !== null && {
            StringAttributeConstraints: serializeAws_json1_1StringAttributeConstraintsType(input.StringAttributeConstraints, context),
        }),
    };
};
const serializeAws_json1_1ScopeListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SearchedAttributeNamesListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SetRiskConfigurationRequest = (input, context) => {
    return {
        ...(input.AccountTakeoverRiskConfiguration !== undefined &&
            input.AccountTakeoverRiskConfiguration !== null && {
            AccountTakeoverRiskConfiguration: serializeAws_json1_1AccountTakeoverRiskConfigurationType(input.AccountTakeoverRiskConfiguration, context),
        }),
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.CompromisedCredentialsRiskConfiguration !== undefined &&
            input.CompromisedCredentialsRiskConfiguration !== null && {
            CompromisedCredentialsRiskConfiguration: serializeAws_json1_1CompromisedCredentialsRiskConfigurationType(input.CompromisedCredentialsRiskConfiguration, context),
        }),
        ...(input.RiskExceptionConfiguration !== undefined &&
            input.RiskExceptionConfiguration !== null && {
            RiskExceptionConfiguration: serializeAws_json1_1RiskExceptionConfigurationType(input.RiskExceptionConfiguration, context),
        }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1SetUICustomizationRequest = (input, context) => {
    return {
        ...(input.CSS !== undefined && input.CSS !== null && { CSS: input.CSS }),
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.ImageFile !== undefined &&
            input.ImageFile !== null && { ImageFile: context.base64Encoder(input.ImageFile) }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1SetUserMFAPreferenceRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
        ...(input.SMSMfaSettings !== undefined &&
            input.SMSMfaSettings !== null && {
            SMSMfaSettings: serializeAws_json1_1SMSMfaSettingsType(input.SMSMfaSettings, context),
        }),
        ...(input.SoftwareTokenMfaSettings !== undefined &&
            input.SoftwareTokenMfaSettings !== null && {
            SoftwareTokenMfaSettings: serializeAws_json1_1SoftwareTokenMfaSettingsType(input.SoftwareTokenMfaSettings, context),
        }),
    };
};
const serializeAws_json1_1SetUserPoolMfaConfigRequest = (input, context) => {
    return {
        ...(input.MfaConfiguration !== undefined &&
            input.MfaConfiguration !== null && { MfaConfiguration: input.MfaConfiguration }),
        ...(input.SmsMfaConfiguration !== undefined &&
            input.SmsMfaConfiguration !== null && {
            SmsMfaConfiguration: serializeAws_json1_1SmsMfaConfigType(input.SmsMfaConfiguration, context),
        }),
        ...(input.SoftwareTokenMfaConfiguration !== undefined &&
            input.SoftwareTokenMfaConfiguration !== null && {
            SoftwareTokenMfaConfiguration: serializeAws_json1_1SoftwareTokenMfaConfigType(input.SoftwareTokenMfaConfiguration, context),
        }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1SetUserSettingsRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
        ...(input.MFAOptions !== undefined &&
            input.MFAOptions !== null && { MFAOptions: serializeAws_json1_1MFAOptionListType(input.MFAOptions, context) }),
    };
};
const serializeAws_json1_1SignUpRequest = (input, context) => {
    return {
        ...(input.AnalyticsMetadata !== undefined &&
            input.AnalyticsMetadata !== null && {
            AnalyticsMetadata: serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context),
        }),
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.ClientMetadata !== undefined &&
            input.ClientMetadata !== null && {
            ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
        }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.SecretHash !== undefined && input.SecretHash !== null && { SecretHash: input.SecretHash }),
        ...(input.UserAttributes !== undefined &&
            input.UserAttributes !== null && {
            UserAttributes: serializeAws_json1_1AttributeListType(input.UserAttributes, context),
        }),
        ...(input.UserContextData !== undefined &&
            input.UserContextData !== null && {
            UserContextData: serializeAws_json1_1UserContextDataType(input.UserContextData, context),
        }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
        ...(input.ValidationData !== undefined &&
            input.ValidationData !== null && {
            ValidationData: serializeAws_json1_1AttributeListType(input.ValidationData, context),
        }),
    };
};
const serializeAws_json1_1SkippedIPRangeListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SmsConfigurationType = (input, context) => {
    return {
        ...(input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId }),
        ...(input.SnsCallerArn !== undefined && input.SnsCallerArn !== null && { SnsCallerArn: input.SnsCallerArn }),
    };
};
const serializeAws_json1_1SmsMfaConfigType = (input, context) => {
    return {
        ...(input.SmsAuthenticationMessage !== undefined &&
            input.SmsAuthenticationMessage !== null && { SmsAuthenticationMessage: input.SmsAuthenticationMessage }),
        ...(input.SmsConfiguration !== undefined &&
            input.SmsConfiguration !== null && {
            SmsConfiguration: serializeAws_json1_1SmsConfigurationType(input.SmsConfiguration, context),
        }),
    };
};
const serializeAws_json1_1SMSMfaSettingsType = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.PreferredMfa !== undefined && input.PreferredMfa !== null && { PreferredMfa: input.PreferredMfa }),
    };
};
const serializeAws_json1_1SoftwareTokenMfaConfigType = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    };
};
const serializeAws_json1_1SoftwareTokenMfaSettingsType = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.PreferredMfa !== undefined && input.PreferredMfa !== null && { PreferredMfa: input.PreferredMfa }),
    };
};
const serializeAws_json1_1StartUserImportJobRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1StopUserImportJobRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1StringAttributeConstraintsType = (input, context) => {
    return {
        ...(input.MaxLength !== undefined && input.MaxLength !== null && { MaxLength: input.MaxLength }),
        ...(input.MinLength !== undefined && input.MinLength !== null && { MinLength: input.MinLength }),
    };
};
const serializeAws_json1_1SupportedIdentityProvidersListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_json1_1UserPoolTagsType(input.Tags, context) }),
    };
};
const serializeAws_json1_1TokenValidityUnitsType = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
        ...(input.IdToken !== undefined && input.IdToken !== null && { IdToken: input.IdToken }),
        ...(input.RefreshToken !== undefined && input.RefreshToken !== null && { RefreshToken: input.RefreshToken }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1UserPoolTagsListType(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateAuthEventFeedbackRequest = (input, context) => {
    return {
        ...(input.EventId !== undefined && input.EventId !== null && { EventId: input.EventId }),
        ...(input.FeedbackToken !== undefined && input.FeedbackToken !== null && { FeedbackToken: input.FeedbackToken }),
        ...(input.FeedbackValue !== undefined && input.FeedbackValue !== null && { FeedbackValue: input.FeedbackValue }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1UpdateDeviceStatusRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
        ...(input.DeviceKey !== undefined && input.DeviceKey !== null && { DeviceKey: input.DeviceKey }),
        ...(input.DeviceRememberedStatus !== undefined &&
            input.DeviceRememberedStatus !== null && { DeviceRememberedStatus: input.DeviceRememberedStatus }),
    };
};
const serializeAws_json1_1UpdateGroupRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
        ...(input.Precedence !== undefined && input.Precedence !== null && { Precedence: input.Precedence }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1UpdateIdentityProviderRequest = (input, context) => {
    return {
        ...(input.AttributeMapping !== undefined &&
            input.AttributeMapping !== null && {
            AttributeMapping: serializeAws_json1_1AttributeMappingType(input.AttributeMapping, context),
        }),
        ...(input.IdpIdentifiers !== undefined &&
            input.IdpIdentifiers !== null && {
            IdpIdentifiers: serializeAws_json1_1IdpIdentifiersListType(input.IdpIdentifiers, context),
        }),
        ...(input.ProviderDetails !== undefined &&
            input.ProviderDetails !== null && {
            ProviderDetails: serializeAws_json1_1ProviderDetailsType(input.ProviderDetails, context),
        }),
        ...(input.ProviderName !== undefined && input.ProviderName !== null && { ProviderName: input.ProviderName }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1UpdateResourceServerRequest = (input, context) => {
    return {
        ...(input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Scopes !== undefined &&
            input.Scopes !== null && { Scopes: serializeAws_json1_1ResourceServerScopeListType(input.Scopes, context) }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1UpdateUserAttributesRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
        ...(input.ClientMetadata !== undefined &&
            input.ClientMetadata !== null && {
            ClientMetadata: serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context),
        }),
        ...(input.UserAttributes !== undefined &&
            input.UserAttributes !== null && {
            UserAttributes: serializeAws_json1_1AttributeListType(input.UserAttributes, context),
        }),
    };
};
const serializeAws_json1_1UpdateUserPoolClientRequest = (input, context) => {
    return {
        ...(input.AccessTokenValidity !== undefined &&
            input.AccessTokenValidity !== null && { AccessTokenValidity: input.AccessTokenValidity }),
        ...(input.AllowedOAuthFlows !== undefined &&
            input.AllowedOAuthFlows !== null && {
            AllowedOAuthFlows: serializeAws_json1_1OAuthFlowsType(input.AllowedOAuthFlows, context),
        }),
        ...(input.AllowedOAuthFlowsUserPoolClient !== undefined &&
            input.AllowedOAuthFlowsUserPoolClient !== null && {
            AllowedOAuthFlowsUserPoolClient: input.AllowedOAuthFlowsUserPoolClient,
        }),
        ...(input.AllowedOAuthScopes !== undefined &&
            input.AllowedOAuthScopes !== null && {
            AllowedOAuthScopes: serializeAws_json1_1ScopeListType(input.AllowedOAuthScopes, context),
        }),
        ...(input.AnalyticsConfiguration !== undefined &&
            input.AnalyticsConfiguration !== null && {
            AnalyticsConfiguration: serializeAws_json1_1AnalyticsConfigurationType(input.AnalyticsConfiguration, context),
        }),
        ...(input.CallbackURLs !== undefined &&
            input.CallbackURLs !== null && {
            CallbackURLs: serializeAws_json1_1CallbackURLsListType(input.CallbackURLs, context),
        }),
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.ClientName !== undefined && input.ClientName !== null && { ClientName: input.ClientName }),
        ...(input.DefaultRedirectURI !== undefined &&
            input.DefaultRedirectURI !== null && { DefaultRedirectURI: input.DefaultRedirectURI }),
        ...(input.ExplicitAuthFlows !== undefined &&
            input.ExplicitAuthFlows !== null && {
            ExplicitAuthFlows: serializeAws_json1_1ExplicitAuthFlowsListType(input.ExplicitAuthFlows, context),
        }),
        ...(input.IdTokenValidity !== undefined &&
            input.IdTokenValidity !== null && { IdTokenValidity: input.IdTokenValidity }),
        ...(input.LogoutURLs !== undefined &&
            input.LogoutURLs !== null && { LogoutURLs: serializeAws_json1_1LogoutURLsListType(input.LogoutURLs, context) }),
        ...(input.PreventUserExistenceErrors !== undefined &&
            input.PreventUserExistenceErrors !== null && { PreventUserExistenceErrors: input.PreventUserExistenceErrors }),
        ...(input.ReadAttributes !== undefined &&
            input.ReadAttributes !== null && {
            ReadAttributes: serializeAws_json1_1ClientPermissionListType(input.ReadAttributes, context),
        }),
        ...(input.RefreshTokenValidity !== undefined &&
            input.RefreshTokenValidity !== null && { RefreshTokenValidity: input.RefreshTokenValidity }),
        ...(input.SupportedIdentityProviders !== undefined &&
            input.SupportedIdentityProviders !== null && {
            SupportedIdentityProviders: serializeAws_json1_1SupportedIdentityProvidersListType(input.SupportedIdentityProviders, context),
        }),
        ...(input.TokenValidityUnits !== undefined &&
            input.TokenValidityUnits !== null && {
            TokenValidityUnits: serializeAws_json1_1TokenValidityUnitsType(input.TokenValidityUnits, context),
        }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.WriteAttributes !== undefined &&
            input.WriteAttributes !== null && {
            WriteAttributes: serializeAws_json1_1ClientPermissionListType(input.WriteAttributes, context),
        }),
    };
};
const serializeAws_json1_1UpdateUserPoolDomainRequest = (input, context) => {
    return {
        ...(input.CustomDomainConfig !== undefined &&
            input.CustomDomainConfig !== null && {
            CustomDomainConfig: serializeAws_json1_1CustomDomainConfigType(input.CustomDomainConfig, context),
        }),
        ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
    };
};
const serializeAws_json1_1UpdateUserPoolRequest = (input, context) => {
    return {
        ...(input.AccountRecoverySetting !== undefined &&
            input.AccountRecoverySetting !== null && {
            AccountRecoverySetting: serializeAws_json1_1AccountRecoverySettingType(input.AccountRecoverySetting, context),
        }),
        ...(input.AdminCreateUserConfig !== undefined &&
            input.AdminCreateUserConfig !== null && {
            AdminCreateUserConfig: serializeAws_json1_1AdminCreateUserConfigType(input.AdminCreateUserConfig, context),
        }),
        ...(input.AutoVerifiedAttributes !== undefined &&
            input.AutoVerifiedAttributes !== null && {
            AutoVerifiedAttributes: serializeAws_json1_1VerifiedAttributesListType(input.AutoVerifiedAttributes, context),
        }),
        ...(input.DeviceConfiguration !== undefined &&
            input.DeviceConfiguration !== null && {
            DeviceConfiguration: serializeAws_json1_1DeviceConfigurationType(input.DeviceConfiguration, context),
        }),
        ...(input.EmailConfiguration !== undefined &&
            input.EmailConfiguration !== null && {
            EmailConfiguration: serializeAws_json1_1EmailConfigurationType(input.EmailConfiguration, context),
        }),
        ...(input.EmailVerificationMessage !== undefined &&
            input.EmailVerificationMessage !== null && { EmailVerificationMessage: input.EmailVerificationMessage }),
        ...(input.EmailVerificationSubject !== undefined &&
            input.EmailVerificationSubject !== null && { EmailVerificationSubject: input.EmailVerificationSubject }),
        ...(input.LambdaConfig !== undefined &&
            input.LambdaConfig !== null && {
            LambdaConfig: serializeAws_json1_1LambdaConfigType(input.LambdaConfig, context),
        }),
        ...(input.MfaConfiguration !== undefined &&
            input.MfaConfiguration !== null && { MfaConfiguration: input.MfaConfiguration }),
        ...(input.Policies !== undefined &&
            input.Policies !== null && { Policies: serializeAws_json1_1UserPoolPolicyType(input.Policies, context) }),
        ...(input.SmsAuthenticationMessage !== undefined &&
            input.SmsAuthenticationMessage !== null && { SmsAuthenticationMessage: input.SmsAuthenticationMessage }),
        ...(input.SmsConfiguration !== undefined &&
            input.SmsConfiguration !== null && {
            SmsConfiguration: serializeAws_json1_1SmsConfigurationType(input.SmsConfiguration, context),
        }),
        ...(input.SmsVerificationMessage !== undefined &&
            input.SmsVerificationMessage !== null && { SmsVerificationMessage: input.SmsVerificationMessage }),
        ...(input.UserPoolAddOns !== undefined &&
            input.UserPoolAddOns !== null && {
            UserPoolAddOns: serializeAws_json1_1UserPoolAddOnsType(input.UserPoolAddOns, context),
        }),
        ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
        ...(input.UserPoolTags !== undefined &&
            input.UserPoolTags !== null && {
            UserPoolTags: serializeAws_json1_1UserPoolTagsType(input.UserPoolTags, context),
        }),
        ...(input.VerificationMessageTemplate !== undefined &&
            input.VerificationMessageTemplate !== null && {
            VerificationMessageTemplate: serializeAws_json1_1VerificationMessageTemplateType(input.VerificationMessageTemplate, context),
        }),
    };
};
const serializeAws_json1_1UserContextDataType = (input, context) => {
    return {
        ...(input.EncodedData !== undefined && input.EncodedData !== null && { EncodedData: input.EncodedData }),
    };
};
const serializeAws_json1_1UsernameAttributesListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1UsernameConfigurationType = (input, context) => {
    return {
        ...(input.CaseSensitive !== undefined && input.CaseSensitive !== null && { CaseSensitive: input.CaseSensitive }),
    };
};
const serializeAws_json1_1UserPoolAddOnsType = (input, context) => {
    return {
        ...(input.AdvancedSecurityMode !== undefined &&
            input.AdvancedSecurityMode !== null && { AdvancedSecurityMode: input.AdvancedSecurityMode }),
    };
};
const serializeAws_json1_1UserPoolPolicyType = (input, context) => {
    return {
        ...(input.PasswordPolicy !== undefined &&
            input.PasswordPolicy !== null && {
            PasswordPolicy: serializeAws_json1_1PasswordPolicyType(input.PasswordPolicy, context),
        }),
    };
};
const serializeAws_json1_1UserPoolTagsListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1UserPoolTagsType = (input, context) => {
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
const serializeAws_json1_1VerificationMessageTemplateType = (input, context) => {
    return {
        ...(input.DefaultEmailOption !== undefined &&
            input.DefaultEmailOption !== null && { DefaultEmailOption: input.DefaultEmailOption }),
        ...(input.EmailMessage !== undefined && input.EmailMessage !== null && { EmailMessage: input.EmailMessage }),
        ...(input.EmailMessageByLink !== undefined &&
            input.EmailMessageByLink !== null && { EmailMessageByLink: input.EmailMessageByLink }),
        ...(input.EmailSubject !== undefined && input.EmailSubject !== null && { EmailSubject: input.EmailSubject }),
        ...(input.EmailSubjectByLink !== undefined &&
            input.EmailSubjectByLink !== null && { EmailSubjectByLink: input.EmailSubjectByLink }),
        ...(input.SmsMessage !== undefined && input.SmsMessage !== null && { SmsMessage: input.SmsMessage }),
    };
};
const serializeAws_json1_1VerifiedAttributesListType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1VerifySoftwareTokenRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
        ...(input.FriendlyDeviceName !== undefined &&
            input.FriendlyDeviceName !== null && { FriendlyDeviceName: input.FriendlyDeviceName }),
        ...(input.Session !== undefined && input.Session !== null && { Session: input.Session }),
        ...(input.UserCode !== undefined && input.UserCode !== null && { UserCode: input.UserCode }),
    };
};
const serializeAws_json1_1VerifyUserAttributeRequest = (input, context) => {
    return {
        ...(input.AccessToken !== undefined && input.AccessToken !== null && { AccessToken: input.AccessToken }),
        ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
        ...(input.Code !== undefined && input.Code !== null && { Code: input.Code }),
    };
};
const deserializeAws_json1_1AccountRecoverySettingType = (output, context) => {
    return {
        RecoveryMechanisms: output.RecoveryMechanisms !== undefined && output.RecoveryMechanisms !== null
            ? deserializeAws_json1_1RecoveryMechanismsType(output.RecoveryMechanisms, context)
            : undefined,
    };
};
const deserializeAws_json1_1AccountTakeoverActionsType = (output, context) => {
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
const deserializeAws_json1_1AccountTakeoverActionType = (output, context) => {
    return {
        EventAction: output.EventAction !== undefined && output.EventAction !== null ? output.EventAction : undefined,
        Notify: output.Notify !== undefined && output.Notify !== null ? output.Notify : undefined,
    };
};
const deserializeAws_json1_1AccountTakeoverRiskConfigurationType = (output, context) => {
    return {
        Actions: output.Actions !== undefined && output.Actions !== null
            ? deserializeAws_json1_1AccountTakeoverActionsType(output.Actions, context)
            : undefined,
        NotifyConfiguration: output.NotifyConfiguration !== undefined && output.NotifyConfiguration !== null
            ? deserializeAws_json1_1NotifyConfigurationType(output.NotifyConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1AddCustomAttributesResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdminConfirmSignUpResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdminCreateUserConfigType = (output, context) => {
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
const deserializeAws_json1_1AdminCreateUserResponse = (output, context) => {
    return {
        User: output.User !== undefined && output.User !== null
            ? deserializeAws_json1_1UserType(output.User, context)
            : undefined,
    };
};
const deserializeAws_json1_1AdminDeleteUserAttributesResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdminDisableProviderForUserResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdminDisableUserResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdminEnableUserResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdminGetDeviceResponse = (output, context) => {
    return {
        Device: output.Device !== undefined && output.Device !== null
            ? deserializeAws_json1_1DeviceType(output.Device, context)
            : undefined,
    };
};
const deserializeAws_json1_1AdminGetUserResponse = (output, context) => {
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
const deserializeAws_json1_1AdminInitiateAuthResponse = (output, context) => {
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
const deserializeAws_json1_1AdminLinkProviderForUserResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdminListDevicesResponse = (output, context) => {
    return {
        Devices: output.Devices !== undefined && output.Devices !== null
            ? deserializeAws_json1_1DeviceListType(output.Devices, context)
            : undefined,
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
    };
};
const deserializeAws_json1_1AdminListGroupsForUserResponse = (output, context) => {
    return {
        Groups: output.Groups !== undefined && output.Groups !== null
            ? deserializeAws_json1_1GroupListType(output.Groups, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1AdminListUserAuthEventsResponse = (output, context) => {
    return {
        AuthEvents: output.AuthEvents !== undefined && output.AuthEvents !== null
            ? deserializeAws_json1_1AuthEventsType(output.AuthEvents, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1AdminResetUserPasswordResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdminRespondToAuthChallengeResponse = (output, context) => {
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
const deserializeAws_json1_1AdminSetUserMFAPreferenceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdminSetUserPasswordResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdminSetUserSettingsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdminUpdateAuthEventFeedbackResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdminUpdateDeviceStatusResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdminUpdateUserAttributesResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdminUserGlobalSignOutResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AliasAttributesListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AliasExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1AnalyticsConfigurationType = (output, context) => {
    return {
        ApplicationArn: output.ApplicationArn !== undefined && output.ApplicationArn !== null ? output.ApplicationArn : undefined,
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        ExternalId: output.ExternalId !== undefined && output.ExternalId !== null ? output.ExternalId : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        UserDataShared: output.UserDataShared !== undefined && output.UserDataShared !== null ? output.UserDataShared : undefined,
    };
};
const deserializeAws_json1_1AssociateSoftwareTokenResponse = (output, context) => {
    return {
        SecretCode: output.SecretCode !== undefined && output.SecretCode !== null ? output.SecretCode : undefined,
        Session: output.Session !== undefined && output.Session !== null ? output.Session : undefined,
    };
};
const deserializeAws_json1_1AttributeListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AttributeType(entry, context);
    });
};
const deserializeAws_json1_1AttributeMappingType = (output, context) => {
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
const deserializeAws_json1_1AttributeType = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1AuthenticationResultType = (output, context) => {
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
const deserializeAws_json1_1AuthEventsType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AuthEventType(entry, context);
    });
};
const deserializeAws_json1_1AuthEventType = (output, context) => {
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
const deserializeAws_json1_1BlockedIPRangeListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1CallbackURLsListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ChallengeParametersType = (output, context) => {
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
const deserializeAws_json1_1ChallengeResponseListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ChallengeResponseType(entry, context);
    });
};
const deserializeAws_json1_1ChallengeResponseType = (output, context) => {
    return {
        ChallengeName: output.ChallengeName !== undefined && output.ChallengeName !== null ? output.ChallengeName : undefined,
        ChallengeResponse: output.ChallengeResponse !== undefined && output.ChallengeResponse !== null
            ? output.ChallengeResponse
            : undefined,
    };
};
const deserializeAws_json1_1ChangePasswordResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ClientPermissionListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1CodeDeliveryDetailsListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CodeDeliveryDetailsType(entry, context);
    });
};
const deserializeAws_json1_1CodeDeliveryDetailsType = (output, context) => {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        DeliveryMedium: output.DeliveryMedium !== undefined && output.DeliveryMedium !== null ? output.DeliveryMedium : undefined,
        Destination: output.Destination !== undefined && output.Destination !== null ? output.Destination : undefined,
    };
};
const deserializeAws_json1_1CodeDeliveryFailureException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CodeMismatchException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CompromisedCredentialsActionsType = (output, context) => {
    return {
        EventAction: output.EventAction !== undefined && output.EventAction !== null ? output.EventAction : undefined,
    };
};
const deserializeAws_json1_1CompromisedCredentialsRiskConfigurationType = (output, context) => {
    return {
        Actions: output.Actions !== undefined && output.Actions !== null
            ? deserializeAws_json1_1CompromisedCredentialsActionsType(output.Actions, context)
            : undefined,
        EventFilter: output.EventFilter !== undefined && output.EventFilter !== null
            ? deserializeAws_json1_1EventFiltersType(output.EventFilter, context)
            : undefined,
    };
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ConfirmDeviceResponse = (output, context) => {
    return {
        UserConfirmationNecessary: output.UserConfirmationNecessary !== undefined && output.UserConfirmationNecessary !== null
            ? output.UserConfirmationNecessary
            : undefined,
    };
};
const deserializeAws_json1_1ConfirmForgotPasswordResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ConfirmSignUpResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateGroupResponse = (output, context) => {
    return {
        Group: output.Group !== undefined && output.Group !== null
            ? deserializeAws_json1_1GroupType(output.Group, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateIdentityProviderResponse = (output, context) => {
    return {
        IdentityProvider: output.IdentityProvider !== undefined && output.IdentityProvider !== null
            ? deserializeAws_json1_1IdentityProviderType(output.IdentityProvider, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateResourceServerResponse = (output, context) => {
    return {
        ResourceServer: output.ResourceServer !== undefined && output.ResourceServer !== null
            ? deserializeAws_json1_1ResourceServerType(output.ResourceServer, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateUserImportJobResponse = (output, context) => {
    return {
        UserImportJob: output.UserImportJob !== undefined && output.UserImportJob !== null
            ? deserializeAws_json1_1UserImportJobType(output.UserImportJob, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateUserPoolClientResponse = (output, context) => {
    return {
        UserPoolClient: output.UserPoolClient !== undefined && output.UserPoolClient !== null
            ? deserializeAws_json1_1UserPoolClientType(output.UserPoolClient, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateUserPoolDomainResponse = (output, context) => {
    return {
        CloudFrontDomain: output.CloudFrontDomain !== undefined && output.CloudFrontDomain !== null ? output.CloudFrontDomain : undefined,
    };
};
const deserializeAws_json1_1CreateUserPoolResponse = (output, context) => {
    return {
        UserPool: output.UserPool !== undefined && output.UserPool !== null
            ? deserializeAws_json1_1UserPoolType(output.UserPool, context)
            : undefined,
    };
};
const deserializeAws_json1_1CustomDomainConfigType = (output, context) => {
    return {
        CertificateArn: output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
    };
};
const deserializeAws_json1_1CustomEmailLambdaVersionConfigType = (output, context) => {
    return {
        LambdaArn: output.LambdaArn !== undefined && output.LambdaArn !== null ? output.LambdaArn : undefined,
        LambdaVersion: output.LambdaVersion !== undefined && output.LambdaVersion !== null ? output.LambdaVersion : undefined,
    };
};
const deserializeAws_json1_1CustomSMSLambdaVersionConfigType = (output, context) => {
    return {
        LambdaArn: output.LambdaArn !== undefined && output.LambdaArn !== null ? output.LambdaArn : undefined,
        LambdaVersion: output.LambdaVersion !== undefined && output.LambdaVersion !== null ? output.LambdaVersion : undefined,
    };
};
const deserializeAws_json1_1DeleteUserAttributesResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteUserPoolDomainResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeIdentityProviderResponse = (output, context) => {
    return {
        IdentityProvider: output.IdentityProvider !== undefined && output.IdentityProvider !== null
            ? deserializeAws_json1_1IdentityProviderType(output.IdentityProvider, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeResourceServerResponse = (output, context) => {
    return {
        ResourceServer: output.ResourceServer !== undefined && output.ResourceServer !== null
            ? deserializeAws_json1_1ResourceServerType(output.ResourceServer, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeRiskConfigurationResponse = (output, context) => {
    return {
        RiskConfiguration: output.RiskConfiguration !== undefined && output.RiskConfiguration !== null
            ? deserializeAws_json1_1RiskConfigurationType(output.RiskConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeUserImportJobResponse = (output, context) => {
    return {
        UserImportJob: output.UserImportJob !== undefined && output.UserImportJob !== null
            ? deserializeAws_json1_1UserImportJobType(output.UserImportJob, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeUserPoolClientResponse = (output, context) => {
    return {
        UserPoolClient: output.UserPoolClient !== undefined && output.UserPoolClient !== null
            ? deserializeAws_json1_1UserPoolClientType(output.UserPoolClient, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeUserPoolDomainResponse = (output, context) => {
    return {
        DomainDescription: output.DomainDescription !== undefined && output.DomainDescription !== null
            ? deserializeAws_json1_1DomainDescriptionType(output.DomainDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeUserPoolResponse = (output, context) => {
    return {
        UserPool: output.UserPool !== undefined && output.UserPool !== null
            ? deserializeAws_json1_1UserPoolType(output.UserPool, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeviceConfigurationType = (output, context) => {
    return {
        ChallengeRequiredOnNewDevice: output.ChallengeRequiredOnNewDevice !== undefined && output.ChallengeRequiredOnNewDevice !== null
            ? output.ChallengeRequiredOnNewDevice
            : undefined,
        DeviceOnlyRememberedOnUserPrompt: output.DeviceOnlyRememberedOnUserPrompt !== undefined && output.DeviceOnlyRememberedOnUserPrompt !== null
            ? output.DeviceOnlyRememberedOnUserPrompt
            : undefined,
    };
};
const deserializeAws_json1_1DeviceListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DeviceType(entry, context);
    });
};
const deserializeAws_json1_1DeviceType = (output, context) => {
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
const deserializeAws_json1_1DomainDescriptionType = (output, context) => {
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
const deserializeAws_json1_1DuplicateProviderException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1EmailConfigurationType = (output, context) => {
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
const deserializeAws_json1_1EnableSoftwareTokenMFAException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1EventContextDataType = (output, context) => {
    return {
        City: output.City !== undefined && output.City !== null ? output.City : undefined,
        Country: output.Country !== undefined && output.Country !== null ? output.Country : undefined,
        DeviceName: output.DeviceName !== undefined && output.DeviceName !== null ? output.DeviceName : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
    };
};
const deserializeAws_json1_1EventFeedbackType = (output, context) => {
    return {
        FeedbackDate: output.FeedbackDate !== undefined && output.FeedbackDate !== null
            ? new Date(Math.round(output.FeedbackDate * 1000))
            : undefined,
        FeedbackValue: output.FeedbackValue !== undefined && output.FeedbackValue !== null ? output.FeedbackValue : undefined,
        Provider: output.Provider !== undefined && output.Provider !== null ? output.Provider : undefined,
    };
};
const deserializeAws_json1_1EventFiltersType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1EventRiskType = (output, context) => {
    return {
        CompromisedCredentialsDetected: output.CompromisedCredentialsDetected !== undefined && output.CompromisedCredentialsDetected !== null
            ? output.CompromisedCredentialsDetected
            : undefined,
        RiskDecision: output.RiskDecision !== undefined && output.RiskDecision !== null ? output.RiskDecision : undefined,
        RiskLevel: output.RiskLevel !== undefined && output.RiskLevel !== null ? output.RiskLevel : undefined,
    };
};
const deserializeAws_json1_1ExpiredCodeException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ExplicitAuthFlowsListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ForgotPasswordResponse = (output, context) => {
    return {
        CodeDeliveryDetails: output.CodeDeliveryDetails !== undefined && output.CodeDeliveryDetails !== null
            ? deserializeAws_json1_1CodeDeliveryDetailsType(output.CodeDeliveryDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetCSVHeaderResponse = (output, context) => {
    return {
        CSVHeader: output.CSVHeader !== undefined && output.CSVHeader !== null
            ? deserializeAws_json1_1ListOfStringTypes(output.CSVHeader, context)
            : undefined,
        UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined,
    };
};
const deserializeAws_json1_1GetDeviceResponse = (output, context) => {
    return {
        Device: output.Device !== undefined && output.Device !== null
            ? deserializeAws_json1_1DeviceType(output.Device, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetGroupResponse = (output, context) => {
    return {
        Group: output.Group !== undefined && output.Group !== null
            ? deserializeAws_json1_1GroupType(output.Group, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetIdentityProviderByIdentifierResponse = (output, context) => {
    return {
        IdentityProvider: output.IdentityProvider !== undefined && output.IdentityProvider !== null
            ? deserializeAws_json1_1IdentityProviderType(output.IdentityProvider, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetSigningCertificateResponse = (output, context) => {
    return {
        Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
    };
};
const deserializeAws_json1_1GetUICustomizationResponse = (output, context) => {
    return {
        UICustomization: output.UICustomization !== undefined && output.UICustomization !== null
            ? deserializeAws_json1_1UICustomizationType(output.UICustomization, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetUserAttributeVerificationCodeResponse = (output, context) => {
    return {
        CodeDeliveryDetails: output.CodeDeliveryDetails !== undefined && output.CodeDeliveryDetails !== null
            ? deserializeAws_json1_1CodeDeliveryDetailsType(output.CodeDeliveryDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetUserPoolMfaConfigResponse = (output, context) => {
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
const deserializeAws_json1_1GetUserResponse = (output, context) => {
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
const deserializeAws_json1_1GlobalSignOutResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1GroupExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1GroupListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GroupType(entry, context);
    });
};
const deserializeAws_json1_1GroupType = (output, context) => {
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
const deserializeAws_json1_1IdentityProviderType = (output, context) => {
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
const deserializeAws_json1_1IdpIdentifiersListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1InitiateAuthResponse = (output, context) => {
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
const deserializeAws_json1_1InternalErrorException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidEmailRoleAccessPolicyException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidLambdaResponseException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidOAuthFlowException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidPasswordException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidSmsRoleAccessPolicyException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidSmsRoleTrustRelationshipException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidUserPoolConfigurationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LambdaConfigType = (output, context) => {
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
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListDevicesResponse = (output, context) => {
    return {
        Devices: output.Devices !== undefined && output.Devices !== null
            ? deserializeAws_json1_1DeviceListType(output.Devices, context)
            : undefined,
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
    };
};
const deserializeAws_json1_1ListGroupsResponse = (output, context) => {
    return {
        Groups: output.Groups !== undefined && output.Groups !== null
            ? deserializeAws_json1_1GroupListType(output.Groups, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListIdentityProvidersResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Providers: output.Providers !== undefined && output.Providers !== null
            ? deserializeAws_json1_1ProvidersListType(output.Providers, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListOfStringTypes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ListResourceServersResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResourceServers: output.ResourceServers !== undefined && output.ResourceServers !== null
            ? deserializeAws_json1_1ResourceServersListType(output.ResourceServers, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1UserPoolTagsType(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListUserImportJobsResponse = (output, context) => {
    return {
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
        UserImportJobs: output.UserImportJobs !== undefined && output.UserImportJobs !== null
            ? deserializeAws_json1_1UserImportJobsListType(output.UserImportJobs, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListUserPoolClientsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        UserPoolClients: output.UserPoolClients !== undefined && output.UserPoolClients !== null
            ? deserializeAws_json1_1UserPoolClientListType(output.UserPoolClients, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListUserPoolsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        UserPools: output.UserPools !== undefined && output.UserPools !== null
            ? deserializeAws_json1_1UserPoolListType(output.UserPools, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListUsersInGroupResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Users: output.Users !== undefined && output.Users !== null
            ? deserializeAws_json1_1UsersListType(output.Users, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListUsersResponse = (output, context) => {
    return {
        PaginationToken: output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
        Users: output.Users !== undefined && output.Users !== null
            ? deserializeAws_json1_1UsersListType(output.Users, context)
            : undefined,
    };
};
const deserializeAws_json1_1LogoutURLsListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1MessageTemplateType = (output, context) => {
    return {
        EmailMessage: output.EmailMessage !== undefined && output.EmailMessage !== null ? output.EmailMessage : undefined,
        EmailSubject: output.EmailSubject !== undefined && output.EmailSubject !== null ? output.EmailSubject : undefined,
        SMSMessage: output.SMSMessage !== undefined && output.SMSMessage !== null ? output.SMSMessage : undefined,
    };
};
const deserializeAws_json1_1MFAMethodNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MFAOptionListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MFAOptionType(entry, context);
    });
};
const deserializeAws_json1_1MFAOptionType = (output, context) => {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        DeliveryMedium: output.DeliveryMedium !== undefined && output.DeliveryMedium !== null ? output.DeliveryMedium : undefined,
    };
};
const deserializeAws_json1_1NewDeviceMetadataType = (output, context) => {
    return {
        DeviceGroupKey: output.DeviceGroupKey !== undefined && output.DeviceGroupKey !== null ? output.DeviceGroupKey : undefined,
        DeviceKey: output.DeviceKey !== undefined && output.DeviceKey !== null ? output.DeviceKey : undefined,
    };
};
const deserializeAws_json1_1NotAuthorizedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NotifyConfigurationType = (output, context) => {
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
const deserializeAws_json1_1NotifyEmailType = (output, context) => {
    return {
        HtmlBody: output.HtmlBody !== undefined && output.HtmlBody !== null ? output.HtmlBody : undefined,
        Subject: output.Subject !== undefined && output.Subject !== null ? output.Subject : undefined,
        TextBody: output.TextBody !== undefined && output.TextBody !== null ? output.TextBody : undefined,
    };
};
const deserializeAws_json1_1NumberAttributeConstraintsType = (output, context) => {
    return {
        MaxValue: output.MaxValue !== undefined && output.MaxValue !== null ? output.MaxValue : undefined,
        MinValue: output.MinValue !== undefined && output.MinValue !== null ? output.MinValue : undefined,
    };
};
const deserializeAws_json1_1OAuthFlowsType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PasswordPolicyType = (output, context) => {
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
const deserializeAws_json1_1PasswordResetRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PreconditionNotMetException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ProviderDescription = (output, context) => {
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
const deserializeAws_json1_1ProviderDetailsType = (output, context) => {
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
const deserializeAws_json1_1ProvidersListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProviderDescription(entry, context);
    });
};
const deserializeAws_json1_1RecoveryMechanismsType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RecoveryOptionType(entry, context);
    });
};
const deserializeAws_json1_1RecoveryOptionType = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
    };
};
const deserializeAws_json1_1ResendConfirmationCodeResponse = (output, context) => {
    return {
        CodeDeliveryDetails: output.CodeDeliveryDetails !== undefined && output.CodeDeliveryDetails !== null
            ? deserializeAws_json1_1CodeDeliveryDetailsType(output.CodeDeliveryDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceServerScopeListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceServerScopeType(entry, context);
    });
};
const deserializeAws_json1_1ResourceServerScopeType = (output, context) => {
    return {
        ScopeDescription: output.ScopeDescription !== undefined && output.ScopeDescription !== null ? output.ScopeDescription : undefined,
        ScopeName: output.ScopeName !== undefined && output.ScopeName !== null ? output.ScopeName : undefined,
    };
};
const deserializeAws_json1_1ResourceServersListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceServerType(entry, context);
    });
};
const deserializeAws_json1_1ResourceServerType = (output, context) => {
    return {
        Identifier: output.Identifier !== undefined && output.Identifier !== null ? output.Identifier : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Scopes: output.Scopes !== undefined && output.Scopes !== null
            ? deserializeAws_json1_1ResourceServerScopeListType(output.Scopes, context)
            : undefined,
        UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined,
    };
};
const deserializeAws_json1_1RespondToAuthChallengeResponse = (output, context) => {
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
const deserializeAws_json1_1RiskConfigurationType = (output, context) => {
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
const deserializeAws_json1_1RiskExceptionConfigurationType = (output, context) => {
    return {
        BlockedIPRangeList: output.BlockedIPRangeList !== undefined && output.BlockedIPRangeList !== null
            ? deserializeAws_json1_1BlockedIPRangeListType(output.BlockedIPRangeList, context)
            : undefined,
        SkippedIPRangeList: output.SkippedIPRangeList !== undefined && output.SkippedIPRangeList !== null
            ? deserializeAws_json1_1SkippedIPRangeListType(output.SkippedIPRangeList, context)
            : undefined,
    };
};
const deserializeAws_json1_1SchemaAttributesListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SchemaAttributeType(entry, context);
    });
};
const deserializeAws_json1_1SchemaAttributeType = (output, context) => {
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
const deserializeAws_json1_1ScopeDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ScopeListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SetRiskConfigurationResponse = (output, context) => {
    return {
        RiskConfiguration: output.RiskConfiguration !== undefined && output.RiskConfiguration !== null
            ? deserializeAws_json1_1RiskConfigurationType(output.RiskConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1SetUICustomizationResponse = (output, context) => {
    return {
        UICustomization: output.UICustomization !== undefined && output.UICustomization !== null
            ? deserializeAws_json1_1UICustomizationType(output.UICustomization, context)
            : undefined,
    };
};
const deserializeAws_json1_1SetUserMFAPreferenceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1SetUserPoolMfaConfigResponse = (output, context) => {
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
const deserializeAws_json1_1SetUserSettingsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1SignUpResponse = (output, context) => {
    return {
        CodeDeliveryDetails: output.CodeDeliveryDetails !== undefined && output.CodeDeliveryDetails !== null
            ? deserializeAws_json1_1CodeDeliveryDetailsType(output.CodeDeliveryDetails, context)
            : undefined,
        UserConfirmed: output.UserConfirmed !== undefined && output.UserConfirmed !== null ? output.UserConfirmed : undefined,
        UserSub: output.UserSub !== undefined && output.UserSub !== null ? output.UserSub : undefined,
    };
};
const deserializeAws_json1_1SkippedIPRangeListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SmsConfigurationType = (output, context) => {
    return {
        ExternalId: output.ExternalId !== undefined && output.ExternalId !== null ? output.ExternalId : undefined,
        SnsCallerArn: output.SnsCallerArn !== undefined && output.SnsCallerArn !== null ? output.SnsCallerArn : undefined,
    };
};
const deserializeAws_json1_1SmsMfaConfigType = (output, context) => {
    return {
        SmsAuthenticationMessage: output.SmsAuthenticationMessage !== undefined && output.SmsAuthenticationMessage !== null
            ? output.SmsAuthenticationMessage
            : undefined,
        SmsConfiguration: output.SmsConfiguration !== undefined && output.SmsConfiguration !== null
            ? deserializeAws_json1_1SmsConfigurationType(output.SmsConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1SoftwareTokenMfaConfigType = (output, context) => {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
const deserializeAws_json1_1SoftwareTokenMFANotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1StartUserImportJobResponse = (output, context) => {
    return {
        UserImportJob: output.UserImportJob !== undefined && output.UserImportJob !== null
            ? deserializeAws_json1_1UserImportJobType(output.UserImportJob, context)
            : undefined,
    };
};
const deserializeAws_json1_1StopUserImportJobResponse = (output, context) => {
    return {
        UserImportJob: output.UserImportJob !== undefined && output.UserImportJob !== null
            ? deserializeAws_json1_1UserImportJobType(output.UserImportJob, context)
            : undefined,
    };
};
const deserializeAws_json1_1StringAttributeConstraintsType = (output, context) => {
    return {
        MaxLength: output.MaxLength !== undefined && output.MaxLength !== null ? output.MaxLength : undefined,
        MinLength: output.MinLength !== undefined && output.MinLength !== null ? output.MinLength : undefined,
    };
};
const deserializeAws_json1_1SupportedIdentityProvidersListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1TokenValidityUnitsType = (output, context) => {
    return {
        AccessToken: output.AccessToken !== undefined && output.AccessToken !== null ? output.AccessToken : undefined,
        IdToken: output.IdToken !== undefined && output.IdToken !== null ? output.IdToken : undefined,
        RefreshToken: output.RefreshToken !== undefined && output.RefreshToken !== null ? output.RefreshToken : undefined,
    };
};
const deserializeAws_json1_1TooManyFailedAttemptsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TooManyRequestsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UICustomizationType = (output, context) => {
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
const deserializeAws_json1_1UnexpectedLambdaException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UnsupportedIdentityProviderException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UnsupportedUserStateException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateAuthEventFeedbackResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateDeviceStatusResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateGroupResponse = (output, context) => {
    return {
        Group: output.Group !== undefined && output.Group !== null
            ? deserializeAws_json1_1GroupType(output.Group, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateIdentityProviderResponse = (output, context) => {
    return {
        IdentityProvider: output.IdentityProvider !== undefined && output.IdentityProvider !== null
            ? deserializeAws_json1_1IdentityProviderType(output.IdentityProvider, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateResourceServerResponse = (output, context) => {
    return {
        ResourceServer: output.ResourceServer !== undefined && output.ResourceServer !== null
            ? deserializeAws_json1_1ResourceServerType(output.ResourceServer, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateUserAttributesResponse = (output, context) => {
    return {
        CodeDeliveryDetailsList: output.CodeDeliveryDetailsList !== undefined && output.CodeDeliveryDetailsList !== null
            ? deserializeAws_json1_1CodeDeliveryDetailsListType(output.CodeDeliveryDetailsList, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateUserPoolClientResponse = (output, context) => {
    return {
        UserPoolClient: output.UserPoolClient !== undefined && output.UserPoolClient !== null
            ? deserializeAws_json1_1UserPoolClientType(output.UserPoolClient, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateUserPoolDomainResponse = (output, context) => {
    return {
        CloudFrontDomain: output.CloudFrontDomain !== undefined && output.CloudFrontDomain !== null ? output.CloudFrontDomain : undefined,
    };
};
const deserializeAws_json1_1UpdateUserPoolResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UserImportInProgressException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UserImportJobsListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UserImportJobType(entry, context);
    });
};
const deserializeAws_json1_1UserImportJobType = (output, context) => {
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
const deserializeAws_json1_1UserLambdaValidationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UserMFASettingListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1UsernameAttributesListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1UsernameConfigurationType = (output, context) => {
    return {
        CaseSensitive: output.CaseSensitive !== undefined && output.CaseSensitive !== null ? output.CaseSensitive : undefined,
    };
};
const deserializeAws_json1_1UsernameExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UserNotConfirmedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UserNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UserPoolAddOnNotEnabledException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UserPoolAddOnsType = (output, context) => {
    return {
        AdvancedSecurityMode: output.AdvancedSecurityMode !== undefined && output.AdvancedSecurityMode !== null
            ? output.AdvancedSecurityMode
            : undefined,
    };
};
const deserializeAws_json1_1UserPoolClientDescription = (output, context) => {
    return {
        ClientId: output.ClientId !== undefined && output.ClientId !== null ? output.ClientId : undefined,
        ClientName: output.ClientName !== undefined && output.ClientName !== null ? output.ClientName : undefined,
        UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined,
    };
};
const deserializeAws_json1_1UserPoolClientListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UserPoolClientDescription(entry, context);
    });
};
const deserializeAws_json1_1UserPoolClientType = (output, context) => {
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
const deserializeAws_json1_1UserPoolDescriptionType = (output, context) => {
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
const deserializeAws_json1_1UserPoolListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UserPoolDescriptionType(entry, context);
    });
};
const deserializeAws_json1_1UserPoolPolicyType = (output, context) => {
    return {
        PasswordPolicy: output.PasswordPolicy !== undefined && output.PasswordPolicy !== null
            ? deserializeAws_json1_1PasswordPolicyType(output.PasswordPolicy, context)
            : undefined,
    };
};
const deserializeAws_json1_1UserPoolTaggingException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UserPoolTagsType = (output, context) => {
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
const deserializeAws_json1_1UserPoolType = (output, context) => {
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
const deserializeAws_json1_1UsersListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UserType(entry, context);
    });
};
const deserializeAws_json1_1UserType = (output, context) => {
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
const deserializeAws_json1_1VerificationMessageTemplateType = (output, context) => {
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
const deserializeAws_json1_1VerifiedAttributesListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1VerifySoftwareTokenResponse = (output, context) => {
    return {
        Session: output.Session !== undefined && output.Session !== null ? output.Session : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1VerifyUserAttributeResponse = (output, context) => {
    return {};
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